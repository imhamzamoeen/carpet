/**
 * Content Management Server Actions
 *
 * Server-side actions for managing services, reviews, gallery, FAQs, and blog
 */

'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'
import {
  serviceContentSchema,
  reviewAdminSchema,
  galleryItemSchema,
  faqSchema,
  blogPostSchema
} from '@/lib/validation/admin.schema'
import type { z } from 'zod'

// ═══════════════════════════════════════════════════════════════
// SERVICES
// ═══════════════════════════════════════════════════════════════

export async function createService(data: z.infer<typeof serviceContentSchema>) {
  try {
    const validated = serviceContentSchema.parse(data)

    const service = await prisma.service.create({
      data: validated
    })

    revalidatePath('/services')
    revalidatePath(`/services/${service.slug}`)
    revalidatePath('/admin/content/services')

    return {
      success: true,
      service,
      message: 'Service created successfully'
    }
  } catch (error) {
    console.error('Error creating service:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create service'
    }
  }
}

export async function updateService(id: string, data: z.infer<typeof serviceContentSchema>) {
  try {
    const validated = serviceContentSchema.parse(data)

    const service = await prisma.service.update({
      where: { id },
      data: validated
    })

    revalidatePath('/services')
    revalidatePath(`/services/${service.slug}`)
    revalidatePath('/admin/content/services')

    return {
      success: true,
      service,
      message: 'Service updated successfully'
    }
  } catch (error) {
    console.error('Error updating service:', error)
    return {
      success: false,
      error: 'Failed to update service'
    }
  }
}

export async function getServices() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { displayOrder: 'asc' }
    })

    return {
      success: true,
      services
    }
  } catch (error) {
    console.error('Error fetching services:', error)
    return {
      success: false,
      error: 'Failed to fetch services',
      services: []
    }
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    const service = await prisma.service.findUnique({
      where: { slug }
    })

    return {
      success: true,
      service
    }
  } catch (error) {
    console.error('Error fetching service:', error)
    return {
      success: false,
      error: 'Service not found'
    }
  }
}

// ═══════════════════════════════════════════════════════════════
// REVIEWS
// ═══════════════════════════════════════════════════════════════

export async function createReview(data: z.infer<typeof reviewAdminSchema>) {
  try {
    const validated = reviewAdminSchema.parse(data)

    const review = await prisma.review.create({
      data: {
        customerName: validated.customerName,
        serviceType: validated.serviceType,
        rating: validated.rating,
        reviewText: validated.reviewText,
        location: validated.location,
        isApproved: validated.isApproved,
        isFeatured: validated.isFeatured,
        displayOrder: validated.displayOrder,
        bookingId: validated.bookingId
      }
    })

    revalidatePath('/reviews')
    revalidatePath('/admin/content/reviews')

    return {
      success: true,
      review,
      message: 'Review created successfully'
    }
  } catch (error) {
    console.error('Error creating review:', error)
    return {
      success: false,
      error: 'Failed to create review'
    }
  }
}

export async function updateReview(id: string, data: z.infer<typeof reviewAdminSchema>) {
  try {
    const validated = reviewAdminSchema.parse(data)

    const review = await prisma.review.update({
      where: { id },
      data: {
        customerName: validated.customerName,
        serviceType: validated.serviceType,
        rating: validated.rating,
        reviewText: validated.reviewText,
        location: validated.location,
        isApproved: validated.isApproved,
        isFeatured: validated.isFeatured,
        displayOrder: validated.displayOrder,
        bookingId: validated.bookingId
      }
    })

    revalidatePath('/reviews')
    revalidatePath('/admin/content/reviews')

    return {
      success: true,
      review,
      message: 'Review updated successfully'
    }
  } catch (error) {
    console.error('Error updating review:', error)
    return {
      success: false,
      error: 'Failed to update review'
    }
  }
}

export async function getReviews(filters?: { approved?: boolean; featured?: boolean }) {
  try {
    const where: any = {}

    if (filters?.approved !== undefined) {
      where.isApproved = filters.approved
    }

    if (filters?.featured !== undefined) {
      where.isFeatured = filters.featured
    }

    const reviews = await prisma.review.findMany({
      where,
      orderBy: [
        { isFeatured: 'desc' },
        { displayOrder: 'asc' },
        { createdAt: 'desc' }
      ]
    })

    return {
      success: true,
      reviews
    }
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return {
      success: false,
      error: 'Failed to fetch reviews',
      reviews: []
    }
  }
}

