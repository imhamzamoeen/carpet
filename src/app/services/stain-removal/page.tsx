import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Droplet, Wine, Coffee, PawPrint, Heart, Palette, UtensilsCrossed,
  Leaf, Sparkles, Shield, AlertTriangle, Clock, Phone, CheckCircle2,
  Zap, Target, TrendingUp, Award, X
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui'
import ClientWrapper from './client-wrapper'
import InteractiveSearch from './interactive-client'

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Professional Stain Removal Services | Wine, Pet, Coffee & More | BMad Carpet Cleaning',
  description: 'Expert stain removal for all surfaces. From wine spills to pet accidents, we handle every stain type. Same-day emergency service available. Call 07405 428259 for free quote.',
  keywords: [
    'stain removal services',
    'wine stain removal',
    'pet stain removal',
    'coffee stain removal',
    'blood stain removal',
    'grease stain removal',
    'professional stain removal',
    'emergency stain treatment',
    'carpet stain removal',
    'upholstery stain removal',
    'rug stain removal',
    'stain removal near me',
    'BMad stain removal'
  ],
  openGraph: {
    title: 'Professional Stain Removal Services | BMad Carpet Cleaning',
    description: 'Expert stain removal for all surfaces. Same-day emergency service. Free quotes available.',
    url: 'https://bmadcarpetcleaning.co.uk/services/stain-removal',
    siteName: 'BMad Carpet Cleaning',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Stain Removal Services | BMad Carpet Cleaning',
    description: 'Expert stain removal for all surfaces. Same-day emergency service available.',
  },
  alternates: {
    canonical: 'https://bmadcarpetcleaning.co.uk/services/stain-removal',
  },
}

