/**
 * About Us Page
 *
 * Company story, values, and team information
 */

import React from 'react'
import Link from 'next/link'
import { Button, Card, CardContent } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Blowup Cleaners - Professional Carpet Cleaning Manchester',
  description:
    'Learn about Blowup Cleaners, Manchester\'s trusted carpet and upholstery cleaning company. Over 10 years serving local communities with eco-friendly, professional cleaning services.',
  keywords:
    'about Blowup Cleaners, carpet cleaning Manchester company, professional cleaners, eco-friendly cleaning, family business Manchester',
  openGraph: {
    title: 'About Blowup Cleaners',
    description: 'Manchester\'s trusted carpet and upholstery cleaning experts since 2014',
    type: 'website'
  }
}

const values = [
  {
    name: 'Quality First',
    description:
      'We never compromise on quality. Every job receives the same meticulous attention to detail, whether it\'s a single room or an entire commercial building.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    )
  },
  {
    name: 'Environmental Responsibility',
    description:
      'We use only eco-friendly, biodegradable cleaning products that are safe for your family, pets, and the planet. Sustainability isn\'t just a buzzword for us—it\'s a commitment.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    )
  },
  {
    name: 'Customer Satisfaction',
    description:
      'Your satisfaction is our success. We back every job with our 100% satisfaction guarantee. If you\'re not happy, we\'ll make it right—no questions asked.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    name: 'Continuous Improvement',
    description:
      'We invest in the latest cleaning technology and ongoing training for our team. Staying at the forefront of industry standards ensures you always get the best service.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    )
  },
  {
    name: 'Honesty & Transparency',
    description:
      'No hidden fees, no upselling, no surprises. We provide upfront pricing and honest assessments. You\'ll always know exactly what you\'re paying for.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    )
  },
  {
    name: 'Community Focus',
    description:
      'We\'re proud to be part of the Manchester community. We support local businesses, employ local people, and give back to the neighborhoods we serve.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    )
  }
]

const timeline = [
  {
    year: '2014',
    title: 'Founded',
    description:
      'Blowup Cleaners was established with a simple mission: provide honest, high-quality carpet cleaning services to Manchester residents.'
  },
  {
    year: '2016',
    title: 'Expanded Services',
    description:
      'Added upholstery and rug cleaning services, along with our first commercial contracts.'
  },
  {
    year: '2018',
    title: 'Eco-Friendly Commitment',
    description:
      'Transitioned to 100% eco-friendly cleaning products and became certified green cleaners.'
  },
  {
    year: '2020',
    title: '1,000+ Happy Customers',
    description:
      'Reached a major milestone serving over 1,000 satisfied customers across Greater Manchester.'
  },
  {
    year: '2022',
    title: 'Advanced Equipment',
    description:
      'Invested in state-of-the-art truck-mounted cleaning systems for superior results.'
  },
  {
    year: '2024',
    title: 'Digital Transformation',
    description:
      'Launched instant online quotes and digital booking system for easier customer service.'
  }
]

const certifications = [
  { name: 'IICRC Certified', description: 'Institute of Inspection Cleaning and Restoration' },
  { name: 'NCCA Member', description: 'National Carpet Cleaners Association' },
  { name: 'Fully Insured', description: 'Comprehensive liability and professional indemnity' },
  { name: 'Eco-Certified', description: 'Green cleaning products and practices' },
  { name: 'CRB Checked', description: 'All technicians background checked' },
  { name: 'Safe Contractor', description: 'Health & safety accredited' }
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About Blowup Cleaners
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Manchester's trusted carpet and upholstery cleaning experts since 2014. We're
              passionate about delivering exceptional cleaning services with integrity, quality, and
              care for the environment.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Blowup Cleaners was born out of frustration with the carpet cleaning industry. Our
                founder, having experienced poor service, hidden fees, and ineffective cleaning from
                several companies, decided there had to be a better way.
              </p>
              <p>
                In 2014, we started with a simple promise: provide honest, high-quality carpet
                cleaning services at fair prices. We invested in professional-grade equipment,
                eco-friendly products, and thorough training. Most importantly, we committed to
                treating every customer's home with the same care we'd treat our own.
              </p>
              <p>
                Over the years, that commitment has earned us the trust of over 1,000 customers
                across Greater Manchester. We've grown from a one-person operation to a team of
                certified cleaning professionals, but our core values remain unchanged.
              </p>
              <p>
                Today, Blowup Cleaners is proud to be one of Manchester's most trusted carpet and
                upholstery cleaning companies. We continue to invest in the latest technology,
                training, and eco-friendly practices to ensure we deliver the best possible results
                for our customers.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <div className="mt-6 space-y-6">
              <Card className="border-l-4 border-l-primary-600">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900">10+ Years Experience</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Over a decade serving Manchester with professional cleaning services
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-success-600">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900">1,000+ Happy Customers</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Join hundreds of satisfied residential and commercial clients
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900">Certified Professionals</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    IICRC certified technicians with ongoing training
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-600">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900">Eco-Friendly Products</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    100% biodegradable, non-toxic cleaning solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-600">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900">Advanced Equipment</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Professional truck-mounted systems for superior results
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-600">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900">100% Guarantee</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Complete satisfaction guaranteed or we'll re-clean for free
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Stand For
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our values guide everything we do, from how we treat customers to the products we use
              and the way we run our business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{value.name}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Journey</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Growing Together
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From humble beginnings to serving thousands of customers across Greater Manchester
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 hidden lg:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative">
                <div className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                  <div className={index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-3xl font-bold text-primary-600">{item.year}</span>
                          <div className="h-0.5 flex-1 bg-gradient-to-r from-primary-600 to-transparent" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        <p className="mt-3 text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                    <div className="h-6 w-6 rounded-full bg-primary-600 border-4 border-white shadow-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-primary-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Certified & Trusted
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              We maintain the highest industry standards through certifications, training, and
              professional memberships
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
            {certifications.map((cert) => (
              <Card key={cert.name} className="bg-white/10 border-white/20 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mx-auto mb-4">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">{cert.name}</h3>
                  <p className="mt-2 text-sm text-primary-100">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Experience the Blowup Cleaners Difference
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Join over 1,000 satisfied customers who trust us with their carpet and upholstery
            cleaning needs. Get your instant quote today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link href="/quote">
              <Button size="lg" variant="default">
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
  )
}
