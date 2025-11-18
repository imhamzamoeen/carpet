import { Wrench, GraduationCap, Leaf, ShieldCheck, Clock, BadgePoundSterling, LucideIcon } from 'lucide-react';
import type { Benefit } from '@/data/benefits';

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  GraduationCap,
  Leaf,
  ShieldCheck,
  Clock,
  BadgePoundSterling,
};

interface BenefitCardProps {
  benefit: Benefit;
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  const Icon = iconMap[benefit.icon] || Wrench;

  return (
    <div className="flex gap-4">
      {/* Icon Container */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center shadow-soft">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-text-primary font-grotesk mb-2">
          {benefit.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}
