import SEO from '../components/SEO.jsx'
import HeroReview from '../sections/review/HeroReview.jsx'
import JoinTribeCTA from '../sections/review/JoinTribeCTA.jsx'
import TestimoniosPlaceholder from '../sections/review/TestimoniosPlaceholder.jsx'
import VideoTestimonios from '../sections/review/VideoTestimonios.jsx'
import { useI18n } from '../app/providers/i18nContext.js'
import { localizePath } from '../lib/routes.js'

function ReviewPage() {
  const { currentLang, t } = useI18n()

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SEO
        title={t('seo.reviewsTitle')}
        description={t('seo.reviewsDesc')}
        canonicalPath={localizePath('/reviews', currentLang)}
        hreflang={{ en: '/reviews', es: '/esp/reviews', fr: '/fr/reviews', default: '/reviews' }}
      />

      <HeroReview />
      <TestimoniosPlaceholder />
      <VideoTestimonios />
      <JoinTribeCTA />
      
    </main>
  )
}
export default ReviewPage
