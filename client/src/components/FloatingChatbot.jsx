import { useEffect, useState } from 'react'
import { FaRobot } from 'react-icons/fa'
import ChatbotWindow from './ChatbotWindow'

/**
 * FloatingChatbot Component
 * Floating chatbot trigger with elegant animations and guided conversation
 */
function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPulse, setShowPulse] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  // Disable pulse animation after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={toggleChatbot}
        aria-label="Open chatbot"
        className={`group fixed bottom-6 right-6 z-[99] flex items-center transition-all duration-300 ${
          isOpen ? 'scale-95 opacity-75' : 'scale-100 opacity-100'
        }`}
      >
        {/* Animated background glow */}
        {showPulse && (
          <>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-primary/20 animate-ping" />
            <span className="pointer-events-none absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
          </>
        )}

        {/* Button container */}
        <span className="relative flex h-14 w-14 items-center justify-center">
          <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-primary shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110 group-active:scale-95">
            <FaRobot className="text-xl text-white" />
          </span>
        </span>

        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-full border border-white/20 bg-slate-900/90 px-3 py-2 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          Asistente IA
        </span>
      </button>

      {/* Chatbot Window Modal */}
      <ChatbotWindow isOpen={isOpen} onClose={handleClose} />
    </>
  )
}

export default FloatingChatbot
