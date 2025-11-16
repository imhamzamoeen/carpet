/**
 * Step 1: Contact Information
 *
 * Collects customer contact details and address
 */

'use client'

import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Input } from '@/components/ui'
import type { BookingInput } from '@/lib/validation/booking.schema'

interface Step1Props {
  form: UseFormReturn<BookingInput, any>
}

export function Step1ContactInfo({ form }: Step1Props) {
  const {
    register,
    formState: { errors }
  } = form

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
        <p className="mt-2 text-gray-600">
          Let's start with your contact details so we can reach you about your booking.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          label="Full Name"
          {...register('name')}
          error={errors.name?.message}
          placeholder="John Smith"
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
          placeholder="07700 900000"
          helperText="UK phone number"
          required
        />
      </div>

      <Input
        label="Email Address"
        type="email"
        {...register('email')}
        error={errors.email?.message}
        placeholder="john.smith@example.com"
        helperText="We'll send your quote and booking confirmation here"
        required
      />

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Address</h3>

        <div className="space-y-4">
          <Input
            label="Address"
            {...register('address')}
            error={errors.address?.message}
            placeholder="123 Main Street, Manchester"
            helperText="Street address, apartment, or unit number"
            required
          />

          <Input
            label="Postcode"
            {...register('postcode')}
            error={errors.postcode?.message}
            placeholder="M1 1AA"
            helperText="We use this to calculate travel distance"
            required
          />
        </div>
      </div>

      <div className="rounded-lg bg-blue-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm text-blue-700">
              We serve Manchester and within 100 miles. The first 20 miles are free - travel costs
              apply beyond that.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
