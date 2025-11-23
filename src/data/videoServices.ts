/**
 * Video Services Data
 *
 * Central data source for video-based service cards
 * Maps Vercel Blob video URLs to cleaning services
 */

export interface VideoService {
  id: string
  name: string
  slug: string
  description: string
  videoUrl: string
  priceFrom: string
  priceUnit: string
  category: 'residential' | 'commercial' | 'specialist'
  duration?: string // For VideoObject schema
  thumbnailUrl?: string // Optional poster image
}

const BASE_VIDEO_URL = 'https://op9ck9o1huaxywp5.public.blob.vercel-storage.com'

export const videoServices: VideoService[] = [
  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    slug: 'carpet-cleaning',
    description: 'Professional deep cleaning for all types of carpets with eco-friendly products',
    videoUrl: `${BASE_VIDEO_URL}/Carpet%20Cleaning.mp4`,
    priceFrom: '£25',
    priceUnit: 'per room',
    category: 'residential',
    duration: 'PT30S' // ISO 8601 duration format (30 seconds - estimate)
  },
  {
    id: 'rug-cleaning',
    name: 'Rug Cleaning',
    slug: 'rug-cleaning',
    description: 'Specialist cleaning for delicate and antique rugs of all sizes',
    videoUrl: `${BASE_VIDEO_URL}/Rug%20Cleaning.mp4`,
    priceFrom: '£30',
    priceUnit: 'per rug',
    category: 'specialist',
    duration: 'PT30S'
  },
  {
    id: 'upholstery-cleaning',
    name: 'Upholstery Cleaning',
    slug: 'upholstery-cleaning',
    description: 'Deep cleaning for sofas, chairs, and fabric furniture',
    videoUrl: `${BASE_VIDEO_URL}/Upholstery%20cleaning.mp4`,
    priceFrom: '£20',
    priceUnit: 'per seat',
    category: 'residential',
    duration: 'PT30S'
  },
  {
    id: 'mattress-cleaning',
    name: 'Mattress Cleaning',
    slug: 'mattress-cleaning',
    description: 'Deep sanitization and allergen removal for healthier sleep',
    videoUrl: `${BASE_VIDEO_URL}/Mattress%20Cleaning.mp4`,
    priceFrom: '£40',
    priceUnit: 'from single',
    category: 'specialist',
    duration: 'PT30S'
  },
  {
    id: 'stain-removal',
    name: 'Stain Removal',
    slug: 'stain-removal',
    description: 'Specialist treatment for stubborn stains and marks',
    videoUrl: `${BASE_VIDEO_URL}/Stain%20Removal.mp4`,
    priceFrom: '£15',
    priceUnit: 'additional',
    category: 'specialist',
    duration: 'PT30S'
  },
  {
    id: 'commercial-cleaning',
    name: 'Commercial Cleaning',
    slug: 'commercial-cleaning',
    description: 'Professional cleaning for offices and commercial spaces',
    videoUrl: `${BASE_VIDEO_URL}/Commercial%20Cleaning.mp4`,
    priceFrom: '£2',
    priceUnit: 'per sqm',
    category: 'commercial',
    duration: 'PT30S'
  },
  {
    id: 'end-of-tenancy',
    name: 'End of Tenancy Cleaning',
    slug: 'end-of-tenancy',
    description: 'Comprehensive deep cleaning for rental properties and move-outs',
    videoUrl: `${BASE_VIDEO_URL}/End%20of%20Tenancy%20Cleaning.mp4`,
    priceFrom: '£150',
    priceUnit: 'per property',
    category: 'residential',
    duration: 'PT30S'
  },
  {
    id: 'pet-odor-removal',
    name: 'Pet Odor Removal',
    slug: 'pet-odor-removal',
    description: 'Specialist treatment to eliminate pet odors and bacteria from carpets and furniture',
    videoUrl: `${BASE_VIDEO_URL}/pet%20odor.mp4`,
    priceFrom: '£25',
    priceUnit: 'additional',
    category: 'specialist',
    duration: 'PT30S'
  }
]

/**
 * Get service by slug
 */
export function getServiceBySlug(slug: string): VideoService | undefined {
  return videoServices.find(service => service.slug === slug)
}

/**
 * Get services by category
 */
export function getServicesByCategory(category: VideoService['category']): VideoService[] {
  return videoServices.filter(service => service.category === category)
}
