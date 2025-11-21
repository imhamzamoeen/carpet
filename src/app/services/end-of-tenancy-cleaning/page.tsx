import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Home, ChefHat, Droplet, Wind, Flame, Eye, Sparkles, Shield, CheckCircle2, Award, Phone, Clock, AlertTriangle, Ban, HeartHandshake, BadgeCheck, Package, FileText, Star
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, Badge, Button } from '@/components/ui'
import ClientWrapper from './client-wrapper'
import InteractiveSearch from './interactive-client'

export const metadata: Metadata = {
  title: 'Professional End of Tenancy Cleaning | 100% Deposit Back Guarantee | BMad Carpet Cleaning',
  description: 'Expert end of tenancy cleaning services with guaranteed deposit return. Professional deep cleaning for landlords & tenants. Kitchen, bathroom, carpets & more. Call 07405 428259 for a free quote today!',
  keywords: 'end of tenancy cleaning, move out cleaning, deposit guarantee, landlord cleaning, professional tenancy clean, end of lease cleaning',
  openGraph: {
    title: 'Professional End of Tenancy Cleaning | 100% Deposit Back Guarantee',
    description: 'Expert end of tenancy cleaning with guaranteed deposit return. Professional deep cleaning services for landlords and tenants.',
    type: 'website',
    url: 'https://bmadcarpetcleaning.co.uk/services/end-of-tenancy-cleaning',
    images: [
      {
        url: 'https://bmadcarpetcleaning.co.uk/images/end-of-tenancy-og.jpg',
        width: 1200,
        height: 630,
        alt: 'End of Tenancy Cleaning Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional End of Tenancy Cleaning | 100% Deposit Back Guarantee',
    description: 'Expert end of tenancy cleaning with guaranteed deposit return. Professional deep cleaning services for landlords and tenants.',
    images: ['https://bmadcarpetcleaning.co.uk/images/end-of-tenancy-og.jpg']
  },
  alternates: {
    canonical: 'https://bmadcarpetcleaning.co.uk/services/end-of-tenancy-cleaning'
  }
}

// 12 Subtopic Cards with Categories
const subtopicCards = [
  {
    title: 'Full Property Deep Clean',
    url: '/services/deep-cleaning',
    excerpt: 'Complete property deep clean from top to bottom. Every room, every surface, professionally cleaned to landlord standards for guaranteed deposit return.',
    category: 'Comprehensive Services',
    iconName: 'Home',
    keywords: ['complete clean', 'whole property', 'full service', 'deep clean', 'entire house']
  },
  {
    title: 'Kitchen Deep Clean & Degreasing',
    url: '/services/kitchen-cleaning',
    excerpt: 'Professional kitchen sanitization including appliances, cupboards, countertops, and backsplash. Remove grease, grime, and stubborn stains.',
    category: 'Comprehensive Services',
    iconName: 'ChefHat',
    keywords: ['kitchen', 'grease', 'appliances', 'countertops', 'cupboards', 'sanitize']
  },
  {
    title: 'Bathroom Sanitization',
    url: '/services/bathroom-cleaning',
    excerpt: 'Complete bathroom deep clean including toilets, showers, tiles, and grout. Remove limescale, mold, and soap scum for sparkling results.',
    category: 'Comprehensive Services',
    iconName: 'Droplet',
    keywords: ['bathroom', 'toilet', 'shower', 'tiles', 'sanitize', 'limescale', 'mold']
  },
  {
    title: 'Carpet Steam Cleaning',
    url: '/services/carpet-cleaning',
    excerpt: 'Professional carpet steam cleaning using hot water extraction. Remove deep-seated dirt, stains, and odors for fresh, clean carpets.',
    category: 'Specialist Services',
    iconName: 'Wind',
    keywords: ['carpets', 'steam clean', 'stains', 'deep clean', 'hot water extraction']
  },
  {
    title: 'Professional Oven Cleaning',
    url: '/services/oven-cleaning',
    excerpt: 'Intensive oven cleaning service removing baked-on grease and carbon deposits. Eco-friendly products for safe, sparkling ovens.',
    category: 'Specialist Services',
    iconName: 'Flame',
    keywords: ['oven', 'grease removal', 'professional clean', 'carbon deposits', 'eco-friendly']
  },
  {
    title: 'Window & Glass Cleaning',
    url: '/services/window-cleaning',
    excerpt: 'Streak-free window cleaning inside and out. All glass surfaces, frames, and sills cleaned to perfection for maximum light.',
    category: 'Specialist Services',
    iconName: 'Eye',
    keywords: ['windows', 'glass', 'streak-free', 'internal external', 'frames', 'sills']
  },
  {
    title: 'Wall & Skirting Cleaning',
    url: '/services/wall-cleaning',
    excerpt: 'Remove marks, scuffs, and fingerprints from walls and skirting boards. Professional cleaning without damage to paintwork.',
    category: 'Detail Services',
    iconName: 'Layers',
    keywords: ['walls', 'skirting boards', 'marks', 'scuffs', 'fingerprints', 'paintwork']
  },
  {
    title: 'Appliance Deep Clean',
    url: '/services/appliance-cleaning',
    excerpt: 'Deep clean all appliances including fridge, dishwasher, washing machine, and more. Remove buildup and ensure hygienic operation.',
    category: 'Detail Services',
    iconName: 'Sparkles',
    keywords: ['fridge', 'dishwasher', 'washing machine', 'appliances', 'deep clean', 'hygienic']
  },
  {
    title: 'Inventory Checklist Service',
    url: '/services/inventory-service',
    excerpt: 'Professional inventory documentation with photo evidence. Comprehensive checklist ensuring all cleaning requirements met.',
    category: 'Support Services',
    iconName: 'CheckCircle2',
    keywords: ['inventory', 'checklist', 'documentation', 'evidence', 'photos', 'requirements']
  },
  {
    title: 'Deposit Back Guarantee',
    url: '/services/deposit-guarantee',
    excerpt: '100% deposit back guarantee. If your landlord rejects our clean, we will re-clean for free until standards met.',
    category: 'Support Services',
    iconName: 'Shield',
    keywords: ['deposit', 'guarantee', 'money back', 'landlord standards', 'assurance']
  },
  {
    title: 'Landlord Standards Compliance',
    url: '/services/landlord-standards',
    excerpt: 'Meeting all professional landlord requirements and industry standards. Certified cleaning for rental property compliance.',
    category: 'Support Services',
    iconName: 'Award',
    keywords: ['landlord requirements', 'compliance', 'professional standards', 'certified', 'rental']
  },
  {
    title: 'Emergency Same-Day Service',
    url: '/services/emergency-cleaning',
    excerpt: 'Urgent move-out cleaning available with same-day service. Fast turnaround for last-minute tenancy requirements.',
    category: 'Emergency Services',
    iconName: 'Zap',
    keywords: ['urgent', 'same day', 'emergency', 'quick turnaround', 'fast', 'last minute']
  }
]

export default function EndOfTenancyCleaningPage() {
  return (
    <ClientWrapper pageTitle="End of Tenancy Cleaning">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'BMad Carpet Cleaning',
            url: 'https://bmadcarpetcleaning.co.uk',
            logo: 'https://bmadcarpetcleaning.co.uk/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+44-7405-428259',
              contactType: 'customer service',
              areaServed: 'GB',
              availableLanguage: 'English'
            },
            sameAs: []
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'BMad Carpet Cleaning',
            image: 'https://bmadcarpetcleaning.co.uk/services/end-of-tenancy.jpg',
            '@id': 'https://bmadcarpetcleaning.co.uk',
            url: 'https://bmadcarpetcleaning.co.uk',
            telephone: '+44-7405-428259',
            priceRange: '££',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'GB'
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '08:00',
              closes: '20:00'
            },
            sameAs: []
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://bmadcarpetcleaning.co.uk'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://bmadcarpetcleaning.co.uk/services'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'End of Tenancy Cleaning',
                item: 'https://bmadcarpetcleaning.co.uk/services/end-of-tenancy-cleaning'
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'End of Tenancy Cleaning Services',
            description: 'Professional end of tenancy cleaning services with 100% deposit back guarantee',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['.speakable-headline', '.speakable-tldr', '.speakable-pricing', '.speakable-cta']
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'End of Tenancy Cleaning Checklist',
            description: 'Complete professional guide to end of tenancy cleaning for guaranteed deposit return',
            totalTime: 'PT4H',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Kitchen Deep Clean',
                text: 'Clean all kitchen surfaces, appliances, cupboards inside and out, countertops, backsplash, and remove all grease and grime.',
                itemListElement: [
                  { '@type': 'HowToDirection', text: 'Degrease all surfaces including oven, hob, and extractor' },
                  { '@type': 'HowToDirection', text: 'Clean inside all cupboards and drawers' },
                  { '@type': 'HowToDirection', text: 'Sanitize countertops, backsplash, and sink' }
                ]
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Bathroom Sanitization',
                text: 'Deep clean bathroom including toilet, shower, bath, tiles, grout, mirrors, and remove limescale and mold.',
                itemListElement: [
                  { '@type': 'HowToDirection', text: 'Remove limescale from taps, showerhead, and tiles' },
                  { '@type': 'HowToDirection', text: 'Sanitize toilet inside and out' },
                  { '@type': 'HowToDirection', text: 'Clean grout and remove mold' }
                ]
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Carpet Steam Cleaning',
                text: 'Professional steam clean all carpets using hot water extraction to remove deep-seated dirt, stains, and odors.',
                itemListElement: [
                  { '@type': 'HowToDirection', text: 'Vacuum thoroughly before steam cleaning' },
                  { '@type': 'HowToDirection', text: 'Apply pre-treatment to heavy stains' },
                  { '@type': 'HowToDirection', text: 'Hot water extraction with professional equipment' }
                ]
              },
              {
                '@type': 'HowToStep',
                position: 4,
                name: 'Window & Glass Cleaning',
                text: 'Clean all windows inside and out, including frames, sills, and glass surfaces for streak-free shine.',
                itemListElement: [
                  { '@type': 'HowToDirection', text: 'Clean window frames and sills' },
                  { '@type': 'HowToDirection', text: 'Polish glass inside and out' },
                  { '@type': 'HowToDirection', text: 'Ensure streak-free finish' }
                ]
              },
              {
                '@type': 'HowToStep',
                position: 5,
                name: 'Wall & Skirting Cleaning',
                text: 'Remove marks, scuffs, and fingerprints from walls and skirting boards without damaging paintwork.',
                itemListElement: [
                  { '@type': 'HowToDirection', text: 'Spot clean marks and scuffs' },
                  { '@type': 'HowToDirection', text: 'Clean skirting boards and door frames' },
                  { '@type': 'HowToDirection', text: 'Remove fingerprints and smudges' }
                ]
              },
              {
                '@type': 'HowToStep',
                position: 6,
                name: 'Appliance Deep Clean',
                text: 'Deep clean all appliances including fridge, freezer, oven, dishwasher, washing machine inside and out.',
                itemListElement: [
                  { '@type': 'HowToDirection', text: 'Defrost and clean fridge and freezer' },
                  { '@type': 'HowToDirection', text: 'Remove grease from oven and hob' },
                  { '@type': 'HowToDirection', text: 'Clean washing machine and dishwasher filters' }
                ]
              },
              {
                '@type': 'HowToStep',
                position: 7,
                name: 'Final Inspection',
                text: 'Complete inventory checklist ensuring all areas meet landlord standards with photo documentation.',
                itemListElement: [
                  { '@type': 'HowToDirection', text: 'Check all rooms against inventory' },
                  { '@type': 'HowToDirection', text: 'Take photo evidence of cleaning' },
                  { '@type': 'HowToDirection', text: 'Ensure landlord standards met' }
                ]
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How much does end of tenancy cleaning cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'End of tenancy cleaning costs vary based on property size. For a 1-bedroom flat, prices start from £150. A 2-bedroom property typically costs £180-£250, while a 3-bedroom house ranges from £250-£350. Larger 4+ bedroom properties cost £350-£500. Additional services like carpet cleaning, oven cleaning, or outdoor areas incur extra charges. We provide free quotes tailored to your specific property and requirements. Call 07405 428259 for an accurate quote.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you guarantee I will get my deposit back?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we offer a 100% deposit back guarantee on our end of tenancy cleaning services. If your landlord or letting agent rejects our clean due to cleaning issues, we will return and re-clean the affected areas completely free of charge until the required standards are met. This guarantee covers all areas we have cleaned and gives you complete peace of mind for your deposit return.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is included in your end of tenancy cleaning service?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our comprehensive end of tenancy cleaning includes: kitchen deep clean (all surfaces, appliances, cupboards inside/out, degreasing), bathroom sanitization (toilet, shower, bath, tiles, grout, limescale removal), all rooms (dusting, vacuuming, mopping, skirting boards, light switches, door frames), window cleaning inside, wall spot cleaning, and appliance cleaning. Optional extras include carpet steam cleaning, oven deep clean, outdoor areas, and upholstery cleaning.'
                }
              },
              {
                '@type': 'Question',
                name: 'How long does end of tenancy cleaning take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The duration depends on property size and condition. A 1-bedroom flat typically takes 3-4 hours, a 2-bedroom property takes 4-6 hours, a 3-bedroom house takes 6-8 hours, and larger 4+ bedroom properties take 8-10 hours. Properties requiring extra attention due to heavy soiling may take longer. We can provide same-day service for urgent moves and work efficiently to meet your moving deadlines.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do I need to be present during the cleaning?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No, you do not need to be present during the end of tenancy cleaning. Many tenants arrange for us to collect keys from the letting agent or leave them in a secure location. We are fully insured and trustworthy professionals. However, you are welcome to be present if you prefer. We will notify you when the cleaning is complete and can arrange key return to your agent or landlord.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can you clean the property on the same day I move out?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we offer same-day and emergency end of tenancy cleaning services. For same-day bookings, please call us as early as possible on 07405 428259. We recommend booking at least 48-72 hours in advance to guarantee your preferred time slot, especially during busy periods like end of month. Emergency cleaning may incur a small surcharge depending on availability and urgency.'
                }
              },
              {
                '@type': 'Question',
                name: 'Is carpet cleaning included in the price?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Carpet cleaning is available as an optional extra and is not included in the base end of tenancy cleaning price. We strongly recommend professional carpet steam cleaning as it is often a requirement in tenancy agreements. Our hot water extraction method provides deep cleaning that rental vacuum cleaners cannot achieve. Carpet cleaning costs £25-£40 per room depending on size and condition. We can provide a combined quote for better value.'
                }
              },
              {
                '@type': 'Question',
                name: 'What cleaning products do you use?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We use professional-grade cleaning products that are effective yet safe for all surfaces. Our products are a combination of eco-friendly and biodegradable solutions for general cleaning, and stronger specialized products for tough areas like ovens, bathrooms, and grease removal. All our cleaning agents meet health and safety standards and are safe for homes with pets and children. If you have specific product preferences or allergies, please let us know in advance.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you provide a cleaning checklist or certificate?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we provide a comprehensive end of tenancy cleaning checklist upon request. This checklist details all areas cleaned and can be presented to your landlord or letting agent as proof of professional cleaning. We also offer an inventory service with photo documentation for an additional fee. This provides visual evidence of the property condition and is especially useful for dispute resolution with deposit protection schemes.'
                }
              },
              {
                '@type': 'Question',
                name: 'What areas do you cover?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We provide end of tenancy cleaning services throughout the UK. Our professional cleaning teams are available in major cities and surrounding areas nationwide. Contact us on 07405 428259 to confirm coverage for your specific location and to receive a free, no-obligation quote tailored to your property.'
                }
              },
              {
                '@type': 'Question',
                name: 'What happens if the landlord is not satisfied with the clean?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'If your landlord or letting agent is not satisfied with any aspect of our cleaning, simply contact us with details of the issues within 48 hours of the clean. We will return to re-clean the affected areas completely free of charge under our deposit back guarantee. We request specific feedback so we can address the exact concerns. Our goal is 100% customer satisfaction and successful deposit return for every tenant we serve.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you clean furnished or unfurnished properties?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We clean both furnished and unfurnished rental properties. For best results, we recommend the property is empty or as empty as possible during cleaning. This allows us full access to all areas including behind furniture, under beds, and in corners. If furniture remains, we will clean around it and move lighter items where safe to do so. For furnished properties with upholstery requiring cleaning, this is available as an additional service.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can you clean the oven separately?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we offer professional oven cleaning as a standalone service or as an add-on to end of tenancy cleaning. Our oven cleaning service includes complete disassembly where possible, removal of baked-on grease and carbon deposits, cleaning of racks, trays, glass door, and housing. We use specialized eco-friendly degreasers that are highly effective yet safe. Oven cleaning takes 1-2 hours and costs £45-£75 depending on oven size and condition.'
                }
              },
              {
                '@type': 'Question',
                name: 'What if I need additional cleaning after the initial clean?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'If your landlord requests additional cleaning after our initial service, contact us immediately. Under our deposit back guarantee, we will return to address any legitimate cleaning concerns free of charge within 48 hours. For requests outside our original scope (such as areas not initially booked), we can provide these services at standard rates. We always aim to exceed landlord standards on the first clean to avoid callbacks.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do I book an end of tenancy clean?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Booking is easy. Call us on 07405 428259 or fill out our online quote form. We will need details including: property address, property size (number of bedrooms/bathrooms), current condition, move-out date, any additional services required (carpet cleaning, oven cleaning, outdoor areas), and key collection arrangement. We will provide a free quote and confirm your booking with a scheduled date and time. We recommend booking 1-2 weeks in advance when possible.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you clean outdoor areas like patios and gardens?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, outdoor cleaning is available as an additional service. This includes patio cleaning, balcony cleaning, outdoor furniture, clearing leaves and debris, and basic tidying. We use pressure washing for patios and decking where appropriate. Garden maintenance such as mowing lawns or weeding can be arranged through our partner services. Outdoor cleaning is particularly important if your tenancy agreement specifically mentions outdoor areas. Contact us for a quote including outdoor spaces.'
                }
              },
              {
                '@type': 'Question',
                name: 'Are you insured and qualified?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, BMad Carpet Cleaning is fully insured with public liability insurance covering up to £5 million. All our cleaning technicians are trained professionals with experience in end of tenancy cleaning and knowledge of landlord requirements. We use professional-grade equipment and follow industry best practices. Our service meets the standards required by letting agents and landlords nationwide, and we have excellent relationships with many local agencies across the UK.'
                }
              },
              {
                '@type': 'Question',
                name: 'What payment methods do you accept?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We accept multiple payment methods for your convenience including cash, bank transfer, and card payments. Payment is typically due upon completion of the cleaning service. For larger properties or additional services, we may request a deposit at booking. We provide invoices and receipts for all transactions which can be useful for your records and any deposit claim processes with your letting agent.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can you provide a quote over the phone?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we can provide an estimated quote over the phone based on your property details. For the most accurate quote, we need to know the number of bedrooms, bathrooms, overall property size, current condition, and any additional services required. For larger or unique properties, we may recommend a brief site visit to provide a precise quote. However, most standard residential properties can be accurately quoted over the phone or via our online form. Call 07405 428259 for your free quote.'
                }
              },
              {
                '@type': 'Question',
                name: 'What if I need to cancel or reschedule my booking?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We understand that moving plans can change. Please notify us as soon as possible if you need to cancel or reschedule. For cancellations or rescheduling with 48+ hours notice, there is no charge. For changes within 48 hours of the scheduled service, we may apply a cancellation fee of 50% of the booking value. For same-day cancellations, the full booking fee may apply. We always try to be flexible and work with you to find alternative arrangements where possible.'
                }
              }
            ]
          })
        }}
      />

      {/* Main Content */}
      <article className="max-w-6xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">End of Tenancy Cleaning</span>
        </nav>

        {/* Hero Section with TL;DR */}
        <header className="mb-12 text-center">
          <Badge variant="success" className="mb-4 text-sm">
            <Shield className="mr-1 h-3 w-3 inline" />
            100% Deposit Back Guarantee
          </Badge>
          <h1 className="speakable-headline text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional End of Tenancy Cleaning Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Expert move-out cleaning services with guaranteed deposit return. Comprehensive deep cleaning for landlords and tenants across the UK.
          </p>

          {/* TL;DR for LLMs */}
          <div className="speakable-tldr bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 max-w-4xl mx-auto mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
              <BadgeCheck className="h-5 w-5 text-blue-600" />
              Quick Summary: End of Tenancy Cleaning Services
            </h2>
            <ul className="text-left text-gray-700 space-y-2 max-w-2xl mx-auto">
              <li><strong>Service:</strong> Professional end of tenancy cleaning for rental properties</li>
              <li><strong>Coverage:</strong> UK-wide service available</li>
              <li><strong>Guarantee:</strong> 100% deposit back guarantee - free re-clean if landlord rejects</li>
              <li><strong>Price Range:</strong> £150-£500 depending on property size and condition</li>
              <li><strong>Duration:</strong> 3-10 hours based on property size</li>
              <li><strong>Includes:</strong> Kitchen, bathrooms, all rooms, windows, walls, appliances</li>
              <li><strong>Optional Extras:</strong> Carpet cleaning, oven deep clean, outdoor areas</li>
              <li><strong>Availability:</strong> Same-day emergency service available</li>
              <li><strong>Contact:</strong> Call <a href="tel:07405428259" className="text-blue-600 font-semibold hover:underline">07405 428259</a> for free quote</li>
              <li><strong>Last Updated:</strong> November 21, 2025</li>
            </ul>
          </div>

          <div className="speakable-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/quote">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-6">
                <Sparkles className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:07405428259">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                <Phone className="mr-2 h-5 w-5" />
                Call 07405 428259
              </Button>
            </a>
          </div>
        </header>

        {/* Trust Indicators */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-2 border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Deposit Guarantee</h3>
                <p className="text-sm text-gray-600">100% money back promise</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-blue-200 bg-blue-50">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Same-Day Service</h3>
                <p className="text-sm text-gray-600">Emergency cleaning available</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-purple-200 bg-purple-50">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Certified Team</h3>
                <p className="text-sm text-gray-600">Trained professionals</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-yellow-200 bg-yellow-50">
              <CardContent className="pt-6">
                <Star className="h-12 w-12 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">5-Star Rated</h3>
                <p className="text-sm text-gray-600">Trusted by tenants</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interactive Search Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200">
          <div className="text-center mb-8">
            <h2 className="speakable-headline text-3xl font-bold text-gray-900 mb-4">
              Explore Our End of Tenancy Cleaning Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Search through our comprehensive range of 12 specialist services designed to meet every landlord requirement and ensure your deposit return.
            </p>
          </div>
          <InteractiveSearch subtopics={subtopicCards} />
        </section>

        {/* Main Content Section 1: What is End of Tenancy Cleaning? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What is End of Tenancy Cleaning?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              End of tenancy cleaning, also known as move-out cleaning or lease-end cleaning, is a comprehensive deep cleaning service performed when a tenant vacates a rental property. This specialized cleaning goes far beyond regular household cleaning, targeting every corner, surface, and appliance to restore the property to its original condition as specified in the tenancy agreement.
            </p>
            <p>
              For tenants, end of tenancy cleaning is crucial for securing the return of your rental deposit. Most tenancy agreements include a clause requiring the property to be returned in the same clean condition as when you moved in, allowing for fair wear and tear. Landlords and letting agents conduct thorough inspections using detailed checklists, and any cleaning deficiencies can result in deposit deductions.
            </p>
            <p>
              Professional end of tenancy cleaning has become the industry standard, with most letting agents now recommending or requiring tenants to use certified cleaning companies. Unlike regular cleaning, end of tenancy cleaning involves intensive work on areas that are often neglected during occupancy such as inside ovens and appliances, behind furniture, grout lines, skirting boards, light fixtures, and window frames.
            </p>
            <p>
              The stakes are high when it comes to end of tenancy cleaning. With average deposits ranging from £800 to £1,500 or more, the cost of professional cleaning (typically £150-£500) represents a small investment compared to potential deposit deductions. Many tenants who attempt DIY cleaning end up losing significantly more from their deposit than the cost of hiring professionals would have been.
            </p>
            <p>
              At BMad Carpet Cleaning, we understand the stress and time pressure involved in moving out. Our end of tenancy cleaning service is specifically designed to meet the exacting standards of landlords and letting agents nationwide. We follow comprehensive checklists aligned with industry standards and provide a 100% deposit back guarantee, meaning if your landlord rejects our clean due to cleaning issues, we will return and re-clean the affected areas completely free of charge.
            </p>
          </div>
        </section>

        {/* Main Content Section 2: Comprehensive Cleaning Checklist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comprehensive End of Tenancy Cleaning Checklist
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our professional end of tenancy cleaning service covers every area of your rental property to ensure landlord standards are met. Here is the complete checklist of what we clean:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <ChefHat className="h-6 w-6" />
                  Kitchen Deep Clean
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>All worktops, surfaces, and splashbacks cleaned and sanitized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Cupboards and drawers cleaned inside and out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Oven, hob, and extractor fan degreased (or professional oven clean extra)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Fridge and freezer cleaned inside and out (defrosted if needed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Dishwasher exterior cleaned, filter checked</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Sink and taps descaled and polished</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>All tiles cleaned and grout lines scrubbed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Floor swept, mopped, and sanitized</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Droplet className="h-6 w-6" />
                  Bathroom Sanitization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Toilet cleaned and sanitized inside and out, including base</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Bath and shower cleaned, limescale removed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Shower screen and doors descaled and polished</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>All tiles and grout cleaned, mold removed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Sink, taps, and mirror cleaned and polished</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Bathroom cabinets cleaned inside and out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Extractor fan cleaned and dusted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Floor scrubbed, mopped, and sanitized</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Home className="h-6 w-6" />
                  Living Areas & Bedrooms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>All surfaces dusted including shelves, ledges, and picture rails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Skirting boards, door frames, and architraves cleaned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Light switches and plug sockets spot cleaned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Radiators cleaned and dusted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Windows cleaned inside, frames and sills wiped</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Floors vacuumed and mopped (carpets extra for steam clean)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Wardrobes cleaned inside if empty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Cobwebs removed from ceilings and corners</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Sparkles className="h-6 w-6" />
                  Additional Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Hallways and staircases cleaned and vacuumed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Front and back doors cleaned inside and out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Utility room cleaned including washing machine exterior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Airing cupboards and storage areas dusted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Light fittings and lampshades dusted (where accessible)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Bins cleaned inside and out, area sanitized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>All rubbish removed from property</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Final inspection and quality check</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Package className="h-5 w-5 text-yellow-600" />
              Optional Extra Services
            </h3>
            <p className="text-gray-700 mb-4">
              While our comprehensive end of tenancy clean covers most areas, the following services are available as optional extras:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-center gap-2">
                <Wind className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span><strong>Carpet Steam Cleaning:</strong> £25-£40 per room</span>
              </li>
              <li className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <span><strong>Professional Oven Deep Clean:</strong> £45-£75</span>
              </li>
              <li className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span><strong>External Window Cleaning:</strong> £30-£60</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span><strong>Upholstery Cleaning:</strong> £40-£80 per item</span>
              </li>
              <li className="flex items-center gap-2">
                <Home className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span><strong>Outdoor Patio/Balcony:</strong> £30-£60</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-gray-600 flex-shrink-0" />
                <span><strong>Inventory Service with Photos:</strong> £50-£100</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Main Content Section 3: Kitchen Deep Clean Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Professional Kitchen Deep Clean for End of Tenancy
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              The kitchen is the most scrutinized area during end of tenancy inspections and is often where the biggest deposit deductions occur. Landlords and letting agents expect kitchens to be returned to a hygienic, grease-free condition with all appliances functioning and clean inside and out.
            </p>
            <p>
              Our professional kitchen deep clean starts with degreasing all surfaces. Years of cooking can leave stubborn grease deposits on cupboard exteriors, splashbacks, extractor fans, and around the hob area. We use professional-grade degreasers that break down these deposits without damaging surfaces, something standard household cleaners often cannot achieve.
            </p>
            <p>
              Cupboards and drawers receive thorough attention. We clean inside every cupboard and drawer, removing crumbs, spills, and sticky residue. The exterior surfaces, handles, and edges are degreased and polished. This level of detail is crucial as letting agents often run their fingers along cupboard tops and edges during inspections.
            </p>
            <p>
              Appliance cleaning is a critical component. The refrigerator is defrosted if necessary, with all shelves and drawers removed and washed. The interior is sanitized to remove odors, and the exterior is cleaned including the often-neglected back and sides. The freezer receives the same treatment. Dishwashers are wiped inside and out with filters checked and cleaned. Washing machines in the kitchen are cleaned externally.
            </p>
            <p>
              The oven, hob, and extractor fan are cleaned to remove grease and food residue. For moderate soiling, this is included in our standard service. However, for heavily soiled ovens with baked-on carbon deposits, we strongly recommend our professional oven cleaning service as an extra. This intensive service involves disassembling oven components where possible and using specialized degreasers, ensuring your oven looks and works like new.
            </p>
            <p>
              Sinks and taps are descaled to remove limescale buildup, particularly important in hard water areas. Chrome surfaces are polished to a shine. All tiles and grout lines are scrubbed to remove stains and discoloration. Finally, the kitchen floor is swept and mopped with a suitable cleaning solution, paying special attention to edges and corners where dirt accumulates.
            </p>
          </div>
        </section>

        {/* Main Content Section 4: Bathroom Sanitization Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Complete Bathroom Sanitization for Move-Out
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Bathroom cleanliness is paramount for end of tenancy inspections. This is the second most common area for deposit deductions after kitchens. Landlords expect bathrooms to be sparkling clean, sanitized, and free from limescale, mold, and soap scum.
            </p>
            <p>
              Our bathroom sanitization begins with the toilet, which is cleaned and disinfected thoroughly inside the bowl, under the rim, around the base, and behind the toilet where dust and grime collect. We use professional-strength sanitizers that kill 99.9% of bacteria and viruses, ensuring a hygienic result.
            </p>
            <p>
              Limescale removal is a major focus in hard water areas. Showerheads, taps, tiles, and shower screens can develop significant limescale buildup over time. We use professional descaling products that safely remove even heavy limescale deposits without scratching chrome or damaging surfaces. Glass shower screens are treated with care to achieve a streak-free, crystal-clear finish.
            </p>
            <p>
              Bath and shower areas are scrubbed to remove soap scum, body oil residue, and watermarks. Sealant and grout lines receive special attention as these areas commonly develop mold or discoloration during tenancy. We use mold removers where necessary and clean grout lines with specialized brushes to restore them to their original color.
            </p>
            <p>
              Bathroom tiles are cleaned from floor to ceiling where present. We remove water stains, toothpaste splashes, and any mold or mildew. Bathroom cabinets and storage units are cleaned inside and out, including mirrors which are polished to a streak-free shine. The extractor fan is dusted and wiped, and the bathroom floor is scrubbed and sanitized, paying special attention to corners and behind the toilet.
            </p>
          </div>
        </section>

        {/* Main Content Section 5: Carpet & Upholstery Treatment */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Professional Carpet & Upholstery Treatment
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Carpets and upholstery are often specified in tenancy agreements as requiring professional cleaning upon move-out. Many landlords make carpet cleaning a mandatory requirement and will deduct costs from deposits if not carried out professionally. For this reason, we strongly recommend adding our professional carpet steam cleaning service to your end of tenancy clean.
            </p>
            <p>
              Our carpet cleaning uses the hot water extraction method, also known as steam cleaning, which is the most effective deep cleaning technique available. This method injects hot water and cleaning solution deep into carpet fibers under pressure, then immediately extracts it along with dissolved dirt, allergens, and odors. The result is far superior to rental carpet cleaners or DIY methods.
            </p>
            <p>
              Before steam cleaning begins, we vacuum thoroughly to remove loose dirt and debris. We then inspect carpets for specific stains or heavily soiled areas. Pre-treatment solutions are applied to stubborn stains such as red wine, coffee, grease, or pet stains. This pre-treatment breaks down the stain molecules, making them easier to extract during the main cleaning process.
            </p>
            <p>
              The hot water extraction process uses water heated to optimal temperatures (around 60-70°C) combined with professional cleaning agents. The solution penetrates deep into carpet backing and underlay, extracting ingrained dirt that has accumulated over the entire tenancy. Our powerful truck-mounted or portable extraction equipment removes 95% of moisture, meaning carpets dry within 4-6 hours in most conditions.
            </p>
            <p>
              Upholstery cleaning is available as an additional service for any furnished properties where sofas, chairs, or mattresses require cleaning. We use appropriate cleaning methods based on fabric type, ensuring safe and effective results without over-wetting or damaging delicate materials.
            </p>
          </div>
        </section>

        {/* Main Content Section 6: Deposit Recovery Success */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Guaranteed Deposit Recovery Success
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Losing part or all of your rental deposit due to cleaning issues is frustrating and expensive. With average deposits ranging from £800 to £1,500 or more, even a small percentage deduction represents a significant financial loss. This is why we offer our 100% deposit back guarantee on all end of tenancy cleaning services.
            </p>
            <p>
              Our guarantee is straightforward: if your landlord or letting agent rejects our end of tenancy clean due to cleaning-related issues, we will return to the property and re-clean the affected areas completely free of charge. There are no hidden conditions, no time limits (within reason), and no additional costs. We stand behind our work because we are confident in the quality of our service.
            </p>
            <p>
              This guarantee provides you with complete peace of mind during the stressful moving process. You can focus on your move knowing that the cleaning is handled professionally and that your deposit is protected. In the rare event that a re-clean is needed, simply contact us with details of the landlord's concerns, and we will schedule a return visit promptly.
            </p>
            <p>
              Our success rate for first-time deposit approval is exceptionally high. We achieve this through thorough training of our cleaning technicians, adherence to comprehensive checklists aligned with industry standards, and use of professional-grade equipment and cleaning products. Our team understands exactly what landlords and letting agents look for during inspections.
            </p>
            <p>
              We have built strong relationships with letting agencies nationwide over the years. They know our work meets their standards consistently, and many actively recommend us to their tenants. This reputation is built on years of reliable service and our unwavering commitment to customer satisfaction.
            </p>
          </div>
        </section>

        {/* Main Content Section 7: DIY vs Professional Service */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            DIY End of Tenancy Cleaning vs Professional Service
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Many tenants consider attempting end of tenancy cleaning themselves to save money. While this is understandable, it often proves to be a false economy. The reality is that most DIY cleaning attempts fail to meet landlord standards, resulting in deposit deductions that far exceed the cost of hiring professionals.
            </p>
            <p>
              Professional cleaners have advantages that DIY efforts cannot match. We use commercial-grade cleaning equipment including professional carpet cleaners, industrial vacuums, steam cleaners, and specialized tools for reaching difficult areas. These machines deliver cleaning power that consumer equipment simply cannot replicate.
            </p>
            <p>
              Our cleaning products are professional-strength formulations designed for specific purposes such as heavy-duty degreasing, limescale removal, mold elimination, and sanitization. These products are more effective than supermarket alternatives and are used in correct concentrations for optimal results without damaging surfaces.
            </p>
            <p>
              Time and physical effort are major considerations. A thorough end of tenancy clean takes 4-10 hours depending on property size and condition. This is intensive physical work requiring bending, stretching, scrubbing, and sustained effort. When you are already stressed with packing, moving logistics, and other tasks, dedicating this time to cleaning is challenging.
            </p>
            <p>
              Expertise matters significantly. Our cleaning technicians know exactly what landlords and letting agents check during inspections. They know which areas commonly cause deposit deductions and ensure these receive appropriate attention. They understand which cleaning methods work best for different surfaces and materials, avoiding common mistakes that can damage property or leave residue.
            </p>
            <p>
              The financial comparison reveals the true value of professional cleaning. Our end of tenancy cleaning costs £150-£500 depending on property size. Compare this to deposit deductions which typically range from £200-£600 or more for cleaning deficiencies. When you factor in the cost of equipment rental (carpet cleaner £30-£50, other tools), cleaning products (£50-£100 for adequate supplies), and the significant time investment, professional cleaning represents excellent value for money.
            </p>
          </div>
        </section>

        {/* Main Content Section 8: Pricing & Packages */}
        <section className="mb-16">
          <h2 className="speakable-pricing text-3xl font-bold text-gray-900 mb-6">
            End of Tenancy Cleaning Pricing & Packages
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our end of tenancy cleaning prices are competitive and transparent. We provide a comprehensive service that meets landlord standards and includes our 100% deposit back guarantee.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2 border-blue-300 hover:border-blue-500 transition-all hover:shadow-lg">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-center text-2xl text-blue-900">Studio / 1-Bed</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-center text-gray-900 mb-2">£150-£200</p>
                <p className="text-center text-gray-600 mb-6">3-4 hours</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Kitchen deep clean</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Bathroom sanitization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>All rooms cleaned</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Windows inside</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Deposit guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 hover:border-green-500 transition-all hover:shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-center text-2xl text-green-900">2-Bedroom</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-center text-gray-900 mb-2">£180-£250</p>
                <p className="text-center text-gray-600 mb-6">4-6 hours</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Kitchen deep clean</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>1-2 bathroom sanitization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>All rooms cleaned</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Windows inside</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Deposit guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-300 hover:border-purple-500 transition-all hover:shadow-lg">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-center text-2xl text-purple-900">3+ Bedrooms</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-center text-gray-900 mb-2">£250-£500</p>
                <p className="text-center text-gray-600 mb-6">6-10 hours</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Kitchen deep clean</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>2+ bathroom sanitization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>All rooms cleaned</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Windows inside</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Deposit guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-xl flex items-center gap-2">
              <Package className="h-6 w-6 text-yellow-600" />
              Optional Extra Services - Recommended Additions
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-start gap-3">
                <Wind className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Carpet Steam Cleaning</p>
                  <p className="text-sm">£25-£40 per room (HIGHLY RECOMMENDED)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Flame className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Professional Oven Deep Clean</p>
                  <p className="text-sm">£45-£75 (HIGHLY RECOMMENDED)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Eye className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">External Window Cleaning</p>
                  <p className="text-sm">£30-£60</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Upholstery Cleaning</p>
                  <p className="text-sm">£40-£80 per item</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Home className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Outdoor Areas (Patio/Balcony)</p>
                  <p className="text-sm">£30-£60</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="h-6 w-6 text-gray-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Inventory Service with Photos</p>
                  <p className="text-sm">£50-£100</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section 9: Common Mistakes to Avoid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Common End of Tenancy Cleaning Mistakes to Avoid
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Learning from common mistakes can help protect your deposit. Here are the most frequent errors tenants make during end of tenancy cleaning:
          </p>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Leaving Cleaning Until the Last Day</h3>
                    <p className="text-gray-700">
                      The most common mistake is underestimating the time required and leaving cleaning until moving day. This leads to rushed, inadequate cleaning and enormous stress. Book professional cleaners at least 1-2 weeks before your move-out date, or if DIY cleaning, start at least 3-5 days early.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Ban className="h-8 w-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Neglecting Hidden Areas</h3>
                    <p className="text-gray-700">
                      Letting agents specifically check areas that are commonly overlooked: inside kitchen cupboards, on top of cupboards, behind appliances, under sinks, grout lines, inside window frames, behind radiators, and skirting boards. These areas must be cleaned thoroughly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Using Wrong Cleaning Products</h3>
                    <p className="text-gray-700">
                      General-purpose cleaners are insufficient for end of tenancy cleaning. You need specialized products: heavy-duty degreasers for kitchens, limescale removers for bathrooms, mold removers, and professional sanitizers. Using wrong products can damage surfaces or leave residue.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Ban className="h-8 w-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Skipping Carpet Cleaning</h3>
                    <p className="text-gray-700">
                      Many tenancy agreements require professional carpet cleaning. Even if not explicitly stated, landlords expect carpets to be professionally cleaned. Vacuuming is not sufficient. Rental carpet cleaners rarely achieve professional standards. Budget for professional carpet steam cleaning.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Inadequate Oven Cleaning</h3>
                    <p className="text-gray-700">
                      Ovens are the single most common cause of deposit deductions. Self-cleaning functions or supermarket oven cleaners cannot remove heavy carbon buildup and baked-on grease. Professional oven cleaning is worth the £45-£75 investment to avoid £100-£200+ deposit deductions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content Section 10: Landlord Standards & Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Understanding Landlord Standards & Requirements
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Landlords and letting agents use detailed checklists during end of tenancy inspections. These checklists are based on the original inventory and check-in report created when you moved in. Understanding what inspectors look for helps ensure your cleaning meets the required standards.
            </p>
            <p>
              The legal standard is that the property must be returned in the same clean condition as at the start of the tenancy, allowing for fair wear and tear. Fair wear and tear refers to reasonable deterioration from normal use, such as minor carpet wear in high-traffic areas or slight fading of paintwork. It does not include cleaning-related issues, which are entirely preventable.
            </p>
            <p>
              Professional landlords and letting agents typically conduct inspections room by room, checking both general cleanliness and specific areas known to accumulate dirt. They run fingers along surfaces to check for dust, open all cupboards to check inside, inspect behind appliances where accessible, examine grout lines and sealant, check under sinks and inside toilet bowls, and test windows for clean glass and frames.
            </p>
            <p>
              Photographic evidence is commonly used. Agents photograph any areas that fail to meet standards. This evidence supports deposit deduction claims with deposit protection schemes. Professional cleaning provides you with evidence that the property was cleaned to appropriate standards, which can be crucial if disputes arise.
            </p>
            <p>
              Many letting agents have preferred cleaning companies whose work they trust. BMad Carpet Cleaning has built strong relationships with letting agencies nationwide through years of consistently meeting their standards. When you book with us, you benefit from this professional recognition and credibility with agents.
            </p>
          </div>
        </section>

        {/* FAQ Section - 20 Questions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions About End of Tenancy Cleaning
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'How much does end of tenancy cleaning cost?',
                a: 'End of tenancy cleaning costs vary based on property size. For a 1-bedroom flat, prices start from £150. A 2-bedroom property typically costs £180-£250, while a 3-bedroom house ranges from £250-£350. Larger 4+ bedroom properties cost £350-£500. Additional services like carpet cleaning, oven cleaning, or outdoor areas incur extra charges. We provide free quotes tailored to your specific property and requirements. Call 07405 428259 for an accurate quote.'
              },
              {
                q: 'Do you guarantee I will get my deposit back?',
                a: 'Yes, we offer a 100% deposit back guarantee on our end of tenancy cleaning services. If your landlord or letting agent rejects our clean due to cleaning issues, we will return and re-clean the affected areas completely free of charge until the required standards are met. This guarantee covers all areas we have cleaned and gives you complete peace of mind for your deposit return.'
              },
              {
                q: 'What is included in your end of tenancy cleaning service?',
                a: 'Our comprehensive end of tenancy cleaning includes: kitchen deep clean (all surfaces, appliances, cupboards inside/out, degreasing), bathroom sanitization (toilet, shower, bath, tiles, grout, limescale removal), all rooms (dusting, vacuuming, mopping, skirting boards, light switches, door frames), window cleaning inside, wall spot cleaning, and appliance cleaning. Optional extras include carpet steam cleaning, oven deep clean, outdoor areas, and upholstery cleaning.'
              },
              {
                q: 'How long does end of tenancy cleaning take?',
                a: 'The duration depends on property size and condition. A 1-bedroom flat typically takes 3-4 hours, a 2-bedroom property takes 4-6 hours, a 3-bedroom house takes 6-8 hours, and larger 4+ bedroom properties take 8-10 hours. Properties requiring extra attention due to heavy soiling may take longer. We can provide same-day service for urgent moves and work efficiently to meet your moving deadlines.'
              },
              {
                q: 'Do I need to be present during the cleaning?',
                a: 'No, you do not need to be present during the end of tenancy cleaning. Many tenants arrange for us to collect keys from the letting agent or leave them in a secure location. We are fully insured and trustworthy professionals. However, you are welcome to be present if you prefer. We will notify you when the cleaning is complete and can arrange key return to your agent or landlord.'
              },
              {
                q: 'Can you clean the property on the same day I move out?',
                a: 'Yes, we offer same-day and emergency end of tenancy cleaning services. For same-day bookings, please call us as early as possible on 07405 428259. We recommend booking at least 48-72 hours in advance to guarantee your preferred time slot, especially during busy periods like end of month. Emergency cleaning may incur a small surcharge depending on availability and urgency.'
              },
              {
                q: 'Is carpet cleaning included in the price?',
                a: 'Carpet cleaning is available as an optional extra and is not included in the base end of tenancy cleaning price. We strongly recommend professional carpet steam cleaning as it is often a requirement in tenancy agreements. Our hot water extraction method provides deep cleaning that rental vacuum cleaners cannot achieve. Carpet cleaning costs £25-£40 per room depending on size and condition. We can provide a combined quote for better value.'
              },
              {
                q: 'What cleaning products do you use?',
                a: 'We use professional-grade cleaning products that are effective yet safe for all surfaces. Our products are a combination of eco-friendly and biodegradable solutions for general cleaning, and stronger specialized products for tough areas like ovens, bathrooms, and grease removal. All our cleaning agents meet health and safety standards and are safe for homes with pets and children. If you have specific product preferences or allergies, please let us know in advance.'
              },
              {
                q: 'Do you provide a cleaning checklist or certificate?',
                a: 'Yes, we provide a comprehensive end of tenancy cleaning checklist upon request. This checklist details all areas cleaned and can be presented to your landlord or letting agent as proof of professional cleaning. We also offer an inventory service with photo documentation for an additional fee. This provides visual evidence of the property condition and is especially useful for dispute resolution with deposit protection schemes.'
              },
              {
                q: 'What areas do you cover?',
                a: 'We provide end of tenancy cleaning services throughout the UK. Our professional cleaning teams are available in major cities and surrounding areas nationwide. Contact us on 07405 428259 to confirm coverage for your specific location and to receive a free, no-obligation quote tailored to your property.'
              },
              {
                q: 'What happens if the landlord is not satisfied with the clean?',
                a: 'If your landlord or letting agent is not satisfied with any aspect of our cleaning, simply contact us with details of the issues within 48 hours of the clean. We will return to re-clean the affected areas completely free of charge under our deposit back guarantee. We request specific feedback so we can address the exact concerns. Our goal is 100% customer satisfaction and successful deposit return for every tenant we serve.'
              },
              {
                q: 'Do you clean furnished or unfurnished properties?',
                a: 'We clean both furnished and unfurnished rental properties. For best results, we recommend the property is empty or as empty as possible during cleaning. This allows us full access to all areas including behind furniture, under beds, and in corners. If furniture remains, we will clean around it and move lighter items where safe to do so. For furnished properties with upholstery requiring cleaning, this is available as an additional service.'
              },
              {
                q: 'Can you clean the oven separately?',
                a: 'Yes, we offer professional oven cleaning as a standalone service or as an add-on to end of tenancy cleaning. Our oven cleaning service includes complete disassembly where possible, removal of baked-on grease and carbon deposits, cleaning of racks, trays, glass door, and housing. We use specialized eco-friendly degreasers that are highly effective yet safe. Oven cleaning takes 1-2 hours and costs £45-£75 depending on oven size and condition.'
              },
              {
                q: 'What if I need additional cleaning after the initial clean?',
                a: 'If your landlord requests additional cleaning after our initial service, contact us immediately. Under our deposit back guarantee, we will return to address any legitimate cleaning concerns free of charge within 48 hours. For requests outside our original scope (such as areas not initially booked), we can provide these services at standard rates. We always aim to exceed landlord standards on the first clean to avoid callbacks.'
              },
              {
                q: 'How do I book an end of tenancy clean?',
                a: 'Booking is easy. Call us on 07405 428259 or fill out our online quote form. We will need details including: property address, property size (number of bedrooms/bathrooms), current condition, move-out date, any additional services required (carpet cleaning, oven cleaning, outdoor areas), and key collection arrangement. We will provide a free quote and confirm your booking with a scheduled date and time. We recommend booking 1-2 weeks in advance when possible.'
              },
              {
                q: 'Do you clean outdoor areas like patios and gardens?',
                a: 'Yes, outdoor cleaning is available as an additional service. This includes patio cleaning, balcony cleaning, outdoor furniture, clearing leaves and debris, and basic tidying. We use pressure washing for patios and decking where appropriate. Garden maintenance such as mowing lawns or weeding can be arranged through our partner services. Outdoor cleaning is particularly important if your tenancy agreement specifically mentions outdoor areas. Contact us for a quote including outdoor spaces.'
              },
              {
                q: 'Are you insured and qualified?',
                a: 'Yes, BMad Carpet Cleaning is fully insured with public liability insurance covering up to £5 million. All our cleaning technicians are trained professionals with experience in end of tenancy cleaning and knowledge of landlord requirements. We use professional-grade equipment and follow industry best practices. Our service meets the standards required by letting agents and landlords nationwide, and we have excellent relationships with many local agencies across the UK.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept multiple payment methods for your convenience including cash, bank transfer, and card payments. Payment is typically due upon completion of the cleaning service. For larger properties or additional services, we may request a deposit at booking. We provide invoices and receipts for all transactions which can be useful for your records and any deposit claim processes with your letting agent.'
              },
              {
                q: 'Can you provide a quote over the phone?',
                a: 'Yes, we can provide an estimated quote over the phone based on your property details. For the most accurate quote, we need to know the number of bedrooms, bathrooms, overall property size, current condition, and any additional services required. For larger or unique properties, we may recommend a brief site visit to provide a precise quote. However, most standard residential properties can be accurately quoted over the phone or via our online form. Call 07405 428259 for your free quote.'
              },
              {
                q: 'What if I need to cancel or reschedule my booking?',
                a: 'We understand that moving plans can change. Please notify us as soon as possible if you need to cancel or reschedule. For cancellations or rescheduling with 48+ hours notice, there is no charge. For changes within 48 hours of the scheduled service, we may apply a cancellation fee of 50% of the booking value. For same-day cancellations, the full booking fee may apply. We always try to be flexible and work with you to find alternative arrangements where possible.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-blue-400 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 flex items-start gap-3">
                    <HeartHandshake className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span>{faq.q}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white">
          <Shield className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="speakable-cta text-4xl font-bold mb-6">
            Get Your Deposit Back - Guaranteed
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Professional end of tenancy cleaning services with 100% deposit back guarantee. Let us handle the cleaning while you focus on your move. Same-day service available nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/quote">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-10 py-6">
                <Sparkles className="mr-2 h-6 w-6" />
                Get Free Quote Today
              </Button>
            </Link>
            <a href="tel:07405428259">
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent">
                <Phone className="mr-2 h-6 w-6" />
                Call 07405 428259
              </Button>
            </a>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            Last Updated: November 21, 2025 | Article by BMad Carpet Cleaning Team
          </p>
        </section>
      </article>
    </ClientWrapper>
  )
}
