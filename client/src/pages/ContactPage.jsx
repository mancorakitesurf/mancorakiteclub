import StandardPage from './StandardPage.jsx'
import { buildWhatsAppUrl, defaultInquiryMessage } from '../lib/whatsapp.js'

function ContactPage() {
  return (
    <StandardPage
      title="Contact | Mancora Kite Club"
      subtitle="Reach us for availability, pricing, and trip guidance."
      description="Contact Máncora Kite Club for kitesurfing, wingfoil, and surf trips, classes, accommodation, and rentals. Get quick answers via WhatsApp. Reach out now."
      canonicalPath="/contact"
      hreflang={{ en: '/contact', es: '/esp', default: '/' }}
      cta={{
        label: 'Contact via WhatsApp',
        href: buildWhatsAppUrl(defaultInquiryMessage({ page: 'contact' })),
      }}
    >
    </StandardPage>

  )
}

export default ContactPage