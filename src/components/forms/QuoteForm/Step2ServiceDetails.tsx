/**
 * Step 2: Service Details
 *
 * Collects service type, property details, and calculates quote
 */

'use client'

import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Input, Select } from '@/components/ui'
import type { BookingInput } from '@/lib/validation/booking.schema'

interface Step2Props {
  form: UseFormReturn<BookingInput>
}

const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'carpet-cleaning', label: 'Carpet Cleaning' },
  { value: 'rug-cleaning', label: 'Rug Cleaning' },
  { value: 'upholstery-cleaning', label: 'Upholstery Cleaning' },
  { value: 'leather-cleaning', label: 'Leather Cleaning' },
  { value: 'mattress-cleaning-single', label: 'Mattress Cleaning (Single)' },
  { value: 'mattress-cleaning-double', label: 'Mattress Cleaning (Double)' },
  { value: 'mattress-cleaning-king', label: 'Mattress Cleaning (King)' },
  { value: 'stain-removal', label: 'Stain Removal' },
  { value: 'commercial-cleaning', label: 'Commercial Cleaning' },
  { value: 'car-valeting', label: 'Car Valeting' }
]

const propertyOptions = [
  { value: '', label: 'Select property type...' },
  { value: 'house', label: 'House' },
  { value: 'flat', label: 'Flat / Apartment' },
  { value: 'office', label: 'Office' },
  { value: 'commercial', label: 'Commercial Space' },
  { value: 'other', label: 'Other' }
]

const propertySizeOptions = [
  { value: '', label: 'Select size...' },
  { value: 'small', label: 'Small (1-2 bedrooms)' },
  { value: 'medium', label: 'Medium (3-4 bedrooms)' },
  { value: 'large', label: 'Large (5+ bedrooms)' }
]

export function Step2ServiceDetails({ form }: Step2Props) {
  const {
    register,
    watch,
    setValue,
    formState: { errors }
  } = form

  const serviceType = watch('serviceType')
  const stainRemoval = watch('stainRemoval')

  const showNumberOfRooms = ['carpet-cleaning', 'upholstery-cleaning'].includes(serviceType)
  const showSquareMeters = serviceType === 'commercial-cleaning'

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Service Details</h2>
        <p className="mt-2 text-gray-600">
          Tell us about the service you need and your property details.
        </p>
      </div>

      <Select
        label="Service Type"
        {...register('serviceType')}
        options={serviceOptions}
        error={errors.serviceType?.message}
        required
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Select
          label="Property Type"
          {...register('propertyType')}
          options={propertyOptions}
          error={errors.propertyType?.message}
          required
        />

        <Select
          label="Property Size"
          {...register('propertySize')}
          options={propertySizeOptions}
          error={errors.propertySize?.message}
        />
      </div>

      {showNumberOfRooms && (
        <Input
          label="Number of Rooms"
          type="number"
          {...register('numberOfRooms', { valueAsNumber: true })}
          error={errors.numberOfRooms?.message}
          placeholder="3"
          helperText="How many rooms need cleaning?"
          min="1"
          max="50"
          required
        />
      )}

      {showSquareMeters && (
        <Input
          label="Square Meters"
          type="number"
          {...register('squareMeters', { valueAsNumber: true })}
          error={errors.squareMeters?.message}
          placeholder="100"
          helperText="Approximate area to be cleaned"
          min="10"
          max="10000"
          required
        />
      )}

      <div className="rounded-lg border border-gray-300 p-4">
        <label className="flex cursor-pointer items-start">
          <div className="flex h-5 items-center">
            <input
              type="checkbox"
              {...register('stainRemoval')}
              className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
            />
          </div>
          <div className="ml-3">
            <div className="font-medium text-gray-900">Add Stain Removal Treatment</div>
            <p className="text-sm text-gray-600">
              Professional treatment for stubborn stains (+£15)
            </p>
          </div>
        </label>
      </div>

      <Input
        label="Additional Notes (Optional)"
        {...register('additionalNotes')}
        error={errors.additionalNotes?.message}
        placeholder="Any specific requirements or concerns..."
        helperText="Tell us about any specific stains, areas of concern, or special requirements"
      />

      {serviceType && (
        <div className="rounded-lg bg-green-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">
                {serviceType === 'carpet-cleaning' && 'Professional carpet deep cleaning with eco-friendly products and fast drying time.'}
                {serviceType === 'rug-cleaning' && 'Specialist care for delicate and valuable rugs with gentle cleaning methods.'}
                {serviceType === 'upholstery-cleaning' && 'Deep cleaning for sofas, chairs, and fabric furniture to restore freshness.'}
                {serviceType === 'leather-cleaning' && 'Expert leather cleaning and conditioning to protect and maintain your furniture.'}
                {serviceType.includes('mattress-cleaning') && 'Deep sanitization to remove allergens, dust mites, and odors for healthier sleep.'}
                {serviceType === 'commercial-cleaning' && 'Professional cleaning for offices and commercial spaces with flexible scheduling.'}
                {serviceType === 'car-valeting' && 'Complete interior car cleaning and detailing for a fresh, like-new feeling.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
