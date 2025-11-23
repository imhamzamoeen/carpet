# Vercel Blob Storage - Implementation Guide

## Overview
Vercel Blob Storage is now fully integrated into your Blowup Cleaners application. Use it for storing images, documents, and other user-uploaded files.

## Environment Setup

### 1. Configure Environment Variable
Add to your `.env.local` file:
```env
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_OP9Ck9o1HUAxywp5_95c54yNx28i2uECUNRGCD660FNsSZr"
```

### 2. Vercel Dashboard Setup (Production)
1. Go to https://vercel.com/dashboard
2. Select your project
3. Navigate to **Storage** tab
4. Create a new **Blob** store
5. Copy the `BLOB_READ_WRITE_TOKEN`
6. Add it to your project's environment variables

---

## Files Created

### 1. **Blob Utility Library** - `/src/lib/blob.ts`
Contains all helper functions for Vercel Blob operations:

- `uploadToBlob()` - Upload any file
- `uploadImage()` - Upload single image with validation
- `uploadMultipleImages()` - Upload multiple images at once
- `deleteFromBlob()` - Delete a file
- `listBlobs()` - List all files (with pagination)
- `getBlobMetadata()` - Get file info (size, type, etc.)

### 2. **Upload API Route** - `/src/app/api/upload/route.ts`
RESTful API endpoint for file uploads:
- Handles single and multiple file uploads
- Supports folder organization
- Automatic image validation

### 3. **Upload Component** - `/src/components/ImageUpload.tsx`
React component with drag-and-drop support:
- Image preview
- Progress indicator
- Multiple file support
- Error handling

---

## Usage Examples

### Example 1: Basic Upload (Direct API Call)

```typescript
// From any client component or API route
import { uploadImage } from '@/lib/blob'

// Upload an image file
const file = formData.get('image') as File
const result = await uploadImage(file, 'gallery')
console.log(result.url) // https://xxx.public.blob.vercel-storage.com/gallery/image-abc123.jpg
```

### Example 2: Using the Upload Component

```tsx
"use client"

import ImageUpload from '@/components/ImageUpload'

export default function MyPage() {
  const handleUploadComplete = (urls: string[]) => {
    console.log('Uploaded files:', urls)
    // Save URLs to database, display in gallery, etc.
  }

  return (
    <ImageUpload
      folder="before-after"
      multiple={true}
      maxFiles={10}
      onUploadComplete={handleUploadComplete}
      onError={(error) => alert(error)}
    />
  )
}
```

### Example 3: Form Submission with File Upload

```tsx
"use client"

import { useState } from 'react'

export default function GalleryForm() {
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    // Upload image
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })

    const { url } = await response.json()
    setImageUrl(url)

    // Now save to database with the URL
    await fetch('/api/gallery', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: formData.get('title'),
        imageUrl: url
      })
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Image title" required />
      <input type="file" name="file" accept="image/*" required />
      <input type="hidden" name="folder" value="gallery" />
      <button type="submit">Upload & Save</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </form>
  )
}
```

### Example 4: Upload Multiple Files

```typescript
// In an API route or server action
import { uploadMultipleImages } from '@/lib/blob'

const files = formData.getAll('images') as File[]
const results = await uploadMultipleImages(files, 'before-after')

// results is an array of { url, downloadUrl, pathname }
results.forEach(({ url }) => {
  console.log('Uploaded:', url)
})
```

### Example 5: List All Uploads in a Folder

```typescript
import { listBlobs } from '@/lib/blob'

// List all images in gallery folder
const { blobs } = await listBlobs({ prefix: 'gallery/' })

blobs.forEach(blob => {
  console.log(blob.pathname, blob.size, blob.uploadedAt)
})
```

### Example 6: Delete an Upload

```typescript
import { deleteFromBlob } from '@/lib/blob'

const url = 'https://xxx.public.blob.vercel-storage.com/gallery/old-image.jpg'
await deleteFromBlob(url)
```

---

## Common Use Cases

### 1. **Gallery Management**
```typescript
// Upload before/after images
const beforeImage = await uploadImage(beforeFile, 'gallery/before')
const afterImage = await uploadImage(afterFile, 'gallery/after')

// Save to database
await prisma.galleryItem.create({
  data: {
    title: 'Living Room Clean',
    beforeImageUrl: beforeImage.url,
    afterImageUrl: afterImage.url
  }
})
```

