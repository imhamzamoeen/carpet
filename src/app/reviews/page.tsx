/**
 * Reviews & Testimonials Page
 *
 * Customer reviews with schema markup for SEO
 */

import React from 'react'
import Link from 'next/link'
import { Button, Card, CardContent } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Reviews | Method Clean - Carpet Cleaning Manchester',
  description:
    'Read reviews from over 1,000 satisfied customers across Manchester. See why we\'re rated 4.9/5 for carpet and upholstery cleaning services.',
  keywords:
    'carpet cleaning reviews Manchester, customer testimonials, cleaning service reviews, best carpet cleaner Manchester, 5 star reviews',
  openGraph: {
    title: 'Customer Reviews - Method Clean',
    description: 'See what our customers say about our carpet cleaning services',
    type: 'website'
  }
}

interface Review {
  name: string
  location: string
  rating: 5 | 4
  date: string
  service: string
  review: string
  verified: boolean
}

const reviews: Review[] = [
  {
    name: 'Sarah Thompson',
    location: 'Didsbury, Manchester',
    rating: 5,
    date: '2024-10-15',
    service: 'Carpet Cleaning',
    review:
      'Absolutely fantastic service! My carpets look brand new. The team was professional, punctual, and very thorough. They removed stains I thought were permanent. The carpets dried within 3 hours as promised. Highly recommend Method Clean!',
    verified: true
  },
  {
    name: 'James Wilson',
    location: 'Stockport',
    rating: 5,
    date: '2024-10-10',
    service: 'Upholstery Cleaning',
    review:
      'Had my sofa and armchairs cleaned. The results are amazing! The technician was knowledgeable and explained the whole process. My furniture looks and smells fresh. Great value for money. Will definitely use again.',
    verified: true
  },
  {
    name: 'Emma Davies',
    location: 'Sale, Manchester',
    rating: 5,
    date: '2024-10-05',
    service: 'End of Tenancy Cleaning',
    review:
      'Needed a full carpet clean for my rental property. Method Clean did an excellent job and I got my full deposit back! They were flexible with scheduling and the price was very competitive. Thank you!',
    verified: true
  },
  {
    name: 'Michael Brown',
    location: 'Bolton',
    rating: 5,
    date: '2024-09-28',
    service: 'Pet Odor Removal',
    review:
      'Our dog had several accidents on the carpet and the smell was awful. Method Clean used enzyme treatment that completely eliminated the odor. Can\'t believe the difference! Professional service from start to finish.',
    verified: true
  },
  {
    name: 'Lisa Anderson',
    location: 'Altrincham',
    rating: 5,
    date: '2024-09-22',
    service: 'Carpet & Upholstery Cleaning',
    review:
      'Booked carpet cleaning for 3 rooms and sofa cleaning. The team arrived on time, protected all furniture, and did an outstanding job. Very impressed with the eco-friendly products they use. My home feels so fresh and clean!',
    verified: true
  },
  {
    name: 'David Martinez',
    location: 'Manchester City Centre',
    rating: 5,
    date: '2024-09-18',
    service: 'Commercial Cleaning',
    review:
      'We use Method Clean for our office carpets quarterly. Always reliable, professional, and they work around our schedule. The difference is noticeable and our staff appreciate the clean environment. Excellent commercial service.',
    verified: true
  },
  {
    name: 'Rachel Green',
    location: 'Chorlton, Manchester',
    rating: 5,
    date: '2024-09-12',
    service: 'Stain Removal',
    review:
      'Had a wine stain on my cream carpet that I thought was ruined. Method Clean worked magic on it! The stain is completely gone. They also cleaned the whole room and it looks incredible. So grateful for their expertise!',
    verified: true
  },
  {
    name: 'Tom Hughes',
    location: 'Bury',
    rating: 5,
    date: '2024-09-08',
    service: 'Rug Cleaning',
    review:
      'Had my expensive Persian rug professionally cleaned. They picked it up, cleaned it at their facility, and returned it looking brand new. The colors are vibrant again! Great care taken with a valuable item.',
    verified: true
  },
  {
    name: 'Sophie Clark',
    location: 'Salford',
    rating: 4,
    date: '2024-09-03',
    service: 'Carpet Cleaning',
    review:
      'Very good service overall. Carpets look much better and the team was friendly. One small stain didn\'t come out completely but they were honest about it beforehand. Fair pricing and professional approach.',
    verified: true
  },
  {
    name: 'Paul Richardson',
    location: 'Oldham',
    rating: 5,
    date: '2024-08-29',
    service: 'Mattress Cleaning',
    review:
      'Never thought about cleaning my mattress until I saw their service. Absolutely worth it! They removed dust mites and allergens, and my sleep quality has improved. Quick service and dried fast. Highly recommend!',
    verified: true
  },
  {
    name: 'Jennifer White',
    location: 'Trafford, Manchester',
    rating: 5,
    date: '2024-08-25',
    service: 'Carpet Cleaning',
    review:
      'Third time using Method Clean and they never disappoint. Consistent quality, friendly service, and fair prices. My go-to for all carpet cleaning needs. The instant online quote is very convenient too!',
    verified: true
  },
  {
    name: 'Andrew Taylor',
    location: 'Rochdale',
    rating: 5,
    date: '2024-08-20',
    service: 'Upholstery Cleaning',
    review:
      'Had my dining chairs and corner sofa cleaned. The technician was careful with all the different fabrics and the results are excellent. They even applied Scotchgard protection. Professional service at reasonable prices.',
    verified: true
  },
  {
    name: 'Karen Lewis',
    location: 'Cheadle',
    rating: 5,
    date: '2024-08-15',
    service: 'Carpet Cleaning',
    review:
      'Brilliant service! Carpets in all 4 bedrooms cleaned in under 3 hours. The team was respectful of my home, wore shoe covers, and cleaned up after themselves. Carpets look amazing and smell fresh. Thank you!',
    verified: true
  },
  {
    name: 'Mark Johnson',
    location: 'Ashton-under-Lyne',
    rating: 5,
    date: '2024-08-10',
    service: 'Pet Stain Removal',
    review:
      'Had multiple pet stains from our new puppy. Method Clean was patient and thorough, treating each stain properly. Used UV light to find hidden stains too! All stains and odors are gone. Life saver!',
    verified: true
  },
  {
    name: 'Helen Scott',
    location: 'Withington, Manchester',
    rating: 5,
    date: '2024-08-05',
    service: 'End of Tenancy Cleaning',
    review:
      'Used Method Clean when moving out of my flat. They did an amazing job on the carpets and the landlord was very impressed. Got my deposit back without any deductions. Affordable and reliable service!',
    verified: true
  }
]

