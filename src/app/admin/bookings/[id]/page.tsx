/**
 * Admin Booking Detail Page
 *
 * View and manage individual booking details
 */

import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { prisma } from '@/lib/db'

async function getBooking(id: string) {
  try {
    const booking = await prisma.booking.findUnique({
      where: { id }
    })
    return booking
  } catch (error) {
    console.error('Error fetching booking:', error)
    return null
  }
}

export default async function BookingDetailPage({
  params
}: {
  params: { id: string }
}) {
  const booking = await getBooking(params.id)

  if (!booking) {
    notFound()
  }

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    confirmed: 'bg-green-100 text-green-800 border-green-200',
    completed: 'bg-blue-100 text-blue-800 border-blue-200',
    cancelled: 'bg-red-100 text-red-800 border-red-200'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/admin/bookings"
            className="text-sm text-gray-600 hover:text-gray-900 mb-2 inline-flex items-center gap-1"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Bookings
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            Booking #{booking.id.slice(0, 8)}
          </h1>
          <p className="mt-2 text-gray-600">
            Created on {new Date(booking.createdAt).toLocaleDateString('en-GB')} at{' '}
            {new Date(booking.createdAt).toLocaleTimeString('en-GB', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
        <div>
          <span
            className={`inline-block rounded-full px-4 py-2 text-sm font-medium border ${
              statusColors[booking.status] || statusColors.pending
            }`}
          >
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Details - 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Customer Information */}
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Full Name</p>
                  <p className="mt-1 text-gray-900">{booking.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Email</p>
                  <p className="mt-1">
                    <a
                      href={`mailto:${booking.email}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {booking.email}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Phone</p>
                  <p className="mt-1">
                    <a
                      href={`tel:${booking.phone}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {booking.phone}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Postcode</p>
                  <p className="mt-1 text-gray-900">{booking.postcode}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm font-medium text-gray-600">Address</p>
                  <p className="mt-1 text-gray-900">{booking.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Details */}
          <Card>
            <CardHeader>
              <CardTitle>Service Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Service Type</p>
                  <p className="mt-1 text-gray-900">
                    {booking.serviceType
                      .split('-')
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(' ')}
                  </p>
                </div>
                {booking.numberOfRooms && (
                  <div>
                    <p className="text-sm font-medium text-gray-600">Number of Rooms</p>
                    <p className="mt-1 text-gray-900">{booking.numberOfRooms}</p>
                  </div>
                )}
                {booking.squareMeters && (
                  <div>
                    <p className="text-sm font-medium text-gray-600">Square Meters</p>
                    <p className="mt-1 text-gray-900">{booking.squareMeters}m²</p>
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-gray-600">Stain Removal</p>
                  <p className="mt-1 text-gray-900">
                    {booking.stainRemoval ? (
                      <span className="text-green-600 font-medium">Yes (+£15.00)</span>
                    ) : (
                      <span className="text-gray-500">No</span>
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Distance</p>
                  <p className="mt-1 text-gray-900">{booking.distance.toFixed(1)} miles</p>
                </div>
              </div>
              {booking.specialRequirements && (
                <div>
                  <p className="text-sm font-medium text-gray-600">Special Requirements</p>
                  <p className="mt-1 text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    {booking.specialRequirements}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Scheduling Information */}
          <Card>
            <CardHeader>
              <CardTitle>Scheduling Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Preferred Date</p>
                  <p className="mt-1 text-gray-900">
                    {new Date(booking.preferredDate).toLocaleDateString('en-GB', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Preferred Time</p>
                  <p className="mt-1 text-gray-900 capitalize">{booking.preferredTime}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photos */}
          {booking.photoUrls && booking.photoUrls.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Uploaded Photos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {booking.photoUrls.map((url, index) => (
                    <div key={index} className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={url}
                        alt={`Photo ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-6">
          {/* Pricing Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Pricing Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Service Cost</span>
                <span className="font-medium text-gray-900">
                  £{booking.serviceCost.toFixed(2)}
                </span>
              </div>
              {booking.stainRemoval && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Stain Removal</span>
                  <span className="font-medium text-gray-900">£15.00</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Travel Cost</span>
                <span className="font-medium text-gray-900">
                  {booking.travelCost > 0 ? (
                    `£${booking.travelCost.toFixed(2)}`
                  ) : (
                    <span className="text-green-600">FREE</span>
                  )}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="text-xl font-bold text-primary-600">
                  £{booking.totalCost.toFixed(2)}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Status Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Update Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-600">
                Current status:{' '}
                <span className="font-medium text-gray-900 capitalize">
                  {booking.status}
                </span>
              </p>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium">
                  Mark as Pending
                </button>
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                  Mark as Confirmed
                </button>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Mark as Completed
                </button>
                <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                  Mark as Cancelled
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Note: Status update functionality requires implementation of Server Actions
              </p>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <a
                href={`mailto:${booking.email}?subject=Re: Your Booking ${booking.id.slice(0, 8)}`}
                className="block w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium text-center"
              >
                Send Email
              </a>
              <a
                href={`tel:${booking.phone}`}
                className="block w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium text-center"
              >
                Call Customer
              </a>
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                Print Details
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
