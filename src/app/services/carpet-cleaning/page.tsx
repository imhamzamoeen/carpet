/**
 * Carpet Cleaning Manchester - Cluster/Pillar Page
 *
 * B2C-focused hub page covering all aspects of residential carpet cleaning
 * Serves as authoritative resource for homeowners with 4000-4500 words
 * Links to carpet cleaning services and residential cleaning content
 */

import Link from 'next/link'
import type { Metadata } from 'next'
import {
  CheckCircle, Shield, Award, Star, ArrowRight, Users, Home, Phone,
  Sparkles, Droplets, Wind, Zap, Heart, PawPrint, Leaf, Calendar,
  Target, ShieldCheck, Clock, TrendingUp, BadgeCheck, AlertCircle
} from 'lucide-react'

import { Button } from '@/components/ui'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

import ClientWrapper from './client-wrapper'
import InteractiveSearch from './interactive-client'

export const metadata: Metadata = {
  title: 'Carpet Cleaning Manchester | Professional Home Carpet Cleaning Services',
  description: 'Expert carpet cleaning for homes in Manchester. Safe for kids & pets, fast drying, stain removal specialists. From £25 per room. Get instant home quote.',
  keywords: [
    'carpet cleaning Manchester',
    'professional carpet cleaning Manchester',
    'carpet cleaners Manchester',
    'carpet cleaning near me',
    'steam carpet cleaning Manchester',
    'carpet stain removal Manchester',
    'pet stain removal Manchester',
    'end of tenancy carpet cleaning',
    'carpet cleaning prices Manchester',
    'eco-friendly carpet cleaning'
  ],

  alternates: {
    canonical: 'https://blowupcleaners.co.uk/services/carpet-cleaning',
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
    title: 'Carpet Cleaning Manchester | Professional Home Services',
    description: 'Expert carpet cleaning safe for kids & pets. Fast drying, stain removal specialists. Professional results from £25 per room.',
    url: 'https://blowupcleaners.co.uk/services/carpet-cleaning',
    siteName: 'Blowup Cleaners',
    locale: 'en_GB',
    type: 'website',
    images: [{
      url: 'https://blowupcleaners.co.uk/og-carpet-cleaning.jpg',
      width: 1200,
      height: 630,
      alt: 'Professional carpet cleaning services in Manchester for homes'
    }]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Carpet Cleaning Manchester | Professional Home Services',
    description: 'Expert carpet cleaning safe for kids & pets in Manchester',
    images: ['https://blowupcleaners.co.uk/og-carpet-cleaning.jpg']
  }
}

// Subtopic navigation cards (12 residential-focused items)
const subtopicCards = [
  {
    title: 'Deep Carpet Cleaning',
    url: '#deep-cleaning',
    excerpt: 'Professional hot water extraction and steam cleaning methods that remove deep-seated dirt and allergens.',
    category: 'Methods',
    iconName: 'Sparkles',
    keywords: ['deep clean', 'hot water extraction', 'steam cleaning', 'thorough']
  },
  {
    title: 'Stain Removal Experts',
    url: '/services/stain-removal',
    excerpt: 'Specialist treatment for wine, coffee, food, ink, and stubborn stains using professional solutions.',
    category: 'Stains',
    iconName: 'Droplets',
    keywords: ['stain removal', 'wine stains', 'coffee stains', 'stubborn stains']
  },
  {
    title: 'Pet Stain & Odor Removal',
    url: '/services/pet-odor-removal',
    excerpt: 'Expert treatment for pet urine, feces, and odors with enzyme-based solutions that eliminate smells.',
    category: 'Stains',
    iconName: 'PawPrint',
    keywords: ['pet stains', 'pet odor', 'dog urine', 'cat urine']
  },
  {
    title: 'All Carpet Types',
    url: '#carpet-types',
    excerpt: 'We clean wool, synthetic, nylon, polyester, oriental rugs, and delicate carpets with care.',
    category: 'Services',
    iconName: 'ShieldCheck',
    keywords: ['wool carpet', 'synthetic carpet', 'oriental rugs', 'carpet types']
  },
  {
    title: 'Room-by-Room Cleaning',
    url: '#room-by-room',
    excerpt: 'Living rooms, bedrooms, stairs, hallways, and dining rooms cleaned to perfection.',
    category: 'Services',
    iconName: 'Home',
    keywords: ['living room', 'bedroom', 'stairs', 'hallway']
  },
  {
    title: 'End of Tenancy Cleaning',
    url: '/services/end-of-tenancy-cleaning',
    excerpt: 'Professional move-out carpet cleaning to help you get your deposit back. Landlord approved.',
    category: 'Services',
    iconName: 'BadgeCheck',
    keywords: ['end of tenancy', 'move out', 'deposit back', 'landlord']
  },
  {
    title: 'Carpet Protection',
    url: '#carpet-protection',
    excerpt: 'Scotchgard and fabric protection treatments that repel stains and extend carpet lifespan.',
    category: 'Care',
    iconName: 'Shield',
    keywords: ['scotchgard', 'protection', 'stain protection', 'fabric guard']
  },
  {
    title: 'Fast Drying Technology',
    url: '#fast-drying',
    excerpt: 'Advanced drying technology gets carpets dry in 2-4 hours, not days. Walk on them sooner.',
    category: 'Methods',
    iconName: 'Wind',
    keywords: ['fast drying', 'quick dry', 'dry time', 'rapid drying']
  },
  {
    title: 'Eco-Friendly Cleaning',
    url: '#eco-friendly',
    excerpt: 'Safe, non-toxic, biodegradable cleaning solutions that are gentle on families and the environment.',
    category: 'Methods',
    iconName: 'Leaf',
    keywords: ['eco-friendly', 'green cleaning', 'safe cleaning', 'non-toxic']
  },
  {
    title: 'Carpet Maintenance Tips',
    url: '#maintenance',
    excerpt: 'DIY tips and tricks to keep your carpets fresh and clean between professional cleaning sessions.',
    category: 'Care',
    iconName: 'Target',
    keywords: ['maintenance', 'DIY', 'tips', 'care']
  },
  {
    title: 'Transparent Pricing',
    url: '#pricing',
    excerpt: 'Clear, honest pricing from £25 per room or £2.50-£3.50 per square meter. No hidden fees.',
    category: 'Pricing',
    iconName: 'TrendingUp',
    keywords: ['pricing', 'cost', 'price', 'cheap', 'affordable']
  },
  {
    title: 'Health Benefits',
    url: '#health-benefits',
    excerpt: 'Professional cleaning removes allergens, dust mites, and improves indoor air quality for healthier living.',
    category: 'Care',
    iconName: 'Heart',
    keywords: ['health', 'allergens', 'air quality', 'dust mites']
  }
]

