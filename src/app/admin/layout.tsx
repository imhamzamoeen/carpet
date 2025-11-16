/**
 * Admin Layout
 *
 * Layout wrapper for admin pages with navigation
 */

import React from 'react'
import Link from 'next/link'
import { requireAdminAuth } from '@/lib/auth/admin'
import { logoutAdminAction } from '@/lib/actions/admin'

export default async function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  // Check authentication (this will redirect to login if not authenticated)
  await requireAdminAuth()

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                Method Clean Admin
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                target="_blank"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                View Site
              </Link>
              <form action={logoutAdminAction}>
                <button
                  type="submit"
                  className="text-sm font-medium text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            <Link
              href="/admin"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/bookings"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Bookings
            </Link>
            <Link
              href="/admin/quotes"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Quotes
            </Link>
            <Link
              href="/admin/contacts"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Contact Messages
            </Link>

            <div className="pt-4 border-t border-gray-200 mt-4">
              <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Management
              </p>
              <Link
                href="/admin/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Settings
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
