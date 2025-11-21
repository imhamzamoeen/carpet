/**
 * Commercial Cleaning Manchester - Cluster/Pillar Page
 *
 * B2B-focused hub page covering all aspects of commercial carpet cleaning
 * Serves as authoritative resource for businesses with 3000-5000 words
 * Links to industry-specific content and commercial cleaning services
 */

import Link from 'next/link'
import type { Metadata } from 'next'
import {
  CheckCircle, Shield, Award, Star, ArrowRight, Users, Building2, Clock,
  Sparkles, Zap, Home, Phone, Calendar, TrendingUp, Target, CheckSquare,
  Briefcase, Hotel, UtensilsCrossed, Store, Heart, GraduationCap, Leaf,
  Moon, AlertCircle, Lightbulb, FileText, BadgeCheck
} from 'lucide-react'

import { Button } from '@/components/ui'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

import ClientWrapper from './client-wrapper'
import InteractiveSearch from './interactive-client'

export const metadata: Metadata = {
  title: 'Commercial Cleaning Manchester | Professional Business Carpet Cleaning Services',
  description: 'Expert commercial carpet cleaning for offices, hotels, restaurants & retail in Manchester. Flexible scheduling, minimal disruption, professional results. From £2/sqm. Get business quote.',
  keywords: [
    'commercial cleaning Manchester',
    'commercial carpet cleaning Manchester',
    'office carpet cleaning Manchester',
    'hotel carpet cleaning Manchester',
    'restaurant carpet cleaning Manchester',
    'retail carpet cleaning Manchester',
    'business cleaning services Manchester',
    'contract cleaning Manchester',
    'commercial cleaning contracts',
    'out of hours cleaning Manchester'
  ],

  alternates: {
    canonical: 'https://blowupcleaners.co.uk/services/commercial-cleaning',
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
    title: 'Commercial Cleaning Manchester | Professional Business Services',
    description: 'Expert commercial carpet cleaning for offices, hotels, restaurants & retail. Flexible scheduling, minimal disruption, professional results.',
    url: 'https://blowupcleaners.co.uk/services/commercial-cleaning',
    siteName: 'Blowup Cleaners',
    locale: 'en_GB',
    type: 'website',
    images: [{
      url: 'https://blowupcleaners.co.uk/og-commercial-cleaning.jpg',
      width: 1200,
      height: 630,
      alt: 'Professional commercial carpet cleaning services in Manchester'
    }]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Manchester | Professional Business Services',
    description: 'Expert commercial carpet cleaning for offices, hotels, restaurants & retail in Manchester',
    images: ['https://blowupcleaners.co.uk/og-commercial-cleaning.jpg']
  }
}

// Subtopic navigation cards (12 industry-focused items)
const subtopicCards = [
  {
    title: 'Office Carpet Cleaning',
    url: '#office',
    excerpt: 'Professional carpet cleaning for corporate offices, workstations, meeting rooms, and reception areas.',
    category: 'Industries',
    iconName: 'Briefcase',
    keywords: ['office', 'corporate', 'workplace', 'business premises']
  },
  {
    title: 'Hotel & Hospitality Cleaning',
    url: '#hotels',
    excerpt: 'Specialized cleaning for hotels, guest rooms, lobbies, conference facilities, and hospitality venues.',
    category: 'Industries',
    iconName: 'Hotel',
    keywords: ['hotel', 'hospitality', 'guest rooms', 'conference']
  },
  {
    title: 'Restaurant & Cafe Cleaning',
    url: '#restaurants',
    excerpt: 'High-traffic commercial cleaning for dining areas, bars, cafes, and food service establishments.',
    category: 'Industries',
    iconName: 'UtensilsCrossed',
    keywords: ['restaurant', 'cafe', 'dining', 'food service']
  },
  {
    title: 'Retail Store Cleaning',
    url: '#retail',
    excerpt: 'Professional cleaning for shop floors, fitting rooms, customer areas, and retail spaces.',
    category: 'Industries',
    iconName: 'Store',
    keywords: ['retail', 'shop', 'store', 'customer areas']
  },
  {
    title: 'Healthcare Facility Cleaning',
    url: '#healthcare',
    excerpt: 'Specialist cleaning for clinics, care homes, medical offices with high hygiene standards.',
    category: 'Industries',
    iconName: 'Heart',
    keywords: ['healthcare', 'medical', 'clinic', 'care home']
  },
  {
    title: 'School & Education Cleaning',
    url: '#education',
    excerpt: 'Professional cleaning for schools, universities, classrooms, halls, and educational facilities.',
    category: 'Industries',
    iconName: 'GraduationCap',
    keywords: ['school', 'education', 'university', 'classroom']
  },
  {
    title: 'Contract Cleaning Services',
    url: '#contracts',
    excerpt: 'Regular maintenance contracts with flexible scheduling, volume discounts, and priority service.',
    category: 'Services',
    iconName: 'FileText',
    keywords: ['contract', 'maintenance', 'regular', 'scheduled']
  },
  {
    title: 'Out-of-Hours Service',
    url: '#out-of-hours',
    excerpt: 'Evening, weekend, and overnight cleaning to minimize disruption to your business operations.',
    category: 'Scheduling',
    iconName: 'Moon',
    keywords: ['out of hours', 'evening', 'weekend', 'overnight']
  },
  {
    title: 'Emergency Commercial Cleaning',
    url: '#emergency',
    excerpt: 'Same-day emergency response for floods, spills, and urgent commercial cleaning situations.',
    category: 'Services',
    iconName: 'AlertCircle',
    keywords: ['emergency', 'urgent', 'same day', 'fast response']
  },
  {
    title: 'Large-Scale Equipment',
    url: '#equipment',
    excerpt: 'Industrial truck-mounted systems for efficient cleaning of large commercial spaces.',
    category: 'Services',
    iconName: 'Zap',
    keywords: ['equipment', 'industrial', 'large scale', 'commercial grade']
  },
  {
    title: 'Commercial Pricing Models',
    url: '#pricing',
    excerpt: 'Transparent pricing: per square meter, per visit, or annual contracts with volume discounts.',
    category: 'Pricing',
    iconName: 'Target',
    keywords: ['pricing', 'cost', 'quote', 'rates']
  },
  {
    title: 'Certifications & Insurance',
    url: '#certifications',
    excerpt: 'Fully insured, IICRC certified, trained staff with health & safety compliance for businesses.',
    category: 'Trust',
    iconName: 'BadgeCheck',
    keywords: ['certified', 'insured', 'compliance', 'professional']
  }
]

