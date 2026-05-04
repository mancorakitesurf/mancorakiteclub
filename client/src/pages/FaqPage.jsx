import SEO from '../components/SEO.jsx'
import FaqList from '../sections/faq/FaqList.jsx'

function FaqPage() {
  return (
    <>
      <SEO
        title="Mancora Kite Club | FAQ"
        description="FAQ about kitesurfing, wingfoil, surf lessons, equipment rental, accommodation, and trips in Máncora, Peru. Find answers and plan your session. Book online."
        canonicalPath="/faq"
        hreflang={{ en: '/faq', es: '/faq/esp', default: '/' }}
      />

      <FaqList />
    </>
  )
}

export default FaqPage
