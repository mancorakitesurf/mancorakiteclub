export const WHATSAPP_NUMBER = '51996557689'

export function buildWhatsAppUrl(message = '') {
  const encodedMessage = encodeURIComponent(message ?? '')
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}&type=phone_number&app_absent=0`
}

export function defaultInquiryMessage(context) {
  if (!context) return 'Hi! I need information.'

  if (typeof context === 'string') {
    return `Hi! I need information. Page: ${context}.`
  }

  const allowedFields = ['tripName', 'page', 'duration', 'guests', 'dates', 'level']
  const parts = allowedFields
    .filter((field) => Object.prototype.hasOwnProperty.call(context, field))
    .map((field) => {
      const value = context[field]
      if (value === undefined || value === null || value === '') return `${field}: ...`
      return `${field}: ${value}`
    })

  if (parts.length === 0) return 'Hi! I need information.'
  return `Hi! I need information. ${parts.join(' | ')}`
}
