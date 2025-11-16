/**
 * Email Utility
 *
 * Handles sending transactional emails using Nodemailer
 * - Booking confirmations to customers
 * - Booking notifications to admin
 * - Status update notifications
 */

import nodemailer from 'nodemailer'
import type { Booking, BookingStatus } from '@prisma/client'
import { formatPrice } from './pricing'
import { format } from 'date-fns'

/**
 * Create and configure Nodemailer transporter
 */
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports (587, 25)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  })
}

/**
 * Send booking confirmation email to customer
 *
 * @param booking - Booking object from database
 */
export async function sendBookingConfirmation(booking: Booking): Promise<void> {
  const transporter = createTransporter()
  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Method Clean'

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1890ff; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .details { background: white; padding: 15px; margin: 15px 0; border-left: 4px solid #1890ff; }
        .detail-row { padding: 8px 0; border-bottom: 1px solid #eee; }
        .detail-label { font-weight: bold; display: inline-block; width: 150px; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
        .button { display: inline-block; padding: 12px 24px; background: #52c41a; color: white; text-decoration: none; border-radius: 4px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${businessName}</h1>
          <p>Booking Confirmation</p>
        </div>

        <div class="content">
          <h2>Thank you for your booking, ${booking.name}!</h2>
          <p>We've received your booking request and will review it shortly. You'll receive a confirmation within 24 hours.</p>

          <div class="details">
            <h3>Booking Details</h3>
            <div class="detail-row">
              <span class="detail-label">Booking ID:</span>
              <span>${booking.id}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Service:</span>
              <span>${booking.serviceType}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Property Type:</span>
              <span>${booking.propertyType}</span>
            </div>
            ${booking.numberOfRooms ? `
            <div class="detail-row">
              <span class="detail-label">Number of Rooms:</span>
              <span>${booking.numberOfRooms}</span>
            </div>
            ` : ''}
            <div class="detail-row">
              <span class="detail-label">Address:</span>
              <span>${booking.address}, ${booking.postcode}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Preferred Date:</span>
              <span>${format(new Date(booking.preferredDate), 'EEEE, d MMMM yyyy')}</span>
            </div>
          </div>

          <div class="details">
            <h3>Price Breakdown</h3>
            <div class="detail-row">
              <span class="detail-label">Service Cost:</span>
              <span>${formatPrice(booking.serviceCost)}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Travel Cost:</span>
              <span>${formatPrice(booking.travelCost)}</span>
            </div>
            <div class="detail-row" style="font-size: 18px; font-weight: bold; border-bottom: none;">
              <span class="detail-label">Total:</span>
              <span>${formatPrice(booking.totalCost)}</span>
            </div>
          </div>

          ${booking.additionalNotes ? `
          <div class="details">
            <h3>Your Notes</h3>
            <p>${booking.additionalNotes}</p>
          </div>
          ` : ''}

          <p>If you have any questions, please don't hesitate to contact us.</p>
        </div>

        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} ${businessName}. All rights reserved.</p>
          <p>Professional carpet cleaning services in Manchester and surrounding areas.</p>
        </div>
      </div>
    </body>
    </html>
  `

  await transporter.sendMail({
    from: `"${businessName}" <${process.env.SMTP_USER}>`,
    to: booking.email,
    subject: `Booking Confirmation - ${businessName}`,
    html
  })
}

/**
 * Send booking notification email to admin
 *
 * @param booking - Booking object from database
 */
export async function sendAdminNotification(booking: Booking): Promise<void> {
  const transporter = createTransporter()
  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Method Clean'
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1890ff; color: white; padding: 20px; }
        .content { padding: 20px; }
        .details { background: #f9f9f9; padding: 15px; margin: 15px 0; }
        .detail-row { padding: 8px 0; }
        .detail-label { font-weight: bold; display: inline-block; width: 150px; }
        .button { display: inline-block; padding: 12px 24px; background: #52c41a; color: white; text-decoration: none; border-radius: 4px; margin: 15px 0; }
        .urgent { color: #ff4d4f; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Booking Received</h1>
          <p class="urgent">Action Required</p>
        </div>

        <div class="content">
          <p>A new booking has been submitted and requires your attention.</p>

          <div class="details">
            <h3>Customer Information</h3>
            <div class="detail-row">
              <span class="detail-label">Name:</span>
              <span>${booking.name}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span><a href="mailto:${booking.email}">${booking.email}</a></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span><a href="tel:${booking.phone}">${booking.phone}</a></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Address:</span>
              <span>${booking.address}, ${booking.postcode}</span>
            </div>
          </div>

          <div class="details">
            <h3>Service Details</h3>
            <div class="detail-row">
              <span class="detail-label">Service:</span>
              <span>${booking.serviceType}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Property Type:</span>
              <span>${booking.propertyType}</span>
            </div>
            ${booking.numberOfRooms ? `
            <div class="detail-row">
              <span class="detail-label">Rooms:</span>
              <span>${booking.numberOfRooms}</span>
            </div>
            ` : ''}
            ${booking.squareMeters ? `
            <div class="detail-row">
              <span class="detail-label">Square Meters:</span>
              <span>${booking.squareMeters} sqm</span>
            </div>
            ` : ''}
            <div class="detail-row">
              <span class="detail-label">Stain Removal:</span>
              <span>${booking.stainRemoval ? 'Yes' : 'No'}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Preferred Date:</span>
              <span>${format(new Date(booking.preferredDate), 'EEEE, d MMMM yyyy')}</span>
            </div>
          </div>

          <div class="details">
            <h3>Pricing</h3>
            <div class="detail-row">
              <span class="detail-label">Distance:</span>
              <span>${booking.distance} miles from Manchester</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Service Cost:</span>
              <span>${formatPrice(booking.serviceCost)}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Travel Cost:</span>
              <span>${formatPrice(booking.travelCost)}</span>
            </div>
            <div class="detail-row" style="font-size: 18px; font-weight: bold;">
              <span class="detail-label">Total:</span>
              <span>${formatPrice(booking.totalCost)}</span>
            </div>
          </div>

          ${booking.additionalNotes ? `
          <div class="details">
            <h3>Customer Notes</h3>
            <p>${booking.additionalNotes}</p>
          </div>
          ` : ''}

          <div style="text-align: center;">
            <a href="${baseUrl}/admin/leads/${booking.id}" class="button">View in Dashboard</a>
          </div>

          <p style="margin-top: 20px; font-size: 12px; color: #666;">
            Booking ID: ${booking.id}<br>
            Submitted: ${format(new Date(booking.createdAt), 'PPpp')}
          </p>
        </div>
      </div>
    </body>
    </html>
  `

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Booking: ${booking.name} - ${booking.serviceType}`,
    html
  })
}

/**
 * Send booking status update email to customer
 *
 * @param booking - Booking object from database
 * @param newStatus - New status value
 */
export async function sendBookingStatusUpdate(
  booking: Booking,
  newStatus: BookingStatus
): Promise<void> {
  const transporter = createTransporter()
  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Method Clean'

  const statusMessages: Record<BookingStatus, { subject: string; message: string; color: string }> = {
    PENDING: {
      subject: 'Booking Received',
      message: 'Your booking has been received and is awaiting review.',
      color: '#faad14'
    },
    CONFIRMED: {
      subject: 'Booking Confirmed',
      message: 'Great news! Your booking has been confirmed.',
      color: '#52c41a'
    },
    IN_PROGRESS: {
      subject: 'We\'re On Our Way',
      message: 'Our team is on the way to your location.',
      color: '#1890ff'
    },
    COMPLETED: {
      subject: 'Service Completed',
      message: 'Thank you for choosing Method Clean! Your service has been completed.',
      color: '#52c41a'
    },
    CANCELLED: {
      subject: 'Booking Cancelled',
      message: 'Your booking has been cancelled.',
      color: '#ff4d4f'
    }
  }

  const statusInfo = statusMessages[newStatus]

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: ${statusInfo.color}; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .status-badge { display: inline-block; padding: 8px 16px; background: ${statusInfo.color}; color: white; border-radius: 4px; font-weight: bold; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${statusInfo.subject}</h1>
        </div>

        <div class="content">
          <p>Hi ${booking.name},</p>

          <p><strong>${statusInfo.message}</strong></p>

          <div class="status-badge">${newStatus}</div>

          ${booking.adminNotes ? `
          <div style="background: #f9f9f9; padding: 15px; margin: 15px 0; border-left: 4px solid ${statusInfo.color};">
            <strong>Note from our team:</strong>
            <p>${booking.adminNotes}</p>
          </div>
          ` : ''}

          <p>
            <strong>Booking Details:</strong><br>
            Service: ${booking.serviceType}<br>
            Date: ${format(new Date(booking.preferredDate), 'EEEE, d MMMM yyyy')}<br>
            Total: ${formatPrice(booking.totalCost)}
          </p>

          <p>If you have any questions, please don't hesitate to contact us.</p>

          <p>
            Best regards,<br>
            <strong>${businessName} Team</strong>
          </p>
        </div>
      </div>
    </body>
    </html>
  `

  await transporter.sendMail({
    from: `"${businessName}" <${process.env.SMTP_USER}>`,
    to: booking.email,
    subject: `${statusInfo.subject} - ${businessName}`,
    html
  })
}

/**
 * Send test email to verify SMTP configuration
 */
export async function sendTestEmail(recipient: string): Promise<void> {
  const transporter = createTransporter()

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: recipient,
    subject: 'Test Email - Method Clean',
    html: `
      <h1>Email Configuration Test</h1>
      <p>If you're receiving this email, your SMTP configuration is working correctly!</p>
      <p>Time: ${new Date().toISOString()}</p>
    `
  })
}
