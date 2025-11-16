/**
 * Quote Server Actions
 *
 * Server-side actions for instant quote calculations
 */

'use server'

import { quoteRequestSchema } from '@/lib/validation/booking.schema'
import { calculateDistance } from '@/lib/utils/distance'
import { calculateQuote, isWithinServiceArea } from '@/lib/utils/pricing'
import type { z } from 'zod'

/**
 * Get an instant quote based on customer input
 *
 * @param data - Quote request data
 * @returns Quote breakdown with pricing
 */
export async function getInstantQuote(data: z.infer<typeof quoteRequestSchema>) {
  try {
    // 1. Validate input
    const validated = quoteRequestSchema.parse(data)

    // 2. Calculate distance from Manchester
    const distance = await calculateDistance('M1 1AA', validated.postcode)

    // 3. Check if within service area
    if (!isWithinServiceArea(distance)) {
      return {
        success: false,
        error: `Sorry, we only service areas within 100 miles of Manchester. Your location (${validated.postcode}) is ${distance} miles away.`,
        outOfRange: true
      }
    }

    // 4. Calculate quote
    const quote = calculateQuote({
      serviceType: validated.serviceType,
      propertyType: validated.propertyType,
      numberOfRooms: validated.numberOfRooms,
      squareMeters: validated.squareMeters,
      stainRemoval: validated.stainRemoval,
      distance
    })

    return {
      success: true,
      quote: {
        distance,
        serviceCost: quote.serviceCost,
        travelCost: quote.travelCost,
        totalCost: quote.totalCost,
        breakdown: {
          basePrice: quote.breakdown.basePrice,
          stainRemovalFee: quote.breakdown.stainRemovalFee,
          travelCost: quote.breakdown.travelCost
        }
      }
    }
  } catch (error) {
    console.error('Error calculating quote:', error)

    if (error instanceof Error) {
      return {
        success: false,
        error: error.message
      }
    }

    return {
      success: false,
      error: 'Failed to calculate quote. Please check your postcode and try again.'
    }
  }
}

/**
 * Validate postcode and check service area
 *
 * @param postcode - UK postcode to validate
 * @returns Validation result with distance
 */
export async function validatePostcodeAndDistance(postcode: string) {
  try {
    const distance = await calculateDistance('M1 1AA', postcode)
    const withinArea = isWithinServiceArea(distance)

    return {
      success: true,
      valid: true,
      distance,
      withinServiceArea: withinArea,
      message: withinArea
        ? `Great! We serve your area (${distance} miles from Manchester)`
        : `Sorry, your location is ${distance} miles away. We only serve within 100 miles of Manchester.`
    }
  } catch (error) {
    console.error('Error validating postcode:', error)

    return {
      success: false,
      valid: false,
      error: error instanceof Error ? error.message : 'Invalid postcode or unable to calculate distance'
    }
  }
}

/**
 * Get pricing estimates for all service types
 *
 * @returns Price ranges for each service
 */
export async function getServicePriceRanges() {
  try {
    const basePrices = {
      'carpet-cleaning': {
        name: 'Carpet Cleaning',
        priceFrom: parseFloat(process.env.BASE_PRICE_CARPET_PER_ROOM || '25'),
        priceUnit: 'per room',
        description: 'Professional carpet deep cleaning'
      },
      'rug-cleaning': {
        name: 'Rug Cleaning',
        priceFrom: parseFloat(process.env.BASE_PRICE_RUG_CLEANING || '30'),
        priceUnit: 'per rug',
        description: 'Specialist rug cleaning service'
      },
      'upholstery-cleaning': {
        name: 'Upholstery Cleaning',
        priceFrom: parseFloat(process.env.BASE_PRICE_UPHOLSTERY_PER_SEAT || '20'),
        priceUnit: 'per seat',
        description: 'Sofa and chair cleaning'
      },
      'leather-cleaning': {
        name: 'Leather Cleaning',
        priceFrom: parseFloat(process.env.BASE_PRICE_LEATHER_CLEANING || '35'),
        priceUnit: 'per item',
        description: 'Leather furniture care'
      },
      'mattress-cleaning': {
        name: 'Mattress Cleaning',
        priceFrom: parseFloat(process.env.BASE_PRICE_MATTRESS_SINGLE || '40'),
        priceUnit: 'from single',
        description: 'Deep mattress sanitization'
      },
      'stain-removal': {
        name: 'Stain Removal',
        priceFrom: parseFloat(process.env.BASE_PRICE_STAIN_REMOVAL || '15'),
        priceUnit: 'additional',
        description: 'Specialist stain treatment'
      },
      'commercial-cleaning': {
        name: 'Commercial Cleaning',
        priceFrom: parseFloat(process.env.BASE_PRICE_COMMERCIAL_PER_SQM || '2'),
        priceUnit: 'per sqm',
        description: 'Office and commercial spaces'
      },
      'car-valeting': {
        name: 'Car Valeting',
        priceFrom: parseFloat(process.env.BASE_PRICE_CAR_VALETING || '50'),
        priceUnit: 'per vehicle',
        description: 'Interior car cleaning'
      }
    }

    return {
      success: true,
      prices: basePrices
    }
  } catch (error) {
    console.error('Error fetching price ranges:', error)
    return {
      success: false,
      error: 'Failed to fetch price ranges'
    }
  }
}