// FAQ data (20 homeowner-focused questions)
const faqData = [
  {
    question: 'How much does carpet cleaning cost in Manchester?',
    answer: 'Carpet cleaning in Manchester typically costs £25-£50 per room depending on size, or £2.50-£3.50 per square meter. We offer transparent pricing with no hidden fees. Living rooms average £35-£50, bedrooms £25-£40, and stairs/hallways £30-£45. Multi-room discounts available. Request a free quote online or call 07405 428259 for exact pricing.'
  },
  {
    question: 'How long does carpet cleaning take?',
    answer: 'A standard 3-bedroom house takes approximately 2-3 hours to clean all carpets thoroughly. Single rooms take 30-45 minutes. Time varies based on carpet size, condition, and stain treatment needs. Our technicians work efficiently without compromising quality, using professional truck-mounted equipment for faster cleaning.'
  },
  {
    question: 'How long until my carpets are dry after cleaning?',
    answer: 'With our advanced hot water extraction system, carpets typically dry in 2-4 hours. We use powerful suction to remove 95% of moisture, significantly faster than traditional methods that can take 24-48 hours. We can also use low-moisture cleaning for even faster drying (1-2 hours) when needed. Ventilation and heating speed up drying time.'
  },
  {
    question: 'Can you remove red wine, coffee, and tough stains?',
    answer: 'Yes! We specialize in removing stubborn stains including red wine, coffee, tea, food spills, ink, grease, and more. We use professional-grade stain removers and treatment techniques tailored to each stain type. While most stains can be removed or significantly improved, results depend on stain age and carpet type. Old or set-in stains may not be 100% removable but will be noticeably better.'
  },
  {
    question: 'Is carpet cleaning safe for pets and children?',
    answer: 'Absolutely! We use family-safe, pet-friendly cleaning solutions that are non-toxic, biodegradable, and free from harsh chemicals. Our products are safe for kids, pets, and people with allergies or sensitivities. Carpets are safe to walk on once dry (typically 2-4 hours). We can also use completely chemical-free hot water extraction if preferred.'
  },
  {
    question: 'Do you clean all types of carpets?',
    answer: 'Yes, we clean all carpet types including wool, nylon, polyester, polypropylene, silk, cotton, and blended fibers. We also clean oriental rugs, Persian rugs, delicate antique carpets, shaggy carpets, Berber, and loop pile carpets. Our technicians assess fiber type and adjust cleaning methods, temperature, and products accordingly to ensure safe, effective cleaning without damage.'
  },
  {
    question: 'Can you remove pet urine odors permanently?',
    answer: 'Yes! Pet urine odors require specialized enzyme-based treatments that break down uric acid crystals and bacteria causing the smell. We don\'t just mask odors – we eliminate them at the source. For severe cases, we may need to treat carpet padding or subfloor. Most pet odors can be completely removed, though extremely severe or old damage may require carpet replacement. See our pet odor removal service for details.'
  },
  {
    question: 'Do I need to move furniture before you arrive?',
    answer: 'We move light furniture like chairs, small tables, and ottomans as part of our service at no extra charge. We ask that you remove breakables, electronics, and personal items from surfaces. Heavy furniture like beds, sofas, wardrobes, and entertainment units typically stay in place – we clean around them and can clean underneath if accessible. We can move heavy items for an additional fee if needed.'
  },
  {
    question: 'How often should carpets be professionally cleaned?',
    answer: 'We recommend professional carpet cleaning every 6-12 months for most households. High-traffic areas or homes with pets, children, or allergies benefit from cleaning every 3-6 months. Low-traffic areas like bedrooms can go 12-18 months. Regular professional cleaning extends carpet life, maintains appearance, removes allergens, and prevents dirt from becoming embedded in fibers.'
  },
  {
    question: 'Do you offer same-day or emergency carpet cleaning?',
    answer: 'Yes! We offer same-day carpet cleaning for urgent situations like flooding, pet accidents, or pre-event emergencies (subject to availability). Call 07405 428259 before 10am for potential same-day service. We also offer emergency stain treatment within 24 hours. Next-day appointments are usually available. Book online for scheduled appointments at your convenience.'
  },
  {
    question: 'What\'s the difference between steam cleaning and dry cleaning?',
    answer: 'Steam cleaning (hot water extraction) uses hot water and cleaning solution injected deep into carpet fibers, then extracted with powerful suction. It\'s the most thorough method, removing deep dirt and killing bacteria. Drying takes 2-4 hours. Dry cleaning uses minimal moisture with chemical compounds or encapsulation. It dries in 1-2 hours but is less effective for deep cleaning. We primarily use steam cleaning for best results.'
  },
  {
    question: 'Can you clean carpets on stairs and in hallways?',
    answer: 'Yes, we specialize in cleaning high-traffic areas like stairs and hallways which show dirt quickly. Stair cleaning requires specialized attachments and techniques due to angles and edges. We clean each step thoroughly including risers and edges. Hallways are cleaned with same care as rooms. Stairs typically cost £30-£45 depending on number of steps. Hallways priced per square meter or as a room.'
  },
  {
    question: 'Do you offer carpet protection treatment after cleaning?',
    answer: 'Yes! We offer Scotchgard fabric protection treatment that creates a protective barrier around carpet fibers. This helps repel liquid spills, prevents stains from setting, and makes future cleaning easier. Protection lasts 6-12 months depending on traffic. Cost is typically £15-£25 per room. Highly recommended for light-colored carpets, high-traffic areas, and homes with kids or pets.'
  },
  {
    question: 'Are your cleaning products eco-friendly and non-toxic?',
    answer: 'Yes! All our standard cleaning products are eco-friendly, biodegradable, and non-toxic. They\'re safe for children, pets, and the environment. We use plant-based solutions free from harsh chemicals, phosphates, and artificial fragrances. For extra-sensitive clients, we offer completely chemical-free hot water extraction using only heated water. Our eco-friendly approach doesn\'t compromise cleaning effectiveness.'
  },
  {
    question: 'Can you remove old stains that have been there for years?',
    answer: 'We can often improve or remove old stains, but success depends on stain type, age, and previous treatment attempts. Some old stains have permanently altered carpet fibers (especially if heat-set or bleached). We use specialized pre-treatment and professional stain removers. Many old stains show significant improvement even if not 100% removed. We\'ll assess during our visit and provide honest expectations about results.'
  },
  {
    question: 'Do you clean area rugs and oriental rugs?',
    answer: 'Yes! We clean area rugs, oriental rugs, Persian rugs, and specialty rugs. Delicate or valuable rugs may require off-site cleaning at our facility for proper care. We assess fiber content (wool, silk, cotton), dye stability, and construction before cleaning. Oriental rugs receive gentle hand cleaning or specialized equipment. See our rug cleaning service for detailed information. We also clean rug pads and can pick up and deliver rugs if needed.'
  },
  {
    question: 'What areas of Manchester do you cover?',
    answer: 'We cover all of Manchester including Manchester city centre, Salford, Trafford, Stockport, Stretford, Sale, Altrincham, Chorlton, Didsbury, Withington, Fallowfield, Levenshulme, Gorton, Oldham, Rochdale, Bury, Bolton, and surrounding Greater Manchester areas. We may serve locations outside this area – call 07405 428259 to confirm. No call-out charges within our service area. Same competitive rates across all locations.'
  },
  {
    question: 'Do you offer weekend and evening appointments?',
    answer: 'Yes! We offer flexible scheduling including evenings (until 7pm) and weekends (Saturday and Sunday) at no extra charge. Weekend appointments are popular and book up quickly, so we recommend scheduling in advance. Same competitive rates apply regardless of day or time. Book online 24/7 or call 07405 428259 during business hours to arrange your preferred appointment time.'
  },
  {
    question: 'Is there a minimum charge for carpet cleaning?',
    answer: 'Yes, we have a minimum charge of £60 which typically covers 2 small rooms or 1 large room. This covers our travel time, equipment setup, and ensures we can provide thorough service. For larger jobs (3+ rooms or whole house), per-room or per-square-meter pricing offers better value. Multi-room discounts available. Request a free quote to see exact pricing for your specific needs.'
  },
  {
    question: 'Do you offer any guarantees on your carpet cleaning?',
    answer: 'Yes! We offer a 100% satisfaction guarantee. If you\'re not completely happy with our cleaning, we\'ll re-clean the affected area for free within 7 days. We\'re fully insured for damage or accidents (though extremely rare). We guarantee safe cleaning methods appropriate for your carpet type. While we can\'t guarantee 100% stain removal on all stains (some are permanent), we guarantee we\'ll use our best efforts and professional expertise to achieve the best possible results.'
  }
]

