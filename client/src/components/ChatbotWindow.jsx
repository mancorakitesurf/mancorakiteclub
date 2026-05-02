import { useState, useRef, useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useI18n } from '../app/providers/i18nContext'
import ChatbotMessage from './ChatbotMessage'
import { buildWhatsAppUrl } from '../lib/whatsapp'
import { chatbotFlows, buildWhatsAppMessage } from '../lib/chatbotFlows'

const WELCOME_MESSAGE = { id: 'welcome', messageKey: 'chatbot.welcome', isBot: true }

/**
 * ChatbotWindow Component
 * Modal window containing the chatbot conversation interface
 */
function ChatbotWindow({ isOpen, onClose }) {
  const { t } = useI18n()
  const [currentStep, setCurrentStep] = useState('welcome')
  const [messages, setMessages] = useState(() => [WELCOME_MESSAGE])
  const [selections, setSelections] = useState({})
  const messagesEndRef = useRef(null)

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const resetConversation = () => {
    setCurrentStep('welcome')
    setSelections({})
    setMessages([WELCOME_MESSAGE])
  }

  const handleClose = () => {
    resetConversation()
    onClose()
  }

  const handleOptionClick = (option, action) => {
    const nextId = option.nextId

    // Add user message (use label from translation key)
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, messageKey: option.label, isBot: false },
    ])

    // Update selections
    const updatedSelections = { ...selections, action }
    setSelections(updatedSelections)

    // Add bot response after brief delay
    setTimeout(() => {
      if (nextId === null) {
        // Final step - show WhatsApp CTA
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            messageKey: 'chatbot.finalMessage',
            isBot: true,
          },
        ])
      } else {
        // Move to next step
        setCurrentStep(nextId)
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            messageKey: chatbotFlows[nextId].messageKey,
            isBot: true,
          },
        ])
      }
    }, 300)
  }

  const handleWhatsAppClick = () => {
    const message = buildWhatsAppMessage(selections)
    const whatsappLink = buildWhatsAppUrl(message)
    window.open(whatsappLink, '_blank', 'noopener,noreferrer')
    handleClose()
  }

  const currentFlow = chatbotFlows[currentStep]

  if (!isOpen) return null

  return (
    <div className="fixed bottom-24 right-6 z-[100] flex max-h-[600px] w-96 max-w-[calc(100vw-2rem)] flex-col rounded-2xl border border-primary/20 bg-surface-dark shadow-2xl backdrop-blur-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-2xl bg-primary px-6 py-4 text-white">
        <h3 className="text-lg font-bold text-white">{t('chatbot.title')}</h3>
        <button
          onClick={handleClose}
          className="rounded transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          aria-label="Close chatbot"
        >
          <IoClose className="text-xl" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 space-y-3 overflow-y-auto bg-surface-dark px-6 py-4">
        {messages.map((msg) => (
          <ChatbotMessage
            key={msg.id}
            message={msg.messageKey}
            isBot={msg.isBot}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Options Area */}
      <div className="space-y-2 border-t border-primary/20 bg-surface-dark px-6 py-4">
        {currentFlow?.options && currentFlow.options.length > 0 ? (
          currentFlow.id === 'contact' ? (
            // Final step - WhatsApp button
            <button
              onClick={handleWhatsAppClick}
              className="w-full rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              {t('chatbot.contactWhatsApp')}
            </button>
          ) : (
            // Quick reply buttons
            currentFlow.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(option, option.action)}
                className="w-full rounded-full border border-primary/30 bg-background-dark px-4 py-2.5 text-xs font-medium text-white transition-all hover:bg-primary/15 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                {t(option.label)}
              </button>
            ))
          )
        ) : null}
      </div>
    </div>
  )
}

export default ChatbotWindow
