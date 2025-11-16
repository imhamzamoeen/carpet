import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Professional Carpet Cleaning in Manchester
            </h1>
            <p className="text-xl mb-8 text-primary-50">
              Expert cleaning services for carpets, rugs, upholstery, and more.
              Serving Manchester and surrounding areas within 100 miles. Get your
              instant quote today!
            </p>
            <div className="flex gap-4">
              <Link href="/quote" className="btn-primary">
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-primary-600 font-semibold hover:text-primary-700"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Method Clean?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Instant Quotes</h3>
              <p className="text-gray-600">
                Get your price estimate immediately online with our transparent pricing calculator
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
              <p className="text-gray-600">
                Professional cleaning with industry-leading equipment and techniques
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                100% satisfaction guarantee on all our cleaning services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-success-600 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Get your free instant quote in just 2 minutes</p>
          <Link href="/quote" className="btn-secondary inline-block">
            Get Your Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    id: 1,
    name: "Carpet Cleaning",
    slug: "carpet-cleaning",
    icon: "🧹",
    description: "Deep cleaning for all types of carpets with fast drying time"
  },
  {
    id: 2,
    name: "Rug Cleaning",
    slug: "rug-cleaning",
    icon: "🎨",
    description: "Specialized care for delicate and valuable rugs"
  },
  {
    id: 3,
    name: "Upholstery Cleaning",
    slug: "upholstery-cleaning",
    icon: "🛋️",
    description: "Professional furniture and upholstery cleaning"
  },
  {
    id: 4,
    name: "Leather Cleaning",
    slug: "leather-cleaning",
    icon: "💼",
    description: "Expert leather furniture cleaning and conditioning"
  },
  {
    id: 5,
    name: "Mattress Cleaning",
    slug: "mattress-cleaning",
    icon: "🛏️",
    description: "Deep cleaning and sanitization for mattresses"
  },
  {
    id: 6,
    name: "Stain Removal",
    slug: "stain-removal",
    icon: "🎯",
    description: "Specialized treatment for tough stains"
  },
  {
    id: 7,
    name: "Commercial Cleaning",
    slug: "commercial-cleaning",
    icon: "🏢",
    description: "Professional cleaning for offices and businesses"
  },
  {
    id: 8,
    name: "Car Valeting",
    slug: "car-valeting",
    icon: "🚗",
    description: "Complete interior car cleaning and valeting"
  },
];
