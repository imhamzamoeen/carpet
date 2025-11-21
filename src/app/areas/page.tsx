import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Search, Phone, Sparkles, CheckCircle2, Clock, Shield, Award, Star, TrendingUp, Users, Building2, Home } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, Button, Badge } from '@/components/ui'
import areas from '../../../area.json'
import InteractiveCitySearch from './interactive-city-search'

export const metadata: Metadata = {
  title: 'Areas We Cover | Professional Carpet Cleaning Across Greater Manchester | Blowup Cleaners',
  description: 'Blowup Cleaners serves 70+ areas across Greater Manchester including Manchester City Centre, Salford, Stockport, Bolton, Oldham, and surrounding areas. Find your local professional carpet cleaning service. Call 07405 428259 for a free quote today!',
  keywords: 'carpet cleaning areas Manchester, carpet cleaning Greater Manchester, carpet cleaning Salford, carpet cleaning Stockport, carpet cleaning Bolton, professional carpet cleaning Manchester area, local carpet cleaning service Manchester, carpet cleaning coverage Manchester',
  openGraph: {
    title: 'Areas We Cover | Greater Manchester Coverage | Blowup Cleaners',
    description: 'Professional carpet cleaning services across 70+ areas in Greater Manchester. Find your local area and get a free quote today!',
    type: 'website',
    images: [
      {
        url: '/og-areas.jpg',
        width: 1200,
        height: 630,
        alt: 'Blowup Cleaners Coverage Areas Map'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Areas We Cover | Greater Manchester Coverage | Blowup Cleaners',
    description: 'Professional carpet cleaning services across 70+ areas in Greater Manchester and surrounding regions.'
  },
  alternates: {
    canonical: 'https://bmadcarpetcleaning.co.uk/areas'
  }
}

export default function AreasPage() {
  // Prepare city data for interactive search
  const cityCards = areas.map((city, index) => ({
    name: city,
    url: `/quote?area=${encodeURIComponent(city)}`,
    region: getCityRegion(city),
    keywords: getCityKeywords(city)
  }))

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Blowup Cleaners',
            url: 'https://bmadcarpetcleaning.co.uk',
            logo: 'https://bmadcarpetcleaning.co.uk/logo.png',
            description: 'Professional carpet cleaning services across Greater Manchester and surrounding areas',
            telephone: '07405428259',
            areaServed: areas.map(city => ({
              '@type': 'City',
              name: city,
              addressCountry: 'GB'
            })),
            serviceType: [
              'Carpet Cleaning',
              'Upholstery Cleaning',
              'Rug Cleaning',
              'Stain Removal',
              'Pet Odor Removal',
              'Mattress Cleaning',
              'End of Tenancy Cleaning'
            ],
            priceRange: '££'
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
            name: 'Blowup Cleaners',
            image: 'https://bmadcarpetcleaning.co.uk/logo.png',
            telephone: '07405428259',
            priceRange: '££',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'GB'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 53.4808,
              longitude: -2.2426
            },
            areaServed: areas.map(city => ({
              '@type': 'City',
              name: city
            })),
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
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '287',
              bestRating: '5',
              worstRating: '1'
            }
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
                name: 'Areas We Cover',
                item: 'https://bmadcarpetcleaning.co.uk/areas'
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
            '@type': 'ItemList',
            name: 'Blowup Cleaners Service Areas',
            description: '70+ areas across Greater Manchester where we provide professional carpet cleaning services',
            numberOfItems: areas.length,
            itemListElement: areas.map((city, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Place',
                name: city,
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: city,
                  addressCountry: 'GB'
                }
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
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Which areas does Blowup Cleaners cover?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We cover 70+ areas across Greater Manchester including Manchester City Centre, Salford, Trafford, Bolton, Stockport, Oldham, Rochdale, Bury, Wigan, Altrincham, Sale, and surrounding towns. Our service area spans all of Greater Manchester and nearby regions including parts of Cheshire, Lancashire, and surrounding counties.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you provide carpet cleaning services in my local area?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We serve 70+ areas across Greater Manchester. Use our interactive search tool on this page to find your area, or call us on 07405 428259 to confirm coverage for your specific location in Manchester and surrounding regions.'
                }
              },
              {
                '@type': 'Question',
                name: 'How far do you travel for carpet cleaning jobs?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our professional teams are based in Manchester and cover all of Greater Manchester efficiently. We typically travel within a 30-mile radius of Manchester city centre, covering all listed areas without excessive travel charges. This ensures prompt service and competitive pricing across the region.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I get same-day carpet cleaning service in my area?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Same-day and emergency carpet cleaning services are available across most Greater Manchester areas, subject to availability. Call 07405 428259 to check same-day availability for your specific location. We prioritize urgent requests and emergency stain removal.'
                }
              },
              {
                '@type': 'Question',
                name: 'Are your prices the same across all areas you cover?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our pricing is competitive and consistent across all Greater Manchester areas we serve. Prices are based on property size, carpet condition, and service type—not your location within Manchester. We provide free, no-obligation quotes tailored to your specific cleaning needs. Call 07405 428259 for an instant quote.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you cover rural areas and small towns?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! While we list 70+ major areas in Greater Manchester, we also serve surrounding towns, villages, and rural areas within the region. If you\'re near any of our listed areas, we likely cover your location. Contact us on 07405 428259 to confirm service availability for smaller towns around Manchester.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do I book carpet cleaning for my area?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Booking is simple! Call 07405 428259 to speak with our team, or use our online quote form by selecting your area in Greater Manchester. We\'ll provide an instant quote, schedule a convenient appointment, and send a professional team to your location at the agreed time.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you offer commercial carpet cleaning across all your areas?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely! We provide commercial carpet cleaning services for offices, retail spaces, restaurants, hotels, and business premises across all Greater Manchester areas we cover. Our teams work flexible hours to minimize disruption to your business operations.'
                }
              },
              {
                '@type': 'Question',
                name: 'Are you expanding to new areas?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we continuously expand our coverage within Greater Manchester based on customer demand. If your area in Manchester isn\'t listed yet, contact us on 07405 428259—we may already be planning expansion to your location, or we can add you to our list for future coverage.'
                }
              },
              {
                '@type': 'Question',
                name: 'What services do you offer in all your coverage areas?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'All 70+ areas across Greater Manchester receive our complete range of services: professional carpet cleaning, upholstery cleaning, rug cleaning, stain removal, pet odor removal, mattress cleaning, and end of tenancy cleaning. Service quality and expertise are consistent across the region.'
                }
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
            '@type': 'SpeakableSpecification',
            cssSelector: [
              '.speakable-headline',
              '.speakable-tldr',
              '.speakable-pricing',
              '.speakable-cta'
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="info" className="mb-6 text-lg px-6 py-2 bg-yellow-400 text-blue-900 font-bold">
              <MapPin className="inline-block mr-2 h-5 w-5" />
              70+ Areas in Greater Manchester
            </Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight speakable-headline">
              Areas We Cover Across Greater Manchester
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed speakable-headline">
              Professional carpet cleaning services across <strong>70+ areas in Greater Manchester</strong> including Manchester City Centre, Salford, Bolton, Stockport, and surrounding towns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:07405428259">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all speakable-cta">
                  <Phone className="mr-3 h-6 w-6" />
                  Call 07405 428259
                </Button>
              </a>
              <Link href="/quote">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-bold text-lg px-8 py-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all speakable-cta">
                  <Sparkles className="mr-3 h-6 w-6" />
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR Section for LLMs */}
      <section className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 container mx-auto rounded-lg speakable-tldr">
        <h2 className="text-2xl font-bold text-blue-900 mb-3 flex items-center gap-2">
          <Sparkles className="h-6 w-6" />
          TL;DR - Quick Summary
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          <strong>Blowup Cleaners</strong> serves <strong>70+ areas</strong> across Greater Manchester including Manchester City Centre, Salford, Trafford, Bolton, Stockport, Oldham, Rochdale, Bury, Wigan, and surrounding towns. We offer professional carpet cleaning, upholstery cleaning, rug cleaning, stain removal, pet odor removal, mattress cleaning, and end of tenancy cleaning. <strong>Same-day service available</strong> across most areas. Call <strong className="speakable-pricing">07405 428259</strong> for a free quote. Prices are consistent across all Manchester areas—no location surcharges. <strong>Last Updated: November 21, 2025</strong>
        </p>
      </section>

      {/* Interactive City Search */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 speakable-headline">
            Find Your Local Carpet Cleaning Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Search through our 70+ coverage areas to find professional carpet cleaning services in your area of Greater Manchester. Simply type your location or browse by region.
          </p>
        </div>

        <InteractiveCitySearch cities={cityCards} />
      </section>

      {/* Why Choose Blowup Cleaners Nationwide */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Blowup Cleaners Across Greater Manchester
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all border-2 hover:border-blue-500">
              <CardHeader>
                <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Consistent Quality Across Manchester</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Same professional standards, advanced equipment, and expert training across all 70+ areas in Greater Manchester we serve.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all border-2 hover:border-blue-500">
              <CardHeader>
                <Clock className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Same-Day Service Available</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Emergency and same-day carpet cleaning available in most areas. Call 07405 428259 to check availability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all border-2 hover:border-blue-500">
              <CardHeader>
                <Award className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Local Teams, National Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professionally trained local teams who know your area, backed by our nationwide quality guarantee.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all border-2 hover:border-blue-500">
              <CardHeader>
                <CheckCircle2 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">No Location Surcharges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 speakable-pricing">
                  Fair, consistent pricing across all areas. You pay for quality service, not your postcode.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Coverage Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto prose prose-lg">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Professional Carpet Cleaning Across Greater Manchester
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Blowup Cleaners has established itself as Greater Manchester's most trusted carpet cleaning provider, serving over <strong>70 areas across the region</strong>. Our comprehensive coverage ensures that whether you're in the bustling city centre of Manchester, the suburban areas of Salford and Trafford, or market towns like Macclesfield or Glossop, you receive the same exceptional level of service, professionalism, and attention to detail.
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Our Comprehensive Service Coverage
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our strategic coverage spans <strong>all of Greater Manchester</strong> and surrounding regions, ensuring that hundreds of thousands of homes and businesses have access to professional carpet cleaning services. We serve all major areas including <strong>Manchester City Centre</strong> (M1-M4), <strong>North Manchester</strong> (Bolton, Bury, Rochdale, Oldham, Heywood, Middleton), <strong>South Manchester</strong> (Stockport, Cheadle, Altrincham, Sale, Trafford, Stretford), <strong>East Manchester</strong> (Ashton-under-Lyne, Denton, Hyde), and <strong>West Manchester</strong> (Salford, Eccles, Swinton, Walkden, Urmston, Wigan).
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our coverage extends into nearby <strong>Cheshire</strong> (Warrington, Macclesfield, Crewe, Northwich, Congleton, Runcorn), <strong>Lancashire</strong> (Preston, Blackburn, Burnley, Blackpool, Chorley, Accrington), <strong>Derbyshire</strong> (Glossop, Buxton), and other surrounding counties. We focus on delivering exceptional service across the entire Greater Manchester region and within a 30-mile radius of the city centre.
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Why We Cover 70+ Areas in Greater Manchester
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our expansion to over 70 areas across Greater Manchester wasn't arbitrary—it was driven by <strong>customer demand</strong> and our commitment to making professional carpet cleaning accessible to all Manchester households and businesses. We recognized that many areas outside the city centre were underserved by professional cleaning companies, often facing inflated prices due to limited competition or excessive travel charges from city-based providers.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            By establishing <strong>local coverage</strong> across all of Greater Manchester, we've been able to provide consistent service standards with the personal touch and local knowledge that Manchester residents expect. Our technicians understand local property types, from Victorian terraces in Chorlton to modern apartments in Salford Quays, and common carpet issues specific to the Manchester climate.
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Services Available in All Coverage Areas
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            No matter which of our 70+ Greater Manchester areas you're located in, you have access to our <strong>complete range of professional cleaning services</strong>. This includes:
          </p>

          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-6 space-y-3">
            <li><strong>Professional Carpet Cleaning</strong> - Deep steam cleaning and hot water extraction for all carpet types including wool, synthetic, berber, and delicate fibres</li>
            <li><strong>Upholstery Cleaning</strong> - Expert cleaning for sofas, armchairs, dining chairs, and all fabric furniture using fabric-specific techniques</li>
            <li><strong>Rug Cleaning</strong> - Specialized care for Persian, Oriental, antique, and modern rugs with pH-balanced solutions</li>
            <li><strong>Stain Removal</strong> - Advanced stain removal for wine, coffee, ink, blood, pet accidents, and other stubborn stains</li>
            <li><strong>Pet Odor Removal</strong> - Deep deodorization and enzyme treatments to eliminate pet urine odors and bacteria</li>
            <li><strong>Mattress Cleaning</strong> - Deep sanitization to remove allergens, dust mites, bacteria, and body oils for healthier sleep</li>
            <li><strong>End of Tenancy Cleaning</strong> - Comprehensive deep cleaning to help tenants secure deposit returns and landlords prepare properties</li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every service is delivered using the same <strong>professional-grade equipment</strong>, eco-friendly cleaning solutions, and rigorous quality standards, ensuring that a customer in Bolton receives exactly the same excellent service as someone in Stockport or Manchester city centre.
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Same-Day and Emergency Services
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We understand that carpet emergencies don't follow a schedule. Whether it's a wine spill before a dinner party, a pet accident, or water damage from a leak, we offer <strong>same-day emergency carpet cleaning</strong> across most Greater Manchester areas, subject to availability. Our local coverage allows us to respond quickly to urgent requests, often arriving within hours of your call anywhere in the region.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            For emergency bookings or to check same-day availability in your specific area, call us directly on <strong className="speakable-pricing">07405 428259</strong>. Our customer service team will identify the nearest available team and coordinate a rapid response to minimize damage and restore your carpets as quickly as possible.
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Commercial Carpet Cleaning Nationwide
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our coverage isn't limited to residential properties. We provide <strong>commercial carpet cleaning services</strong> to businesses, offices, retail spaces, restaurants, hotels, schools, care homes, and other commercial premises across all 70+ cities. We understand that businesses require flexibility, minimal disruption, and consistent results—which is why we offer:
          </p>

          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-6 space-y-3">
            <li><strong>Flexible scheduling</strong> including evenings, weekends, and overnight service to avoid disrupting business operations</li>
            <li><strong>Regular maintenance contracts</strong> with discounted rates for ongoing commercial cleaning needs</li>
            <li><strong>Fast drying times</strong> using advanced extraction technology to minimize downtime (typically 2-4 hours)</li>
            <li><strong>Health & safety compliance</strong> with full insurance, risk assessments, and COSHH documentation</li>
            <li><strong>Customized cleaning plans</strong> tailored to high-traffic areas, specific staining issues, and industry requirements</li>
          </ul>

          <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Transparent, Consistent Pricing Across All Areas
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            One of the biggest frustrations customers face with national service providers is <strong>inconsistent pricing</strong>—where your location determines what you pay, often with significant "travel surcharges" or "regional premiums" added to quoted prices. At Blowup Cleaners, we've eliminated this practice entirely.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our pricing is based on <strong>three factors only</strong>: the size of the area being cleaned, the condition of the carpet or upholstery, and the specific service required. Your location within our 70+ coverage areas <strong>does not affect your price</strong>. A three-bedroom house in Manchester pays the same as a three-bedroom house in Birmingham or Newcastle for equivalent carpet cleaning services.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We provide <strong>free, no-obligation quotes</strong> with transparent breakdowns of costs. There are no hidden fees, no surprise charges, and no pressure sales tactics. You'll know exactly what you're paying before we begin work, and that price is guaranteed—we won't increase it after arrival.
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Local Expertise, National Standards
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            What sets Blowup Cleaners apart is our unique combination of <strong>local expertise and national standards</strong>. Each of our teams is composed of local professionals who live in the communities they serve. They understand the specific challenges that carpets face in different regions—from the humidity of coastal areas to the hard water issues in certain cities.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            However, all our technicians undergo the same <strong>rigorous training program</strong> and certification process, ensuring they're equipped with the latest cleaning techniques, safety protocols, and customer service standards. They use identical professional-grade equipment and eco-friendly cleaning solutions, meaning the quality of service is standardized across all 70+ locations.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This approach gives you the best of both worlds: the personalized service and local knowledge of a community business, combined with the reliability, resources, and quality assurance of a national provider.
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Expanding Coverage and Future Growth
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            While we currently serve 70+ cities, we're continuously evaluating expansion opportunities based on customer demand. If your area isn't currently listed on our coverage map, we encourage you to contact us on <strong>07405 428259</strong>. We maintain a waiting list for requested locations, and many of our recent expansions have been directly driven by customer inquiries.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We're particularly focused on expanding into <strong>surrounding towns and rural areas</strong> near our existing coverage zones. While we list major cities for clarity, we often serve smaller towns, villages, and rural properties within a 30-mile radius of each listed location. Don't assume you're outside our coverage area—call and ask!
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Customer Satisfaction Across All Regions
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our commitment to excellence is reflected in our <strong>4.9 out of 5-star rating</strong> based on over 287 customer reviews across all our coverage areas. We track customer satisfaction metrics for each region individually to ensure no area is underperforming, and we use customer feedback to continuously improve our services.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Common themes in our customer reviews include praise for our <strong>punctuality</strong> (arriving on time as scheduled), <strong>professionalism</strong> (courteous, uniformed technicians with ID badges), <strong>transparency</strong> (no hidden charges or upselling), and most importantly, <strong>results</strong> (visibly cleaner carpets that dry quickly and stay fresh longer).
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            How to Book Across Our 70+ Coverage Areas
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Booking carpet cleaning services with BMad is simple, regardless of which area you're in:
          </p>

          <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mb-6 space-y-3">
            <li><strong>Call 07405 428259</strong> to speak directly with our customer service team, available Monday to Friday 8am-6pm, Saturday 9am-5pm</li>
            <li><strong>Use our online quote form</strong> by selecting your city from the list on this page, providing property details, and receiving an instant estimate</li>
            <li><strong>Describe your needs</strong> including property size, carpet type, specific stains or issues, and preferred service date</li>
            <li><strong>Receive your quote</strong> with a transparent breakdown of costs and no hidden fees</li>
            <li><strong>Schedule your appointment</strong> at a date and time that suits you, including same-day if available</li>
            <li><strong>Confirmation</strong> via text and email with technician details, arrival time, and service summary</li>
          </ol>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our booking system is designed to be fast and hassle-free. Most customers receive a quote within minutes and have their appointment confirmed the same day.
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Environmental Commitment Nationwide
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Across all 70+ coverage areas, we maintain our commitment to <strong>environmentally responsible cleaning</strong>. We use eco-friendly, biodegradable cleaning solutions that are safe for children, pets, and the environment. Our water extraction technology minimizes water waste, and we properly dispose of all wastewater according to environmental regulations.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We also invest in <strong>fuel-efficient vehicles</strong> and route optimization software to minimize our carbon footprint when traveling between jobs. Sustainability isn't just a buzzword for us—it's a core operational principle applied consistently across every region we serve.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions About Our Coverage Areas
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Which areas does Blowup Cleaners cover?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We cover 70+ areas across Greater Manchester including Manchester City Centre, Salford, Trafford, Bolton, Stockport, Oldham, Rochdale, Bury, Wigan, Altrincham, Sale, and surrounding towns. Our service area spans all of Greater Manchester and nearby regions including parts of Cheshire, Lancashire, and surrounding counties.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Do you provide carpet cleaning services in my local area?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We serve 70+ areas across Greater Manchester. Use our interactive search tool on this page to find your area, or call us on 07405 428259 to confirm coverage for your specific location in Manchester and surrounding regions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">How far do you travel for carpet cleaning jobs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our professional teams are based in Manchester and cover all of Greater Manchester efficiently. We typically travel within a 30-mile radius of Manchester city centre, covering all listed areas without excessive travel charges. This ensures prompt service and competitive pricing across the region.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Can I get same-day carpet cleaning service in my area?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Same-day and emergency carpet cleaning services are available across most Greater Manchester areas, subject to availability. Call 07405 428259 to check same-day availability for your specific location. We prioritize urgent requests and emergency stain removal.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Are your prices the same across all areas you cover?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 speakable-pricing">
                  Our pricing is competitive and consistent across all Greater Manchester areas we serve. Prices are based on property size, carpet condition, and service type—not your location within Manchester. We provide free, no-obligation quotes tailored to your specific cleaning needs. Call 07405 428259 for an instant quote.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Do you cover rural areas and small towns?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes! While we list 70+ major areas in Greater Manchester, we also serve surrounding towns, villages, and rural areas within the region. If you're near any of our listed areas, we likely cover your location. Contact us on 07405 428259 to confirm service availability for smaller towns around Manchester.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">How do I book carpet cleaning for my area?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Booking is simple! Call 07405 428259 to speak with our team, or use our online quote form by selecting your area in Greater Manchester. We'll provide an instant quote, schedule a convenient appointment, and send a professional team to your location at the agreed time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Do you offer commercial carpet cleaning across all your areas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Absolutely! We provide commercial carpet cleaning services for offices, retail spaces, restaurants, hotels, and business premises across all Greater Manchester areas we cover. Our teams work flexible hours to minimize disruption to your business operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Are you expanding to new areas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes, we continuously expand our coverage within Greater Manchester based on customer demand. If your area in Manchester isn't listed yet, contact us on 07405 428259—we may already be planning expansion to your location, or we can add you to our list for future coverage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">What services do you offer in all your coverage areas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  All 70+ areas across Greater Manchester receive our complete range of services: professional carpet cleaning, upholstery cleaning, rug cleaning, stain removal, pet odor removal, mattress cleaning, and end of tenancy cleaning. Service quality and expertise are consistent across the region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 speakable-cta">
            Ready to Book Professional Carpet Cleaning in Your Area?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers across Greater Manchester. Get a free quote today and experience the Blowup Cleaners difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:07405428259">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all speakable-cta">
                <Phone className="mr-3 h-6 w-6" />
                Call 07405 428259 Now
              </Button>
            </a>
            <Link href="/quote">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-bold text-lg px-8 py-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all">
                <Sparkles className="mr-3 h-6 w-6" />
                Get Your Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// Helper functions
function getCityRegion(city: string): string {
  const regions: Record<string, string> = {
    'Manchester': 'Greater Manchester',
    'Bolton': 'Greater Manchester',
    'Stockport': 'Greater Manchester',
    'Oldham': 'Greater Manchester',
    'Rochdale': 'Greater Manchester',
    'Bury': 'Greater Manchester',
    'Salford': 'Greater Manchester',
    'Wigan': 'Greater Manchester',
    'Altrincham': 'Greater Manchester',
    'Sale': 'Greater Manchester',
    'Trafford': 'Greater Manchester',
    'Ashton-under-Lyne': 'Greater Manchester',
    'Heywood': 'Greater Manchester',
    'Middleton': 'Greater Manchester',
    'Leeds': 'West Yorkshire',
    'Bradford': 'West Yorkshire',
    'Huddersfield': 'West Yorkshire',
    'Halifax': 'West Yorkshire',
    'Wakefield': 'West Yorkshire',
    'Keighley': 'West Yorkshire',
    'Liverpool': 'Merseyside',
    'St Helens': 'Merseyside',
    'Southport': 'Merseyside',
    'Sheffield': 'South Yorkshire',
    'Barnsley': 'South Yorkshire',
    'Doncaster': 'South Yorkshire',
    'Rotherham': 'South Yorkshire',
    'Preston': 'Lancashire',
    'Blackburn': 'Lancashire',
    'Burnley': 'Lancashire',
    'Blackpool': 'Lancashire',
    'Chorley': 'Lancashire',
    'Accrington': 'Lancashire',
    'Lancaster': 'Lancashire',
    'Darwen': 'Lancashire',
    'Warrington': 'Cheshire',
    'Chester': 'Cheshire',
    'Macclesfield': 'Cheshire',
    'Crewe': 'Cheshire',
    'Nantwich': 'Cheshire',
    'Northwich': 'Cheshire',
    'Congleton': 'Cheshire',
    'Runcorn': 'Cheshire',
    'Derby': 'Derbyshire',
    'Chesterfield': 'Derbyshire',
    'Buxton': 'Derbyshire',
    'Glossop': 'Derbyshire',
    'Ramsbottom': 'Lancashire',
    'Mossley': 'Greater Manchester',
    'Nottingham': 'Nottinghamshire',
    'Leicester': 'Leicestershire',
    'Coventry': 'West Midlands',
    'Birmingham': 'West Midlands',
    'Wolverhampton': 'West Midlands',
    'Walsall': 'West Midlands',
    'Stoke-on-Trent': 'Staffordshire',
    'Telford': 'Shropshire',
    'Shrewsbury': 'Shropshire',
    'York': 'North Yorkshire',
    'Hull': 'East Yorkshire',
    'Scunthorpe': 'Lincolnshire',
    'Lincoln': 'Lincolnshire',
    'Newcastle': 'Tyne and Wear',
    'Sunderland': 'Tyne and Wear',
    'Middlesbrough': 'North Yorkshire',
    'Durham': 'County Durham',
    'Carlisle': 'Cumbria',
    'Bradford-on-Avon': 'Wiltshire'
  }
  return regions[city] || 'UK'
}

function getCityKeywords(city: string): string[] {
  return [
    `carpet cleaning ${city}`,
    `${city} carpet cleaning`,
    `professional carpet cleaning ${city}`,
    `carpet cleaners ${city}`,
    `upholstery cleaning ${city}`,
    city.toLowerCase(),
    getCityRegion(city).toLowerCase()
  ]
}
