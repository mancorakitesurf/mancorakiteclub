import StandardPage from './StandardPage.jsx'

function TripsPage() {
  return (
    <StandardPage
      title="Mancora Kite Club | Trips"
      subtitle="Curated packages with coaching and stay included."
      description="Premium kite trips with accommodation."
      canonicalPath="/trips"
      hreflang={{ en: '/trips', es: '/esp', default: '/' }}
    />
  )
}

export default TripsPage
