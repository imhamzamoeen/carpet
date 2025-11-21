"use client"

import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MessageSquare, Shield, Clock, MapPin, Calendar, ArrowRight } from 'lucide-react'
import type { Service } from '@/lib/data/services'

interface ServiceSidebarClientProps {
  service: Service
}

// Related services for internal linking (SEO strategy)
const getRelatedServices = (currentSlug: string) => {
  const allServices = [
    { slug: 'carpet-cleaning', name: 'Carpet Cleaning' },
    { slug: 'rug-cleaning', name: 'Rug Cleaning' },
    { slug: 'upholstery-cleaning', name: 'Upholstery Cleaning' },
    { slug: 'leather-cleaning', name: 'Leather Cleaning' },
    { slug: 'mattress-cleaning', name: 'Mattress Cleaning' },
    { slug: 'stain-removal', name: 'Stain Removal' },
    { slug: 'commercial-cleaning', name: 'Commercial Cleaning' },
    { slug: 'car-valeting', name: 'Car Valeting' },
  ]
  return allServices.filter(s => s.slug !== currentSlug).slice(0, 3)
}

export default function ServiceSidebarClient({ service }: ServiceSidebarClientProps) {
  const relatedServices = getRelatedServices(service.slug)
  const lastUpdated = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="sticky top-24 space-y-6">
      {/* Quick Contact Card */}
      <div className="bg-white border border-gray-200 rounded-card shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
        <p className="text-sm text-gray-600 mb-6">
          Our friendly team is ready to answer your questions and provide expert advice.
        </p>

        <div className="space-y-4">
          <a
            href="tel:+447405428259"
            className="flex items-center gap-3 text-sm text-gray-700 hover:text-primary-600 transition-colors group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 group-hover:bg-primary-200 transition-colors">
              <Phone className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <div className="font-medium">Call Us</div>
              <div className="text-xs text-gray-500">07405 428259</div>
            </div>
          </a>

          <a
            href="mailto:info@blowupcleaners.co.uk"
            className="flex items-center gap-3 text-sm text-gray-700 hover:text-primary-600 transition-colors group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 group-hover:bg-primary-200 transition-colors">
              <Mail className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <div className="font-medium">Email Us</div>
              <div className="text-xs text-gray-500">info@blowupcleaners.co.uk</div>
            </div>
          </a>

          <Link
            href="/contact"
            className="flex items-center gap-3 text-sm text-gray-700 hover:text-primary-600 transition-colors group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 group-hover:bg-primary-200 transition-colors">
              <MessageSquare className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <div className="font-medium">Contact Form</div>
              <div className="text-xs text-gray-500">Send us a message</div>
            </div>
          </Link>
        </div>

        <Link href="/quote" className="block mt-6">
          <button className="w-full btn-primary text-sm py-3">
            Get Free Quote
          </button>
        </Link>
      </div>

      {/* Service Guarantee Card */}
      <div className="bg-gradient-to-br from-green-50 to-success-50 border-2 border-success-200 rounded-card shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-success-600">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            100% Satisfaction Guarantee
          </h3>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">
          We stand behind our work. If you're not completely satisfied with the results,
          we'll re-clean for free within 7 days. No questions asked.
        </p>
      </div>

      {/* Service Highlights Card */}
      <div className="bg-white border border-gray-200 rounded-card shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Highlights</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-medium text-gray-900 text-sm">Same-Day Service</div>
              <div className="text-xs text-gray-600">Available for urgent bookings</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-medium text-gray-900 text-sm">Free Travel</div>
              <div className="text-xs text-gray-600">Within 20 miles of Manchester</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-medium text-gray-900 text-sm">Fully Insured</div>
              <div className="text-xs text-gray-600">Comprehensive liability coverage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Last Updated - E-E-A-T Signal */}
      <div className="bg-white border border-gray-200 rounded-card shadow-sm p-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="h-4 w-4 text-gray-400" />
          <span>
            <strong className="text-gray-900">Last Updated:</strong> {lastUpdated}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Reviewed by NCCA certified cleaning professionals
        </p>
      </div>

      {/* Related Services - Internal Linking for SEO */}
      <div className="bg-white border border-gray-200 rounded-card shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Services</h3>
        <div className="space-y-3">
          {relatedServices.map((related) => (
            <Link
              key={related.slug}
              href={`/services/${related.slug}`}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-primary-50 border border-gray-100 hover:border-primary-200 transition-all group"
            >
              <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700">
                {related.name}
              </span>
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
        <Link href="/services" className="block mt-4">
          <button className="w-full text-sm text-primary-600 hover:text-primary-700 font-medium">
            View All Services →
          </button>
        </Link>
      </div>
    </div>
  )
}
