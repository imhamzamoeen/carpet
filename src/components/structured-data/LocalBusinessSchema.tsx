interface LocalBusinessSchemaProps {
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function LocalBusinessSchema({ aggregateRating }: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    name: 'Blowup Cleaners',
    image: 'https://blowupcleaners.co.uk/logo.jpg',
    '@id': 'https://blowupcleaners.co.uk',
    url: 'https://blowupcleaners.co.uk',
    telephone: '+44-161-XXX-XXXX',
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Manchester',
      postalCode: 'M1 1AA',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.4808,
      longitude: -2.2426,
    },
    areaServed: [
      { '@type': 'City', 'name': 'Manchester' },
      { '@type': 'City', 'name': 'Trafford' },
      { '@type': 'City', 'name': 'Salford' },
      { '@type': 'City', 'name': 'Bolton' },
      { '@type': 'City', 'name': 'Stockport' },
      { '@type': 'City', 'name': 'Oldham' },
      { '@type': 'City', 'name': 'Rochdale' },
      { '@type': 'City', 'name': 'Bury' },
      { '@type': 'City', 'name': 'Tameside' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00',
      },
    ],
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
