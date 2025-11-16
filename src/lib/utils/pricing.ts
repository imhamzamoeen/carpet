/**
 * Pricing Calculation Utility
 *
 * Calculates service costs, travel costs, and total quotes based on:
 * - Service type and property details
 * - Distance from Manchester base location
 * - Additional options (stain removal, etc.)
 */

interface QuoteParams {
  serviceType: string
  propertyType: string
  numberOfRooms?: number
  squareMeters?: number
  stainRemoval: boolean
  distance: number
}

interface Quote {
  serviceCost: number
  travelCost: number
  totalCost: number
  breakdown: {
    basePrice: number
    stainRemovalFee: number
    travelCost: number
  }
}

/**
 * Get base pricing from environment variables with fallback defaults
 */
function getBasePrices() {
  return {
    'carpet-cleaning': parseFloat(process.env.BASE_PRICE_CARPET_PER_ROOM || '25'),
    'rug-cleaning': parseFloat(process.env.BASE_PRICE_RUG_CLEANING || '30'),
    'upholstery-cleaning': parseFloat(process.env.BASE_PRICE_UPHOLSTERY_PER_SEAT || '20'),
    'leather-cleaning': parseFloat(process.env.BASE_PRICE_LEATHER_CLEANING || '35'),
    'mattress-cleaning-single': parseFloat(process.env.BASE_PRICE_MATTRESS_SINGLE || '40'),
    'mattress-cleaning-double': parseFloat(process.env.BASE_PRICE_MATTRESS_DOUBLE || '50'),
    'mattress-cleaning-king': parseFloat(process.env.BASE_PRICE_MATTRESS_KING || '60'),
    'stain-removal': parseFloat(process.env.BASE_PRICE_STAIN_REMOVAL || '15'),
    'commercial-cleaning': parseFloat(process.env.BASE_PRICE_COMMERCIAL_PER_SQM || '2'),
    'car-valeting': parseFloat(process.env.BASE_PRICE_CAR_VALETING || '50'),
  }
}

/**
 * Calculate complete quote including service cost and travel cost
 *
 * @param params - Quote parameters including service details and distance
 * @returns Complete quote with breakdown
 */
export function calculateQuote(params: QuoteParams): Quote {
  const {
    serviceType,
    numberOfRooms,
    squareMeters,
    stainRemoval,
    distance
  } = params

  const basePrices = getBasePrices()
  let basePrice = 0

  // Calculate base price based on service type
  switch (serviceType) {
    case 'carpet-cleaning':
      basePrice = basePrices['carpet-cleaning'] * (numberOfRooms || 1)
      break

    case 'rug-cleaning':
      basePrice = basePrices['rug-cleaning']
      break

    case 'upholstery-cleaning':
      basePrice = basePrices['upholstery-cleaning'] * (numberOfRooms || 1) // Treat as seats
      break

    case 'leather-cleaning':
      basePrice = basePrices['leather-cleaning']
      break

    case 'mattress-cleaning-single':
      basePrice = basePrices['mattress-cleaning-single']
      break

    case 'mattress-cleaning-double':
      basePrice = basePrices['mattress-cleaning-double']
      break

    case 'mattress-cleaning-king':
      basePrice = basePrices['mattress-cleaning-king']
      break

    case 'commercial-cleaning':
      basePrice = basePrices['commercial-cleaning'] * (squareMeters || 50)
      break

    case 'car-valeting':
      basePrice = basePrices['car-valeting']
      break

    default:
      // Default to carpet cleaning pricing
      basePrice = basePrices['carpet-cleaning'] * (numberOfRooms || 1)
  }

  // Add stain removal fee
  const stainRemovalFee = stainRemoval ? basePrices['stain-removal'] : 0

  // Calculate travel cost
  const freeRadiusMiles = parseFloat(process.env.NEXT_PUBLIC_FREE_RADIUS_MILES || '20')
  const travelCostPerMile = parseFloat(process.env.NEXT_PUBLIC_TRAVEL_COST_PER_MILE || '0.78')

  const travelCost = distance > freeRadiusMiles
    ? Math.round((distance - freeRadiusMiles) * travelCostPerMile * 100) / 100
    : 0

  // Calculate totals
  const serviceCost = Math.round((basePrice + stainRemovalFee) * 100) / 100
  const totalCost = Math.round((serviceCost + travelCost) * 100) / 100

  return {
    serviceCost,
    travelCost,
    totalCost,
    breakdown: {
      basePrice: Math.round(basePrice * 100) / 100,
      stainRemovalFee: Math.round(stainRemovalFee * 100) / 100,
      travelCost
    }
  }
}

/**
 * Get service radius configuration
 */
export function getServiceRadius() {
  return {
    maxRadiusMiles: parseFloat(process.env.NEXT_PUBLIC_SERVICE_RADIUS_MILES || '100'),
    freeRadiusMiles: parseFloat(process.env.NEXT_PUBLIC_FREE_RADIUS_MILES || '20'),
    travelCostPerMile: parseFloat(process.env.NEXT_PUBLIC_TRAVEL_COST_PER_MILE || '0.78')
  }
}

/**
 * Check if a distance is within service area
 */
export function isWithinServiceArea(distance: number): boolean {
  const { maxRadiusMiles } = getServiceRadius()
  return distance <= maxRadiusMiles
}

/**
 * Format price for display (GBP)
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  }).format(amount)
}
