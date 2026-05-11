import SEO from '../components/SEO.jsx'
import HeroReview from '../sections/review/HeroReview.jsx'
import JoinTribeCTA from '../sections/review/JoinTribeCTA.jsx'
import TestimoniosPlaceholder from '../sections/review/TestimoniosPlaceholder.jsx'
import VideoTestimonios from '../sections/review/VideoTestimonios.jsx'

function ReviewPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SEO
        titleKey="seo.reviewsTitle"
        descKey="seo.reviewsDesc"
        titleFallback="Reviews | Máncora Kite Club"
        descFallback="Read reviews from riders who learned kitesurf and wingfoil in Máncora. Real testimonials from our guests."
      />

      <HeroReview />
      <TestimoniosPlaceholder />
      <VideoTestimonios />
      <JoinTribeCTA />
      
    </main>
  )
}
export default ReviewPage
