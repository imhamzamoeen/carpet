/**
 * Multi-Step Quote/Booking Form
 *
 * Main container orchestrating all form steps
 */

'use client'

import React from 'react'
import { useQuoteForm } from './useQuoteForm'
import { Step1ContactInfo } from './Step1ContactInfo'
import { Step2ServiceDetails } from './Step2ServiceDetails'
import { Step3PricingReview } from './Step3PricingReview'
import { Step4Scheduling } from './Step4Scheduling'
import { Step5Confirmation } from './Step5Confirmation'
import { Button, Card, CardContent } from '@/components/ui'

const TOTAL_STEPS = 5

export function QuoteForm() {
  const {
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
  } = useQuoteForm()

  const [submitError, setSubmitError] = React.useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = React.useState(false)

  // Handle next step with validation
  const handleNext = async () => {
    let isValid = false

    // Validate current step fields
    if (currentStep === 1) {
      isValid = await form.trigger(['name', 'email', 'phone', 'address', 'postcode'])
    } else if (currentStep === 2) {
      const fieldsToValidate: Array<keyof typeof form.formState.errors> = [
        'serviceType',
        'propertyType'
      ]

      const serviceType = form.getValues('serviceType')
      if (['carpet-cleaning', 'upholstery-cleaning'].includes(serviceType)) {
        fieldsToValidate.push('numberOfRooms')
      }
      if (serviceType === 'commercial-cleaning') {
        fieldsToValidate.push('squareMeters')
      }

      isValid = await form.trigger(fieldsToValidate)
    } else if (currentStep === 3) {
      // Step 3 is just review, no validation needed
      isValid = true
    } else if (currentStep === 4) {
      isValid = await form.trigger(['preferredDate', 'preferredTime'])
    } else if (currentStep === 5) {
      isValid = true
    }

    if (isValid) {
      nextStep()
    }
  }

  // Handle form submission
  const handleSubmit = async () => {
    setSubmitError(null)

    // Final validation
    const isValid = await form.trigger()
    if (!isValid) {
      setSubmitError('Please check all fields and try again')
      return
    }

    const data = form.getValues()
    const result = await submitBooking(data)

    if (result.success) {
      setSubmitSuccess(true)
    } else {
      setSubmitError(result.error || 'Failed to submit booking. Please try again.')
    }
  }

  // If submission was successful, show success message
  if (submitSuccess) {
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        <Card className="max-w-2xl w-full border-success-200 bg-success-50">
          <CardContent className="p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-100">
              <svg
                className="h-10 w-10 text-success-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Booking Request Submitted!</h2>
            <p className="mt-4 text-lg text-gray-600">
              Thank you for choosing Method Clean. We've received your booking request.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p>
                <strong>What's next?</strong>
              </p>
              <ul className="mt-2 space-y-1">
                <li>✓ You'll receive a confirmation email within 5 minutes</li>
                <li>✓ We'll contact you within 24 hours to confirm your appointment</li>
                <li>✓ You'll get a reminder 24 hours before your scheduled service</li>
              </ul>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                variant="primary"
                onClick={() => window.location.href = '/'}
              >
                Back to Home
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setSubmitSuccess(false)
                  form.reset()
                  goToStep(1)
                }}
              >
                Book Another Service
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((step) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => step < currentStep && goToStep(step)}
                    disabled={step > currentStep}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all ${
                      step === currentStep
                        ? 'border-primary-600 bg-primary-600 text-white'
                        : step < currentStep
                        ? 'border-success-500 bg-success-500 text-white cursor-pointer hover:bg-success-600'
                        : 'border-gray-300 bg-white text-gray-500'
                    }`}
                  >
                    {step < currentStep ? (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      step
                    )}
                  </button>
                  <span className="mt-2 text-xs font-medium text-gray-600 hidden sm:block">
                    {step === 1 && 'Contact'}
                    {step === 2 && 'Service'}
                    {step === 3 && 'Quote'}
                    {step === 4 && 'Schedule'}
                    {step === 5 && 'Review'}
                  </span>
                </div>
                {step < TOTAL_STEPS && (
                  <div
                    className={`h-0.5 flex-1 mx-2 ${
                      step < currentStep ? 'bg-success-500' : 'bg-gray-300'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <Card className="shadow-lg">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={(e) => e.preventDefault()}>
              {currentStep === 1 && <Step1ContactInfo form={form} />}
              {currentStep === 2 && <Step2ServiceDetails form={form} />}
              {currentStep === 3 && (
                <Step3PricingReview
                  form={form}
                  quote={quote}
                  onCalculate={calculateQuote}
                  isCalculating={isCalculating}
                />
              )}
              {currentStep === 4 && <Step4Scheduling form={form} />}
              {currentStep === 5 && (
                <Step5Confirmation form={form} quote={quote} onEdit={goToStep} />
              )}

              {/* Error Message */}
              {submitError && (
                <div className="mt-6 rounded-lg bg-red-50 border border-red-200 p-4">
                  <div className="flex">
                    <svg
                      className="h-5 w-5 text-red-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="ml-3 text-sm text-red-800">{submitError}</p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between gap-4">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="min-w-[120px]"
                >
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous
                </Button>

                {currentStep < TOTAL_STEPS ? (
                  <Button
                    type="button"
                    variant="primary"
                    onClick={handleNext}
                    disabled={isCalculating}
                    className="min-w-[120px]"
                  >
                    Next
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="success"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="min-w-[120px]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Booking
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Help Text */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Need help? Call us at{' '}
          <a href="tel:01234567890" className="font-medium text-primary-600 hover:text-primary-700">
            0123 456 7890
          </a>{' '}
          or email{' '}
          <a
            href="mailto:info@methodclean.co.uk"
            className="font-medium text-primary-600 hover:text-primary-700"
          >
            info@methodclean.co.uk
          </a>
        </div>
      </div>
    </div>
  )
}
