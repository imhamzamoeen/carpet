'use client';

import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import type { Area } from '@/data/areas';

interface AreaCardProps {
  area: Area;
}

export function AreaCard({ area }: AreaCardProps) {
  return (
    <Link href={area.slug}>
      <div className="group bg-white rounded-lg p-5 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 text-center">

        {/* Map Pin Icon */}
        <div className="w-10 h-10 rounded-full bg-primary-50 group-hover:bg-primary-600 flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
          <MapPin className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-300" />
        </div>

        {/* Area Name */}
        <h3 className="text-base font-bold text-text-primary font-grotesk mb-1">
          {area.name}
        </h3>

        {/* Postcodes */}
        <p className="text-xs text-text-muted">
          {area.postcodePrefixes.join(', ')}
        </p>

        {/* Arrow on hover */}
        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowRight className="w-4 h-4 mx-auto text-primary-600" />
        </div>
      </div>
    </Link>
  );
}
