import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Sparkles, Phone, CheckCircle, Award, Clock, Shield,
  Home, Mail, MapPin, Star, TrendingUp, Users,
  Palette, Gem, Package, Target, Droplets, Leaf,
  BadgeCheck, Lightbulb, Heart, AlertCircle, Wind, Scissors, Zap
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ClientWrapper from './client-wrapper'
import InteractiveSearch from './interactive-client'

export const metadata: Metadata = {
  title: 'Rug Cleaning Manchester | Oriental & Persian Rug Experts 2025',
  description: 'Expert rug cleaning in Manchester for Oriental, Persian, antique & silk rugs. Same-day pickup, eco-friendly methods, 100% satisfaction guarantee. Get your free quote in 60 seconds.',
  keywords: [
    'rug cleaning Manchester',
    'Oriental rug cleaning Manchester',
    'Persian rug cleaning Manchester',
    'area rug cleaning Manchester',
    'antique rug cleaning',
    'silk rug cleaning',
    'wool rug cleaning',
    'rug restoration Manchester',
    'professional rug cleaning',
    'rug stain removal Manchester'
  ],
  alternates: {
    canonical: 'https://blowupcleaners.co.uk/services/rug-cleaning',
  },
  openGraph: {
    title: 'Rug Cleaning Manchester | Oriental & Persian Rug Experts',
    description: 'Professional rug cleaning services in Manchester. Expert care for all rug types including Oriental, Persian, antique, silk, and wool rugs.',
    url: 'https://blowupcleaners.co.uk/services/rug-cleaning',
    siteName: 'Blow Up Cleaners',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rug Cleaning Manchester | Oriental & Persian Rug Experts',
    description: 'Professional rug cleaning services in Manchester. Expert care for all rug types.',
  },
}

// Subtopic cards for interactive navigation
const subtopicCards = [
  {
    title: 'Rug Cleaning Methods',
    url: '#methods',
    excerpt: 'Discover professional rug cleaning techniques including hand washing, steam cleaning, and dry cleaning methods for different rug types.',
    category: 'Methods',
    iconName: 'Sparkles',
    keywords: ['methods', 'techniques', 'cleaning types', 'hand washing', 'steam cleaning', 'dry cleaning']
  },
  {
    title: 'Rug Cleaning Cost',
    url: '#cost',
    excerpt: 'Understand rug cleaning pricing for different sizes and types. Get transparent quotes for Oriental, Persian, and area rug cleaning.',
    category: 'Pricing',
    iconName: 'Target',
    keywords: ['cost', 'price', 'pricing', 'quotes', 'rates', 'fees']
  },
  {
    title: 'Oriental & Persian Rugs',
    url: '#oriental-persian',
    excerpt: 'Expert care for valuable Oriental and Persian rugs. Specialized cleaning techniques to preserve colors, patterns, and value.',
    category: 'Specialty',
    iconName: 'Palette',
    keywords: ['Oriental', 'Persian', 'handmade', 'valuable', 'specialty']
  },
  {
    title: 'Antique Rug Care',
    url: '#antique',
    excerpt: 'Gentle, specialized cleaning for antique and heirloom rugs. Preserve the beauty and value of your precious vintage rugs.',
    category: 'Specialty',
    iconName: 'Gem',
    keywords: ['antique', 'vintage', 'heirloom', 'delicate', 'preservation']
  },
  {
    title: 'Rug Stain Removal',
    url: '#stains',
    excerpt: 'Professional stain removal for wine, coffee, food, pet stains, and more. Safe methods that protect your rug while removing tough stains.',
    category: 'Services',
    iconName: 'Droplets',
    keywords: ['stains', 'spots', 'removal', 'wine', 'coffee', 'pet stains']
  },
  {
    title: 'Rug Types & Materials',
    url: '#types',
    excerpt: 'Learn about cleaning different rug materials including wool, silk, cotton, synthetic, jute, and blended fibers.',
    category: 'Education',
    iconName: 'Package',
    keywords: ['wool', 'silk', 'cotton', 'materials', 'fibers', 'synthetic']
  },
  {
    title: 'Rug Protection & Maintenance',
    url: '#protection',
    excerpt: 'Protect your investment with professional rug protection treatments and expert maintenance advice to extend rug life.',
    category: 'Services',
    iconName: 'Shield',
    keywords: ['protection', 'maintenance', 'care', 'preservation', 'treatment']
  },
  {
    title: 'Rug Restoration Services',
    url: '#restoration',
    excerpt: 'Professional rug restoration including fringe repair, color restoration, moth damage repair, and structural repairs.',
    category: 'Services',
    iconName: 'Scissors',
    keywords: ['restoration', 'repair', 'fringe', 'moth damage', 'color restoration']
  },
  {
    title: 'Commercial Rug Cleaning',
    url: '#commercial',
    excerpt: 'Professional rug cleaning for businesses, hotels, offices, and commercial properties. Flexible scheduling and bulk pricing.',
    category: 'Commercial',
    iconName: 'Users',
    keywords: ['commercial', 'business', 'office', 'hotel', 'bulk']
  },
  {
    title: 'Eco-Friendly Rug Cleaning',
    url: '#eco-friendly',
    excerpt: 'Safe, green rug cleaning using eco-friendly products. Protect your family, pets, and the environment while cleaning rugs.',
    category: 'Methods',
    iconName: 'Leaf',
    keywords: ['eco-friendly', 'green', 'natural', 'safe', 'non-toxic']
  },
  {
    title: 'Pickup & Delivery Service',
    url: '#pickup-delivery',
    excerpt: 'Convenient free pickup and delivery service for rug cleaning. We come to you anywhere in Manchester and surrounding areas.',
    category: 'Services',
    iconName: 'Zap',
    keywords: ['pickup', 'delivery', 'collection', 'service', 'convenience']
  },
  {
    title: 'Coverage Areas Manchester',
    url: '#coverage',
    excerpt: 'We serve all of Manchester and surrounding areas. Find out if we cover your location for rug cleaning services.',
    category: 'Service Areas',
    iconName: 'Home',
    keywords: ['coverage', 'areas', 'locations', 'service areas', 'Manchester']
  }
]

