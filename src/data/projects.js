// image paths are relative to src/assets/. Exactly 3 per project:
// [0] = large featured image, [1] and [2] = smaller images.
// github / live: null = disabled "coming soon" button (no fake links).
// TODO: check `technologies` against each repository and edit if needed.
export const projects = [
  {
    number: '01',
    name: 'Ravon Pay',
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
    name: 'Muzla Pay',
    category: 'Payment / Escrow Platform',
    description:
      'A product concept under development for safer OLX and Telegram store purchases: the buyer\u2019s payment is held until the product is received, helping reduce trust issues between buyers and sellers.',
    technologies: ['React', 'JavaScript', 'SCSS', 'Vite'],
    images: [
      { src: 'images/projects/muzlapay/1.jpg', alt: 'MuzlaPay landing page' },
      { src: 'images/projects/muzlapay/2.jpg', alt: 'MuzlaPay seller dashboard' },
      { src: 'images/projects/muzlapay/3.jpg', alt: 'MuzlaPay payment page' },
    ],
    github: 'https://github.com/TemurbekCode/MuzlaPay',
    live: 'https://muzlapay.netlify.app/',
  },
  {
    number: '03',
    name: 'Chegara Map',
    category: 'Interactive Map / Measurement Application',
    description:
      'A map-based land measurement app: search a place, mark a plot on the map and get its area (sotix or m\u00b2), perimeter and side lengths. Includes Uzbek and English interface and a standard/satellite map style.',
    technologies: ['React', 'JavaScript', 'Vite', 'SCSS'], // add map libraries (e.g. Leaflet) only if the repo uses them
    images: [
      { src: 'images/projects/chegaramap/1.jpg', alt: 'ChegaraMap landing page with a measured plot preview' },
      { src: 'images/projects/chegaramap/2.jpg', alt: 'ChegaraMap map view with place search' },
      { src: 'images/projects/chegaramap/3.jpg', alt: 'ChegaraMap settings screen' },
    ],
    github: 'https://github.com/TemurbekCode/ChegaraMap',
    live: 'https://chegaramap.netlify.app/',
  },
  {
    number: '04',
    name: 'Sentinel App',
    category: 'A real-time monitoring dashboard / Dashboard system',
    description:
      'Sentinel is a real-time monitoring dashboard that watches your servers, services and APIs — tracks CPU, memory, response times and errors, and warns you the moment something crosses the line. A sentinel never blinks.',
    technologies: ['React', 'JavaScript', 'Vite'], // add
    images: [
      { src: 'images/projects/sentinelapp/1.png', alt: 'Sentinel App landing page with a measured plot preview' },
      { src: 'images/projects/sentinelapp/2.png', alt: 'Sentinel App map view with place search' },
      { src: 'images/projects/sentinelapp/3.png', alt: 'Sentinel App settings screen' },
    ],
    github: 'https://github.com/TemurbekCode/SentinelApp',
    live: null,
  },
  {
    number: '05',
    name: 'Nexora App',
    category: 'Shows how every figure is calculated. / Dashboard',
    description:
      'Nexora brings your orders, customers and products into one dashboard, so you can tell what is growing, what is slipping and why. Sample data is included, so you can explore right away.',
    technologies: ['React', 'JavaScript', 'Vite'], // add
    images: [
      { src: 'images/projects/nexoraapp/1.png', alt: 'ChegaraMap landing page with a measured plot preview' },
      { src: 'images/projects/nexoraapp/2.png', alt: 'ChegaraMap map view with place search' },
      { src: 'images/projects/nexoraapp/3.png', alt: 'ChegaraMap settings screen' },
    ],
    github: 'https://github.com/TemurbekCode/NexoraApp',
    live: null,
  },
]
