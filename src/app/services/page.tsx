/**
 * Services Overview Page - Award-Winning Design
 *
 * Complete list of all cleaning services with premium UI/UX
 * Features: 3D cards, spotlight effects, animated text, moving borders
 */

import Link from 'next/link'
import { Button } from '@/components/ui'
import type { Metadata } from 'next'
import { ServiceCard } from './service-card-client'

export const metadata: Metadata = {
  title: 'Cleaning Services Manchester | Professional Carpet & Upholstery Cleaners',
  description:
    'Expert cleaning services in Manchester, Salford & Trafford. Professional carpet cleaning, upholstery cleaning, rug cleaning from £25. Same day service. 5★ rated. Call 07405 428259.',
  keywords:
    'cleaning services Manchester, carpet cleaning Manchester, upholstery cleaning Manchester, professional cleaners Manchester, rug cleaning Manchester, Manchester cleaning company, deep cleaning services Manchester',
  openGraph: {
    title: 'Cleaning Services Manchester | Blowup Cleaners',
    description: 'Professional carpet & upholstery cleaning in Manchester. Same day service available. From £25 per room. 5★ rated.',
    type: 'website'
  }
}

const services = [
  {
    slug: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    shortDescription: 'Deep steam cleaning for all carpet types',
    description:
      'Professional deep steam cleaning that removes dirt, stains, and allergens from all types of carpets. We use eco-friendly products and powerful extraction equipment to leave your carpets fresh, clean, and dry within hours.',
    features: [
      'Deep steam extraction cleaning',
      'Stain and odor removal',
      'Fast drying time (2-4 hours)',
      'Safe for children and pets',
      'All carpet types and materials',
      'Pre-treatment of heavy stains'
    ],
    pricing: 'From £25 per room',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🏠'
  },
  {
    slug: 'upholstery-cleaning',
    name: 'Upholstery Cleaning',
    shortDescription: 'Expert cleaning for sofas, chairs & furniture',
    description:
      'Specialist upholstery cleaning for sofas, armchairs, dining chairs, and all fabric furniture. Our gentle yet effective cleaning process removes dirt, stains, and odors while protecting your furniture fabrics.',
    features: [
      'All furniture types and fabrics',
      'Delicate fabric protection',
      'Color-safe cleaning solutions',
      'Dust mite and allergen removal',
      'Leather cleaning and conditioning',
      'Scotchgard protection available'
    ],
    pricing: 'From £40 per item',
    gradient: 'from-purple-500 to-pink-500',
    icon: '🛋️'
  },
  {
    slug: 'rug-cleaning',
    name: 'Rug Cleaning',
    shortDescription: 'Specialist cleaning for all rug types',
    description:
      'Professional cleaning for area rugs, Persian rugs, oriental rugs, and specialty rugs. We understand the unique requirements of different rug materials and use appropriate cleaning methods to preserve their beauty.',
    features: [
      'Oriental and Persian rugs',
      'Antique rug cleaning',
      'Wool, silk, and synthetic materials',
      'Fringe cleaning and repair',
      'Pick-up and delivery available',
      'Color restoration services'
    ],
    pricing: 'From £35 per rug',
    gradient: 'from-amber-500 to-orange-500',
    icon: '🎨'
  },
  {
    slug: 'stain-removal',
    name: 'Stain Removal',
    shortDescription: 'Specialized treatment for tough stains',
    description:
      'Expert stain removal service for even the toughest stains including wine, coffee, pet stains, ink, and more. Our technicians use professional-grade stain removers and proven techniques to eliminate stubborn stains.',
    features: [
      'Wine, coffee, and food stains',
      'Pet stains and odors',
      'Ink and dye removal',
      'Blood and bodily fluid stains',
      'Grease and oil stains',
      'Guarantee on stain removal'
    ],
    pricing: 'From £15 (add-on)',
    gradient: 'from-red-500 to-rose-500',
    icon: '💧'
  },
  {
    slug: 'pet-odor-removal',
    name: 'Pet Odor Removal',
    shortDescription: 'Complete pet odor & stain treatment',
    description:
      'Specialized pet odor and stain removal service that eliminates pet urine, feces, and vomit odors at the molecular level. We don\'t just mask odors – we eliminate them completely using enzyme-based treatments.',
    features: [
      'Enzyme-based odor elimination',
      'UV light stain detection',
      'Deep carpet pad treatment',
      'Anti-bacterial sanitization',
      'Long-lasting odor prevention',
      'Safe for pets and children'
    ],
    pricing: 'From £50',
    gradient: 'from-green-500 to-emerald-500',
    icon: '🐾'
  },
  {
    slug: 'end-of-tenancy-cleaning',
    name: 'End of Tenancy Cleaning',
    shortDescription: 'Deep clean for rental properties',
    description:
      'Comprehensive cleaning service for tenants moving out and landlords preparing properties. We deep clean carpets, upholstery, and all flooring to help ensure you get your deposit back or attract new tenants.',
    features: [
      'Full property carpet cleaning',
      'Upholstery and curtain cleaning',
      'Stain and odor removal',
      'Deposit-back guarantee',
      'Fast turnaround available',
      'Certified cleaning report'
    ],
    pricing: 'From £150 per property',
    gradient: 'from-indigo-500 to-purple-500',
    icon: '🔑'
  },
  {
    slug: 'mattress-cleaning',
    name: 'Mattress Cleaning',
    shortDescription: 'Deep sanitization for healthier sleep',
    description:
      'Professional mattress cleaning and sanitization service that removes dust mites, allergens, bacteria, and stains. Improve your sleep quality and indoor air quality with our deep mattress cleaning.',
    features: [
      'Dust mite and allergen removal',
      'Deep steam sanitization',
      'Stain and odor treatment',
      'Anti-bacterial protection',
      'Fast drying (2-3 hours)',
      'All mattress types and sizes'
    ],
    pricing: 'From £30 per mattress',
    gradient: 'from-sky-500 to-blue-500',
    icon: '🛏️'
  },
  {
    slug: 'commercial-cleaning',
    name: 'Commercial Cleaning',
    shortDescription: 'Professional service for businesses',
    description:
      'Specialized commercial carpet and upholstery cleaning for offices, hotels, restaurants, retail spaces, and other businesses. We work around your schedule to minimize disruption to your operations.',
    features: [
      'Office and retail spaces',
      'Hotels and hospitality',
      'Restaurants and cafes',
      'Out-of-hours service available',
      'Regular maintenance contracts',
      'Large-scale equipment'
    ],
    pricing: 'Custom quote',
    gradient: 'from-slate-600 to-gray-700',
    icon: '🏢'
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Manchester SEO Optimized */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-16 sm:py-24 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6TTUzIDEzNGg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Trust Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-blue-900 rounded-full text-sm font-semibold shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5★ Rated Cleaning Services in Manchester</span>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Cleaning Services<br />
              <span className="text-yellow-400">Manchester & Surrounding Areas</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert carpet cleaning, upholstery cleaning, and more. Serving Manchester, Salford, Trafford & beyond. Same day service available.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/quote">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold shadow-xl px-8 py-4 text-lg rounded-xl transition-all hover:scale-105">
                  Get Instant Quote →
                </Button>
              </Link>
              <a href="tel:07405428259" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-xl hover:bg-white/20 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>07405 428259</span>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="font-medium">Same Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="font-medium">Eco-Friendly Products</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="font-medium">100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TL;DR for LLMs & Voice Search - CRITICAL for AI Overviews */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="speakable-tldr bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
          <h2 className="speakable-headline text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Complete Cleaning Services Across Manchester
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed font-medium text-center">
            <strong>Blowup Cleaners</strong> provides professional carpet cleaning, upholstery cleaning, and rug cleaning services in <strong>Manchester, Salford, and Trafford</strong>. Same-day service available from <strong className="speakable-pricing">£25 per room</strong>. IICRC certified technicians, eco-friendly products, 100% satisfaction guarantee. <span className="speakable-cta">Call <a href="tel:07405428259" className="text-blue-600 font-bold hover:underline">07405 428259</a> or get an instant quote online.</span>
          </p>
          <div className="mt-4 text-sm text-gray-500 text-center">
            <time dateTime="2025-01-21">Last Updated: January 21, 2025</time>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Blowup Cleaners is Manchester's trusted cleaning company, serving homes and businesses in <strong>Manchester</strong>, <strong>Salford</strong>, <strong>Trafford</strong>, and surrounding areas. From carpet cleaning to upholstery care, our certified technicians deliver exceptional results using eco-friendly products and professional-grade equipment.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>

      {/* Why Choose Section - Light Background per colorcode.json */}
      <div className="relative py-24 sm:py-32 bg-gray-50">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600 mb-2">
              Manchester's Trusted Cleaning Company
            </h2>
            <p className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
              Why Choose Blowup Cleaners?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '✓',
                title: 'Certified Technicians',
                description: 'Fully trained and certified cleaning professionals',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🌿',
                title: 'Eco-Friendly',
                description: 'Safe, non-toxic cleaning products',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: '⚡',
                title: 'Same Day Service',
                description: 'Available for urgent cleaning needs in Manchester',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: '🛡️',
                title: '100% Guarantee',
                description: 'Satisfaction guaranteed or re-clean free',
                color: 'from-blue-600 to-blue-700'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-300"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className={`text-5xl mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Yellow CTA per colorcode.json */}
      <div className="relative py-24 sm:py-32 bg-blue-600">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready for Professional Cleaning?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get your free instant quote today for cleaning services in Manchester. No obligation, transparent pricing, professional service guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/quote">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold shadow-xl px-10 py-5 text-lg rounded-xl transition-all hover:scale-105">
                Get Free Quote →
              </Button>
            </Link>
            <a
              href="tel:07405428259"
              className="group inline-flex items-center gap-2 px-10 py-5 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Call 07405 428259</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Quote & Survey</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Serving All Manchester Areas</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section for AI Overviews & Featured Snippets */}
      <div className="max-w-4xl mx-auto px-6 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              question: 'How much does carpet cleaning cost in Manchester?',
              answer: 'Professional carpet cleaning in Manchester starts from £25 per room. The final cost depends on the carpet size, condition, and type of cleaning required. We offer free quotes with transparent pricing.'
            },
            {
              question: 'Do you offer same-day cleaning services in Manchester?',
              answer: 'Yes, we provide same-day carpet and upholstery cleaning services across Manchester, Salford, and Trafford, subject to availability. Call 07405 428259 to book urgent cleaning.'
            },
            {
              question: 'What areas in Manchester do you cover?',
              answer: 'We serve all areas across Greater Manchester including Manchester city centre, Salford, Trafford, Stockport, and surrounding postcodes within our 100-mile service radius.'
            },
            {
              question: 'Are your cleaning products eco-friendly?',
              answer: 'Yes, all our cleaning products are eco-friendly, non-toxic, and safe for children and pets. We use professional-grade green cleaning solutions approved by industry standards.'
            },
            {
              question: 'How long does carpet cleaning take to dry?',
              answer: 'With our professional steam extraction method, carpets typically dry within 2-4 hours. We use powerful extraction equipment to minimize drying time and ensure you can use your carpets the same day.'
            }
          ].map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-6 last:border-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Comprehensive Schema Markup - Organization + Service + FAQPage + Speakable + Breadcrumb */}

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'Blowup Cleaners',
            'legalName': 'HOPOLLO LTD',
            'url': 'https://blowupcleaners.co.uk',
            'logo': 'https://blowupcleaners.co.uk/logo.png',
            'foundingDate': '2020',
            'contactPoint': {
              '@type': 'ContactPoint',
              'telephone': '+447405428259',
              'contactType': 'customer service',
              'areaServed': 'GB',
              'availableLanguage': 'English'
            },
            'sameAs': [
              'https://www.facebook.com/blowupcleaners',
              'https://www.google.com/maps/place/Blowup+Cleaners'
            ]
          })
        }}
      />

      {/* LocalBusiness + Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Blowup Cleaners',
            'legalName': 'HOPOLLO LTD',
            'image': 'https://blowupcleaners.co.uk/logo.png',
            'telephone': '+447405428259',
            'email': 'info@blowupcleaners.co.uk',
            'priceRange': '£25-£150',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '230 Sealand Road',
              'addressLocality': 'Chester',
              'addressRegion': 'Cheshire',
              'postalCode': 'CH1 4LH',
              'addressCountry': 'GB'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': '53.1905',
              'longitude': '-2.9582'
            },
            'areaServed': [
              { '@type': 'City', 'name': 'Manchester' },
              { '@type': 'City', 'name': 'Salford' },
              { '@type': 'City', 'name': 'Trafford' },
              { '@type': 'City', 'name': 'Stockport' }
            ],
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '5',
              'reviewCount': '127',
              'bestRating': '5',
              'worstRating': '1'
            },
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Cleaning Services',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'Carpet Cleaning Manchester',
                    'description': 'Professional carpet cleaning services in Manchester from £25 per room'
                  }
                },
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'Upholstery Cleaning Manchester',
                    'description': 'Expert upholstery and sofa cleaning services in Manchester from £40'
                  }
                }
              ]
            }
          })
        }}
      />

      {/* FAQPage Schema for AI Overviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'How much does carpet cleaning cost in Manchester?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Professional carpet cleaning in Manchester starts from £25 per room. The final cost depends on the carpet size, condition, and type of cleaning required. We offer free quotes with transparent pricing.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Do you offer same-day cleaning services in Manchester?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes, we provide same-day carpet and upholstery cleaning services across Manchester, Salford, and Trafford, subject to availability. Call 07405 428259 to book urgent cleaning.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What areas in Manchester do you cover?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'We serve all areas across Greater Manchester including Manchester city centre, Salford, Trafford, Stockport, and surrounding postcodes within our 100-mile service radius.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Are your cleaning products eco-friendly?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes, all our cleaning products are eco-friendly, non-toxic, and safe for children and pets. We use professional-grade green cleaning solutions approved by industry standards.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How long does carpet cleaning take to dry?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'With our professional steam extraction method, carpets typically dry within 2-4 hours. We use powerful extraction equipment to minimize drying time.'
                }
              }
            ]
          })
        }}
      />

      {/* Speakable Schema for Voice Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'name': 'Cleaning Services Manchester',
            'description': 'Professional carpet cleaning and upholstery cleaning services in Manchester. Same-day availability from £25. Call 07405 428259.',
            'speakable': {
              '@type': 'SpeakableSpecification',
              'cssSelector': ['.speakable-headline', '.speakable-tldr', '.speakable-pricing', '.speakable-cta']
            }
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://blowupcleaners.co.uk'
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Services',
                'item': 'https://blowupcleaners.co.uk/services'
              }
            ]
          })
        }}
      />
    </div>
  )
}
