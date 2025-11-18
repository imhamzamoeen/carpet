'use client';

import { Phone } from 'lucide-react';
import { QuoteForm } from '@/components/ui/quote-form';
import { trackClickToCall } from '@/lib/analytics';

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-yellow rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          {/* Headline */}
          <h2 className="text-3xl lg:text-5xl font-bold font-grotesk mb-4">
            Get Your Free Quote in 60 Seconds
          </h2>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl mb-8 opacity-90">
            Fill out the quick form below or call us at <strong className="font-bold">0161 XXX XXXX</strong> to speak with our team
          </p>

          {/* Quick Quote Form */}
          <QuoteForm />

          {/* Or call option */}
          <div className="mt-8">
            <p className="text-sm opacity-75 mb-3">Prefer to speak with someone?</p>
            <a
              href="tel:+441612345678"
              onClick={() => trackClickToCall()}
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-pill font-semibold hover:scale-105 transition-transform duration-300"
            >
              <Phone className="w-5 h-5" />
              Call 0161 XXX XXXX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
