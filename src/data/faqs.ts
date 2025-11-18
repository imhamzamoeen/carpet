export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How much does carpet cleaning cost?',
    answer: 'Our carpet cleaning prices start from £25 per room for standard single rooms. Larger rooms and additional services like stain removal may cost more. Get an instant, no-obligation quote in 60 seconds using our online form.',
    category: 'Pricing',
  },
  {
    id: '2',
    question: 'Is professional carpet cleaning worth it?',
    answer: 'Absolutely! Professional carpet cleaning extends the life of your carpets by removing deep-seated dirt, allergens, and bacteria that regular vacuuming can\'t reach. Our hot water extraction method can remove up to 99% of allergens and 94% of bacteria, creating a healthier home environment.',
    category: 'Benefits',
  },
  {
    id: '3',
    question: 'Do you use eco-friendly products?',
    answer: 'Yes, all our cleaning products are eco-friendly, non-toxic, and biodegradable. They\'re completely safe for children, pets, and the environment while still delivering exceptional cleaning results.',
    category: 'Process',
  },
  {
    id: '4',
    question: 'How long does carpet cleaning take?',
    answer: 'Most residential carpet cleaning jobs take 2-4 hours depending on the size of the area and level of soiling. Drying time is typically 4-6 hours with proper ventilation. We use powerful extraction equipment to minimize moisture and speed up drying.',
    category: 'Process',
  },
  {
    id: '5',
    question: 'Do I need to move furniture?',
    answer: 'We can work around most furniture, and we\'ll move smaller items like chairs and coffee tables. For larger items like sofas and beds, we recommend moving them beforehand if possible, but we can discuss this when you book.',
    category: 'Preparation',
  },
  {
    id: '6',
    question: 'Do you offer same-day service?',
    answer: 'Yes! We offer same-day carpet cleaning services across Manchester and Greater Manchester, subject to availability. Contact us before 10am to check availability for same-day service.',
    category: 'Booking',
  },
  {
    id: '7',
    question: 'What areas do you cover?',
    answer: 'We cover Manchester city centre and all Greater Manchester areas including Trafford, Salford, Bolton, Stockport, Oldham, Rochdale, Bury, and Tameside. Check our Areas page for specific postcodes.',
    category: 'Service Area',
  },
  {
    id: '8',
    question: 'What is your satisfaction guarantee?',
    answer: 'We offer a 100% satisfaction guarantee. If you\'re not completely happy with our cleaning service, we\'ll return within 48 hours to re-clean the area free of charge. If you\'re still not satisfied, we\'ll provide a full refund.',
    category: 'Guarantee',
  },
];