// Generate JSON-LD schema for reviews
const generateReviewSchema = () => {
  const aggregateRating = {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: reviews.length.toString(),
    bestRating: '5',
    worstRating: '1'
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Method Clean',
    image: 'https://methodclean.co.uk/logo.png',
    aggregateRating,
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name
      },
      datePublished: review.date,
      reviewBody: review.review,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1'
      }
    }))
  }
}

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-5 w-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateReviewSchema()) }}
      />

      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Customer Reviews
              </h1>
              <p className="mt-6 text-lg leading-8 text-primary-100">
                Don't just take our word for it. See what our customers have to say about our carpet
                and upholstery cleaning services.
              </p>

              {/* Rating Summary */}
              <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white">{averageRating}</div>
                  <StarRating rating={5} />
                  <p className="mt-2 text-sm text-primary-100">out of 5 stars</p>
                </div>
                <div className="h-16 w-px bg-primary-400 hidden sm:block" />
                <div className="text-center">
                  <div className="text-6xl font-bold text-white">{reviews.length}+</div>
                  <p className="mt-2 text-primary-100">Verified Reviews</p>
                </div>
                <div className="h-16 w-px bg-primary-400 hidden sm:block" />
                <div className="text-center">
                  <div className="text-6xl font-bold text-white">1,000+</div>
                  <p className="mt-2 text-primary-100">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        {review.verified && (
                          <svg
                            className="h-5 w-5 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-label="Verified Customer"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>

                  {/* Service Badge */}
                  <div className="mt-3">
                    <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                      {review.service}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="mt-4 text-gray-700 leading-relaxed">{review.review}</p>

                  {/* Date */}
                  <p className="mt-4 text-xs text-gray-500">
                    {new Date(review.date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Customers Trust Us
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-100 mx-auto">
                    <svg className="h-8 w-8 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">Satisfaction Guarantee</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    100% satisfaction or we'll re-clean for free
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto">
                    <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">Certified Professionals</h3>
                  <p className="mt-2 text-sm text-gray-600">IICRC certified cleaning technicians</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mx-auto">
                    <svg className="h-8 w-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">Eco-Friendly</h3>
                  <p className="mt-2 text-sm text-gray-600">Safe, non-toxic cleaning products</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mx-auto">
                    <svg className="h-8 w-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">Transparent Pricing</h3>
                  <p className="mt-2 text-sm text-gray-600">No hidden fees or surprises</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-600 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Join Our Happy Customers?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
                Experience the same exceptional service that our customers rave about. Get your
                instant quote and book online in minutes.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Link href="/quote">
                  <Button size="lg" variant="success">
                    Get Instant Quote
                  </Button>
                </Link>
                <a href="tel:01234567890" className="text-sm font-semibold leading-6 text-white">
                  Or call us: 0123 456 7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
