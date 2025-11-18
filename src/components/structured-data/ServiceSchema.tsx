export function ServiceSchema() {
  const services = [
    {
      '@type': 'Service',
      serviceType: 'Carpet Cleaning',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Fresh Fiber Carpet Cleaning',
      },
      areaServed: {
        '@type': 'City',
        name: 'Manchester',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Carpet Cleaning Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Residential Carpet Cleaning',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Commercial Carpet Cleaning',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Upholstery Cleaning',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Rug Cleaning',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mattress Cleaning',
            },
          },
        ],
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
    />
  );
}
