// image paths are relative to src/assets/. Exactly 3 per project:
// [0] = large featured image, [1] and [2] = smaller images.
// github / live: null = disabled "coming soon" button (no fake links).
// TODO: check `technologies` against each repository and edit if needed.
export const projects = [
  {
    number: '01',
    name: 'RavonPay',
    category: 'Fintech / Dashboard System',
    description:
      'A modern fintech wallet concept for Central Asia: a landing page, an account sign-up flow and a dashboard with wallet, send/receive, cards, exchange rate and utility bills screens. Built as a frontend project.',
    technologies: ['React', 'JavaScript', 'SCSS', 'Vite'],
    images: [
      { src: 'images/projects/ravonpay/1.jpg', alt: 'RavonPay landing page with a wallet preview' },
      { src: 'images/projects/ravonpay/2.jpg', alt: 'RavonPay dashboard with balance and quick actions' },
      { src: 'images/projects/ravonpay/3.jpg', alt: 'RavonPay account type selection screen' },
    ],
    github: 'https://github.com/TemurbekCode/Ravon-Pay',
    live: 'https://ravonpay.netlify.app/',
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
      'A map-based land measurement app: search a place, mark a plot on the map and get its area (sotix or m\u00b2), perimeter and side lengths. Includes Uzbek and English interface and a standard/satellite map style.',
    technologies: ['React', 'JavaScript', 'Vite'], // add map libraries (e.g. Leaflet) only if the repo uses them
    images: [
      { src: 'images/projects/chegaramap/1.jpg', alt: 'ChegaraMap landing page with a measured plot preview' },
      { src: 'images/projects/chegaramap/2.jpg', alt: 'ChegaraMap map view with place search' },
      { src: 'images/projects/chegaramap/3.jpg', alt: 'ChegaraMap settings screen' },
    ],
    github: 'https://github.com/TemurbekCode/ChegaraMap',
    live: 'https://chegaramap.netlify.app/',
  },
]
