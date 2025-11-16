import type { Metadata } from 'next'
import {
  Hero,
  ServicesGrid,
  HowItWorks,
  WhyChooseUs,
  CTASection
} from '@/components/sections'

// SEO-optimized metadata for Fresh Fiber Carpet Cleaning Manchester
export const metadata: Metadata = {
  title: 'Fresh Fiber Carpet Cleaning Manchester | Professional Deep Clean',
  description: 'Fresh Fiber offers expert carpet cleaning in Manchester. Get an instant quote in 60 seconds. Same-day service, eco-friendly, 100% guarantee. Serving 100 miles.',
  keywords: [
    'Fresh Fiber Carpet cleaning Manchester',
    'carpet cleaning Manchester',
    'professional carpet cleaners Manchester',
    'rug cleaning Manchester',
    'upholstery cleaning Manchester',
    'carpet deep cleaning',
    'eco-friendly carpet cleaning',
    'same day carpet cleaning Manchester'
  ],
  openGraph: {
    title: 'Fresh Fiber Carpet Cleaning Manchester | Professional Deep Clean',
    description: 'Expert carpet, rug & upholstery cleaning in Manchester. Instant quote, same-day service, eco-friendly products. 100% satisfaction guarantee.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Fresh Fiber Carpet Cleaning'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fresh Fiber Carpet Cleaning Manchester',
    description: 'Professional carpet & upholstery cleaning. Same-day service, eco-friendly, 100% guarantee.'
  },
  alternates: {
    canonical: '/'
  }
}

export default function Home() {
  // Structured Data for SEO - LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://freshfibercleaning.co.uk/#business',
    'name': 'Fresh Fiber Carpet Cleaning',
    'image': 'https://freshfibercleaning.co.uk/logo.png',
    'description': 'Professional carpet, rug, and upholstery cleaning services in Manchester and within 100 miles. Expert deep cleaning with eco-friendly products.',
    'url': 'https://freshfibercleaning.co.uk',
    'telephone': '+441234567890',
    'priceRange': '££',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Manchester',
      'addressLocality': 'Manchester',
      'addressRegion': 'Greater Manchester',
      'postalCode': 'M1',
      'addressCountry': 'GB'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 53.4808,
      'longitude': -2.2426
    },
    'areaServed': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': 53.4808,
        'longitude': -2.2426
      },
      'geoRadius': '160934' // 100 miles in meters
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Cleaning Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Carpet Cleaning',
            'description': 'Professional deep cleaning for all types of carpets'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Rug Cleaning',
            'description': 'Specialist cleaning for delicate and antique rugs'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Upholstery Cleaning',
            'description': 'Deep cleaning for sofas, chairs, and fabric furniture'
          }
        }
      ]
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
      'https://facebook.com/freshfibercleaning',
      'https://twitter.com/freshfibercleaning',
      'https://instagram.com/freshfibercleaning'
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '127',
      'bestRating': '5',
      'worstRating': '1'
    }
  }

  // Organization Schema for brand entity recognition
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://freshfibercleaning.co.uk/#organization',
    'name': 'Fresh Fiber Carpet Cleaning',
    'legalName': 'Fresh Fiber Carpet Cleaning Ltd',
    'url': 'https://freshfibercleaning.co.uk',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://freshfibercleaning.co.uk/logo.png',
      'width': '600',
      'height': '60'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+441234567890',
      'contactType': 'customer service',
      'areaServed': 'GB',
      'availableLanguage': 'English'
    },
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Manchester',
      'addressRegion': 'Greater Manchester',
      'addressCountry': 'GB'
    },
    'sameAs': [
      'https://facebook.com/freshfibercleaning',
      'https://twitter.com/freshfibercleaning',
      'https://instagram.com/freshfibercleaning'
    ]
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://freshfibercleaning.co.uk'
      }
    ]
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Page Content */}
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
