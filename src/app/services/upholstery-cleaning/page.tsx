/**
 * Upholstery Cleaning Manchester - Cluster/Pillar Page
 *
 * Hub page covering all aspects of professional upholstery cleaning in Manchester
 * Serves as authoritative resource with 4000+ words
 * Links to related subtopics and blog posts
 */

import Link from 'next/link'
import type { Metadata } from 'next'
import {
  CheckCircle, Shield, Award, Star, ArrowRight, Users, Sparkles, Zap,
  Home, Phone, Droplets, Wind, Heart, Clock, BadgeCheck, Target,
  Scissors, Filter, Lightbulb, Building2, Leaf, AlertCircle, Sofa,
  TrendingUp
} from 'lucide-react'

import { Button } from '@/components/ui'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

import ClientWrapper from './client-wrapper'
import InteractiveSearch from './interactive-client'

export const metadata: Metadata = {
  title: 'Upholstery Cleaning Manchester | Complete Guide 2025 | Professional Furniture Cleaning',
  description: 'Everything you need to know about upholstery cleaning in Manchester. Expert guides on sofa cleaning, fabric types, stain removal, leather care, and choosing the best service. From £35 per item.',
  keywords: [
    'upholstery cleaning Manchester',
    'sofa cleaning Manchester',
    'furniture cleaning Manchester',
    'professional upholstery cleaners',
    'leather sofa cleaning',
    'fabric sofa cleaning',
    'couch cleaning Manchester',
    'armchair cleaning',
    'upholstery stain removal',
    'steam clean sofa Manchester'
  ],

  alternates: {
    canonical: 'https://blowupcleaners.co.uk/services/upholstery-cleaning',
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
    title: 'Upholstery Cleaning Manchester | Complete Guide 2025',
    description: 'Comprehensive guide to professional upholstery cleaning in Manchester. Sofa cleaning, fabric types, stain removal, and expert services.',
    url: 'https://blowupcleaners.co.uk/services/upholstery-cleaning',
    siteName: 'Blowup Cleaners',
    locale: 'en_GB',
    type: 'website',
    images: [{
      url: 'https://blowupcleaners.co.uk/og-upholstery-cleaning.jpg',
      width: 1200,
      height: 630,
      alt: 'Professional upholstery cleaning service in Manchester'
    }]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Upholstery Cleaning Manchester | Complete Guide 2025',
    description: 'Everything you need to know about professional upholstery cleaning in Manchester',
    images: ['https://blowupcleaners.co.uk/og-upholstery-cleaning.jpg']
  }
}

