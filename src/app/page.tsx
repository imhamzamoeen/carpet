import type { Metadata } from 'next'
import {
  ServicesGrid,
  HowItWorks,
  WhyChooseUs,
  CTASection
} from '@/components/sections'
import { HeroPremium } from '@/components/sections/HeroPremium'
import CompaniesHouseTrust from '@/components/sections/CompaniesHouseTrust'
import Certifications from '@/components/sections/Certifications'

// SEO-optimized metadata for Cleaners in Manchester
export const metadata: Metadata = {
  // SEO: Title <60 chars, keyword front-loaded for SERP visibility
  title: 'Cleaners Manchester | Professional Cleaning | Blowup',
  // SEO: Description <155 chars with CTA
  description: 'Professional cleaners in Manchester. Carpet, upholstery, rug & deep cleaning. Same-day service, 100% guarantee. Get instant quote in 60 seconds.',
  keywords: [
    'cleaners in manchester',
    'cleaners manchester',
    'professional cleaners manchester',
    'cleaning services manchester',
    'carpet cleaners manchester',
    'upholstery cleaners manchester',
    'deep cleaning manchester',
    'professional cleaning manchester',
    'manchester cleaners',
    'commercial cleaners manchester',
    'domestic cleaners manchester',
    'rug cleaners manchester'
  ],
  authors: [{ name: 'Blowup Cleaners Team' }], // E-E-A-T signal
  openGraph: {
    title: 'Cleaners Manchester | Professional Cleaning | Blowup',
    description: 'Professional cleaners in Manchester. Carpet, upholstery, rug & deep cleaning. Same-day service, 100% guarantee. Get instant quote in 60 seconds.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Blowup Cleaners',
    url: 'https://blowupcleaners.co.uk'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaners Manchester | Blowup Cleaners',
    description: 'Professional cleaning services in Manchester. Carpet, upholstery, rug & deep cleaning. Same-day service, 100% guarantee.'
  },
  alternates: {
    canonical: 'https://blowupcleaners.co.uk'
  }
}

export default function Home() {
  // Structured Data for SEO - LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://blowupcleaners.co.uk/#business',
    'name': 'Blowup Cleaners',
    'image': 'https://blowupcleaners.co.uk/logo.png',
    'description': 'Professional cleaners in Manchester offering carpet cleaning, upholstery cleaning, rug cleaning, deep cleaning, commercial and domestic cleaning services. Serving Manchester and within 100 miles with eco-friendly products and same-day service.',
    'url': 'https://blowupcleaners.co.uk',
    'telephone': '+447405428259',
    'priceRange': '££',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '230 Sealand Road',
      'addressLocality': 'Chester',
      'addressRegion': 'Cheshire',
      'postalCode': 'CH1 4LH',
      'addressCountry': 'GB'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 53.1905,
      'longitude': -2.9746
    },
    'areaServed': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': 53.1905,
        'longitude': -2.9746
      },
      'geoRadius': '160934' // 100 miles in meters
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Professional Cleaning Services Manchester',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Carpet Cleaning Manchester',
            'description': 'Professional deep cleaning for all types of carpets in Manchester'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Upholstery Cleaning Manchester',
            'description': 'Deep cleaning for sofas, chairs, and fabric furniture in Manchester'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Rug Cleaning Manchester',
            'description': 'Specialist cleaning for delicate and antique rugs in Manchester'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Deep Cleaning Manchester',
            'description': 'Comprehensive deep cleaning services for homes and offices in Manchester'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Commercial Cleaning Manchester',
            'description': 'Professional commercial cleaning services for businesses in Manchester'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Domestic Cleaning Manchester',
            'description': 'Residential cleaning services for homes in Manchester'
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
      'https://facebook.com/blowupcleaners',
      'https://twitter.com/blowupcleaners',
      'https://instagram.com/blowupcleaners'
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '127',
      'bestRating': '5',
      'worstRating': '1'
    }
  }

  // Organization Schema for brand entity recognition with E-E-A-T signals
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://blowupcleaners.co.uk/#organization',
    'name': 'Blowup Cleaners',
    'legalName': 'HOPOLLO LTD',
    'url': 'https://blowupcleaners.co.uk',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://blowupcleaners.co.uk/logo.png',
      'width': '600',
      'height': '60'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+447405428259',
      'contactType': 'customer service',
      'areaServed': 'GB',
      'availableLanguage': 'English'
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '230 Sealand Road',
      'addressLocality': 'Chester',
      'addressRegion': 'Cheshire',
      'postalCode': 'CH1 4LH',
      'addressCountry': 'GB'
    },
    'sameAs': [
      'https://facebook.com/blowupcleaners',
      'https://twitter.com/blowupcleaners',
      'https://instagram.com/blowupcleaners'
    ],
    'hasCredential': [
      {
        '@type': 'EducationalOccupationalCredential',
        'credentialCategory': 'certification',
        'name': 'NCCA Certified',
        'description': 'National Carpet Cleaners Association accredited professionals'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        'credentialCategory': 'certification',
        'name': 'Fully Insured',
        'description': 'Comprehensive liability insurance for commercial and residential work'
      }
    ]
  }

  // Speakable Schema for Voice Search Optimization
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Professional Cleaners Manchester',
    'description': 'Professional cleaners in Manchester offering carpet, upholstery, rug and deep cleaning services with same-day availability and 100% guarantee.',
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': [
        '.speakable-headline',
        '.speakable-tldr',
        '.speakable-cta'
      ]
    }
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
        'item': 'https://blowupcleaners.co.uk'
      }
    ]
  }

  return (
    <>
      {/* Structured Data - E-E-A-T, AI & Voice Search Optimization */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Page Content */}
      <HeroPremium />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <CompaniesHouseTrust />
      <Certifications />
      <CTASection />
    </>
  )
}
