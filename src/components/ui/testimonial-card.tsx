import { Star } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-background-section rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300">

      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent-yellow text-accent-yellow" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        &quot;{testimonial.text}&quot;
      </p>

      {/* Customer Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
          <span className="text-lg font-bold text-primary-600 font-grotesk">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-text-primary">{testimonial.name}</p>
          <p className="text-xs text-text-muted">{testimonial.location} • {testimonial.service}</p>
        </div>
      </div>
    </div>
  );
}
