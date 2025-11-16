/**
 * Gallery Page
 *
 * Before/After photos showcasing cleaning results
 */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button, Card, CardContent } from '@/components/ui'

interface GalleryItem {
  id: number
  title: string
  service: string
  location: string
  description: string
  category: 'carpet' | 'upholstery' | 'rug' | 'commercial' | 'stain'
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Living Room Carpet Deep Clean',
    service: 'Carpet Cleaning',
    location: 'Didsbury, Manchester',
    description:
      'Heavy traffic area with stubborn dirt and stains. Our deep steam cleaning restored the carpet to like-new condition.',
    category: 'carpet'
  },
  {
    id: 2,
    title: 'Cream Sofa Restoration',
    service: 'Upholstery Cleaning',
    location: 'Sale, Manchester',
    description:
      'Cream fabric sofa with various stains and discoloration. Professional cleaning removed all stains and brightened the fabric.',
    category: 'upholstery'
  },
  {
    id: 3,
    title: 'Red Wine Stain Removal',
    service: 'Stain Removal',
    location: 'Altrincham',
    description:
      'Large red wine stain on beige carpet. Our specialized stain removal treatment completely eliminated the stain.',
    category: 'stain'
  },
  {
    id: 4,
    title: 'Persian Rug Cleaning',
    service: 'Rug Cleaning',
    location: 'Stockport',
    description:
      '150-year-old Persian rug with dull colors and dirt buildup. Gentle cleaning restored vibrancy without damage.',
    category: 'rug'
  },
  {
    id: 5,
    title: 'Office Carpet Maintenance',
    service: 'Commercial Cleaning',
    location: 'Manchester City Centre',
    description:
      'High-traffic office carpet with embedded dirt. Regular maintenance cleaning keeps the office looking professional.',
    category: 'commercial'
  },
  {
    id: 6,
    title: 'Pet Stain Treatment',
    service: 'Pet Odor Removal',
    location: 'Bolton',
    description:
      'Multiple pet accidents on hallway carpet. UV detection and enzyme treatment removed all stains and odors.',
    category: 'stain'
  },
  {
    id: 7,
    title: 'Master Bedroom Carpet',
    service: 'Carpet Cleaning',
    location: 'Cheadle',
    description:
      'Bedroom carpet with years of dust and allergen buildup. Deep cleaning improved air quality and appearance.',
    category: 'carpet'
  },
  {
    id: 8,
    title: 'Leather Sofa Conditioning',
    service: 'Upholstery Cleaning',
    location: 'Trafford',
    description:
      'Dry, cracked leather sofa. Our cleaning and conditioning treatment restored suppleness and shine.',
    category: 'upholstery'
  },
  {
    id: 9,
    title: 'Coffee Stain Removal',
    service: 'Stain Removal',
    location: 'Salford',
    description:
      'Set-in coffee stains on office carpet. Pre-treatment and hot water extraction removed all traces.',
    category: 'stain'
  },
  {
    id: 10,
    title: 'Oriental Rug Revival',
    service: 'Rug Cleaning',
    location: 'Wilmslow',
    description:
      'Faded oriental rug with dirt in the pile. Specialized cleaning brought back the original colors.',
    category: 'rug'
  },
  {
    id: 11,
    title: 'Restaurant Carpet Cleaning',
    service: 'Commercial Cleaning',
    location: 'Manchester',
    description:
      'Restaurant carpet with food stains and high foot traffic. Deep clean removed stains and refreshed the space.',
    category: 'commercial'
  },
  {
    id: 12,
    title: 'Staircase Carpet Refresh',
    service: 'Carpet Cleaning',
    location: 'Oldham',
    description:
      'Heavily soiled staircase carpet. Our cleaning made a dramatic difference in this high-traffic area.',
    category: 'carpet'
  }
]

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'carpet', label: 'Carpet Cleaning' },
  { value: 'upholstery', label: 'Upholstery Cleaning' },
  { value: 'rug', label: 'Rug Cleaning' },
  { value: 'stain', label: 'Stain Removal' },
  { value: 'commercial', label: 'Commercial' }
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Work Gallery
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              See the difference professional carpet and upholstery cleaning can make. Real results
              from real customers across Greater Manchester.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              {/* Placeholder for Before/After Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-center">
                        <div className="h-24 w-24 rounded-lg bg-gray-400 mb-2" />
                        <span className="text-xs font-medium text-gray-600">BEFORE</span>
                      </div>
                      <svg
                        className="h-8 w-8 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                      <div className="text-center">
                        <div className="h-24 w-24 rounded-lg bg-gray-100 mb-2" />
                        <span className="text-xs font-medium text-gray-600">AFTER</span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">Photo placeholder</p>
                  </div>
                </div>

                {/* Service Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-gray-900 shadow-sm">
                    {item.service}
                  </span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-500 flex items-center">
                  <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item.location}
                </p>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Upload Note Section */}
      <div className="bg-blue-50 border-t border-blue-100 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <svg
              className="mx-auto h-12 w-12 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              We Document Every Transformation
            </h2>
            <p className="mt-4 text-gray-600">
              We take before and after photos of every job to showcase the quality of our work. With
              your permission, we may feature your transformation in our gallery to inspire other
              customers.
            </p>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Proven Results Every Time
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our professional cleaning process delivers consistent, outstanding results that our
            customers love.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Card className="border-primary-200 bg-primary-50">
            <CardContent className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white mb-4">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Deep Cleaning</h3>
              <p className="mt-3 text-gray-600">
                Our powerful truck-mounted equipment removes embedded dirt, allergens, and bacteria
                that regular vacuuming can't reach.
              </p>
            </CardContent>
          </Card>

          <Card className="border-success-200 bg-success-50">
            <CardContent className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success-600 text-white mb-4">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Stain Removal</h3>
              <p className="mt-3 text-gray-600">
                Professional-grade stain removers and proven techniques eliminate even the toughest
                stains including wine, coffee, and pet accidents.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white mb-4">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Fast Drying</h3>
              <p className="mt-3 text-gray-600">
                Our powerful extraction removes most moisture, leaving carpets dry within 2-4 hours
                so you can get back to normal quickly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for Your Own Transformation?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Experience the same outstanding results. Get your instant quote and see the difference
              professional cleaning can make.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link href="/quote">
                <Button size="lg" variant="success">
                  Get Instant Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
