import Modal from '../ui/Modal'
import MediaImage from '../ui/MediaImage'

export default function CertificateModal({ certificate, onClose }) {
  return (
    <Modal title={certificate.title} onClose={onClose} wide>
      <MediaImage path={certificate.image} alt={`${certificate.title} certificate from ${certificate.organization}`} className="modal__image" />
      <p className="modal__meta">
        {certificate.organization} · {certificate.date} · ID {certificate.credentialId}
      </p>
    </Modal>
  )
}
