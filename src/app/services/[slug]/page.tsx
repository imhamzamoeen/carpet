/**
 * Individual Service Page
 *
 * Dynamic page template for each service
 */

import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button, Card, CardContent } from '@/components/ui'
import { getService, getAllServiceSlugs } from '@/lib/data/services'
import type { Metadata } from 'next'

interface ServicePageProps {
  params: {
    slug: string
  }
}

// Generate static params for all services
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getService(params.slug)

  if (!service) {
    return {
      title: 'Service Not Found'
    }
  }

  return {
    title: `${service.name} Manchester | Method Clean - Professional Cleaning Services`,
    description: `${service.fullDescription.substring(0, 155)}...`,
    keywords: service.seoKeywords.join(', '),
    openGraph: {
      title: `${service.name} - Method Clean`,
      description: service.shortDescription,
      type: 'website'
    }
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getService(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">{service.fullDescription}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link href="/quote">
                <Button size="lg" variant="success">
                  Get Instant Quote
                </Button>
              </Link>
              <a href="tel:01234567890">
                <Button size="lg" variant="secondary">
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call: 0123 456 7890
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Main Column */}
          <div className="lg:col-span-2">
            {/* Features */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900">What's Included</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start">
                    <svg
                      className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-success-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900">Benefits</h2>
              <div className="mt-6 space-y-4">
                {service.benefits.map((benefit) => (
                  <Card key={benefit} className="border-l-4 border-l-primary-500">
                    <CardContent className="flex items-center p-4">
                      <svg
                        className="mr-3 h-6 w-6 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-900 font-medium">{benefit}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Process */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
              <p className="mt-2 text-gray-600">
                We follow a proven 4-step process to ensure exceptional results every time.
              </p>
              <div className="mt-8 space-y-8">
                {service.process.map((step, index) => (
                  <div key={step.step} className="relative flex items-start">
                    {/* Connector Line */}
                    {index < service.process.length - 1 && (
                      <div
                        className="absolute left-6 top-14 h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    )}

                    {/* Step Number */}
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                      <span className="text-xl font-bold">{step.step}</span>
                    </div>

                    {/* Step Content */}
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      <p className="mt-2 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <div className="mt-8 space-y-6">
                {service.faqs.map((faq) => (
                  <Card key={faq.question}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      <p className="mt-3 text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Pricing Card */}
              <Card className="border-primary-200 bg-gradient-to-br from-primary-50 to-success-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">Pricing</h3>
                  <p className="mt-2 text-3xl font-bold text-primary-600">{service.pricing.from}</p>

                  <div className="mt-6 space-y-3">
                    {service.pricing.details.map((detail) => (
                      <div key={detail.item} className="flex justify-between text-sm">
                        <span className="text-gray-700">{detail.item}</span>
                        <span className="font-semibold text-gray-900">{detail.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link href="/quote" className="block">
                      <Button variant="primary" className="w-full">
                        Get Your Quote
                      </Button>
                    </Link>
                  </div>

                  <p className="mt-4 text-xs text-gray-600 text-center">
                    Final price may vary based on specific requirements
                  </p>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">Need Help?</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Our friendly team is ready to answer your questions and provide expert advice.
                  </p>

                  <div className="mt-6 space-y-4">
                    <a
                      href="tel:01234567890"
                      className="flex items-center text-sm text-gray-700 hover:text-primary-600"
                    >
                      <svg className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      0123 456 7890
                    </a>

                    <a
                      href="mailto:info@methodclean.co.uk"
                      className="flex items-center text-sm text-gray-700 hover:text-primary-600"
                    >
                      <svg className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      info@methodclean.co.uk
                    </a>

                    <Link
                      href="/contact"
                      className="flex items-center text-sm text-gray-700 hover:text-primary-600"
                    >
                      <svg className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Contact Form
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Guarantee Card */}
              <Card className="border-success-200 bg-success-50">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <svg
                      className="h-8 w-8 text-success-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <h3 className="ml-3 text-lg font-semibold text-gray-900">
                      100% Satisfaction Guarantee
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-gray-700">
                    We stand behind our work. If you're not completely satisfied with the results,
                    we'll re-clean for free within 7 days. No questions asked.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Book {service.name}?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Get your free instant quote in seconds. No obligation, transparent pricing,
              professional service guaranteed.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/quote">
                <Button size="lg" variant="primary">
                  Get Instant Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="secondary">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
