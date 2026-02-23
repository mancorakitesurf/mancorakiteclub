import StandardPage from './StandardPage.jsx'
import { buildWhatsAppUrl, defaultInquiryMessage } from '../lib/whatsapp.js'
import FaqList from '../sections/faq/FaqList.jsx'

function ContactPage() {
  return (
    <StandardPage
      title="Contact | Mancora Kite Club"
      subtitle="Reach us for availability, pricing, and trip guidance."
      description="Contact Máncora Kite Club for trips, classes, and stay."
      canonicalPath="/contact"
      hreflang={{ en: '/contact', es: '/esp', default: '/' }}
      cta={{
        label: 'Contact via WhatsApp',
        href: buildWhatsAppUrl(defaultInquiryMessage({ page: 'contact' })),
      }}
    >
      <FaqList />
    </StandardPage>

  )
}

export default ContactPage