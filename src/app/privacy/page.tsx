/**
 * Privacy Policy Page
 *
 * GDPR-compliant privacy policy
 */

import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Method Clean',
  description: 'Method Clean privacy policy - how we collect, use, and protect your personal data.',
  robots: 'noindex, nofollow'
}

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-4 text-gray-600">Last updated: January 2025</p>

        <div className="prose prose-lg mt-8 max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8">1. Introduction</h2>
          <p className="text-gray-700">
            Method Clean ("we", "our", or "us") is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            2. Information We Collect
          </h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            2.1 Personal Information
          </h3>
          <p className="text-gray-700">We may collect personal information that you provide to us, including:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Postal address and postcode</li>
            <li>Service preferences and requirements</li>
            <li>Payment information (processed securely by third-party payment processors)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            2.2 Automatically Collected Information
          </h3>
          <p className="text-gray-700">When you visit our website, we may automatically collect:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>Device information</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">3. How We Use Your Information</h2>
          <p className="text-gray-700">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide and manage our cleaning services</li>
            <li>Process your bookings and payments</li>
            <li>Communicate with you about your service requests</li>
            <li>Send you appointment reminders and service updates</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website and services</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and ensure security</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Legal Basis for Processing (GDPR)</h2>
          <p className="text-gray-700">Under GDPR, we process your personal data based on:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Contract:</strong> Processing is necessary to fulfill our service agreement
              with you
            </li>
            <li>
              <strong>Consent:</strong> You have given explicit consent for specific processing
              activities
            </li>
            <li>
              <strong>Legitimate Interests:</strong> Processing is necessary for our legitimate
              business interests
            </li>
            <li>
              <strong>Legal Obligation:</strong> Processing is required to comply with legal
              requirements
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">5. Data Sharing and Disclosure</h2>
          <p className="text-gray-700">We may share your information with:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Service Providers:</strong> Third-party vendors who help us operate our
              business (e.g., payment processors, email services, scheduling tools)
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law, regulation, or legal
              process
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger, sale, or
              acquisition of our business
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            We do not sell, rent, or trade your personal information to third parties for marketing
            purposes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">6. Data Retention</h2>
          <p className="text-gray-700">
            We retain your personal information for as long as necessary to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide our services to you</li>
            <li>Comply with legal obligations (e.g., tax and accounting requirements)</li>
            <li>Resolve disputes and enforce our agreements</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Typically, we retain customer data for 7 years after the last service for accounting
            and legal compliance purposes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">7. Your Rights (GDPR)</h2>
          <p className="text-gray-700">Under GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Access:</strong> Request a copy of the personal data we hold about you
            </li>
            <li>
              <strong>Rectification:</strong> Request correction of inaccurate or incomplete data
            </li>
            <li>
              <strong>Erasure:</strong> Request deletion of your personal data ("right to be
              forgotten")
            </li>
            <li>
              <strong>Restriction:</strong> Request restriction of processing in certain
              circumstances
            </li>
            <li>
              <strong>Data Portability:</strong> Request transfer of your data to another service
              provider
            </li>
            <li>
              <strong>Objection:</strong> Object to processing based on legitimate interests or for
              direct marketing
            </li>
            <li>
              <strong>Withdraw Consent:</strong> Withdraw consent at any time where processing is
              based on consent
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            To exercise these rights, please contact us at{' '}
            <a href="mailto:privacy@methodclean.co.uk" className="text-primary-600 hover:underline">
              privacy@methodclean.co.uk
            </a>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">8. Cookies</h2>
          <p className="text-gray-700">
            We use cookies and similar tracking technologies to enhance your experience on our
            website. For detailed information, please see our{' '}
            <a href="/cookies" className="text-primary-600 hover:underline">
              Cookie Policy
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">9. Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational measures to protect your personal
            data against unauthorized access, alteration, disclosure, or destruction. These
            measures include:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>SSL/TLS encryption for data transmission</li>
            <li>Secure servers and databases</li>
            <li>Regular security assessments</li>
            <li>Employee training on data protection</li>
            <li>Access controls and authentication</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">10. Third-Party Links</h2>
          <p className="text-gray-700">
            Our website may contain links to third-party websites. We are not responsible for the
            privacy practices of these external sites. We encourage you to read their privacy
            policies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">11. Children's Privacy</h2>
          <p className="text-gray-700">
            Our services are not directed to individuals under 18 years of age. We do not knowingly
            collect personal information from children.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            12. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of any material
            changes by posting the new Privacy Policy on this page and updating the "Last updated"
            date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">13. Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about this Privacy Policy or our data practices, please contact
            us:
          </p>
          <div className="mt-4 rounded-lg bg-gray-50 p-6">
            <p className="text-gray-700">
              <strong>Method Clean</strong>
              <br />
              Email:{' '}
              <a
                href="mailto:privacy@methodclean.co.uk"
                className="text-primary-600 hover:underline"
              >
                privacy@methodclean.co.uk
              </a>
              <br />
              Phone:{' '}
              <a href="tel:01234567890" className="text-primary-600 hover:underline">
                0123 456 7890
              </a>
              <br />
              Address: Manchester, United Kingdom
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">14. Supervisory Authority</h2>
          <p className="text-gray-700">
            You have the right to lodge a complaint with the UK Information Commissioner's Office
            (ICO) if you believe we have not handled your data properly:
          </p>
          <div className="mt-4 rounded-lg bg-gray-50 p-6">
            <p className="text-gray-700">
              <strong>Information Commissioner's Office</strong>
              <br />
              Website:{' '}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                www.ico.org.uk
              </a>
              <br />
              Helpline: 0303 123 1113
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
