import { useState } from 'react'
import { certificates } from '../../data/certificates'
import SectionHeading from '../ui/SectionHeading'
import CertificateCard from './CertificateCard'
import CertificateModal from './CertificateModal'
import './Certificates.css'

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="section" aria-labelledby="certificates-title">
      <div className="container">
        <SectionHeading
          index="05"
          title="Certificates"
          id="certificates-title"
          subtitle="Official certifications and learning experiences that helped shape my technical knowledge."
        />
        <ul className="certs__grid">
          {certificates.map((certificate, i) => (
            <CertificateCard key={certificate.credentialId} certificate={certificate} delay={i * 100} onView={() => setSelected(certificate)} />
          ))}
        </ul>
        {selected && <CertificateModal certificate={selected} onClose={() => setSelected(null)} />}
      </div>
    </section>
  )
}
