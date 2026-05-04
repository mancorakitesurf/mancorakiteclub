import StandardPage from './StandardPage.jsx'
import { buildWhatsAppUrl, defaultInquiryMessage } from '../lib/whatsapp.js'
import FaqList from '../sections/faq/FaqList.jsx'

function FaqPage() {
  return (
    <StandardPage
      title="Mancora Kite Club | FAQ"
      description="FAQ about kitesurfing, wingfoil, surf lessons, equipment rental, accommodation, and trips in Máncora, Peru. Find answers and plan your session. Book online."
      canonicalPath="/faq"
      hreflang={{ en: '/faq', es: '/faq/esp', default: '/' }}
      subtitle="Everything you need to know before starting your adventure."
      cta={{
        label: 'Contact via WhatsApp',
        href: buildWhatsAppUrl(defaultInquiryMessage({ page: 'faq' })),
      }}
    >
      <FaqList />
    </StandardPage>
  )
}

export default FaqPage
