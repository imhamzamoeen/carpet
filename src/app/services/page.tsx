/**
 * Services Overview Page
 *
 * Complete list of all cleaning services offered
 */

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Method Clean - Professional Cleaning Services Manchester',
  description:
    'Professional carpet cleaning, upholstery cleaning, rug cleaning, and more in Manchester. Expert cleaning services with eco-friendly products and guaranteed results.',
  keywords:
    'carpet cleaning Manchester, upholstery cleaning, rug cleaning, stain removal, pet odor removal, sofa cleaning, mattress cleaning, commercial cleaning',
  openGraph: {
    title: 'Our Services - Method Clean',
    description: 'Professional cleaning services in Manchester and surrounding areas',
    type: 'website'
  }
}

const services = [
  {
    slug: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    shortDescription: 'Deep steam cleaning for all carpet types',
    description:
      'Professional deep steam cleaning that removes dirt, stains, and allergens from all types of carpets. We use eco-friendly products and powerful extraction equipment to leave your carpets fresh, clean, and dry within hours.',
    features: [
      'Deep steam extraction cleaning',
      'Stain and odor removal',
      'Fast drying time (2-4 hours)',
      'Safe for children and pets',
      'All carpet types and materials',
      'Pre-treatment of heavy stains'
    ],
    pricing: 'From £25 per room',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    )
  },
  {
    slug: 'upholstery-cleaning',
    name: 'Upholstery Cleaning',
    shortDescription: 'Expert cleaning for sofas, chairs & furniture',
    description:
      'Specialist upholstery cleaning for sofas, armchairs, dining chairs, and all fabric furniture. Our gentle yet effective cleaning process removes dirt, stains, and odors while protecting your furniture fabrics.',
    features: [
      'All furniture types and fabrics',
      'Delicate fabric protection',
      'Color-safe cleaning solutions',
      'Dust mite and allergen removal',
      'Leather cleaning and conditioning',
      'Scotchgard protection available'
    ],
    pricing: 'From £40 per item',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    )
  },
  {
    slug: 'rug-cleaning',
    name: 'Rug Cleaning',
    shortDescription: 'Specialist cleaning for all rug types',
    description:
      'Professional cleaning for area rugs, Persian rugs, oriental rugs, and specialty rugs. We understand the unique requirements of different rug materials and use appropriate cleaning methods to preserve their beauty.',
    features: [
      'Oriental and Persian rugs',
      'Antique rug cleaning',
      'Wool, silk, and synthetic materials',
      'Fringe cleaning and repair',
      'Pick-up and delivery available',
      'Color restoration services'
    ],
    pricing: 'From £35 per rug',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    )
  },
  {
    slug: 'stain-removal',
    name: 'Stain Removal',
    shortDescription: 'Specialized treatment for tough stains',
    description:
      'Expert stain removal service for even the toughest stains including wine, coffee, pet stains, ink, and more. Our technicians use professional-grade stain removers and proven techniques to eliminate stubborn stains.',
    features: [
      'Wine, coffee, and food stains',
      'Pet stains and odors',
      'Ink and dye removal',
      'Blood and bodily fluid stains',
      'Grease and oil stains',
      'Guarantee on stain removal'
    ],
    pricing: 'From £15 (add-on)',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    )
  },
  {
    slug: 'pet-odor-removal',
    name: 'Pet Odor Removal',
    shortDescription: 'Complete pet odor & stain treatment',
    description:
      'Specialized pet odor and stain removal service that eliminates pet urine, feces, and vomit odors at the molecular level. We don\'t just mask odors – we eliminate them completely using enzyme-based treatments.',
    features: [
      'Enzyme-based odor elimination',
      'UV light stain detection',
      'Deep carpet pad treatment',
      'Anti-bacterial sanitization',
      'Long-lasting odor prevention',
      'Safe for pets and children'
    ],
    pricing: 'From £50',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    )
  },
  {
    slug: 'end-of-tenancy-cleaning',
    name: 'End of Tenancy Cleaning',
    shortDescription: 'Deep clean for rental properties',
    description:
      'Comprehensive cleaning service for tenants moving out and landlords preparing properties. We deep clean carpets, upholstery, and all flooring to help ensure you get your deposit back or attract new tenants.',
    features: [
      'Full property carpet cleaning',
      'Upholstery and curtain cleaning',
      'Stain and odor removal',
      'Deposit-back guarantee',
      'Fast turnaround available',
      'Certified cleaning report'
    ],
    pricing: 'From £150 per property',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    )
  },
  {
    slug: 'mattress-cleaning',
    name: 'Mattress Cleaning',
    shortDescription: 'Deep sanitization for healthier sleep',
    description:
      'Professional mattress cleaning and sanitization service that removes dust mites, allergens, bacteria, and stains. Improve your sleep quality and indoor air quality with our deep mattress cleaning.',
    features: [
      'Dust mite and allergen removal',
      'Deep steam sanitization',
      'Stain and odor treatment',
      'Anti-bacterial protection',
      'Fast drying (2-3 hours)',
      'All mattress types and sizes'
    ],
    pricing: 'From £30 per mattress',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    )
  },
  {
    slug: 'commercial-cleaning',
    name: 'Commercial Cleaning',
    shortDescription: 'Professional service for businesses',
    description:
      'Specialized commercial carpet and upholstery cleaning for offices, hotels, restaurants, retail spaces, and other businesses. We work around your schedule to minimize disruption to your operations.',
    features: [
      'Office and retail spaces',
      'Hotels and hospitality',
      'Restaurants and cafes',
      'Out-of-hours service available',
      'Regular maintenance contracts',
      'Large-scale equipment'
    ],
    pricing: 'Custom quote',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    )
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Cleaning Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Professional carpet and upholstery cleaning services for homes and businesses in
              Manchester and surrounding areas. Expert service, eco-friendly products, guaranteed
              results.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
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

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl hover:border-primary-300"
            >
              <div className="flex-1 p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-600 text-white group-hover:bg-primary-700 transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{service.name}</h2>
                    <p className="mt-1 text-sm text-gray-500">{service.shortDescription}</p>
                  </div>
                </div>

                <p className="mt-6 text-base text-gray-600">{service.description}</p>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-gray-900">What's Included:</h3>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm text-gray-600">
                        <svg
                          className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-success-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-primary-600">{service.pricing}</p>
                  </div>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="default">
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">
              Professional Service
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Method Clean?
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-gray-900">Certified Technicians</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  Fully trained and certified cleaning professionals
                </dd>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-100">
                  <svg className="h-8 w-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-gray-900">Eco-Friendly</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  Safe, non-toxic cleaning products
                </dd>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-gray-900">Same Day Service</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  Available for urgent cleaning needs
                </dd>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-gray-900">100% Guarantee</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  Satisfaction guaranteed or re-clean free
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Get your free instant quote today. No obligation, transparent pricing, professional
              service guaranteed.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/quote">
                <Button size="lg" variant="success">
                  Get Instant Quote
                </Button>
              </Link>
              <a href="tel:07405428259" className="text-sm font-semibold leading-6 text-white">
                Or call us: 07405 428259
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
