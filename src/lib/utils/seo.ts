/**
 * SEO Utility Functions
 *
 * Helpers for generating SEO metadata, structured data, and Open Graph tags
 */

import type { Metadata } from 'next'

/**
 * Base site configuration
 */
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Blowup Cleaners',
  description: 'Professional carpet cleaning services in Manchester and surrounding areas. Expert cleaning for carpets, rugs, upholstery, and more.',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://methodclean.co.uk',
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@methodclean',
  locale: 'en_GB'
}

/**
 * Generate metadata for a page
 *
 * @param options - Metadata options
 * @returns Next.js Metadata object
 */
export function generateMetadata(options: {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
  noIndex?: boolean
  type?: 'website' | 'article'
}): Metadata {
  const {
    title,
    description,
    path = '',
    image = siteConfig.ogImage,
    keywords = [],
    noIndex = false,
    type = 'website'
  } = options

  const url = `${siteConfig.url}${path}`
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    ...(noIndex && { robots: 'noindex, nofollow' }),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: siteConfig.locale,
      type
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: siteConfig.twitterHandle
    },
    alternates: {
      canonical: url
    }
  }
}

/**
 * Generate LocalBusiness structured data (Schema.org)
 *
 * @param options - Business options
 * @returns JSON-LD structured data object
 */
export function generateLocalBusinessSchema(options?: {
  address?: string
  postcode?: string
  phone?: string
  email?: string
  latitude?: number
  longitude?: number
  rating?: number
  reviewCount?: number
}) {
  const {
    address = '123 Main Street, Manchester',
    postcode = 'M1 1AA',
    phone = '+44-161-123-4567',
    email = 'info@methodclean.co.uk',
    latitude = 53.4808,
    longitude = -2.2426,
    rating = 4.8,
    reviewCount = 127
  } = options || {}

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteConfig.url,
    'name': siteConfig.name,
    'description': siteConfig.description,
    'url': siteConfig.url,
    'logo': `${siteConfig.url}/images/logo.png`,
    'image': `${siteConfig.url}/images/og-image.jpg`,
    'telephone': phone,
    'email': email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': address,
      'addressLocality': 'Manchester',
      'postalCode': postcode,
      'addressCountry': 'GB'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': latitude,
      'longitude': longitude
    },
    'areaServed': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': latitude,
        'longitude': longitude
      },
      'geoRadius': '100 miles'
    },
    'priceRange': '££',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': rating.toString(),
      'reviewCount': reviewCount.toString(),
      'bestRating': '5',
      'worstRating': '1'
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '08:00',
        'closes': '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Saturday',
        'opens': '09:00',
        'closes': '17:00'
      }
    ],
    'sameAs': [
      'https://www.facebook.com/methodclean',
      'https://www.instagram.com/methodclean',
      'https://twitter.com/methodclean'
    ]
  }
}

/**
 * Generate Service structured data
 *
 * @param service - Service details
 * @returns JSON-LD structured data object
 */
export function generateServiceSchema(service: {
  name: string
  description: string
  priceFrom: number
  priceUnit: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': service.name,
    'description': service.description,
    'provider': {
      '@type': 'LocalBusiness',
      'name': siteConfig.name,
      'url': siteConfig.url
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Manchester'
    },
    'offers': {
      '@type': 'Offer',
      'priceSpecification': {
        '@type': 'PriceSpecification',
        'price': service.priceFrom.toString(),
        'priceCurrency': 'GBP',
        'unitText': service.priceUnit
      }
    }
  }
}

/**
 * Generate FAQ structured data
 *
 * @param faqs - Array of FAQ objects
 * @returns JSON-LD structured data object
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }
}

/**
 * Generate Article structured data (for blog posts)
 *
 * @param article - Article details
 * @returns JSON-LD structured data object
 */
export function generateArticleSchema(article: {
  title: string
  description: string
  publishedAt: Date
  updatedAt?: Date
  author?: string
  image?: string
  url: string
}) {
  const {
    title,
    description,
    publishedAt,
    updatedAt,
    author = `${siteConfig.name} Team`,
    image = siteConfig.ogImage,
    url
  } = article

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': title,
    'description': description,
    'image': image,
    'datePublished': publishedAt.toISOString(),
    'dateModified': (updatedAt || publishedAt).toISOString(),
    'author': {
      '@type': 'Person',
      'name': author
    },
    'publisher': {
      '@type': 'Organization',
      'name': siteConfig.name,
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteConfig.url}/images/logo.png`
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': url
    }
  }
}

/**
 * Generate Review structured data
 *
 * @param review - Review details
 * @returns JSON-LD structured data object
 */
export function generateReviewSchema(review: {
  customerName: string
  rating: number
  reviewText: string
  date: Date
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'LocalBusiness',
      'name': siteConfig.name,
      'url': siteConfig.url
    },
    'author': {
      '@type': 'Person',
      'name': review.customerName
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': review.rating.toString(),
      'bestRating': '5',
      'worstRating': '1'
    },
    'reviewBody': review.reviewText,
    'datePublished': review.date.toISOString()
  }
}

/**
 * Generate BreadcrumbList structured data
 *
 * @param breadcrumbs - Array of breadcrumb items
 * @returns JSON-LD structured data object
 */
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; path: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${siteConfig.url}${item.path}`
    }))
  }
}

/**
 * Render JSON-LD script tag for structured data
 *
 * @param data - Structured data object
 * @returns Script tag string for embedding in HTML
 */
export function renderStructuredData(data: object): string {
  return JSON.stringify(data)
}

/**
 * Generate robots meta tag value
 *
 * @param options - Robot directives
 * @returns Robots meta tag value
 */
export function generateRobots(options: {
  index?: boolean
  follow?: boolean
  noarchive?: boolean
  nosnippet?: boolean
  noimageindex?: boolean
}): string {
  const {
    index = true,
    follow = true,
    noarchive = false,
    nosnippet = false,
    noimageindex = false
  } = options

  const directives: string[] = []

  directives.push(index ? 'index' : 'noindex')
  directives.push(follow ? 'follow' : 'nofollow')

  if (noarchive) directives.push('noarchive')
  if (nosnippet) directives.push('nosnippet')
  if (noimageindex) directives.push('noimageindex')

  return directives.join(', ')
}
