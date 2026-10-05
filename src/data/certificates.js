// image: path relative to src/assets/ (missing file = placeholder).
// category: 'education' (shown first) or 'sport' (shown below).
// credentialId, date, detail are all optional.
// Titles/places for the sports diplomas were read from photos —
// please double-check them against the originals.
export const certificateGroups = [
  { id: 'education', title: 'Education & Learning', note: 'Courses and academic recognition.' },
  { id: 'sport', title: 'Sports Achievements', note: 'Diplomas from district and regional competitions.' },
]

export const certificates = [
  // ---------- Education & Learning ----------
  {
    category: 'education',
    title: 'Introduction to Data Science with R',
    organization: 'DQLab',
    credentialId: 'DQLABBGINRWLPUEQ',
    date: 'May 2026',
    image: 'certificates/dqlab-intro-data-science-r.jpg', // TODO: add image
  },
  {
    category: 'education',
    title: 'Guide to Learn R With AI at DQLab',
    organization: 'DQLab',
    credentialId: 'DQLABAI002OFFPNU',
    date: 'May 2026',
    image: 'certificates/dqlab-learn-r-with-ai.jpg', // TODO: add image
  },
  {
    category: 'education',
    title: 'Introduction to Generative AI',
    organization: 'Google Cloud (via Coursera)',
    credentialId: '5ZXP5SHUYHGD',
    date: 'April 2026',
    image: 'certificates/google-cloud-generative-ai.jpg',
  },
  {
    category: 'education',
    title: 'Front-End Programming Course',
    organization: 'IT House × Fast Education',
    credentialId: '№ 00368',
    date: 'January 2026',
    detail: 'HTML, CSS, JavaScript, Bootstrap, React.js, Vite',
    image: 'certificates/it-house-frontend-2026.jpg',
  },
  {
    category: 'education',
    title: 'Computer Literacy Course',
    organization: 'IT House × Fast Education',
    credentialId: '№ 00186',
    date: 'March 2025',
    detail: 'Microsoft Word, Excel, PowerPoint, Canva',
    image: 'certificates/it-house-computer-literacy-2025.jpg',
  },
  {
    category: 'education',
    title: 'Honor Certificate (Faxriy yorliq)',
    organization: 'School No. 103, Urgut District',
    detail: 'For excellent knowledge and exemplary conduct',
    image: 'certificates/school-honor-certificate.jpg',
  },

  // ---------- Sports Achievements ----------
  {
    category: 'sport',
    title: 'Judo — Open Championship',
    organization: 'Urgut District Sports School No. 1',
    date: '2023',
    detail: 'First-degree diploma',
    image: 'certificates/sport-judo-open-championship-2023.jpg',
  },
  {
    category: 'sport',
    title: 'Umid Nihollari 2023 — District Stage',
    organization: 'Urgut District Public Education Department',
    date: '2023',
    detail: '2nd place',
    image: 'certificates/sport-umid-nihollari-2023.jpg',
  },
  {
    category: 'sport',
    title: 'Kurash — Prosecutor\u2019s Cup',
    organization: 'Urgut District Prosecutor\u2019s Office',
    date: '2022',
    detail: 'Second-degree diploma · 50 kg',
    image: 'certificates/sport-kurash-prosecutor-cup-2022.jpg',
  },
  {
    category: 'sport',
    title: 'District Sports Competition',
    organization: 'Urgut District',
    date: '2022',
    detail: 'Third-degree diploma',
    image: 'certificates/sport-district-competition-2022.jpg',
  },
  {
    category: 'sport',
    title: 'Taekwondo WT — District Open Championship',
    organization: 'Samarkand Region Taekwondo WTF Federation',
    date: 'March 2021',
    detail: '1st place · 32 kg',
    image: 'certificates/sport-taekwondo-open-2021.jpg',
  },
  {
    category: 'sport',
    title: 'Taekwondo WTF — District Open Championship',
    organization: 'Samarkand Region Physical Education and Sports Department',
    date: '2020',
    detail: '30 kg',
    image: 'certificates/sport-taekwondo-open-2020.jpg',
  },
  {
    category: 'sport',
    title: 'Taekwondo WTF — Qorbobo Cup',
    organization: 'State Committee for Physical Education and Sports',
    detail: '2nd place · 33 kg',
    image: 'certificates/sport-taekwondo-qorbobo-cup.jpg',
  },
]
