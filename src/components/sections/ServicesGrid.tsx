/**
 * Services Grid Section
 *
 * Overview of all cleaning services offered
 */

import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui'

const services = [
  {
    name: 'Carpet Cleaning',
    slug: 'carpet-cleaning',
    description: 'Professional deep cleaning for all types of carpets with eco-friendly products',
    icon: '🏠',
    priceFrom: '£25',
    priceUnit: 'per room'
  },
  {
    name: 'Rug Cleaning',
    slug: 'rug-cleaning',
    description: 'Specialist cleaning for delicate and antique rugs of all sizes',
    icon: '🧶',
    priceFrom: '£30',
    priceUnit: 'per rug'
  },
  {
    name: 'Upholstery Cleaning',
    slug: 'upholstery-cleaning',
    description: 'Deep cleaning for sofas, chairs, and fabric furniture',
    icon: '🛋️',
    priceFrom: '£20',
    priceUnit: 'per seat'
  },
  {
    name: 'Leather Cleaning',
    slug: 'leather-cleaning',
    description: 'Gentle care and conditioning for leather furniture',
    icon: '💼',
    priceFrom: '£35',
    priceUnit: 'per item'
  },
  {
    name: 'Mattress Cleaning',
    slug: 'mattress-cleaning',
    description: 'Deep sanitization and allergen removal for healthier sleep',
    icon: '🛏️',
    priceFrom: '£40',
    priceUnit: 'from single'
  },
  {
    name: 'Stain Removal',
    slug: 'stain-removal',
    description: 'Specialist treatment for stubborn stains and marks',
    icon: '✨',
    priceFrom: '£15',
    priceUnit: 'additional'
  },
  {
    name: 'Commercial Cleaning',
    slug: 'commercial-cleaning',
    description: 'Professional cleaning for offices and commercial spaces',
    icon: '🏢',
    priceFrom: '£2',
    priceUnit: 'per sqm'
  },
  {
    name: 'Car Valeting',
    slug: 'car-valeting',
    description: 'Interior deep cleaning and detailing for vehicles',
    icon: '🚗',
    priceFrom: '£50',
    priceUnit: 'per vehicle'
  }
]

export function ServicesGrid() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Cleaning Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From carpets to cars, we provide expert cleaning services for homes and businesses
            across Manchester and surrounding areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group"
            >
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary-300">
                <CardHeader>
                  <div className="mb-4 text-4xl">{service.icon}</div>
                  <CardTitle className="text-xl group-hover:text-primary-600 transition-colors">
                    {service.name}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary-600">
                      {service.priceFrom}
                    </span>
                    <span className="text-sm text-gray-500">{service.priceUnit}</span>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
                    <span>Learn more</span>
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
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
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-700"
          >
            View all services <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
