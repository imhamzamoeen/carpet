"use client"

/**
 * Image Upload Component
 *
 * Reusable component for uploading images to Vercel Blob Storage
 * Features:
 * - Drag and drop support
 * - Image preview
 * - Multiple file upload
 * - Progress indicator
 */

import { useState, useRef, ChangeEvent, DragEvent } from 'react'
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui'

interface ImageUploadProps {
  folder?: string
  multiple?: boolean
  maxFiles?: number
  onUploadComplete?: (urls: string[]) => void
  onError?: (error: string) => void
}

export default function ImageUpload({
  folder = 'uploads',
  multiple = false,
  maxFiles = 5,
  onUploadComplete,
  onError
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [previews, setPreviews] = useState<string[]>([])
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([])
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return

    // Convert FileList to Array
    const filesArray = Array.from(files)

    // Check max files limit
    if (multiple && filesArray.length > maxFiles) {
      onError?.(`Maximum ${maxFiles} files allowed`)
      return
    }

    // Validate all are images
    const invalidFiles = filesArray.filter(file => !file.type.startsWith('image/'))
    if (invalidFiles.length > 0) {
      onError?.('Only image files are allowed')
      return
    }

    // Create previews
    const previewUrls = await Promise.all(
      filesArray.map(file => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result as string)
          reader.readAsDataURL(file)
        })
      })
    )
    setPreviews(previewUrls)

    // Upload files
    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('folder', folder)

      if (multiple) {
        filesArray.forEach(file => formData.append('files', file))
      } else {
        formData.append('file', filesArray[0])
      }

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Upload failed')
      }

      // Extract URLs from response
      const urls = multiple
        ? data.files.map((f: any) => f.url)
        : [data.url]

      setUploadedUrls(urls)
      onUploadComplete?.(urls)
    } catch (error) {
      console.error('Upload error:', error)
      onError?.(error instanceof Error ? error.message : 'Upload failed')
      setPreviews([])
    } finally {
      setUploading(false)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files)
  }

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    handleFiles(e.dataTransfer.files)
  }

  const clearPreviews = () => {
    setPreviews([])
    setUploadedUrls([])
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="w-full space-y-4">
      {/* Upload Area */}
      {previews.length === 0 && (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple={multiple}
            onChange={handleChange}
            className="hidden"
            disabled={uploading}
          />

          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-gray-400" />
            </div>

            <div>
              <p className="text-lg font-medium text-gray-700">
                Drop {multiple ? 'images' : 'image'} here or click to browse
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {multiple ? `Up to ${maxFiles} images` : 'Single image upload'}
              </p>
            </div>

            <Button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
            >
              Select {multiple ? 'Images' : 'Image'}
            </Button>
          </div>
        </div>
      )}

      {/* Preview Area */}
      {previews.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">
              {uploading ? 'Uploading...' : uploadedUrls.length > 0 ? 'Upload Complete!' : 'Preview'}
            </h3>
            {!uploading && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearPreviews}
              >
                <X className="w-4 h-4 mr-2" />
                Clear
              </Button>
            )}
          </div>

          <div className={`grid gap-4 ${multiple ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-1'}`}>
            {previews.map((preview, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 border-2 border-gray-200"
              >
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {uploading && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-white animate-spin" />
                  </div>
                )}
                {uploadedUrls[index] && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Display uploaded URLs */}
          {uploadedUrls.length > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm font-medium text-green-900 mb-2">
                Uploaded Successfully:
              </p>
              <div className="space-y-1">
                {uploadedUrls.map((url, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <code className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded truncate flex-1">
                      {url}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
