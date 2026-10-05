// image paths are relative to src/assets/. Exactly 3 per project:
// [0] = large featured image, [1] and [2] = smaller images.
// github / live: use null until the real URL exists — the card then shows
// a disabled "coming soon" button instead of a fake link.
// TODO: check `technologies` against each repository and edit if needed.
export const projects = [
  {
    number: '01',
    name: 'RavonPay',
    category: 'Fintech / Dashboard System',
    description:
      'A modern fintech and payment interface with a dashboard-style layout, built around clear data presentation and responsive product design.',
    technologies: ['React', 'JavaScript', 'SCSS', 'Vite'],
    images: [
      { src: 'images/projects/ravonpay/1.jpg', alt: 'RavonPay main dashboard screen' },
      { src: 'images/projects/ravonpay/2.jpg', alt: 'RavonPay secondary screen' },
      { src: 'images/projects/ravonpay/3.jpg', alt: 'RavonPay additional screen' },
    ],
    github: null,
    live: null,
  },
  {
    number: '02',
    name: 'MuzlaPay',
    category: 'Payment / Escrow Platform',
    description:
      'A product concept under development for safer OLX and Telegram store purchases: the buyer\u2019s payment is held until the product is received, helping reduce trust issues between buyers and sellers.',
    technologies: ['React', 'JavaScript', 'SCSS', 'Vite'],
    images: [
      { src: 'images/projects/muzlapay/1.jpg', alt: 'MuzlaPay landing page' },
      { src: 'images/projects/muzlapay/2.jpg', alt: 'MuzlaPay seller dashboard' },
      { src: 'images/projects/muzlapay/3.jpg', alt: 'MuzlaPay payment page' },
    ],
    github: null,
    live: null,
  },
  {
    number: '03',
    name: 'ChegaraMap',
    category: 'Interactive Map / Measurement Application',
    description:
      'An interactive, map-based project for measuring land plots: draw an area on the map and see its size and perimeter.',
    technologies: ['React', 'JavaScript', 'Vite'], // add map libraries (e.g. Leaflet) only if the repo uses them
    images: [
      { src: 'images/projects/chegaramap/1.jpg', alt: 'ChegaraMap map interface' },
      { src: 'images/projects/chegaramap/2.jpg', alt: 'ChegaraMap measurement interface' },
      { src: 'images/projects/chegaramap/3.jpg', alt: 'ChegaraMap result screen' },
    ],
    github: null,
    live: null,
  },
]