// FAQ data (20 business-focused questions)
const faqData = [
  {
    question: 'How much does commercial carpet cleaning cost in Manchester?',
    answer: 'Commercial carpet cleaning in Manchester typically costs £2-£4 per square meter for standard cleaning, or £25-£40 per room for smaller offices. Large-scale projects (500+ sqm) receive volume discounts. Hotels and hospitality venues are quoted £2.50-£5 per room depending on size. We offer flexible pricing including per-visit rates, monthly maintenance contracts, and annual agreements with significant savings (typically 15-30% off standard rates). All quotes are free, transparent, and tailored to your business needs.'
  },
  {
    question: 'Do you offer commercial cleaning contracts?',
    answer: 'Yes, we provide flexible commercial cleaning contracts tailored to your business schedule. Options include: weekly maintenance contracts (ideal for high-traffic offices), monthly deep cleaning contracts (perfect for most businesses), quarterly intensive cleaning (suitable for lower-traffic areas), and annual contracts with priority scheduling and volume discounts. Contract benefits include: dedicated account manager, priority booking, consistent cleaning team, volume discounts (15-30% savings), flexible payment terms, and guaranteed response times for emergencies.'
  },
  {
    question: 'Can you clean during business hours or do you offer out-of-hours service?',
    answer: 'We offer both in-hours and out-of-hours commercial cleaning to suit your business operations. Out-of-hours service includes: evening cleaning (after 6pm), overnight cleaning (10pm-6am), weekend cleaning (Saturday/Sunday), and early morning cleaning (before 8am). This flexibility minimizes disruption to staff and customers. Many businesses prefer out-of-hours cleaning for: zero operational disruption, no customer interference, faster drying times overnight, secure premises access arrangements, and staff can return to freshly cleaned spaces. Out-of-hours may incur small scheduling premium but provides maximum convenience.'
  },
  {
    question: 'What commercial industries do you specialize in?',
    answer: 'We specialize in carpet cleaning for diverse commercial sectors: Office & Corporate (workspaces, meeting rooms, reception areas, break rooms), Hotels & Hospitality (guest rooms, lobbies, conference facilities, restaurants), Restaurants & Cafes (dining areas, bars, carpeted sections), Retail Stores (shop floors, fitting rooms, customer areas), Healthcare Facilities (clinics, care homes, medical offices, waiting rooms), Education (schools, universities, classrooms, halls, libraries), Gyms & Leisure (carpeted areas, reception, changing rooms), and Churches & Community Centers. Each industry has unique requirements which we understand and address with appropriate methods, scheduling, and compliance standards.'
  },
  {
    question: 'How long does commercial carpet cleaning take?',
    answer: 'Commercial cleaning duration depends on space size and method: Small office (50-100 sqm): 1-2 hours. Medium office (100-300 sqm): 2-4 hours. Large office (300-500 sqm): 4-6 hours. Hotels: 15-20 minutes per guest room. Restaurants: 2-4 hours depending on size. We provide accurate time estimates during quotation. For large projects, we deploy multiple technicians to reduce downtime. Drying time is 2-4 hours with our professional extraction equipment, or we offer low-moisture cleaning for immediate use (carpets walkable in 30-60 minutes). Out-of-hours cleaning ensures your business opens to clean, dry carpets.'
  },
  {
    question: 'Do you provide same-day commercial cleaning for emergencies?',
    answer: 'Yes, we offer same-day emergency commercial cleaning across Manchester for urgent situations: flood damage and water extraction, major spills before events or inspections, preparing for important client visits, health & safety compliance issues, and pre-opening emergency cleaning. Our emergency response includes: rapid assessment (within 2 hours of call), immediate technician dispatch, industrial water extraction equipment, fast-drying methods, and temporary solutions while thorough cleaning occurs. Emergency service available 24/7 with premium rates for immediate response. Call 07405 428259 for emergency commercial cleaning.'
  },
  {
    question: 'Are your cleaning products safe for commercial premises with staff and customers?',
    answer: 'Yes, all our commercial cleaning products are professional-grade, eco-friendly, and safe for occupied business premises. Our products are: non-toxic and safe for staff and customers, low-odor suitable for occupied spaces, fast-drying to minimize disruption, compliant with health & safety regulations, approved for food service areas (restaurants), and suitable for healthcare facilities. We use COSHH-compliant products with full safety data sheets available. For sensitive environments (healthcare, education, food service), we use specific approved products that meet industry standards. Products are safe once dry, typically within 2-4 hours.'
  },
  {
    question: 'Can you clean large commercial spaces like entire office floors or hotel buildings?',
    answer: 'Yes, we specialize in large-scale commercial cleaning with industrial equipment capable of handling extensive spaces efficiently. Our large-project capabilities include: truck-mounted systems (10x more powerful than portable units), multiple technician teams for rapid completion, phased cleaning to maintain partial operations, floor-by-floor hotel cleaning, and entire office building contracts. Typical large projects: 1,000 sqm office floors (1-day completion), 50-room hotels (2-3 days with multiple teams), retail stores (5,000+ sqm), and multi-building corporate campuses. Volume pricing makes large projects cost-effective. We provide detailed project timelines and minimize operational disruption through strategic scheduling.'
  },
  {
    question: 'What is the difference between commercial and residential carpet cleaning?',
    answer: 'Commercial cleaning differs significantly from residential: Scale & Equipment - Commercial uses industrial truck-mounted systems handling 10x more volume than residential portables. Commercial spaces are measured in hundreds/thousands of square meters. Methods - Commercial often uses bonnet cleaning or low-moisture methods for minimal downtime, while residential typically uses hot water extraction. Scheduling - Commercial prioritizes business hours/out-of-hours flexibility, residential is typically daytime. Frequency - Commercial requires regular maintenance (weekly/monthly), residential is occasional (6-12 months). Pricing - Commercial uses per sqm or contract rates, residential charges per room. Standards - Commercial must meet industry compliance, insurance requirements, health & safety regulations.'
  },
  {
    question: 'Do you have insurance for commercial cleaning work?',
    answer: 'Yes, we carry comprehensive commercial insurance coverage: Public Liability Insurance (£5 million coverage) protects against accidental damage to property or injury, Employers Liability Insurance covers our staff on your premises, Professional Indemnity Insurance for peace of mind, and Equipment Insurance for our truck-mounted and portable systems. We provide insurance certificates upon request for your facilities management records. Our technicians are fully trained, IICRC certified, and follow strict health & safety protocols. We also maintain business insurance for contract work and have never had a claim in our 5+ years serving Manchester businesses.'
  },
  {
    question: 'What commercial cleaning methods do you use?',
    answer: 'We offer multiple commercial cleaning methods suited to different business needs: Hot Water Extraction (steam cleaning) - deepest clean, ideal for quarterly/annual deep cleans, 2-4 hour drying. Bonnet Cleaning - surface cleaning for high-traffic areas, fast drying (30-60 minutes), perfect for weekly/monthly maintenance. Low-Moisture Cleaning - uses minimal water, immediate use, ideal for businesses that cannot close. Dry Cleaning - no water, instant use, perfect for sensitive carpets or 24/7 operations. We assess your carpet type, business operations, and downtime tolerance to recommend the optimal method. Many commercial clients use bonnet cleaning for regular maintenance and hot water extraction for deep cleans.'
  },
  {
    question: 'How often should commercial carpets be professionally cleaned?',
    answer: 'Commercial carpet cleaning frequency depends on traffic levels and industry: High-Traffic Areas (entrances, corridors, reception) - weekly bonnet cleaning + quarterly deep extraction. Medium-Traffic Offices (workspaces, meeting rooms) - monthly maintenance + semi-annual deep clean. Low-Traffic Areas (private offices, storage) - quarterly cleaning sufficient. Hotels & Hospitality (guest rooms, public areas) - weekly for lobbies, deep clean rooms between guests or monthly. Restaurants & Retail (dining areas, shop floors) - weekly to monthly depending on foot traffic. Healthcare & Education - monthly for hygiene standards. Regular cleaning extends carpet life by 3-5 years and maintains professional appearance. We customize schedules based on your specific needs and budget.'
  },
  {
    question: 'Can you provide cleaning outside Manchester city centre?',
    answer: 'Yes, we serve all Greater Manchester areas and surrounding regions: Manchester city centre and all districts, Salford, Trafford, Stockport, Oldham, Bury, Rochdale, Bolton, Wigan, Tameside, and surrounding areas within 100-mile radius for large commercial projects. We have commercial clients across the entire region including business parks, industrial estates, retail parks, and city center offices. Travel costs are included for Manchester area. Larger projects outside Manchester receive custom quotes. Many businesses across Greater Manchester use our services for multi-site contract cleaning.'
  },
  {
    question: 'Do you offer carpet protection treatments for commercial spaces?',
    answer: 'Yes, we offer professional carpet protection treatments that significantly extend carpet life and reduce maintenance costs: Scotchgard Protection - creates invisible barrier repelling spills, dirt, and stains. Ideal for high-traffic commercial areas, makes future cleaning easier and more effective, reduces permanent staining, and extends carpet lifespan by 2-3 years. Cost: £8-£12 per sqm as add-on to cleaning. ROI for Commercial Spaces: reduced cleaning frequency saves money long-term, fewer permanent stains mean less replacement, easier daily maintenance for janitorial staff, and maintains professional appearance. Particularly recommended for: hotel lobbies and corridors, restaurant dining areas, office reception areas, retail shop floors, and high-traffic commercial zones.'
  },
  {
    question: 'Can you clean carpets in food service areas like restaurants?',
    answer: 'Yes, we specialize in restaurant and food service carpet cleaning with food-safety approved methods: Food-Safe Products - all cleaning solutions approved for food service environments, non-toxic and residue-free, comply with food hygiene regulations, and safe for occupied dining areas. Restaurant Challenges - grease and food stains requiring specialized treatments, high-traffic wear patterns, odor elimination from food/beverage spills, and strict turnaround times (clean between lunch/dinner or overnight). Our Process - pre-treatment of grease stains, hot water extraction or low-moisture cleaning, professional deodorizing, and anti-bacterial sanitization. Typical Schedule - weekly bonnet cleaning for dining areas, monthly deep extraction, immediate spot treatment for spills. Out-of-hours cleaning common for restaurants.'
  },
  {
    question: 'What is your cancellation and rescheduling policy for commercial bookings?',
    answer: 'We understand business operations can be unpredictable. Our flexible commercial policy: Notice Requirements - 24 hours notice for rescheduling (no charge), less than 24 hours notice may incur rescheduling fee, same-day cancellation charged at 50% of quote. Contract Clients - more flexible terms for regular maintenance contracts, emergency rescheduling accommodated when possible, priority rebooking for contract customers. We Work With You - we understand business emergencies happen, one-time rescheduling usually waived for good clients, flexible for long-term commercial relationships. Payment Terms - payment on completion for one-time jobs, net 30 days for established commercial clients, flexible payment terms for large contracts. We aim to be your reliable long-term commercial cleaning partner.'
  },
  {
    question: 'Can you provide references from other businesses in Manchester?',
    answer: 'Yes, we have extensive commercial client references across Manchester: Testimonials Available - office complexes in Manchester city centre, hotels in Salford and Trafford, restaurant chains across Greater Manchester, retail stores in shopping centers, healthcare facilities and care homes, schools and universities. Client Retention - 90% of commercial clients renew contracts annually, many 5+ year relationships with businesses, strong reputation in Manchester commercial sector. Verifiable Reviews - 5-star Google ratings with business reviews, recommendations from facilities managers, repeat business from satisfied corporate clients. We provide specific references upon request relevant to your industry. Many clients discovered us through word-of-mouth recommendations from other Manchester businesses.'
  },
  {
    question: 'Do you clean carpets in retail stores during trading hours?',
    answer: 'Yes, we offer flexible retail carpet cleaning during trading hours or out-of-hours: During Trading - sectional cleaning (clean one area while customers use others), focus on low-traffic times (mid-morning, mid-afternoon), use low-moisture methods for immediate walkability, cordon off wet areas with safety signage, and rapid-dry equipment for minimal disruption. Out-of-Hours Retail - evening cleaning after closing (most popular), early morning before opening, overnight for shopping centers, Sunday cleaning for closed stores. Retail Considerations - no disruption to customer shopping experience, clean carpets enhance store presentation, seasonal flexibility (busier during holidays), and regular maintenance keeps appearance professional. Many retail clients choose evening cleaning for zero customer disruption.'
  },
  {
    question: 'What areas of the office do you typically clean?',
    answer: 'We provide comprehensive office carpet cleaning covering all carpeted areas: Public Areas - reception and entrance lobbies, corridors and hallways, waiting areas, elevator lobbies. Workspaces - open-plan office floors, individual offices, cubicles and workstations, managerial offices. Meeting Spaces - conference rooms, meeting rooms, boardrooms, training rooms. Common Areas - break rooms and kitchens (carpeted areas), staff lounges, quiet rooms. Specialized Areas - data centers and server rooms (low-moisture only), archives and storage areas, executive floors. We work with facilities managers to prioritize areas, schedule around meetings and operations, and provide phased cleaning for large offices. All furniture moving included (light items) or we clean around furniture as preferred.'
  },
  {
    question: 'How do you minimize disruption to business operations during cleaning?',
    answer: 'Minimizing disruption is our top commercial priority: Scheduling Flexibility - out-of-hours cleaning (evenings, weekends, overnight), phased cleaning (one floor at a time), seasonal timing (quieter business periods), and advanced booking for planned minimal-disruption windows. Operational Strategies - sectional cleaning keeps most areas operational, rapid-dry methods for faster return to use, clear signage and cordoning of wet areas, coordination with facilities management, and quiet equipment where noise is concern. Communication - pre-cleaning briefing with management, staff notifications before arrival, real-time updates during large projects, and post-cleaning inspection with facilities manager. Result: Most commercial clients report zero or minimal disruption to operations. We pride ourselves on being the "invisible" cleaning service that delivers professional results without business interruption.'
  }
]

