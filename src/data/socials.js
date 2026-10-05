// ============================================================
// CENTRAL CONTACT / SOCIAL CONFIG — edit ONLY this file.
// Leave a value as "" until you have the real one:
//  - empty socials are hidden in Hero/Footer and shown as
//    "Link coming soon" in Contact
//  - empty email/phone are hidden
// Nothing here is invented: only GitHub and location are known.
// ============================================================

export const profile = {
  name: 'Temur Alisherov',
  role: 'Frontend Developer',
  location: 'Samarkand, Uzbekistan',
  graduation: '2027',
  intro:
    'Frontend developer focused on building modern, responsive and interactive web applications through practical projects and continuous learning.',
}

export const contactDetails = {
  email: '', // TODO: e.g. "you@example.com"
  phone: '', // TODO: e.g. "+998 90 123 45 67"
}

// key must match an entry in components/ui/SocialIcon.jsx
export const socialLinks = [
  { key: 'github', label: 'GitHub', url: 'https://github.com/TemurbekCode' },
  { key: 'telegram', label: 'Telegram', url: '' }, // TODO: https://t.me/your_username
  { key: 'instagram', label: 'Instagram', url: '' }, // TODO: https://instagram.com/your_username
  { key: 'linkedin', label: 'LinkedIn', url: '' }, // TODO: https://linkedin.com/in/your_username
  { key: 'tiktok', label: 'TikTok', url: '' }, // TODO: https://tiktok.com/@your_username
]

export const allProjectsUrl = 'https://github.com/TemurbekCode'

// CV: put the PDF at public/cv/Temur-Alisherov-CV.pdf — the buttons
// switch on automatically once the file exists.
export const cv = {
  url: '/cv/Temur-Alisherov-CV.pdf',
  fileName: 'Temur-Alisherov-CV.pdf',
}
