import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_LINK } from '../sections/home/homeContent.js'

function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href={WHATSAPP_LINK}
      className={`group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:bg-[#128C7E] hover:shadow-xl ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      <span className="absolute right-full mr-4 whitespace-nowrap rounded bg-white px-3 py-1 text-xs font-bold text-slate-800 opacity-0 shadow-md transition-opacity group-hover:opacity-100 dark:bg-surface-dark dark:text-white">
        Chat with us
      </span>
    </a>
  )
}

export default FloatingWhatsApp
