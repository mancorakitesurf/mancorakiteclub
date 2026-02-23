import StandardPage from './StandardPage.jsx'
import { buildWhatsAppUrl, defaultInquiryMessage } from '../lib/whatsapp.js'

function ContactPage() {
  return (
    <StandardPage
      title="Mancora Kite Club | Contact"
      subtitle="Reach us for availability, pricing, and trip guidance."
      description="Contact Máncora Kite Club for trips, classes, and stay."
      canonicalPath="/contact"
      hreflang={{ en: '/contact', es: '/esp', default: '/' }}
      cta={{ label: 'WhatsApp', href: buildWhatsAppUrl(defaultInquiryMessage('your trip')) }}
    />
  )
}

export default ContactPage
