export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fresh Fiber Carpet Cleaning',
    url: 'https://freshfibercleaning.co.uk',
    logo: 'https://freshfibercleaning.co.uk/logo.jpg',
    description: 'Professional carpet cleaning services in Manchester and Greater Manchester',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Manchester',
      addressCountry: 'GB',
    },
    sameAs: [
      'https://facebook.com/freshfiber',
      'https://instagram.com/freshfiber',
      'https://linkedin.com/company/freshfiber',
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Fresh Fiber Carpet Cleaning',
    url: 'https://freshfibercleaning.co.uk',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://freshfibercleaning.co.uk/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