export async function deleteReview(id: string) {
  try {
    await prisma.review.delete({
      where: { id }
    })

    revalidatePath('/reviews')
    revalidatePath('/admin/content/reviews')

    return {
      success: true,
      message: 'Review deleted successfully'
    }
  } catch (error) {
    console.error('Error deleting review:', error)
    return {
      success: false,
      error: 'Failed to delete review'
    }
  }
}

// ═══════════════════════════════════════════════════════════════
// GALLERY
// ═══════════════════════════════════════════════════════════════

export async function createGalleryItem(data: z.infer<typeof galleryItemSchema>) {
  try {
    const validated = galleryItemSchema.parse(data)

    const item = await prisma.galleryItem.create({
      data: {
        title: validated.title,
        description: validated.description,
        beforeImageUrl: validated.beforeImageUrl,
        afterImageUrl: validated.afterImageUrl,
        serviceType: validated.serviceType,
        location: validated.location,
        isApproved: validated.isApproved,
        isFeatured: validated.isFeatured,
        displayOrder: validated.displayOrder
      }
    })

    revalidatePath('/gallery')
    revalidatePath('/admin/content/gallery')

    return {
      success: true,
      item,
      message: 'Gallery item created successfully'
    }
  } catch (error) {
    console.error('Error creating gallery item:', error)
    return {
      success: false,
      error: 'Failed to create gallery item'
    }
  }
}

export async function updateGalleryItem(id: string, data: z.infer<typeof galleryItemSchema>) {
  try {
    const validated = galleryItemSchema.parse(data)

    const item = await prisma.galleryItem.update({
      where: { id },
      data: {
        title: validated.title,
        description: validated.description,
        beforeImageUrl: validated.beforeImageUrl,
        afterImageUrl: validated.afterImageUrl,
        serviceType: validated.serviceType,
        location: validated.location,
        isApproved: validated.isApproved,
        isFeatured: validated.isFeatured,
        displayOrder: validated.displayOrder
      }
    })

    revalidatePath('/gallery')
    revalidatePath('/admin/content/gallery')

    return {
      success: true,
      item,
      message: 'Gallery item updated successfully'
    }
  } catch (error) {
    console.error('Error updating gallery item:', error)
    return {
      success: false,
      error: 'Failed to update gallery item'
    }
  }
}

export async function getGalleryItems(filters?: { approved?: boolean; featured?: boolean }) {
  try {
    const where: any = {}

    if (filters?.approved !== undefined) {
      where.isApproved = filters.approved
    }

    if (filters?.featured !== undefined) {
      where.isFeatured = filters.featured
    }

    const items = await prisma.galleryItem.findMany({
      where,
      orderBy: [
        { isFeatured: 'desc' },
        { displayOrder: 'asc' },
        { createdAt: 'desc' }
      ]
    })

    return {
      success: true,
      items
    }
  } catch (error) {
    console.error('Error fetching gallery items:', error)
    return {
      success: false,
      error: 'Failed to fetch gallery items',
      items: []
    }
  }
}

export async function deleteGalleryItem(id: string) {
  try {
    await prisma.galleryItem.delete({
      where: { id }
    })

    revalidatePath('/gallery')
    revalidatePath('/admin/content/gallery')

    return {
      success: true,
      message: 'Gallery item deleted successfully'
    }
  } catch (error) {
    console.error('Error deleting gallery item:', error)
    return {
      success: false,
      error: 'Failed to delete gallery item'
    }
  }
}

// ═══════════════════════════════════════════════════════════════
// FAQs
// ═══════════════════════════════════════════════════════════════

export async function createFAQ(data: z.infer<typeof faqSchema>) {
  try {
    const validated = faqSchema.parse(data)

    const faq = await prisma.fAQ.create({
      data: {
        question: validated.question,
        answer: validated.answer,
        category: validated.category,
        displayOrder: validated.displayOrder,
        isActive: validated.isActive
      }
    })

    revalidatePath('/faqs')
    revalidatePath('/admin/content/faqs')

    return {
      success: true,
      faq,
      message: 'FAQ created successfully'
    }
  } catch (error) {
    console.error('Error creating FAQ:', error)
    return {
      success: false,
      error: 'Failed to create FAQ'
    }
  }
}

export async function updateFAQ(id: string, data: z.infer<typeof faqSchema>) {
  try {
    const validated = faqSchema.parse(data)

    const faq = await prisma.fAQ.update({
      where: { id },
      data: {
        question: validated.question,
        answer: validated.answer,
        category: validated.category,
        displayOrder: validated.displayOrder,
        isActive: validated.isActive
      }
    })

    revalidatePath('/faqs')
    revalidatePath('/admin/content/faqs')

    return {
      success: true,
      faq,
      message: 'FAQ updated successfully'
    }
  } catch (error) {
    console.error('Error updating FAQ:', error)
    return {
      success: false,
      error: 'Failed to update FAQ'
    }
  }
}

