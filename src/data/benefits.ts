export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const benefits: Benefit[] = [
  {
    id: '1',
    title: 'Professional Equipment',
    description: 'We use industry-leading hot water extraction machines and eco-friendly cleaning solutions for superior results.',
    icon: 'Wrench',
  },
  {
    id: '2',
    title: 'Trained Technicians',
    description: 'Our team is fully trained and certified in carpet and upholstery cleaning techniques.',
    icon: 'GraduationCap',
  },
  {
    id: '3',
    title: 'Eco-Friendly Products',
    description: 'Safe for children, pets, and the environment. All our cleaning products are non-toxic and biodegradable.',
    icon: 'Leaf',
  },
  {
    id: '4',
    title: '100% Satisfaction Guarantee',
    description: 'We stand behind our work. If you\'re not happy, we\'ll re-clean for free or provide a full refund.',
    icon: 'ShieldCheck',
  },
  {
    id: '5',
    title: 'Same-Day Service',
    description: 'Need cleaning today? We offer same-day and emergency cleaning services across Manchester.',
    icon: 'Clock',
  },
  {
    id: '6',
    title: 'Transparent Pricing',
    description: 'No hidden fees. Get an instant quote and know exactly what you\'ll pay before we start.',
    icon: 'BadgePoundSterling',
  },
];
