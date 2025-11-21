/**
 * FAQs Page
 *
 * Frequently Asked Questions with JSON-LD schema markup for SEO
 */

import React from 'react'
import Link from 'next/link'
import { Button, Card, CardContent } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs | Method Clean - Carpet & Upholstery Cleaning Manchester',
  description:
    'Frequently asked questions about carpet cleaning, upholstery cleaning, pricing, booking, and our services in Manchester. Get answers to all your cleaning questions.',
  keywords:
    'carpet cleaning FAQ, upholstery cleaning questions, cleaning cost, how long does carpet cleaning take, carpet drying time, eco-friendly cleaning',
  openGraph: {
    title: 'Frequently Asked Questions - Method Clean',
    description: 'Get answers to common questions about our carpet and upholstery cleaning services',
    type: 'website'
  }
}

interface FAQ {
  category: string
  questions: Array<{
    question: string
    answer: string
  }>
}

const faqs: FAQ[] = [
  {
    category: 'General Questions',
    questions: [
      {
        question: 'What areas do you cover?',
        answer:
          'We provide carpet and upholstery cleaning services throughout Manchester and the surrounding areas within a 100-mile radius. This includes Stockport, Bolton, Oldham, Rochdale, Salford, Wigan, and many other nearby towns. The first 20 miles from Manchester city center have no travel charge. Please use our instant quote tool to check if your area is covered.'
      },
      {
        question: 'Are you insured?',
        answer:
          'Yes, we are fully insured with comprehensive public liability insurance and professional indemnity insurance. This protects both our team and your property during our cleaning services.'
      },
      {
        question: 'Do you offer same-day service?',
        answer:
          'Yes! We offer same-day carpet and upholstery cleaning services subject to availability. Please contact us early in the day for same-day bookings. We also offer flexible scheduling including evening and weekend appointments.'
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept cash, all major credit and debit cards, and bank transfers. Payment is due upon completion of the service once you\'re satisfied with the results.'
      }
    ]
  },
  {
    category: 'Carpet Cleaning',
    questions: [
      {
        question: 'How long does carpet cleaning take?',
        answer:
          'Most carpet cleaning jobs take 1-3 hours depending on the size of the area and the condition of the carpets. A standard 3-bedroom house typically takes around 2-3 hours. We\'ll provide an estimated time when we provide your quote.'
      },
      {
        question: 'How long until my carpets are dry?',
        answer:
          'Our powerful truck-mounted extraction equipment removes most moisture during cleaning. With proper ventilation, carpets are typically dry within 2-4 hours. We also use high-velocity air movers to speed up drying time. Thicker carpets or humid conditions may extend drying time slightly.'
      },
      {
        question: 'Is carpet cleaning safe for pets and children?',
        answer:
          'Absolutely! We use eco-friendly, non-toxic, biodegradable cleaning solutions that are completely safe for children, pets, and anyone with allergies or sensitivities. Our products are pH-balanced and contain no harsh chemicals. Your family can return to the room as soon as the carpets are dry.'
      },
      {
        question: 'How often should I have my carpets professionally cleaned?',
        answer:
          'We recommend professional carpet cleaning every 6-12 months for most homes. High-traffic areas or homes with pets, children, or allergy sufferers may benefit from cleaning every 3-6 months. Regular cleaning extends carpet life, improves air quality, and maintains appearance.'
      },
      {
        question: 'Do you move furniture?',
        answer:
          'Yes, we include moving of light furniture (chairs, coffee tables, etc.) as part of our standard service at no extra charge. We ask that you remove fragile items, electronics, and very heavy furniture (like beds, wardrobes, and large bookcases) before we arrive. We can move heavier items for an additional fee if needed.'
      },
      {
        question: 'Can you remove all stains?',
        answer:
          'While we can remove most common stains including wine, coffee, pet stains, food, and dirt, some stains may be permanent depending on the type of stain, how long it\'s been there, and previous cleaning attempts. We offer a specialized stain removal service and will always do our best to achieve the best possible results. We\'ll advise you honestly about what to expect during our pre-inspection.'
      }
    ]
  },
  {
    category: 'Upholstery Cleaning',
    questions: [
      {
        question: 'What types of upholstery can you clean?',
        answer:
          'We can clean virtually all types of upholstery including fabric sofas, leather furniture, armchairs, dining chairs, ottomans, office chairs, and more. We work with all fabric types including cotton, linen, velvet, microfiber, silk, wool, and synthetic materials. We use fabric-specific cleaning methods to ensure the best and safest results.'
      },
      {
        question: 'How long does upholstery take to dry?',
        answer:
          'Drying time varies depending on the fabric type and cleaning method used. Most fabric upholstery dries within 3-6 hours with proper ventilation. Leather and items cleaned with our low-moisture methods may be ready to use within 1-2 hours or immediately after cleaning.'
      },
      {
        question: 'Will cleaning damage or fade my furniture?',
        answer:
          'No. We always test our cleaning solutions in an inconspicuous area first to ensure color-fastness and fabric compatibility. Our technicians are trained to identify fabric types and use appropriate cleaning methods. We use pH-balanced, color-safe products specifically designed for upholstery cleaning.'
      },
      {
        question: 'Can you clean leather furniture?',
        answer:
          'Yes! We offer specialized leather cleaning and conditioning services. Our process safely cleans leather, removes dirt and body oils, and applies a conditioning treatment that moisturizes and protects the leather, helping to prevent cracking and extend its life.'
      }
    ]
  },
  {
    category: 'Pricing & Booking',
    questions: [
      {
        question: 'How much does carpet cleaning cost?',
        answer:
          'Our carpet cleaning starts from £25 per room for standard-sized rooms (up to 15 sqm). Larger rooms range from £40-£55 depending on size. Stairs are £20 per flight. Additional services like stain removal treatment (+£15) and Scotchgard protection (+£10 per room) are available. Use our instant online quote tool for an accurate price based on your specific needs.'
      },
      {
        question: 'Is there a minimum charge?',
        answer:
          'Yes, we have a minimum charge of £60 for residential jobs to cover our time and travel costs. This minimum typically covers 2-3 standard rooms.'
      },
      {
        question: 'Do you charge for travel?',
        answer:
          'There is no travel charge for the first 20 miles from Manchester city center. For distances between 20-100 miles, we charge £1 per mile beyond the first 20 miles. Our instant quote tool automatically calculates this for you based on your postcode.'
      },
      {
        question: 'Are there any hidden fees?',
        answer:
          'No, we believe in transparent pricing. The quote you receive includes everything needed for a standard clean. The only additional charges would be for optional add-on services (like stain removal or Scotchgard protection) or if you request additional services during the appointment that weren\'t included in your original booking.'
      },
      {
        question: 'How do I book a service?',
        answer:
          'You can book online using our instant quote and booking form, which takes just a few minutes. Alternatively, you can call us at 07405 428259 or email us at info@methodclean.co.uk. We\'ll confirm your booking within 24 hours and send you all the details.'
      },
      {
        question: 'What is your cancellation policy?',
        answer:
          'You can cancel or reschedule your appointment free of charge up to 48 hours before your scheduled time. Cancellations with less than 48 hours notice may incur a £30 cancellation fee to cover our scheduling and travel costs.'
      }
    ]
  },
  {
    category: 'Service & Quality',
    questions: [
      {
        question: 'What cleaning method do you use?',
        answer:
          'We primarily use the hot water extraction method (also known as steam cleaning) for carpets, which is recommended by carpet manufacturers and the most effective deep cleaning method. For upholstery, we use fabric-appropriate methods including hot water extraction, low-moisture cleaning, or dry cleaning depending on the material. All our equipment is professional-grade and truck-mounted for maximum power.'
      },
      {
        question: 'Are your technicians trained and certified?',
        answer:
          'Yes! All our technicians are professionally trained and certified in carpet and upholstery cleaning. They undergo regular training to stay updated on the latest cleaning techniques, equipment, and products. They\'re also background-checked and uniformed for your peace of mind.'
      },
      {
        question: 'What is your satisfaction guarantee?',
        answer:
          'We offer a 100% satisfaction guarantee. If you\'re not completely happy with the results, we\'ll return within 7 days to re-clean the areas of concern at no additional cost. Your satisfaction is our priority, and we stand behind our work.'
      },
      {
        question: 'Do you use eco-friendly products?',
        answer:
          'Yes, we exclusively use eco-friendly, biodegradable, non-toxic cleaning solutions that are safe for your family, pets, and the environment. Our products are highly effective while being gentle on your carpets, upholstery, and the planet. They contain no harsh chemicals or toxic fumes.'
      },
      {
        question: 'What should I do to prepare for your visit?',
        answer:
          'Please vacuum your carpets beforehand if possible (not required but helpful). Remove small items, breakables, and valuables from the areas to be cleaned. Clear access paths to the areas. We recommend removing light furniture or we can do this for you. If you have pets, please secure them in a separate area during cleaning for their safety and ours.'
      }
    ]
  }
]

