/**
 * Admin Validation Schemas
 *
 * Zod schemas for admin operations and content management
 */

import { z } from 'zod'

/**
 * Admin login schema
 */
export const adminLoginSchema = z.object({
  email: z.string()
    .email('Please enter a valid email address'),

  password: z.string()
    .min(8, 'Password must be at least 8 characters')
})

export type AdminLogin = z.infer<typeof adminLoginSchema>

/**
 * Service content schema
 */
export const serviceContentSchema = z.object({
  slug: z.string()
    .min(1, 'Slug is required')
    .max(100)
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),

  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),

  shortDescription: z.string()
    .min(10, 'Short description must be at least 10 characters')
    .max(500, 'Short description is too long'),

  longDescription: z.string()
    .min(50, 'Long description must be at least 50 characters')
    .max(5000, 'Long description is too long'),

  metaTitle: z.string()
    .min(10, 'Meta title must be at least 10 characters')
    .max(60, 'Meta title should be under 60 characters for SEO'),

  metaDescription: z.string()
    .min(50, 'Meta description must be at least 50 characters')
    .max(160, 'Meta description should be under 160 characters for SEO'),

  keywords: z.array(z.string()).default([]),

  basePriceFrom: z.number()
    .min(0, 'Price must be positive')
    .max(10000, 'Price seems too high'),

  priceUnit: z.string()
    .min(1, 'Price unit is required')
    .max(50),

  features: z.array(z.string()).default([]),

  iconName: z.string()
    .min(1, 'Icon name is required')
    .max(50),

  displayOrder: z.number().int().min(0).default(0),

  isActive: z.boolean().default(true)
})

export type ServiceContent = z.infer<typeof serviceContentSchema>

/**
 * Review admin schema
 */
export const reviewAdminSchema = z.object({
  id: z.string().uuid().optional(), // Optional for creating new reviews

  customerName: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100),

  serviceType: z.string().min(1),

  rating: z.number().int().min(1).max(5),

  reviewText: z.string()
    .min(10, 'Review must be at least 10 characters')
    .max(1000),

  location: z.string()
    .min(2)
    .max(100),

  isApproved: z.boolean().default(false),

  isFeatured: z.boolean().default(false),

  displayOrder: z.number().int().min(0).default(0),

  bookingId: z.string().uuid().optional()
})

export type ReviewAdmin = z.infer<typeof reviewAdminSchema>

/**
 * Gallery item schema
 */
export const galleryItemSchema = z.object({
  id: z.string().uuid().optional(),

  title: z.string()
    .min(3, 'Title must be at least 3 characters')
    .max(100),

  description: z.string()
    .max(500)
    .optional(),

  beforeImageUrl: z.string().url('Please provide a valid URL for before image'),

  afterImageUrl: z.string().url('Please provide a valid URL for after image'),

  serviceType: z.string().min(1, 'Service type is required'),

  location: z.string()
    .min(2, 'Location must be at least 2 characters')
    .max(100),

  isApproved: z.boolean().default(false),

  isFeatured: z.boolean().default(false),

  displayOrder: z.number().int().min(0).default(0)
})

export type GalleryItem = z.infer<typeof galleryItemSchema>

/**
 * FAQ schema
 */
export const faqSchema = z.object({
  id: z.string().uuid().optional(),

  question: z.string()
    .min(10, 'Question must be at least 10 characters')
    .max(500, 'Question is too long'),

  answer: z.string()
    .min(20, 'Answer must be at least 20 characters')
    .max(2000, 'Answer is too long'),

  category: z.enum(['booking', 'pricing', 'services', 'general'], {
    errorMap: () => ({ message: 'Please select a valid category' })
  }),

  displayOrder: z.number().int().min(0).default(0),

  isActive: z.boolean().default(true)
})

export type FAQ = z.infer<typeof faqSchema>

/**
 * Blog post schema
 */
export const blogPostSchema = z.object({
  id: z.string().uuid().optional(),

  slug: z.string()
    .min(1)
    .max(100)
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),

  title: z.string()
    .min(10, 'Title must be at least 10 characters')
    .max(200, 'Title is too long'),

  excerpt: z.string()
    .min(50, 'Excerpt must be at least 50 characters')
    .max(500, 'Excerpt is too long'),

  content: z.string()
    .min(100, 'Content must be at least 100 characters')
    .max(50000, 'Content is too long'),

  metaTitle: z.string()
    .min(10)
    .max(60),

  metaDescription: z.string()
    .min(50)
    .max(160),

  keywords: z.array(z.string()).default([]),

  category: z.string()
    .min(1, 'Category is required')
    .max(50),

  tags: z.array(z.string()).default([]),

  featuredImageUrl: z.string().url().optional(),

  authorName: z.string()
    .min(2)
    .max(100)
    .default('Method Clean Team'),

  isPublished: z.boolean().default(false),

  publishedAt: z.coerce.date().optional()
})

export type BlogPost = z.infer<typeof blogPostSchema>

/**
 * Settings update schema
 */
export const settingSchema = z.object({
  key: z.string()
    .min(1, 'Key is required')
    .max(100)
    .regex(/^[a-z0-9_]+$/, 'Key must contain only lowercase letters, numbers, and underscores'),

  value: z.string()
    .max(1000, 'Value is too long'),

  type: z.enum(['number', 'string', 'boolean', 'json'], {
    errorMap: () => ({ message: 'Please select a valid type' })
  }),

  description: z.string()
    .max(500)
    .optional()
})

export type Setting = z.infer<typeof settingSchema>
