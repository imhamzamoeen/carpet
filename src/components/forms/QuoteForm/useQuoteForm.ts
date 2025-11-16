/**
 * Quote Form Hook
 *
 * Custom hook for managing multi-step form state
 */

'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { bookingSchema, type BookingInput } from '@/lib/validation/booking.schema'
import { getInstantQuote } from '@/actions/quote.actions'
import { createBooking } from '@/actions/booking.actions'

export function useQuoteForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [quote, setQuote] = useState<{
    distance: number
    serviceCost: number
    travelCost: number
    totalCost: number
  } | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      stainRemoval: false,
      photoUrls: [],
      distance: 0,
      travelCost: 0,
      serviceCost: 0,
      totalCost: 0
    },
    mode: 'onChange'
  })

  const calculateQuote = async () => {
    setIsCalculating(true)
    try {
      const postcode = form.getValues('postcode')
      const serviceType = form.getValues('serviceType')
      const propertyType = form.getValues('propertyType')
      const numberOfRooms = form.getValues('numberOfRooms')
      const squareMeters = form.getValues('squareMeters')
      const stainRemoval = form.getValues('stainRemoval')

      const result = await getInstantQuote({
        postcode,
        serviceType,
        propertyType,
        numberOfRooms,
        squareMeters,
        stainRemoval
      })

      if (result.success && result.quote) {
        setQuote(result.quote)
        // Update form with calculated values
        form.setValue('distance', result.quote.distance)
        form.setValue('travelCost', result.quote.travelCost)
        form.setValue('serviceCost', result.quote.serviceCost)
        form.setValue('totalCost', result.quote.totalCost)
        return { success: true }
      } else {
        return { success: false, error: result.error }
      }
    } catch (error) {
      return { success: false, error: 'Failed to calculate quote' }
    } finally {
      setIsCalculating(false)
    }
  }

  const submitBooking = async (data: BookingInput) => {
    setIsSubmitting(true)
    try {
      const result = await createBooking(data)
      return result
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit booking'
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  return {
    form,
    currentStep,
    quote,
    isCalculating,
    isSubmitting,
    nextStep,
    prevStep,
    goToStep,
    calculateQuote,
    submitBooking
  }
}
