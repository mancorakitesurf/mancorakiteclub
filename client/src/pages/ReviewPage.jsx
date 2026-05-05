import HeroReview from '../sections/review/HeroReview.jsx'
import JoinTribeCTA from '../sections/review/JoinTribeCTA.jsx'
import TestimoniosPlaceholder from '../sections/review/TestimoniosPlaceholder.jsx'
import VideoTestimonios from '../sections/review/VideoTestimonios.jsx'

function ReviewPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <HeroReview />
      <TestimoniosPlaceholder />
      <VideoTestimonios />
      <JoinTribeCTA />
      
    </main>
  )
}
export default ReviewPage
