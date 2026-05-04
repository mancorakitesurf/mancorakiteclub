import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { IoChatbubble } from 'react-icons/io5'
import { FaWhatsapp } from 'react-icons/fa'
import ChatbotWindow from './ChatbotWindow'
import chatbotVideo from '../assets/chatbot ia.mp4'
import logoKite from '../assets/LOGOS KITE CLUB/LOGO-kite-new.webp'

/**
 * ActionHub Component
 * Floating action hub with KiteBot video trigger and vertical action stack.
 */
function ActionHub() {
  const [isOpen, setIsOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 140)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  const handleChatClick = () => {
    setIsChatOpen(true)
    setIsOpen(false)
  }

  const handleCloseChat = () => {
    setIsChatOpen(false)
  }

  const secondaryButtons = [
    {
      id: 'chat',
      icon: IoChatbubble,
      color: 'bg-primary',
      iconColor: 'text-white',
      onClick: handleChatClick,
      label: 'Chat',
    },
    {
      id: 'whatsapp',
      icon: FaWhatsapp,
      color: 'bg-[#25D366]',
      iconColor: 'text-white',
      href: 'https://wa.me/51996557689?text=Hola!%20Quiero%20más%20información',
      label: 'WhatsApp',
    },
  ]

  return (
    <>
      <div
        className={`fixed bottom-6 right-6 z-[99] flex flex-col-reverse items-center gap-3 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'
        }`}
      >
        <button
          onClick={handleToggle}
          aria-label="Open action menu"
          className={`group relative flex h-14 w-14 items-center justify-center transition-transform active:scale-95 ${
            isOpen ? 'scale-95' : 'scale-100'
          }`}
        >
          <span className="pointer-events-none absolute inset-[-8px] rounded-full bg-primary/35 animate-ping" />
          <span className="pointer-events-none absolute inset-[-4px] rounded-full bg-primary/20 animate-pulse" />
          <span className="pointer-events-none absolute inset-0 rounded-full border border-primary/30 bg-primary/10 blur-[1px]" />
          <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-primary bg-primary shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(42,157,143,0.55)]">
            {isChatOpen ? (
              <video
                src={chatbotVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover scale-110"
              />
            ) : (
              <img
                src={logoKite}
                alt="Mancora Kite Club"
                className="h-9 w-9 object-contain"
              />
            )}
          </span>
        </button>

        <div
          className={`flex flex-col gap-3 transition-all duration-300 ${
            isOpen
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-10 opacity-0'
          }`}
        >
          {secondaryButtons.map((btn, idx) => (
            <motion.div
              key={btn.id}
              initial={false}
              animate={{
                y: isOpen ? 0 : 12,
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0.9,
              }}
              transition={{
                type: 'spring',
                stiffness: 320,
                damping: 24,
                delay: isOpen ? idx * 0.04 : 0,
              }}
            >
              {btn.href ? (
                <a
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={btn.label}
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${btn.color} shadow-lg transition-transform hover:scale-110 active:scale-95`}
                >
                  <btn.icon className={`text-lg ${btn.iconColor}`} />
                </a>
              ) : (
                <button
                  onClick={btn.onClick}
                  aria-label={btn.label}
                  className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full ${btn.color} shadow-lg transition-transform hover:scale-110 active:scale-95`}
                >
                  {btn.id === 'chat' ? (
                    <video
                      src={chatbotVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover object-center scale-110"
                    />
                  ) : (
                    <btn.icon className={`text-lg ${btn.iconColor}`} />
                  )}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <ChatbotWindow isOpen={isChatOpen} onClose={handleCloseChat} />
    </>
  )
}

export default ActionHub
