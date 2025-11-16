/**
 * Step 4: Scheduling
 *
 * Date and time selection for service
 */

'use client'

import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Card, CardContent, Input } from '@/components/ui'
import type { BookingInput } from '@/lib/validation/booking.schema'

interface Step4Props {
  form: UseFormReturn<BookingInput>
}

export function Step4Scheduling({ form }: Step4Props) {
  const { register, formState: { errors }, watch } = form

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0]

  // Get max date (3 months from now)
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 3)
  const maxDateStr = maxDate.toISOString().split('T')[0]

  const preferredDate = watch('preferredDate')

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Schedule Your Service</h2>
        <p className="mt-2 text-gray-600">
          Choose your preferred date for the cleaning service. We'll confirm availability within 24 hours.
        </p>
      </div>

      {/* Date Selection */}
      <div className="space-y-4">
        <Input
          label="Preferred Date"
          type="date"
          {...register('preferredDate')}
          error={errors.preferredDate?.message}
          min={today}
          max={maxDateStr}
          required
          helperText="Select a date between today and 3 months from now"
        />

        {/* Time Preference */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Time <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                value="morning"
                {...register('preferredTime')}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              <div className="ml-3">
                <div className="font-medium text-gray-900">Morning (8:00 AM - 12:00 PM)</div>
                <div className="text-sm text-gray-500">Best for early birds</div>
              </div>
            </label>

            <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                value="afternoon"
                {...register('preferredTime')}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              <div className="ml-3">
                <div className="font-medium text-gray-900">Afternoon (12:00 PM - 5:00 PM)</div>
                <div className="text-sm text-gray-500">Most popular time slot</div>
              </div>
            </label>

            <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                value="flexible"
                {...register('preferredTime')}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              <div className="ml-3">
                <div className="font-medium text-gray-900">Flexible</div>
                <div className="text-sm text-gray-500">Any time works for me</div>
              </div>
            </label>
          </div>
          {errors.preferredTime && (
            <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
          )}
        </div>
      </div>

      {/* Scheduling Info Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-start">
              <svg
                className="h-5 w-5 text-green-600 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Same Day Available</h3>
                <p className="mt-1 text-sm text-green-700">
                  Book today for same-day service (subject to availability)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-start">
              <svg
                className="h-5 w-5 text-blue-600 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Weekend Service</h3>
                <p className="mt-1 text-sm text-blue-700">
                  We work weekends to fit your schedule
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Important Information */}
      <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">Please Note</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>This is a preferred date - we'll confirm availability within 24 hours</li>
                <li>Peak times (weekends) may have limited availability</li>
                <li>We'll contact you to confirm the exact time slot</li>
                <li>You can reschedule up to 48 hours before the appointment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {preferredDate && (
        <div className="rounded-lg bg-primary-50 border border-primary-200 p-4">
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-primary-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="ml-3 text-sm text-primary-700">
              <strong>Selected Date:</strong> {new Date(preferredDate).toLocaleDateString('en-GB', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
