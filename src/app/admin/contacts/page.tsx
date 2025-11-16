/**
 * Admin Contact Messages Page
 *
 * View and manage all contact form submissions
 */

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { prisma } from '@/lib/db'

async function getContactMessages() {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100
    })
    return messages
  } catch (error) {
    console.error('Error fetching contact messages:', error)
    return []
  }
}

export default async function AdminContactsPage() {
  const messages = await getContactMessages()

  const subjectColors: Record<string, string> = {
    general: 'bg-blue-100 text-blue-800',
    quote: 'bg-green-100 text-green-800',
    booking: 'bg-purple-100 text-purple-800',
    complaint: 'bg-red-100 text-red-800',
    feedback: 'bg-yellow-100 text-yellow-800'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contact Messages</h1>
          <p className="mt-2 text-gray-600">Manage all customer inquiries</p>
        </div>
        <div className="text-sm text-gray-500">
          Total: {messages.length} messages
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Messages</CardTitle>
        </CardHeader>
        <CardContent>
          {messages.length > 0 ? (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{message.name}</h3>
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                            subjectColors[message.subject] || subjectColors.general
                          }`}
                        >
                          {message.subject.charAt(0).toUpperCase() + message.subject.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <svg
                            className="h-4 w-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <a
                            href={`mailto:${message.email}`}
                            className="hover:text-primary-600"
                          >
                            {message.email}
                          </a>
                        </div>
                        {message.phone && (
                          <div className="flex items-center gap-1">
                            <svg
                              className="h-4 w-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            <a href={`tel:${message.phone}`} className="hover:text-primary-600">
                              {message.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <p>{new Date(message.createdAt).toLocaleDateString('en-GB')}</p>
                      <p className="text-xs">
                        {new Date(message.createdAt).toLocaleTimeString('en-GB', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <p className="text-gray-700 whitespace-pre-wrap">{message.message}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No contact messages found</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-5">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">Total Messages</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">{messages.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">General</p>
            <p className="mt-2 text-2xl font-bold text-blue-600">
              {messages.filter((m) => m.subject === 'general').length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">Quote Requests</p>
            <p className="mt-2 text-2xl font-bold text-green-600">
              {messages.filter((m) => m.subject === 'quote').length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">Bookings</p>
            <p className="mt-2 text-2xl font-bold text-purple-600">
              {messages.filter((m) => m.subject === 'booking').length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">Complaints</p>
            <p className="mt-2 text-2xl font-bold text-red-600">
              {messages.filter((m) => m.subject === 'complaint').length}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
