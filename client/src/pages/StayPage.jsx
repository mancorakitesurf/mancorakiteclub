import SEO from '../components/SEO.jsx'
import SchemaOrg from '../components/SchemaOrg.jsx'
import { useI18n } from '../app/providers/i18nContext.js'
import { localizePath } from '../lib/routes.js'
import StayHeroCarousel from '../sections/stay/StayHeroCarousel.jsx'
import StayAbout from '../sections/stay/StayAbout.jsx'
import StayRooms from '../sections/stay/StayRooms.jsx'
import StayAmenities from '../sections/stay/StayAmenities.jsx'
import StayGallery from '../sections/stay/StayGallery.jsx'
import StayLocation from '../sections/stay/StayLocation.jsx'
import StayCTA from '../sections/stay/StayCTA.jsx'
import TrustBadges from '../sections/common/TrustBadges.jsx'

function StayPage() {
  const { currentLang } = useI18n()

  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      <SEO
        titleKey="seo.stayTitle"
        descKey="seo.stayDesc"
        titleFallback="Stay with Us in Máncora | Máncora Kite Club"
        descFallback="Premium accommodation in Máncora for kitesurfers and riders. Clean rooms with A/C, WiFi, hot water, breakfast. Calm base close to the best spots. Book direct!"
        canonicalPath={localizePath('/stay', currentLang)}
        hreflang={{ en: '/stay', es: '/esp/stay', fr: '/fr/stay', default: '/stay' }}
      />
      <SchemaOrg type="LodgingBusiness" />

      <StayHeroCarousel />
      <StayAbout />
      <TrustBadges variant="marquee" />
      <StayRooms />
      <StayAmenities />
      <StayGallery />
      <StayLocation />
      <StayCTA />
    </div>
  )
}

export default StayPage
