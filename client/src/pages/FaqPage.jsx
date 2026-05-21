import SEO from '../components/SEO.jsx'
import { useI18n } from '../app/providers/i18nContext.js'
import { localizePath } from '../lib/routes.js'
import FaqList from '../sections/faq/FaqList.jsx'

function FaqPage() {
  const { currentLang } = useI18n()

  return (
    <>
      <SEO
        title="Mancora Kite Club | FAQ"
        description="FAQ about kitesurfing, wingfoil, surf lessons, equipment rental, accommodation, and trips in Máncora, Peru. Find answers and plan your session. Book online."
        canonicalPath={localizePath('/faq', currentLang)}
        hreflang={{ en: '/faq', es: '/esp/faq', fr: '/fr/faq', default: '/faq' }}
      />

      <FaqList />
    </>
  )
}

export default FaqPage
