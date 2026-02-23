import StandardPage from './StandardPage.jsx'

function FaqPage() {
  return (
    <StandardPage
      title="Mancora Kite Club | FAQ"
      description="Frequently asked questions about kitesurfing lessons, equipment and reservations."
      canonicalPath="/faq"
      hreflang={{ en: '/faq', es: '/faq/esp', default: '/' }}
      subtitle="Everything you need to know before starting your adventure."
    >
    </StandardPage>
  )
}

export default FaqPage
