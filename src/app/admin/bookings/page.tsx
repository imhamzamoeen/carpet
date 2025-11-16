/**
 * Admin Bookings Page
 *
 * View and manage all bookings
 */

import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { prisma } from '@/lib/db'

async function getBookings() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100
    })
    return bookings
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return []
  }
}

export default async function AdminBookingsPage() {
  const bookings = await getBookings()

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    cancelled: 'bg-red-100 text-red-800'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Bookings</h1>
          <p className="mt-2 text-gray-600">Manage all customer bookings</p>
        </div>
        <div className="text-sm text-gray-500">
          Total: {bookings.length} bookings
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          {bookings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Customer</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Service</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Preferred Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Total</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">
                        {new Date(booking.createdAt).toLocaleDateString('en-GB')}
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-gray-900">{booking.name}</p>
                          <p className="text-xs text-gray-500">{booking.email}</p>
                          <p className="text-xs text-gray-500">{booking.phone}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {booking.serviceType
                          .split('-')
                          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                          .join(' ')}
                        <p className="text-xs text-gray-500">{booking.postcode}</p>
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {new Date(booking.preferredDate).toLocaleDateString('en-GB')}
                        <p className="text-xs text-gray-500 capitalize">{booking.preferredTime}</p>
                      </td>
                      <td className="py-3 px-4 font-semibold text-gray-900">
                        £{booking.totalCost.toFixed(2)}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                            statusColors[booking.status] || statusColors.pending
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Link
                          href={`/admin/bookings/${booking.id}`}
                          className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No bookings found</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">Pending</p>
            <p className="mt-2 text-2xl font-bold text-yellow-600">
              {bookings.filter((b) => b.status === 'pending').length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">Confirmed</p>
            <p className="mt-2 text-2xl font-bold text-green-600">
              {bookings.filter((b) => b.status === 'confirmed').length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">Completed</p>
            <p className="mt-2 text-2xl font-bold text-blue-600">
              {bookings.filter((b) => b.status === 'completed').length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">Total Revenue</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">
              £
              {bookings
                .filter((b) => b.status === 'completed')
                .reduce((sum, b) => sum + b.totalCost, 0)
                .toFixed(2)}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
