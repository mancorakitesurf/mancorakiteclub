import { useI18n } from '../app/providers/i18nContext'

/**
 * ChatbotMessage Component
 * Renders individual messages in the chatbot conversation
 */
function ChatbotMessage({ message, isBot = true }) {
  const { t } = useI18n()

  // Support both string messages and translation keys
  const displayMessage = message.startsWith('chatbot.')
    ? t(message)
    : message

  return (
    <div
      className={`flex mb-3 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`max-w-xs rounded-lg px-4 py-2 text-sm leading-relaxed ${
          isBot
            ? 'bg-surface-dark/50 border border-primary/30 text-gray-100'
            : 'bg-primary/20 border border-primary/40 text-gray-100'
        }`}
      >
        {displayMessage}
      </div>
    </div>
  )
}

export default ChatbotMessage