export default function CommercialCleaningClusterPage() {
  return (
    <ClientWrapper pageTitle="Commercial Cleaning Manchester - Complete Business Guide">
      <div className="min-h-screen bg-white">

        {/* Hero Section - Commercial/B2B Optimized */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50/30">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-40 h-40 bg-slate-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 right-20 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-6">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-blue-600">Services</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Commercial Cleaning</span>
              </div>

              {/* Topic Badge */}
              <Badge className="mb-6 bg-slate-100 text-slate-800 text-sm px-4 py-2">
                Professional Business Services
              </Badge>

              {/* H1 with Primary Keyword */}
              <h1 className="speakable-headline text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Commercial Cleaning Manchester
                <span className="block text-slate-600 mt-2">Expert Business Carpet Cleaning</span>
              </h1>

              {/* Comprehensive Description */}
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
                Professional commercial carpet cleaning services for businesses across Manchester. Flexible scheduling, minimal disruption, industrial-grade equipment. Serving offices, hotels, restaurants, retail, healthcare, and education sectors with contract cleaning, out-of-hours service, and emergency response.
              </p>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-medium">5★ Business Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">IICRC Certified</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/quote">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold shadow-xl px-8 py-4 text-lg rounded-xl transition-all hover:scale-105">
                    Get Business Quote →
                  </Button>
                </Link>
                <a href="tel:07405428259" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all">
                  <Phone className="w-5 h-5" />
                  <span>07405 428259</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TL;DR for LLMs & Voice Search */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="speakable-tldr bg-slate-50 border-l-4 border-slate-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                <strong>Blowup Cleaners</strong> provides professional commercial carpet cleaning services in <strong>Manchester, Salford, and Trafford</strong> for offices, hotels, restaurants, retail, healthcare, and education sectors. Services include contract cleaning, out-of-hours scheduling, and emergency response. <span className="speakable-pricing">Pricing from £2-£4 per square meter or £25-£40 per room with volume discounts for contracts.</span> Fully insured, IICRC certified, minimal business disruption. <span className="speakable-cta">Call <a href="tel:07405428259" className="text-slate-600 font-bold hover:underline">07405 428259</a> for a business quote.</span>
              </p>
              <div className="mt-4 text-sm text-gray-500">
                <time dateTime="2025-01-21">Last Updated: January 21, 2025</time>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation Cards Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Commercial Carpet Cleaning Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive commercial cleaning services for businesses across Manchester
              </p>
            </div>

            {/* Interactive Search & Filter Component */}
            <InteractiveSearch subtopics={subtopicCards} />
          </div>
        </section>

        {/* Comprehensive Overview Section */}
        <section className="py-16 bg-white" id="overview">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">

              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Commercial Carpet Cleaning?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Commercial carpet cleaning is specialized professional cleaning designed for business premises, using industrial-grade equipment, flexible scheduling, and methods tailored to minimize operational disruption. Unlike residential cleaning which typically uses hot water extraction in single rooms, commercial cleaning employs powerful truck-mounted systems capable of handling hundreds or thousands of square meters efficiently, often with low-moisture or bonnet cleaning methods that allow immediate use of carpeted areas.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Businesses require commercial carpet cleaning for multiple critical reasons: maintaining professional appearance for clients and customers, meeting health and safety standards (particularly in healthcare, education, and food service), extending expensive carpet lifespan (commercial carpets represent significant capital investment), improving indoor air quality for staff productivity and wellbeing, and complying with insurance requirements for premises liability. Commercial cleaning schedules are typically much more frequent than residential—high-traffic areas may require weekly maintenance, while entire offices need monthly or quarterly deep cleaning.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Blowup Cleaners, we provide comprehensive commercial carpet cleaning across Manchester serving diverse business sectors. Our industrial truck-mounted extraction systems deliver 10x the power of portable residential units, enabling us to clean large office floors, entire hotel buildings, restaurant chains, and retail stores efficiently. We offer flexible scheduling including out-of-hours service (evenings, weekends, overnight) to ensure zero disruption to your business operations. Our commercial cleaning includes regular maintenance contracts, one-time deep cleaning, emergency response, and specialized industry-specific services.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="office">Office Carpet Cleaning Services</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Office carpet cleaning is our largest commercial sector, serving businesses from small startups to corporate headquarters across Manchester. Offices present unique cleaning challenges: high-traffic corridors and reception areas accumulate soil rapidly, workstations see daily wear from desk chairs rolling over carpets, meeting rooms host clients and require immaculate presentation, and open-plan layouts demand efficient cleaning to minimize staff disruption.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our office cleaning approach uses phased scheduling and strategic methods. High-traffic areas (entrances, corridors, reception) receive weekly bonnet cleaning—a surface cleaning method that removes top-layer soil quickly with minimal moisture, allowing immediate use. This maintains professional appearance between deep cleans. Workspaces and meeting rooms receive monthly maintenance cleaning using low-moisture extraction or bonnet methods. Quarterly or semi-annually, we perform comprehensive hot water extraction deep cleaning across the entire office, typically scheduled during holiday periods or over long weekends when the office is closed or minimally staffed.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Office cleaning timing is flexible to suit your operations: evening cleaning (after 6pm when most staff have left), early morning cleaning (before 8am arrivals), weekend cleaning (Saturday/Sunday when office is closed), or sectional daytime cleaning (one floor at a time while other floors remain operational). Many Manchester offices prefer evening cleaning—we arrive after staff leave, complete cleaning overnight, and your team returns to fresh, dry carpets. Contract pricing for regular office cleaning typically saves 15-30% compared to ad-hoc bookings, plus you receive priority scheduling and a dedicated account manager.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="hotels">Hotel & Hospitality Carpet Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hotels and hospitality venues have stringent carpet cleanliness requirements and unique operational constraints. Guest satisfaction directly correlates with cleanliness perceptions, and carpets are among the first impressions guests notice in rooms, corridors, and public areas. Hotels require rapid turnaround cleaning between guest stays while maintaining the highest standards throughout the property.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our hotel cleaning services are tailored to hospitality operations: Guest room deep cleaning between stays or during room refreshes (15-20 minutes per room with fast-dry methods), corridor and hallway maintenance cleaning (weekly bonnet cleaning for high-traffic areas), lobby and reception daily or weekly cleaning (maintains premium first impressions), conference room and event space cleaning (cleaned before events or deep cleaned monthly), restaurant and bar areas specialized cleaning (grease removal, odor elimination), and stairwells and service areas quarterly deep extraction.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We understand hotel operations run 24/7, so flexibility is critical. We schedule cleaning during low-occupancy periods, coordinate with housekeeping managers to clean vacant rooms, work overnight for public area cleaning without guest disruption, and provide emergency spot-cleaning for spills or stains before guest check-ins. Many Manchester hotels partner with us for comprehensive maintenance contracts covering all carpeted areas on rolling schedules. Volume pricing for hotels makes professional cleaning cost-effective while maintaining the premium presentation guests expect.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="restaurants">Restaurant & Cafe Carpet Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Restaurants and cafes face some of the toughest carpet cleaning challenges: food and beverage spills daily, grease and oil accumulation from kitchen areas, high foot traffic during service hours, and strict turnaround requirements (clean between lunch and dinner service or overnight). Additionally, restaurants must use food-safe cleaning products that comply with hygiene regulations while effectively removing organic stains and odors.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our restaurant carpet cleaning uses specialized approaches for food service environments. All our cleaning solutions are food-safe, non-toxic, and approved for occupied dining areas, meeting health and safety requirements. We focus on: grease and oil stain removal using powerful alkaline cleaners that break down fatty deposits, odor elimination with professional-strength deodorizers that neutralize food smells at molecular level (not just masking with fragrances), high-traffic wear pattern treatment concentrating on entrance areas and paths between tables, and anti-bacterial sanitization killing bacteria from food spills and creating hygienic dining environments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Restaurant cleaning timing is typically: after closing (overnight cleaning most common, carpets dry by morning opening), between service hours (clean after lunch, dry by dinner, or reverse), early morning (before opening for breakfast/lunch service), or weekly scheduled maintenance (combine with regular cleaning schedule). Many Manchester restaurants choose weekly bonnet cleaning for dining areas to maintain appearance, plus monthly deep extraction to remove embedded soil. We coordinate with restaurant managers to ensure zero disruption to service and fresh, clean carpets for guests. Emergency cleaning is available for pre-inspection or special event preparation.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="retail">Retail Store Carpet Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Retail stores require immaculate carpet presentation as it directly impacts customer shopping experience and purchasing behavior. Clean, fresh carpets signal quality, professionalism, and attention to detail, while soiled or stained carpets suggest neglect and reduce customer confidence. Retail spaces experience extreme foot traffic—particularly during sales, holidays, and peak shopping periods—requiring regular professional maintenance to preserve appearance and extend carpet life.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our retail carpet cleaning services cover: shop floor general cleaning (main customer areas receive weekly or monthly maintenance), fitting room intensive cleaning (higher soil levels from shoe traffic, cleaned monthly), customer pathways traffic pattern treatment (entrance areas and main aisles see heaviest wear), display area spot cleaning (maintain pristine presentation around featured products), and back-of-house staff areas quarterly deep cleaning (offices, break rooms, storage areas).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Retail cleaning can occur during trading hours using sectional cleaning (clean one area while customers shop in others) with low-moisture methods for immediate walkability, or preferably out-of-hours: evening cleaning after closing (most popular for standalone stores), overnight cleaning (shopping centers), early morning before opening, or Sunday cleaning (for stores closed Sundays). We use safety signage and cordons during daytime cleaning to protect customers and wet carpets. Many Manchester retail stores schedule pre-season deep cleaning (before Christmas, summer sales, back-to-school) to ensure carpets look their best during peak trading periods. Professional carpet maintenance is cost-effective compared to premature replacement and maintains brand image.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="healthcare">Healthcare Facility Carpet Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Healthcare facilities—including clinics, medical offices, care homes, and hospitals—have the strictest hygiene and cleaning standards. Carpets in medical environments must be not only clean but sanitized to prevent cross-contamination, reduce infection risk, and meet health authority regulations. Vulnerable populations (elderly, immunocompromised, infants) are particularly susceptible to pathogens, making professional-grade sanitization essential rather than optional.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our healthcare carpet cleaning exceeds standard commercial cleaning with enhanced protocols: Hospital-grade disinfectants that kill 99.9% of bacteria, viruses, and fungi including MRSA, C. difficile, and norovirus; deep extraction removing allergens, dust mites, and microscopic contaminants that trigger respiratory issues; anti-microbial treatments providing ongoing protection between cleanings; and complete sanitization of carpets, padding, and surrounding areas meeting infection control standards.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Healthcare facility cleaning is typically scheduled during low-patient periods (evenings, weekends) or room-by-room to maintain operations. We provide: waiting room weekly maintenance (high-traffic, high-touch areas), patient room deep cleaning (between patients or quarterly), office and administrative areas monthly cleaning, corridors and common areas weekly or bi-weekly, and therapy or treatment rooms specialist sanitization. We supply documentation and hygiene certificates for regulatory compliance and can accommodate emergency cleaning for contamination incidents. Our healthcare experience across Manchester includes GP surgeries, dental clinics, physiotherapy centers, and care homes.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="education">School & Education Carpet Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Schools, universities, and educational facilities require regular carpet cleaning to maintain healthy learning environments. Children and students spend extensive time in classrooms, libraries, halls, and common areas where carpets accumulate dirt, allergens, bacteria, and stains. Educational settings experience intense wear during term time, then benefit from deep cleaning during holiday breaks when facilities are unoccupied.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our education sector cleaning services include: classroom carpet cleaning (termly or annually depending on age group—younger children create more soil), library and study area maintenance (monthly for high-use university libraries, termly for school libraries), assembly hall and auditorium deep cleaning (termly or before major events), administrative office areas quarterly cleaning, staff rooms and break areas monthly maintenance, and dormitory or student accommodation deep cleaning (between term times).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Educational facilities typically schedule cleaning during: term breaks (summer holiday, Christmas break, Easter break for comprehensive deep cleaning), half-term weeks (one-week closures for quick maintenance), weekends (for urgent cleaning without student disruption), or school holiday periods (evenings after students leave, before morning arrival for classrooms remaining in use). We use child-safe, non-toxic cleaning products with no harsh chemicals, fast drying times to enable quick classroom return, and allergen removal to create healthier learning environments for children with asthma or allergies. Many Manchester schools and universities maintain annual cleaning contracts with scheduled term-time maintenance and holiday deep cleans.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="contracts">Commercial Cleaning Contracts & Maintenance Agreements</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Commercial cleaning contracts provide businesses with consistent, reliable, cost-effective carpet maintenance through regular scheduled services. Rather than ad-hoc bookings, contracts establish ongoing relationships with priority scheduling, volume discounts, dedicated teams, and guaranteed service levels. Most Manchester businesses find contracts more convenient and economical than booking individual cleans.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Contract options we offer: Weekly maintenance contracts (ideal for high-traffic offices, retail stores, restaurants needing frequent light cleaning to maintain appearance), monthly cleaning contracts (perfect for most offices, schools, and medium-traffic businesses providing regular deep maintenance), quarterly intensive cleaning contracts (suitable for lower-traffic areas, executive offices, or businesses with resilient carpets), and annual comprehensive contracts (complete carpet care program with multiple scheduled deep cleans throughout the year). All contracts include: priority booking (you choose preferred dates and times), volume discounts (15-30% savings compared to standard rates), dedicated account manager, consistent cleaning team familiar with your premises, flexible payment terms (net 30 days standard), and emergency call-out included or discounted.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Contract benefits extend beyond cost savings. Consistent cleaning maintains professional business appearance, extends carpet life reducing capital replacement costs, ensures compliance with insurance and health and safety requirements, prevents soil buildup that becomes harder to remove over time, and provides predictable budgeting with fixed monthly or quarterly costs. We work with businesses to customize contracts matching their specific needs—some clients need weekly high-traffic area cleaning plus monthly full deep cleans, others prefer quarterly intensive services. Contracts are flexible and can be adjusted as business needs change.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="out-of-hours">Out-of-Hours Commercial Cleaning Services</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Out-of-hours cleaning is the most popular scheduling option for commercial clients, providing maximum flexibility and zero operational disruption. By cleaning when your business is closed or minimally staffed—evenings, overnight, early mornings, or weekends—we ensure staff and customers are unaffected, carpets have sufficient time to dry completely before reopening, and your business presents fresh, clean premises daily.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our out-of-hours service includes: Evening cleaning (6pm-midnight): We arrive after staff leave for the day, complete cleaning, and carpets are dry by morning. Most popular for offices, retail, and restaurants. Overnight cleaning (midnight-6am): For businesses operating extended hours or requiring completely empty premises. We work quietly with minimal lighting. Common for hotels, 24/7 facilities, shopping centers. Early morning cleaning (5am-9am): Clean before staff and customers arrive. Suitable for businesses with early starts. Weekend cleaning (Saturday/Sunday): When most businesses are closed entirely. Allows extensive work without time pressure or operational concerns.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Out-of-hours cleaning benefits include: zero disruption to business operations, staff and customers unaffected by cleaning activity, adequate drying time overnight ensures carpets completely ready by morning, secure access arrangements can be made with keys/codes, quiet periods allow thorough work without rushing, and we can move furniture and equipment without impacting workflow. Out-of-hours scheduling may incur modest premium (typically 10-20% for evening/weekend, 20-30% for overnight) but most businesses find this worthwhile for complete convenience. We're trusted by Manchester businesses to access premises securely, complete professional work, and secure premises upon leaving. All staff are background-checked and insured.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="emergency">Emergency Commercial Cleaning Services</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Business emergencies require immediate professional response. Whether it's flooding from burst pipes, major spills before important client visits, health inspection preparation, or urgent cleaning for operational compliance, our emergency commercial cleaning provides rapid deployment across Manchester with same-day or next-day service availability.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Common commercial emergencies we handle: flood damage and water extraction (burst pipes, roof leaks, plumbing failures—rapid water removal prevents permanent carpet damage and mold growth), major spills and stains (wine, coffee, food, chemicals—emergency treatment before stains set permanently), pre-inspection cleaning (health and safety inspections, client visits, surprise audits—rapid deep clean to ensure compliance), reopening preparation (businesses closed temporarily, new tenant move-in—comprehensive cleaning to professional standards), and contamination incidents (biological spills, sewage backups—specialized sanitization and deodorization).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our emergency response includes: rapid assessment (call us, we provide phone guidance and dispatch technician within 2 hours), immediate mobilization (we prioritize emergency calls over routine bookings), industrial equipment deployment (truck-mounted systems, water extractors, rapid-dry fans), temporary solutions (interim measures while comprehensive cleaning occurs), and complete restoration (not just quick fixes—proper deep cleaning to restore carpets fully). Emergency service available 24/7 with premium rates for immediate response. Call 07405 428259 for emergency commercial cleaning. Many businesses keep our number for "just in case" situations—rapid response can mean the difference between temporary inconvenience and permanent carpet damage requiring expensive replacement.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="equipment">Commercial-Grade Equipment & Technology</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Commercial carpet cleaning requires industrial-grade equipment far more powerful than residential systems. The scale difference is substantial: commercial spaces measure hundreds or thousands of square meters requiring efficient, powerful systems to complete work within business timelines, versus residential rooms cleaned individually over several hours.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our commercial equipment includes: Truck-mounted extraction systems (the gold standard in commercial cleaning, these systems are mounted in our vehicles with power from truck engine providing 10x more suction than portable units, heating water to 200°F+, and extracting 95% of moisture for rapid 2-4 hour drying times); industrial portable extractors (for high-rise buildings or interior spaces without vehicle access, still significantly more powerful than residential machines); commercial bonnet cleaning machines (rotary machines with absorbent pads for surface cleaning and maintenance, ideal for weekly touch-ups in high-traffic areas); and specialized low-moisture systems (encapsulation cleaning using polymers that crystallize soil for vacuum removal, allows immediate carpet use).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The power difference is critical for commercial efficiency. A residential portable unit might take 4-6 hours to clean a 100 sqm office with adequate results. Our truck-mounted system cleans the same space in 1-2 hours with superior results and faster drying. For large projects—500 sqm office floors, entire hotels, retail stores—this efficiency is not just convenient but essential. Businesses cannot afford extended cleaning times causing operational disruption. Our industrial equipment completes large projects rapidly without compromising quality, typically overnight or over a weekend, with premises ready for business resumption.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="pricing">Commercial Carpet Cleaning Pricing Models</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Commercial carpet cleaning pricing differs significantly from residential pricing due to scale, frequency, and business relationships. While residential cleaning quotes per room (£25-£40 per room), commercial cleaning uses various pricing models tailored to business needs and project scope.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Per square meter pricing: Most common for large commercial spaces measured in sqm rather than rooms. Standard cleaning: £2-£4 per sqm depending on soil level, carpet condition, and cleaning method required. Lightly soiled office carpets with regular maintenance may be £2-£2.50/sqm. Heavily soiled retail or restaurant carpets requiring intensive treatment are £3.50-£4/sqm. Deep extraction cleaning (hot water extraction): £3-£5 per sqm for comprehensive cleaning. Bonnet/maintenance cleaning (surface cleaning for regular upkeep): £1.50-£2.50 per sqm, perfect for weekly or monthly contracts. Volume discounts apply for large spaces: 500+ sqm typically receives 10-15% discount, 1000+ sqm receives 20-25% discount.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Per room/per visit pricing: Suitable for smaller offices or fixed-scope projects. Small office room (up to 20 sqm): £25-£35 per room. Medium office room (20-40 sqm): £40-£60 per room. Large meeting room/boardroom (40+ sqm): £70-£100 depending on size. Hotel guest rooms: £15-£25 per room depending on size and soil level. Contract cleaning pricing: For businesses wanting regular maintenance, contracts provide significant savings and convenience. Weekly contract: £X per visit with annual commitment (15-20% discount vs. ad-hoc pricing). Monthly contract: £X per visit (20-25% discount). Quarterly contract: £X per visit (15-20% discount). Annual agreements: Custom pricing with largest discounts (typically 25-30% savings) plus priority scheduling, dedicated account manager, flexible payment terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                All commercial quotes are free, transparent, and customized to your business needs. We conduct site visits for large projects to accurately assess scope, sqm, carpet condition, accessibility, and timing requirements. Quotes include all costs with no hidden fees—travel within Manchester included, equipment and materials included, labor included. Optional add-ons (stain protection, deodorizing, furniture moving) quoted separately. Payment terms for commercial clients: one-time jobs paid on completion, established commercial clients receive net 30-day terms, contract clients enjoy flexible monthly or quarterly payment schedules.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="certifications">Industry Certifications, Insurance & Compliance</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Professional commercial carpet cleaning requires proper certifications, comprehensive insurance, and regulatory compliance to protect both service providers and businesses. When selecting a commercial cleaning partner, verifying credentials is essential to mitigate risk and ensure professional standards.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our certifications and credentials include: IICRC Certification (Institute of Inspection, Cleaning and Restoration Certification)—the industry's gold standard. Our technicians are IICRC-trained in carpet cleaning methods, fiber identification, stain chemistry, and equipment operation. IICRC certification demonstrates professional competency and commitment to industry best practices. Professional training programs: All staff complete ongoing training in commercial cleaning techniques, health and safety protocols, customer service, and equipment maintenance. Health & Safety compliance: We adhere to HSE regulations, conduct risk assessments for each commercial site, use COSHH-compliant cleaning products with safety data sheets available, and implement safe working practices protecting staff and business occupants.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Insurance coverage essential for commercial work: Public Liability Insurance (£5 million coverage)—protects businesses against accidental property damage or injury during cleaning. Employers Liability Insurance (£10 million coverage)—covers our staff working on client premises as legally required. Professional Indemnity Insurance—protects against professional negligence claims. Equipment Insurance—covers our truck-mounted systems and portable equipment. We provide insurance certificates upon request for facilities management records, contractor vetting, and compliance documentation. Our comprehensive coverage ensures businesses are fully protected when engaging our services—critical for facilities managers and business owners managing contractor risk.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Choose Blowup Cleaners for Commercial Cleaning in Manchester</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Blowup Cleaners is Manchester's trusted commercial carpet cleaning partner, serving businesses across Manchester, Salford, Trafford, and Greater Manchester since 2020. We combine commercial expertise, industrial equipment, flexible scheduling, and exceptional customer service that has earned us a 5-star rating from business clients and a 90% annual contract renewal rate.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                What sets us apart for commercial clients: Industrial equipment power—our truck-mounted systems deliver 10x the suction and cleaning power of portable units, completing large projects efficiently with superior results. Flexible scheduling—out-of-hours service (evenings, weekends, overnight), phased cleaning, seasonal timing, and rapid turnaround for business convenience. Minimal disruption guarantee—we coordinate with facilities managers, work around operations, use sectional cleaning for occupied spaces, and schedule strategically to ensure zero operational impact. Commercial expertise across industries—offices, hotels, restaurants, retail, healthcare, education—we understand unique requirements and challenges in each sector.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Fully insured and certified—£5 million public liability insurance, IICRC certified technicians, health & safety compliant, comprehensive contractor credentials for peace of mind. Contract flexibility—weekly, monthly, quarterly, or annual agreements with volume discounts (15-30% savings), priority scheduling, dedicated account management, and flexible payment terms. Emergency response—same-day emergency service available 24/7 for urgent situations, rapid mobilization, industrial water extraction, and complete restoration services. Trusted by Manchester businesses—90% contract renewal rate, long-term relationships with corporate clients, strong reputation in Manchester commercial sector, verifiable reviews from business clients.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We're not just a cleaning vendor—we're a long-term commercial partner invested in maintaining your business premises to the highest standards. Our account management approach means you have a dedicated contact who understands your business, knows your premises, and coordinates all cleaning activities seamlessly. Many Manchester businesses have worked with us for 5+ years, renewing contracts annually and recommending us to other business owners. Call 07405 428259 for a free commercial cleaning consultation and quote, or request a site visit to discuss your specific business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Comparison Table Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Commercial Cleaning by Industry
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                  <thead className="bg-slate-600 text-white">
                    <tr>
                      <th className="p-4 text-left font-semibold">Feature</th>
                      <th className="p-4 text-center font-semibold">Office</th>
                      <th className="p-4 text-center font-semibold">Hotel</th>
                      <th className="p-4 text-center font-semibold">Retail</th>
                      <th className="p-4 text-center font-semibold">Restaurant</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Typical Size</td>
                      <td className="p-4 text-center">100-500 sqm</td>
                      <td className="p-4 text-center">1000+ sqm</td>
                      <td className="p-4 text-center">200-1000 sqm</td>
                      <td className="p-4 text-center">50-300 sqm</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Cleaning Frequency</td>
                      <td className="p-4 text-center">Monthly</td>
                      <td className="p-4 text-center">Weekly</td>
                      <td className="p-4 text-center">Monthly</td>
                      <td className="p-4 text-center">Weekly</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Traffic Level</td>
                      <td className="p-4 text-center text-yellow-600">Medium</td>
                      <td className="p-4 text-center text-red-600">Very High</td>
                      <td className="p-4 text-center text-orange-600">High</td>
                      <td className="p-4 text-center text-orange-600">High</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Best Method</td>
                      <td className="p-4 text-center">Hot Water Extraction</td>
                      <td className="p-4 text-center">Bonnet + Extraction</td>
                      <td className="p-4 text-center">Low-Moisture</td>
                      <td className="p-4 text-center">Hot Water Extraction</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Preferred Timing</td>
                      <td className="p-4 text-center">Evening/Weekend</td>
                      <td className="p-4 text-center">Overnight</td>
                      <td className="p-4 text-center">After Closing</td>
                      <td className="p-4 text-center">After Closing</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Typical Cost</td>
                      <td className="p-4 text-center text-blue-600 font-semibold">£2.50-£3.50/sqm</td>
                      <td className="p-4 text-center text-blue-600 font-semibold">£2-£3/sqm</td>
                      <td className="p-4 text-center text-blue-600 font-semibold">£3-£4/sqm</td>
                      <td className="p-4 text-center text-blue-600 font-semibold">£3.50-£5/sqm</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Drying Time</td>
                      <td className="p-4 text-center">2-4 hours</td>
                      <td className="p-4 text-center">2-3 hours</td>
                      <td className="p-4 text-center">30-60 mins</td>
                      <td className="p-4 text-center">2-4 hours</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Contract Discount</td>
                      <td className="p-4 text-center text-green-600">20-25%</td>
                      <td className="p-4 text-center text-green-600">25-30%</td>
                      <td className="p-4 text-center text-green-600">15-20%</td>
                      <td className="p-4 text-center text-green-600">20-25%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 text-center">
                <Link href="/quote">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg">
                    Get Custom Business Quote →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - 20 business questions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Commercial Cleaning
              </h2>
              <p className="text-lg text-gray-600">
                Everything businesses need to know about professional commercial carpet cleaning
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 hover:border-slate-500/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-slate-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Trust & Authority Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50/50 to-gray-50/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: 'Fully Insured', value: '£5M Coverage' },
                { icon: Building2, title: 'Businesses Served', value: '500+' },
                { icon: Star, title: 'Business Rating', value: '4.9/5' },
                { icon: Award, title: 'Contract Renewals', value: '90%' }
              ].map((stat, index) => (
                <Card key={index} className="text-center bg-white border-2 border-gray-100">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-8 w-8 text-slate-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.title}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-600 via-slate-600 to-slate-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready for Professional Commercial Cleaning?
              </h2>
              <p className="text-xl text-slate-100 mb-8">
                Join 500+ Manchester businesses who trust Blowup Cleaners for professional commercial carpet cleaning.
                Get your free business quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold text-lg px-8 py-6 rounded-xl shadow-xl">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Business Quote
                  </Button>
                </Link>
                <a href="tel:07405428259">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl bg-white/10 border-2 border-white text-white hover:bg-white/20">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: 07405 428259
                  </Button>
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Free Site Visit
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Flexible Scheduling
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Volume Discounts
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'Commercial Cleaning Manchester - Professional Business Services',
              'description': 'Professional commercial carpet cleaning for offices, hotels, restaurants & retail in Manchester',
              'url': 'https://blowupcleaners.co.uk/services/commercial-cleaning',
              'inLanguage': 'en-GB',
              'isPartOf': {
                '@type': 'WebSite',
                'url': 'https://blowupcleaners.co.uk'
              },
              'speakable': {
                '@type': 'SpeakableSpecification',
                'cssSelector': ['.speakable-headline', '.speakable-tldr', '.speakable-pricing', '.speakable-cta']
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://blowupcleaners.co.uk' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://blowupcleaners.co.uk/services' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Commercial Cleaning', 'item': 'https://blowupcleaners.co.uk/services/commercial-cleaning' }
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              'serviceType': 'Commercial Carpet Cleaning',
              'provider': {
                '@type': 'LocalBusiness',
                'name': 'Blowup Cleaners',
                'telephone': '+447405428259',
                'areaServed': [
                  { '@type': 'City', 'name': 'Manchester' },
                  { '@type': 'City', 'name': 'Salford' },
                  { '@type': 'City', 'name': 'Trafford' }
                ],
                'priceRange': '£2-£5 per sqm'
              },
              'offers': {
                '@type': 'Offer',
                'priceCurrency': 'GBP',
                'price': '2',
                'description': 'Commercial carpet cleaning from £2 per square meter or custom contract pricing'
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'Blowup Cleaners',
              'legalName': 'HOPOLLO LTD',
              'url': 'https://blowupcleaners.co.uk',
              'logo': 'https://blowupcleaners.co.uk/logo.png',
              'foundingDate': '2020',
              'contactPoint': {
                '@type': 'ContactPoint',
                'telephone': '+447405428259',
                'contactType': 'customer service',
                'areaServed': 'GB',
                'availableLanguage': 'English'
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              'name': 'Blowup Cleaners',
              'legalName': 'HOPOLLO LTD',
              'image': 'https://blowupcleaners.co.uk/logo.png',
              'telephone': '+447405428259',
              'email': 'info@blowupcleaners.co.uk',
              'priceRange': '£2-£5 per sqm',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': '230 Sealand Road',
                'addressLocality': 'Chester',
                'addressRegion': 'Cheshire',
                'postalCode': 'CH1 4LH',
                'addressCountry': 'GB'
              },
              'geo': {
                '@type': 'GeoCoordinates',
                'latitude': '53.1905',
                'longitude': '-2.9582'
              },
              'areaServed': [
                { '@type': 'City', 'name': 'Manchester' },
                { '@type': 'City', 'name': 'Salford' },
                { '@type': 'City', 'name': 'Trafford' },
                { '@type': 'City', 'name': 'Stockport' }
              ],
              'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': '5',
                'reviewCount': '127',
                'bestRating': '5',
                'worstRating': '1'
              }
            })
          }}
        />

      </div>
    </ClientWrapper>
  )
}
