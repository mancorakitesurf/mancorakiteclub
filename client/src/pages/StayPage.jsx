import SEO from '../components/SEO.jsx'
import StayHeroCarousel from '../sections/stay/StayHeroCarousel.jsx'
import StayAbout from '../sections/stay/StayAbout.jsx'
import StayAmenities from '../sections/stay/StayAmenities.jsx'
import StayGallery from '../sections/stay/StayGallery.jsx'
import StayLocation from '../sections/stay/StayLocation.jsx'
import StayCTA from '../sections/stay/StayCTA.jsx'

function StayPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      <SEO
        titleKey="seo.stayTitle"
        descKey="seo.stayDesc"
        titleFallback="Stay with Us in Máncora | Máncora Kite Club"
        descFallback="Premium accommodation in Máncora for kitesurfers and riders. Clean rooms with A/C, WiFi, hot water, breakfast. Calm base close to the best spots. Book direct!"
      />

      <StayHeroCarousel />
      <StayAbout />
      <StayAmenities />
      <StayGallery />
      <StayLocation />
      <StayCTA />
    </div>
  )
}

export default StayPage

