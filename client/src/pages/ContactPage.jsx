import StandardPage from './StandardPage.jsx'
import FaqList from '../sections/faq/FaqList.jsx'
import { WHATSAPP_LINK } from '../sections/home/homeContent.js'

function ContactPage() {
  return (
    <StandardPage
      title="Mancora Kite Club | Contact"
      subtitle="Reach us for availability, pricing, and trip guidance."
      description="Contact Máncora Kite Club for trips, classes, and stay."
      canonicalPath="/contact"
      hreflang={{ en: '/contact', es: '/esp', default: '/' }}
      cta={{ label: 'WhatsApp', href: WHATSAPP_LINK }}
    >
      <FaqList />
    </StandardPage>
    
  )
}

export default ContactPage