// Subtopic navigation cards
const subtopicCards = [
  {
    title: 'Upholstery Cleaning Methods',
    url: '#methods',
    excerpt: 'Discover steam cleaning, dry cleaning, shampooing, and which method is best for your furniture type.',
    category: 'Methods',
    iconName: 'Sparkles',
    keywords: ['methods', 'techniques', 'cleaning types']
  },
  {
    title: 'Upholstery Cleaning Cost',
    url: '#cost',
    excerpt: 'Understand pricing for furniture cleaning in Manchester. From £35 per item with transparent quotes.',
    category: 'Pricing',
    iconName: 'Target',
    keywords: ['cost', 'price', 'quote', 'pricing']
  },
  {
    title: 'Fabric Types & Care',
    url: '#fabric-types',
    excerpt: 'Learn about different upholstery fabrics: cotton, linen, velvet, microfiber, and specific care requirements.',
    category: 'Fabrics',
    iconName: 'Scissors',
    keywords: ['fabric', 'materials', 'textiles']
  },
  {
    title: 'Leather Upholstery Cleaning',
    url: '#leather',
    excerpt: 'Specialized care for leather sofas and chairs. Cleaning, conditioning, and protection techniques.',
    category: 'Leather',
    iconName: 'Shield',
    keywords: ['leather', 'leather sofa', 'conditioning']
  },
  {
    title: 'Stain Removal Guide',
    url: '#stains',
    excerpt: 'Expert techniques for removing wine, coffee, grease, ink, and other tough stains from upholstery.',
    category: 'Stains',
    iconName: 'Droplets',
    keywords: ['stain removal', 'spots', 'marks']
  },
  {
    title: 'Pet Stain & Odor Removal',
    url: '#pets',
    excerpt: 'Specialized treatments for pet accidents, fur removal, and odor elimination from furniture.',
    category: 'Pets',
    iconName: 'Heart',
    keywords: ['pet stains', 'pet hair', 'odor']
  },
  {
    title: 'Commercial Upholstery Cleaning',
    url: '#commercial',
    excerpt: 'Professional cleaning for office furniture, hotel lounges, restaurants, and business premises.',
    category: 'Commercial',
    iconName: 'Building2',
    keywords: ['commercial', 'business', 'office']
  },
  {
    title: 'Eco-Friendly Cleaning',
    url: '#eco-friendly',
    excerpt: 'Green upholstery cleaning with non-toxic products safe for families and the environment.',
    category: 'Green',
    iconName: 'Leaf',
    keywords: ['eco-friendly', 'green', 'natural', 'safe']
  },
  {
    title: 'Sofa vs DIY Cleaning',
    url: '#professional-vs-diy',
    excerpt: 'Compare professional upholstery cleaning to DIY methods. Why professionals deliver better results.',
    category: 'Comparison',
    iconName: 'BadgeCheck',
    keywords: ['professional', 'DIY', 'comparison']
  },
  {
    title: 'Furniture Maintenance Tips',
    url: '#maintenance',
    excerpt: 'How to keep upholstery clean between professional cleanings. Vacuuming, spot cleaning, care tips.',
    category: 'Maintenance',
    iconName: 'Lightbulb',
    keywords: ['maintenance', 'care', 'tips']
  },
  {
    title: 'Allergy Relief',
    url: '#allergies',
    excerpt: 'How professional upholstery cleaning removes allergens, dust mites, and improves indoor air quality.',
    category: 'Health',
    iconName: 'Wind',
    keywords: ['allergies', 'health', 'air quality']
  },
  {
    title: 'Manchester Coverage Areas',
    url: '/areas',
    excerpt: 'We serve all Manchester areas: city centre, Salford, Trafford, Stockport, and surrounding postcodes.',
    category: 'Areas',
    iconName: 'Home',
    keywords: ['Manchester', 'areas', 'coverage', 'locations']
  }
]

