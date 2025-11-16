/**
 * Contact Form Server Actions
 *
 * Server-side actions for handling contact form submissions
 */

'use server'

import nodemailer from 'nodemailer'
import { contactFormSchema, reviewSubmissionSchema } from '@/lib/validation/contact.schema'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import type { z } from 'zod'

/**
 * Create nodemailer transporter
 */
function createTransporter() {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  })
}

/**
 * Handle contact form submission
 *
 * @param data - Contact form data
 * @returns Success result
 */
export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  try {
    const validated = contactFormSchema.parse(data)

    const transporter = createTransporter()
    const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Method Clean'

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `Contact Form: ${validated.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1890ff; color: white; padding: 20px; }
            .content { padding: 20px; }
            .field { margin: 15px 0; }
            .label { font-weight: bold; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">From:</div>
                <div>${validated.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div><a href="mailto:${validated.email}">${validated.email}</a></div>
              </div>
              ${validated.phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div><a href="tel:${validated.phone}">${validated.phone}</a></div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Subject:</div>
                <div>${validated.subject}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-left: 4px solid #1890ff;">
                  ${validated.message}
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    })

    // Send confirmation to customer
    await transporter.sendMail({
      from: `"${businessName}" <${process.env.SMTP_USER}>`,
      to: validated.email,
      subject: `We received your message - ${businessName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1890ff; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${businessName}</h1>
            </div>
            <div class="content">
              <h2>Thank you for contacting us!</h2>
              <p>Hi ${validated.name},</p>
              <p>We've received your message and will get back to you as soon as possible, usually within 24 hours.</p>
              <p><strong>Your message:</strong></p>
              <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #1890ff; white-space: pre-wrap;">
                ${validated.message}
              </div>
              <p>Best regards,<br>
              <strong>${businessName} Team</strong></p>
            </div>
          </div>
        </body>
        </html>
      `
    })

    return {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you soon.'
    }
  } catch (error) {
    console.error('Error submitting contact form:', error)

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
    }
  }
}

/**
 * Submit a customer review
 *
 * @param data - Review submission data
 * @returns Success result
 */
export async function submitReview(data: z.infer<typeof reviewSubmissionSchema>) {
  try {
    const validated = reviewSubmissionSchema.parse(data)

    // Create review (not approved by default)
    const review = await prisma.review.create({
      data: {
        customerName: validated.customerName,
        serviceType: validated.serviceType,
        rating: validated.rating,
        reviewText: validated.reviewText,
        location: validated.location,
        bookingId: validated.bookingId,
        isApproved: false, // Requires admin approval
        isFeatured: false,
        displayOrder: 0
      }
    })

    // Send notification to admin
    const transporter = createTransporter()

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Review Submission: ${validated.rating} stars`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1890ff; color: white; padding: 20px; }
            .stars { color: #faad14; font-size: 24px; }
            .review { background: #f5f5f5; padding: 15px; border-left: 4px solid #1890ff; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Review Pending Approval</h1>
            </div>
            <div style="padding: 20px;">
              <div class="stars">${'★'.repeat(validated.rating)}${'☆'.repeat(5 - validated.rating)}</div>
              <p><strong>Customer:</strong> ${validated.customerName}</p>
              <p><strong>Service:</strong> ${validated.serviceType}</p>
              <p><strong>Location:</strong> ${validated.location}</p>
              <div class="review">
                ${validated.reviewText}
              </div>
              <p><a href="${process.env.NEXT_PUBLIC_BASE_URL}/admin/content/reviews">View in Admin Dashboard</a></p>
            </div>
          </div>
        </body>
        </html>
      `
    })

    return {
      success: true,
      message: 'Thank you for your review! It will be published after approval.'
    }
  } catch (error) {
    console.error('Error submitting review:', error)

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit review. Please try again.'
    }
  }
}