export default function CarpetCleaningClusterPage() {
  return (
    <ClientWrapper pageTitle="Carpet Cleaning Manchester - Complete Homeowner Guide">
      <div className="min-h-screen bg-white">

        {/* Hero Section - Residential/B2C Optimized */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50/30">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 right-20 w-56 h-56 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-6">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-blue-600">Services</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Carpet Cleaning</span>
              </div>

              {/* Topic Badge */}
              <Badge className="mb-6 bg-blue-100 text-blue-800 text-sm px-4 py-2">
                Professional Home Services
              </Badge>

              {/* H1 with Primary Keyword */}
              <h1 className="speakable-headline text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Carpet Cleaning Manchester
                <span className="block text-blue-600 mt-2">Expert Home Carpet Care</span>
              </h1>

              {/* Comprehensive Description */}
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
                Professional carpet cleaning services for homes across Manchester. Safe for kids and pets, fast drying technology, expert stain removal. Serving families with deep cleaning, pet odor treatment, and eco-friendly solutions from £25 per room.
              </p>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Family Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-medium">5★ Rated</span>
                </div>
                <div className="flex items-center gap-2">
                  <PawPrint className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Pet Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="h-5 w-5 text-sky-600" />
                  <span className="font-medium">Fast Drying</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/quote">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold shadow-xl px-8 py-4 text-lg rounded-xl transition-all hover:scale-105">
                    Get Home Quote →
                  </Button>
                </Link>
                <a href="tel:07405428259" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all">
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
            <div className="speakable-tldr bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                <strong>Blowup Cleaners</strong> provides professional carpet cleaning services in <strong>Manchester, Salford, and Trafford</strong> for residential homes. Services include deep carpet cleaning, stain removal, pet odor treatment, and eco-friendly cleaning safe for kids and pets. <span className="speakable-pricing">Pricing from £25-£50 per room or £2.50-£3.50 per square meter with multi-room discounts.</span> Fast drying in 2-4 hours, same-day appointments available. <span className="speakable-cta">Call <a href="tel:07405428259" className="text-blue-600 font-bold hover:underline">07405 428259</a> for a free home quote.</span>
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
                Complete Carpet Cleaning Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive carpet cleaning services for your home
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

              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Professional Carpet Cleaning?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Professional carpet cleaning is a specialized deep-cleaning service that uses commercial-grade equipment, expert techniques, and powerful cleaning solutions to remove dirt, stains, allergens, and odors that regular vacuuming cannot address. Unlike DIY carpet cleaning machines available for hire, professional services employ truck-mounted hot water extraction systems (also called steam cleaning) that reach temperatures of 200-220°F and produce suction power 10-15 times stronger than consumer models, ensuring deeper cleaning and faster drying times.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The professional carpet cleaning process involves pre-inspection to identify carpet fiber type and problematic areas, pre-treatment of stains and high-traffic zones with specialized solutions, deep extraction using hot water and industrial suction to remove embedded dirt and cleaning solution, optional stain removal treatment for stubborn marks, and post-cleaning grooming to restore carpet pile and accelerate drying. This comprehensive approach not only improves carpet appearance but also extends lifespan, removes health-damaging allergens, eliminates odors, and protects your flooring investment which can cost thousands to replace.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Homeowners should schedule professional carpet cleaning every 6-12 months depending on household factors. Families with young children benefit from cleaning every 6 months as kids spend time on floors and spill frequently. Pet owners should clean every 3-6 months due to dander, tracked-in dirt, and accident risk. High-traffic areas like living rooms and hallways may need more frequent attention than bedrooms. Allergy sufferers particularly benefit from regular professional cleaning which removes dust mites, pollen, and other allergens that trigger symptoms. Regular professional maintenance prevents dirt from becoming embedded and grinding down carpet fibers, significantly extending carpet lifespan and maintaining home value.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="deep-cleaning">Deep Carpet Cleaning Methods</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hot water extraction, commonly called steam cleaning, is the gold standard for residential carpet cleaning and the method recommended by most carpet manufacturers. This process injects hot water mixed with cleaning solution deep into carpet fibers at high pressure (typically 400-600 PSI), agitates the solution to break down dirt and oils, then immediately extracts the water along with dissolved dirt using powerful vacuum suction. The combination of heat, chemical action, and mechanical extraction removes up to 98% of dirt, bacteria, and allergens from carpet fibers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our truck-mounted hot water extraction system offers significant advantages over portable machines. The truck-mounted unit generates consistent high heat (200°F+) throughout the job, provides superior suction power (15-20 inches of mercury vacuum) for better water extraction and faster drying, allows longer continuous cleaning without stopping to empty tanks, and keeps noise and exhaust outside your home for a more pleasant experience. Portable machines simply cannot match this cleaning power—they use lower temperatures, weaker suction, and require more passes to achieve similar results, leading to longer drying times and less thorough cleaning.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The hot water extraction process we use follows a systematic approach: first, we vacuum thoroughly to remove loose dirt and debris; second, we apply pre-treatment solution to high-traffic areas and stains, allowing 5-10 minutes for chemical action; third, we make multiple cleaning passes with the extraction wand, using overlapping strokes in different directions to ensure complete coverage; fourth, we perform targeted spot treatment on any remaining visible stains; and finally, we groom carpet pile with a carpet rake to accelerate drying and restore appearance. This meticulous process typically achieves 95% moisture removal, allowing carpets to dry in just 2-4 hours under normal conditions—much faster than the 24-48 hours common with rental machines.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="stain-removal">Expert Stain Removal Treatment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Stain removal is both an art and a science, requiring knowledge of chemistry, carpet fibers, and specialized treatment techniques. Different stains require different approaches—using the wrong chemical or technique can actually set a stain permanently or damage carpet fibers. We maintain an arsenal of professional-grade stain removers including acid-based cleaners for alkaline stains, alkaline cleaners for acidic stains, solvent-based cleaners for oil and grease, enzyme digesters for organic matter, and oxidizing agents for color-based stains. Each stain is assessed individually and treated with the appropriate solution and technique.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Common household stains we regularly encounter and successfully treat include red wine (which requires immediate acid treatment to prevent tannin bonding), coffee and tea (tannin-based stains needing alkaline treatment), food spills like tomato sauce or curry (combination of oil and organic matter requiring multi-step treatment), grease and oil (requiring solvent-based treatment), ink and marker (needing alcohol-based solvents), mud and dirt (mechanical extraction with surfactants), and blood (cold water treatment with enzyme digesters). The key to successful stain removal is prompt professional treatment—the longer a stain sits, the more it bonds with carpet fibers, making complete removal difficult or impossible. Fresh stains have a 90%+ removal success rate, while old stains may only improve 50-70% depending on severity.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our stain removal process begins with identifying the stain type and carpet fiber to select appropriate treatment chemicals. We then test the cleaning solution on an inconspicuous area to ensure colorfastness and prevent damage. Pre-treatment is applied and allowed to dwell for proper chemical action (typically 5-15 minutes depending on stain). We use specialized spotting tools including bone scrapers to gently agitate fibers, spotting brushes for mechanical action, and heated extraction tools for stubborn spots. Multiple applications may be necessary for set-in stains. After treatment, we rinse thoroughly to remove all chemical residue which could attract dirt if left behind. While we cannot guarantee 100% removal of all stains (some are permanent fiber damage), our success rate is exceptionally high, and we'll always be honest about expected results before beginning treatment.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Pet Stain and Odor Treatment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Pet urine is one of the most challenging carpet cleaning issues homeowners face because it's not just a surface stain—urine penetrates deep into carpet fibers, backing, padding, and even subfloors. The yellow stain you see is only part of the problem; the real issue is uric acid crystals that form as urine dries. These crystals are insoluble in water and reactivate with moisture or humidity, which is why pet urine odors often return even after cleaning. Standard carpet cleaning cannot eliminate these crystals—specialized enzyme-based treatments are absolutely necessary to permanently break down uric acid and eliminate odors at the source.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our professional pet urine treatment protocol begins with UV black light inspection to identify all affected areas, including old spots invisible to the naked eye. We then assess contamination depth using moisture meters to determine if padding or subfloor treatment is needed. For surface-level contamination, we apply enzyme-based treatments that contain beneficial bacteria which digest organic matter and uric acid crystals. These enzymes need time to work—typically 24-48 hours—and may require multiple applications for severe cases. For deep contamination that has reached carpet padding, we may need to pull back carpet, replace affected padding sections, seal subfloors with odor-blocking primer, and treat both carpet backing and subfloor with enzymes before reinstallation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Pet odor removal success depends heavily on how quickly the issue is addressed and how severe the contamination has become. Fresh pet accidents treated within hours have near 100% success rates with simple surface treatment. Accidents that have dried and been there for weeks can often be fully remedied with enzyme treatment and extraction. However, chronic pet urine problems where a pet has repeatedly urinated in the same spot for months or years may have caused permanent damage requiring carpet and padding replacement. We provide honest assessment of the situation and recommend the most cost-effective solution, whether that's professional treatment or replacement. For pet owners, we also recommend our carpet protection treatment after cleaning which creates a barrier making future accidents easier to clean and preventing deep penetration into fibers.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="carpet-types">Different Carpet Types We Clean</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Not all carpets are created equal, and using a one-size-fits-all cleaning approach can damage certain fiber types. Professional carpet cleaners must understand fiber composition, construction methods, and manufacturer recommendations to clean effectively without causing harm. We regularly clean synthetic carpets including nylon (the most durable and resilient synthetic fiber, highly stain-resistant, used in 60% of residential carpets), polyester (soft, budget-friendly, naturally stain-resistant but less durable than nylon), polypropylene/olefin (moisture and mildew resistant, commonly used in basements and outdoor carpets), and triexta (newer fiber offering softness of polyester with durability approaching nylon, excellent stain resistance).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Natural fiber carpets require gentler handling and specialized techniques. Wool carpets are luxurious, durable, and naturally flame-resistant but require pH-neutral cleaning solutions, lower water temperatures (120-140°F vs 200°F for synthetics), and gentle agitation to prevent felting and shrinkage. We use wool-safe detergents and avoid over-wetting which can cause browning. Cotton carpets are absorbent and prone to shrinkage, requiring low-moisture cleaning methods. Silk carpets and silk-blend oriental rugs are extremely delicate and usually cleaned off-site at our facility using specialized hand-cleaning techniques. Sisal, jute, and seagrass natural fiber carpets are highly sensitive to moisture and generally cleaned with dry or very low-moisture methods to prevent fiber damage and mildew.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Specialty carpets include oriental and Persian rugs which may combine wool, silk, and cotton fibers with natural dyes requiring careful testing and gentle cleaning; Berber carpets with looped construction that can snag easily, requiring special low-agitation techniques; shag and high-pile carpets needing specialized grooming tools and extra drying time due to dense fibers; and antique or valuable rugs which may require off-site cleaning in controlled conditions to prevent damage. Before cleaning any carpet, we perform fiber identification tests, check colorfastness with white towel testing, inspect for pre-existing damage or wear, and review manufacturer care labels when available. This careful assessment ensures we use appropriate cleaning methods, temperatures, chemicals, and techniques to achieve outstanding results while protecting your carpet investment.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="room-by-room">Room-by-Room Carpet Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Different rooms in your home have different carpet cleaning needs based on traffic patterns, usage, and soiling types. Living rooms and family rooms are high-traffic areas that accumulate dirt from foot traffic, food and drink spills, pet activity, and general family use. These rooms benefit from pre-treatment of traffic lanes where dirt is most embedded. We pay special attention to areas in front of sofas and chairs where skin oils transfer from feet and hands. Living rooms typically require 45-60 minutes to clean thoroughly and should be professionally cleaned every 6-12 months depending on household size and activity level.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Bedrooms generally have lower traffic than living areas but still accumulate dust, allergens, skin cells, and occasional spills. Bedrooms are where people spend 6-8 hours daily, making allergen removal particularly important for quality sleep and respiratory health. We focus on areas around the bed, closet entrances, and near windows where dust accumulates. Bedrooms can often go 12-18 months between professional cleanings unless there are specific stains or allergy concerns. Children's bedrooms may need more frequent cleaning due to spills, craft materials, and higher activity levels. Master bedrooms with en-suite bathrooms may have moisture-related issues requiring attention.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Stairs and hallways are often the most challenging areas due to concentrated traffic funneling through narrow spaces. Stair cleaning requires specialized attachments and techniques due to angles, edges, and limited space for equipment. We clean each step individually including risers and pay attention to edges where dirt accumulates. Hallways act as traffic corridors connecting rooms and accumulate dirt quickly, often showing wear patterns down the center. These high-traffic areas may need cleaning every 6 months even if other rooms are cleaned annually. Dining rooms face food and drink spill risks and may have sticky residue from dropped food. Basements and spare rooms with minimal use can go longer between cleanings but may have moisture or musty odor issues requiring special treatment.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">End of Tenancy Carpet Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                End of tenancy carpet cleaning is essential for tenants hoping to receive their full deposit back and for landlords preparing properties for new tenants. Most tenancy agreements require carpets to be professionally cleaned before move-out, and landlords can legally deduct cleaning costs from deposits if this requirement isn't met. Professional end of tenancy carpet cleaning costs £80-£200 for a typical 2-3 bedroom property—far less than the £500-£1000+ deposits at risk. We provide official receipts and certificates of cleaning that satisfy landlord and letting agent requirements.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our end of tenancy service includes comprehensive cleaning of all carpeted areas to the highest standard, treatment of stains and high-traffic wear, deodorizing to eliminate cooking, pet, and smoking odors, and documentation with dated receipts and certificates proving professional cleaning was completed. We understand the time-sensitive nature of move-outs and offer flexible scheduling including evening and weekend appointments. Same-day or next-day service is often available for urgent move-out situations. We recommend booking 2-3 days before your move-out date to ensure carpets are completely dry before final inspection.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For landlords, end of tenancy cleaning between tenants is an investment that pays dividends. Clean, fresh-smelling carpets make properties more appealing to prospective tenants, allowing you to command higher rent and reduce vacancy time. Professional cleaning removes the accumulated dirt, stains, and odors from previous tenants, giving new occupants a fresh start. Regular professional cleaning also extends carpet lifespan, reducing replacement costs. We offer landlord account options for property managers with multiple units, providing consistent service, priority scheduling, and volume discounts. Many of our landlord clients schedule cleanings every 2-3 years or between tenancies, whichever comes first, to maintain property standards and protect their flooring investment.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="carpet-protection">Carpet Protection Treatments</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Carpet protection treatment, commonly known by the brand name Scotchgard, applies a fluorochemical coating to carpet fibers that creates a protective barrier around each strand. This invisible shield causes liquids to bead up on the surface rather than immediately soaking in, giving you precious extra time to blot up spills before they become permanent stains. Protection also helps resist soil accumulation by preventing dirt particles from bonding to fibers, making regular vacuuming more effective and extending time between professional cleanings. Most new carpets come with factory-applied protection, but this wears off over time with traffic and previous cleanings.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We offer professional-grade carpet protection reapplication after every cleaning. Unlike consumer spray-on products, professional protection is applied as a liquid that penetrates and coats each individual fiber during the rinse cycle, providing even, thorough coverage. The treatment is safe, non-toxic, odorless when dry, and doesn't affect carpet texture or appearance. Protection typically lasts 6-12 months depending on traffic levels, gradually wearing away in high-traffic areas first. Benefits include easier spot cleaning of spills, extended time between professional cleanings, reduced permanent staining from accidents, and extended overall carpet life.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Carpet protection is particularly valuable in certain situations: homes with young children who spill frequently; pet owners dealing with accident risks; light-colored carpets that show stains easily; high-traffic areas like hallways and living rooms; and dining rooms where food and drink spills are common. The cost of protection treatment is modest—typically £15-£25 per room or £40-£60 for a whole house—making it an inexpensive insurance policy against future staining. We recommend protection for most clients as a preventive measure. While protection doesn't make carpets stain-proof, it significantly improves your ability to clean up spills successfully and maintain carpet appearance between professional cleanings. Protection is most effective when applied to clean carpets, which is why we offer it as an add-on service after deep cleaning.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="fast-drying">Fast Drying Technology and Techniques</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Drying time is one of the most important factors affecting customer satisfaction with carpet cleaning. Traditional carpet cleaning methods can leave carpets soaking wet for 24-48 hours, creating inconvenience, preventing normal use of rooms, and raising concerns about mold or mildew growth. Our advanced truck-mounted hot water extraction system is specifically designed to minimize drying time through superior water extraction, achieving moisture removal rates of 95% compared to 80-85% for portable machines. This dramatic difference in extraction efficiency reduces drying time from days to just 2-4 hours under normal conditions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Several factors contribute to our fast drying performance. First, our truck-mounted system generates continuous high-heat water (200-220°F) throughout the job, and hot water evaporates much faster than lukewarm water used by rental machines. Second, our vacuum suction power of 15-20 inches of mercury creates much stronger extraction than portable machines can achieve. Third, our experienced technicians use proper wand technique with slow, overlapping passes and multiple directions to ensure thorough extraction without over-wetting. Fourth, we avoid over-application of cleaning solution—using just enough for effective cleaning but not so much that it saturates backing and padding. Finally, we use carpet rakes and grooming tools to lift pile and expose more fiber surface area to air, accelerating evaporation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Homeowners can further accelerate drying through simple steps: increase air circulation by opening windows in mild weather; turn on ceiling fans or portable fans to move air across carpet surface; use air conditioning in summer to reduce humidity and increase air flow; use heating in winter to raise temperature and speed evaporation; and keep pets and children off carpets until completely dry (usually 2-4 hours). Avoid walking on damp carpets with outdoor shoes to prevent re-soiling. For homes requiring even faster drying (such as for same-day events), we offer low-moisture cleaning methods that dry in just 1-2 hours, though these methods don't provide the same depth of cleaning as full hot water extraction. In most cases, carpets cleaned in the morning are dry and ready for normal use by evening, minimizing disruption to your household routine.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="eco-friendly">Eco-Friendly and Non-Toxic Cleaning Solutions</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Environmental consciousness and health concerns have made eco-friendly carpet cleaning increasingly popular among homeowners, particularly those with young children, pets, allergies, or chemical sensitivities. Traditional carpet cleaning products sometimes contain harsh chemicals including perchloroethylene (perc), naphthalene, butoxy ethanol, and artificial fragrances that can leave residues, trigger allergic reactions, or pose health risks with prolonged exposure. Our eco-friendly cleaning approach uses plant-based, biodegradable solutions that are safe for families, pets, and the environment while still delivering exceptional cleaning results.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our standard eco-friendly cleaning products are derived from natural sources like coconut, corn, and citrus, formulated to be non-toxic, hypoallergenic, biodegradable within 7-14 days, free from harsh chemicals and synthetic fragrances, pH-balanced to be gentle on carpet fibers, and safe for children and pets to contact once carpets are dry. These products clean just as effectively as conventional chemicals because they rely on natural surfactants, enzymes, and oxygen-based cleaning action rather than harsh solvents. The result is clean, fresh carpets without chemical residue, strong odors, or health concerns. Many clients with asthma, allergies, or chemical sensitivities specifically request our eco-friendly cleaning for peace of mind.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For clients seeking the ultimate in natural cleaning, we also offer completely chemical-free hot water extraction using only superheated water (200-220°F) with no cleaning agents whatsoever. While this method doesn't include the chemical action of detergents and may not be as effective on heavy soiling or stubborn stains, it's ideal for maintenance cleaning, homes with severe chemical sensitivities, nurseries and children's rooms, and clients who prefer the most natural approach possible. The high heat alone provides sanitizing action, killing dust mites and bacteria, while the powerful extraction removes dirt and allergens mechanically. This method is particularly popular with parents of newborns and individuals with multiple chemical sensitivity (MCS). Regardless of which eco-friendly option you choose, you can feel confident that your carpets are clean, healthy, and safe for your family.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="maintenance">DIY Carpet Maintenance Tips Between Professional Cleanings</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While professional carpet cleaning should be done every 6-12 months, proper maintenance between cleanings significantly extends carpet life and maintains appearance. The most important maintenance step is regular vacuuming—ideally 2-3 times per week for high-traffic areas and weekly for low-traffic areas. Frequent vacuuming removes surface dirt before it gets ground deep into fibers where it acts like sandpaper, cutting and abrading strands. Use a vacuum with strong suction and a rotating brush (beater bar) for optimal dirt removal. Empty or change vacuum bags/filters regularly as reduced airflow dramatically decreases cleaning effectiveness. Vacuum slowly, making multiple passes in different directions to lift dirt from all angles.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Prompt spill response is critical to preventing permanent stains. The golden rule is to act immediately—the longer a spill sits, the harder it becomes to remove. For liquid spills, blot (don't rub!) with clean white towels or paper towels, working from the outside edge toward the center to prevent spreading. Replace towels as they absorb liquid and continue until no more moisture transfers. For solid spills, scrape up excess material with a spoon or dull knife before treating. Never rub or scrub stains as this pushes material deeper into fibers and can damage pile. For water-soluble spills (coffee, juice, wine), blot with plain water or a mixture of 1/4 teaspoon mild dish soap in 1 cup warm water. For greasy stains, use a small amount of rubbing alcohol on a cloth. Always test any cleaning solution on an inconspicuous area first.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Additional maintenance practices include using door mats at all entrances to reduce tracked-in dirt (this alone can reduce carpet soiling by 80%), implementing a no-shoes policy indoors to minimize dirt and oils, rearranging furniture periodically to change traffic patterns and prevent permanent wear paths, using area rugs or runners in high-traffic zones to protect underlying carpet, trimming pet nails regularly to reduce snagging and fiber damage, grooming carpet pile occasionally with a carpet rake to lift crushed fibers, and addressing musty odors quickly as they may indicate moisture problems. Avoid DIY carpet cleaning machines between professional cleanings as they often leave excessive moisture and detergent residue that attracts dirt, potentially making carpets dirtier faster. By following these simple maintenance practices and scheduling regular professional deep cleaning, you can keep your carpets looking beautiful and extend their lifespan significantly, protecting your flooring investment for years to come.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="pricing">Transparent Pricing Guide for Carpet Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe in honest, transparent pricing with no hidden fees or surprise charges. Carpet cleaning can be priced either per room or per square meter, depending on which offers better value for your specific situation. Per-room pricing typically ranges from £25-£50 per room depending on size: small bedrooms (10x10 or smaller) cost £25-£35; medium rooms like standard bedrooms and dining rooms (10x12 to 12x14) cost £30-£40; large rooms like master bedrooms and living rooms (14x16 and larger) cost £35-£50; and stairs (13-15 steps) cost £30-£45. Per-square-meter pricing ranges from £2.50-£3.50 per square meter for most residential work, with per-square-meter pricing often more cost-effective for very large rooms, open-plan living spaces, or whole-house cleaning.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We offer multi-room discounts for larger jobs: 3 rooms receive 10% discount; 4+ rooms receive 15% discount; and whole-house cleaning receives 20% discount. Example pricing for a typical 3-bedroom semi-detached house includes living room (£40), dining room (£35), 3 bedrooms (£30 + £30 + £35 = £95), stairs (£35), hallway (£25), totaling £230 before discount. With a 15% whole-house discount (4+ rooms), the final price is £195.50. Additional services are available at extra cost: heavy stain treatment costs £10-£25 per room depending on severity; pet urine treatment costs £20-£40 per room; carpet protection (Scotchgard) costs £15-£25 per room; furniture moving for heavy items costs £20-£40; and same-day/emergency service costs £30-£50 surcharge depending on availability.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We have a minimum charge of £60 which typically covers 2 small rooms or 1 large room plus stairs. This covers our travel time, equipment setup, and ensures we can provide thorough service. Weekend and evening appointments are available at no extra charge—same competitive rates apply regardless of day or time. We serve all of Manchester, Salford, Trafford, and surrounding areas with no call-out fees within our service area. All prices include pre-vacuuming, pre-treatment of traffic lanes and stains, professional hot water extraction cleaning, post-cleaning grooming, and full satisfaction guarantee. Payment is accepted by cash, bank transfer, or card (no extra card fees). We provide instant online quotes through our website, or you can call 07405 428259 to discuss your specific needs and receive a personalized quote. What you're quoted is what you pay—no hidden extras, no high-pressure upselling, just honest pricing for professional carpet cleaning service.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="health-benefits">Health Benefits of Regular Carpet Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Carpets act as giant filters in your home, trapping dust, pollen, pet dander, bacteria, and other contaminants that would otherwise circulate in the air you breathe. While this filtering effect improves air quality initially, carpets eventually become saturated with pollutants that regular vacuuming cannot remove. Professional carpet cleaning removes these accumulated health hazards, providing significant benefits particularly for allergy and asthma sufferers. Studies show that professional carpet cleaning can remove up to 98% of allergens from carpets, dramatically improving indoor air quality and reducing allergy symptoms for occupants.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Specific health benefits of professional carpet cleaning include dust mite elimination (microscopic insects that feed on dead skin cells and are a major asthma trigger—hot water extraction kills dust mites and removes their feces which contain potent allergens); allergen removal (pollen, pet dander, mold spores, and other allergens trapped in carpet fibers are flushed out during cleaning); bacteria and germ reduction (carpets harbor bacteria including E. coli, Salmonella, and Staphylococcus which can cause illness—high-temperature steam cleaning provides sanitizing action); mold and mildew prevention (professional extraction removes moisture that could support mold growth, while thorough drying prevents new mold development); and improved air quality (cleaner carpets mean fewer particles becoming airborne with foot traffic, resulting in cleaner air throughout your home).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The health benefits are particularly important for vulnerable populations including infants and young children who spend significant time playing on carpets and put hands and toys in their mouths, elderly individuals with compromised immune systems, asthma sufferers who are sensitive to dust mites and other allergens, and anyone with allergies to pollen, pet dander, or dust. For these individuals, we recommend professional carpet cleaning every 6 months rather than annually. Some clients with severe allergies or asthma schedule quarterly cleaning for maximum benefit. The investment in professional cleaning is far less than the costs of allergy medications, doctor visits, and lost productivity due to illness. Beyond health benefits, clean carpets simply create a more pleasant, fresh-smelling home environment that you'll enjoy spending time in. When you consider that most people spend 60-90% of their time indoors, investing in indoor air quality through regular professional carpet cleaning is one of the best health decisions you can make for your family.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Choose Blowup Cleaners for Your Carpet Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Blowup Cleaners has earned a reputation as one of Manchester's most trusted carpet cleaning services through our commitment to quality, transparency, and customer satisfaction. We're a family-owned local business, not a franchise or national chain, which means we're personally invested in every job and our reputation in the community. Our technicians are highly trained, fully insured, and equipped with professional truck-mounted hot water extraction systems that deliver results far superior to rental machines or portable equipment. We use eco-friendly, family-safe cleaning products as standard, ensuring your home is clean and healthy without harsh chemical residues.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                What sets us apart includes our transparent pricing with no hidden fees or surprise charges—what we quote is what you pay; our 100% satisfaction guarantee—if you're not completely happy, we'll re-clean affected areas free within 7 days; our flexible scheduling including evenings and weekends at no extra charge; our same-day service availability for urgent situations; our expertise with all carpet types from budget synthetics to expensive wool and oriental rugs; our specialized pet stain and odor removal using professional enzyme treatments; our fast 2-4 hour drying time thanks to superior extraction equipment; and our eco-friendly approach using plant-based, biodegradable solutions safe for kids and pets.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our 5-star rating across Google, Facebook, and Trustpilot reflects thousands of satisfied customers throughout Manchester, Salford, and Trafford. We've cleaned carpets in over 10,000 homes since our founding, building lasting relationships with clients who trust us to maintain their homes year after year. Many of our customers are repeat clients who schedule annual or bi-annual cleaning, or referrals from happy customers—the ultimate compliment. We're fully insured with public liability coverage for your peace of mind. We provide official receipts and certificates of cleaning suitable for tenancy agreements and landlord requirements. When you choose Blowup Cleaners, you're choosing professional expertise, advanced equipment, eco-friendly products, honest pricing, reliable service, and a satisfaction guarantee. Contact us today for a free, no-obligation quote, or book your appointment online in just 60 seconds. Call 07405 428259 or visit blowupcleaners.co.uk to experience the Blowup Cleaners difference.
              </p>

            </div>
          </div>
        </section>

        {/* Pricing Comparison Table */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Carpet Cleaning Pricing Guide
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-blue-600 to-sky-600 text-white">
                    <tr>
                      <th className="p-4 text-left font-semibold">Room Type</th>
                      <th className="p-4 text-center font-semibold">Per Room</th>
                      <th className="p-4 text-center font-semibold">Per Sqm</th>
                      <th className="p-4 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                      <td className="p-4 font-medium">Small Bedroom</td>
                      <td className="p-4 text-center">£25-£35</td>
                      <td className="p-4 text-center">£2.50-£3.50</td>
                      <td className="p-4 text-sm text-gray-600">10x10 or smaller</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                      <td className="p-4 font-medium">Medium Bedroom</td>
                      <td className="p-4 text-center">£30-£40</td>
                      <td className="p-4 text-center">£2.50-£3.50</td>
                      <td className="p-4 text-sm text-gray-600">10x12 to 12x14</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                      <td className="p-4 font-medium">Large Living Room</td>
                      <td className="p-4 text-center">£35-£50</td>
                      <td className="p-4 text-center">£2.50-£3.50</td>
                      <td className="p-4 text-sm text-gray-600">14x16 and larger</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                      <td className="p-4 font-medium">Dining Room</td>
                      <td className="p-4 text-center">£30-£40</td>
                      <td className="p-4 text-center">£2.50-£3.50</td>
                      <td className="p-4 text-sm text-gray-600">Standard size</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                      <td className="p-4 font-medium">Stairs (13-15 steps)</td>
                      <td className="p-4 text-center">£30-£45</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-sm text-gray-600">Includes risers</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="p-4 font-medium">Hallway/Landing</td>
                      <td className="p-4 text-center">£25-£35</td>
                      <td className="p-4 text-center">£2.50-£3.50</td>
                      <td className="p-4 text-sm text-gray-600">Varies by length</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-gray-800 font-medium mb-2">Multi-Room Discounts:</p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• 3 rooms: 10% discount</li>
                  <li>• 4+ rooms: 15% discount</li>
                  <li>• Whole house: 20% discount</li>
                  <li>• Minimum charge: £60 (covers 2 small rooms)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Carpet Cleaning
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about professional carpet cleaning in Manchester
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 hover:border-blue-300 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
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

        {/* Trust & Social Proof Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-sky-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Star, title: '5★ Rating', value: '127 Reviews', color: 'text-yellow-500' },
                { icon: Users, title: 'Happy Customers', value: '10,000+', color: 'text-blue-600' },
                { icon: ShieldCheck, title: 'Satisfaction', value: '100%', color: 'text-green-600' },
                { icon: Clock, title: 'Fast Drying', value: '2-4 Hours', color: 'text-sky-600' }
              ].map((stat, index) => (
                <Card key={index} className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('-600', '-100')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.title}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-sky-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Get Your Carpets Professionally Cleaned?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of Manchester homeowners who trust Blowup Cleaners for professional carpet cleaning.
                Safe for kids & pets, fast drying, satisfaction guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold text-lg px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105">
                    <Calendar className="mr-2 h-5 w-5" />
                    Get Instant Quote
                  </Button>
                </Link>
                <a href="tel:07405428259">
                  <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-semibold text-lg px-8 py-4 rounded-xl transition-all">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: 07405 428259
                  </Button>
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Safe for kids & pets
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Fast 2-4hr drying
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  100% guarantee
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
              'name': 'Carpet Cleaning Manchester - Professional Home Services',
              'description': 'Professional carpet cleaning for homes in Manchester. Safe for kids & pets, fast drying, stain removal.',
              'url': 'https://blowupcleaners.co.uk/services/carpet-cleaning',
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
                { '@type': 'ListItem', 'position': 3, 'name': 'Carpet Cleaning', 'item': 'https://blowupcleaners.co.uk/services/carpet-cleaning' }
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
              'serviceType': 'Carpet Cleaning',
              'provider': {
                '@type': 'LocalBusiness',
                'name': 'Blowup Cleaners',
                'telephone': '+447405428259',
                'areaServed': [
                  { '@type': 'City', 'name': 'Manchester' },
                  { '@type': 'City', 'name': 'Salford' },
                  { '@type': 'City', 'name': 'Trafford' }
                ],
                'priceRange': '£25-£50 per room'
              },
              'offers': {
                '@type': 'Offer',
                'priceCurrency': 'GBP',
                'price': '25',
                'description': 'Professional carpet cleaning from £25 per room or £2.50-£3.50 per square meter'
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
              'priceRange': '£25-£50 per room',
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
