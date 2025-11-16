/**
 * Service Data
 *
 * Centralized service information for reuse across pages
 */

export interface Service {
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  features: string[]
  benefits: string[]
  process: Array<{
    step: number
    title: string
    description: string
  }>
  pricing: {
    from: string
    details: Array<{
      item: string
      price: string
    }>
  }
  faqs: Array<{
    question: string
    answer: string
  }>
  seoKeywords: string[]
}

export const services: Record<string, Service> = {
  'carpet-cleaning': {
    slug: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    shortDescription: 'Deep steam cleaning for all carpet types',
    fullDescription:
      'Our professional carpet cleaning service uses advanced hot water extraction (steam cleaning) to deep clean your carpets, removing embedded dirt, allergens, bacteria, and stains. We use eco-friendly, non-toxic cleaning solutions that are safe for your family and pets, while delivering exceptional results that extend the life of your carpets.',
    features: [
      'Deep steam extraction cleaning',
      'Pre-treatment of high-traffic areas',
      'Stain and odor removal',
      'Fast drying time (2-4 hours)',
      'Safe for children and pets',
      'All carpet types and materials',
      'Furniture moving included',
      'Carpet deodorizer application'
    ],
    benefits: [
      'Removes 99% of dirt, bacteria, and allergens',
      'Extends carpet lifespan by years',
      'Improves indoor air quality',
      'Restores carpet appearance and texture',
      'Eliminates unpleasant odors',
      'Prevents mold and mildew growth'
    ],
    process: [
      {
        step: 1,
        title: 'Pre-Inspection',
        description:
          'We inspect your carpets to identify problem areas, stains, and determine the best cleaning approach for your carpet type.'
      },
      {
        step: 2,
        title: 'Pre-Treatment',
        description:
          'High-traffic areas and stains are pre-treated with specialized solutions to break down dirt and prepare for deep cleaning.'
      },
      {
        step: 3,
        title: 'Hot Water Extraction',
        description:
          'Our powerful truck-mounted equipment injects hot water and cleaning solution deep into carpet fibers, then extracts it along with dirt and contaminants.'
      },
      {
        step: 4,
        title: 'Grooming & Drying',
        description:
          'Carpets are groomed to restore pile direction and high-velocity fans are used to speed up drying time to just 2-4 hours.'
      }
    ],
    pricing: {
      from: '£25 per room',
      details: [
        { item: 'Single room (up to 15 sqm)', price: '£25' },
        { item: 'Living room (15-25 sqm)', price: '£40' },
        { item: 'Large room (25-35 sqm)', price: '£55' },
        { item: 'Stairs (per flight)', price: '£20' },
        { item: 'Landing', price: '£15' },
        { item: 'Stain removal treatment', price: '+£15' },
        { item: 'Scotchgard protection', price: '+£10 per room' }
      ]
    },
    faqs: [
      {
        question: 'How long does carpet cleaning take?',
        answer:
          'Most carpet cleaning jobs take 1-3 hours depending on the size of the area and condition of the carpets. We\'ll provide an estimated time when we provide your quote.'
      },
      {
        question: 'How long until carpets are dry?',
        answer:
          'Our powerful extraction equipment removes most moisture, leaving carpets dry within 2-4 hours. We also use high-velocity fans to speed up drying time.'
      },
      {
        question: 'Is carpet cleaning safe for pets and children?',
        answer:
          'Yes! We use eco-friendly, non-toxic cleaning solutions that are completely safe for children and pets. Your family can return to the room as soon as the carpets are dry.'
      },
      {
        question: 'How often should I have my carpets cleaned?',
        answer:
          'We recommend professional carpet cleaning every 6-12 months for most homes, or every 3-6 months for high-traffic areas or homes with pets and children.'
      },
      {
        question: 'Do you move furniture?',
        answer:
          'Yes, we include moving of light furniture as part of our service. We ask that you remove fragile items, electronics, and very heavy furniture before we arrive.'
      }
    ],
    seoKeywords: [
      'carpet cleaning Manchester',
      'steam carpet cleaning',
      'professional carpet cleaning',
      'carpet cleaning near me',
      'deep carpet cleaning',
      'carpet stain removal'
    ]
  },
  'upholstery-cleaning': {
    slug: 'upholstery-cleaning',
    name: 'Upholstery Cleaning',
    shortDescription: 'Expert cleaning for sofas, chairs & furniture',
    fullDescription:
      'Professional upholstery cleaning service for all types of fabric furniture including sofas, armchairs, dining chairs, ottomans, and more. We use gentle yet effective cleaning methods tailored to your specific upholstery fabric, removing dirt, stains, allergens, and odors while protecting the integrity and color of your furniture.',
    features: [
      'All furniture types and fabrics',
      'Delicate fabric protection',
      'Color-safe cleaning solutions',
      'Dust mite and allergen removal',
      'Leather cleaning and conditioning',
      'Scotchgard protection available',
      'Odor neutralization',
      'Fabric-specific cleaning methods'
    ],
    benefits: [
      'Extends furniture lifespan',
      'Removes allergens and bacteria',
      'Restores original colors and texture',
      'Eliminates odors at the source',
      'Protects your investment',
      'Healthier living environment'
    ],
    process: [
      {
        step: 1,
        title: 'Fabric Identification',
        description:
          'We identify your upholstery fabric type and test cleaning solutions in an inconspicuous area to ensure color safety.'
      },
      {
        step: 2,
        title: 'Vacuum & Pre-Treatment',
        description:
          'Furniture is thoroughly vacuumed to remove loose dirt, then pre-treated with fabric-appropriate cleaning solutions.'
      },
      {
        step: 3,
        title: 'Deep Cleaning',
        description:
          'Using hot water extraction or dry cleaning methods (depending on fabric type), we deep clean the upholstery to remove embedded dirt and stains.'
      },
      {
        step: 4,
        title: 'Protection & Finishing',
        description:
          'Optional Scotchgard protection is applied, and furniture is groomed to restore appearance. Fast drying ensures minimal disruption.'
      }
    ],
    pricing: {
      from: '£40 per item',
      details: [
        { item: 'Armchair', price: '£40' },
        { item: '2-seater sofa', price: '£60' },
        { item: '3-seater sofa', price: '£80' },
        { item: 'Corner sofa (per section)', price: '£50' },
        { item: 'Dining chair', price: '£15' },
        { item: 'Ottoman/footstool', price: '£25' },
        { item: 'Leather cleaning & conditioning', price: '+£20' },
        { item: 'Scotchgard protection', price: '+£15 per item' }
      ]
    },
    faqs: [
      {
        question: 'Can you clean all types of upholstery fabric?',
        answer:
          'Yes, we can clean virtually all upholstery fabrics including cotton, linen, velvet, microfiber, leather, suede, and synthetic materials. We use fabric-specific cleaning methods for best results.'
      },
      {
        question: 'How long does upholstery take to dry?',
        answer:
          'Drying time varies by fabric type and cleaning method used. Most upholstery dries within 3-6 hours. Leather and dry-cleaned items may be ready to use immediately.'
      },
      {
        question: 'Will cleaning damage or fade my furniture?',
        answer:
          'No. We always test cleaning solutions in an inconspicuous area first and use color-safe, pH-balanced products. Our technicians are trained to work with delicate and expensive fabrics.'
      },
      {
        question: 'Can you remove pet hair and odors?',
        answer:
          'Yes! We use specialized tools to remove pet hair and enzyme-based treatments to eliminate pet odors at the molecular level, not just mask them.'
      },
      {
        question: 'Do you clean leather furniture?',
        answer:
          'Absolutely. We offer professional leather cleaning and conditioning services that clean, moisturize, and protect your leather furniture.'
      }
    ],
    seoKeywords: [
      'upholstery cleaning Manchester',
      'sofa cleaning',
      'furniture cleaning',
      'leather sofa cleaning',
      'armchair cleaning',
      'professional upholstery cleaning'
    ]
  }
  // Additional services would continue here...
}

export function getService(slug: string): Service | undefined {
  return services[slug]
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(services)
}
