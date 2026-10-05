import { useCallback, useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

// Accessible dialog: ESC, click outside, focus trap + restore, scroll lock,
// short enter/exit animation. Parent renders it only while "open".
export default function Modal({ title, onClose, children, wide = false }) {
  const [closing, setClosing] = useState(false)
  const dialogRef = useRef(null)
  const previouslyFocused = useRef(null)

  const requestClose = useCallback(() => {
    setClosing(true)
    window.setTimeout(onClose, 180)
  }, [onClose])

  useEffect(() => {
    previouslyFocused.current = document.activeElement
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    const prevOverflow = document.body.style.overflow
    const prevPadding = document.body.style.paddingRight
    document.body.style.overflow = 'hidden'
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`
    dialogRef.current?.querySelector('[data-autofocus]')?.focus()

    return () => {
      document.body.style.overflow = prevOverflow
      document.body.style.paddingRight = prevPadding
      previouslyFocused.current?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        requestClose()
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return
      const items = dialogRef.current.querySelectorAll(FOCUSABLE)
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [requestClose])

  return (
    <div className={`modal-backdrop ${closing ? 'is-closing' : ''}`} onMouseDown={(e) => e.target === e.currentTarget && requestClose()}>
      <div
        ref={dialogRef}
        className={`modal ${wide ? 'modal--wide' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <header className="modal__header">
          <h3 className="modal__title">{title}</h3>
          <button type="button" className="icon-btn" onClick={requestClose} aria-label="Close dialog" data-autofocus>
            <X size={20} aria-hidden="true" />
          </button>
        </header>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  )
}
