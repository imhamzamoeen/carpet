export interface Area {
  id: string;
  name: string;
  slug: string;
  postcodePrefixes: string[];
}

export const areas: Area[] = [
  { id: '1', name: 'Manchester', slug: '/areas/manchester', postcodePrefixes: ['M1', 'M2', 'M3', 'M4'] },
  { id: '2', name: 'Trafford', slug: '/areas/trafford', postcodePrefixes: ['M16', 'M17', 'M32'] },
  { id: '3', name: 'Salford', slug: '/areas/salford', postcodePrefixes: ['M5', 'M6', 'M7'] },
  { id: '4', name: 'Bolton', slug: '/areas/bolton', postcodePrefixes: ['BL1', 'BL2', 'BL3'] },
  { id: '5', name: 'Stockport', slug: '/areas/stockport', postcodePrefixes: ['SK1', 'SK2', 'SK3'] },
  { id: '6', name: 'Oldham', slug: '/areas/oldham', postcodePrefixes: ['OL1', 'OL2', 'OL4'] },
  { id: '7', name: 'Rochdale', slug: '/areas/rochdale', postcodePrefixes: ['OL11', 'OL12', 'OL16'] },
  { id: '8', name: 'Bury', slug: '/areas/bury', postcodePrefixes: ['BL8', 'BL9'] },
  { id: '9', name: 'Tameside', slug: '/areas/tameside', postcodePrefixes: ['OL5', 'OL6', 'OL7'] },
];