// FAQ data (20 questions for cluster pages)
const faqData = [
  {
    question: 'How much does upholstery cleaning cost in Manchester?',
    answer: 'Professional upholstery cleaning in Manchester typically costs £35-£80 per item depending on size and fabric type. Two-seater sofas start at £35, three-seater sofas £50-£65, armchairs £30-£40, and dining chairs £12-£18 each. Leather furniture costs £10-£15 more due to specialized products and conditioning required. We provide free quotes based on your specific furniture.'
  },
  {
    question: 'How long does upholstery take to dry after cleaning?',
    answer: 'With professional steam extraction, upholstery typically dries within 4-6 hours depending on fabric thickness and room ventilation. We use powerful extraction equipment to remove maximum moisture. Dry cleaning methods allow furniture to be used within 1-2 hours. Leather cleaning dries almost immediately. We recommend keeping rooms well-ventilated during drying.'
  },
  {
    question: 'Can you remove pet hair and pet stains from furniture?',
    answer: 'Yes, we specialize in pet hair removal and pet stain elimination. We use industrial vacuums with upholstery attachments to remove embedded pet hair. Pet urine stains are treated with enzyme solutions that break down odor-causing bacteria. We can restore furniture affected by pet accidents to fresh, clean condition in most cases.'
  },
  {
    question: 'Is professional upholstery cleaning worth it?',
    answer: 'Absolutely. Professional cleaning extends furniture life by 3-5 years, removes deep dirt and allergens DIY methods cannot reach, eliminates odors and bacteria, and restores original colors and appearance. It is far more cost-effective than replacing furniture prematurely. Professional equipment and expertise deliver results impossible to achieve with home cleaning.'
  },
  {
    question: 'How often should upholstery be professionally cleaned?',
    answer: 'High-use sofas and chairs should be cleaned every 12-18 months. Homes with pets, children, or allergies benefit from cleaning every 6-12 months. Light-use furniture in guest rooms can go 2-3 years between cleanings. Leather furniture should be cleaned and conditioned annually. Regular professional cleaning prevents permanent staining and fiber damage.'
  },
  {
    question: 'What upholstery fabrics can you clean?',
    answer: 'We clean all upholstery fabrics: cotton, linen, polyester, microfiber, velvet, chenille, silk, wool, and synthetic blends. Each fabric requires specific cleaning methods. We check manufacturer cleaning codes (W, S, WS, X) and test fabrics before cleaning to ensure safe, effective treatment. Delicate fabrics receive gentle, specialized care.'
  },
  {
    question: 'Can you clean leather sofas and chairs?',
    answer: 'Yes, we specialize in leather upholstery cleaning. We use pH-balanced leather cleaners that remove dirt and oils without drying or damaging leather. After cleaning, we apply conditioning treatments that restore moisture, prevent cracking, and protect leather from future damage. We clean all leather types: aniline, semi-aniline, pigmented, and bonded leather.'
  },
  {
    question: 'Are your cleaning products safe for children and pets?',
    answer: 'Yes, all our upholstery cleaning products are eco-friendly, non-toxic, and safe for children and pets. We use professional-grade green solutions that are biodegradable and free from harsh chemicals. Furniture is safe to use as soon as it is dry. We never use products that leave harmful residues or emit toxic fumes.'
  },
  {
    question: 'Can you remove wine, coffee, and food stains from upholstery?',
    answer: 'Yes, we successfully remove most common upholstery stains including red wine, coffee, tea, grease, food, ink, makeup, and more using professional spot treatments. The sooner stains are treated, the better the results. Some old or set stains may be permanent, but our specialized treatments achieve excellent results even on difficult stains.'
  },
  {
    question: 'Do you offer same-day upholstery cleaning?',
    answer: 'Yes, we offer same-day emergency upholstery cleaning across Manchester subject to availability. Perfect for urgent situations like spills before events, move-out cleanings, or preparing for guests. Call 07405 428259 to check same-day availability. Rush service fees may apply for same-day scheduling.'
  },
  {
    question: 'What areas in Manchester do you cover?',
    answer: 'We serve all Greater Manchester areas including Manchester city centre, Salford, Trafford, Stockport, Oldham, Bury, Rochdale, Bolton, and surrounding postcodes. We travel within a 100-mile radius for large commercial projects. Free quotes and consultations throughout our service area.'
  },
  {
    question: 'How do I prepare for upholstery cleaning?',
    answer: 'Remove loose items, cushions, and decorative pillows from furniture. Vacuum surfaces if possible (we will do thorough pre-vacuuming too). Clear access paths around furniture. Remove pets from the room during cleaning. Point out specific stains or problem areas so we can pre-treat them. No need to move furniture—we work on-site.'
  },
  {
    question: 'Can you clean antique or vintage upholstery?',
    answer: 'Yes, we have extensive experience cleaning delicate antique and vintage upholstery. We use gentle, pH-neutral products and test inconspicuous areas first. Hand cleaning techniques are used for extremely delicate fabrics. We assess each piece individually and recommend the safest cleaning approach. We never use harsh methods that could damage valuable antiques.'
  },
  {
    question: 'Do you provide stain protection treatment?',
    answer: 'Yes, we offer fabric protection treatment (similar to Scotchgard) for an additional £15-£25 per item. This treatment creates an invisible barrier that repels liquids and prevents stains from setting. It makes future spill cleanup easier and extends time before professional cleaning is needed. Highly recommended for light-colored upholstery and homes with children or pets.'
  },
  {
    question: 'What is the difference between steam cleaning and dry cleaning upholstery?',
    answer: 'Steam cleaning (hot water extraction) injects hot cleaning solution deep into upholstery, then extracts dirt, allergens, and moisture. It provides the deepest clean but requires 4-6 hours drying. Dry cleaning uses minimal moisture with chemical solvents applied and vacuumed away. It dries in 1-2 hours but is less thorough for heavy soiling. We recommend based on your fabric and needs.'
  },
  {
    question: 'Can upholstery cleaning help with allergies?',
    answer: 'Yes, professional upholstery cleaning significantly reduces allergens. Furniture harbors dust mites, pollen, pet dander, mold spores, and bacteria that trigger allergies and asthma. Our hot water extraction reaches deep into cushions and padding, removing these allergens. We recommend regular cleaning (every 6-12 months) for allergy sufferers to maintain healthy indoor air quality.'
  },
  {
    question: 'Do you clean upholstery with water damage or mold?',
    answer: 'Yes, we provide emergency water damage restoration for upholstery. We extract moisture, dry furniture using industrial fans and dehumidifiers, and treat with antimicrobial solutions to prevent mold growth. Quick response is critical—call immediately if furniture gets wet. In severe mold cases, replacement may be necessary, but we can restore most water-damaged upholstery if treated promptly.'
  },
  {
    question: 'Can you clean office chairs and commercial furniture?',
    answer: 'Yes, we specialize in commercial upholstery cleaning for offices, hotels, restaurants, healthcare facilities, and public spaces. We clean office chairs, waiting room furniture, restaurant booths, hotel lobby seating, and more. We offer after-hours service to minimize business disruption and maintenance contracts for regular cleaning at discounted rates.'
  },
  {
    question: 'Do you provide a satisfaction guarantee?',
    answer: 'Yes, we offer a 100 percent satisfaction guarantee on all upholstery cleaning. If you are not completely happy with the results, we will re-clean the item for free. We stand behind our work and use proven methods that consistently deliver excellent results. Your satisfaction is our top priority.'
  },
  {
    question: 'How long does upholstery cleaning take?',
    answer: 'A typical three-seater sofa takes 45-60 minutes to clean thoroughly including pre-treatment, cleaning, and extraction. Armchairs take 20-30 minutes each. Full lounge suite (3-seater sofa, 2 armchairs) takes approximately 2-2.5 hours. Time varies based on fabric condition, staining severity, and additional services like stain protection. We work efficiently while ensuring thorough cleaning.'
  }
]

