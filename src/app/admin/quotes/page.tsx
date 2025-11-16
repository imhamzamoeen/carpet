/**
 * Admin Quotes Page
 *
 * View and manage all instant quotes
 */

import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { prisma } from '@/lib/db'
import { BookingStatus } from '@prisma/client'

async function getQuotes() {
  try {
    const quotes = await prisma.booking.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100
    })
    return quotes
  } catch (error) {
    console.error('Error fetching quotes:', error)
    return []
  }
}

export default async function AdminQuotesPage() {
  const quotes = await getQuotes()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quotes</h1>
          <p className="mt-2 text-gray-600">Manage all instant quotes</p>
        </div>
        <div className="text-sm text-gray-500">
          Total: {quotes.length} quotes
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Quotes</CardTitle>
        </CardHeader>
        <CardContent>
          {quotes.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Service</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Location</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Distance</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Service Cost</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Travel Cost</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Total</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.map((quote) => (
                    <tr key={quote.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">
                        {new Date(quote.createdAt).toLocaleDateString('en-GB')}
                        <p className="text-xs text-gray-500">
                          {new Date(quote.createdAt).toLocaleTimeString('en-GB', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </td>
                      <td className="py-3 px-4 text-gray-900">
                        {quote.serviceType
                          .split('-')
                          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                          .join(' ')}
                        {quote.numberOfRooms && (
                          <p className="text-xs text-gray-500">{quote.numberOfRooms} rooms</p>
                        )}
                        {quote.squareMeters && (
                          <p className="text-xs text-gray-500">{quote.squareMeters}m²</p>
                        )}
                        {quote.stainRemoval && (
                          <p className="text-xs text-yellow-600">+ Stain Removal</p>
                        )}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        <p className="font-medium">{quote.postcode}</p>
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {quote.distance.toFixed(1)} miles
                      </td>
                      <td className="py-3 px-4 text-gray-900">
                        £{quote.serviceCost.toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {quote.travelCost > 0 ? (
                          `£${quote.travelCost.toFixed(2)}`
                        ) : (
                          <span className="text-green-600 font-medium">FREE</span>
                        )}
                      </td>
                      <td className="py-3 px-4 font-semibold text-gray-900">
                        £{quote.totalCost.toFixed(2)}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                          quote.status === BookingStatus.PENDING ? 'bg-yellow-100 text-yellow-800' :
                          quote.status === BookingStatus.CONFIRMED ? 'bg-green-100 text-green-800' :
                          quote.status === BookingStatus.IN_PROGRESS ? 'bg-blue-100 text-blue-800' :
                          quote.status === BookingStatus.COMPLETED ? 'bg-gray-100 text-gray-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {quote.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No quotes found</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">Total Quotes</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">{quotes.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">Confirmed</p>
            <p className="mt-2 text-2xl font-bold text-green-600">
              {quotes.filter((q) => q.status === BookingStatus.CONFIRMED || q.status === BookingStatus.COMPLETED).length}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {quotes.length > 0
                ? `${((quotes.filter((q) => q.status === BookingStatus.CONFIRMED || q.status === BookingStatus.COMPLETED).length / quotes.length) * 100).toFixed(1)}% confirmed`
                : '0% confirmed'}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">Pending</p>
            <p className="mt-2 text-2xl font-bold text-yellow-600">
              {quotes.filter((q) => q.status === BookingStatus.PENDING).length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">Potential Revenue</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">
              £
              {quotes
                .filter((q) => q.status === BookingStatus.PENDING)
                .reduce((sum, q) => sum + q.totalCost, 0)
                .toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mt-1">From unconverted quotes</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
