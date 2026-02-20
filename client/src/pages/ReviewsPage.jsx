import StandardPage from './StandardPage.jsx'

function ReviewsPage() {
  return (
    <StandardPage
      title="Mancora Kite Club | Reviews"
      subtitle="Real feedback from guests and riders."
      description="Guest reviews from trips and classes in Máncora."
      canonicalPath="/reviews"
      hreflang={{ en: '/reviews', es: '/esp', default: '/' }}
    />
  )
}

export default ReviewsPage
