import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle, Shield, Award, Star, ArrowRight, Users, Home, Zap,
  Phone, Clock, TrendingUp, Heart, Lightbulb, Calculator,
  DollarSign, List, Eye, Target
} from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

// Schema components
import { FAQSchema } from '@/components/structured-data/FAQSchema'
import { BreadcrumbSchema } from '@/components/structured-data/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/structured-data/LocalBusinessSchema'

// Client components
import ClientWrapper from './client-wrapper'
import SidebarClient from './sidebar-client'

// Metadata
export const metadata: Metadata = {
  title: 'How Much Does Professional Carpet Cleaning Cost in the UK? | Blowup Cleaners Manchester',
  description: 'Comprehensive UK carpet cleaning price guide for 2025. Get instant quotes, compare room-based vs area pricing, and discover what affects costs. Free quote in 60 seconds.',
  keywords: [
    'professional carpet cleaning cost UK',
    'carpet cleaning prices Manchester',
    'how much carpet cleaning',
    'carpet cleaning rates UK',
    'average cost carpet cleaning',
    'carpet cleaning price per room',
    'Blowup Cleaners carpet cleaning'
  ],

  alternates: {
    canonical: 'https://blowupcleaners.co.uk/blog/professional-carpet-cleaning-cost-uk',
    languages: {
      'en-GB': 'https://blowupcleaners.co.uk/blog/professional-carpet-cleaning-cost-uk',
    }
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': 160
    }
  },

  openGraph: {
    title: 'How Much Does Professional Carpet Cleaning Cost in the UK?',
    description: 'Complete 2025 UK carpet cleaning price guide. Instant quotes, transparent pricing, same-day service available in Manchester.',
    url: 'https://blowupcleaners.co.uk/blog/professional-carpet-cleaning-cost-uk',
    siteName: 'Blowup Cleaners',
    locale: 'en_GB',
    type: 'article',
    images: [{
      url: '/images/blog/carpet-cleaning-cost-uk-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Professional carpet cleaner providing cost estimate to Manchester homeowner'
    }]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does Professional Carpet Cleaning Cost in the UK?',
    description: 'Complete 2025 UK carpet cleaning price guide. Get instant quotes in Manchester.',
    images: '/images/blog/carpet-cleaning-cost-uk-hero.jpg'
  }
}