export default function UpholsteryCleaningPage() {
  return (
    <ClientWrapper pageTitle="Complete Guide to Upholstery Cleaning in Manchester">
      <div className="min-h-screen">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 right-20 w-56 h-56 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Breadcrumb */}
              <nav className="flex justify-center items-center gap-2 text-sm text-gray-600 mb-6">
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
                <span>/</span>
                <span className="text-blue-600 font-medium">Upholstery Cleaning</span>
              </nav>

              {/* Topic Badge */}
              <Badge className="mb-6 bg-blue-100 text-blue-800 text-sm px-4 py-2">
                Complete Guide 2025
              </Badge>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Upholstery Cleaning Manchester
                <span className="block text-blue-600 mt-2">Complete Professional Guide</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                Everything you need to know about professional upholstery cleaning in Manchester. Expert guides covering sofa cleaning methods, fabric types, leather care, stain removal, pet stain treatment, and choosing the best cleaning service. From steam cleaning to dry cleaning, we cover all upholstery cleaning topics comprehensively.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {[
                  { icon: Users, value: '4,500+', label: 'Items Cleaned' },
                  { icon: Star, value: '4.9/5', label: 'Rating' },
                  { icon: Shield, value: '100%', label: 'Satisfaction' },
                  { icon: Clock, value: 'Same Day', label: 'Available' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation Cards Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Everything You Need to Know About Upholstery Cleaning
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive guides covering all aspects of professional upholstery cleaning in Manchester
              </p>
            </div>

            {/* Interactive Search & Filter Component */}
            <InteractiveSearch subtopics={subtopicCards} />
          </div>
        </section>

        {/* Comprehensive Overview Section */}
        <section className="py-16 bg-gray-50" id="overview">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Upholstery Cleaning in Manchester</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Professional upholstery cleaning is essential for maintaining the appearance, hygiene, and longevity of your furniture. Unlike carpets that receive regular vacuuming attention, upholstered furniture often goes years without deep cleaning, accumulating dirt, body oils, allergens, dust mites, and bacteria deep within fibers and padding. This comprehensive guide covers everything you need to know about upholstery cleaning in Manchester.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Blowup Cleaners, we specialize in professional upholstery cleaning across Manchester, Salford, Trafford, and surrounding areas. Our IICRC-certified technicians use advanced cleaning methods and eco-friendly products to restore your furniture to pristine condition. Whether you have fabric sofas, leather chairs, office furniture, or antique upholstery, we have the expertise to clean it safely and effectively.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="methods">Upholstery Cleaning Methods</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Different upholstery fabrics and soil levels require different cleaning methods. Professional cleaners assess your furniture and select the most appropriate technique based on fabric type, manufacturer cleaning codes, soil level, and staining. Here are the primary upholstery cleaning methods used by professionals.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hot Water Extraction (Steam Cleaning)</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hot water extraction is the gold standard for deep cleaning upholstery. This method injects a mixture of hot water and cleaning solution deep into upholstery fibers under pressure, then immediately extracts the solution along with dirt, allergens, and contaminants using powerful suction. The high temperature (150-200°F) kills dust mites and bacteria while loosening embedded soil. This is the most thorough cleaning method available and is recommended by most furniture manufacturers. Drying time is typically 4-6 hours with proper ventilation.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dry Cleaning (Low-Moisture Cleaning)</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dry cleaning uses specialized chemical solvents with minimal water (less than 10 percent of water used in steam cleaning). The cleaning compound is applied to upholstery, worked into fibers with brushes, and then vacuumed away along with absorbed dirt. This method is ideal for delicate fabrics that cannot tolerate moisture (marked with S cleaning code), vintage upholstery, or situations where quick drying is essential. Furniture can typically be used within 1-2 hours. While not as deep-cleaning as extraction methods, dry cleaning effectively cleans surface soiling.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Foam Cleaning (Shampoo Method)</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Foam cleaning generates dry foam from shampoo solution, which is worked into upholstery with rotating brushes. The foam encapsulates dirt particles, which are then removed by vacuuming once dry. This medium-moisture method provides good cleaning results with moderate drying time (2-4 hours). It works well for synthetic fabrics and provides good stain removal. However, thorough rinsing is critical to prevent residue buildup that attracts dirt.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="cost">Upholstery Cleaning Cost in Manchester</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Understanding upholstery cleaning pricing helps you budget appropriately and compare quotes. In Manchester, professional upholstery cleaning is priced per item rather than hourly or by square footage. Pricing varies based on furniture size, fabric type, and condition.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Standard pricing</strong> for fabric upholstery: Two-seater sofa £35-£45, three-seater sofa £50-£65, loveseat £30-£40, armchair £30-£40, dining chair £12-£18, ottoman £20-£30, and recliner £40-£55. These prices include pre-treatment, thorough cleaning, and basic deodorizing.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Leather upholstery</strong> costs £10-£15 more per item due to specialized pH-balanced cleaners and conditioning treatments required. Leather cleaning and conditioning for a three-seater sofa typically costs £65-£80.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Additional services</strong> that may cost extra: Stain protection treatment (£15-£25 per item), deep stain removal (£10-£20 per stain), pet odor treatment (£20-£30 per item), antimicrobial treatment (£15-£20), and same-day emergency service (£20-£40 rush fee). Most companies offer package discounts when cleaning multiple items—typically 10-15 percent off when cleaning a full lounge suite.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="fabric-types">Fabric Types & Care Requirements</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Understanding your upholstery fabric type is crucial for proper cleaning and maintenance. Furniture manufacturers attach cleaning code tags (usually under cushions) that indicate safe cleaning methods. Here's what you need to know about common upholstery fabrics.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cleaning Code Guide</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>W (Water-based):</strong> Can be cleaned with water-based solutions. Safe for hot water extraction and most cleaning methods.</li>
                <li><strong>S (Solvent-based):</strong> Must be dry-cleaned with solvent-based cleaners only. Water can cause shrinkage, staining, or damage.</li>
                <li><strong>WS (Water or Solvent):</strong> Can be cleaned with either water-based or solvent-based methods. Most versatile fabric type.</li>
                <li><strong>X (Vacuum only):</strong> Cannot be wet-cleaned at all. Professional vacuuming only. Often used for delicate silk or fragile vintage fabrics.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Common Upholstery Fabrics</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Cotton and Linen:</strong> Natural fibers that are durable and cleanable but can shrink if over-wetted. Usually coded W or WS. Clean well with hot water extraction when proper moisture control is used.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Microfiber:</strong> Synthetic fabric that is stain-resistant and durable. Usually coded S or WS. Cleans excellently with dry cleaning methods. Avoid over-wetting as it can leave water marks.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Velvet and Chenille:</strong> Plush pile fabrics that require gentle cleaning to avoid crushing or matting fibers. Usually coded S. Professional cleaning essential to maintain appearance and texture.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Synthetic blends (Polyester, Nylon):</strong> Durable, stain-resistant fabrics common in modern furniture. Usually coded W or WS. Clean well with hot water extraction and dry quickly.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="leather">Leather Upholstery Cleaning & Care</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Leather furniture requires specialized cleaning and conditioning to maintain its beauty and prevent cracking or drying. Never use standard upholstery cleaners on leather—they can strip protective finishes and damage the material. Professional leather cleaning involves multiple steps using pH-balanced products specifically formulated for leather.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>The professional leather cleaning process</strong> begins with thorough vacuuming to remove loose dirt and debris. Next, we apply pH-balanced leather cleaner that removes body oils, dirt, and grime without removing the leather's protective finish. The cleaner is worked into the leather with soft brushes, then wiped clean with microfiber cloths. Finally, we apply leather conditioner that restores moisture, prevents cracking, and protects against future staining.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Leather types we clean:</strong> Aniline leather (natural, unprotected finish—most delicate), semi-aniline leather (light protective coating), pigmented leather (heavy protective coating—most durable), and bonded leather (leather particles bonded to fabric backing). Each type requires specific cleaning approaches and conditioning treatments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Leather maintenance tips:</strong> Wipe spills immediately with clean, dry cloth. Vacuum weekly with brush attachment to remove dust. Keep leather away from direct sunlight and heat sources which cause fading and cracking. Apply leather conditioner every 6-12 months. Professional cleaning and conditioning annually extends leather life by years.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="stains">Stain Removal from Upholstery</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Professional upholstery cleaners use specialized spot treatments and techniques to remove stubborn stains that DIY methods cannot touch. Success depends on stain type, how long it has been set, and fabric type. Here's what you need to know about common upholstery stains.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Common Stains and Professional Treatment</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Red Wine:</strong> Time-sensitive tannin stain requiring enzymatic treatments and acidic neutralizers. Professionals achieve excellent results even on old wine stains.</li>
                <li><strong>Coffee & Tea:</strong> Tannin-based stains that respond well to professional spot treatments and hot water extraction when addressed promptly.</li>
                <li><strong>Grease & Oil:</strong> Require solvent-based treatments to dissolve oils before extraction removes residue. Common on armrests and headrests.</li>
                <li><strong>Ink (Ballpoint, Permanent Marker):</strong> Extremely difficult stains requiring specialized solvents. Professional treatment offers best chance of removal without fabric damage.</li>
                <li><strong>Makeup & Lipstick:</strong> Oil-based stains needing solvent treatments followed by thorough rinsing to prevent residue.</li>
                <li><strong>Blood:</strong> Protein-based stain that must be treated with cold water and enzyme cleaners. Hot water sets blood stains permanently.</li>
                <li><strong>Urine (Pet or Human):</strong> Requires enzyme treatments that break down uric acid crystals causing odors. May need subfloor/padding treatment if deeply penetrated.</li>
                <li><strong>Vomit:</strong> Protein and acid-based stain requiring immediate cleaning, enzyme treatment, and deodorizing to remove staining and odors.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="pets">Pet Stain & Odor Removal from Upholstery</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Pet owners face unique upholstery challenges: embedded pet hair, urine stains, feces accidents, vomit, and persistent odors. Professional cleaning offers solutions DIY methods cannot match.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Pet hair removal</strong> requires industrial-strength vacuums with specialized upholstery attachments that penetrate deep into fabric weave. We use rubber brushes and static-attracting tools that pull embedded fur from hard-to-reach areas. Even heavily shed-on furniture can be restored to near hair-free condition with professional treatment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Pet urine treatment</strong> goes beyond surface cleaning. Urine penetrates deep into cushion foam and padding, where it crystallizes and causes persistent odors. We use enzyme treatments that break down uric acid crystals at the molecular level, eliminating odors permanently rather than masking them. Severe cases may require cushion removal and padding treatment or replacement.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Pet odor elimination</strong> requires addressing the source—bacteria causing odors—not just deodorizing. Our antimicrobial treatments kill odor-causing bacteria, while enzyme solutions break down organic matter. We do not use perfumes that temporarily mask odors. Professional treatment eliminates pet odors at their source for lasting freshness.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="commercial">Commercial Upholstery Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Commercial environments present unique upholstery cleaning challenges: high traffic, frequent use, visible soiling, and the need to minimize business disruption. Blowup Cleaners specializes in commercial upholstery cleaning for offices, hotels, restaurants, healthcare facilities, and public spaces across Manchester.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>We clean:</strong> Office chairs and workstation seating, reception area furniture, conference room chairs, waiting room sofas and chairs, restaurant booths and banquettes, hotel lobby seating, healthcare waiting areas, theater and auditorium seating, church pews and sanctuary seating, and casino gaming chairs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Commercial cleaning advantages:</strong> We offer after-hours and weekend service to avoid business disruption. Low-moisture cleaning methods minimize drying time so furniture can be used quickly. Maintenance contracts provide regular scheduled cleaning at discounted rates. Volume discounts available for large commercial projects. We work efficiently to clean large furniture quantities quickly.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="eco-friendly">Eco-Friendly Upholstery Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Eco-friendly upholstery cleaning uses non-toxic, biodegradable products that are safe for your family, pets, and the environment without sacrificing cleaning effectiveness. Modern green cleaning solutions perform as well as or better than traditional chemical cleaners.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Blowup Cleaners, all our upholstery cleaning products are eco-friendly, non-toxic, and safe for children and pets. We use plant-based cleaners free from harsh chemicals like perchloroethylene, naphthalene, and petroleum solvents. They do not leave chemical residues that can irritate skin, trigger allergies, or emit VOCs. Green cleaning is especially important for upholstery because people have direct skin contact with furniture surfaces.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="professional-vs-diy">Professional vs DIY Upholstery Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                DIY upholstery cleaning with rented machines or home methods rarely delivers satisfactory results and can actually damage furniture. Here is why professional cleaning is worth the investment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Equipment differences:</strong> Professional truck-mounted extraction units deliver 10 times more suction power than portable rental machines, removing far more soil and moisture. We heat water to 200°F+ (killing bacteria and dust mites) while home machines barely reach 140°F. Professional wands and tools reach into crevices and seams that standard attachments miss.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Expertise matters:</strong> Professionals identify fabric types, select appropriate cleaning methods, properly treat stains without causing damage, and avoid over-wetting that leads to mold. DIY cleaning often results in rapid re-soiling from soap residue, water staining from over-wetting, color bleeding from incorrect products, and fabric shrinkage from improper techniques.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Cost comparison:</strong> Rental machines cost £30-£50 per day plus cleaning solution, requiring hours of physical labor with uncertain results. Professional cleaning costs £35-£65 per sofa with guaranteed results, proper insurance, and no effort required. When considering your time and potential damage risks, professional cleaning offers better value.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="maintenance">Furniture Maintenance Between Cleanings</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Proper maintenance between professional cleanings extends furniture life and preserves appearance. Follow these expert maintenance tips:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Vacuum weekly:</strong> Use upholstery attachments to remove surface dust and prevent dirt from embedding. Pay attention to crevices and seams where debris accumulates.</li>
                <li><strong>Rotate cushions regularly:</strong> Flip and rotate cushions monthly to distribute wear evenly and prevent permanent body impressions in foam.</li>
                <li><strong>Address spills immediately:</strong> Blot (never rub) spills with clean white towels. Work from edges toward center to prevent spreading. Use plain water for most spills unless you know the correct treatment.</li>
                <li><strong>Avoid direct sunlight:</strong> Position furniture away from windows or use window treatments to prevent UV fading and fabric deterioration.</li>
                <li><strong>Use arm covers and throws:</strong> Protect high-contact areas (armrests, headrests) with washable covers that can be cleaned easily.</li>
                <li><strong>Keep pets off furniture:</strong> Or use pet blankets to protect upholstery from fur, oils, and scratching damage.</li>
                <li><strong>Professional cleaning schedule:</strong> Have upholstery professionally cleaned every 12-18 months (every 6-12 months for high-use furniture or pet homes).</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" id="allergies">Allergy Relief Through Upholstery Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Upholstered furniture is a major reservoir for allergens that trigger asthma and allergic reactions. Dust mites, pollen, pet dander, mold spores, and bacteria accumulate deep within cushions and padding where vacuuming cannot reach. Professional cleaning dramatically reduces allergen levels.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hot water extraction is most effective for allergen removal. High-temperature water (150-200°F) kills dust mites and their eggs, while powerful suction removes dead mites, their waste products (a major allergen), pollen, pet dander, and microscopic particles. Studies show professional upholstery cleaning can reduce allergen levels by 85-95 percent when done regularly.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For maximum allergy relief, combine professional cleaning every 6-12 months with weekly vacuuming using HEPA filters, immediate spill cleanup, and keeping pets off furniture. Green cleaning solutions benefit allergy sufferers because they do not introduce additional irritating chemical residues into your home environment.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Choose Blowup Cleaners for Upholstery Cleaning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Blowup Cleaners is Manchester's trusted upholstery cleaning specialist, serving homes and businesses across Manchester, Salford, Trafford, and surrounding areas. We combine professional expertise, advanced equipment, eco-friendly products, and a commitment to customer satisfaction that has earned us a 4.9-star rating from 180+ satisfied customers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our IICRC-certified technicians receive extensive training in fabric identification, stain chemistry, leather care, and proper cleaning techniques. We invest in professional-grade extraction equipment and specialized tools that deliver superior results. We exclusively use eco-friendly, non-toxic cleaning solutions that are safe for your family, pets, and the environment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We offer transparent pricing with free quotes, 100 percent satisfaction guarantee, same-day service availability, and coverage across all Greater Manchester areas. Whether you need routine sofa cleaning, emergency stain removal, leather conditioning, or commercial furniture maintenance, we deliver exceptional results every time.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section - 20 questions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Upholstery Cleaning
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about professional upholstery cleaning in Manchester
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

        {/* Trust & Authority Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Manchester Trusts Blowup Cleaners
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: 'Fully Insured', value: 'Protected Service' },
                { icon: Users, title: 'Items Cleaned', value: '4,500+' },
                { icon: Star, title: 'Average Rating', value: '4.9/5' },
                { icon: Award, title: 'Satisfaction', value: '100%' }
              ].map((stat, index) => (
                <Card key={index} className="text-center bg-white border-2 border-gray-100">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-8 w-8 text-blue-600" />
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
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Restore Your Furniture?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of Manchester homeowners who trust Blowup Cleaners for professional upholstery cleaning. Get your free quote in 60 seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold text-lg px-8 py-4 rounded-xl">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Free Quote Now
                  </Button>
                </Link>
                <a href="tel:07405428259">
                  <Button size="lg" className="bg-white/10 hover:bg-white/20 border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-xl">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: 07405 428259
                  </Button>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Free quotes
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Same-day available
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  100% satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </ClientWrapper>
  )
}
