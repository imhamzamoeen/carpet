export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  keywords: string[];
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Carpet Cleaning',
    description: 'Deep cleaning for carpets using eco-friendly hot water extraction. Remove stains, allergens, and odours. Perfect for homes and offices in Manchester.',
    icon: 'Sofa',
    slug: '/carpet-cleaning',
    keywords: ['carpet cleaning Manchester', 'professional carpet cleaning', 'steam cleaning'],
  },
  {
    id: '2',
    title: 'Upholstery Cleaning',
    description: 'Expert upholstery and sofa cleaning services in Manchester. Revive your furniture with our gentle yet effective cleaning methods.',
    icon: 'Armchair',
    slug: '/upholstery-cleaning',
    keywords: ['upholstery cleaning Manchester', 'sofa cleaning Manchester', 'furniture cleaning'],
  },
  {
    id: '3',
    title: 'Rug Cleaning',
    description: 'Specialist rug cleaning for all types including oriental, wool, and Persian rugs. Careful handling and expert techniques.',
    icon: 'LayoutGrid',
    slug: '/rug-cleaning',
    keywords: ['rug cleaning Manchester', 'oriental rug cleaning', 'wool rug cleaning'],
  },
  {
    id: '4',
    title: 'Mattress Cleaning',
    description: 'Professional mattress cleaning and sanitization. Remove dust mites, allergens, and stains for healthier sleep.',
    icon: 'Bed',
    slug: '/mattress-cleaning',
    keywords: ['mattress cleaning Manchester', 'mattress sanitization', 'dust mite removal'],
  },
];
