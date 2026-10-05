import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MediaImage from '../ui/MediaImage'

const AUTOPLAY_MS = 5000
const SWIPE_PX = 40

export default function MediaCarousel({ slides }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)
  const touchStartX = useRef(null)
  const count = slides.length

  const go = useCallback((next) => setIndex((next + count) % count), [count])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (paused || reduced || count < 2) return undefined
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [paused, reduced, count])

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) > SWIPE_PX) go(index + (delta < 0 ? 1 : -1))
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') go(index - 1)
    if (e.key === 'ArrowRight') go(index + 1)
  }

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Project and coding highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
    >
      <div
        className="carousel__viewport"
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        <div className="carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide, i) => (
            <figure
              key={slide.caption}
              className="carousel__slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
            >
              <MediaImage path={slide.image} alt={slide.alt} eager={i === 0} />
              <figcaption>{slide.caption}</figcaption>
            </figure>
          ))}
        </div>

        <button type="button" className="carousel__arrow carousel__arrow--prev" onClick={() => go(index - 1)} aria-label="Previous slide">
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <button type="button" className="carousel__arrow carousel__arrow--next" onClick={() => go(index + 1)} aria-label="Next slide">
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="carousel__dots">
        {slides.map((slide, i) => (
          <button
            key={slide.caption}
            type="button"
            className={`carousel__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  )
}