### 2. **Profile Pictures**
```typescript
// Upload user profile picture with unique naming
const result = await uploadImage(file, `profiles/${userId}`)
await prisma.user.update({
  where: { id: userId },
  data: { avatarUrl: result.url }
})
```

### 3. **Document Storage**
```typescript
import { uploadToBlob } from '@/lib/blob'

// Upload PDF invoice
const invoice = formData.get('invoice') as File
const result = await uploadToBlob(
  `invoices/${orderId}.pdf`,
  invoice,
  {
    access: 'private', // Not publicly accessible
    contentType: 'application/pdf'
  }
)
```

### 4. **Blog Post Images**
```typescript
// Upload featured image for blog post
const featuredImage = await uploadImage(file, 'blog')

await prisma.blogPost.create({
  data: {
    title: 'Carpet Cleaning Tips',
    content: '...',
    featuredImageUrl: featuredImage.url
  }
})
```

---

## Best Practices

### 1. **Always Use Folders**
Organize uploads by purpose:
- `gallery/` - Before/after images
- `blog/` - Blog post images
- `profiles/` - User avatars
- `documents/` - PDFs, invoices

### 2. **Add Random Suffixes**
By default, `addRandomSuffix: true` prevents file overwrites:
```typescript
// This creates: image-abc123.jpg (not image.jpg)
uploadImage(file, 'gallery')
```

### 3. **Validate Before Upload**
```typescript
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

if (file.size > MAX_FILE_SIZE) {
  throw new Error('File too large (max 5MB)')
}

if (!file.type.startsWith('image/')) {
  throw new Error('Only images allowed')
}
```

### 4. **Clean Up Old Files**
Delete files when no longer needed:
```typescript
// When deleting a gallery item
const item = await prisma.galleryItem.findUnique({ where: { id } })
if (item.imageUrl) {
  await deleteFromBlob(item.imageUrl)
}
await prisma.galleryItem.delete({ where: { id } })
```

### 5. **Use Private Access for Sensitive Files**
```typescript
// Invoices, private documents
await uploadToBlob('invoices/secret.pdf', file, {
  access: 'private' // Requires authentication to access
})
```

---

## API Reference

### `uploadToBlob(filename, file, options?)`
**Parameters:**
- `filename` (string) - Path/name for the file
- `file` (File | Blob | ArrayBuffer | string) - File content
- `options` (object)
  - `access` - 'public' | 'private' (default: 'public')
  - `addRandomSuffix` - boolean (default: true)
  - `cacheControlMaxAge` - number (seconds)
  - `contentType` - string (MIME type)

**Returns:** `{ url, pathname, downloadUrl }`

---

### `uploadImage(file, folder?)`
**Parameters:**
- `file` (File) - Image file to upload
- `folder` (string) - Optional folder path

**Returns:** `{ url, pathname, downloadUrl }`

**Throws:** Error if file is not an image

---

### `deleteFromBlob(url)`
**Parameters:**
- `url` (string) - Full URL of the blob to delete

**Returns:** `{ success: true }`

---

### `listBlobs(options?)`
**Parameters:**
- `options` (object)
  - `prefix` - Filter by folder (e.g., 'gallery/')
  - `limit` - Max results per page
  - `cursor` - Pagination cursor

**Returns:** `{ blobs: [], cursor, hasMore }`

---

## Troubleshooting

### Error: "BLOB_READ_WRITE_TOKEN is not defined"
**Solution:** Add the token to `.env.local`:
```env
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_..."
```

### Error: "Failed to upload file to storage"
**Solutions:**
1. Check token is correct
2. Verify file size is under 500MB
3. Check network connection
4. Ensure token has write permissions

### Images not displaying
**Solutions:**
1. Use `blob.url` not `blob.downloadUrl` for public access
2. Check `access: 'public'` is set
3. Verify URL is accessible in browser

---

## Cost & Limits

### Free Tier (Hobby)
- **Storage:** 1 GB
- **Bandwidth:** 100 GB/month
- **Requests:** Unlimited

### Pro Tier
- **Storage:** $0.15/GB/month
- **Bandwidth:** $0.15/GB
- **No request limits**

### File Limits
- **Max file size:** 500 MB per file
- **Max request size:** 500 MB
- **No file count limit**

---

## Need Help?

- Vercel Blob Docs: https://vercel.com/docs/storage/vercel-blob
- Code examples: See files in this project
- Support: https://vercel.com/support

---

**You're all set to use Vercel Blob Storage! 🎉**
