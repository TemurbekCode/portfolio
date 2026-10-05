import { useState } from 'react'
import { certificates, certificateGroups } from '../../data/certificates'
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

        {certificateGroups.map((group) => {
          const items = certificates.filter((c) => c.category === group.id)
          if (!items.length) return null
          return (
            <div key={group.id} className="certs__group">
              <header className="certs__group-head">
                <h3 className="certs__group-title">{group.title}</h3>
                <p className="certs__group-note">{group.note}</p>
              </header>
              <ul className="certs__grid">
                {items.map((certificate, i) => (
                  <CertificateCard
                    key={certificate.title + (certificate.date || '')}
                    certificate={certificate}
                    delay={(i % 3) * 90}
                    onView={() => setSelected(certificate)}
                  />
                ))}
              </ul>
            </div>
          )
        })}

        {selected && <CertificateModal certificate={selected} onClose={() => setSelected(null)} />}
      </div>
    </section>
  )
}
