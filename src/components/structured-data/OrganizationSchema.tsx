/**
 * Organization Schema for E-E-A-T and Knowledge Graph
 *
 * Helps Google understand Blowup Cleaners as a business entity
 * Improves visibility in AI Overviews, voice search, and local SEO
 */

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://blowupcleaners.co.uk/#organization',
    name: 'Blowup Cleaners',
    legalName: 'HOPOLLO LTD',
    alternateName: 'Blowup Cleaners Manchester',
    description: 'Professional carpet, upholstery, rug, and deep cleaning services in Manchester. Same-day service available with 100% satisfaction guarantee.',
    url: 'https://blowupcleaners.co.uk',
    logo: {
      '@type': 'ImageObject',
      url: 'https://blowupcleaners.co.uk/logo.png',
      width: 250,
      height: 100,
    },
    image: 'https://blowupcleaners.co.uk/images/og-service.jpg',
    telephone: '+447405428259',
    email: 'info@blowupcleaners.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '230 Sealand Road',
      addressLocality: 'Chester',
      addressRegion: 'Cheshire',
      postalCode: 'CH1 4LH',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.1905,
      longitude: -2.9746,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Manchester',
      },
      {
        '@type': 'City',
        name: 'Trafford',
      },
      {
        '@type': 'City',
        name: 'Salford',
      },
    ],
    priceRange: '££',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '16:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/blowupcleaners',
      'https://twitter.com/blowupcleaners',
      'https://www.instagram.com/blowupcleaners',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'NCCA Certified',
        description: 'National Carpet Cleaners Association accredited professionals',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Fully Insured',
        description: 'Comprehensive liability insurance for commercial work',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
