/**
 * Step 3: Pricing Review
 *
 * Displays calculated quote and breakdown
 */

'use client'

import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { formatPrice } from '@/lib/utils/pricing'
import type { BookingInput } from '@/lib/validation/booking.schema'

interface Step3Props {
  form: UseFormReturn<BookingInput>
  quote: {
    distance: number
    serviceCost: number
    travelCost: number
    totalCost: number
  } | null
  onCalculate: () => Promise<{ success: boolean; error?: string }>
  isCalculating: boolean
}

export function Step3PricingReview({ form, quote, onCalculate, isCalculating }: Step3Props) {
  const { watch } = form

  const serviceType = watch('serviceType')
  const propertyType = watch('propertyType')
  const numberOfRooms = watch('numberOfRooms')
  const squareMeters = watch('squareMeters')
  const stainRemoval = watch('stainRemoval')
  const postcode = watch('postcode')

  const [error, setError] = React.useState<string | null>(null)

  const handleCalculate = async () => {
    setError(null)
    const result = await onCalculate()
    if (!result.success) {
      setError(result.error || 'Failed to calculate quote')
    }
  }

  React.useEffect(() => {
    // Auto-calculate when component mounts
    handleCalculate()
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Your Quote</h2>
        <p className="mt-2 text-gray-600">
          Here's your instant price estimate based on your requirements.
        </p>
      </div>

      {/* Service Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Service Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Service Type:</span>
            <span className="font-medium text-gray-900">{serviceType.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Property Type:</span>
            <span className="font-medium text-gray-900">{propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}</span>
          </div>
          {numberOfRooms && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Number of Rooms:</span>
              <span className="font-medium text-gray-900">{numberOfRooms}</span>
            </div>
          )}
          {squareMeters && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Area:</span>
              <span className="font-medium text-gray-900">{squareMeters} sqm</span>
            </div>
          )}
          {stainRemoval && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Stain Removal:</span>
              <span className="font-medium text-green-600">Included</span>
            </div>
          )}
          <div className="flex justify-between text-sm border-t pt-3">
            <span className="text-gray-600">Postcode:</span>
            <span className="font-medium text-gray-900">{postcode}</span>
          </div>
        </CardContent>
      </Card>

      {/* Price Breakdown */}
      {isCalculating ? (
        <Card>
          <CardContent className="py-12">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-b-2 border-primary-600" />
              <p className="mt-4 text-gray-600">Calculating your quote...</p>
            </div>
          </CardContent>
        </Card>
      ) : error ? (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="py-8">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="mt-4 font-medium text-red-900">{error}</p>
              <button
                onClick={handleCalculate}
                className="mt-4 text-sm text-red-600 hover:text-red-700 underline"
              >
                Try again
              </button>
            </div>
          </CardContent>
        </Card>
      ) : quote ? (
        <Card className="border-primary-200 bg-gradient-to-br from-primary-50 to-success-50">
          <CardHeader>
            <CardTitle className="text-lg">Price Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Service Cost:</span>
                <span className="font-medium text-gray-900">{formatPrice(quote.serviceCost)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">
                  Travel Cost:
                  <span className="ml-1 text-xs text-gray-500">({quote.distance.toFixed(1)} miles)</span>
                </span>
                <span className="font-medium text-gray-900">
                  {quote.travelCost > 0 ? formatPrice(quote.travelCost) : 'FREE'}
                </span>
              </div>
              <div className="border-t border-gray-300 pt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-primary-600">
                    {formatPrice(quote.totalCost)}
                  </span>
                </div>
              </div>
            </div>

            {quote.distance > 100 && (
              <div className="rounded-lg bg-red-100 p-3">
                <p className="text-sm text-red-800">
                  Your location is outside our service area (100 miles from Manchester).
                </p>
              </div>
            )}

            {quote.travelCost === 0 && quote.distance <= 20 && (
              <div className="rounded-lg bg-green-100 p-3">
                <p className="text-sm text-green-800">
                  Great news! Your location is within our free travel zone (20 miles).
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      ) : null}

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
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              This is an estimate. Final price may vary based on actual condition and specific requirements.
              No obligation - you can review everything before booking.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
