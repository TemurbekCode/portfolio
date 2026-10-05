// Paths are relative to src/assets/. Missing images show a clean placeholder.
export const profileImage = {
  src: 'images/profile/profile.jpg', // <- put your photo here (portrait, ~4:5)
  alt: 'Portrait of Temur Alisherov',
}

export const aboutParagraphs = [
  'I am Temur, a frontend developer who enjoys turning ideas into working interfaces. I learn best by building, so most of what I know comes from real projects rather than tutorials alone.',
  'I am interested in modern web technologies and in creating dashboards, landing pages and interactive applications that feel clear and pleasant to use.',
  'Right now I am strengthening my React and JavaScript skills, exploring Python and FastAPI, and planning to start Flutter. I try to improve a little with every project I ship.',
]

// Add or replace slides freely. image is optional.
export const aboutMedia = [
  { image: 'images/about/ravonpay.jpg', alt: 'RavonPay dashboard interface', caption: 'RavonPay — fintech dashboard' },
  { image: 'images/about/muzlapay.jpg', alt: 'MuzlaPay payment interface', caption: 'MuzlaPay — payment concept' },
  { image: 'images/about/chegaramap.jpg', alt: 'ChegaraMap measurement interface', caption: 'ChegaraMap — map measurement' },
  { image: 'images/about/coding.jpg', alt: 'Code editor with a React project open', caption: 'Building and learning every day' },
]

export const personalInfo = [
  { label: 'Name', value: 'Temur Alisherov' },
  { label: 'Graduation', value: '2027' },
  { label: 'Location', value: 'Samarkand, Uzbekistan' },
]

// icon names map to lucide-react icons in About.jsx
export const softSkills = [
  { label: 'Problem Solving', icon: 'Puzzle' },
  { label: 'Self Learning', icon: 'BookOpen' },
  { label: 'Creativity', icon: 'Lightbulb' },
  { label: 'Adaptability', icon: 'RefreshCw' },
  { label: 'Communication', icon: 'MessagesSquare' },
  { label: 'Teamwork', icon: 'Users' },
]
