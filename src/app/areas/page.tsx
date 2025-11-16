/**
 * Areas We Cover Page
 *
 * Service coverage areas for local SEO optimization
 */

import React from 'react'
import Link from 'next/link'
import { Button, Card, CardContent } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Areas We Cover | Carpet Cleaning Manchester & Surrounding Areas',
  description:
    'Professional carpet and upholstery cleaning services throughout Manchester, Stockport, Bolton, Oldham, Rochdale, Salford, Wigan, and surrounding areas. Free travel within 20 miles.',
  keywords:
    'carpet cleaning Manchester, carpet cleaning Stockport, carpet cleaning Bolton, carpet cleaning Salford, carpet cleaning Oldham, upholstery cleaning Manchester area',
  openGraph: {
    title: 'Service Areas - Method Clean',
    description: 'We serve Manchester and surrounding areas within 100 miles',
    type: 'website'
  }
}

interface ServiceArea {
  name: string
  postcode: string
  distance: number
  popular: boolean
}

const serviceAreas: ServiceArea[] = [
  // Manchester City Areas
  { name: 'Manchester City Centre', postcode: 'M1-M4', distance: 0, popular: true },
  { name: 'Salford', postcode: 'M5-M7', distance: 2, popular: true },
  { name: 'Trafford', postcode: 'M16-M17', distance: 3, popular: true },
  { name: 'Chorlton', postcode: 'M21', distance: 4, popular: false },
  { name: 'Didsbury', postcode: 'M20', distance: 5, popular: true },
  { name: 'Withington', postcode: 'M20', distance: 5, popular: false },
  { name: 'Fallowfield', postcode: 'M14', distance: 3, popular: false },
  { name: 'Rusholme', postcode: 'M14', distance: 3, popular: false },
  { name: 'Moss Side', postcode: 'M15', distance: 2, popular: false },
  { name: 'Hulme', postcode: 'M15', distance: 2, popular: false },
  { name: 'Old Trafford', postcode: 'M16', distance: 3, popular: false },
  { name: 'Sale', postcode: 'M33', distance: 6, popular: true },
  { name: 'Altrincham', postcode: 'WA14-WA15', distance: 8, popular: true },

  // North Manchester
  { name: 'Prestwich', postcode: 'M25', distance: 5, popular: false },
  { name: 'Whitefield', postcode: 'M45', distance: 7, popular: false },
  { name: 'Bury', postcode: 'BL8-BL9', distance: 9, popular: true },
  { name: 'Radcliffe', postcode: 'M26', distance: 8, popular: false },
  { name: 'Rochdale', postcode: 'OL11-OL16', distance: 12, popular: true },
  { name: 'Heywood', postcode: 'OL10', distance: 10, popular: false },
  { name: 'Middleton', postcode: 'M24', distance: 6, popular: false },

  // East Manchester
  { name: 'Oldham', postcode: 'OL1-OL4', distance: 8, popular: true },
  { name: 'Chadderton', postcode: 'OL9', distance: 7, popular: false },
  { name: 'Failsworth', postcode: 'M35', distance: 5, popular: false },
  { name: 'Ashton-under-Lyne', postcode: 'OL6-OL7', distance: 8, popular: true },
  { name: 'Droylsden', postcode: 'M43', distance: 5, popular: false },
  { name: 'Denton', postcode: 'M34', distance: 6, popular: false },
  { name: 'Hyde', postcode: 'SK14', distance: 9, popular: false },
  { name: 'Dukinfield', postcode: 'SK16', distance: 8, popular: false },
  { name: 'Stalybridge', postcode: 'SK15', distance: 10, popular: false },

  // South Manchester
  { name: 'Stockport', postcode: 'SK1-SK7', distance: 7, popular: true },
  { name: 'Cheadle', postcode: 'SK8', distance: 8, popular: true },
  { name: 'Gatley', postcode: 'SK8', distance: 9, popular: false },
  { name: 'Hazel Grove', postcode: 'SK7', distance: 10, popular: false },
  { name: 'Bramhall', postcode: 'SK7', distance: 11, popular: false },
  { name: 'Wilmslow', postcode: 'SK9', distance: 13, popular: true },
  { name: 'Macclesfield', postcode: 'SK10-SK11', distance: 18, popular: false },

  // West Manchester
  { name: 'Bolton', postcode: 'BL1-BL7', distance: 11, popular: true },
  { name: 'Farnworth', postcode: 'BL4', distance: 9, popular: false },
  { name: 'Walkden', postcode: 'M28', distance: 7, popular: false },
  { name: 'Worsley', postcode: 'M28', distance: 8, popular: false },
  { name: 'Swinton', postcode: 'M27', distance: 5, popular: false },
  { name: 'Eccles', postcode: 'M30', distance: 4, popular: false },
  { name: 'Urmston', postcode: 'M41', distance: 7, popular: false },
  { name: 'Stretford', postcode: 'M32', distance: 4, popular: false },
  { name: 'Wigan', postcode: 'WN1-WN6', distance: 18, popular: true },
  { name: 'Leigh', postcode: 'WN7', distance: 15, popular: false },

  // Cheshire
  { name: 'Warrington', postcode: 'WA1-WA5', distance: 20, popular: true },
  { name: 'Knutsford', postcode: 'WA16', distance: 16, popular: false },
  { name: 'Northwich', postcode: 'CW8-CW9', distance: 25, popular: false },
  { name: 'Chester', postcode: 'CH1-CH4', distance: 40, popular: false }
]

