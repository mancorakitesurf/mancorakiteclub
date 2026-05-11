import { mediaAssets } from '../config/images.js'
import { useI18n } from '../app/providers/i18nContext.jsx'

const chatbotVideo = mediaAssets.chatbotVideo

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
      className={`mb-3 flex ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`flex items-end gap-2 ${isBot ? '' : 'flex-row-reverse'}`}>
        {isBot ? (
          <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full border border-primary/30 bg-primary/10 shadow-sm">
            <video
              src={chatbotVideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover object-center scale-110"
            />
          </div>
        ) : null}

        <div
          className={`max-w-xs rounded-2xl px-4 py-2 text-sm leading-relaxed ${
            isBot
              ? 'border border-primary/30 bg-background-dark text-white'
              : 'bg-primary text-white'
          }`}
        >
          {displayMessage}
        </div>
      </div>
    </div>
  )
}

export default ChatbotMessage
