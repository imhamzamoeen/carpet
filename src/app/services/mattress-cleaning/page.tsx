/**
 * Mattress Cleaning Manchester - Cluster/Pillar Page
 *
 * Hub page covering all aspects of mattress cleaning in Manchester
 * Serves as authoritative resource with 3000-5000 words
 * Links to related subtopics with comprehensive information
 */

import Link from 'next/link'
import type { Metadata } from 'next'
import {
  CheckCircle, Shield, Award, Star, ArrowRight, Users, Heart, Wind,
  Sparkles, Zap, Home, Phone, Droplets, Bug, Bed, Thermometer,
  Leaf, Clock, AlertCircle, Building2, Dog, Baby, Lightbulb,
  Target, Scissors, Filter, BadgeCheck
} from 'lucide-react'

import { Button } from '@/components/ui'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

import ClientWrapper from './client-wrapper'
import InteractiveSearch from './interactive-client'

export const metadata: Metadata = {
  title: 'Mattress Cleaning Manchester | Complete Guide 2025 | Professional Deep Clean & Sanitization',
  description: 'Everything about professional mattress cleaning in Manchester. Remove dust mites, allergens, stains & odors. Health benefits, costs, methods explained. From £30 per mattress. Same-day service.',
  keywords: [
    'mattress cleaning Manchester',
    'mattress cleaning cost Manchester',
    'dust mite removal',
    'mattress stain removal Manchester',
    'sanitize mattress Manchester',
    'professional mattress cleaning',
    'mattress deep clean Manchester',
    'allergen removal mattress',
    'bed cleaning services Manchester',
    'mattress odor removal'
  ],

  alternates: {
    canonical: 'https://blowupcleaners.co.uk/services/mattress-cleaning',
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
    title: 'Mattress Cleaning Manchester | Complete Guide 2025',
    description: 'Comprehensive resource hub covering everything about professional mattress cleaning in Manchester. Dust mite removal, stain treatment, health benefits.',
    url: 'https://blowupcleaners.co.uk/services/mattress-cleaning',
    siteName: 'Blowup Cleaners',
    locale: 'en_GB',
    type: 'website',
    images: [{
      url: 'https://blowupcleaners.co.uk/og-mattress-cleaning.jpg',
      width: 1200,
      height: 630,
      alt: 'Professional mattress cleaning services in Manchester'
    }]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mattress Cleaning Manchester | Complete Guide 2025',
    description: 'Comprehensive resource hub covering everything about professional mattress cleaning in Manchester',
    images: ['https://blowupcleaners.co.uk/og-mattress-cleaning.jpg']
  }
}

// Subtopic navigation cards (12 items)
const subtopicCards = [
  {
    title: 'Mattress Cleaning Methods',
    url: '#methods',
    excerpt: 'Discover steam cleaning, dry cleaning, UV sanitization, and which method is best for your mattress type.',
    category: 'Methods',
    iconName: 'Sparkles',
    keywords: ['methods', 'techniques', 'steam cleaning', 'dry cleaning']
  },
  {
    title: 'Cost & Pricing',
    url: '#cost',
    excerpt: 'Understand mattress cleaning pricing in Manchester. From £30 per mattress with transparent, upfront quotes.',
    category: 'Pricing',
    iconName: 'Target',
    keywords: ['cost', 'price', 'quote', 'pricing', 'rates']
  },
  {
    title: 'Dust Mite Removal',
    url: '#dust-mites',
    excerpt: 'Professional dust mite elimination using high-temperature steam. Remove up to 95% of dust mites and allergens.',
    category: 'Health',
    iconName: 'Bug',
    keywords: ['dust mites', 'allergens', 'allergies', 'health']
  },
  {
    title: 'Stain Removal Guide',
    url: '#stains',
    excerpt: 'Expert techniques for removing blood, urine, sweat, vomit, and other tough mattress stains effectively.',
    category: 'Stains',
    iconName: 'Droplets',
    keywords: ['stain removal', 'spots', 'marks', 'blood', 'urine']
  },
  {
    title: 'Odor Elimination',
    url: '#odors',
    excerpt: 'Deep deodorizing treatments that eliminate odors at the source, not just mask them with fragrances.',
    category: 'Odors',
    iconName: 'Wind',
    keywords: ['odor removal', 'smell', 'deodorize', 'fresh']
  },
  {
    title: 'Mattress Types & Cleaning',
    url: '#mattress-types',
    excerpt: 'Specialized cleaning for memory foam, spring, latex, hybrid, and pillow-top mattresses.',
    category: 'Types',
    iconName: 'Bed',
    keywords: ['mattress types', 'memory foam', 'spring', 'latex']
  },
  {
    title: 'Health Benefits',
    url: '#health-benefits',
    excerpt: 'Improve sleep quality, reduce allergies, asthma symptoms, and create a healthier sleep environment.',
    category: 'Health',
    iconName: 'Heart',
    keywords: ['health', 'allergies', 'asthma', 'sleep quality']
  },
  {
    title: 'Commercial Services',
    url: '#commercial',
    excerpt: 'Professional mattress cleaning for hotels, B&Bs, care homes, and rental properties across Manchester.',
    category: 'Commercial',
    iconName: 'Building2',
    keywords: ['commercial', 'business', 'hotels', 'rentals']
  },
  {
    title: 'Same-Day Service',
    url: '#emergency',
    excerpt: 'Emergency same-day mattress cleaning for urgent situations across Manchester, Salford, and Trafford.',
    category: 'Emergency',
    iconName: 'AlertCircle',
    keywords: ['same day', 'emergency', 'urgent', 'fast']
  },
  {
    title: 'Pet Stain Treatment',
    url: '#pets',
    excerpt: 'Specialized enzyme treatments for pet urine, feces, and vomit stains with complete odor elimination.',
    category: 'Pets',
    iconName: 'Dog',
    keywords: ['pet stains', 'pet odor', 'urine', 'animals']
  },
  {
    title: 'Anti-Bacterial Protection',
    url: '#sanitization',
    excerpt: 'Professional sanitization and anti-bacterial treatments that kill 99.9% of bacteria and germs.',
    category: 'Sanitization',
    iconName: 'Shield',
    keywords: ['sanitize', 'bacteria', 'germs', 'protection']
  },
  {
    title: 'Maintenance Tips',
    url: '#maintenance',
    excerpt: 'How to keep mattresses clean between professional cleanings. Vacuuming, spot cleaning, and protection tips.',
    category: 'Maintenance',
    iconName: 'Lightbulb',
    keywords: ['maintenance', 'care', 'tips', 'prevention']
  }
]

