/**
 * Terms and Conditions Page
 *
 * Terms of service for customers
 */

import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Method Clean',
  description: 'Method Clean terms and conditions for carpet and upholstery cleaning services.',
  robots: 'noindex, nofollow'
}

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
        <p className="mt-4 text-gray-600">Last updated: January 2025</p>

        <div className="prose prose-lg mt-8 max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8">1. Agreement to Terms</h2>
          <p className="text-gray-700">
            By using Method Clean's services or website, you agree to be bound by these Terms and
            Conditions. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Services</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">2.1 Service Description</h3>
          <p className="text-gray-700">
            Method Clean provides professional carpet, upholstery, and rug cleaning services for
            residential and commercial properties in Manchester and surrounding areas.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">2.2 Service Area</h3>
          <p className="text-gray-700">
            We service locations within 100 miles of Manchester city center. Travel charges may
            apply beyond 20 miles.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Booking and Quotes</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">3.1 Online Quotes</h3>
          <p className="text-gray-700">
            Instant quotes provided through our website are estimates based on the information you
            provide. Final pricing may vary based on actual conditions found during service.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">3.2 Booking Confirmation</h3>
          <p className="text-gray-700">
            A booking is confirmed once we send you a confirmation email or message. We reserve the
            right to refuse service at our discretion.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">3.3 Availability</h3>
          <p className="text-gray-700">
            Service times are subject to availability. We will make reasonable efforts to
            accommodate your preferred date and time.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Pricing and Payment</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">4.1 Pricing</h3>
          <p className="text-gray-700">
            All prices are in British Pounds (GBP) and include VAT where applicable. Prices are
            subject to change without notice but confirmed bookings will honor the quoted price.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">4.2 Payment Terms</h3>
          <p className="text-gray-700">
            Payment is due upon completion of service. We accept cash, credit/debit cards, and bank
            transfers. Payment must be made before our team leaves the premises.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">4.3 Additional Charges</h3>
          <p className="text-gray-700">
            Additional charges may apply for:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Services not included in the original quote</li>
            <li>Excessive dirt or stains requiring extra treatment</li>
            <li>Travel beyond 20 miles from Manchester</li>
            <li>Parking fees if applicable</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            5. Cancellation and Rescheduling
          </h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">5.1 Customer Cancellation</h3>
          <p className="text-gray-700">You may cancel or reschedule:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>More than 48 hours before:</strong> Free cancellation or rescheduling
            </li>
            <li>
              <strong>Less than 48 hours before:</strong> £30 cancellation fee applies
            </li>
            <li>
              <strong>No-show:</strong> Full service fee may be charged
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">5.2 Our Cancellation</h3>
          <p className="text-gray-700">
            We reserve the right to cancel or reschedule appointments due to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Severe weather conditions</li>
            <li>Equipment failure</li>
            <li>Staff illness or emergency</li>
            <li>Unsafe working conditions</li>
          </ul>
          <p className="text-gray-700 mt-4">
            We will provide reasonable notice and offer alternative dates.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">6. Customer Responsibilities</h2>
          <p className="text-gray-700">You agree to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide accurate information about the services required</li>
            <li>Ensure access to all areas to be cleaned</li>
            <li>Remove fragile items, valuables, and breakables from cleaning areas</li>
            <li>Secure pets in a separate area during service</li>
            <li>Inform us of any specific concerns or problem areas</li>
            <li>Test carpets and upholstery for colorfastness if concerned</li>
            <li>Provide adequate parking or cover parking costs</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">7. Our Commitments</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">7.1 Professional Service</h3>
          <p className="text-gray-700">We will:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Arrive within the agreed time window</li>
            <li>Use professional-grade equipment and eco-friendly products</li>
            <li>Respect your property and privacy</li>
            <li>Clean up any mess created during the service</li>
            <li>Provide honest assessments and recommendations</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            7.2 Satisfaction Guarantee
          </h3>
          <p className="text-gray-700">
            We guarantee your satisfaction. If you're not happy with the results, contact us within
            7 days and we'll return to re-clean the affected areas at no charge.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">8. Limitations and Disclaimers</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">8.1 Stain Removal</h3>
          <p className="text-gray-700">
            While we use professional techniques and products, we cannot guarantee complete removal
            of all stains. Some stains may be permanent depending on:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Type and age of stain</li>
            <li>Previous cleaning attempts</li>
            <li>Carpet or fabric material and condition</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">8.2 Pre-Existing Damage</h3>
          <p className="text-gray-700">
            We are not responsible for:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Pre-existing damage to carpets or upholstery</li>
            <li>Color bleeding from non-colorfast fabrics</li>
            <li>Shrinkage of natural fibers</li>
            <li>Reappearing stains from deep in carpet backing</li>
            <li>Damage from previous improper cleaning</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">8.3 Limitation of Liability</h3>
          <p className="text-gray-700">
            Our liability is limited to the cost of the service provided. We are not liable for:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Indirect, consequential, or incidental damages</li>
            <li>Loss of use or business interruption</li>
            <li>Damage to items not removed from cleaning areas</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">9. Insurance</h2>
          <p className="text-gray-700">
            We maintain comprehensive public liability insurance and professional indemnity
            insurance. Any claims must be reported to us within 48 hours of service completion.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">10. Complaints and Disputes</h2>
          <p className="text-gray-700">
            If you have a complaint:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Contact us within 7 days of service</li>
            <li>Provide details and photos if applicable</li>
            <li>Allow us the opportunity to inspect and remedy the issue</li>
          </ul>
          <p className="text-gray-700 mt-4">
            We will make reasonable efforts to resolve all complaints fairly and promptly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">11. Intellectual Property</h2>
          <p className="text-gray-700">
            All content on our website, including text, graphics, logos, and images, is the property
            of Method Clean and protected by copyright law. You may not reproduce, distribute, or
            use this content without our written permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">12. Privacy</h2>
          <p className="text-gray-700">
            Your use of our services is also governed by our{' '}
            <a href="/privacy" className="text-primary-600 hover:underline">
              Privacy Policy
            </a>
            . Please review it to understand how we collect and use your information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            13. Changes to These Terms
          </h2>
          <p className="text-gray-700">
            We reserve the right to update these Terms and Conditions at any time. Changes will be
            posted on this page with an updated "Last updated" date. Continued use of our services
            after changes constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">14. Governing Law</h2>
          <p className="text-gray-700">
            These Terms and Conditions are governed by the laws of England and Wales. Any disputes
            will be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">15. Contact Information</h2>
          <p className="text-gray-700">
            For questions about these Terms and Conditions, please contact us:
          </p>
          <div className="mt-4 rounded-lg bg-gray-50 p-6">
            <p className="text-gray-700">
              <strong>Method Clean</strong>
              <br />
              Email:{' '}
              <a
                href="mailto:info@methodclean.co.uk"
                className="text-primary-600 hover:underline"
              >
                info@methodclean.co.uk
              </a>
              <br />
              Phone:{' '}
              <a href="tel:07405428259" className="text-primary-600 hover:underline">
                07405 428259
              </a>
              <br />
              Address: Manchester, United Kingdom
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