// FAQ data
const faqData = [
  {
    question: 'How much does rug cleaning cost in Manchester?',
    answer: 'Professional rug cleaning in Manchester typically costs between £3-£8 per square foot depending on the rug type and condition. Small area rugs (3x5) usually cost £45-£75, medium rugs (5x8) cost £80-£160, and large rugs (8x10) cost £160-£320. Oriental and Persian rugs may cost more due to specialized handling. We offer free quotes and price matching.'
  },
  {
    question: 'How long does rug cleaning take?',
    answer: 'The rug cleaning process typically takes 5-10 business days from pickup to delivery. This includes inspection, pre-treatment, cleaning, drying (24-48 hours), grooming, and quality check. Rush services are available for urgent needs within 2-3 days for an additional fee. Heavily soiled or delicate antique rugs may require longer processing times.'
  },
  {
    question: 'Do you offer pickup and delivery for rug cleaning?',
    answer: 'Yes, we provide free pickup and delivery service for all rug cleaning orders throughout Manchester and surrounding areas within a 15-mile radius. We will collect your rug from your home or business at your convenience, clean it at our facility, and deliver it back clean and fresh. You can schedule pickup online or by phone.'
  },
  {
    question: 'Is professional rug cleaning safe for Oriental and Persian rugs?',
    answer: 'Absolutely. We specialize in cleaning Oriental and Persian rugs using traditional hand-washing methods combined with modern technology. Our technicians are trained in proper handling of handmade rugs, natural dyes, and delicate fibers. We test colors for bleeding, use pH-balanced solutions, and employ gentle agitation to preserve your valuable rug while thoroughly cleaning it.'
  },
  {
    question: 'Can you remove pet stains and odors from rugs?',
    answer: 'Yes, we excel at removing pet stains and odors from all types of rugs. We use enzyme-based treatments that break down urine crystals and eliminate odor at the molecular level, not just mask it. For severe contamination, we may recommend our deep decontamination process which includes submerging the rug and treating both sides. Pet odor removal is guaranteed.'
  },
  {
    question: 'How do you clean antique or vintage rugs?',
    answer: 'Antique rugs require extra care and specialized handling. We start with a thorough inspection to identify weak spots, unstable dyes, or damage. We use gentle hand-washing techniques with pH-neutral, color-safe solutions. Antique rugs are air-dried flat to prevent shrinkage or distortion. We avoid harsh chemicals and mechanical processes that could damage delicate fibers or fade natural dyes.'
  },
  {
    question: 'What is the best method for cleaning silk rugs?',
    answer: 'Silk rugs require the most delicate cleaning approach. We use specialized silk-safe solutions and gentle hand-washing techniques with controlled water temperature. Silk fibers are more susceptible to damage from harsh chemicals, excessive water, and rough handling. Our process includes testing for colorfastness, using soft brushes, and careful drying to maintain the silk sheen and prevent watermarks.'
  },
  {
    question: 'Do you clean wool rugs?',
    answer: 'Yes, wool rug cleaning is one of our specialties. Wool is a durable natural fiber but requires proper pH balance to prevent damage. We use wool-safe cleaning solutions that clean deeply without stripping natural lanolin oils. Our process removes soil, restores loft, eliminates odors, and leaves your wool rug soft and vibrant. We can also treat wool for moth prevention.'
  },
  {
    question: 'Can you repair damaged rugs?',
    answer: 'Yes, we offer comprehensive rug restoration services including fringe repair or replacement, edge binding repair, hole patching, moth damage repair, and color restoration. Our skilled artisans can reweave damaged areas to match the original pattern. We can also reinforce weak spots and repair pet damage. Contact us for a free restoration assessment and quote.'
  },
  {
    question: 'How often should rugs be professionally cleaned?',
    answer: 'We recommend professional rug cleaning every 12-18 months for typical household rugs. High-traffic area rugs should be cleaned annually. Homes with pets or allergies may benefit from cleaning every 6-12 months. Oriental and Persian rugs should be cleaned every 1-2 years to preserve their beauty and value. Proper maintenance extends rug life significantly.'
  },
  {
    question: 'Do you clean large area rugs?',
    answer: 'Yes, we clean rugs of all sizes from small accent rugs to large room-size rugs up to 12x18 feet or larger. Our facility is equipped with specialized equipment to handle oversized rugs. We provide free pickup and delivery regardless of rug size. Pricing is based on square footage, and we offer volume discounts for multiple rugs.'
  },
  {
    question: 'What is the difference between rug cleaning and carpet cleaning?',
    answer: 'Rug cleaning differs significantly from carpet cleaning. Rugs are cleaned at our facility where they can be fully submerged, treated on both sides, and properly dried. This removes embedded soil that on-location carpet cleaning cannot reach. We can also inspect and address backing issues, fringes, and edges. Rugs receive more thorough cleaning, better rinsing, and controlled drying.'
  },
  {
    question: 'Are your rug cleaning products safe for children and pets?',
    answer: 'Yes, we use eco-friendly, non-toxic cleaning products that are safe for children and pets. Our solutions are biodegradable, free from harsh chemicals, and hypoallergenic. We rinse rugs thoroughly to remove all cleaning residues. Once your rug is dry and returned, it is completely safe for immediate use by all family members including pets.'
  },
  {
    question: 'Can you remove wine, coffee, or food stains from rugs?',
    answer: 'Yes, we successfully remove most wine, coffee, tea, juice, and food stains from rugs. Our process includes pre-treating stains with specialized solutions, followed by thorough cleaning. The key is addressing stains as soon as possible. Even old or set-in stains can often be removed or significantly lightened with professional treatment. We guarantee our best effort on all stain removal.'
  },
  {
    question: 'Do you clean synthetic or machine-made rugs?',
    answer: 'Yes, we clean all types of rugs including synthetic materials like polypropylene, polyester, nylon, and acrylic. Machine-made rugs are generally more durable and can withstand more aggressive cleaning. We adjust our methods based on the rug construction and fiber content. Synthetic rugs often respond very well to our cleaning process and come out looking like new.'
  },
  {
    question: 'How do you dry rugs after cleaning?',
    answer: 'After cleaning, we extract excess water using specialized equipment, then air-dry rugs in our climate-controlled drying room. Rugs are laid flat or hung to ensure even drying and prevent distortion. Depending on thickness and humidity, drying takes 24-48 hours. We never return rugs damp. Proper drying prevents mold, mildew, color bleeding, and shrinkage.'
  },
  {
    question: 'Can you clean rugs with pet urine damage?',
    answer: 'Yes, we specialize in treating rugs contaminated with pet urine. Severe cases require our deep decontamination process where we fully submerge the rug, apply enzyme treatments to break down urine crystals, and flush contamination from both the face and backing. We may need to treat the rug multiple times for complete odor removal. This service is more extensive than standard cleaning.'
  },
  {
    question: 'Do you offer rug protection treatments?',
    answer: 'Yes, we offer professional rug protection treatments that create an invisible barrier around each fiber. This helps repel spills, resist staining, and reduce soil accumulation. Protection makes maintenance easier and extends time between professional cleanings. It is especially recommended for light-colored rugs, high-traffic areas, and homes with children or pets. Protection treatment adds 12-18 months of extra life to your cleaning.'
  },
  {
    question: 'What areas of Manchester do you serve for rug cleaning?',
    answer: 'We provide rug cleaning services throughout Greater Manchester including Manchester City Centre, Salford, Trafford, Stockport, Oldham, Rochdale, Bolton, Bury, Wigan, Tameside, and all surrounding areas. We offer free pickup and delivery within a 15-mile radius of Manchester city center. Areas beyond this range may incur a small delivery fee. Contact us to confirm service to your specific location.'
  },
  {
    question: 'Why choose professional rug cleaning over DIY methods?',
    answer: 'Professional rug cleaning provides deeper cleaning, proper rinsing, controlled drying, and expert stain treatment that DIY methods cannot match. Home carpet cleaners lack the suction power to remove embedded soil and can leave rugs too wet, risking mold growth. We can also identify and address structural issues, treat both sides of the rug, and clean fringes properly. Professional cleaning extends rug life and protects your investment.'
  }
]

