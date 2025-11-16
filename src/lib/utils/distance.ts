/**
 * Distance Calculation Utility
 *
 * Uses Google Maps Distance Matrix API to calculate driving distance
 * between Manchester (base location) and customer postcode
 */

import axios from 'axios'

const MANCHESTER_BASE_POSTCODE = 'M1 1AA' // Manchester city center

/**
 * Calculate driving distance between two postcodes
 *
 * @param origin - Origin postcode (defaults to Manchester base)
 * @param destination - Destination postcode
 * @returns Distance in miles (rounded to 1 decimal)
 * @throws Error if API call fails or destination is invalid
 */
export async function calculateDistance(
  origin: string = MANCHESTER_BASE_POSTCODE,
  destination: string
): Promise<number> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    throw new Error('Google Maps API key not configured')
  }

  try {
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/distancematrix/json',
      {
        params: {
          origins: origin,
          destinations: destination,
          units: 'imperial', // Get distance in miles
          mode: 'driving',
          key: apiKey
        }
      }
    )

    // Check API response status
    if (response.data.status !== 'OK') {
      throw new Error(`Google Maps API error: ${response.data.status}`)
    }

    const result = response.data.rows[0].elements[0]

    if (result.status === 'OK') {
      // Distance is returned in meters, convert to miles
      const distanceInMiles = result.distance.value * 0.000621371

      // Round to 1 decimal place
      return Math.round(distanceInMiles * 10) / 10
    } else if (result.status === 'NOT_FOUND') {
      throw new Error('Postcode not found. Please check the postcode and try again.')
    } else if (result.status === 'ZERO_RESULTS') {
      throw new Error('Unable to calculate route to this postcode.')
    } else {
      throw new Error(`Distance calculation failed: ${result.status}`)
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Distance calculation error:', error.message)
      throw new Error('Failed to calculate distance. Please try again.')
    }
    throw error
  }
}

/**
 * Validate UK postcode format
 *
 * @param postcode - Postcode to validate
 * @returns true if postcode format is valid
 */
export function validatePostcode(postcode: string): boolean {
  // UK postcode regex pattern
  const postcodeRegex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i
  return postcodeRegex.test(postcode.trim())
}

/**
 * Format postcode to standard format (uppercase, space)
 *
 * @param postcode - Postcode to format
 * @returns Formatted postcode
 */
export function formatPostcode(postcode: string): string {
  const cleaned = postcode.replace(/\s+/g, '').toUpperCase()

  // Add space before last 3 characters (standard UK format)
  if (cleaned.length >= 5) {
    return cleaned.slice(0, -3) + ' ' + cleaned.slice(-3)
  }

  return cleaned
}

/**
 * Get distance and duration information
 *
 * @param origin - Origin postcode
 * @param destination - Destination postcode
 * @returns Object with distance (miles) and duration (minutes)
 */
export async function getDistanceAndDuration(
  origin: string = MANCHESTER_BASE_POSTCODE,
  destination: string
): Promise<{ distance: number; durationMinutes: number }> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    throw new Error('Google Maps API key not configured')
  }

  try {
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/distancematrix/json',
      {
        params: {
          origins: origin,
          destinations: destination,
          units: 'imperial',
          mode: 'driving',
          key: apiKey
        }
      }
    )

    const result = response.data.rows[0].elements[0]

    if (result.status === 'OK') {
      const distanceInMiles = result.distance.value * 0.000621371
      const durationMinutes = Math.ceil(result.duration.value / 60)

      return {
        distance: Math.round(distanceInMiles * 10) / 10,
        durationMinutes
      }
    } else {
      throw new Error(`Distance calculation failed: ${result.status}`)
    }
  } catch (error) {
    console.error('Distance/duration calculation error:', error)
    throw new Error('Failed to calculate distance and duration')
  }
}