// Group areas by region
const groupedAreas = {
  'Manchester City & Central': serviceAreas.filter(a => a.distance <= 5 && a.name.includes('Manchester') || ['Salford', 'Trafford', 'Chorlton', 'Didsbury', 'Withington', 'Fallowfield', 'Rusholme', 'Moss Side', 'Hulme', 'Old Trafford'].includes(a.name)),
  'South Manchester & Stockport': serviceAreas.filter(a => ['Sale', 'Altrincham', 'Stockport', 'Cheadle', 'Gatley', 'Hazel Grove', 'Bramhall', 'Wilmslow', 'Macclesfield'].includes(a.name)),
  'North Manchester': serviceAreas.filter(a => ['Prestwich', 'Whitefield', 'Bury', 'Radcliffe', 'Rochdale', 'Heywood', 'Middleton'].includes(a.name)),
  'East Manchester': serviceAreas.filter(a => ['Oldham', 'Chadderton', 'Failsworth', 'Ashton-under-Lyne', 'Droylsden', 'Denton', 'Hyde', 'Dukinfield', 'Stalybridge'].includes(a.name)),
  'West Manchester & Bolton': serviceAreas.filter(a => ['Bolton', 'Farnworth', 'Walkden', 'Worsley', 'Swinton', 'Eccles', 'Urmston', 'Stretford', 'Wigan', 'Leigh'].includes(a.name)),
  'Cheshire': serviceAreas.filter(a => ['Warrington', 'Knutsford', 'Northwich', 'Chester'].includes(a.name))
}

export default function AreasPage() {
  const popularAreas = serviceAreas.filter(a => a.popular)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Areas We Cover
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Professional carpet and upholstery cleaning services throughout Manchester and
              surrounding areas. We serve locations within 100 miles of Manchester city center.
            </p>
            <div className="mt-10">
              <Link href="/quote">
                <Button size="lg" variant="success">
                  Get Instant Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Coverage Info */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Service Coverage</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fast, Reliable Service Across Greater Manchester
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We proudly serve homes and businesses throughout Greater Manchester and the surrounding
            regions. Our professional cleaning team is ready to serve you wherever you are.
          </p>
        </div>

        {/* Travel Cost Information */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-16">
          <Card className="border-success-200 bg-success-50">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-600 text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">0-20 Miles</h3>
                  <p className="text-2xl font-bold text-success-600">FREE</p>
                  <p className="text-sm text-gray-600">No travel charge</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">20-100 Miles</h3>
                  <p className="text-2xl font-bold text-blue-600">£1/mile</p>
                  <p className="text-sm text-gray-600">After first 20 miles</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary-200 bg-primary-50">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Same Day</h3>
                  <p className="text-2xl font-bold text-primary-600">Available</p>
                  <p className="text-sm text-gray-600">Most areas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Areas */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Service Areas</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {popularAreas.map((area) => (
              <Card key={area.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900">{area.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{area.postcode}</p>
                  <div className="mt-2 flex items-center text-xs text-gray-600">
                    <svg className="h-4 w-4 mr-1 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {area.distance === 0 ? 'City Centre' : `${area.distance} miles`}
                  </div>
                  {area.distance <= 20 && (
                    <span className="mt-2 inline-block text-xs font-medium text-success-600">
                      Free travel
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Areas by Region */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Service Areas</h2>
          <div className="space-y-8">
            {Object.entries(groupedAreas).map(([region, areas]) => (
              <div key={region}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-primary-600 pb-2">
                  {region}
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {areas.map((area) => (
                    <div key={area.name} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-gray-50 transition-colors">
                      <div>
                        <p className="font-medium text-gray-900">{area.name}</p>
                        <p className="text-sm text-gray-500">{area.postcode}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{area.distance === 0 ? 'Centre' : `${area.distance}mi`}</p>
                        {area.distance <= 20 && (
                          <p className="text-xs text-success-600 font-medium">Free</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Not Listed Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Don't See Your Area Listed?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We serve many more locations throughout the North West. If your area isn't listed
              above, please use our instant quote tool to check if we can serve you. We're
              constantly expanding our coverage area.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link href="/quote">
                <Button size="lg" variant="default">
                  Check Your Postcode
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900">
            Professional Carpet Cleaning Across Greater Manchester
          </h2>
          <p className="mt-4 text-gray-600">
            Method Clean is proud to offer professional carpet and upholstery cleaning services
            throughout Greater Manchester and the surrounding areas. With over 10 years of
            experience serving local communities, we understand the unique needs of homes and
            businesses in the region.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-900">Why Choose Local?</h3>
          <p className="mt-4 text-gray-600">
            As a Manchester-based cleaning company, we offer several advantages over national chains:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>Fast response times - we can often provide same-day service in most areas</li>
            <li>Local knowledge - we understand the specific cleaning challenges in your area</li>
            <li>Community commitment - we're invested in serving our neighbors with the best possible service</li>
            <li>Competitive pricing - lower overheads mean better value for you</li>
            <li>Personal service - you'll speak directly with our team, not a call center</li>
          </ul>

          <h3 className="mt-8 text-xl font-bold text-gray-900">Service Coverage Details</h3>
          <p className="mt-4 text-gray-600">
            We serve all postcodes within a 100-mile radius of Manchester city center. This includes
            all of Greater Manchester, parts of Cheshire, Lancashire, Derbyshire, and West Yorkshire.
            The first 20 miles from Manchester have no travel charge, making our services extremely
            affordable for local residents.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-900">Book Your Service Today</h3>
          <p className="mt-4 text-gray-600">
            Ready to experience the Method Clean difference? Use our instant online quote tool to get
            a price for your area in seconds. We offer flexible scheduling including evenings and
            weekends to fit your busy lifestyle.
          </p>
        </div>
      </div>
    </div>
  )
}
