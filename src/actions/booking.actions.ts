/**
 * Booking Server Actions
 *
 * Server-side actions for creating and managing bookings
 */

'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'
import { bookingSchema, bookingStatusUpdateSchema } from '@/lib/validation/booking.schema'
import { calculateDistance } from '@/lib/utils/distance'
import { calculateQuote } from '@/lib/utils/pricing'
import { sendBookingConfirmation, sendAdminNotification, sendBookingStatusUpdate } from '@/lib/utils/email'
import { exportBookingToSheets, updateBookingStatusInSheets } from '@/lib/utils/sheets'
import type { BookingStatus } from '@prisma/client'
import type { z } from 'zod'

/**
 * Create a new booking
 *
 * @param formData - Booking form data
 * @returns Success result with booking ID or error
 */
export async function createBooking(formData: z.infer<typeof bookingSchema>) {
  try {
    // 1. Validate input
    const validated = bookingSchema.parse(formData)

    // 2. Calculate distance from Manchester
    const distance = await calculateDistance('M1 1AA', validated.postcode)

    // Check service area
    if (distance > 100) {
      return {
        success: false,
        error: 'Sorry, we only service areas within 100 miles of Manchester. Your location is ' + distance + ' miles away.'
      }
    }

    // 3. Calculate pricing
    const quote = calculateQuote({
      serviceType: validated.serviceType,
      propertyType: validated.propertyType,
      numberOfRooms: validated.numberOfRooms,
      squareMeters: validated.squareMeters,
      stainRemoval: validated.stainRemoval,
      distance
    })

    // 4. Create booking in database
    const booking = await prisma.booking.create({
      data: {
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        address: validated.address,
        postcode: validated.postcode,
        serviceType: validated.serviceType,
        propertyType: validated.propertyType,
        propertySize: validated.propertySize,
        numberOfRooms: validated.numberOfRooms,
        squareMeters: validated.squareMeters,
        stainRemoval: validated.stainRemoval,
        additionalNotes: validated.additionalNotes,
        photoUrls: validated.photoUrls || [],
        preferredDate: validated.preferredDate,
        distance,
        travelCost: quote.travelCost,
        serviceCost: quote.serviceCost,
        totalCost: quote.totalCost,
        status: 'PENDING'
      }
    })

    // 5. Send emails asynchronously (don't await - non-blocking)
    Promise.all([
      sendBookingConfirmation(booking),
      sendAdminNotification(booking)
    ]).catch(error => {
      console.error('Failed to send booking emails:', error)
    })

    // 6. Export to Google Sheets asynchronously
    exportBookingToSheets(booking).catch(error => {
      console.error('Failed to export booking to Google Sheets:', error)
    })

    // 7. Revalidate admin pages
    revalidatePath('/admin/leads')
    revalidatePath('/admin/dashboard')

    return {
      success: true,
      bookingId: booking.id,
      message: 'Booking created successfully! Check your email for confirmation.'
    }
  } catch (error) {
    console.error('Error creating booking:', error)

    if (error instanceof Error) {
      return {
        success: false,
        error: error.message
      }
    }

    return {
      success: false,
      error: 'Failed to create booking. Please try again.'
    }
  }
}

/**
 * Get a booking by ID
 *
 * @param id - Booking ID
 * @returns Booking object or null
 */
export async function getBookingById(id: string) {
  try {
    const booking = await prisma.booking.findUnique({
      where: { id }
    })

    return {
      success: true,
      booking
    }
  } catch (error) {
    console.error('Error fetching booking:', error)
    return {
      success: false,
      error: 'Failed to fetch booking'
    }
  }
}

/**
 * Get all bookings with optional filters
 *
 * @param filters - Filter options
 * @returns Array of bookings
 */