export default function RugCleaningPage() {
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Blow Up Cleaners',
    'url': 'https://blowupcleaners.co.uk',
    'logo': 'https://blowupcleaners.co.uk/logo.png',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+44-7405-428259',
      'contactType': 'customer service',
      'areaServed': 'GB',
      'availableLanguage': 'English'
    },
    'sameAs': [
      'https://facebook.com/blowupcleaners',
      'https://twitter.com/blowupcleaners'
    ]
  }

  // LocalBusiness Schema with Service
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Blow Up Cleaners',
    'image': 'https://blowupcleaners.co.uk/logo.png',
    'telephone': '07405428259',
    'priceRange': '££',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Manchester',
      'addressRegion': 'Greater Manchester',
      'addressCountry': 'GB'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '53.4808',
      'longitude': '-2.2426'
    },
    'url': 'https://blowupcleaners.co.uk/services/rug-cleaning',
    'areaServed': {
      '@type': 'City',
      'name': 'Manchester'
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Rug Cleaning Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Oriental Rug Cleaning',
            'description': 'Expert cleaning for Oriental and Persian rugs'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Antique Rug Cleaning',
            'description': 'Gentle care for valuable antique rugs'
          }
        }
      ]
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '150'
    }
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://blowupcleaners.co.uk'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Services',
        'item': 'https://blowupcleaners.co.uk/services'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Rug Cleaning',
        'item': 'https://blowupcleaners.co.uk/services/rug-cleaning'
      }
    ]
  }

  // Speakable Schema for Voice Search
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Rug Cleaning Manchester',
    'description': 'Expert rug cleaning in Manchester for Oriental, Persian, antique and silk rugs. Professional service with same-day availability. Prices from £45.',
    'datePublished': '2025-01-15',
    'dateModified': '2025-01-21',
    'author': {
      '@type': 'Person',
      'name': 'Manchester Rug Cleaning Specialist',
      'jobTitle': 'IICRC Certified Rug Cleaning Expert'
    },
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': [
        '.speakable-headline',
        '.speakable-tldr',
        '.speakable-pricing',
        '.speakable-cta'
      ]
    }
  }

  // HowTo Schema for Rug Cleaning Process
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How Professional Rug Cleaning Works',
    'description': 'Step-by-step professional rug cleaning process for Oriental, Persian, and area rugs',
    'totalTime': 'P7D',
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': 'Free Pickup',
        'text': 'We collect your rug from your home or business at your convenience with free pickup service throughout Manchester.'
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': 'Inspection & Testing',
        'text': 'Our experts inspect your rug for fiber type, dye stability, damage, and determine the best cleaning method.'
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': 'Dusting & Pre-Treatment',
        'text': 'We remove dry soil through dusting and pre-treat stains with specialized solutions.'
      },
      {
        '@type': 'HowToStep',
        'position': 4,
        'name': 'Professional Cleaning',
        'text': 'Hand washing or appropriate cleaning method based on rug type, using pH-balanced solutions.'
      },
      {
        '@type': 'HowToStep',
        'position': 5,
        'name': 'Thorough Rinsing',
        'text': 'Multiple rinse cycles ensure complete removal of all cleaning agents and soil.'
      },
      {
        '@type': 'HowToStep',
        'position': 6,
        'name': 'Controlled Drying',
        'text': 'Climate-controlled drying room ensures proper, even drying to prevent damage.'
      },
      {
        '@type': 'HowToStep',
        'position': 7,
        'name': 'Quality Check & Delivery',
        'text': 'Final inspection and grooming before we deliver your clean rug back to you.'
      }
    ]
  }

  // FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqData.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }

  return (
    <ClientWrapper pageTitle="Complete Guide to Rug Cleaning in Manchester">
      {/* Multiple Schema Markup for Enhanced SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="default" className="mb-6 bg-yellow-400 text-blue-900 hover:bg-yellow-500">
                Manchester Rug Cleaning Experts Since 2010
              </Badge>
              <h1 className="speakable-headline text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Rug Cleaning Manchester
                <span className="block text-yellow-400 mt-2">Oriental, Persian & Area Rug Specialists</span>
              </h1>

              {/* TL;DR for LLMs and Voice Search - Speakable */}
              <div className="speakable-tldr bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                  <strong>TL;DR:</strong> Expert rug cleaning in Manchester for Oriental, Persian, antique and silk rugs. Same-day pickup, eco-friendly hand washing methods, 100% satisfaction guarantee. Prices from £45 for small rugs. Free quotes in 60 seconds. Call 07405 428259.
                </p>
              </div>

              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Expert care for all rug types including valuable Oriental, Persian, antique, silk, and wool rugs.
                Free pickup and delivery throughout Manchester.
              </p>

              <div className="speakable-cta flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/quote">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Free Quote
                  </Button>
                </Link>
                <a href="tel:07405428259">
                  <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-bold text-lg px-8 py-6 rounded-full backdrop-blur-sm">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 07405 428259
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  { icon: Award, label: '15+ Years Experience', sublabel: 'Rug Specialists' },
                  { icon: Star, label: '1000+ Rugs Cleaned', sublabel: '5-Star Service' },
                  { icon: Shield, label: 'Fully Insured', sublabel: 'Safe & Secure' },
                  { icon: Clock, label: 'Free Pickup', sublabel: 'Next Day Service' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <item.icon className="h-10 w-10 mx-auto mb-2 text-yellow-400" />
                    <p className="font-bold text-sm">{item.label}</p>
                    <p className="text-xs text-blue-200">{item.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Search & Filter Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore Rug Cleaning Topics
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Browse our comprehensive guide to rug cleaning. Find information on methods, costs,
                rug types, stain removal, and specialized care for Oriental and Persian rugs.
              </p>
            </div>

            <InteractiveSearch subtopics={subtopicCards} />
          </div>
        </section>

        {/* Comprehensive Content Sections */}

        {/* Methods Section */}
        <section id="methods" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Professional Rug Cleaning Methods</h2>
                  <p className="text-gray-600">Understanding Different Rug Cleaning Techniques</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  Professional rug cleaning involves several specialized methods, each suited to different rug types,
                  materials, and conditions. Understanding these methods helps you make informed decisions about caring
                  for your valuable rugs.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Hand Washing Method</h3>
                <p>
                  Hand washing is the gold standard for cleaning valuable Oriental, Persian, and antique rugs. This
                  traditional method provides the gentlest, most thorough cleaning possible. The process begins with
                  dusting to remove dry soil, followed by submersion in a cleaning solution where technicians use soft
                  brushes to gently agitate the fibers. The rug is then rinsed multiple times until water runs clear,
                  ensuring all cleaning agents and soil are removed.
                </p>
                <p>
                  Hand washing allows for complete control over every aspect of the cleaning process. Technicians can
                  adjust pressure, solution strength, and washing time based on the specific rug. This method is ideal
                  for handmade rugs with natural dyes, silk rugs, antique rugs with delicate fibers, and any rug
                  requiring extra gentle care. While more time-intensive and costly, hand washing provides unmatched
                  safety and results for valuable rugs.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Immersion Cleaning</h3>
                <p>
                  Immersion cleaning involves fully submerging the rug in a large washing basin filled with cleaning
                  solution. This method is excellent for deeply soiled rugs, rugs with pet contamination, or rugs that
                  have not been cleaned in many years. The full submersion allows the cleaning solution to penetrate
                  completely through the rug pile, backing, and foundation.
                </p>
                <p>
                  During immersion cleaning, the rug soaks for a period allowing the solution to break down embedded
                  soil and contamination. The rug is then agitated either by hand or with soft brushes to release dirt.
                  Multiple rinse cycles follow to remove all soil and cleaning agents. This method provides the most
                  thorough cleaning available and is particularly effective for removing odors and deep contamination
                  that other methods cannot reach.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Steam Cleaning for Rugs</h3>
                <p>
                  Steam cleaning, also called hot water extraction, can be adapted for certain types of rugs. However,
                  it must be performed at a facility, not on-location like carpet cleaning. The rug is thoroughly
                  pre-treated, then hot water mixed with cleaning solution is injected into the fibers under controlled
                  pressure. Powerful extraction immediately removes the water along with dissolved soil.
                </p>
                <p>
                  Facility-based steam cleaning for rugs differs from on-location carpet cleaning in several important
                  ways. The rug can be treated on both sides, fringes receive special attention, water temperature and
                  pressure are carefully controlled, and the rug is properly dried afterward. This method works well for
                  durable synthetic rugs, some wool rugs, and machine-made rugs. It should not be used on silk, antique,
                  or rugs with unstable dyes.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Dry Cleaning Method</h3>
                <p>
                  Dry cleaning uses specialized solvents or dry compounds that clean without water. This method is
                  reserved for rugs that cannot tolerate moisture, such as certain antique silk rugs, rugs with glued
                  backings, or rugs with water-sensitive dyes. The dry cleaning compound is worked into the pile,
                  allowed to absorb soil, then vacuumed out along with the dirt.
                </p>
                <p>
                  While dry cleaning is safer for moisture-sensitive rugs, it does not provide the same level of deep
                  cleaning as water-based methods. It is best used for routine maintenance cleaning or for rugs with
                  specific limitations. Some facilities use petroleum-based dry cleaning similar to garment dry cleaning,
                  while others use dry compound methods. The choice depends on the specific rug and its condition.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Choosing the Right Method</h3>
                <p>
                  The appropriate cleaning method depends on multiple factors including rug construction, fiber content,
                  dye stability, age, condition, and level of soiling. A professional rug cleaner will inspect your rug,
                  test for colorfastness, assess the foundation integrity, and recommend the safest, most effective
                  method. Many rugs benefit from a combination of methods, such as hand washing for the face and
                  immersion treatment for the backing when addressing pet contamination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section id="cost" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Rug Cleaning Cost Guide</h2>
                  <p className="text-gray-600">Transparent Pricing for All Rug Types</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  Understanding rug cleaning costs helps you budget appropriately and recognize fair pricing. Rug
                  cleaning is priced based on several factors including size, fiber content, construction method,
                  condition, and required services.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Standard Pricing Structure</h3>
                <div className="speakable-pricing bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-6">
                  <p className="font-semibold text-lg text-gray-900 mb-3">
                    Transparent Rug Cleaning Prices Manchester:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Small rugs (3x5):</strong> £45-£75</li>
                    <li><strong>Medium rugs (5x8):</strong> £80-£160</li>
                    <li><strong>Large rugs (8x10):</strong> £160-£320</li>
                    <li><strong>Extra large rugs (9x12+):</strong> £220-£480</li>
                    <li><strong>Price per square foot:</strong> £3-£8 depending on rug type</li>
                  </ul>
                </div>
                <p>
                  Most professional rug cleaners charge by the square foot, with prices typically ranging from £3 to £8
                  per square foot. To calculate your rug size in square feet, multiply length by width in feet. For
                  example, a 5x8 foot rug contains 40 square feet. At £4 per square foot, cleaning would cost £160.
                </p>
                <p>
                  Small area rugs (3x5 feet or 15 square feet) typically cost £45-£75 to clean. Medium rugs (5x8 feet
                  or 40 square feet) cost £80-£160. Large rugs (8x10 feet or 80 square feet) cost £160-£320. Extra
                  large or oversized rugs (9x12 feet or larger) cost £220-£480 depending on exact dimensions. Round,
                  oval, or irregular shaped rugs are calculated based on their equivalent rectangular dimensions.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Factors Affecting Price</h3>
                <p>
                  Several factors influence the final cost of rug cleaning. Oriental and Persian rugs often cost more
                  due to specialized handling requirements, natural dyes that need extra care, and hand-washing methods.
                  Silk rugs command premium pricing because they require gentle solutions, careful handling, and
                  specialized drying methods.
                </p>
                <p>
                  Rug condition significantly impacts price. Heavily soiled rugs require additional pre-treatment and
                  cleaning time. Rugs with pet contamination need enzyme treatments and sometimes multiple cleaning
                  cycles. Rugs that have not been cleaned in many years accumulate deeply embedded soil requiring extra
                  effort. Damaged rugs may need repair before cleaning to prevent further deterioration during the
                  process.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Additional Services and Costs</h3>
                <p>
                  Beyond basic cleaning, several additional services may apply. Stain removal treatment typically adds
                  £15-£40 depending on stain type and severity. Pet odor removal using enzyme treatments adds £25-£60.
                  Rug protection treatment costs £1-£2 per square foot. Fringe cleaning and brightening adds £10-£30.
                  Minor repairs like securing loose ends cost £15-£50, while major restoration requires separate quoting.
                </p>
                <p>
                  Rush service for faster turnaround adds 25-50 percent to the base price. Pickup and delivery is often
                  free within a service area but may cost £15-£40 for locations beyond the standard range. Some cleaners
                  offer package deals for multiple rugs or combine cleaning with protection treatment at discounted
                  rates.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Getting Accurate Quotes</h3>
                <p>
                  For the most accurate quote, provide your cleaner with the rug dimensions, fiber content if known,
                  any visible stains or damage, and how long since the last professional cleaning. Photos can help
                  cleaners assess condition remotely. Many cleaners offer free in-home estimates where they measure and
                  inspect rugs before providing firm quotes.
                </p>
                <p>
                  Be wary of prices that seem too good to be true. Quality rug cleaning requires proper facilities,
                  trained technicians, and time to do the job correctly. Rock-bottom pricing often indicates shortcuts
                  that can damage your rug. Conversely, the highest price does not always guarantee the best service.
                  Look for transparent pricing, detailed explanations of services included, and reviews from customers
                  with similar rugs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Oriental & Persian Rugs Section */}
        <section id="oriental-persian" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Oriental & Persian Rug Cleaning</h2>
                  <p className="text-gray-600">Expert Care for Valuable Handmade Rugs</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  Oriental and Persian rugs represent significant investments and often hold sentimental value. These
                  handmade treasures require specialized cleaning techniques that preserve their beauty, integrity, and
                  value while thoroughly removing soil and stains.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Understanding Oriental and Persian Rugs</h3>
                <p>
                  Oriental rugs refer to hand-knotted or hand-woven rugs originating from countries in Asia including
                  Persia (Iran), Turkey, India, Pakistan, China, Tibet, and Central Asian countries. Persian rugs
                  specifically come from Iran and are often considered the finest Oriental rugs due to intricate designs,
                  high knot counts, and traditional craftsmanship passed down through generations.
                </p>
                <p>
                  These rugs are constructed by individually tying thousands or millions of knots to a foundation of
                  warp and weft threads. The knot density, measured in knots per square inch, ranges from 30 KPSI for
                  coarser tribal rugs to over 500 KPSI for extremely fine silk rugs. Higher knot counts generally
                  indicate finer quality and higher value. The fibers are typically wool, silk, or a combination, often
                  dyed with natural vegetable dyes that create rich, complex colors.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Specialized Cleaning Process</h3>
                <p>
                  Cleaning Oriental and Persian rugs begins with thorough inspection to identify fiber content, dye
                  stability, foundation condition, any damage, and soiling level. Technicians test colors in
                  inconspicuous areas for bleeding, especially important with natural dyes that may not be colorfast.
                  The inspection determines the appropriate cleaning method and identifies areas needing special
                  attention.
                </p>
                <p>
                  The cleaning process typically follows these steps: First, dry soil removal through dusting to remove
                  grit that can act like sandpaper on fibers. Second, pre-treatment of stains and heavily soiled areas
                  with appropriate solutions. Third, hand washing using pH-balanced, color-safe cleaning solutions with
                  soft brushes and gentle agitation in the direction of the pile. Fourth, thorough rinsing to remove
                  all cleaning agents. Fifth, excess water extraction. Finally, controlled air drying in a clean,
                  climate-controlled environment with the rug laid flat or hung properly.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Protecting Natural Dyes and Colors</h3>
                <p>
                  Natural dyes used in traditional Oriental and Persian rugs require extra care during cleaning. These
                  vegetable-based dyes create the rich, deep colors that give these rugs their distinctive appearance,
                  but they can be less stable than modern synthetic dyes. Professional cleaners use pH-neutral solutions
                  specifically formulated for natural dyes, control water temperature carefully, minimize soaking time,
                  and ensure complete rinsing.
                </p>
                <p>
                  Some color bleeding is normal with certain dyes, especially reds and blues. Professional cleaners know
                  how to manage this through careful testing, controlled cleaning, and proper rinsing. They can also
                  address existing dye migration issues where colors have bled onto lighter areas of the rug. Proper
                  cleaning actually helps stabilize dyes and restore vibrancy to colors dulled by soil.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Why Oriental Rugs Need Professional Cleaning</h3>
                <p>
                  Attempting to clean an Oriental or Persian rug yourself or using standard on-location carpet cleaning
                  methods risks serious damage. Home carpet cleaners cannot provide proper rinsing, leave rugs too wet
                  risking mold and rot, use harsh chemicals unsuitable for wool or silk, miss the backing and foundation,
                  and provide inadequate drying. Damage from improper cleaning can permanently reduce or destroy a rug
                  valuable worth thousands of pounds.
                </p>
                <p>
                  Professional rug cleaning facilities have specialized equipment for dusting, washing, and drying.
                  Trained technicians understand rug construction, can identify and accommodate specific needs, use
                  appropriate solutions and techniques, and ensure safe drying. The investment in professional cleaning
                  protects your larger investment in the rug itself while extending its life for generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Antique Rug Care Section */}
        <section id="antique" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Gem className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Antique Rug Cleaning & Preservation</h2>
                  <p className="text-gray-600">Gentle Care for Heirloom Rugs</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  Antique rugs require the most delicate handling and specialized expertise during cleaning. These
                  irreplaceable pieces, often over 50 to 100 years old, combine historical significance with substantial
                  monetary and sentimental value. Proper cleaning preserves their beauty and integrity while removing
                  accumulated soil and stains.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Challenges of Cleaning Antique Rugs</h3>
                <p>
                  Age brings several challenges that complicate cleaning. Fiber degradation weakens wool, silk, or
                  cotton over decades, making fibers more susceptible to damage from mechanical action or chemicals.
                  Foundation deterioration affects the warp and weft threads holding the rug together, creating weak
                  spots that can tear during cleaning if not handled properly.
                </p>
                <p>
                  Dye stability becomes increasingly unpredictable with age. Natural dyes may have faded, changed color,
                  or become unstable. Previous cleaning attempts using harsh methods may have already damaged dyes. Some
                  colors may bleed during wet cleaning while others are completely colorfast. Extensive testing is
                  essential before proceeding.
                </p>
                <p>
                  Accumulated soil embedded over many years requires careful removal without aggressive agitation that
                  could damage weakened fibers. Previous damage such as moth damage, dry rot, urine contamination, or
                  water damage complicates cleaning. Some areas may be too fragile to clean fully without causing
                  further deterioration.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Specialized Cleaning Approach</h3>
                <p>
                  Cleaning antique rugs begins with extensive inspection and documentation. Technicians photograph the
                  rug, note all existing damage, test colors extensively, assess foundation integrity, and identify
                  particularly fragile areas. This information guides the cleaning plan and provides documentation of
                  pre-existing conditions.
                </p>
                <p>
                  The cleaning method is customized to the specific rug. Very gentle hand washing with extremely mild,
                  pH-neutral solutions is standard. Mechanical action is minimized, relying more on soaking time and
                  solution chemistry. Fragile areas may be cleaned separately or more gently. In some cases, sections
                  too fragile to wet clean are spot cleaned only or left as-is to prevent damage.
                </p>
                <p>
                  Drying receives special attention. Antique rugs are always laid flat to dry, never hung which could
                  stress weakened areas. Climate-controlled drying prevents rapid drying that could cause shrinkage or
                  distortion. The process may take several days to ensure complete, even drying throughout the
                  foundation.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">When to Consider Restoration Before Cleaning</h3>
                <p>
                  Sometimes antique rugs need repair or stabilization before cleaning to prevent damage during the
                  process. Large holes, extensive fringe loss, severely deteriorated edges, or separated seams should
                  be addressed first. Loose areas where the pile is separating from the foundation need securing. A
                  professional can assess whether pre-cleaning repair is necessary and recommend the appropriate work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stain Removal Section */}
        <section id="stains" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Rug Stain Removal</h2>
                  <p className="text-gray-600">Professional Solutions for Tough Stains</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  Stains on rugs require prompt attention and appropriate treatment methods. Professional stain removal
                  combines chemistry knowledge, specialized products, and careful technique to remove stains while
                  protecting rug fibers and colors.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Common Rug Stains and Treatment</h3>
                <p>
                  Wine and juice stains are among the most common and concerning due to their vivid colors. These
                  water-based stains respond well to professional treatment when addressed promptly. Technicians use
                  acidic solutions to neutralize the tannins and dyes in wine, followed by thorough rinsing. Even
                  old wine stains can often be removed or significantly lightened with proper treatment.
                </p>
                <p>
                  Coffee and tea stains contain tannins that can permanently set if not treated correctly. Professional
                  removal involves pre-treating with tannin removers, careful agitation, and thorough rinsing. The key
                  is breaking down the tannin bonds without using excessive heat which can set the stain permanently.
                </p>
                <p>
                  Pet urine is particularly challenging because it involves more than just a visible stain. Urine
                  penetrates deep into the rug pile, padding if present, and backing. It contains uric acid crystals
                  that produce odor and can attract pets to re-soil the same area. Professional treatment requires
                  enzyme solutions that break down uric acid at the molecular level, often necessitating full immersion
                  cleaning to reach contamination throughout the rug thickness.
                </p>
                <p>
                  Food stains vary widely in composition. Protein-based stains from meat, dairy, or eggs require enzyme
                  treatments. Grease and oil-based stains need solvent-based spot cleaners. Sugar-based stains may
                  attract insects if not completely removed. Professional cleaners identify the stain type and apply
                  appropriate chemistry for effective removal.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Professional vs DIY Stain Treatment</h3>
                <p>
                  While immediate blotting of fresh spills is beneficial, attempting DIY stain removal on valuable rugs
                  risks permanent damage. Common mistakes include rubbing instead of blotting which spreads the stain
                  and damages fibers, using inappropriate products like bleach or harsh chemicals that destroy dyes,
                  over-wetting the area causing backing damage or dye bleeding, and using excessive heat that sets
                  stains permanently.
                </p>
                <p>
                  Professional stain removal provides several advantages. Technicians can identify stain type and choose
                  appropriate treatment chemistry. They understand how different fibers and dyes react to treatments.
                  They have access to specialized products not available to consumers. They can treat stains during full
                  immersion cleaning, reaching contamination throughout the rug thickness. Most importantly, they know
                  when a stain cannot be safely removed without risking damage to the rug.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">Setting Realistic Expectations</h3>
                <p>
                  Not all stains can be completely removed, especially old or set-in stains. Factors affecting stain
                  removal success include how long the stain has been present, whether heat was applied, the fiber type
                  and dye stability, and previous treatment attempts. Professional cleaners will be honest about
                  realistic outcomes and will never risk damaging a rug by using overly aggressive methods just to
                  remove a stain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600">
                  Everything you need to know about professional rug cleaning in Manchester
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-xl border-2 border-gray-100 px-6 hover:border-blue-200 transition-colors"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Trust & Credibility Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Us for Rug Cleaning
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Manchester leading rug cleaning specialists with over 15 years of experience caring for
                  valuable Oriental, Persian, and area rugs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Award,
                    title: 'Expert Rug Specialists',
                    description: 'Certified technicians trained in traditional hand-washing methods and modern rug cleaning technology. We specialize in Oriental, Persian, antique, and silk rugs.'
                  },
                  {
                    icon: Shield,
                    title: 'Fully Insured Service',
                    description: 'Comprehensive insurance coverage protects your valuable rugs throughout pickup, cleaning, and delivery. Your investment is safe with us.'
                  },
                  {
                    icon: Leaf,
                    title: 'Eco-Friendly Products',
                    description: 'Safe, biodegradable cleaning solutions that are gentle on rugs and safe for your family and pets. No harsh chemicals or toxic residues.'
                  },
                  {
                    icon: CheckCircle,
                    title: 'Satisfaction Guaranteed',
                    description: 'We stand behind our work with a 100 percent satisfaction guarantee. If you are not happy with the results, we will re-clean your rug free of charge.'
                  },
                  {
                    icon: Zap,
                    title: 'Free Pickup & Delivery',
                    description: 'Complimentary pickup and delivery service throughout Manchester and surrounding areas. We handle your rugs with care from start to finish.'
                  },
                  {
                    icon: Star,
                    title: '5-Star Customer Service',
                    description: 'Rated excellent by hundreds of satisfied customers. Read our reviews to see why Manchester trusts us with their valuable rugs.'
                  }
                ].map((feature, idx) => (
                  <Card key={idx} className="text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100">
                    <CardContent className="pt-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Areas Section */}
        <section id="coverage" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Home className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Serving All of Manchester
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We provide professional rug cleaning services throughout Greater Manchester including Manchester City
                Centre, Salford, Trafford, Stockport, Oldham, Rochdale, Bolton, Bury, Wigan, Tameside, and all
                surrounding areas. Free pickup and delivery within 15 miles of Manchester city center.
              </p>
              <Link href="/areas">
                <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  View All Service Areas
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Restore Your Rugs to Like-New Condition?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get a free, no-obligation quote for professional rug cleaning. Expert care for all rug types
                including Oriental, Persian, antique, and area rugs. Free pickup and delivery throughout Manchester.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/quote">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-6 rounded-full shadow-xl">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Your Free Quote Now
                  </Button>
                </Link>
                <a href="tel:07405428259">
                  <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-bold text-lg px-8 py-6 rounded-full backdrop-blur-sm">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 07405 428259
                  </Button>
                </a>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                  Free Pickup & Delivery
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                  Fully Insured
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                  Satisfaction Guaranteed
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </ClientWrapper>
  )
}
