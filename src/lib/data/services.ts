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
  },
  'rug-cleaning': {
    slug: 'rug-cleaning',
    name: 'Rug Cleaning',
    shortDescription: 'Specialist cleaning for all rug types',
    fullDescription:
      'Professional cleaning for area rugs, Persian rugs, oriental rugs, and specialty rugs. We understand the unique requirements of different rug materials and use appropriate cleaning methods to preserve their beauty and value. Our facility-based cleaning allows for thorough treatment and proper drying.',
    features: [
      'Oriental and Persian rugs',
      'Antique rug cleaning',
      'Wool, silk, and synthetic materials',
      'Fringe cleaning and repair',
      'Pick-up and delivery available',
      'Color restoration services',
      'Moth and odor treatment',
      'Pet stain and odor removal'
    ],
    benefits: [
      'Preserves rug value and beauty',
      'Removes deep-seated dirt and allergens',
      'Restores vibrant colors',
      'Extends rug lifespan',
      'Professional fringe care',
      'Safe for delicate materials'
    ],
    process: [
      {
        step: 1,
        title: 'Inspection & Assessment',
        description:
          'We carefully inspect your rug to identify the material, construction, dyes, and any problem areas requiring special attention.'
      },
      {
        step: 2,
        title: 'Dust & Soil Removal',
        description:
          'Using specialized equipment, we remove dry soil and dust that regular vacuuming cannot reach, preparing the rug for deep cleaning.'
      },
      {
        step: 3,
        title: 'Hand Washing',
        description:
          'Your rug is gently hand-washed using appropriate cleaning solutions for its specific fiber type and dye stability, ensuring thorough yet safe cleaning.'
      },
      {
        step: 4,
        title: 'Drying & Finishing',
        description:
          'Rugs are carefully dried in our controlled environment, then groomed and inspected before being returned to you in pristine condition.'
      }
    ],
    pricing: {
      from: '£35 per rug',
      details: [
        { item: 'Small rug (up to 6x4 ft)', price: '£35' },
        { item: 'Medium rug (up to 9x6 ft)', price: '£60' },
        { item: 'Large rug (up to 12x9 ft)', price: '£95' },
        { item: 'Extra large (over 12x9 ft)', price: '£130+' },
        { item: 'Persian/Oriental rug premium', price: '+£20' },
        { item: 'Pick-up and delivery', price: '£15' },
        { item: 'Fringe cleaning', price: '+£10' }
      ]
    },
    faqs: [
      {
        question: 'Do you clean Persian and Oriental rugs?',
        answer:
          'Yes! We specialize in cleaning valuable Persian and Oriental rugs. Our technicians are trained in proper handling and cleaning techniques for these delicate pieces.'
      },
      {
        question: 'How long does rug cleaning take?',
        answer:
          'The complete process typically takes 7-10 days, including pick-up, cleaning, drying, and delivery. Rush service may be available for an additional fee.'
      },
      {
        question: 'Do you offer pick-up and delivery?',
        answer:
          'Yes, we offer convenient pick-up and delivery service for £15 within our service area. This protects your rug during transport and ensures proper handling.'
      },
      {
        question: 'Can you restore faded colors?',
        answer:
          'While we cannot re-dye rugs, our cleaning process often reveals colors that were hidden by dirt and grime, making the rug appear more vibrant. We also offer color correction services for specific issues.'
      },
      {
        question: 'What about antique or valuable rugs?',
        answer:
          'We have extensive experience with antique and valuable rugs. We use gentle, appropriate cleaning methods and can provide insurance documentation if needed.'
      }
    ],
    seoKeywords: [
      'rug cleaning Manchester',
      'Persian rug cleaning',
      'Oriental rug cleaning',
      'area rug cleaning',
      'antique rug cleaning',
      'professional rug cleaning'
    ]
  },
  'stain-removal': {
    slug: 'stain-removal',
    name: 'Stain Removal',
    shortDescription: 'Specialized treatment for tough stains',
    fullDescription:
      'Expert stain removal service for even the toughest stains including wine, coffee, pet stains, ink, blood, and more. Our technicians use professional-grade stain removers and proven techniques developed over years of experience. We understand the chemistry of different stain types and apply the appropriate treatment for maximum effectiveness.',
    features: [
      'Wine, coffee, and food stains',
      'Pet stains and odors',
      'Ink and dye removal',
      'Blood and bodily fluid stains',
      'Grease and oil stains',
      'Professional-grade treatments',
      'Multiple treatment methods',
      'Success guarantee on most stains'
    ],
    benefits: [
      'Saves replacement costs',
      'Restores carpet/upholstery appearance',
      'Eliminates embedded odors',
      'Prevents permanent damage',
      'Expert stain identification',
      'Safe for all fabrics'
    ],
    process: [
      {
        step: 1,
        title: 'Stain Assessment',
        description:
          'We identify the stain type, age, and previous treatment attempts to determine the best removal approach and set realistic expectations.'
      },
      {
        step: 2,
        title: 'Pre-Treatment',
        description:
          'Specialized stain removers are applied based on the stain chemistry. Different stains require different treatments for optimal results.'
      },
      {
        step: 3,
        title: 'Extraction & Neutralization',
        description:
          'The stain and cleaning solution are thoroughly extracted using professional equipment. Neutralizers prevent stain reappearance.'
      },
      {
        step: 4,
        title: 'Final Inspection',
        description:
          'We inspect the treated area and may apply additional treatments if needed. Most stains require only one treatment for complete removal.'
      }
    ],
    pricing: {
      from: '£15 (add-on)',
      details: [
        { item: 'Single stain treatment', price: '£15' },
        { item: 'Multiple stains (3-5)', price: '£35' },
        { item: 'Extensive staining', price: '£50+' },
        { item: 'Pet stain package (5 stains)', price: '£45' },
        { item: 'Red wine emergency service', price: '£25' },
        { item: 'Ink removal', price: '£20' },
        { item: 'Blood stain treatment', price: '£18' }
      ]
    },
    faqs: [
      {
        question: 'Can you remove all stains?',
        answer:
          'While we can remove most stains, some may be permanent depending on the type of stain, how long it\'s been there, and what has been done to it previously. We\'ll always give you an honest assessment during our inspection.'
      },
      {
        question: 'How quickly should I treat a stain?',
        answer:
          'The sooner the better! Fresh stains are much easier to remove than old, set-in stains. If you have a fresh spill, blot (don\'t rub) with a clean cloth and contact us immediately.'
      },
      {
        question: 'What about pet stains?',
        answer:
          'We specialize in pet stain removal using enzyme-based treatments that break down organic matter at a molecular level. This eliminates both the stain and odor completely.'
      },
      {
        question: 'Will stains come back?',
        answer:
          'When properly treated, stains should not return. However, if residue remains in the carpet backing, wicking can occur. We use anti-wicking treatments to prevent this.'
      },
      {
        question: 'Do you guarantee stain removal?',
        answer:
          'We guarantee our best effort on all stains. For most common stains (wine, coffee, food), we can achieve 90-100% removal. We\'ll discuss specific guarantees during our assessment.'
      }
    ],
    seoKeywords: [
      'stain removal Manchester',
      'carpet stain removal',
      'wine stain removal',
      'pet stain removal',
      'professional stain treatment',
      'tough stain removal'
    ]
  },
  'pet-odor-removal': {
    slug: 'pet-odor-removal',
    name: 'Pet Odor Removal',
    shortDescription: 'Complete pet odor & stain treatment',
    fullDescription:
      'Specialized pet odor and stain removal service that eliminates pet urine, feces, and vomit odors at the molecular level. We don\'t just mask odors – we eliminate them completely using enzyme-based treatments and UV light detection to find hidden stains. Our process treats not just the surface but penetrates deep into carpet padding and subfloor if necessary.',
    features: [
      'Enzyme-based odor elimination',
      'UV light stain detection',
      'Deep carpet pad treatment',
      'Anti-bacterial sanitization',
      'Long-lasting odor prevention',
      'Safe for pets and children',
      'Subfloor treatment if needed',
      'Multiple pet accident packages'
    ],
    benefits: [
      'Completely eliminates odors',
      'Prevents repeat marking',
      'Sanitizes affected areas',
      'Safe for all pets',
      'Improves home air quality',
      'Protects flooring investment'
    ],
    process: [
      {
        step: 1,
        title: 'UV Light Inspection',
        description:
          'We use professional UV lights to detect all pet stains, including those invisible to the naked eye. This ensures we treat every affected area.'
      },
      {
        step: 2,
        title: 'Enzyme Treatment',
        description:
          'Powerful enzyme solutions are applied that break down organic matter (urine, feces) at the molecular level, eliminating odors at their source.'
      },
      {
        step: 3,
        title: 'Deep Extraction',
        description:
          'We extract the enzymes along with the broken-down organic matter. For severe cases, we may need to treat the carpet padding or subfloor.'
      },
      {
        step: 4,
        title: 'Sanitization & Prevention',
        description:
          'Anti-bacterial treatment sanitizes the area, and odor barriers are applied to prevent future marking in the same spot.'
      }
    ],
    pricing: {
      from: '£50',
      details: [
        { item: 'Single area treatment', price: '£50' },
        { item: 'Multiple areas (3-5 spots)', price: '£85' },
        { item: 'Whole room treatment', price: '£120' },
        { item: 'UV light inspection', price: 'Included' },
        { item: 'Carpet pad replacement (per sqm)', price: '£15' },
        { item: 'Subfloor sealing (per sqm)', price: '£20' },
        { item: 'Prevention treatment', price: '+£15' }
      ]
    },
    faqs: [
      {
        question: 'How do you find all the pet stains?',
        answer:
          'We use professional UV lights that make pet urine glow, revealing stains that are invisible to the naked eye. This ensures we treat every affected area.'
      },
      {
        question: 'Will the smell come back?',
        answer:
          'If treated properly, no. We use enzyme treatments that break down the organic matter causing the odor, not just mask it. Our treatments are permanent when applied correctly.'
      },
      {
        question: 'Is it safe for my pets?',
        answer:
          'Absolutely! Our enzyme treatments and sanitizers are completely safe for pets and children. Your pets can return to the area once it\'s dry (typically 4-6 hours).'
      },
      {
        question: 'What if the padding is affected?',
        answer:
          'For severe cases where urine has penetrated to the padding or subfloor, we can treat these layers or recommend replacement if necessary. We\'ll always discuss options and costs upfront.'
      },
      {
        question: 'Can you prevent my pet from marking the same spot?',
        answer:
          'Yes! We apply odor barriers and deterrents that discourage pets from re-marking treated areas. Combined with complete odor removal, this is highly effective.'
      }
    ],
    seoKeywords: [
      'pet odor removal Manchester',
      'pet urine removal',
      'dog urine smell removal',
      'cat urine odor removal',
      'pet stain and odor removal',
      'pet accident cleaning'
    ]
  },
  'end-of-tenancy-cleaning': {
    slug: 'end-of-tenancy-cleaning',
    name: 'End of Tenancy Cleaning',
    shortDescription: 'Deep clean for rental properties',
    fullDescription:
      'Comprehensive cleaning service for tenants moving out and landlords preparing properties. We deep clean carpets, upholstery, and all flooring to help ensure you get your deposit back or attract new tenants. Our thorough service meets the high standards expected by letting agents and landlords.',
    features: [
      'Full property carpet cleaning',
      'Upholstery and curtain cleaning',
      'Stain and odor removal',
      'Deposit-back guarantee',
      'Fast turnaround available',
      'Certified cleaning report',
      'Before/after photos',
      'Landlord direct billing available'
    ],
    benefits: [
      'Maximizes deposit return',
      'Meets letting agent standards',
      'Attracts quality tenants',
      'Professional documentation',
      'One-stop cleaning solution',
      'Competitive package pricing'
    ],
    process: [
      {
        step: 1,
        title: 'Property Assessment',
        description:
          'We assess all carpets and upholstered items, noting problem areas and providing a detailed quote covering all necessary cleaning.'
      },
      {
        step: 2,
        title: 'Comprehensive Cleaning',
        description:
          'We deep clean all carpeted areas, upholstered furniture, and any other items included in the package, removing all stains and odors.'
      },
      {
        step: 3,
        title: 'Quality Check',
        description:
          'Our team supervisor inspects all cleaned areas to ensure they meet professional standards and letting agent requirements.'
      },
      {
        step: 4,
        title: 'Documentation',
        description:
          'We provide before/after photos and a cleaning certificate that you can present to your landlord or letting agent as proof of professional cleaning.'
      }
    ],
    pricing: {
      from: '£150 per property',
      details: [
        { item: '1-bedroom flat', price: '£150' },
        { item: '2-bedroom flat', price: '£220' },
        { item: '3-bedroom house', price: '£300' },
        { item: '4-bedroom house', price: '£380' },
        { item: 'Additional rooms', price: '+£40 each' },
        { item: 'Furniture cleaning (sofa)', price: '+£60' },
        { item: 'Same-day service', price: '+£50' },
        { item: 'Cleaning certificate', price: 'Included' }
      ]
    },
    faqs: [
      {
        question: 'Will this help me get my deposit back?',
        answer:
          'Yes! Most deposit deductions for carpet cleaning can be avoided with professional end-of-tenancy cleaning. We provide documentation to prove the work was done professionally.'
      },
      {
        question: 'How quickly can you do the cleaning?',
        answer:
          'We typically need 24-48 hours notice, but same-day service is available for an additional fee (subject to availability). Most properties take 3-6 hours to clean.'
      },
      {
        question: 'Do you provide a certificate?',
        answer:
          'Yes! We provide a professional cleaning certificate with before/after photos that you can present to your landlord or letting agent.'
      },
      {
        question: 'What if the landlord isn\'t satisfied?',
        answer:
          'If there are any issues with our cleaning (not pre-existing damage), we\'ll return to re-clean the affected areas at no charge. We stand behind our work.'
      },
      {
        question: 'Can landlords book directly?',
        answer:
          'Absolutely! We work with many landlords and letting agents for turnover cleans between tenancies. We offer direct billing and regular service agreements.'
      }
    ],
    seoKeywords: [
      'end of tenancy cleaning Manchester',
      'move out cleaning',
      'rental property cleaning',
      'deposit cleaning',
      'tenancy carpet cleaning',
      'letting agent cleaning'
    ]
  },
  'mattress-cleaning': {
    slug: 'mattress-cleaning',
    name: 'Mattress Cleaning',
    shortDescription: 'Deep sanitization for healthier sleep',
    fullDescription:
      'Professional mattress cleaning and sanitization service that removes dust mites, allergens, bacteria, dead skin cells, and stains. Improve your sleep quality and indoor air quality with our deep mattress cleaning. We use specialized equipment and treatments designed specifically for mattresses.',
    features: [
      'Dust mite and allergen removal',
      'Deep steam sanitization',
      'Stain and odor treatment',
      'Anti-bacterial protection',
      'Fast drying (2-3 hours)',
      'All mattress types and sizes',
      'UV sanitization available',
      'Deodorizing treatment'
    ],
    benefits: [
      'Improves sleep quality',
      'Reduces allergies and asthma',
      'Eliminates dust mites',
      'Removes dead skin cells',
      'Freshens and deodorizes',
      'Extends mattress life'
    ],
    process: [
      {
        step: 1,
        title: 'Inspection',
        description:
          'We inspect your mattress for stains, damage, and assess the cleaning method needed based on the mattress type and construction.'
      },
      {
        step: 2,
        title: 'Vacuuming',
        description:
          'Using HEPA-filtered vacuum equipment, we remove surface dust, dead skin cells, and debris from all sides of the mattress.'
      },
      {
        step: 3,
        title: 'Deep Steam Cleaning',
        description:
          'Hot water extraction with anti-bacterial solutions penetrates deep into the mattress, killing dust mites and bacteria while removing embedded dirt.'
      },
      {
        step: 4,
        title: 'Sanitization & Drying',
        description:
          'Optional UV sanitization is applied, and high-powered fans speed drying to 2-3 hours. Anti-allergen treatment can be applied upon request.'
      }
    ],
    pricing: {
      from: '£30 per mattress',
      details: [
        { item: 'Single mattress', price: '£30' },
        { item: 'Double mattress', price: '£40' },
        { item: 'King mattress', price: '£50' },
        { item: 'Super King mattress', price: '£60' },
        { item: 'Memory foam mattress', price: '+£10' },
        { item: 'UV sanitization', price: '+£15' },
        { item: 'Anti-allergen treatment', price: '+£10' }
      ]
    },
    faqs: [
      {
        question: 'Why should I clean my mattress?',
        answer:
          'Mattresses accumulate dust mites, dead skin cells, allergens, and bacteria over time. Professional cleaning removes these contaminants, improving sleep quality and reducing allergies.'
      },
      {
        question: 'How often should mattresses be cleaned?',
        answer:
          'We recommend professional mattress cleaning every 6-12 months, or more frequently if you suffer from allergies, asthma, or have pets that sleep on the bed.'
      },
      {
        question: 'How long until the mattress is dry?',
        answer:
          'Our powerful extraction equipment removes most moisture. With proper air circulation, mattresses are typically dry within 2-3 hours and ready to sleep on the same day.'
      },
      {
        question: 'Can you remove mattress stains?',
        answer:
          'We can remove most common stains including sweat, urine, blood, and spills. However, some old or set-in stains may not be completely removable. We\'ll always do our best.'
      },
      {
        question: 'Is it safe for memory foam mattresses?',
        answer:
          'Yes! We use specialized low-moisture cleaning methods for memory foam and other specialty mattresses that require gentler treatment.'
      }
    ],
    seoKeywords: [
      'mattress cleaning Manchester',
      'mattress sanitization',
      'dust mite removal',
      'mattress deep cleaning',
      'allergy mattress cleaning',
      'professional mattress cleaning'
    ]
  },
  'commercial-cleaning': {
    slug: 'commercial-cleaning',
    name: 'Commercial Cleaning',
    shortDescription: 'Professional service for businesses',
    fullDescription:
      'Specialized commercial carpet and upholstery cleaning for offices, hotels, restaurants, retail spaces, and other businesses. We work around your schedule to minimize disruption to your operations. Our commercial-grade equipment and experienced teams handle projects of any size, from small offices to large commercial buildings.',
    features: [
      'Office and retail spaces',
      'Hotels and hospitality',
      'Restaurants and cafes',
      'Out-of-hours service available',
      'Regular maintenance contracts',
      'Large-scale equipment',
      'Minimal business disruption',
      'Professional appearance maintenance'
    ],
    benefits: [
      'Professional business image',
      'Extended carpet lifespan',
      'Healthier work environment',
      'Flexible scheduling',
      'Cost-effective maintenance',
      'Consistent quality results'
    ],
    process: [
      {
        step: 1,
        title: 'Site Survey',
        description:
          'We visit your premises to assess the scope of work, understand your specific requirements, and provide a detailed quote with scheduling options.'
      },
      {
        step: 2,
        title: 'Planning & Scheduling',
        description:
          'We work with you to schedule cleaning at times that minimize disruption – evenings, weekends, or during low-activity periods.'
      },
      {
        step: 3,
        title: 'Professional Cleaning',
        description:
          'Our experienced commercial team uses industrial-grade equipment to deep clean all carpeted areas and upholstered furniture efficiently and thoroughly.'
      },
      {
        step: 4,
        title: 'Quality Assurance',
        description:
          'Post-cleaning inspection ensures all areas meet our high standards. We provide documentation and can schedule regular maintenance visits.'
      }
    ],
    pricing: {
      from: 'Custom quote',
      details: [
        { item: 'Office space (per sqm)', price: 'From £2.50' },
        { item: 'Retail space (per sqm)', price: 'From £2.80' },
        { item: 'Hotel rooms (per room)', price: 'From £35' },
        { item: 'Restaurant dining area', price: 'Custom quote' },
        { item: 'Regular maintenance contract', price: '15% discount' },
        { item: 'Out-of-hours premium', price: '+20%' },
        { item: 'Emergency service', price: '+30%' }
      ]
    },
    faqs: [
      {
        question: 'Can you work outside business hours?',
        answer:
          'Yes! We regularly work evenings, weekends, and overnight to minimize disruption to your business operations. Out-of-hours service is available for a small premium.'
      },
      {
        question: 'Do you offer regular maintenance contracts?',
        answer:
          'Absolutely! We offer scheduled maintenance contracts with discounted rates. Regular cleaning extends carpet life and maintains professional appearance.'
      },
      {
        question: 'How long will the cleaning take?',
        answer:
          'This depends on the size of your premises and the scope of work. We provide accurate time estimates during our site survey and work efficiently to minimize downtime.'
      },
      {
        question: 'Do you have insurance for commercial work?',
        answer:
          'Yes, we carry comprehensive commercial liability insurance and can provide certificates of insurance for your records.'
      },
      {
        question: 'Can you handle large buildings?',
        answer:
          'Yes! We have commercial-grade truck-mounted equipment and can deploy multiple teams for large projects. We\'ve successfully completed projects ranging from small offices to large commercial buildings.'
      }
    ],
    seoKeywords: [
      'commercial carpet cleaning Manchester',
      'office carpet cleaning',
      'business carpet cleaning',
      'hotel carpet cleaning',
      'retail carpet cleaning',
      'commercial cleaning services'
    ]
  }
}

export function getService(slug: string): Service | undefined {
  return services[slug]
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(services)
}