export async function getBookings(filters?: {
  status?: BookingStatus
  limit?: number
  offset?: number
  searchTerm?: string
}) {
  try {
    const {
      status,
      limit = 50,
      offset = 0,
      searchTerm
    } = filters || {}

    const where: any = {}

    if (status) {
      where.status = status
    }

    if (searchTerm) {
      where.OR = [
        { name: { contains: searchTerm, mode: 'insensitive' } },
        { email: { contains: searchTerm, mode: 'insensitive' } },
        { phone: { contains: searchTerm } },
        { postcode: { contains: searchTerm, mode: 'insensitive' } }
      ]
    }

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset
      }),
      prisma.booking.count({ where })
    ])

    return {
      success: true,
      bookings,
      total,
      hasMore: offset + limit < total
    }
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return {
      success: false,
      error: 'Failed to fetch bookings',
      bookings: [],
      total: 0,
      hasMore: false
    }
  }
}

/**
 * Update booking status
 *
 * @param data - Status update data
 * @returns Updated booking
 */
export async function updateBookingStatus(
  data: z.infer<typeof bookingStatusUpdateSchema>
) {
  try {
    const validated = bookingStatusUpdateSchema.parse(data)

    const booking = await prisma.booking.update({
      where: { id: validated.id },
      data: {
        status: validated.status,
        adminNotes: validated.adminNotes,
        completedAt: validated.status === 'COMPLETED' ? new Date() : undefined
      }
    })

    // Send status update email asynchronously
    sendBookingStatusUpdate(booking, validated.status).catch(error => {
      console.error('Failed to send status update email:', error)
    })

    // Update in Google Sheets asynchronously
    updateBookingStatusInSheets(
      booking.id,
      validated.status,
      booking.completedAt || undefined
    ).catch(error => {
      console.error('Failed to update booking in Google Sheets:', error)
    })

    // Revalidate relevant pages
    revalidatePath('/admin/leads')
    revalidatePath(`/admin/leads/${booking.id}`)
    revalidatePath('/admin/dashboard')

    return {
      success: true,
      booking,
      message: 'Booking status updated successfully'
    }
  } catch (error) {
    console.error('Error updating booking status:', error)

    if (error instanceof Error) {
      return {
        success: false,
        error: error.message
      }
    }

    return {
      success: false,
      error: 'Failed to update booking status'
    }
  }
}

/**
 * Delete a booking (admin only - soft delete by setting to CANCELLED)
 *
 * @param id - Booking ID
 * @returns Success result
 */
export async function deleteBooking(id: string) {
  try {
    const booking = await prisma.booking.update({
      where: { id },
      data: {
        status: 'CANCELLED',
        adminNotes: 'Deleted by admin'
      }
    })

    revalidatePath('/admin/leads')
    revalidatePath('/admin/dashboard')

    return {
      success: true,
      message: 'Booking cancelled successfully'
    }
  } catch (error) {
    console.error('Error deleting booking:', error)
    return {
      success: false,
      error: 'Failed to delete booking'
    }
  }
}

/**
 * Get booking statistics for dashboard
 *
 * @returns Booking statistics
 */
export async function getBookingStats() {
  try {
    const [
      totalBookings,
      pendingBookings,
      confirmedBookings,
      completedBookings,
      recentBookings
    ] = await Promise.all([
      prisma.booking.count(),
      prisma.booking.count({ where: { status: 'PENDING' } }),
      prisma.booking.count({ where: { status: 'CONFIRMED' } }),
      prisma.booking.count({ where: { status: 'COMPLETED' } }),
      prisma.booking.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          name: true,
          serviceType: true,
          totalCost: true,
          status: true,
          createdAt: true
        }
      })
    ])

    // Calculate total revenue from completed bookings
    const revenueResult = await prisma.booking.aggregate({
      where: { status: 'COMPLETED' },
      _sum: {
        totalCost: true
      }
    })

    return {
      success: true,
      stats: {
        totalBookings,
        pendingBookings,
        confirmedBookings,
        completedBookings,
        totalRevenue: revenueResult._sum.totalCost || 0,
        recentBookings
      }
    }
  } catch (error) {
    console.error('Error fetching booking stats:', error)
    return {
      success: false,
      error: 'Failed to fetch booking statistics'
    }
  }
}
