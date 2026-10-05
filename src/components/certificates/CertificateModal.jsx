import Modal from '../ui/Modal'
import MediaImage from '../ui/MediaImage'

export default function CertificateModal({ certificate, onClose }) {
  const meta = [certificate.organization, certificate.date, certificate.credentialId && `ID ${certificate.credentialId}`].filter(Boolean)
  return (
    <Modal title={certificate.title} onClose={onClose} wide>
      <MediaImage path={certificate.image} alt={`${certificate.title} — ${certificate.organization}`} className="modal__image" />
      <p className="modal__meta">{meta.join(' · ')}</p>
    </Modal>
  )
}
