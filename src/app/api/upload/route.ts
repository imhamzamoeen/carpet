/**
 * File Upload API Route
 *
 * Handles file uploads to Vercel Blob Storage
 * Supports both single and multiple file uploads
 *
 * POST /api/upload
 * Body: FormData with 'file' or 'files' field
 */

import { NextRequest, NextResponse } from 'next/server'
import { uploadImage, uploadMultipleImages, uploadToBlob } from '@/lib/blob'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Check if it's a single file or multiple files
    const file = formData.get('file') as File | null
    const files = formData.getAll('files') as File[]

    // Get optional folder parameter
    const folder = formData.get('folder') as string | null

    if (file) {
      // Single file upload
      const result = await uploadImage(file, folder || 'uploads')

      return NextResponse.json({
        success: true,
        url: result.url,
        downloadUrl: result.downloadUrl
      })
    } else if (files.length > 0) {
      // Multiple files upload
      const results = await uploadMultipleImages(files, folder || 'uploads')

      return NextResponse.json({
        success: true,
        files: results.map(r => ({
          url: r.url,
          downloadUrl: r.downloadUrl
        }))
      })
    } else {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Upload failed'
      },
      { status: 500 }
    )
  }
}

/**
 * Example usage from client:
 *
 * Single file upload:
 * ```ts
 * const formData = new FormData()
 * formData.append('file', imageFile)
 * formData.append('folder', 'gallery')
 *
 * const response = await fetch('/api/upload', {
 *   method: 'POST',
 *   body: formData
 * })
 * const { url } = await response.json()
 * ```
 *
 * Multiple files upload:
 * ```ts
 * const formData = new FormData()
 * files.forEach(file => formData.append('files', file))
 * formData.append('folder', 'before-after')
 *
 * const response = await fetch('/api/upload', {
 *   method: 'POST',
 *   body: formData
 * })
 * const { files } = await response.json()
 * ```
 */