export async function getFAQs(category?: string) {
  try {
    const where: any = { isActive: true }

    if (category) {
      where.category = category
    }

    const faqs = await prisma.fAQ.findMany({
      where,
      orderBy: [
        { category: 'asc' },
        { displayOrder: 'asc' }
      ]
    })

    return {
      success: true,
      faqs
    }
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    return {
      success: false,
      error: 'Failed to fetch FAQs',
      faqs: []
    }
  }
}

export async function deleteFAQ(id: string) {
  try {
    await prisma.fAQ.delete({
      where: { id }
    })

    revalidatePath('/faqs')
    revalidatePath('/admin/content/faqs')

    return {
      success: true,
      message: 'FAQ deleted successfully'
    }
  } catch (error) {
    console.error('Error deleting FAQ:', error)
    return {
      success: false,
      error: 'Failed to delete FAQ'
    }
  }
}

// ═══════════════════════════════════════════════════════════════
// BLOG POSTS
// ═══════════════════════════════════════════════════════════════

export async function createBlogPost(data: z.infer<typeof blogPostSchema>) {
  try {
    const validated = blogPostSchema.parse(data)

    const post = await prisma.blogPost.create({
      data: {
        slug: validated.slug,
        title: validated.title,
        excerpt: validated.excerpt,
        content: validated.content,
        metaTitle: validated.metaTitle,
        metaDescription: validated.metaDescription,
        keywords: validated.keywords,
        category: validated.category,
        tags: validated.tags,
        featuredImageUrl: validated.featuredImageUrl,
        authorName: validated.authorName,
        isPublished: validated.isPublished,
        publishedAt: validated.isPublished ? new Date() : null
      }
    })

    if (post.isPublished) {
      revalidatePath('/blog')
      revalidatePath(`/blog/${post.slug}`)
    }
    revalidatePath('/admin/content/blog')

    return {
      success: true,
      post,
      message: 'Blog post created successfully'
    }
  } catch (error) {
    console.error('Error creating blog post:', error)
    return {
      success: false,
      error: 'Failed to create blog post'
    }
  }
}

export async function updateBlogPost(id: string, data: z.infer<typeof blogPostSchema>) {
  try {
    const validated = blogPostSchema.parse(data)

    const post = await prisma.blogPost.update({
      where: { id },
      data: {
        slug: validated.slug,
        title: validated.title,
        excerpt: validated.excerpt,
        content: validated.content,
        metaTitle: validated.metaTitle,
        metaDescription: validated.metaDescription,
        keywords: validated.keywords,
        category: validated.category,
        tags: validated.tags,
        featuredImageUrl: validated.featuredImageUrl,
        authorName: validated.authorName,
        isPublished: validated.isPublished,
        publishedAt: validated.isPublished && !validated.publishedAt
          ? new Date()
          : validated.publishedAt
      }
    })

    if (post.isPublished) {
      revalidatePath('/blog')
      revalidatePath(`/blog/${post.slug}`)
    }
    revalidatePath('/admin/content/blog')

    return {
      success: true,
      post,
      message: 'Blog post updated successfully'
    }
  } catch (error) {
    console.error('Error updating blog post:', error)
    return {
      success: false,
      error: 'Failed to update blog post'
    }
  }
}

export async function getBlogPosts(filters?: { published?: boolean; category?: string }) {
  try {
    const where: any = {}

    if (filters?.published !== undefined) {
      where.isPublished = filters.published
    }

    if (filters?.category) {
      where.category = filters.category
    }

    const posts = await prisma.blogPost.findMany({
      where,
      orderBy: { publishedAt: 'desc' }
    })

    return {
      success: true,
      posts
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return {
      success: false,
      error: 'Failed to fetch blog posts',
      posts: []
    }
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug }
    })

    return {
      success: true,
      post
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return {
      success: false,
      error: 'Blog post not found'
    }
  }
}

export async function deleteBlogPost(id: string) {
  try {
    await prisma.blogPost.delete({
      where: { id }
    })

    revalidatePath('/blog')
    revalidatePath('/admin/content/blog')

    return {
      success: true,
      message: 'Blog post deleted successfully'
    }
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return {
      success: false,
      error: 'Failed to delete blog post'
    }
  }
}
