import { ExternalLink } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '@/components/ui/testimonial-card';

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary font-grotesk mb-4">
            What Our Manchester Customers Say
          </h2>
          <p className="text-lg text-text-secondary">
            Join 500+ satisfied customers across Greater Manchester
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="text-center mt-10">
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEWS_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all duration-300"
          >
            Read more reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
