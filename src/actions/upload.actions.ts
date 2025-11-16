/**
 * Upload Server Actions
 *
 * Server-side actions for file uploads to Supabase Storage
 */

'use server'

import { createClient } from '@/lib/supabase/server'
import { photoUploadSchema } from '@/lib/validation/booking.schema'

/**
 * Upload a photo for booking
 *
 * @param formData - FormData containing the file
 * @returns Upload result with public URL
 */
export async function uploadBookingPhoto(formData: FormData) {
  try {
    const file = formData.get('file') as File

    if (!file) {
      return {
        success: false,
        error: 'No file provided'
      }
    }

    // Validate file
    const validation = photoUploadSchema.safeParse({ file })

    if (!validation.success) {
      return {
        success: false,
        error: validation.error.issues[0]?.message || 'Invalid file'
      }
    }

    const supabase = await createClient()

    // Generate unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(7)
    const ext = file.name.split('.').pop()
    const filename = `booking-${timestamp}-${randomString}.${ext}`

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('booking-photos')
      .upload(filename, file, {
        contentType: file.type,
        upsert: false,
        cacheControl: '3600'
      })

    if (error) {
      console.error('Supabase upload error:', error)
      return {
        success: false,
        error: 'Failed to upload photo. Please try again.'
      }
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('booking-photos')
      .getPublicUrl(data.path)

    return {
      success: true,
      url: publicUrl,
      filename: data.path
    }
  } catch (error) {
    console.error('Error uploading photo:', error)

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to upload photo'
    }
  }
}

/**
 * Delete a photo from Supabase Storage
 *
 * @param filename - Filename to delete
 * @returns Success result
 */
export async function deleteBookingPhoto(filename: string) {
  try {
    const supabase = await createClient()

    const { error } = await supabase.storage
      .from('booking-photos')
      .remove([filename])

    if (error) {
      console.error('Supabase delete error:', error)
      return {
        success: false,
        error: 'Failed to delete photo'
      }
    }

    return {
      success: true,
      message: 'Photo deleted successfully'
    }
  } catch (error) {
    console.error('Error deleting photo:', error)
    return {
      success: false,
      error: 'Failed to delete photo'
    }
  }
}

/**
 * Upload gallery image (admin)
 *
 * @param formData - FormData containing the file and type (before/after)
 * @returns Upload result with public URL
 */
export async function uploadGalleryImage(formData: FormData) {
  try {
    const file = formData.get('file') as File
    const type = formData.get('type') as string // 'before' or 'after'

    if (!file) {
      return {
        success: false,
        error: 'No file provided'
      }
    }

    if (!['before', 'after'].includes(type)) {
      return {
        success: false,
        error: 'Invalid image type. Must be "before" or "after"'
      }
    }

    // Validate file
    const validation = photoUploadSchema.safeParse({ file })

    if (!validation.success) {
      return {
        success: false,
        error: validation.error.issues[0]?.message || 'Invalid file'
      }
    }

    const supabase = await createClient()

    // Generate unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(7)
    const ext = file.name.split('.').pop()
    const filename = `gallery-${type}-${timestamp}-${randomString}.${ext}`

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('gallery-images')
      .upload(filename, file, {
        contentType: file.type,
        upsert: false,
        cacheControl: '31536000' // 1 year cache for gallery images
      })

    if (error) {
      console.error('Supabase upload error:', error)
      return {
        success: false,
        error: 'Failed to upload image. Please try again.'
      }
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('gallery-images')
      .getPublicUrl(data.path)

    return {
      success: true,
      url: publicUrl,
      filename: data.path
    }
  } catch (error) {
    console.error('Error uploading gallery image:', error)

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to upload image'
    }
  }
}

/**
 * Upload blog post featured image (admin)
 *
 * @param formData - FormData containing the file
 * @returns Upload result with public URL
 */
export async function uploadBlogImage(formData: FormData) {
  try {
    const file = formData.get('file') as File

    if (!file) {
      return {
        success: false,
        error: 'No file provided'
      }
    }

    // Validate file
    const validation = photoUploadSchema.safeParse({ file })

    if (!validation.success) {
      return {
        success: false,
        error: validation.error.issues[0]?.message || 'Invalid file'
      }
    }

    const supabase = await createClient()

    // Generate unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(7)
    const ext = file.name.split('.').pop()
    const filename = `blog-${timestamp}-${randomString}.${ext}`

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(filename, file, {
        contentType: file.type,
        upsert: false,
        cacheControl: '31536000' // 1 year cache
      })

    if (error) {
      console.error('Supabase upload error:', error)
      return {
        success: false,
        error: 'Failed to upload image. Please try again.'
      }
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('blog-images')
      .getPublicUrl(data.path)

    return {
      success: true,
      url: publicUrl,
      filename: data.path
    }
  } catch (error) {
    console.error('Error uploading blog image:', error)

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to upload image'
    }
  }
}
