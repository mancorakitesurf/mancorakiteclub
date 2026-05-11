import { useEffect, useState } from 'react'

export function useRevealHeroOnScroll(threshold = 40, revealDelay = 5000) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let timeoutId

    const reveal = () => {
      setVisible(true)
      window.removeEventListener('scroll', handleScroll)

      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }

    const handleScroll = () => {
      if (window.scrollY > threshold) {
        reveal()
      }
    }

    handleScroll()

    if (window.scrollY <= threshold) {
      timeoutId = window.setTimeout(reveal, revealDelay)
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)

      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [threshold, revealDelay])

  return visible
}
