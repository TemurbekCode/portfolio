// ============================================================
// CENTRAL CONTACT / SOCIAL CONFIG — edit ONLY this file.
// url: "" means "not available yet":
//  - hidden in Hero and Footer icon rows
//  - shown as "Link coming soon" in Contact
// ============================================================

export const profile = {
  name: 'Temur Alisherov',
  role: 'Frontend Developer',
  location: 'Urgut, Samarkand, Uzbekistan',
  graduation: '2027',
  intro:
    'Frontend developer focused on building modern, responsive and interactive web applications through practical projects and continuous learning.',
}

export const contactDetails = {
  email: 'temurbekalisherov82@gmail.com', // taken from your CV — change/remove if you prefer
  phone: '', // TODO: e.g. "+998 90 123 45 67"
}

// key must match an entry in components/ui/SocialIcon.jsx
export const socialLinks = [
  { key: 'github', label: 'GitHub', url: 'https://github.com/TemurbekCode' },
  { key: 'telegram', label: 'Telegram', url: 'https://t.me/talshrvy' },
  { key: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/talshrv' },
  { key: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/temurbek-alisherov-42a5b23b3' },
  { key: 'whatsapp', label: 'WhatsApp', url: '' }, // TODO: https://wa.me/998XXXXXXXXX
]

export const allProjectsUrl = 'https://github.com/TemurbekCode'

// CV file lives in public/cv/. It is currently an image (JPG).
// When you have a PDF, put it in public/cv/ and change url + fileName + isImage.
export const cv = {
  url: '/cv/Temur-Alisherov-CV.jpg',
  fileName: 'Temur-Alisherov-CV.jpg',
  isImage: true,
}
