import { ImageIcon } from 'lucide-react'
import { asset } from '../../utils/assets'

// Shows the image if the file exists in src/assets, otherwise a tidy placeholder
// that tells you exactly where to put the file.
export default function MediaImage({ path, alt, className = '', eager = false }) {
  const src = asset(path)
  if (!src) {
    return (
      <div className={`media-placeholder ${className}`} role="img" aria-label={`${alt} (image coming soon)`}>
        <ImageIcon size={28} aria-hidden="true" />
        <span>Add image</span>
        <code>src/assets/{path}</code>
      </div>
    )
  }
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      draggable="false"
    />
  )
}
