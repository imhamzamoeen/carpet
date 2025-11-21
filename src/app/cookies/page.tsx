/**
 * Cookie Policy Page
 *
 * Cookie usage and management information
 */

import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Method Clean',
  description: 'Information about how Method Clean uses cookies and similar technologies.',
  robots: 'noindex, nofollow'
}

export default function CookiesPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Cookie Policy</h1>
        <p className="mt-4 text-gray-600">Last updated: January 2025</p>

        <div className="prose prose-lg mt-8 max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8">1. What Are Cookies?</h2>
          <p className="text-gray-700">
            Cookies are small text files that are placed on your computer or mobile device when you
            visit a website. They are widely used to make websites work more efficiently and provide
            information to website owners.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">2. How We Use Cookies</h2>
          <p className="text-gray-700">
            Method Clean uses cookies and similar technologies to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Ensure our website functions properly</li>
            <li>Remember your preferences and settings</li>
            <li>Understand how you use our website</li>
            <li>Improve your experience on our site</li>
            <li>Provide personalized content and services</li>
            <li>Analyze website traffic and performance</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Types of Cookies We Use</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            3.1 Strictly Necessary Cookies
          </h3>
          <p className="text-gray-700">
            These cookies are essential for our website to function. They enable basic functions
            like page navigation, access to secure areas, and form submission. The website cannot
            function properly without these cookies.
          </p>
          <div className="mt-4 rounded-lg bg-gray-50 p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left pb-2">Cookie Name</th>
                  <th className="text-left pb-2">Purpose</th>
                  <th className="text-left pb-2">Duration</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-2">session_id</td>
                  <td className="py-2">Maintains user session</td>
                  <td className="py-2">Session</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">csrf_token</td>
                  <td className="py-2">Security protection</td>
                  <td className="py-2">Session</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            3.2 Performance Cookies
          </h3>
          <p className="text-gray-700">
            These cookies collect information about how visitors use our website, such as which
            pages are visited most often. This data helps us improve how our website works.
          </p>
          <div className="mt-4 rounded-lg bg-gray-50 p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left pb-2">Cookie Name</th>
                  <th className="text-left pb-2">Purpose</th>
                  <th className="text-left pb-2">Duration</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-2">_ga</td>
                  <td className="py-2">Google Analytics - visitor tracking</td>
                  <td className="py-2">2 years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">_gid</td>
                  <td className="py-2">Google Analytics - session tracking</td>
                  <td className="py-2">24 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            3.3 Functionality Cookies
          </h3>
          <p className="text-gray-700">
            These cookies allow our website to remember choices you make (such as your language or
            region) and provide enhanced, personalized features.
          </p>
          <div className="mt-4 rounded-lg bg-gray-50 p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left pb-2">Cookie Name</th>
                  <th className="text-left pb-2">Purpose</th>
                  <th className="text-left pb-2">Duration</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-2">preferences</td>
                  <td className="py-2">Stores user preferences</td>
                  <td className="py-2">1 year</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">cookie_consent</td>
                  <td className="py-2">Records cookie consent choice</td>
                  <td className="py-2">1 year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            3.4 Marketing/Advertising Cookies
          </h3>
          <p className="text-gray-700">
            These cookies track your browsing habits to enable us to show you advertising that is
            more relevant to you and your interests. They also limit the number of times you see an
            advertisement and help measure the effectiveness of advertising campaigns.
          </p>
          <p className="text-gray-700 mt-4">
            <strong>We currently do not use marketing/advertising cookies on our website.</strong>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Third-Party Cookies</h2>
          <p className="text-gray-700">
            Some cookies are placed by third-party services that appear on our pages. We use the
            following third-party services:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">4.1 Google Analytics</h3>
          <p className="text-gray-700">
            We use Google Analytics to understand how visitors use our website. Google Analytics
            uses cookies to collect information such as how often users visit our site, what pages
            they visit, and what other sites they used prior to coming to our site.
          </p>
          <p className="text-gray-700 mt-4">
            For more information about Google Analytics cookies, see the{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              Google Privacy Policy
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">4.2 Google Maps</h3>
          <p className="text-gray-700">
            We use Google Maps for distance calculation and service area verification. Google Maps
            may set cookies when you interact with map features on our site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            5. How to Control Cookies
          </h2>
          <p className="text-gray-700">
            You have the right to decide whether to accept or reject cookies. You can exercise your
            cookie preferences in several ways:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            5.1 Cookie Consent Tool
          </h3>
          <p className="text-gray-700">
            When you first visit our website, you can choose to accept or reject non-essential
            cookies through our cookie consent banner.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">5.2 Browser Settings</h3>
          <p className="text-gray-700">
            Most web browsers allow you to control cookies through their settings. However, if you
            block all cookies (including essential cookies), you may not be able to access all or
            parts of our website.
          </p>
          <p className="text-gray-700 mt-4">
            Here's how to manage cookies in popular browsers:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            5.3 Google Analytics Opt-Out
          </h3>
          <p className="text-gray-700">
            You can opt out of Google Analytics tracking by installing the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">6. Do Not Track Signals</h2>
          <p className="text-gray-700">
            Some browsers incorporate a "Do Not Track" (DNT) feature. Because there is not yet a
            common understanding of how to interpret DNT signals, our website does not currently
            respond to browser DNT signals.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">7. Updates to This Policy</h2>
          <p className="text-gray-700">
            We may update this Cookie Policy from time to time to reflect changes in technology,
            legislation, or our business operations. Any changes will be posted on this page with an
            updated "Last updated" date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">8. More Information</h2>
          <p className="text-gray-700">
            For more information about how we use your personal data, please see our{' '}
            <a href="/privacy" className="text-primary-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">9. Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about our use of cookies, please contact us:
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
