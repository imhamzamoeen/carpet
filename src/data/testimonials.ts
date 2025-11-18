export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Thompson',
    location: 'Trafford',
    rating: 5,
    text: 'Fresh Fiber did an amazing job on our living room carpet. The wine stain we thought was permanent is completely gone! Professional, friendly, and punctual.',
    date: '2025-01-10',
    service: 'Carpet Cleaning',
  },
  {
    id: '2',
    name: 'James Patel',
    location: 'Manchester City Centre',
    rating: 5,
    text: 'Excellent service from start to finish. Booked online in minutes, they arrived on time, and our office carpets look brand new. Highly recommend!',
    date: '2025-01-08',
    service: 'Commercial Carpet Cleaning',
  },
  {
    id: '3',
    name: 'Emma Wilson',
    location: 'Salford',
    rating: 5,
    text: 'We have two dogs and our sofa was in desperate need of cleaning. The team worked wonders - it looks and smells fresh again. Thank you!',
    date: '2025-01-05',
    service: 'Upholstery Cleaning',
  },
  {
    id: '4',
    name: 'Michael Chen',
    location: 'Stockport',
    rating: 5,
    text: 'Our Persian rug is a family heirloom and I was nervous about getting it cleaned. Fresh Fiber handled it with such care and it looks absolutely beautiful now.',
    date: '2024-12-28',
    service: 'Rug Cleaning',
  },
  {
    id: '5',
    name: 'Rachel Foster',
    location: 'Bolton',
    rating: 5,
    text: 'Had our mattress cleaned after moving into a new flat. The difference is incredible - no more allergies! Same-day service was a lifesaver.',
    date: '2024-12-20',
    service: 'Mattress Cleaning',
  },
  {
    id: '6',
    name: 'David Morrison',
    location: 'Oldham',
    rating: 5,
    text: 'Been using Fresh Fiber for 3 years now for our rental properties. Always reliable, thorough, and great value. Wouldn\'t use anyone else.',
    date: '2024-12-15',
    service: 'End of Tenancy Cleaning',
  },
];
