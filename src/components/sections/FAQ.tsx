'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { faqs } from '@/data/faqs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { trackFAQExpand } from '@/lib/analytics';

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary font-grotesk mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary">
            Everything you need to know about our carpet cleaning services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={`item-${index}`}
                className="bg-background-section rounded-lg border border-gray-200 overflow-hidden"
              >
                <AccordionTrigger
                  className="px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => trackFAQExpand(faq.question)}
                >
                  <span className="text-base font-semibold text-text-primary font-grotesk pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-text-secondary mb-4">Still have questions?</p>
          <Link href="/contact" className="btn-secondary inline-flex">
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
