'use client';

import Link from 'next/link';
import { ArrowRight, Sofa, Armchair, LayoutGrid, Bed, LucideIcon } from 'lucide-react';
import type { Service } from '@/data/services';
import { trackServiceClick } from '@/lib/analytics';

const iconMap: Record<string, LucideIcon> = {
  Sofa,
  Armchair,
  LayoutGrid,
  Bed,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Sofa;

  const handleClick = () => {
    trackServiceClick(service.title);
  };

  return (
    <Link href={service.slug} onClick={handleClick}>
      <div className="group relative bg-white rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">

        {/* Icon */}
        <div className="w-16 h-16 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-text-primary font-grotesk mb-3">
          {service.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-grow">
          {service.description}
        </p>

        {/* Link with arrow */}
        <div className="flex items-center text-primary-600 font-medium text-sm group-hover:gap-2 transition-all duration-300">
          Learn More
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </div>

        {/* Hover gradient overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </Link>
  );
}
