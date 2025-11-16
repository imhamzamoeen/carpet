/**
 * Hero Section Component
 *
 * Main hero section with value proposition
 */

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Trust Badges */}
          <div className="mb-8 flex items-center justify-center gap-4 text-sm text-primary-100">
            <div className="flex items-center gap-1">
              <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5-Star Rated</span>
            </div>
            <span className="text-primary-300">•</span>
            <span>100+ Happy Customers</span>
            <span className="text-primary-300">•</span>
            <span>Eco-Friendly Products</span>
          </div>

          {/* Main Heading - SEO Optimized for "Fresh Fiber Carpet Cleaning Manchester" */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            <span className="text-yellow-400">FreshFiber</span> Carpet Cleaning{' '}
            <span className="text-yellow-400">Manchester</span>
          </h1>

          {/* Subheading - Optimized for user intent and semantic SEO */}
          <p className="mt-6 text-lg leading-8 text-primary-100">
            Professional carpet, rug, and upholstery deep cleaning services in Manchester.
            Get an instant quote in 60 seconds, book same-day service, and enjoy our 100%
            satisfaction guarantee. Eco-friendly products, serving within 100 miles.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/quote">
              <Button size="lg" variant="success" className="min-w-[200px]">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Get Instant Quote
              </Button>
            </Link>
            <Link href="tel:+441234567890">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call: 0123 456 7890
              </Button>
            </Link>
          </div>

          {/* Key Benefits */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-yellow-400">20 Miles</div>
              <div className="text-sm text-primary-100">Free Travel</div>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-yellow-400">Same Day</div>
              <div className="text-sm text-primary-100">Service Available</div>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-yellow-400">100%</div>
              <div className="text-sm text-primary-100">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blob */}
      <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-primary-400 to-success-400 opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
    </section>
  )
}
