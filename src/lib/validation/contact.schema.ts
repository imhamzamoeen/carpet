/**
 * Contact Form Validation Schema
 *
 * Zod schema for contact form submissions
 */

import { z } from 'zod'

/**
 * UK phone number validation regex
 */
const phoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^(\+44\s?\d{3,4}|\(?0\d{3,4}\)?)\s?\d{3}\s?\d{3,4}$/

/**
 * Contact form schema
 */
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Please enter a valid name'),

  email: z.string()
    .email('Please enter a valid email address')
    .max(255, 'Email is too long'),

  phone: z.string()
    .regex(phoneRegex, 'Please enter a valid UK phone number')
    .optional()
    .or(z.literal('')),

  subject: z.string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject is too long'),

  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message is too long (max 2000 characters)')
})

export type ContactFormInput = z.infer<typeof contactFormSchema>

/**
 * Review submission schema
 */
export const reviewSubmissionSchema = z.object({
  customerName: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),

  serviceType: z.string()
    .min(1, 'Please select a service type'),

  rating: z.number()
    .int('Rating must be a whole number')
    .min(1, 'Rating must be at least 1 star')
    .max(5, 'Rating cannot exceed 5 stars'),

  reviewText: z.string()
    .min(20, 'Review must be at least 20 characters')
    .max(1000, 'Review is too long (max 1000 characters)'),

  location: z.string()
    .min(2, 'Please enter your location')
    .max(100, 'Location is too long'),

  bookingId: z.string().uuid().optional()
})

export type ReviewSubmission = z.infer<typeof reviewSubmissionSchema>
