/**
 * Booking Validation Schemas
 *
 * Zod schemas for validating booking and quote form data
 */

import { z } from 'zod'

/**
 * UK postcode validation regex
 */
const postcodeRegex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i

/**
 * UK phone number validation regex
 */
const phoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^(\+44\s?\d{3,4}|\(?0\d{3,4}\)?)\s?\d{3}\s?\d{3,4}$/

/**
 * Service type enum
 */
export const serviceTypes = [
  'carpet-cleaning',
  'rug-cleaning',
  'upholstery-cleaning',
  'leather-cleaning',
  'mattress-cleaning-single',
  'mattress-cleaning-double',
  'mattress-cleaning-king',
  'stain-removal',
  'commercial-cleaning',
  'car-valeting'
] as const

/**
 * Property type enum
 */
export const propertyTypes = [
  'house',
  'flat',
  'apartment',
  'office',
  'commercial',
  'other'
] as const

/**
 * Property size enum
 */
export const propertySizes = [
  'small',
  'medium',
  'large'
] as const

/**
 * Complete booking schema (for final submission)
 */
export const bookingSchema = z.object({
  // Contact Information
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Please enter a valid name'),

  email: z.string()
    .email('Please enter a valid email address')
    .max(255, 'Email is too long'),

  phone: z.string()
    .regex(phoneRegex, 'Please enter a valid UK phone number')
    .transform(val => val.replace(/\s/g, '')), // Remove spaces

  address: z.string()
    .min(5, 'Please enter a complete address')
    .max(255, 'Address is too long'),

  postcode: z.string()
    .regex(postcodeRegex, 'Please enter a valid UK postcode')
    .transform(val => val.toUpperCase().trim()),

  // Service Details
  serviceType: z.enum(serviceTypes),

  propertyType: z.enum(propertyTypes),

  propertySize: z.enum(propertySizes).optional(),

  numberOfRooms: z.number()
    .int('Number of rooms must be a whole number')
    .min(1, 'Please enter at least 1 room')
    .max(50, 'Maximum 50 rooms allowed')
    .optional(),

  squareMeters: z.number()
    .int('Square meters must be a whole number')
    .min(10, 'Minimum area is 10 square meters')
    .max(10000, 'Maximum area is 10,000 square meters')
    .optional(),

  stainRemoval: z.boolean().default(false),

  additionalNotes: z.string()
    .max(1000, 'Notes are too long (max 1000 characters)')
    .optional(),

  photoUrls: z.array(z.string().url()).default([]),

  // Scheduling
  preferredDate: z.coerce.date()
    .refine(
      (date) => date > new Date(),
      'Preferred date must be in the future'
    )
    .refine(
      (date) => date < new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      'Preferred date must be within 90 days'
    ),

  // Pricing (calculated server-side, but included for validation)
  distance: z.number().min(0).max(200),
  travelCost: z.number().min(0),
  serviceCost: z.number().min(0),
  totalCost: z.number().min(0)
})

export type BookingInput = z.infer<typeof bookingSchema>

/**
 * Quote request schema (for instant quote calculation)
 */
export const quoteRequestSchema = z.object({
  postcode: z.string()
    .regex(postcodeRegex, 'Please enter a valid UK postcode')
    .transform(val => val.toUpperCase().trim()),

  serviceType: z.enum(serviceTypes),

  propertyType: z.enum(propertyTypes),

  numberOfRooms: z.number()
    .int()
    .min(1)
    .max(50)
    .optional(),

  squareMeters: z.number()
    .int()
    .min(10)
    .max(10000)
    .optional(),

  stainRemoval: z.boolean().default(false)
})

export type QuoteRequest = z.infer<typeof quoteRequestSchema>

/**
 * Contact information schema (Step 1 of multi-step form)
 */
export const contactInfoSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),

  email: z.string()
    .email('Please enter a valid email address'),

  phone: z.string()
    .regex(phoneRegex, 'Please enter a valid UK phone number'),

  address: z.string()
    .min(5, 'Please enter a complete address')
    .max(255, 'Address is too long'),

  postcode: z.string()
    .regex(postcodeRegex, 'Please enter a valid UK postcode')
})

export type ContactInfo = z.infer<typeof contactInfoSchema>

/**
 * Service details schema (Step 2 of multi-step form)
 */
export const serviceDetailsSchema = z.object({
  serviceType: z.enum(serviceTypes),
  propertyType: z.enum(propertyTypes),
  propertySize: z.enum(propertySizes).optional(),
  numberOfRooms: z.number().int().min(1).max(50).optional(),
  squareMeters: z.number().int().min(10).max(10000).optional(),
  stainRemoval: z.boolean().default(false)
})
  .refine(
    (data) => {
      // Require numberOfRooms for carpet/upholstery cleaning
      if (['carpet-cleaning', 'upholstery-cleaning'].includes(data.serviceType)) {
        return data.numberOfRooms !== undefined && data.numberOfRooms > 0
      }
      return true
    },
    {
      message: 'Number of rooms is required for this service',
      path: ['numberOfRooms']
    }
  )
  .refine(
    (data) => {
      // Require squareMeters for commercial cleaning
      if (data.serviceType === 'commercial-cleaning') {
        return data.squareMeters !== undefined && data.squareMeters > 0
      }
      return true
    },
    {
      message: 'Square meters is required for commercial cleaning',
      path: ['squareMeters']
    }
  )

export type ServiceDetails = z.infer<typeof serviceDetailsSchema>

/**
 * Photo upload schema
 */
export const photoUploadSchema = z.object({
  file: z.instanceof(File)
    .refine((file) => file.size <= 10 * 1024 * 1024, 'File size must be less than 10MB')
    .refine(
      (file) => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
      'File must be a JPEG, PNG, or WebP image'
    )
})

/**
 * Booking status update schema (admin)
 */
export const bookingStatusUpdateSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(['PENDING', 'CONFIRMED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED']),
  adminNotes: z.string().max(1000).optional()
})

export type BookingStatusUpdate = z.infer<typeof bookingStatusUpdateSchema>
