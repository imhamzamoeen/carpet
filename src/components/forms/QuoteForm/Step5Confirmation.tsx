/**
 * Step 5: Confirmation
 *
 * Final review before submission
 */

'use client'

import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { formatPrice } from '@/lib/utils/pricing'
import type { BookingInput } from '@/lib/validation/booking.schema'

interface Step5Props {
  form: UseFormReturn<BookingInput>
  quote: {
    distance: number
    serviceCost: number
    travelCost: number
    totalCost: number
  } | null
  onEdit: (step: number) => void
}

export function Step5Confirmation({ form, quote, onEdit }: Step5Props) {
  const { watch } = form

  const name = watch('name')
  const email = watch('email')
  const phone = watch('phone')
  const address = watch('address')
  const postcode = watch('postcode')
  const serviceType = watch('serviceType')
  const propertyType = watch('propertyType')
  const numberOfRooms = watch('numberOfRooms')
  const squareMeters = watch('squareMeters')
  const stainRemoval = watch('stainRemoval')
  const additionalNotes = watch('additionalNotes')
  const preferredDate = watch('preferredDate')
  
  // Format service type for display
  const formatServiceType = (type: string) => {
    return type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }


  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Review Your Booking</h2>
        <p className="mt-2 text-gray-600">
          Please review all details carefully before submitting your booking request.
        </p>
      </div>

      {/* Contact Information */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Contact Information</CardTitle>
          <button
            type="button"
            onClick={() => onEdit(1)}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Edit
          </button>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <span className="text-sm text-gray-500">Name</span>
              <p className="font-medium text-gray-900">{name}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Phone</span>
              <p className="font-medium text-gray-900">{phone}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Email</span>
              <p className="font-medium text-gray-900">{email}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Postcode</span>
              <p className="font-medium text-gray-900">{postcode}</p>
            </div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Address</span>
            <p className="font-medium text-gray-900">{address}</p>
          </div>
        </CardContent>
      </Card>

      {/* Service Details */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Service Details</CardTitle>
          <button
            type="button"
            onClick={() => onEdit(2)}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Edit
          </button>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <span className="text-sm text-gray-500">Service Type</span>
              <p className="font-medium text-gray-900">{formatServiceType(serviceType)}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Property Type</span>
              <p className="font-medium text-gray-900">
                {propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}
              </p>
            </div>
            {numberOfRooms && (
              <div>
                <span className="text-sm text-gray-500">Number of Rooms</span>
                <p className="font-medium text-gray-900">{numberOfRooms}</p>
              </div>
            )}
            {squareMeters && (
              <div>
                <span className="text-sm text-gray-500">Square Meters</span>
                <p className="font-medium text-gray-900">{squareMeters} sqm</p>
              </div>
            )}
            <div>
              <span className="text-sm text-gray-500">Stain Removal</span>
              <p className="font-medium text-gray-900">{stainRemoval ? 'Yes (+£15)' : 'No'}</p>
            </div>
          </div>
          {additionalNotes && (
            <div>
              <span className="text-sm text-gray-500">Additional Notes</span>
              <p className="font-medium text-gray-900">{additionalNotes}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pricing Summary */}
      {quote && (
        <Card className="border-primary-200 bg-gradient-to-br from-primary-50 to-success-50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Pricing Summary</CardTitle>
            <button
              type="button"
              onClick={() => onEdit(3)}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Recalculate
            </button>
          </CardHeader>
          <CardContent className="space-y-3">
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
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-primary-600">
                  {formatPrice(quote.totalCost)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Scheduling */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Preferred Schedule</CardTitle>
          <button
            type="button"
            onClick={() => onEdit(4)}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Edit
          </button>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <span className="text-sm text-gray-500">Preferred Date</span>
              <p className="font-medium text-gray-900">
                {preferredDate ? new Date(preferredDate).toLocaleDateString('en-GB', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }) : 'Not selected'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Terms and Conditions */}
      <Card className="bg-gray-50">
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Terms & Conditions</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong>Booking Confirmation:</strong> This is a booking request. We will contact you within 24
                hours to confirm availability and exact time slot.
              </p>
              <p>
                <strong>Pricing:</strong> The quote provided is an estimate based on the information you've
                provided. The final price may vary based on actual conditions and requirements.
              </p>
              <p>
                <strong>Cancellation:</strong> You can cancel or reschedule up to 48 hours before your
                appointment at no charge. Late cancellations may incur a fee.
              </p>
              <p>
                <strong>Payment:</strong> Payment is due upon completion of service. We accept cash, card,
                and bank transfer.
              </p>
              <p>
                <strong>Guarantee:</strong> We offer a 100% satisfaction guarantee. If you're not happy with
                the results, we'll re-clean for free within 7 days.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
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
            <h3 className="text-sm font-medium text-blue-800">What Happens Next?</h3>
            <div className="mt-2 text-sm text-blue-700">
              <ol className="list-decimal pl-5 space-y-1">
                <li>You'll receive an email confirmation with your booking details</li>
                <li>We'll contact you within 24 hours to confirm your appointment</li>
                <li>You'll get a reminder 24 hours before your scheduled service</li>
                <li>Our team will arrive on time with all necessary equipment</li>
                <li>Payment is collected after you're satisfied with the results</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