export default function BlogPage() {
  // FAQ data for schema
  const faqData = [
    {
      question: "How much does it cost to clean a carpet in the UK?",
      answer: "Professional carpet cleaning in the UK typically costs £25-£35 per room or £3-£5 per square metre. A standard 3-bedroom house usually costs £75-£120 for whole-house cleaning. Prices vary based on carpet condition, location, and cleaning method used."
    },
    {
      question: "Is professional carpet cleaning worth the cost?",
      answer: "Yes, professional carpet cleaning is worth it. It extends carpet life by 3-5 years, removes deep allergens and bacteria, improves indoor air quality, and saves money long-term by preventing premature carpet replacement. Professional equipment achieves results impossible with domestic cleaners."
    },
    {
      question: "How much does carpet cleaning cost per room in Manchester?",
      answer: "In Manchester, carpet cleaning costs £25-£35 per standard room (up to 15m²). Living rooms cost £30-£40, bedrooms £25-£30, and stairs £20-£35. Multi-room discounts often reduce per-room costs by 10-20%."
    },
    {
      question: "What factors affect carpet cleaning prices?",
      answer: "Key factors include: carpet size (larger areas cost more), carpet condition (heavy staining costs extra), cleaning method (hot water extraction vs dry cleaning), location (urban areas may charge more), property type (commercial costs more than residential), and additional services like stain protection or deodorizing."
    },
    {
      question: "How often should carpets be professionally cleaned?",
      answer: "Residential carpets should be professionally cleaned every 12-18 months. High-traffic areas need cleaning every 6-12 months. Homes with pets or allergies benefit from cleaning every 6 months. Commercial carpets require professional cleaning every 3-6 months."
    },
    {
      question: "Do carpet cleaners charge by room or square metre?",
      answer: "Both pricing models exist in the UK. Room-based pricing (£25-£35 per room) is simpler for standard rooms. Square metre pricing (£3-£5/m²) is fairer for large or unusually shaped rooms. Many companies offer both options."
    },
    {
      question: "Are there extra charges for stain removal?",
      answer: "Heavy stain removal typically costs £10-£25 extra per room. Standard cleaning includes light stain treatment. Stubborn stains (wine, pet urine, ink) require specialized treatments and incur additional charges. Most companies quote stain removal costs upfront."
    },
    {
      question: "How much does it cost to clean stairs and landings?",
      answer: "Stairs typically cost £20-£35 depending on carpet width and number of steps. Landings are usually included or charged as half a room (£12-£18). Spiral or narrow stairs may cost slightly more due to difficult access."
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Manchester City Centre",
      service: "3-Bedroom Carpet Clean",
      rating: 5,
      quote: "Absolutely brilliant service! The team arrived on time, were professional, and my carpets look brand new. The pricing was exactly as quoted - no hidden fees. The stains I thought were permanent are completely gone.",
      gradient: "from-pink-400 to-rose-500",
      initial: "S"
    },
    {
      name: "Michael Brown",
      location: "Salford",
      service: "Office Carpet Deep Clean",
      rating: 5,
      quote: "We use Blowup Cleaners for all our office cleaning. Their pricing is competitive and transparent. They work around our schedule and the results are always exceptional. Great value for money.",
      gradient: "from-blue-400 to-indigo-500",
      initial: "M"
    }
  ]

  // Key takeaways
  const keyTakeaways = [
    "Standard room cleaning costs £25-£35 in the UK",
    "Whole house (3-bed) typically costs £75-£120",
    "Square metre pricing ranges from £3-£5/m²",
    "Stain protection adds £5-£15 per room",
    "Commercial cleaning costs 20-30% more than residential",
    "Regular cleaning saves money long-term on carpet replacement"
  ]

  return (
    <ClientWrapper blogTitle="How Much Does Professional Carpet Cleaning Cost in the UK?">
      {/* Schema Markup */}
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://blowupcleaners.co.uk" },
          { name: "Blog", url: "https://blowupcleaners.co.uk/blog" },
          { name: "Carpet Cleaning Costs UK", url: "https://blowupcleaners.co.uk/blog/professional-carpet-cleaning-cost-uk" }
        ]}
      />
      <LocalBusinessSchema />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="flex items-center space-x-2 text-sm text-text-secondary mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-primary-600">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-text-primary font-medium">Carpet Cleaning Costs UK</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-blue/5">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
          {/* Beam Effects */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-500/50 to-transparent"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent-blue/50 to-transparent"></div>
          </div>
        </div>

        {/* GRID LAYOUT: LEFT TEXT + RIGHT IMAGE */}
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Content */}
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary-100 text-primary-700 border-primary-200">
                  <Clock className="h-3 w-3 mr-1" />
                  12 min read
                </Badge>
                <Badge className="bg-accent-green/10 text-green-700 border-green-200">
                  <Eye className="h-3 w-3 mr-1" />
                  Price Guide 2025
                </Badge>
                <Badge className="bg-accent-yellow/10 text-yellow-700 border-yellow-200">
                  <Target className="h-3 w-3 mr-1" />
                  Expert Analysis
                </Badge>
              </div>

              {/* H1 */}
              <h1 className="text-h1 text-text-primary leading-tight">
                How Much Does Professional Carpet Cleaning Cost in the UK?
              </h1>

              {/* Introduction */}
              <p className="text-lg text-text-secondary leading-relaxed">
                As Manchester's trusted carpet cleaning specialist with over 15 years of experience, I've helped over 5,000 satisfied customers achieve spotless carpets. Here's everything you need to know about UK carpet cleaning costs in 2025.
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <Image
                  src="/images/team/expert-placeholder.jpg"
                  alt="John Smith, Carpet Cleaning Expert"
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-text-primary">John Smith</p>
                  <p className="text-sm text-text-secondary">Carpet Cleaning Expert • 15+ years • 5,000+ customers</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Hero Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-accent-blue rounded-2xl blur-2xl opacity-20"></div>
              <Image
                src="/images/blog/carpet-cleaning-cost-hero.jpg"
                alt="Professional carpet cleaning cost estimate consultation in Manchester home"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-card-hover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-accent-blue to-primary-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <Card className="relative bg-white border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-primary-600" />
                  </div>
                  <CardTitle className="text-2xl text-text-primary">Key Takeaways</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {keyTakeaways.map((takeaway, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-text-secondary">{takeaway}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content (75%) */}
            <article className="lg:col-span-3 space-y-12">

              {/* Section 1: Quick Answer */}
              <div id="quick-answer" className="prose max-w-none">
                <h2 className="text-h2 text-text-primary mb-6">Quick Answer: UK Carpet Cleaning Costs</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  <strong>YES</strong>, professional carpet cleaning in the UK typically costs <strong>£25-£35 per room</strong> or <strong>£3-£5 per square metre</strong>. A standard 3-bedroom house costs <strong>£75-£120</strong> for complete professional cleaning.
                </p>

                <Card className="bg-primary-50 border-primary-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-4">2025 UK Average Pricing</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Single Room (Standard)</span>
                        <span className="font-semibold text-primary-600">£25-£35</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Living Room (Large)</span>
                        <span className="font-semibold text-primary-600">£30-£40</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">3-Bedroom House (Whole)</span>
                        <span className="font-semibold text-primary-600">£75-£120</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Per Square Metre</span>
                        <span className="font-semibold text-primary-600">£3-£5/m²</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 2: Room-Based Pricing */}
              <div id="room-based-pricing" className="prose max-w-none">
                <h2 className="text-h2 text-text-primary mb-6">Room-Based Pricing Breakdown</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Room-based pricing is the most common charging method in the UK. Most professional companies define a "standard room" as up to 15 square metres (approx. 12ft x 12ft). Here's what you can expect to pay across the UK:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Bedrooms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-text-secondary">Single Bedroom</span>
                          <span className="font-semibold">£20-£28</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-text-secondary">Double Bedroom</span>
                          <span className="font-semibold">£25-£30</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-text-secondary">Master Bedroom</span>
                          <span className="font-semibold">£30-£38</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Living Spaces</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-text-secondary">Lounge/Living Room</span>
                          <span className="font-semibold">£30-£40</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-text-secondary">Dining Room</span>
                          <span className="font-semibold">£25-£35</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-text-secondary">Hallway/Landing</span>
                          <span className="font-semibold">£15-£25</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-text-secondary leading-relaxed">
                  <strong>Pro Tip:</strong> Many companies offer multi-room discounts. Cleaning 3+ rooms often reduces the per-room cost by 10-20%. Always ask about package deals when getting quotes.
                </p>
              </div>

              {/* Section 3: Square Metre Pricing */}
              <div id="area-based-pricing" className="prose max-w-none">
                <h2 className="text-h2 text-text-primary mb-6">Square Metre Pricing Explained</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Square metre pricing (£3-£5/m²) is fairer for unusually large or small rooms. This method is particularly useful for open-plan spaces, commercial properties, or homes with non-standard room sizes.
                </p>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Calculate Your Carpet Cleaning Cost</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-primary-50 p-4 rounded-lg">
                        <p className="text-sm text-text-secondary mb-2">Example Calculation:</p>
                        <p className="text-text-primary">
                          <strong>Room Size:</strong> 20m² (approx. 4.5m x 4.5m)<br />
                          <strong>Rate:</strong> £4/m²<br />
                          <strong>Total Cost:</strong> 20m² × £4 = <span className="text-primary-600 font-bold">£80</span>
                        </p>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-accent-blue/5 rounded-lg">
                        <Calculator className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-text-primary font-semibold mb-1">Get Instant Quote</p>
                          <p className="text-sm text-text-secondary mb-3">
                            Use our online calculator to get an accurate quote for your exact room dimensions in under 60 seconds.
                          </p>
                          <Link href="/quote">
                            <Button size="sm" className="bg-primary-600 hover:bg-primary-700">
                              Calculate My Cost <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-text-secondary leading-relaxed">
                  <strong>When to Choose Square Metre Pricing:</strong> Opt for this method if you have large open-plan living areas, loft conversions, or commercial spaces where room-based pricing doesn't accurately reflect the work involved.
                </p>
              </div>

              {/* Section 4: Whole House Pricing */}
              <div id="whole-house-pricing" className="prose max-w-none">
                <h2 className="text-h2 text-text-primary mb-6">Whole House Carpet Cleaning Costs</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Whole-house packages offer the best value for money. Here's what you can expect to pay based on property size across the UK:
                </p>

                <div className="space-y-4 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Home className="h-6 w-6 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-text-primary mb-2">1-2 Bedroom Property</h3>
                          <p className="text-text-secondary mb-3">Typical flat or small house with lounge, 1-2 bedrooms, hallway</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-primary-600">£50-£80</span>
                            <span className="text-sm text-text-secondary">complete package</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Home className="h-6 w-6 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-text-primary mb-2">3 Bedroom House</h3>
                          <p className="text-text-secondary mb-3">Standard family home with lounge, dining, 3 bedrooms, stairs, landing</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-primary-600">£75-£120</span>
                            <span className="text-sm text-text-secondary">complete package</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Home className="h-6 w-6 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-text-primary mb-2">4+ Bedroom House</h3>
                          <p className="text-text-secondary mb-3">Large family home with multiple living areas, 4+ bedrooms, stairs</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-primary-600">£120-£200</span>
                            <span className="text-sm text-text-secondary">complete package</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Section 5: Factors Affecting Cost */}
              <div id="cost-factors" className="prose max-w-none">
                <h2 className="text-h2 text-text-primary mb-6">What Affects Carpet Cleaning Prices?</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Understanding what influences pricing helps you get accurate quotes and avoid surprises. Here are the key factors professional cleaners consider:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-primary-600" />
                        </div>
                        <CardTitle className="text-lg">Carpet Condition</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Light soiling: Standard pricing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Heavy stains: +£10-£25 per room</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Pet odours: +£15-£30 treatment</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <Zap className="h-5 w-5 text-primary-600" />
                        </div>
                        <CardTitle className="text-lg">Cleaning Method</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Hot water extraction: Most common</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Dry cleaning: 10-20% premium</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Encapsulation: Budget option</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <Home className="h-5 w-5 text-primary-600" />
                        </div>
                        <CardTitle className="text-lg">Location</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>London/Southeast: 15-25% higher</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Manchester/Birmingham: Average</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Rural areas: May include travel fee</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <Shield className="h-5 w-5 text-primary-600" />
                        </div>
                        <CardTitle className="text-lg">Additional Services</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Stain protection: +£5-£15/room</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Deodorizing: +£8-£20/room</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Furniture moving: Usually free</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Section 6: Stairs and Landing */}
              <div id="stairs-pricing" className="prose max-w-none">
                <h2 className="text-h2 text-text-primary mb-6">Stairs and Landing Cleaning Costs</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Stairs require special attention due to awkward angles and higher wear. Most professionals charge separately for staircases:
                </p>

                <div className="bg-gradient-to-r from-primary-50 to-accent-blue/5 p-6 rounded-xl mb-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary-600 mb-2">£20-£35</p>
                      <p className="text-sm text-text-secondary">Standard Staircase<br />(13-15 steps)</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary-600 mb-2">£12-£18</p>
                      <p className="text-sm text-text-secondary">Landing<br />(Included or half room)</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary-600 mb-2">£40-£60</p>
                      <p className="text-sm text-text-secondary">Multiple Flights<br />(2+ staircases)</p>
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed">
                  <strong>Note:</strong> Narrow or spiral stairs may cost slightly more due to difficult access. Some companies include landing carpet in their staircase pricing, while others charge separately.
                </p>
              </div>

              {/* Section 7: Commercial vs Residential */}
              <div id="commercial-pricing" className="prose max-w-none">
                <h2 className="text-h2 text-text-primary mb-6">Commercial vs Residential Pricing</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Commercial carpet cleaning typically costs 20-30% more than residential due to heavier soiling, larger areas, and often needing to work outside business hours.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card className="border-2 border-primary-200">
                    <CardHeader className="bg-primary-50">
                      <CardTitle className="text-primary-700">Residential Pricing</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-text-secondary">Per Room</span>
                          <span className="font-bold text-primary-600">£25-£35</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-text-secondary">Per m²</span>
                          <span className="font-bold text-primary-600">£3-£5</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-text-secondary">Timing</span>
                          <span className="font-semibold">Flexible</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-accent-blue/30">
                    <CardHeader className="bg-accent-blue/5">
                      <CardTitle className="text-accent-blue">Commercial Pricing</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-text-secondary">Per m²</span>
                          <span className="font-bold text-accent-blue">£4-£7</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-text-secondary">Office (Small)</span>
                          <span className="font-bold text-accent-blue">£150-£300</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-text-secondary">Timing</span>
                          <span className="font-semibold">Evening/Weekend</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Section 8: Hidden Costs to Watch For */}
              <div id="hidden-costs" className="prose max-w-none">
                <h2 className="text-h2 text-text-primary mb-6">Hidden Costs to Watch For</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Reputable companies provide transparent quotes, but some less scrupulous operators add unexpected charges. Here's what to watch for:
                </p>

                <Card className="bg-red-50 border-red-200 mb-6">
                  <CardHeader>
                    <CardTitle className="text-red-700 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Common Hidden Charges
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 font-bold mt-1">×</span>
                        <div>
                          <p className="font-semibold text-text-primary">Call-Out Fees</p>
                          <p className="text-sm text-text-secondary">Some charge £20-£40 just for visiting. Always confirm if quotes include visit costs.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 font-bold mt-1">×</span>
                        <div>
                          <p className="font-semibold text-text-primary">Parking Charges</p>
                          <p className="text-sm text-text-secondary">Urban areas may add parking costs. Ask if this applies to your location.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 font-bold mt-1">×</span>
                        <div>
                          <p className="font-semibold text-text-primary">Minimum Charges</p>
                          <p className="text-sm text-text-secondary">Some require minimum £60-£100 spend. Not ideal for single room cleans.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 font-bold mt-1">×</span>
                        <div>
                          <p className="font-semibold text-text-primary">Weekend/Evening Surcharges</p>
                          <p className="text-sm text-text-secondary">May add 20-30% for out-of-hours service. Confirm rates for your preferred time.</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-700 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      What Blowup Cleaners Includes (No Hidden Fees)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-text-secondary">Free quotes with no obligation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-text-secondary">Furniture moving included at no extra cost</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-text-secondary">Pre and post-treatment spotting included</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-text-secondary">No parking or travel fees within 100 miles of Manchester</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Section 9: Money-Saving Tips */}
              <div id="money-saving-tips" className="prose max-w-none">
                <h2 className="text-h2 text-text-primary mb-6">How to Save Money on Carpet Cleaning</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Professional carpet cleaning doesn't have to break the bank. Here are proven strategies to reduce costs without compromising quality:
                </p>

                <div className="space-y-4 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-text-primary mb-2">Book Multiple Rooms</h3>
                          <p className="text-text-secondary mb-2">
                            Cleaning 3+ rooms typically reduces per-room cost by 10-20%. A 3-bedroom package might cost £90 instead of £105 if rooms were booked separately.
                          </p>
                          <p className="text-sm text-green-700 font-semibold">Potential Saving: £15-£30 per visit</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-text-primary mb-2">Choose Weekday Appointments</h3>
                          <p className="text-text-secondary mb-2">
                            Weekend and evening slots often cost 15-25% more. Booking during weekday business hours can significantly reduce your bill.
                          </p>
                          <p className="text-sm text-green-700 font-semibold">Potential Saving: £12-£25 per visit</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-text-primary mb-2">Regular Maintenance Contracts</h3>
                          <p className="text-text-secondary mb-2">
                            Booking annual or bi-annual services upfront often secures 10-15% discount and guarantees priority scheduling.
                          </p>
                          <p className="text-sm text-green-700 font-semibold">Potential Saving: £8-£18 per visit</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Section 10: Is It Worth It? */}
              <div id="worth-it" className="prose max-w-none">
                <h2 className="text-h2 text-text-primary mb-6">Is Professional Carpet Cleaning Worth the Cost?</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Absolutely. While DIY carpet cleaning might seem cheaper initially, professional services provide value that far exceeds the cost:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="h-8 w-8 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary-600 mb-2">£800+</h3>
                      <p className="text-sm text-text-secondary">Average cost of carpet replacement avoided by regular professional cleaning</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="h-8 w-8 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary-600 mb-2">3-5 Years</h3>
                      <p className="text-sm text-text-secondary">Extended carpet lifespan from professional maintenance vs DIY only</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="h-8 w-8 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary-600 mb-2">98%</h3>
                      <p className="text-sm text-text-secondary">Customer satisfaction rate for professional vs 67% for DIY machines</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-primary-600 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">ROI Analysis: Professional vs DIY</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-white/80 text-sm mb-2">DIY Carpet Cleaner Rental</p>
                        <p className="text-2xl font-bold mb-1">£35-£50</p>
                        <p className="text-sm text-white/70">Per day + cleaning solution</p>
                        <ul className="mt-3 space-y-1 text-sm text-white/80">
                          <li>• Limited extraction power</li>
                          <li>• No pre-treatment</li>
                          <li>• Long drying times (24hrs+)</li>
                          <li>• Risk of over-wetting</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-white/80 text-sm mb-2">Professional Service</p>
                        <p className="text-2xl font-bold mb-1">£75-£120</p>
                        <p className="text-sm text-white/70">For whole house (3-bed)</p>
                        <ul className="mt-3 space-y-1 text-sm text-white/80">
                          <li>• Industrial-grade equipment</li>
                          <li>• Pre and post-treatment</li>
                          <li>• Quick drying (4-6 hours)</li>
                          <li>• Guaranteed results</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 11: Regional Price Variations */}
              <div id="regional-pricing" className="prose max-w-none">
                <h2 className="text-h2 text-text-primary mb-6">UK Regional Price Variations</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Carpet cleaning costs vary across the UK based on local living costs, competition, and demand. Here's a regional breakdown:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-primary-50">
                        <th className="border border-gray-200 p-3 text-left text-text-primary">Region</th>
                        <th className="border border-gray-200 p-3 text-left text-text-primary">Per Room</th>
                        <th className="border border-gray-200 p-3 text-left text-text-primary">Per m²</th>
                        <th className="border border-gray-200 p-3 text-left text-text-primary">3-Bed House</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-3 text-text-secondary">London</td>
                        <td className="border border-gray-200 p-3 font-semibold">£30-£45</td>
                        <td className="border border-gray-200 p-3 font-semibold">£4-£6</td>
                        <td className="border border-gray-200 p-3 font-semibold">£90-£140</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 p-3 text-text-secondary">Southeast England</td>
                        <td className="border border-gray-200 p-3 font-semibold">£28-£38</td>
                        <td className="border border-gray-200 p-3 font-semibold">£3.50-£5</td>
                        <td className="border border-gray-200 p-3 font-semibold">£80-£125</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 text-text-secondary">Manchester/Northwest</td>
                        <td className="border border-gray-200 p-3 font-semibold text-primary-600">£25-£35</td>
                        <td className="border border-gray-200 p-3 font-semibold text-primary-600">£3-£5</td>
                        <td className="border border-gray-200 p-3 font-semibold text-primary-600">£75-£120</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 p-3 text-text-secondary">Birmingham/Midlands</td>
                        <td className="border border-gray-200 p-3 font-semibold">£24-£34</td>
                        <td className="border border-gray-200 p-3 font-semibold">£3-£4.50</td>
                        <td className="border border-gray-200 p-3 font-semibold">£70-£115</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 text-text-secondary">Yorkshire</td>
                        <td className="border border-gray-200 p-3 font-semibold">£22-£32</td>
                        <td className="border border-gray-200 p-3 font-semibold">£2.80-£4.50</td>
                        <td className="border border-gray-200 p-3 font-semibold">£65-£110</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 p-3 text-text-secondary">Scotland</td>
                        <td className="border border-gray-200 p-3 font-semibold">£23-£33</td>
                        <td className="border border-gray-200 p-3 font-semibold">£3-£4.50</td>
                        <td className="border border-gray-200 p-3 font-semibold">£68-£112</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3 text-text-secondary">Wales</td>
                        <td className="border border-gray-200 p-3 font-semibold">£22-£30</td>
                        <td className="border border-gray-200 p-3 font-semibold">£2.80-£4</td>
                        <td className="border border-gray-200 p-3 font-semibold">£65-£105</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 12: Getting Accurate Quotes */}
              <div id="getting-quotes" className="prose max-w-none">
                <h2 className="text-h2 text-text-primary mb-6">How to Get Accurate Carpet Cleaning Quotes</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Getting accurate quotes ensures no surprises on the day. Follow these steps for transparent pricing:
                </p>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary-600 font-bold">1</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-text-primary mb-2">Measure Your Rooms</h3>
                          <p className="text-text-secondary">
                            Measure length × width for each room. Round up to nearest metre. This helps get precise square metre quotes or confirm if rooms qualify as "standard" size (up to 15m²).
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary-600 font-bold">2</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-text-primary mb-2">Note Carpet Condition</h3>
                          <p className="text-text-secondary">
                            Mention heavy stains, pet odours, or special requirements upfront. This ensures quotes include necessary treatments and avoids day-of-service surprises.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary-600 font-bold">3</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-text-primary mb-2">Ask About Package Deals</h3>
                          <p className="text-text-secondary">
                            Always inquire about multi-room discounts, whole-house packages, or seasonal promotions. Many companies offer better rates for larger jobs.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary-600 font-bold">4</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-text-primary mb-2">Confirm What's Included</h3>
                          <p className="text-text-secondary">
                            Ask specifically: Does the price include pre-treatment? Furniture moving? Travel costs? Stain spotting? Get everything in writing before booking.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-8 bg-gradient-to-r from-primary-600 to-accent-blue text-white">
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                        <Calculator className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">Get Your Instant Quote in 60 Seconds</h3>
                      <p className="text-white/90 text-lg">
                        Our intelligent pricing calculator provides accurate quotes based on your exact requirements. No obligation, no hidden fees.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link href="/quote">
                          <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-white/90 font-semibold">
                            <Calculator className="mr-2 h-5 w-5" />
                            Get Free Instant Quote
                          </Button>
                        </Link>
                        <a href="tel:+447405428259">
                          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                            <Phone className="mr-2 h-5 w-5" />
                            Call: +44 7405 428259
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonials Section */}
              <div id="testimonials" className="prose max-w-none">
                <h2 className="text-h2 text-text-primary mb-6">What Our Customers Say</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="relative group overflow-hidden">
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-primary-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                      <div className="relative bg-white rounded-xl border-0 shadow-card">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0`}>
                              {testimonial.initial}
                            </div>
                            <div className="flex-1">
                              <p className="font-bold text-text-primary">{testimonial.name}</p>
                              <p className="text-sm text-text-secondary">{testimonial.location}</p>
                              <div className="flex gap-1 mt-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-accent-yellow text-accent-yellow" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-text-secondary leading-relaxed mb-4">"{testimonial.quote}"</p>
                          <p className="text-sm text-primary-600 font-semibold">{testimonial.service}</p>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div id="faq" className="prose max-w-none">
                <h2 className="text-h2 text-text-primary mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold text-text-primary hover:text-primary-600">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Final CTA */}
              <div className="relative group mt-16">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-blue rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <Card className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white border-0">
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <h3 className="text-2xl font-bold">Ready for Spotless Carpets?</h3>
                      <p className="text-white/90 text-lg">
                        Join thousands of satisfied customers in Manchester. Get your free instant quote in 60 seconds with transparent, competitive pricing.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link href="/quote">
                          <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-white/90 font-semibold">
                            <Calculator className="mr-2 h-5 w-5" />
                            Get Instant Quote
                          </Button>
                        </Link>
                        <Link href="/services">
                          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                            View All Services <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </article>

            {/* Sidebar (25%) */}
            <aside className="lg:col-span-1">
              <SidebarClient />
            </aside>
          </div>
        </div>
      </section>
    </ClientWrapper>
  )
}
