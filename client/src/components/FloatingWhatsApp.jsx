import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import clubLogo from '../assets/Logo/LOGO-kite-new.png'
import { buildWhatsAppUrl } from '../lib/whatsapp.js'

function FloatingWhatsApp({ link, message = '' }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isAttentionOpen, setIsAttentionOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 140)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      if (isHovered) return

      setIsAttentionOpen(true)

      window.setTimeout(() => {
        if (!isHovered) setIsAttentionOpen(false)
      }, 3000)
    }, 8000)

    return () => window.clearInterval(intervalId)
  }, [isHovered])

  const href = link || buildWhatsAppUrl(message)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsAttentionOpen(false)
      }}
      className={`group fixed bottom-6 right-6 z-[100] flex items-center ${
        isVisible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'
      } transition-all duration-300`}
    >
      <span
        className={`mr-3 overflow-hidden whitespace-nowrap rounded-full border border-white/20 bg-slate-900/90 py-2 text-xs font-medium tracking-wide text-white transition-all duration-700 ${
          isAttentionOpen
            ? 'max-w-xs px-3 opacity-100'
            : 'max-w-0 px-0 opacity-0 group-hover:max-w-xs group-hover:px-3 group-hover:opacity-100'
        }`}
      >
        Prepárate para volar
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-105 active:scale-95">
        <span className="pointer-events-none absolute inset-0 rounded-full bg-emerald-500/25 animate-ping" />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-emerald-500/15 animate-pulse" />

        <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white text-emerald-600 shadow-xl">
          <img
            src={clubLogo}
            alt="Máncora Kite Club"
            className="h-9 w-9 object-contain opacity-100 scale-100 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 group-active:opacity-0 group-active:scale-90"
          />
          <FaWhatsapp className="absolute text-2xl opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-active:opacity-100 group-active:scale-100" />
        </span>
      </span>
    </a>
  )
}

export default FloatingWhatsApp
