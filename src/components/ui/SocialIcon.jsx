import { FaGithub, FaInstagram, FaTelegram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { Mail, Phone, MapPin } from 'lucide-react'

// Brand icons come from react-icons (lucide-react v1 has no brand logos).
const icons = {
  github: FaGithub,
  instagram: FaInstagram,
  telegram: FaTelegram,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
  mail: Mail,
  phone: Phone,
  location: MapPin,
}

export default function SocialIcon({ name, size = 20 }) {
  const Icon = icons[name]
  return Icon ? <Icon size={size} aria-hidden="true" /> : null
}
