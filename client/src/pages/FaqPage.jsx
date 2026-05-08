import SEO from '../components/SEO.jsx'
import FaqList from '../sections/faq/FaqList.jsx'

function FaqPage() {
  return (
    <>
      <SEO
        titleKey="seo.faqTitle"
        descKey="seo.faqDesc"
        titleFallback="Mancora Kite Club | FAQ"
        descFallback="FAQ about kitesurfing, wingfoil, surf lessons, equipment rental, accommodation, and trips in Máncora, Peru. Find answers and plan your session. Book online."
      />

      <FaqList />
    </>
  )
}

export default FaqPage
