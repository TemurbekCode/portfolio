import { useEffect, useState } from 'react'
import { cv } from '../data/socials'

// Checks once whether the CV PDF really exists. Because Netlify's SPA
// redirect answers 200 for unknown paths, we also check the content type.
export function useCvAvailable() {
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch(cv.url, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') || ''
        if (!cancelled) setAvailable(res.ok && type.includes('pdf'))
      })
      .catch(() => {
        if (!cancelled) setAvailable(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return available
}