// FAQ data (20 questions)
const faqData = [
  {
    question: 'How much does mattress cleaning cost in Manchester?',
    answer: 'Professional mattress cleaning in Manchester starts from £30 per single mattress, £35 for double, and £40-£50 for king or super king sizes. The final cost depends on mattress size, condition, stain severity, and additional treatments required (e.g., pet stain removal, sanitization). We provide free, transparent quotes with no hidden fees.'
  },
  {
    question: 'How long does mattress cleaning take?',
    answer: 'A typical single mattress takes 20-30 minutes to clean professionally. Larger mattresses (king/super king) take 30-45 minutes. Multiple mattresses in one visit reduce per-mattress time. Drying time is 2-3 hours with professional steam extraction equipment. Dry cleaning methods allow immediate use.'
  },
  {
    question: 'Can you remove urine stains from mattresses?',
    answer: 'Yes, we successfully remove most urine stains using specialized enzyme treatments that break down uric acid crystals. Fresh stains have the highest success rate (95%+). Older set stains may leave slight discoloration but odors can be completely eliminated. We treat both surface stains and deep penetration into mattress layers.'
  },
  {
    question: 'Is professional mattress cleaning safe for memory foam?',
    answer: 'Yes, absolutely. We use low-moisture cleaning methods specifically designed for memory foam mattresses. Excessive water can damage memory foam, so we use specialized dry foam or minimal moisture techniques that clean effectively without saturating the foam. Memory foam mattresses are treated with extra care to preserve their structure.'
  },
  {
    question: 'How often should I have my mattress professionally cleaned?',
    answer: 'We recommend professional mattress cleaning every 6-12 months for most households. Clean every 3-6 months if you have allergies, asthma, pets, or young children. Hotels and rental properties should clean between every guest or monthly for long-term rentals. Regular cleaning extends mattress life and maintains hygiene.'
  },
  {
    question: 'Can you remove blood stains from mattresses?',
    answer: 'Yes, blood stains can be removed using cold water enzyme treatments. The key is never using hot water, which sets protein-based blood stains permanently. Fresh blood stains are easier to remove (90%+ success). Older dried blood requires more aggressive enzyme treatments but most can be significantly lightened or removed completely.'
  },
  {
    question: 'How do you kill dust mites in mattresses?',
    answer: 'We kill dust mites using high-temperature steam (150-200°F) that instantly kills mites, their eggs, and larvae on contact. Our truck-mounted extraction then removes dead mites and their waste products (a major allergen). This process eliminates 95%+ of dust mites. We also offer UV sanitization as an additional treatment that kills bacteria and mites.'
  },
  {
    question: 'Are your mattress cleaning products safe for babies and children?',
    answer: 'Yes, all our mattress cleaning products are eco-friendly, non-toxic, hypoallergenic, and completely safe for babies, children, and pregnant women. We use plant-based, biodegradable solutions free from harsh chemicals. Mattresses are safe to sleep on as soon as they are dry (2-3 hours). We specialize in creating healthy sleep environments for families.'
  },
  {
    question: 'Do you clean mattress protectors and toppers?',
    answer: 'Yes, we can clean mattress protectors, toppers, and mattress pads during the same visit. Protectors are typically cleaned in place or can be removed for washing. Memory foam toppers require specialized low-moisture cleaning. Wool and down toppers need different treatments. Cleaning protectors along with mattresses ensures complete sleep hygiene.'
  },
  {
    question: 'What areas in Manchester do you cover for mattress cleaning?',
    answer: 'We provide mattress cleaning services across all Greater Manchester areas including Manchester city centre, Salford, Trafford, Stockport, Oldham, Bury, Rochdale, Bolton, Wigan, and surrounding postcodes. We travel within a 100-mile radius for commercial projects (hotels, care homes). Same-day service available in most Manchester areas.'
  },
  {
    question: 'Can you remove sweat stains from mattresses?',
    answer: 'Yes, we remove sweat stains and yellowing using enzymatic cleaners that break down body oils and proteins. Sweat stains are particularly common on pillows and the upper third of mattresses. While some deep-set yellowing may remain slightly visible, we significantly lighten stains and eliminate odors completely. Regular cleaning prevents sweat stain buildup.'
  },
  {
    question: 'How do I prepare my mattress for professional cleaning?',
    answer: 'Remove all bedding (sheets, pillows, duvet) and wash separately. Strip off mattress protectors and toppers unless you want them cleaned too. Clear the area around the bed for technician access. Remove small items from nightstands. That is it—we handle the rest including moving the mattress if needed for thorough cleaning of all sides.'
  },
  {
    question: 'Can you clean both sides of the mattress?',
    answer: 'Yes, we clean both sides of double-sided/flippable mattresses for thorough hygiene. For one-sided mattresses (most modern mattresses), we clean the sleeping surface and treat the sides. We can also clean the bottom if requested, though most soil accumulates on the sleeping surface. Cleaning both sides doubles treatment time but provides complete sanitization.'
  },
  {
    question: 'Does mattress cleaning help with allergies and asthma?',
    answer: 'Yes, absolutely. Professional mattress cleaning significantly reduces allergens including dust mites, pollen, pet dander, and mold spores that trigger allergies and asthma. Studies show up to 80-90% reduction in allergen levels after professional cleaning. Many customers report improved breathing, reduced sneezing, and better sleep quality after mattress cleaning.'
  },
  {
    question: 'Can you remove vomit stains and smells from mattresses?',
    answer: 'Yes, we specialize in vomit removal using enzyme treatments that break down organic matter and neutralize acidic odors. Fresh vomit is removed immediately, then treated with enzymes and sanitizers. We extract all moisture and contamination, then deodorize and sanitize the area. Most vomit stains and odors can be completely eliminated with professional treatment.'
  },
  {
    question: 'How long does a mattress stay clean after professional cleaning?',
    answer: 'A professionally cleaned mattress stays significantly cleaner for 6-12 months with proper maintenance (regular vacuuming, mattress protector use, prompt spot cleaning). Dust mites gradually recolonize over months but stay at much lower levels. Using a quality mattress protector and washing bedding weekly extends cleanliness. Plan professional cleaning every 6-12 months for optimal hygiene.'
  },
  {
    question: 'Do you offer mattress sanitization services?',
    answer: 'Yes, we offer professional sanitization using hospital-grade disinfectants that kill 99.9% of bacteria, viruses, fungi, and germs. Sanitization is included in our standard cleaning or available as an add-on service. We also offer UV-C light sanitization for chemical-free bacterial elimination. Especially recommended for allergy sufferers, children, or after illness.'
  },
  {
    question: 'Can you clean mattresses in rental properties and hotels?',
    answer: 'Yes, we provide specialized commercial mattress cleaning for hotels, B&Bs, Airbnb properties, care homes, and rental properties. We offer volume discounts for multiple mattresses, flexible scheduling (evening/weekend), fast drying methods for quick room turnaround, and documentation for hygiene records. Popular for deep cleaning between guests or during refurbishments.'
  },
  {
    question: 'What is the difference between mattress cleaning and carpet cleaning?',
    answer: 'Mattress cleaning uses lower moisture to prevent mold growth in dense mattress layers and requires specialized techniques for different mattress types (memory foam, latex, spring). We treat specific stains (blood, urine, sweat) common to mattresses. Carpet cleaning uses more aggressive water extraction. Both services can be booked together for whole-home cleaning with combination discounts available.'
  },
  {
    question: 'Do you provide a guarantee for mattress cleaning?',
    answer: 'Yes, we offer a 100% satisfaction guarantee. If you are not completely satisfied with the cleaning results, we will re-clean the mattress for free within 7 days. We stand behind our work and use proven methods that deliver excellent results. Our 5-star rating from 127+ customers reflects our commitment to quality and customer satisfaction.'
  }
]

