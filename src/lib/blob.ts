/**
 * Vercel Blob Storage Utilities
 *
 * This module provides helper functions for uploading files to Vercel Blob Storage.
 * Vercel Blob is ideal for storing images, documents, and other user-uploaded files.
 *
 * Environment Variable Required:
 * - BLOB_READ_WRITE_TOKEN (from Vercel Dashboard > Storage)
 */

import { put, del, list, head } from '@vercel/blob'

/**
 * Upload a file to Vercel Blob Storage
 *
 * @param filename - The name/path for the file (e.g., 'gallery/image.jpg')
 * @param file - File object, Blob, ArrayBuffer, or string content
 * @param options - Additional upload options
 * @returns Object containing the URL of the uploaded file
 *
 * @example
 * ```ts
 * // Upload from FormData
 * const file = formData.get('image') as File
 * const { url } = await uploadToBlob('gallery/photo.jpg', file)
 *
 * // Upload with custom options
 * const { url } = await uploadToBlob('articles/post.txt', 'Hello World!', {
 *   access: 'public',
 *   addRandomSuffix: false
 * })
 * ```
 */
export async function uploadToBlob(
  filename: string,
  file: File | Blob | ArrayBuffer | string,
  options?: {
    access?: 'public'
    addRandomSuffix?: boolean
    cacheControlMaxAge?: number
    contentType?: string
  }
) {
  try {
    const blob = await put(filename, file, {
      access: options?.access || 'public',
      addRandomSuffix: options?.addRandomSuffix ?? true, // Add random suffix by default to avoid overwrites
      cacheControlMaxAge: options?.cacheControlMaxAge,
      contentType: options?.contentType,
      token: process.env.BLOB_READ_WRITE_TOKEN
    })

    return {
      url: blob.url,
      pathname: blob.pathname,
      downloadUrl: blob.downloadUrl
    }
  } catch (error) {
    console.error('Error uploading to Vercel Blob:', error)
    throw new Error('Failed to upload file to storage')
  }
}

/**
 * Delete a file from Vercel Blob Storage
 *
 * @param url - The full URL of the blob to delete
 *
 * @example
 * ```ts
 * await deleteFromBlob('https://xxx.public.blob.vercel-storage.com/image.jpg')
 * ```
 */
export async function deleteFromBlob(url: string) {
  try {
    await del(url, {
      token: process.env.BLOB_READ_WRITE_TOKEN
    })
    return { success: true }
  } catch (error) {
    console.error('Error deleting from Vercel Blob:', error)
    throw new Error('Failed to delete file from storage')
  }
}

/**
 * List files in Vercel Blob Storage
 *
 * @param options - Filtering options
 * @returns Array of blob objects
 *
 * @example
 * ```ts
 * // List all files
 * const files = await listBlobs()
 *
 * // List files with prefix
 * const galleryImages = await listBlobs({ prefix: 'gallery/' })
 *
 * // List with pagination
 * const { blobs, cursor } = await listBlobs({ limit: 10 })
 * ```
 */
export async function listBlobs(options?: {
  prefix?: string
  limit?: number
  cursor?: string
}) {
  try {
    const result = await list({
      prefix: options?.prefix,
      limit: options?.limit,
      cursor: options?.cursor,
      token: process.env.BLOB_READ_WRITE_TOKEN
    })
    return result
  } catch (error) {
    console.error('Error listing blobs:', error)
    throw new Error('Failed to list files from storage')
  }
}

/**
 * Get metadata about a file in Vercel Blob Storage
 *
 * @param url - The full URL of the blob
 * @returns Blob metadata including size, content type, etc.
 *
 * @example
 * ```ts
 * const metadata = await getBlobMetadata('https://xxx.public.blob.vercel-storage.com/image.jpg')
 * console.log(metadata.size, metadata.contentType)
 * ```
 */
export async function getBlobMetadata(url: string) {
  try {
    const metadata = await head(url, {
      token: process.env.BLOB_READ_WRITE_TOKEN
    })
    return metadata
  } catch (error) {
    console.error('Error getting blob metadata:', error)
    throw new Error('Failed to get file metadata from storage')
  }
}

/**
 * Upload an image from a File object (from form upload)
 * Automatically handles image-specific settings
 *
 * @param file - Image file from form upload
 * @param folder - Optional folder path (e.g., 'gallery', 'before-after')
 * @returns Object containing the uploaded image URL
 *
 * @example
 * ```ts
 * // In API route
 * const formData = await request.formData()
 * const image = formData.get('image') as File
 * const { url } = await uploadImage(image, 'gallery')
 * ```
 */
export async function uploadImage(file: File, folder?: string) {
  // Validate that it's an image
  if (!file.type.startsWith('image/')) {
    throw new Error('File must be an image')
  }

  // Create filename with optional folder
  const filename = folder
    ? `${folder}/${file.name}`
    : file.name

  return uploadToBlob(filename, file, {
    access: 'public',
    contentType: file.type,
    addRandomSuffix: true // Prevent overwrites
  })
}

/**
 * Upload multiple images at once
 *
 * @param files - Array of image files
 * @param folder - Optional folder path
 * @returns Array of uploaded image URLs
 *
 * @example
 * ```ts
 * const files = formData.getAll('images') as File[]
 * const results = await uploadMultipleImages(files, 'gallery')
 * console.log(results.map(r => r.url))
 * ```
 */
export async function uploadMultipleImages(files: File[], folder?: string) {
  const uploads = files.map(file => uploadImage(file, folder))
  return Promise.all(uploads)
}