export default function StainRemovalPage() {
  // Subtopic cards data for interactive search
  const subtopics = [
    {
      title: 'Wine Stain Removal',
      url: '/services/stain-removal/wine-stains',
      excerpt: 'Expert removal of red wine, white wine, and champagne stains from all surfaces.',
      category: 'Beverage Stains',
      iconName: 'Wine',
      keywords: ['wine', 'red wine', 'white wine', 'champagne', 'alcohol stains']
    },
    {
      title: 'Coffee & Tea Stain Removal',
      url: '/services/stain-removal/coffee-tea-stains',
      excerpt: 'Professional treatment for coffee, tea, and hot beverage tannin-based stains.',
      category: 'Beverage Stains',
      iconName: 'Coffee',
      keywords: ['coffee', 'tea', 'espresso', 'latte', 'tannin stains', 'hot beverage']
    },
    {
      title: 'Pet Stain & Odor Removal',
      url: '/services/stain-removal/pet-stains',
      excerpt: 'Complete pet accident cleanup with enzymatic odor elimination and sanitization.',
      category: 'Organic Stains',
      iconName: 'PawPrint',
      keywords: ['pet stains', 'urine', 'pet odor', 'dog stains', 'cat stains', 'enzymatic']
    },
    {
      title: 'Blood Stain Removal',
      url: '/services/stain-removal/blood-stains',
      excerpt: 'Safe removal of fresh and dried blood stains using specialized protein-based treatments.',
      category: 'Organic Stains',
      iconName: 'Heart',
      keywords: ['blood', 'protein stains', 'medical stains', 'bodily fluids']
    },
    {
      title: 'Grease & Oil Stain Removal',
      url: '/services/stain-removal/grease-oil-stains',
      excerpt: 'Effective treatment for cooking oil, motor oil, butter, and lipid-based stains.',
      category: 'Oil-Based Stains',
      iconName: 'Droplet',
      keywords: ['grease', 'oil', 'butter', 'motor oil', 'cooking oil', 'lipid stains']
    },
    {
      title: 'Ink Stain Removal',
      url: '/services/stain-removal/ink-stains',
      excerpt: 'Professional removal of ballpoint pen, permanent marker, and printer ink stains.',
      category: 'Chemical Stains',
      iconName: 'Palette',
      keywords: ['ink', 'pen', 'marker', 'permanent marker', 'printer ink', 'dye']
    },
    {
      title: 'Food Stain Removal',
      url: '/services/stain-removal/food-stains',
      excerpt: 'Complete treatment for chocolate, tomato sauce, condiments, and general food spills.',
      category: 'Food Stains',
      iconName: 'UtensilsCrossed',
      keywords: ['food', 'chocolate', 'tomato', 'sauce', 'ketchup', 'mustard', 'condiments']
    },
    {
      title: 'Grass & Mud Stain Removal',
      url: '/services/stain-removal/grass-mud-stains',
      excerpt: 'Expert removal of outdoor stains including grass, mud, dirt, and soil-based marks.',
      category: 'Outdoor Stains',
      iconName: 'Leaf',
      keywords: ['grass', 'mud', 'dirt', 'soil', 'outdoor stains', 'chlorophyll']
    },
    {
      title: 'Makeup & Cosmetic Stain Removal',
      url: '/services/stain-removal/makeup-stains',
      excerpt: 'Specialized removal of lipstick, foundation, nail polish, and cosmetic products.',
      category: 'Chemical Stains',
      iconName: 'Sparkles',
      keywords: ['makeup', 'lipstick', 'foundation', 'nail polish', 'cosmetics', 'beauty products']
    },
    {
      title: 'Rust Stain Removal',
      url: '/services/stain-removal/rust-stains',
      excerpt: 'Advanced treatment for rust and metal-based oxidation stains on fabrics.',
      category: 'Chemical Stains',
      iconName: 'Shield',
      keywords: ['rust', 'metal stains', 'oxidation', 'iron stains', 'corrosion']
    },
    {
      title: 'Emergency Stain Treatment',
      url: '/services/stain-removal/emergency-treatment',
      excerpt: 'Immediate response guide for fresh spills with first-aid stain treatment steps.',
      category: 'Emergency Response',
      iconName: 'AlertTriangle',
      keywords: ['emergency', 'immediate', 'fresh spill', 'quick response', 'first aid']
    },
    {
      title: 'Professional vs DIY Comparison',
      url: '/services/stain-removal/professional-vs-diy',
      excerpt: 'Complete cost-benefit analysis comparing professional stain removal to DIY methods.',
      category: 'Resources',
      iconName: 'Target',
      keywords: ['professional', 'DIY', 'cost comparison', 'success rates', 'value']
    }
  ]

  return (
    <ClientWrapper pageTitle="Professional Stain Removal Services">
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
            description: 'Professional carpet, upholstery, and rug cleaning services with expert stain removal.',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'GB',
              addressLocality: 'United Kingdom'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+44-7405-428259',
              contactType: 'customer service',
              availableLanguage: ['English'],
              areaServed: 'GB'
            },
            sameAs: [
              'https://www.facebook.com/bmadcarpetcleaning',
              'https://www.instagram.com/bmadcarpetcleaning'
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://bmadcarpetcleaning.co.uk/#localbusiness',
            name: 'BMad Carpet Cleaning',
            image: 'https://bmadcarpetcleaning.co.uk/logo.png',
            priceRange: '££',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'GB'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '51.5074',
              longitude: '-0.1278'
            },
            telephone: '+44-7405-428259',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '17:00'
              }
            ],
            areaServed: [
              { '@type': 'City', name: 'London' },
              { '@type': 'Country', name: 'United Kingdom' }
            ]
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
                name: 'Stain Removal',
                item: 'https://bmadcarpetcleaning.co.uk/services/stain-removal'
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
            name: 'Professional Stain Removal Services',
            description: 'Expert stain removal for all surfaces including wine, pet, coffee, blood, grease, and more.',
            url: 'https://bmadcarpetcleaning.co.uk/services/stain-removal',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['.speakable-headline', '.speakable-tldr', '.speakable-pricing', '.speakable-cta']
            },
            lastReviewed: '2025-11-21',
            reviewedBy: {
              '@type': 'Person',
              name: 'BMad Cleaning Expert'
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
            name: 'Professional Stain Removal Process',
            description: 'Our comprehensive 5-step stain removal methodology for optimal results.',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Stain Assessment',
                text: 'We identify the stain type, age, and affected material to select the most effective treatment method. Our technicians examine fiber type, colorfastness, and any previous treatment attempts.',
                url: 'https://bmadcarpetcleaning.co.uk/services/stain-removal#assessment'
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Pre-Treatment Application',
                text: 'Specialized cleaning agents are applied based on stain chemistry. We use pH-balanced solutions for protein stains, solvent-based treatments for oil stains, and enzymatic cleaners for organic matter.',
                url: 'https://bmadcarpetcleaning.co.uk/services/stain-removal#pretreatment'
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Deep Cleaning Extraction',
                text: 'Hot water extraction or dry cleaning methods remove the dissolved stain particles. Our truck-mounted equipment provides powerful suction to extract contaminants from deep within fibers.',
                url: 'https://bmadcarpetcleaning.co.uk/services/stain-removal#extraction'
              },
              {
                '@type': 'HowToStep',
                position: 4,
                name: 'Neutralization & Rinse',
                text: 'We neutralize any remaining cleaning agents and perform thorough rinsing to prevent residue buildup. This step ensures no sticky residue attracts future dirt.',
                url: 'https://bmadcarpetcleaning.co.uk/services/stain-removal#rinse'
              },
              {
                '@type': 'HowToStep',
                position: 5,
                name: 'Protection & Drying',
                text: 'Optional stain protection treatment is applied, and we use industrial air movers for rapid drying. Fiber protection helps prevent future staining and makes cleanup easier.',
                url: 'https://bmadcarpetcleaning.co.uk/services/stain-removal#protection'
              }
            ],
            totalTime: 'PT1H30M',
            estimatedCost: {
              '@type': 'MoneyAmount',
              currency: 'GBP',
              value: '80'
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
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can you remove red wine stains from carpet?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we successfully remove most red wine stains using specialized tannin-based stain removers. Our success rate exceeds 90% for fresh wine spills and 70% for set-in stains. The key is addressing wine stains quickly, as they become more difficult after 24-48 hours. We use pH-balanced solutions that break down tannins without damaging carpet fibers or colors.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do you remove pet urine stains and odors?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pet urine requires enzymatic cleaners that break down uric acid crystals causing odors. We use black lights to identify all contaminated areas, then apply bio-enzymatic treatments that digest organic compounds. For severe cases, we may need to treat carpet padding or subfloors. Our process includes sanitization and deodorization to completely eliminate pet odors, not just mask them.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is your success rate for stain removal?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our overall stain removal success rate is approximately 85-95% depending on stain type, age, and previous treatment attempts. Fresh stains (less than 24 hours old) have the highest success rate at 95%+. Set-in stains (more than 1 week old) average 70-80% success. Permanent dyes, bleach damage, and chemical burns cannot be removed as they permanently alter fiber color.'
                }
              },
              {
                '@type': 'Question',
                name: 'How much does professional stain removal cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Professional stain removal typically costs £50-£150 depending on stain severity, size, and location. Single small stains start at £50. Multiple stains or room-wide treatment ranges £100-£150. Emergency same-day service may include additional fees. We provide free phone consultations and quotes. Many stains can be treated during regular carpet cleaning appointments at reduced rates.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can you remove coffee and tea stains?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, coffee and tea stains respond well to professional treatment. These tannin-based stains require alkaline cleaning solutions to break down the compounds. We achieve 90%+ success on fresh coffee stains. Older tea stains that have oxidized may require multiple treatments. Adding milk or sugar to beverages can complicate removal due to protein and carbohydrate content.'
                }
              },
              {
                '@type': 'Question',
                name: 'How long does stain removal take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most stain removal treatments take 1-2 hours including drying time. Simple single stains may take 30-45 minutes. Complex stains requiring multiple treatments or special techniques can take 2-3 hours. Emergency service is available with 2-4 hour response times. Drying time varies by humidity and ventilation but typically ranges 2-6 hours for treated areas.'
                }
              },
              {
                '@type': 'Question',
                name: 'What stains are impossible to remove?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Permanent stains include bleach damage, strong dyes (hair dye, food coloring), chemical burns, and color loss from sunlight. These stains have chemically altered fiber color and cannot be reversed. Very old stains (months to years) that have oxidized may be impossible to fully remove. In these cases, we may recommend carpet dyeing, patching, or replacement for the affected area.'
                }
              },
              {
                '@type': 'Question',
                name: 'Should I try DIY stain removal first?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'For fresh spills, immediately blot (never rub) with clean white towels and apply cold water. Avoid harsh chemicals, vinegar, or hydrogen peroxide as these can set stains or damage fibers. Do not use heat or scrubbing. If simple blotting does not work within 5-10 minutes, stop and call professionals. Improper DIY attempts can permanently set stains, making professional removal impossible.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you offer same-day emergency stain removal?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we provide same-day emergency stain removal service for urgent situations. Call 07405 428259 before 2 PM for potential same-day service. Emergency service is available for fresh spills that require immediate professional attention, such as large wine spills before events or pet accidents. Emergency appointments include additional service fees but maximize stain removal success rates.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can you remove blood stains from carpet?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, blood is a protein-based stain that responds to cold water and enzymatic treatments. Fresh blood has 95%+ removal success. Dried blood is more challenging but often removable with specialized protein dissolvers. Never use hot water on blood as it cooks the protein and permanently sets the stain. We use cold water extraction and bio-enzymatic cleaners specifically formulated for protein stains.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do you remove grease and oil stains?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Grease and oil require solvent-based cleaners or specialized degreasers. We use dry cleaning solvents that dissolve lipids without spreading the stain. The process includes applying absorbent compounds, chemical solvents, and hot water extraction. Motor oil and cooking grease have 80-90% success rates. Butter and food oils are easier to remove at 90%+ success. Avoiding water initially prevents spreading oil stains.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can you remove ink and marker stains?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ink stain removal depends on ink type. Ballpoint pen ink (oil-based) requires solvents and has 70-80% success. Water-based marker is easier at 85-95% success. Permanent marker is challenging at 50-60% success due to alcohol-based dyes. Printer ink varies by type (dye vs pigment). We use specialized ink removers and blotting techniques. Never rub ink stains as this spreads the pigment deeper into fibers.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is your stain removal guarantee?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We guarantee our best effort using industry-leading techniques and products. If we cannot remove a stain, you only pay our minimum service call fee. We provide honest upfront assessments about removal probability. Some stains are permanent and we will inform you before treatment. Our satisfaction guarantee covers workmanship - if our process damages your carpet (extremely rare), we repair or replace the affected area.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do you remove makeup and cosmetic stains?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Makeup stains vary by product. Lipstick (oil-based) requires solvents similar to grease removal. Foundation contains oils and pigments needing multi-step treatment. Nail polish requires acetone-based removers (tested first for colorfastness). Mascara (water-based) responds to enzymatic cleaners. We achieve 75-90% success depending on makeup type. Always blot excess makeup before applying any liquid, which can spread pigments.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can you remove stains from upholstery and rugs?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we remove stains from all fabric surfaces including upholstery, rugs, and delicate textiles. Upholstery requires different techniques due to varied fiber content and fabric construction. Delicate rugs (silk, wool, antique) need specialized pH-neutral treatments. We test all cleaning solutions on inconspicuous areas first. Our success rates are similar to carpet stain removal, adjusted for fabric sensitivity.'
                }
              },
              {
                '@type': 'Question',
                name: 'Why do some stains reappear after cleaning?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Stain reappearance (wicking) occurs when residue deep in carpet padding rises to the surface during drying. This happens when the original spill penetrated into padding or subflooring. Proper extraction and neutralization prevent wicking. If stains reappear, we provide free re-treatment within 7 days. Sugar-based stains (soda, juice) are most prone to wicking due to sticky residue that attracts soil.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do you remove grass and mud stains?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Grass stains contain chlorophyll (green pigment) requiring oxygen-based or enzymatic treatments. Mud must be completely dry before removal - attempting to clean wet mud spreads it. We vacuum dried mud, then treat remaining stains with appropriate solutions. Grass has 85-95% success rate. Mud alone is nearly 100% removable. Combination grass-and-mud stains may require multiple treatments for complete removal.'
                }
              },
              {
                '@type': 'Question',
                name: 'What areas do you serve for stain removal?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We provide stain removal services throughout the United Kingdom with primary service in London and surrounding areas. Emergency same-day service is available within 20 miles of central London. Standard appointments (24-48 hours) are available in extended service areas. Call 07405 428259 to confirm service availability in your area. We also offer advice and product recommendations for areas outside our service zone.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you use eco-friendly stain removal products?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we prioritize eco-friendly and non-toxic cleaning solutions whenever effective. Our enzymatic cleaners are biodegradable and safe for children and pets. For tough stains requiring stronger chemicals, we use EPA-approved products and provide ventilation recommendations. All products are thoroughly rinsed to minimize residue. We offer 100% green cleaning options for environmentally conscious clients, though some stubborn stains may require conventional treatments.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can you remove old set-in stains?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Old set-in stains are challenging but often treatable. Success depends on stain type, age, fiber type, and previous treatment attempts. Stains over 1 year old have 50-70% success rates. We use specialized restoration techniques including oxidizers, reducing agents, and repeated treatments. Some old stains have permanently bonded to fibers and cannot be removed. We provide honest assessments and may recommend spot dyeing or carpet repair for permanent stains.'
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Badge variant="warning" className="mb-4 bg-yellow-400 text-blue-900 border-0">
              Expert Stain Removal Services
            </Badge>
            <h1 className="speakable-headline text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Stain Removal for Every Surface
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Wine Spills • Pet Accidents • Coffee Stains • Blood • Grease • Ink • Food • And More
            </p>
            <p className="text-lg mb-8 text-blue-50 max-w-3xl mx-auto">
              From emergency fresh spills to stubborn set-in stains, our expert technicians use advanced chemistry and proven techniques to restore your carpets, upholstery, and rugs to pristine condition.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="speakable-cta bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8">
                  Get Free Stain Assessment
                </Button>
              </Link>
              <a href="tel:07405428259">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 07405 428259
                </Button>
              </a>
            </div>
            <p className="mt-6 text-blue-100 flex items-center justify-center gap-2">
              <Clock className="h-5 w-5" />
              Same-Day Emergency Service Available
            </p>
          </div>
        </div>
      </section>

      {/* TL;DR Section for LLMs and Voice Search */}
      <section className="speakable-tldr bg-yellow-50 border-l-4 border-yellow-400 py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-yellow-600" />
              TL;DR - Quick Summary
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>BMad Carpet Cleaning</strong> provides professional stain removal services for all stain types including wine, pet accidents, coffee, blood, grease, ink, food, and more. We serve the United Kingdom with same-day emergency service available in London. Our 5-step process includes assessment, pre-treatment, extraction, neutralization, and protection. Success rates: 95% for fresh stains, 70-80% for set-in stains. Pricing: £50-£150 depending on severity. Call <span className="speakable-pricing font-bold">07405 428259</span> for free quotes. Eco-friendly products available. Satisfaction guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Professional Stain Removal Matters
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Stains are more than just unsightly marks on your carpets, upholstery, or rugs—they represent a complex chemical challenge that requires specialized knowledge, professional-grade equipment, and proven techniques. Whether you're dealing with a fresh wine spill at a dinner party or a months-old pet accident that's been haunting your home, the approach to stain removal makes all the difference between success and permanent damage.
              </p>
              <p>
                Most homeowners make critical mistakes when attempting DIY stain removal. Using hot water on protein-based stains like blood or egg can permanently cook the proteins into the fibers. Scrubbing instead of blotting spreads stains deeper and wider. Mixing household chemicals creates unpredictable reactions that can set stains permanently or damage carpet dyes. Over-wetting carpets without proper extraction leads to mold growth in padding and subfloors. These well-intentioned mistakes cost UK homeowners thousands of pounds annually in carpet replacement.
              </p>
              <p>
                Professional stain removal is an investment in your property value and indoor air quality. Organic stains from food, beverages, and bodily fluids harbor bacteria, allergens, and odor-causing compounds. Pet urine that's not properly treated with enzymatic cleaners will continue producing ammonia vapors and attracting pets back to the same spot. Professional treatment doesn't just address the visible stain—it sanitizes, deodorizes, and prevents future issues.
              </p>
              <p>
                At BMad Carpet Cleaning, we've treated over 10,000 stains across the United Kingdom. Our technicians understand the chemistry behind every stain type, from tannin-based wine and coffee stains to complex oil-based makeup and food grease. We use pH-balanced solutions, professional extraction equipment generating 500+ PSI suction, and specialized treatments including enzymatic cleaners for organic matter, oxidizers for dye-based stains, and solvents for oil-based contaminants. Our approach maximizes stain removal success while protecting your valuable carpets and upholstery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stain Removal Science Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Science of Stain Removal
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Understanding stain chemistry is fundamental to successful removal. Stains can be categorized into four primary types: <strong>water-soluble</strong> (coffee, tea, juice, soda), <strong>oil-based</strong> (grease, motor oil, cooking oil, butter), <strong>protein-based</strong> (blood, egg, dairy, bodily fluids), and <strong>tannin-based</strong> (wine, tea, coffee, fruit). Each category requires different chemical approaches and pH levels for optimal removal.
              </p>
              <p>
                Timing is critical in stain treatment. Fresh stains (less than 24 hours old) have the highest success rates because the staining compounds haven't fully bonded with carpet fibers. Within hours, many stains undergo oxidation—a chemical reaction with oxygen that creates new, more stubborn compounds. This is why red wine stains turn brownish over time and why coffee stains become progressively darker. Professional intervention within the first 24-48 hours dramatically improves outcomes.
              </p>
              <p>
                The pH scale (0-14) guides our treatment selection. Acidic stains require alkaline cleaners, while alkaline stains need acidic neutralization. Coffee, tea, and wine are acidic (pH 3-5) and respond to alkaline treatments (pH 10-12). Protein stains like blood must be treated with cool water and enzymatic cleaners—heat permanently sets protein by denaturing it. Oil-based stains require non-polar solvents that can dissolve lipids without spreading them.
              </p>
              <p>
                Professional equipment makes a substantial difference. Our truck-mounted hot water extraction systems generate 220°F water temperature and 500-600 PSI suction—far exceeding rental equipment specifications. This combination dissolves staining compounds and extracts them from deep within carpet backing and padding. Portable equipment used by less experienced companies typically generates only 100-150 PSI, leaving residue that attracts dirt and causes rapid re-soiling.
              </p>
              <p>
                Modern stain removal incorporates advanced chemistry including encapsulation technology, where cleaning agents crystallize around soil particles for easy vacuuming; oxidizers like hydrogen peroxide that break down organic chromophores (color molecules); and enzymatic cleaners containing bacteria that literally digest organic matter. We select treatments based on fiber type (nylon, polyester, wool, silk), dye stability, and stain composition. This scientific approach, combined with technician experience, achieves the industry's highest success rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stain Type Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Stain Removal Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our specialized treatments for every stain type. Use the search and filters below to find exactly what you need.
              </p>
            </div>

            <InteractiveSearch subtopics={subtopics} />
          </div>
        </div>
      </section>

      {/* Professional Process Section */}
      <section id="process" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our Professional 5-Step Stain Removal Process
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Proven methodology developed over 15+ years and 10,000+ successful treatments
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <Card className="border-l-4 border-blue-600">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Comprehensive Stain Assessment</CardTitle>
                      <p className="text-gray-600 mt-2">
                        Our trained technicians begin with detailed stain analysis. We identify the stain source (wine, coffee, pet urine, grease, etc.), estimate age and penetration depth, assess fiber type and construction, test for colorfastness, and review any previous treatment attempts. This assessment determines our treatment strategy and sets realistic expectations for removal success.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Step 2 */}
              <Card className="border-l-4 border-yellow-600">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Targeted Pre-Treatment Application</CardTitle>
                      <p className="text-gray-600 mt-2">
                        We apply specialized cleaning agents matched to stain chemistry. Protein stains receive enzymatic treatments containing bacteria that digest organic compounds. Tannin-based stains get alkaline solutions that break down color molecules. Oil-based stains require solvent degreasers that dissolve lipids. Each pre-treatment includes appropriate dwell time (5-20 minutes) allowing chemical reactions to complete before extraction.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Step 3 */}
              <Card className="border-l-4 border-green-600">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Deep Cleaning Extraction</CardTitle>
                      <p className="text-gray-600 mt-2">
                        Our truck-mounted hot water extraction system delivers 220°F water at controlled pressure to rinse dissolved stain particles. Simultaneous vacuum extraction (500-600 PSI suction) removes contaminants from deep within carpet backing and padding. This combination of heat, agitation, and powerful extraction is the gold standard recognized by carpet manufacturers worldwide for effective cleaning without damage.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Step 4 */}
              <Card className="border-l-4 border-purple-600">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Neutralization & Thorough Rinse</CardTitle>
                      <p className="text-gray-600 mt-2">
                        We neutralize any remaining cleaning agents to bring pH back to neutral (7.0), preventing residue that attracts dirt. Multiple rinse passes with clean water ensure no sticky detergent residue remains. This step is critical for preventing rapid re-soiling and ensuring carpets stay cleaner longer. Final pH testing confirms complete neutralization before moving to the protection phase.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Step 5 */}
              <Card className="border-l-4 border-red-600">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Protection Treatment & Rapid Drying</CardTitle>
                      <p className="text-gray-600 mt-2">
                        Optional stain protection (Scotchgard or similar fluorochemical treatments) creates an invisible barrier that repels liquids and prevents stains from setting. We use industrial air movers to accelerate drying, typically achieving 80% dryness within 2-4 hours. Proper drying prevents mold growth, wicking, and browning. We provide post-treatment care instructions to maximize longevity of results.
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 border-2 border-blue-200">
              <div className="text-center">
                <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Industry-Leading Results</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our 5-step process achieves 85-95% overall stain removal success rates—significantly higher than industry averages of 65-75%.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">95%+</div>
                    <div className="text-sm text-gray-600">Fresh Stains</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">70-80%</div>
                    <div className="text-sm text-gray-600">Set-In Stains</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">10,000+</div>
                    <div className="text-sm text-gray-600">Successful Treatments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIY vs Professional Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Professional vs DIY Stain Removal: Complete Comparison
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Understanding when to tackle stains yourself and when to call the experts
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* DIY Card */}
              <Card className="border-2 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-orange-600" />
                    DIY Stain Removal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">✅ Best For:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Fresh spills (within 5-10 minutes)</li>
                      <li>• Small surface stains (less than 2 inches)</li>
                      <li>• Water-based stains (juice, soda)</li>
                      <li>• Low-risk areas (not main living spaces)</li>
                      <li>• Rental properties with older carpets</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">❌ Avoid For:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Protein stains (blood, egg, dairy)</li>
                      <li>• Oil-based stains (grease, motor oil)</li>
                      <li>• Large spills (more than 12 inches)</li>
                      <li>• Expensive carpets or rugs</li>
                      <li>• Any stain more than 24 hours old</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">💰 Cost:</h4>
                    <p className="text-gray-700">£5-20 for supplies</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">📊 Success Rate:</h4>
                    <p className="text-gray-700">30-50% for set-in stains</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">⚠️ Risks:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Spreading stain wider/deeper</li>
                      <li>• Setting stain permanently</li>
                      <li>• Damaging carpet dyes</li>
                      <li>• Over-wetting causing mold</li>
                      <li>• Mixing incompatible chemicals</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Card */}
              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                    Professional Stain Removal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">✅ Best For:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Any stain more than 1 hour old</li>
                      <li>• Large spills (more than 6 inches)</li>
                      <li>• Valuable carpets or antique rugs</li>
                      <li>• Protein, oil, or complex stains</li>
                      <li>• Visible areas (living rooms, offices)</li>
                      <li>• Pet accidents with odor</li>
                      <li>• Multiple stains or room-wide issues</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">💰 Cost:</h4>
                    <p className="text-gray-700">£50-150 per visit</p>
                    <p className="text-sm text-gray-600 mt-1">Often combined with regular cleaning for reduced rates</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">📊 Success Rate:</h4>
                    <p className="text-gray-700">85-95% depending on stain age</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">✨ Benefits:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Proper stain identification</li>
                      <li>• Professional-grade equipment</li>
                      <li>• Specialized chemistry knowledge</li>
                      <li>• Complete extraction (no residue)</li>
                      <li>• Sanitization and odor removal</li>
                      <li>• Satisfaction guarantee</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                Our Professional Recommendation
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  <strong>For fresh spills (less than 5 minutes old):</strong> Immediately blot with clean white towels (never colored, as dyes can transfer). Blot from outside edges toward center to prevent spreading. Apply cold water sparingly and continue blotting. If the stain disappears within 10 minutes of blotting, you've likely succeeded. If not, <strong>stop immediately</strong> and call professionals.
                </p>
                <p>
                  <strong>Never attempt DIY on:</strong> Red wine, pet urine, blood, grease, motor oil, ink, permanent marker, bleach spills, or any stain larger than your hand. These require professional chemistry and equipment. Improper DIY attempts can permanently set these stains, making professional removal impossible and necessitating carpet replacement.
                </p>
                <p>
                  <strong>Cost comparison reality:</strong> DIY supplies cost £5-20 but have 30-50% success rates on set-in stains. Professional treatment costs £50-150 but achieves 85-95% success. Failed DIY attempts often lead to £500-2000 carpet replacement. Professional treatment on the first attempt saves money long-term and preserves your investment.
                </p>
                <p className="font-bold text-blue-900">
                  When in doubt, call for a free phone consultation. We'll provide honest advice about whether DIY is appropriate or if professional treatment is recommended. No obligation, just expert guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Guide Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Emergency Stain Treatment Guide
              </h2>
              <p className="text-xl text-gray-600">
                Critical first steps for fresh spills—your actions in the first 5 minutes matter most
              </p>
            </div>

            <Card className="border-2 border-red-300 mb-8">
              <CardHeader className="bg-red-100">
                <CardTitle className="text-2xl text-red-900">⚠️ Universal Rules for ALL Fresh Stains</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">DO: Blot immediately</h4>
                      <p className="text-gray-700">Use clean white towels or paper towels. Press firmly and lift. Repeat with clean sections.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">DO: Work from outside to center</h4>
                      <p className="text-gray-700">Prevents spreading. Always blot from edges toward the middle of the stain.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">DO: Use cold water first</h4>
                      <p className="text-gray-700">Apply sparingly to dilute. Blot again. Repeat 2-3 times maximum.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">DO: Call professionals if unsuccessful</h4>
                      <p className="text-gray-700">If stain remains after 10 minutes of proper blotting, stop and call 07405 428259.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-300 mb-8">
              <CardHeader className="bg-red-100">
                <CardTitle className="text-2xl text-red-900">❌ NEVER Do These Things</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <X className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">NEVER: Rub or scrub stains</h4>
                      <p className="text-gray-700">Damages carpet fibers and pushes stains deeper. Always blot, never rub.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <X className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">NEVER: Use hot water on protein stains</h4>
                      <p className="text-gray-700">Heat cooks proteins (blood, egg, dairy) permanently into fibers. Always use cold water.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <X className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">NEVER: Apply vinegar, bleach, or hydrogen peroxide</h4>
                      <p className="text-gray-700">Can permanently damage carpet dyes or set stains. Stick to water only for DIY.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <X className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">NEVER: Over-wet the carpet</h4>
                      <p className="text-gray-700">Causes mold in padding and wicking. Use minimal water and blot thoroughly.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <X className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">NEVER: Use colored towels</h4>
                      <p className="text-gray-700">Dyes can transfer to carpet. Always use white towels or paper towels only.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Same-Day Emergency Service</h3>
              <p className="text-lg text-gray-700 mb-6">
                For urgent fresh spills that require immediate professional attention, we offer same-day emergency response throughout London and surrounding areas. Call before 2 PM for potential same-day service.
              </p>
              <a href="tel:07405428259">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency: 07405 428259
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Service Coverage & Pricing
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-8">
              <p>
                BMad Carpet Cleaning provides professional stain removal services throughout the United Kingdom with primary coverage in London and the greater London area. Our same-day emergency service is available within 20 miles of central London, with standard 24-48 hour appointments available in extended service areas throughout England, Scotland, Wales, and Northern Ireland.
              </p>
              <p>
                We serve residential homes, commercial offices, restaurants, hotels, healthcare facilities, schools, and rental properties. Our fleet of fully-equipped service vehicles carries professional-grade truck-mounted extraction systems, specialized stain removal chemistry for all stain types, pH testing equipment, moisture detection tools, and industrial air movers for rapid drying.
              </p>
              <p className="speakable-pricing font-bold text-lg text-blue-900">
                Pricing for stain removal services ranges from £50 for single small surface stains to £150 for multiple stains or complex treatments requiring specialized chemistry. Emergency same-day service may include additional dispatch fees. Many clients combine stain removal with regular carpet cleaning appointments for discounted rates. We provide free phone consultations and no-obligation quotes—call 07405 428259 to discuss your specific stain removal needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-600" />
                    Same-Day Emergency Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Available within 20 miles of central London</li>
                    <li>• Call before 2 PM for same-day consideration</li>
                    <li>• 2-4 hour response time</li>
                    <li>• Additional emergency dispatch fee applies</li>
                    <li>• Perfect for fresh spills before events</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    Standard Appointments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Available throughout the United Kingdom</li>
                    <li>• 24-48 hour scheduling</li>
                    <li>• Flexible appointment windows</li>
                    <li>• Standard service rates apply</li>
                    <li>• Can combine with regular cleaning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Get Your Free Stain Assessment</h3>
              <p className="text-lg mb-6 text-blue-100">
                Call now for expert advice, honest probability assessment, and no-obligation quotes
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:07405428259">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 07405 428259
                  </Button>
                </a>
                <Link href="/quote">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold">
                    Request Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Expert answers to your stain removal questions
            </p>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Can you remove red wine stains from carpet?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Yes, we successfully remove most red wine stains using specialized tannin-based stain removers. Our success rate exceeds 90% for fresh wine spills and 70% for set-in stains. The key is addressing wine stains quickly, as they become more difficult after 24-48 hours. We use pH-balanced solutions that break down tannins without damaging carpet fibers or colors.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">How do you remove pet urine stains and odors?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Pet urine requires enzymatic cleaners that break down uric acid crystals causing odors. We use black lights to identify all contaminated areas, then apply bio-enzymatic treatments that digest organic compounds. For severe cases, we may need to treat carpet padding or subfloors. Our process includes sanitization and deodorization to completely eliminate pet odors, not just mask them.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 3 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What is your success rate for stain removal?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Our overall stain removal success rate is approximately 85-95% depending on stain type, age, and previous treatment attempts. Fresh stains (less than 24 hours old) have the highest success rate at 95%+. Set-in stains (more than 1 week old) average 70-80% success. Permanent dyes, bleach damage, and chemical burns cannot be removed as they permanently alter fiber color.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 4 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">How much does professional stain removal cost?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Professional stain removal typically costs £50-£150 depending on stain severity, size, and location. Single small stains start at £50. Multiple stains or room-wide treatment ranges £100-£150. Emergency same-day service may include additional fees. We provide free phone consultations and quotes. Many stains can be treated during regular carpet cleaning appointments at reduced rates.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 5 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Can you remove coffee and tea stains?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Yes, coffee and tea stains respond well to professional treatment. These tannin-based stains require alkaline cleaning solutions to break down the compounds. We achieve 90%+ success on fresh coffee stains. Older tea stains that have oxidized may require multiple treatments. Adding milk or sugar to beverages can complicate removal due to protein and carbohydrate content.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 6 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">How long does stain removal take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Most stain removal treatments take 1-2 hours including drying time. Simple single stains may take 30-45 minutes. Complex stains requiring multiple treatments or special techniques can take 2-3 hours. Emergency service is available with 2-4 hour response times. Drying time varies by humidity and ventilation but typically ranges 2-6 hours for treated areas.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 7 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What stains are impossible to remove?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Permanent stains include bleach damage, strong dyes (hair dye, food coloring), chemical burns, and color loss from sunlight. These stains have chemically altered fiber color and cannot be reversed. Very old stains (months to years) that have oxidized may be impossible to fully remove. In these cases, we may recommend carpet dyeing, patching, or replacement for the affected area.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 8 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Should I try DIY stain removal first?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    For fresh spills, immediately blot (never rub) with clean white towels and apply cold water. Avoid harsh chemicals, vinegar, or hydrogen peroxide as these can set stains or damage fibers. Do not use heat or scrubbing. If simple blotting does not work within 5-10 minutes, stop and call professionals. Improper DIY attempts can permanently set stains, making professional removal impossible.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 9 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Do you offer same-day emergency stain removal?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Yes, we provide same-day emergency stain removal service for urgent situations. Call 07405 428259 before 2 PM for potential same-day service. Emergency service is available for fresh spills that require immediate professional attention, such as large wine spills before events or pet accidents. Emergency appointments include additional service fees but maximize stain removal success rates.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 10 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Can you remove blood stains from carpet?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Yes, blood is a protein-based stain that responds to cold water and enzymatic treatments. Fresh blood has 95%+ removal success. Dried blood is more challenging but often removable with specialized protein dissolvers. Never use hot water on blood as it cooks the protein and permanently sets the stain. We use cold water extraction and bio-enzymatic cleaners specifically formulated for protein stains.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 11 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">How do you remove grease and oil stains?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Grease and oil require solvent-based cleaners or specialized degreasers. We use dry cleaning solvents that dissolve lipids without spreading the stain. The process includes applying absorbent compounds, chemical solvents, and hot water extraction. Motor oil and cooking grease have 80-90% success rates. Butter and food oils are easier to remove at 90%+ success. Avoiding water initially prevents spreading oil stains.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 12 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Can you remove ink and marker stains?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Ink stain removal depends on ink type. Ballpoint pen ink (oil-based) requires solvents and has 70-80% success. Water-based marker is easier at 85-95% success. Permanent marker is challenging at 50-60% success due to alcohol-based dyes. Printer ink varies by type (dye vs pigment). We use specialized ink removers and blotting techniques. Never rub ink stains as this spreads the pigment deeper into fibers.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 13 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What is your stain removal guarantee?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We guarantee our best effort using industry-leading techniques and products. If we cannot remove a stain, you only pay our minimum service call fee. We provide honest upfront assessments about removal probability. Some stains are permanent and we will inform you before treatment. Our satisfaction guarantee covers workmanship - if our process damages your carpet (extremely rare), we repair or replace the affected area.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 14 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">How do you remove makeup and cosmetic stains?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Makeup stains vary by product. Lipstick (oil-based) requires solvents similar to grease removal. Foundation contains oils and pigments needing multi-step treatment. Nail polish requires acetone-based removers (tested first for colorfastness). Mascara (water-based) responds to enzymatic cleaners. We achieve 75-90% success depending on makeup type. Always blot excess makeup before applying any liquid, which can spread pigments.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 15 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Can you remove stains from upholstery and rugs?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Yes, we remove stains from all fabric surfaces including upholstery, rugs, and delicate textiles. Upholstery requires different techniques due to varied fiber content and fabric construction. Delicate rugs (silk, wool, antique) need specialized pH-neutral treatments. We test all cleaning solutions on inconspicuous areas first. Our success rates are similar to carpet stain removal, adjusted for fabric sensitivity.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 16 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Why do some stains reappear after cleaning?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Stain reappearance (wicking) occurs when residue deep in carpet padding rises to the surface during drying. This happens when the original spill penetrated into padding or subflooring. Proper extraction and neutralization prevent wicking. If stains reappear, we provide free re-treatment within 7 days. Sugar-based stains (soda, juice) are most prone to wicking due to sticky residue that attracts soil.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 17 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">How do you remove grass and mud stains?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Grass stains contain chlorophyll (green pigment) requiring oxygen-based or enzymatic treatments. Mud must be completely dry before removal - attempting to clean wet mud spreads it. We vacuum dried mud, then treat remaining stains with appropriate solutions. Grass has 85-95% success rate. Mud alone is nearly 100% removable. Combination grass-and-mud stains may require multiple treatments for complete removal.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 18 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What areas do you serve for stain removal?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We provide stain removal services throughout the United Kingdom with primary service in London and surrounding areas. Emergency same-day service is available within 20 miles of central London. Standard appointments (24-48 hours) are available in extended service areas. Call 07405 428259 to confirm service availability in your area. We also offer advice and product recommendations for areas outside our service zone.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 19 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Do you use eco-friendly stain removal products?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Yes, we prioritize eco-friendly and non-toxic cleaning solutions whenever effective. Our enzymatic cleaners are biodegradable and safe for children and pets. For tough stains requiring stronger chemicals, we use EPA-approved products and provide ventilation recommendations. All products are thoroughly rinsed to minimize residue. We offer 100% green cleaning options for environmentally conscious clients, though some stubborn stains may require conventional treatments.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ 20 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Can you remove old set-in stains?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Old set-in stains are challenging but often treatable. Success depends on stain type, age, fiber type, and previous treatment attempts. Stains over 1 year old have 50-70% success rates. We use specialized restoration techniques including oxidizers, reducing agents, and repeated treatments. Some old stains have permanently bonded to fibers and cannot be removed. We provide honest assessments and may recommend spot dyeing or carpet repair for permanent stains.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="speakable-headline text-4xl md:text-5xl font-bold mb-6">
              Ready to Remove That Stubborn Stain?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert stain removal with 85-95% success rates. Same-day emergency service available.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <a href="tel:07405428259">
                <Button size="lg" className="speakable-cta bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 07405 428259 Now
                </Button>
              </a>
              <Link href="/quote">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold text-lg px-8">
                  Get Free Quote
                </Button>
              </Link>
            </div>
            <p className="text-blue-200 text-lg">
              Free phone consultations • No-obligation quotes • Satisfaction guaranteed
            </p>
            <div className="mt-8 pt-8 border-t border-blue-600">
              <p className="text-sm text-blue-300">
                Last Updated: November 21, 2025 | Written by BMad Cleaning Experts
              </p>
            </div>
          </div>
        </div>
      </section>
    </ClientWrapper>
  )
}

// Fix Calendar import
import { Calendar } from 'lucide-react'
