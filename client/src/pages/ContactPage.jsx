import StandardPage from './StandardPage.jsx'
import { useI18n } from '../app/providers/i18nContext'
import { buildWhatsAppUrl, defaultInquiryMessage } from '../lib/whatsapp.js'

function ContactPage() {
  const { t } = useI18n()

  return (
    <StandardPage
      titleKey="seo.contactTitle"
      descKey="seo.contactDesc"
      titleFallback="Contact | Mancora Kite Club"
      descFallback="Contact Máncora Kite Club for kitesurfing, wingfoil, and surf trips, classes, accommodation, and rentals. Get quick answers via WhatsApp. Reach out now."
      title={t('contactPage.title')}
      subtitle={t('contactPage.subtitle')}
      cta={{
        label: t('contactPage.ctaLabel'),
        href: buildWhatsAppUrl(defaultInquiryMessage({ page: 'contact' })),
      }}
    >
    </StandardPage>

  )
}

export default ContactPage