export default function MattressCleaningClusterPage() {
  return (
    <ClientWrapper pageTitle="Mattress Cleaning Manchester - Complete Guide 2025">
      <div className="min-h-screen bg-white">

        {/* Hero Section - Cluster Page Optimized */}
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50/30">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
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
                <span className="text-gray-900 font-medium">Mattress Cleaning</span>
              </div>

              {/* Topic Badge */}
              <Badge className="mb-6 bg-sky-100 text-sky-800 text-sm px-4 py-2">
                Complete Guide 2025
              </Badge>

              {/* H1 with Primary Keyword */}
              <h1 className="speakable-headline text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Mattress Cleaning Manchester
                <span className="block text-blue-600 mt-2">Complete Expert Guide</span>
              </h1>

              {/* Comprehensive Description */}
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
                Everything you need to know about professional mattress cleaning in Manchester. From removing dust mites and allergens to eliminating stains and odors, discover the health benefits, costs, methods, and best practices for maintaining a clean, hygienic mattress. Expert guidance for residential and commercial mattress care across all Greater Manchester areas.
              </p>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium">IICRC Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-medium">5★ Rated Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">100% Guaranteed</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/quote">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold shadow-xl px-8 py-4 text-lg rounded-xl transition-all hover:scale-105">
                    Get Free Quote →
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
            <div className="speakable-tldr bg-sky-50 border-l-4 border-sky-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                <strong>Blowup Cleaners</strong> provides professional mattress cleaning services in <strong>Manchester, Salford, and Trafford</strong>. We remove dust mites, allergens, bacteria, stains, and odors using high-temperature steam cleaning and eco-friendly products. <span className="speakable-pricing">Prices start from £30 per single mattress, £35 for double, and £40-£50 for king sizes.</span> Same-day service available. <span className="speakable-cta">Call <a href="tel:07405428259" className="text-sky-600 font-bold hover:underline">07405 428259</a> for a free quote.</span>
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
                Everything You Need to Know About Mattress Cleaning
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive guides covering all aspects of professional mattress cleaning in Manchester
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

              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Professional Mattress Cleaning?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Professional mattress cleaning is a specialized deep cleaning service that uses industrial-grade equipment, proven techniques, and professional-strength cleaning solutions to remove dust mites, allergens, bacteria, stains, and odors from mattresses. Unlike surface vacuuming or spot cleaning, professional mattress cleaning penetrates deep into mattress layers, extracting microscopic contaminants that accumulate over years of use and cannot be removed by regular household cleaning methods.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The average person spends one-third of their life sleeping, shedding dead skin cells, body oils, sweat, and hair directly onto mattresses. This creates an ideal environment for dust mites (microscopic creatures that feed on dead skin), bacteria, fungi, and allergens to thrive. A typical used mattress can contain millions of dust mites and double its weight over 10 years due to accumulated dust mite waste, dead skin, and other debris. Professional mattress cleaning removes these health hazards, extends mattress life, improves sleep quality, and creates a healthier sleep environment for you and your family.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Blowup Cleaners in Manchester, we use truck-mounted hot water extraction systems that heat water to 150-200°F, killing dust mites, bacteria, and bed bugs on contact. Our powerful extraction removes dissolved contaminants, allergens, and up to 95% of moisture, ensuring fast drying times (2-3 hours) and preventing mold growth. We also offer low-moisture cleaning for delicate mattress types like memory foam, UV sanitization for chemical-free bacterial elimination, and specialized stain treatments for blood, urine, sweat, and other common mattress stains.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="methods">Mattress Cleaning Methods Explained</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Different mattress cleaning methods are suited to different mattress types, soil levels, and situations. Understanding these methods helps you choose the right service and ensures your mattress is cleaned safely and effectively without damage.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hot Water Extraction (Steam Cleaning)</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hot water extraction, commonly called steam cleaning, is the most effective method for deep cleaning and sanitizing mattresses. The process involves injecting hot water (150-200°F) mixed with eco-friendly cleaning solution deep into mattress layers under controlled pressure, then immediately extracting the water along with dissolved dirt, allergens, dust mites, bacteria, and contaminants. The high temperature kills dust mites, their eggs, bacteria, and fungi on contact—providing true sanitization, not just surface cleaning. Our truck-mounted extraction systems remove up to 95% of moisture, leaving mattresses damp (not soaked) with typical drying times of 2-3 hours. This method is ideal for spring, hybrid, and traditional innerspring mattresses. It provides the deepest clean and highest level of sanitization available.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Low-Moisture Dry Cleaning</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Low-moisture or dry cleaning methods use minimal water (less than 10% of steam cleaning) combined with specialized cleaning compounds or dry foam solutions. A machine with soft brushes gently agitates the cleaning solution into mattress fibers, where it attracts and encapsulates dirt, dust mites, and allergens. The compound is then vacuumed away using powerful HEPA filtration, removing contaminants without saturating the mattress. This method is specifically recommended for memory foam, latex, and pillow-top mattresses that can be damaged by excessive moisture. Mattresses can be slept on immediately or within 30-60 minutes. While not as deeply sanitizing as steam cleaning (cannot reach 150°F+ temperatures), low-moisture cleaning effectively removes surface and mid-level contaminants and is the safest option for water-sensitive mattress types.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">UV-C Sanitization</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                UV-C light sanitization uses ultraviolet-C radiation to kill bacteria, viruses, fungi, dust mites, and their eggs without chemicals or moisture. Professional-grade UV-C lamps are slowly passed over all mattress surfaces, penetrating fabric and killing microorganisms at the DNA level. This method is chemical-free, leaves no residue, requires no drying time, and is completely safe for all mattress types including memory foam and latex. UV sanitization is often combined with steam or dry cleaning for maximum effectiveness—steam removes physical contaminants while UV provides additional microbial elimination. Particularly beneficial for allergy sufferers, families with young children, or anyone seeking chemical-free sanitization.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="cost">Mattress Cleaning Cost in Manchester</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Understanding mattress cleaning pricing helps you budget appropriately and compare quotes from different providers. In Manchester, professional mattress cleaning typically ranges from £30-£50 per mattress depending on size, condition, and treatments required.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Standard pricing by mattress size:</strong> Single mattresses cost £30-£35, double mattresses £35-£40, king size mattresses £40-£45, and super king size mattresses £45-£50. These prices include professional deep cleaning with hot water extraction or dry cleaning (method chosen based on mattress type), pre-treatment of visible stains, deodorizing, and HEPA filtration to capture allergens. Heavily soiled mattresses or those with extensive staining may incur surcharges of £10-£20 per mattress.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Volume discounts:</strong> Most companies including Blowup Cleaners offer discounts when cleaning multiple mattresses in one visit. Typical discounts: 10% off for 2 mattresses, 15% off for 3 mattresses, 20% off for 4+ mattresses. Hotels, B&Bs, care homes, and rental properties can negotiate commercial contracts for regular mattress cleaning at significantly reduced per-mattress rates.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Additional services and add-ons:</strong> Pet urine/stain treatment (£15-£25 per mattress depending on severity), UV-C sanitization (£10-£15 per mattress), anti-allergen treatment (£8-£12 per mattress), mattress protector cleaning (£5-£10 each), pillow cleaning (£8-£12 per pillow), mattress topper cleaning (£15-£20), stain protection treatment (£12-£18 per mattress), same-day emergency service (£20-£40 rush fee depending on location and availability).
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="dust-mites">Health Benefits: Dust Mite & Allergen Removal</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Professional mattress cleaning provides significant health benefits by removing dust mites, allergens, bacteria, and fungi that accumulate in mattresses and trigger allergic reactions, asthma attacks, and respiratory problems. The health impact of a clean mattress is profound, especially for allergy sufferers, asthma patients, children, and elderly individuals with compromised immune systems.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Dust mites and their impact:</strong> Dust mites are microscopic arachnids (relatives of spiders) that feed on dead human skin cells. The average person sheds approximately 1.5 grams of skin per day, providing ample food for dust mites. A typical used mattress contains between 100,000 to 10 million dust mites. While dust mites themselves do not bite or cause direct harm, their fecal pellets and dead body fragments are powerful allergens. Each dust mite produces approximately 20 waste droppings per day, and these droppings contain proteins that trigger allergic reactions, asthma attacks, eczema flare-ups, and respiratory distress. Dust mite allergen is the most common trigger for year-round allergies and childhood asthma.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>How professional cleaning eliminates dust mites:</strong> Hot water extraction cleaning heats water to 150-200°F, which instantly kills dust mites, their eggs, and larvae on contact (dust mites cannot survive temperatures above 140°F). The powerful extraction then removes dead mites, their waste products, shed body fragments, and other allergens from deep within mattress layers. Studies show professional hot water extraction removes 95%+ of dust mites and reduces allergen levels by 80-90%. This dramatic reduction in allergen exposure leads to measurable improvements in allergy and asthma symptoms for most people within weeks of professional mattress cleaning.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Additional health benefits:</strong> Professional mattress cleaning also removes bacteria (including MRSA and E. coli), fungi and mold spores, pollen tracked in from outdoors, pet dander that penetrates deep into mattress fibers, volatile organic compounds (VOCs) from mattress materials, and dead skin cells that provide food for dust mites. Many customers report improved sleep quality, reduced nighttime congestion and coughing, fewer morning allergy symptoms, reduced skin irritation and eczema, improved breathing for asthma sufferers, and generally feeling more refreshed after sleeping on a professionally cleaned mattress. We recommend professional mattress cleaning every 6-12 months for most people, and every 3-6 months for allergy sufferers, asthma patients, homes with pets, or families with young children.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="stains">Mattress Stain Removal Guide</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Mattress stains are common and challenging because they often penetrate through fabric covers deep into foam and padding layers. Different stains require different treatments. Professional technicians have the expertise, equipment, and professional-strength products to remove stains that DIY methods cannot touch.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Blood stains:</strong> Blood is a protein-based stain that must be treated with cold water and enzyme cleaners. Hot water permanently sets blood stains by cooking the proteins. Professional treatment involves immediate cold water flushing, enzyme application to break down protein structures, gentle agitation to lift stain from fibers, and extraction to remove dissolved blood. Fresh blood stains have 90%+ removal success rates. Dried or set blood stains require longer enzyme dwell times and multiple treatments but most can be significantly lightened or removed completely. Never use hot water or heat on blood stains.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Urine stains (human and pet):</strong> Urine stains are among the most challenging because urine soaks through fabric into foam and padding, where it crystallizes into uric acid salt crystals that cause persistent odors. Surface cleaning only addresses visible staining but leaves crystals embedded deep in mattress layers, which reactivate with moisture and humidity. Professional urine removal uses enzymatic treatments injected deep into affected areas to break down uric acid crystals at the molecular level. Enzymes literally digest the organic compounds causing odors. Multiple applications may be needed for severe contamination. Black light inspection identifies all affected areas (urine glows under UV light). Success rate for complete odor elimination: 95%+ when treated promptly, 75-85% for old or severe contamination.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Sweat and yellowing:</strong> Yellow mattress stains are caused by body oils, sweat, and dead skin accumulation over time. These are among the most common mattress stains and particularly visible on white or light-colored mattresses. Professional treatment uses alkaline cleaners and peroxide-based brighteners to break down oils and lift yellowing. While some deep-set yellowing may remain slightly visible (especially on older mattresses), we significantly lighten stains and eliminate any associated odors. Regular professional cleaning prevents sweat stain buildup.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Vomit stains:</strong> Vomit contains proteins, acids, and organic matter requiring immediate professional attention. Treatment begins with physical removal of solid matter, followed by enzyme treatment to break down proteins and neutralize stomach acids. Antimicrobial sanitizers kill bacteria and prevent odor development. Vomit must be treated quickly—the acids can permanently damage mattress fibers if left untreated. Most vomit stains and odors can be completely eliminated with prompt professional treatment.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="odors">Odor Elimination Techniques</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Mattress odors come from various sources: sweat and body oils, urine (human and pet), bacteria and fungi growth, mold and mildew from moisture, spills and food stains, and trapped smoke or environmental odors. Professional odor elimination addresses the source of odors, not just masking them with fragrances. We identify the odor source, treat it with appropriate enzymes or sanitizers, extract contaminants, and apply deodorizers if needed.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Enzyme treatments:</strong> For biological odors (urine, sweat, vomit, pet accidents), enzyme treatments are the gold standard. Enzymes are biological catalysts that break down organic compounds at the molecular level. Different enzymes target different compounds: proteases break down proteins, amylases break down starches, lipases break down fats and oils, and ureases specifically target uric acid in urine. Professional enzyme products contain multiple enzyme types to address all organic odor sources. Enzymes require proper temperature, pH, and dwell time to work effectively—something professional technicians understand and DIY products often fail to achieve.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Ozone treatment:</strong> For severe odor problems or smoke odors, ozone generators can be used to oxidize odor molecules at the molecular level. Ozone (O3) is an unstable molecule that releases oxygen atoms which chemically alter odor-causing compounds, rendering them odorless. Ozone treatment requires the room to be sealed and unoccupied for safety. This is typically a last resort for severe odors after other methods have been attempted. Most mattress odors respond well to enzyme treatment and professional extraction without requiring ozone treatment.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="mattress-types">Different Mattress Types & Cleaning Methods</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Different mattress constructions require different cleaning approaches. Using the wrong method can damage delicate materials, void warranties, or fail to properly clean the mattress. Professional technicians assess mattress type and construction before selecting the appropriate cleaning method.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Memory foam mattresses:</strong> Memory foam (viscoelastic polyurethane foam) is heat-sensitive and water-sensitive. Excessive moisture can cause foam deterioration, permanent compression, and mold growth within the foam structure. Memory foam mattresses require low-moisture cleaning methods using specialized dry foam or minimal-water techniques. We apply cleaning solution as a light foam or mist, gently agitate to lift soils, then extract using powerful vacuum suction. Drying time is minimal (30-60 minutes). Never use hot water extraction/steam cleaning on memory foam mattresses—the moisture penetration will damage the foam.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Spring/innerspring mattresses:</strong> Traditional innerspring mattresses with cotton or polyester comfort layers are the most durable for cleaning. They tolerate hot water extraction/steam cleaning well. The springs provide structure that is not damaged by moisture, and the comfort layers dry relatively quickly due to airflow around the springs. Spring mattresses are excellent candidates for deep steam cleaning, which provides maximum sanitization and dust mite elimination. These mattresses should be cleaned on both sides if they are flippable (older models) or just the sleeping surface for one-sided designs (most modern innerspring mattresses).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Latex mattresses:</strong> Natural or synthetic latex mattresses (made from rubber tree sap or petroleum-based polymers) are naturally resistant to dust mites and bacteria but still accumulate dead skin, sweat, and allergens on the surface. Latex is somewhat water-resistant, which actually makes deep cleaning more challenging. We use low-moisture cleaning with specialty latex-safe cleaners that effectively clean without saturating the material. Latex mattresses should never be soaked or steam cleaned aggressively—they take extremely long to dry and trapped moisture can cause odor problems.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Hybrid mattresses:</strong> Hybrid mattresses combine springs with memory foam or latex comfort layers. Cleaning method depends on the comfort layer material—if it is memory foam or latex, low-moisture cleaning is required. If it is traditional foam or polyester, careful steam cleaning can be used on lower heat settings. Professional technicians assess the specific construction and adjust cleaning method accordingly. Hybrids with removable covers can have the cover removed and cleaned separately while the mattress core is cleaned with appropriate methods.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Pillow-top mattresses:</strong> Pillow-top mattresses have an extra layer of soft padding sewn onto the top surface. This padding can be fiber fill, foam, or a combination. Pillow-tops require extra care during cleaning to avoid excessive compression or damage to the pillow-top layer. We use lower water pressure and more careful extraction to clean pillow-tops effectively without flattening or distorting the soft top layer. Pillow-tops take slightly longer to dry due to the extra padding thickness.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="commercial">Commercial Mattress Cleaning Services</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Commercial properties with multiple mattresses—hotels, B&Bs, Airbnb rentals, care homes, hospitals, student accommodation, and serviced apartments—require specialized mattress cleaning services that differ from residential cleaning in scope, frequency, scheduling, and hygiene standards.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Hotels and hospitality:</strong> Hotels and B&Bs benefit from regular mattress deep cleaning to maintain hygiene standards, extend mattress lifespan, and meet guest expectations for cleanliness. We recommend deep cleaning mattresses every 6-12 months for hotel rooms with moderate use, every 3-6 months for high-occupancy rooms, and after specific incidents (stains, bed bugs, guest complaints). We offer flexible scheduling including overnight and weekend service to avoid disrupting hotel operations. Fast-drying methods ensure rooms can be turned around quickly. Volume discounts make regular commercial mattress cleaning affordable for hospitality businesses.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Care homes and healthcare facilities:</strong> Mattresses in care homes, nursing facilities, and hospitals require the highest hygiene standards due to vulnerable populations (elderly, immunocompromised patients). We provide hospital-grade sanitization using disinfectants that kill 99.9% of bacteria, viruses, and fungi including MRSA, C. difficile, and norovirus. Antimicrobial treatments provide ongoing protection between cleanings. We can provide hygiene certifications and documentation for regulatory compliance. Care home mattresses should be deep cleaned every 3-6 months or when residents change to prevent cross-contamination.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="pets">Pet Stain & Odor Treatment for Mattresses</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Pet accidents on mattresses are particularly challenging because pet urine contains higher concentrations of uric acid than human urine, creating stronger and more persistent odors. Pets may repeatedly mark the same spot, compounding contamination. Professional pet stain and odor treatment is essential for complete elimination.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our pet urine treatment process begins with black light (UV) inspection to identify all affected areas—even old, invisible stains glow under UV light, revealing the true extent of contamination. We then inject enzyme treatments deep into foam and padding layers where urine has penetrated. These specialized pet urine enzymes break down uric acid crystals at the molecular level, eliminating odor sources rather than masking them. Multiple enzyme applications may be needed for severe contamination. We extract dissolved contaminants, apply antimicrobial sanitizers to kill bacteria causing odor, and finish with professional deodorizers formulated specifically for pet odors. Success rate: 95%+ for fresh or moderate pet contamination, 75-85% for severe or long-term contamination. In extreme cases where urine has saturated through to mattress core or platform, mattress replacement may be the only solution.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="professional-vs-diy">Professional vs DIY Mattress Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many people consider DIY mattress cleaning using rental machines, store-bought products, or home remedies. While surface cleaning has some value, professional mattress cleaning delivers significantly superior results and value when you consider effectiveness, safety, and convenience.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Equipment power and effectiveness:</strong> Professional truck-mounted hot water extraction systems heat water to 150-200°F (killing dust mites, bacteria, and bed bugs), deliver controlled injection pressure for deep penetration, and provide powerful vacuum suction that removes 95%+ of moisture. Portable rental machines barely heat water to 100-120°F (insufficient to kill dust mites), have weak suction leaving mattresses soaking wet (12-24 hour drying time or longer), and cannot penetrate as deeply into mattress layers. Professional equipment is exponentially more powerful and effective than any DIY solution.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Expertise and knowledge:</strong> Professional technicians are trained to identify mattress types and materials, select appropriate cleaning methods for each mattress construction, properly treat different stain types without causing damage, avoid over-wetting that leads to mold growth, and adjust techniques based on mattress age and condition. DIY cleaning often results in rapid re-soiling due to soap residue left behind, mold and mildew growth from over-wetting, damage to memory foam or latex from incorrect methods, set stains from improper treatment (like using hot water on blood), and voided mattress warranties (some manufacturers require professional cleaning).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Cost and value comparison:</strong> DIY approach appears cheaper initially: rental machine £25-£40/day, cleaning solution £10-£20, but requires hours of physical labor, achieves inferior results, risks damaging mattress, and wastes your time. Professional cleaning costs £30-£50 per mattress with guaranteed results, proper insurance coverage, no physical labor required, expert stain treatment, and true deep sanitization. When you factor in your time value (hours of labor), convenience (no equipment to rent/return), results quality (professional equipment is 10x more powerful), and peace of mind (insured service with guarantees), professional mattress cleaning is the superior value.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="maintenance">How Often Should You Clean Your Mattress?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The recommended frequency for professional mattress cleaning depends on several factors: household size, allergy/asthma presence, pets, children, mattress age, and individual health concerns. General guidelines: Standard households should have mattresses professionally cleaned every 6-12 months. Homes with allergies or asthma benefit from cleaning every 3-6 months. Homes with pets should clean every 3-6 months (pet dander and potential accidents). Families with young children or babies should clean every 6 months (higher hygiene needs). Guest room mattresses need cleaning every 12-24 months depending on use. Commercial properties (hotels, rentals) should clean every 3-6 months or between guests.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="sanitization">Mattress Cleaning Process Step-by-Step</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our professional mattress cleaning process follows proven steps that ensure thorough cleaning, maximum sanitization, and fast drying times. Understanding the process helps you know what to expect during your appointment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Step 1: Initial inspection and assessment.</strong> We examine the mattress to identify its type (memory foam, spring, latex, hybrid), assess overall condition, identify visible stains and problem areas, and check for pet contamination using UV light if needed. This assessment determines the appropriate cleaning method and any special treatments required.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Step 2: Pre-vacuuming.</strong> We thoroughly vacuum all mattress surfaces using HEPA filtration to remove surface dust, dead skin cells, hair, and loose debris. This crucial step prevents turning dry soil into mud during wet cleaning and improves overall cleaning effectiveness.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Step 3: Pre-treatment of stains.</strong> Visible stains receive specialized pre-treatments based on stain type: enzymes for protein stains (blood, urine, vomit), alkaline cleaners for oils and sweat, and specialized products for specific stains (wine, coffee, ink). Pre-treatments dwell for 5-10 minutes to break down stain structures before main cleaning.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Step 4: Deep cleaning.</strong> For spring/innerspring mattresses: hot water extraction at 150-200°F with professional-strength cleaning solution, thorough extraction removing 95% of moisture. For memory foam/latex: low-moisture cleaning with dry foam application, gentle agitation, powerful vacuum extraction. Both methods effectively remove contaminants while using appropriate moisture levels for the mattress type.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Step 5: Sanitization and deodorizing.</strong> We apply antimicrobial sanitizers that kill 99.9% of bacteria and fungi, professional deodorizers for fresh scent (optional), and UV-C light sanitization if requested. This step ensures your mattress is not just clean, but hygienically sanitized.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Step 6: Final inspection and drying guidance.</strong> We inspect all areas to ensure thorough cleaning, provide care instructions for optimal drying, advise on when the mattress can be made up with bedding (typically 2-3 hours), and recommend protective measures (mattress protectors, regular vacuuming).
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Choose Blowup Cleaners for Mattress Cleaning in Manchester</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Blowup Cleaners is Manchester's trusted professional cleaning company, serving homes and businesses across Manchester, Salford, Trafford, and surrounding areas since 2020. We combine professional expertise, state-of-the-art equipment, eco-friendly products, and a commitment to customer satisfaction that has earned us a 5-star rating from 127+ satisfied customers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our IICRC-certified technicians undergo extensive training in mattress types and materials, proper cleaning techniques for each construction, stain chemistry and removal methods, allergen reduction protocols, and equipment operation and safety. We invest in truck-mounted hot water extraction systems—the most powerful and effective cleaning equipment available—that deliver superior results compared to portable units most competitors use. We exclusively use eco-friendly, non-toxic, hypoallergenic cleaning solutions that are completely safe for your family, pets, babies, and the environment without compromising cleaning effectiveness.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our 100% satisfaction guarantee means if you are not completely happy with the mattress cleaning results, we will re-clean the mattress for free—no questions asked. We stand behind our work and use proven methods that deliver excellent results every time. We offer transparent pricing with free quotes, no hidden fees, same-day and emergency service availability across Manchester, coverage of all Greater Manchester areas within 100-mile radius, volume discounts for multiple mattresses, and flexible scheduling including evenings and weekends. Call 07405 428259 for your free quote and experience the Blowup Cleaners difference—cleaner, healthier mattresses and better sleep for your entire family.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Compare Your Mattress Cleaning Options
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="p-4 text-left font-semibold">Feature</th>
                      <th className="p-4 text-center font-semibold">Professional Cleaning</th>
                      <th className="p-4 text-center font-semibold">DIY Rental Machine</th>
                      <th className="p-4 text-center font-semibold">No Cleaning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Dust Mite Removal</td>
                      <td className="p-4 text-center text-green-600 font-semibold">95%+ Eliminated</td>
                      <td className="p-4 text-center text-yellow-600">30-40% Reduced</td>
                      <td className="p-4 text-center text-red-600">0% - Multiplying</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Deep Sanitization</td>
                      <td className="p-4 text-center text-green-600">✓ High Heat (150-200°F)</td>
                      <td className="p-4 text-center text-yellow-600">~ Surface Only (100-120°F)</td>
                      <td className="p-4 text-center text-red-600">✗ None</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Stain Removal</td>
                      <td className="p-4 text-center text-green-600">✓ Professional Treatment</td>
                      <td className="p-4 text-center text-yellow-600">~ Partial Success</td>
                      <td className="p-4 text-center text-red-600">✗ Permanent Stains</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Allergen Reduction</td>
                      <td className="p-4 text-center text-green-600">80-90% Reduced</td>
                      <td className="p-4 text-center text-yellow-600">20-30% Reduced</td>
                      <td className="p-4 text-center text-red-600">Accumulating</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Drying Time</td>
                      <td className="p-4 text-center text-green-600">2-3 Hours</td>
                      <td className="p-4 text-center text-red-600">12-24 Hours</td>
                      <td className="p-4 text-center text-gray-600">N/A</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Equipment Power</td>
                      <td className="p-4 text-center text-green-600">Truck-Mounted (10x Power)</td>
                      <td className="p-4 text-center text-yellow-600">Portable (Weak)</td>
                      <td className="p-4 text-center text-gray-600">N/A</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Physical Labor Required</td>
                      <td className="p-4 text-center text-green-600">✓ None</td>
                      <td className="p-4 text-center text-red-600">✗ Hours of Work</td>
                      <td className="p-4 text-center text-gray-600">N/A</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Cost</td>
                      <td className="p-4 text-center text-blue-600 font-semibold">£30-£50</td>
                      <td className="p-4 text-center text-blue-600">£35-£60 + Time</td>
                      <td className="p-4 text-center text-red-600">Health Risks</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Guarantee</td>
                      <td className="p-4 text-center text-green-600">✓ 100% Satisfaction</td>
                      <td className="p-4 text-center text-red-600">✗ None</td>
                      <td className="p-4 text-center text-gray-600">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 text-center">
                <Link href="/quote">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg">
                    Get Professional Cleaning Quote →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - 20 questions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Mattress Cleaning
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about professional mattress cleaning in Manchester
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 hover:border-blue-500/50 transition-colors"
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

        {/* Trust & Authority Section */}
        <section className="py-16 bg-gradient-to-br from-sky-50/50 to-blue-50/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: 'IICRC Certified', value: 'Professional Standards' },
                { icon: Bed, title: 'Mattresses Cleaned', value: '1,200+' },
                { icon: Star, title: 'Average Rating', value: '4.9/5' },
                { icon: Award, title: 'Satisfaction Rate', value: '98%' }
              ].map((stat, index) => (
                <Card key={index} className="text-center bg-white border-2 border-gray-100">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-8 w-8 text-sky-600" />
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
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready for Professional Mattress Cleaning?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join 1,200+ satisfied customers across Manchester who trust Blowup Cleaners for healthier, cleaner mattresses.
                Get your free quote in 60 seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold text-lg px-8 py-6 rounded-xl shadow-xl">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Free Quote Now
                  </Button>
                </Link>
                <a href="tel:07405428259">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl bg-white/10 border-2 border-white text-white hover:bg-white/20">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: 07405 428259
                  </Button>
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Free Quote & Survey
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Same Day Available
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  100% Guaranteed
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
              'name': 'Mattress Cleaning Manchester - Complete Guide 2025',
              'description': 'Comprehensive resource hub covering everything about professional mattress cleaning in Manchester. Dust mite removal, stain treatment, health benefits.',
              'url': 'https://blowupcleaners.co.uk/services/mattress-cleaning',
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
                { '@type': 'ListItem', 'position': 3, 'name': 'Mattress Cleaning', 'item': 'https://blowupcleaners.co.uk/services/mattress-cleaning' }
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
              'serviceType': 'Mattress Cleaning',
              'provider': {
                '@type': 'LocalBusiness',
                'name': 'Blowup Cleaners',
                'telephone': '+447405428259',
                'areaServed': [
                  { '@type': 'City', 'name': 'Manchester' },
                  { '@type': 'City', 'name': 'Salford' },
                  { '@type': 'City', 'name': 'Trafford' }
                ],
                'priceRange': '£30-£50'
              },
              'offers': {
                '@type': 'Offer',
                'priceCurrency': 'GBP',
                'price': '30',
                'description': 'Professional mattress cleaning from £30 per single mattress'
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
              'priceRange': '£30-£50',
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
