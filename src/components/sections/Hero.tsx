/**
 * Hero Section Component - Clean Professional Light Design
 *
 * Two-column layout: Left text, Right image
 * Left: Headline with emphasis + description + CTA buttons + trust badges
 * Right: Professional service image
 */

'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative hero-spacing overflow-hidden bg-gradient-to-b from-white to-background-section">
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN - Text Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Trust Badge Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-primary-50 border border-primary-200">
                <svg className="h-4 w-4 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold text-primary-700">5-Star Rated</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-green-50 border border-green-200">
                <svg className="h-4 w-4 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-green-700">100+ Happy Customers</span>
              </div>
            </div>

            {/* Big Bold Headline with Accent Words */}
            <h1 className="font-grotesk font-bold leading-tight text-balance">
              <span className="block text-text-primary">Professional</span>
              <span className="block text-primary-600">Carpet Cleaning</span>
              <span className="block text-text-primary">in Manchester</span>
            </h1>

            {/* Small Paragraph */}
            <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
              Experience deep, eco-friendly carpet cleaning that restores your home's freshness.
              Get an instant quote in 60 seconds and enjoy same-day service with our 100% satisfaction guarantee.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/quote">
                <button className="btn-primary text-base px-8">
                  Get Instant Quote
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-outline text-base px-8">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Trust Indicator - Customer Count */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white shadow-sm" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-sm" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-white shadow-sm" />
              </div>
              <div className="text-sm">
                <div className="font-semibold text-text-primary">500+ Happy Clients</div>
                <div className="text-text-secondary">Across Manchester</div>
              </div>
            </div>

            {/* Key Stats */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3 px-5 py-3 rounded-card bg-white border border-gray-200 shadow-soft">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-text-primary font-grotesk">20 miles</div>
                  <div className="text-xs text-text-secondary">Free Travel</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-card bg-white border border-gray-200 shadow-soft">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                  <svg className="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-text-primary font-grotesk">100%</div>
                  <div className="text-xs text-text-secondary">Guaranteed</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Hero Image */}
          <div className="relative lg:block hidden animate-fade-in">
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative overflow-hidden rounded-image shadow-card-hover">
                <Image
                  src="/images/hero-carpet-1.jpg"
                  alt="Professional carpet cleaning service in Manchester"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating Trust Badge Card */}
              <div className="absolute bottom-6 left-6 bg-white rounded-card shadow-card-hover p-4 border border-gray-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent-yellow">
                    <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-text-primary text-lg">5.0</div>
                    <div className="text-xs text-text-secondary">Google Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
