/**
 * Premium Service Page Template
 *
 * SEO-optimized service pages with premium UI and comprehensive content
 * Following Blowup Cleaners branding and BMad UX Expert design principles
 */

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getService, getAllServiceSlugs } from '@/lib/data/services'
import {
  Star, CheckCircle, Clock, Shield, MapPin, Phone, ArrowRight,
  Sparkles, TrendingUp, Users, Award, ChevronRight
} from 'lucide-react'
import { BreadcrumbSchema } from '@/components/structured-data/BreadcrumbSchema'
import { FAQSchema } from '@/components/structured-data/FAQSchema'
import { LocalBusinessSchema } from '@/components/structured-data/LocalBusinessSchema'
import { OrganizationSchema } from '@/components/structured-data/OrganizationSchema'
import { SpeakableSchema } from '@/components/structured-data/SpeakableSchema'
import ServiceClientWrapper from './service-client-wrapper'
import ServiceSidebarClient from './service-sidebar-client'

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

  // SEO: Keep title under 60 chars, keyword front-loaded for SERP visibility
  const title = `${service.name} Manchester | Blowup Cleaners`
  // SEO: Description <155 chars with CTA
  const description = service.fullDescription.substring(0, 152) + '...'

  return {
    title,
    description,
    keywords: service.seoKeywords,
    authors: [{ name: 'Blowup Cleaners Team' }],
    alternates: {
      canonical: `https://blowupcleaners.co.uk/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://blowupcleaners.co.uk/services/${service.slug}`,
      siteName: 'Blowup Cleaners',
      images: [
        {
          url: '/images/og-service.jpg',
          width: 1200,
          height: 630,
          alt: `${service.name} - Blowup Cleaners Manchester`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/og-service.jpg'],
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getService(params.slug)

  if (!service) {
    notFound()
  }

  const breadcrumbItems = [
    { name: 'Home', url: 'https://blowupcleaners.co.uk' },
    { name: 'Services', url: 'https://blowupcleaners.co.uk/services' },
    { name: service.name, url: `https://blowupcleaners.co.uk/services/${service.slug}` },
  ]

  return (
    <>
      {/* Structured Data - E-E-A-T, AI & Voice Search Optimization */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={service.faqs} />
      <LocalBusinessSchema />
      <OrganizationSchema />
      <SpeakableSchema
        serviceName={service.name}
        shortDescription={service.shortDescription}
        priceFrom={service.pricing.from}
      />

      <ServiceClientWrapper serviceTitle={service.name}>
        <div className="bg-slate-950">
          {/* Premium Hero Section */}
          <section className="relative overflow-hidden py-20 sm:py-28">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900" />

            {/* Gradient Blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />

            <div className="container-custom relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Column - Text Content */}
                <div className="space-y-6">
                  {/* Breadcrumb */}
                  <nav className="flex items-center space-x-2 text-sm text-slate-400">
                    <Link href="/" className="hover:text-primary-400 transition-colors">
                      Home
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href="/services" className="hover:text-primary-400 transition-colors">
                      Services
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-white">{service.name}</span>
                  </nav>

                  {/* Trust Badge */}
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-primary-500/10 border border-primary-500/20 backdrop-blur-sm">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-semibold text-white">5-Star Rated Service</span>
                    </div>
                  </div>

                  {/* Headline - Voice Search Optimized */}
                  <div>
                    <h1 className="speakable-headline font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
                      {service.name}
                    </h1>
                    <p className="mt-4 text-xl text-primary-400 font-semibold">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* TL;DR Summary - Optimized for LLMs, AI Overviews & Voice Search */}
                  <div className="speakable-tldr p-4 rounded-lg bg-primary-500/10 border-l-4 border-l-primary-400">
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-bold text-primary-400 uppercase tracking-wider mt-0.5">TL;DR</span>
                      <p className="text-sm text-slate-200 leading-relaxed">
                        {service.shortDescription}. Professional service in Manchester with same-day availability, 100% satisfaction guarantee. Prices from {service.pricing.from}.
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* CTA Buttons - Voice Search Optimized */}
                  <div className="speakable-cta flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <Link href="/quote">
                      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#60a5fa_50%,#3b82f6_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary-600 px-8 py-1 text-base font-semibold text-white backdrop-blur-3xl gap-2 group-hover:bg-primary-700 transition-colors">
                          Get Instant Quote
                          <ArrowRight className="h-5 w-5" />
                        </span>
                      </button>
                    </Link>
                    <a href="tel:+447405428259">
                      <button className="btn-outline border-slate-700 text-white hover:bg-white/5 text-base px-8 flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Call Now
                      </button>
                    </a>
                  </div>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-3 px-5 py-3 rounded-card bg-white/5 border border-white/10 shadow-soft backdrop-blur-sm">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-500/20">
                        <Clock className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white font-grotesk">Same Day</div>
                        <div className="text-xs text-slate-400">Available</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 px-5 py-3 rounded-card bg-white/5 border border-white/10 shadow-soft backdrop-blur-sm">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20">
                        <Shield className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white font-grotesk">100%</div>
                        <div className="text-xs text-slate-400">Guaranteed</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Pricing Card */}
                <div className="lg:block">
                  <div className="relative p-8 rounded-card bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl">
                    {/* Floating Badge */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-full shadow-lg">
                      <span className="text-sm font-bold">Popular Choice</span>
                    </div>

                    <div className="space-y-6">
                      <div className="speakable-pricing">
                        <h3 className="text-2xl font-bold text-white mb-2">Pricing</h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-white font-grotesk">{service.pricing.from}</span>
                        </div>
                      </div>

                      {/* Pricing Details */}
                      <div className="space-y-3 pt-4 border-t border-white/10">
                        {service.pricing.details.slice(0, 5).map((detail) => (
                          <div key={detail.item} className="flex justify-between items-center text-sm">
                            <span className="text-slate-300">{detail.item}</span>
                            <span className="font-semibold text-white">{detail.price}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link href="/quote" className="block">
                        <button className="w-full btn-primary text-base py-3 flex items-center justify-center gap-2">
                          Get Your Free Quote
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </Link>

                      {/* Trust Elements */}
                      <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span className="text-sm text-slate-300">No hidden fees</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary-400" />
                          <span className="text-sm text-slate-300">Fully insured</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Main Content Section */}
          <section className="bg-white py-16 sm:py-24">
            <div className="container-custom">
              <div className="grid lg:grid-cols-3 gap-12">

                {/* Main Content Column (2/3 width) */}
                <div className="lg:col-span-2 space-y-16">

                  {/* What's Included */}
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100">
                        <Sparkles className="w-6 h-6 text-primary-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 font-grotesk">What's Included</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group"
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                              <CheckCircle className="w-4 h-4 text-primary-600" />
                            </div>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 font-grotesk">Key Benefits</h2>
                    </div>
                    <div className="space-y-4">
                      {service.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="p-5 rounded-card border-l-4 border-l-primary-500 bg-gradient-to-r from-primary-50 to-white shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center gap-3">
                            <Award className="w-5 h-5 text-primary-600 flex-shrink-0" />
                            <span className="text-gray-900 font-medium">{benefit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Our 4-Step Process */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-blue/10">
                        <Users className="w-6 h-6 text-accent-blue" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 font-grotesk">Our Process</h2>
                    </div>
                    <p className="text-gray-600 mb-10">
                      We follow a proven 4-step process to ensure exceptional results every time.
                    </p>
                    <div className="space-y-8">
                      {service.process.map((step, index) => (
                        <div key={step.step} className="relative flex items-start gap-6 group">
                          {/* Connector Line */}
                          {index < service.process.length - 1 && (
                            <div
                              className="absolute left-6 top-14 h-full w-0.5 bg-gradient-to-b from-primary-300 to-transparent"
                              aria-hidden="true"
                            />
                          )}

                          {/* Step Number */}
                          <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg group-hover:scale-110 transition-transform">
                            <span className="text-xl font-bold">{step.step}</span>
                          </div>

                          {/* Step Content */}
                          <div className="flex-1 pb-8">
                            <div className="bg-white p-6 rounded-card border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                              <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FAQs */}
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 font-grotesk">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                      {service.faqs.map((faq) => (
                        <details
                          key={faq.question}
                          className="group bg-white border border-gray-200 rounded-card shadow-sm hover:shadow-md transition-shadow"
                        >
                          <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 text-lg list-none">
                            <span>{faq.question}</span>
                            <svg
                              className="w-5 h-5 text-primary-600 transition-transform group-open:rotate-180"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                            {faq.answer}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Sidebar Column (1/3 width) */}
                <div className="lg:col-span-1">
                  <ServiceSidebarClient service={service} />
                </div>

              </div>
            </div>
          </section>

          {/* Bottom CTA Section */}
          <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 sm:py-20">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-grotesk">
                  Ready to Book {service.name}?
                </h2>
                <p className="text-lg text-primary-100 mb-8 leading-relaxed">
                  Get your free instant quote in 60 seconds. No obligation, transparent pricing,
                  professional service guaranteed.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/quote">
                    <button className="btn-success text-base px-8 py-3 flex items-center gap-2 shadow-xl hover:shadow-2xl transition-shadow">
                      Get Instant Quote
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </Link>
                  <Link href="/services">
                    <button className="btn-outline border-white text-white hover:bg-white/10 text-base px-8 py-3">
                      View All Services
                    </button>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-8 mt-10 pt-8 border-t border-primary-500/30">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-white font-semibold">5-Star Rated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-white" />
                    <span className="text-sm text-white font-semibold">Fully Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-white" />
                    <span className="text-sm text-white font-semibold">Manchester Based</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </ServiceClientWrapper>
    </>
  )
}
