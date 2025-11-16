/**
 * Quote Page
 *
 * Multi-step booking form for instant quotes
 */

import { QuoteForm } from '@/components/forms/QuoteForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Instant Quote | Method Clean - Carpet & Upholstery Cleaning Manchester',
  description:
    'Get an instant online quote for professional carpet and upholstery cleaning in Manchester. Free quotes, transparent pricing, no hidden fees.',
  keywords:
    'carpet cleaning quote Manchester, upholstery cleaning price, instant quote, free estimate, cleaning cost calculator',
  openGraph: {
    title: 'Get Instant Quote - Method Clean',
    description: 'Get your instant quote for professional carpet and upholstery cleaning in Manchester',
    type: 'website'
  }
}

export default function QuotePage() {
  return <QuoteForm />
}
