/**
 * Chatbot Flow Definition
 * Guiado conversation flow with predefined questions and options
 * Each step leads to the next based on user selection
 */

export const chatbotFlows = {
  welcome: {
    id: 'welcome',
    type: 'greeting',
    messageKey: 'chatbot.welcome',
    options: [
      { label: 'chatbot.askClasses', nextId: 'askLevel', action: 'classes' },
      { label: 'chatbot.askTrips', nextId: 'askDuration', action: 'trips' },
      { label: 'chatbot.askStay', nextId: 'askSize', action: 'stay' },
    ],
  },
  askLevel: {
    id: 'askLevel',
    type: 'question',
    messageKey: 'chatbot.selectLevel',
    options: [
      { label: 'chatbot.beginner', nextId: 'contact', action: 'beginner' },
      { label: 'chatbot.intermediate', nextId: 'contact', action: 'intermediate' },
      { label: 'chatbot.advanced', nextId: 'contact', action: 'advanced' },
    ],
  },
  askDuration: {
    id: 'askDuration',
    type: 'question',
    messageKey: 'chatbot.selectDuration',
    options: [
      { label: 'chatbot.oneDay', nextId: 'contact', action: 'oneDay' },
      { label: 'chatbot.threeDays', nextId: 'contact', action: 'threeDays' },
      { label: 'chatbot.sevenDays', nextId: 'contact', action: 'sevenDays' },
    ],
  },
  askSize: {
    id: 'askSize',
    type: 'question',
    messageKey: 'chatbot.selectSize',
    options: [
      { label: 'chatbot.studioApt', nextId: 'contact', action: 'studio' },
      { label: 'chatbot.oneBedroomApt', nextId: 'contact', action: 'oneBedroom' },
      { label: 'chatbot.twoPlusBedroomApt', nextId: 'contact', action: 'twoPlus' },
    ],
  },
  contact: {
    id: 'contact',
    type: 'final',
    messageKey: 'chatbot.finalMessage',
    options: [
      { label: 'chatbot.contactWhatsApp', nextId: null, action: 'whatsapp' },
    ],
  },
}

/**
 * Get flow step by ID
 */
export const getFlowStep = (stepId) => {
  return chatbotFlows[stepId] || chatbotFlows.welcome
}

/**
 * Build WhatsApp message based on user selections
 */
export const buildWhatsAppMessage = (selections = {}) => {
  const { action, level, duration, size } = selections

  const baseMessages = {
    classes: `Hola, quiero información sobre clases de kitesurf${
      level ? ` nivel ${level}` : ''
    }. ¿Cuáles son las opciones disponibles?`,
    trips: `Hola, quiero conocer más sobre los viajes de kitesurf${
      duration ? ` de ${duration}` : ''
    }. ¿Qué opciones tienen?`,
    stay: `Hola, busco alojamiento${size ? ` (${size})` : ''}. ¿Qué tienen disponible?`,
    beginner: `Hola, quiero aprender kitesurf desde cero. ¿Ofrecen clases para principiantes?`,
    intermediate: `Hola, soy intermedio en kitesurf. ¿Qué clases ofrecen para mi nivel?`,
    advanced: `Hola, soy avanzado en kitesurf. ¿Qué opciones tienen para kitesurfistas avanzados?`,
    oneDay: `Hola, me interesa un viaje de un día. ¿Cuál es la información?`,
    threeDays: `Hola, me interesa un viaje de 3 días. ¿Qué incluye?`,
    sevenDays: `Hola, me interesa un viaje de una semana. ¿Cuáles son los detalles?`,
    studio: `Hola, busco un estudio. ¿Qué opciones tienen?`,
    oneBedroom: `Hola, necesito un apartamento de 1 habitación. ¿Está disponible?`,
    twoPlus: `Hola, busco un apartamento de 2+ habitaciones. ¿Qué opciones tienen?`,
  }

  return baseMessages[action] || baseMessages.classes
}

/**
 * Format message for WhatsApp URL
 */
export const formatWhatsAppMessage = (message) => {
  return encodeURIComponent(message)
}
