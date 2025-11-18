import Link from 'next/link';
import { areas } from '@/data/areas';
import { AreaCard } from '@/components/ui/area-card';

export function AreasCovered() {
  return (
    <section className="py-20 bg-background-section">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary font-grotesk mb-4">
            Areas We Cover in Greater Manchester
          </h2>
          <p className="text-lg text-text-secondary">
            Serving homes and businesses across Manchester and surrounding areas
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((area) => (
            <AreaCard key={area.id} area={area} />
          ))}
        </div>

        {/* Additional note */}
        <p className="text-center text-sm text-text-secondary mt-8">
          Don&apos;t see your area? <Link href="/contact" className="text-primary-600 font-medium hover:underline">Contact us</Link> - we may still be able to help!
        </p>
      </div>
    </section>
  );
}