// Generate JSON-LD schema for FAQ page
const generateFAQSchema = () => {
  const allQuestions = faqs.flatMap((category) => category.questions)

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export default function FAQsPage() {
  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
      />

      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-lg leading-8 text-primary-100">
                Find answers to common questions about our carpet and upholstery cleaning services,
                pricing, booking, and more.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Content */}
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8">
          {/* Quick Links */}
          <div className="mb-12 rounded-lg bg-gray-50 p-6">
            <h2 className="text-lg font-semibold text-gray-900">Quick Navigation</h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {faqs.map((category) => (
                <a
                  key={category.category}
                  href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm text-primary-600 hover:text-primary-700 hover:underline"
                >
                  {category.category}
                </a>
              ))}
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-16">
            {faqs.map((category) => (
              <section
                key={category.category}
                id={category.category.toLowerCase().replace(/\s+/g, '-')}
              >
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-primary-600 pb-3">
                  {category.category}
                </h2>
                <div className="mt-8 space-y-6">
                  {category.questions.map((faq, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-start">
                          <svg
                            className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {faq.question}
                        </h3>
                        <p className="mt-4 text-gray-600 leading-relaxed pl-8">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Still Have Questions? */}
          <div className="mt-16">
            <Card className="border-primary-200 bg-gradient-to-br from-primary-50 to-success-50">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900">Still Have Questions?</h2>
                <p className="mt-4 text-gray-600">
                  Can't find the answer you're looking for? Our friendly team is here to help.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                  <Link href="/contact">
                    <Button size="lg" variant="default">
                      Contact Us
                    </Button>
                  </Link>
                  <a href="tel:07405428259">
                    <Button size="lg" variant="secondary">
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Call: 07405 428259
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Ready to Book?</h2>
            <p className="mt-4 text-gray-600">
              Get your instant quote and book your carpet or upholstery cleaning in just a few
              minutes.
            </p>
            <div className="mt-8">
              <Link href="/quote">
                <Button size="lg" variant="success">
                  Get Instant Quote
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
