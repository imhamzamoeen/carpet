/**
 * Speakable Schema for Voice Search Optimization
 *
 * Identifies content sections suitable for text-to-speech (TTS) output
 * Optimizes for Google Assistant, Siri, Alexa, and other voice assistants
 * Critical for "near me" queries and voice-activated searches
 */

interface SpeakableSchemaProps {
  serviceName: string
  shortDescription: string
  priceFrom: string
}

export function SpeakableSchema({ serviceName, shortDescription, priceFrom }: SpeakableSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${serviceName} Manchester`,
    description: `${shortDescription}. Professional service in Manchester with same-day availability. Prices from ${priceFrom}.`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [
        '.speakable-headline',     // H1 service name
        '.speakable-tldr',         // TL;DR summary
        '.speakable-pricing',      // Pricing information
        '.speakable-cta',          // Call to action
      ],
      // Alternative: use XPath selectors
      xpath: [
        '/html/head/title',
        "//h1[@class='speakable-headline']",
        "//div[@class='speakable-tldr']",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
