/**
 * How It Works Section
 *
 * 3-step process explanation
 */

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'

const steps = [
  {
    number: '01',
    title: 'Get Instant Quote',
    description:
      'Fill out our simple online form with your details and requirements. Get an instant price estimate based on your location and service needs.',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Book Your Service',
    description:
      'Choose your preferred date and time. We\'ll confirm your booking within 24 hours and send you all the details via email.',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    number: '03',
    title: 'We Clean, You Relax',
    description:
      'Our professional team arrives on time with all equipment. We deep clean your carpets, rugs, or furniture and leave your home spotless.',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    )
  }
]

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Simple Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Getting your carpets professionally cleaned has never been easier. Just three simple
            steps to a cleaner, healthier home.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gray-300 lg:block"
                    aria-hidden="true"
                  />
                )}

                <div className="relative flex flex-col items-center text-center">
                  {/* Step Number Badge */}
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg">
                    <div className="text-center">
                      <div className="text-xs font-medium uppercase tracking-wider opacity-80">
                        Step
                      </div>
                      <div className="text-2xl font-bold">{step.number}</div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-4 text-base text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Link href="/quote">
            <Button size="lg">
              Start Your Quote Now
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
