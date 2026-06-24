import SEO from '../../components/SEO.jsx'
import SchemaOrg from '../../components/SchemaOrg.jsx'
import { useI18n } from '../../app/providers/i18nContext.js'
import { localizePath } from '../../lib/routes.js'

import ClassesHero from '../../sections/ClassesPage/ClassesHero.jsx'
import ClassesIntro from '../../sections/ClassesPage/ClassesIntro.jsx'
import ClassesPricing from '../../sections/ClassesPage/ClassesPricing.jsx'
import ClassesBenefits from '../../sections/ClassesPage/ClassesBenefits.jsx'
import ClassesSteps from '../../sections/ClassesPage/ClassesSteps.jsx'
import ClassesGallery from '../../sections/ClassesPage/ClassesGallery.jsx'
import TrustBadges from '../../sections/common/TrustBadges.jsx'
import { SURFSUP_CONFIG } from '../../sections/ClassesPage/classesData.js'

function SurfSupPage() {
  const { currentLang } = useI18n()

  return (
    <>
      <SEO
        titleKey="seo.surfSupTitle"
        descKey="seo.surfSupDesc"
        titleFallback="Surf & SUP Classes & Rentals in Máncora | Mancora Kite Club"
        descFallback="Experience surfing and Stand Up Paddleboarding (SUP) in Máncora, Peru. Private lessons for all ages, rentals, and daily tours to the best local spots."
        canonicalPath={localizePath('/services/surf-sup', currentLang)}
        hreflang={{
          en: '/services/surf-sup',
          es: '/esp/services/surf-sup',
          fr: '/fr/services/surf-sup',
          default: '/services/surf-sup',
        }}
      />
      <SchemaOrg type="Course" serviceKey="surfSup" />

      <ClassesHero config={SURFSUP_CONFIG} />
      <TrustBadges variant="marquee" showTitle />
      <ClassesIntro config={SURFSUP_CONFIG} />
      <ClassesPricing config={SURFSUP_CONFIG} />
      <ClassesBenefits config={SURFSUP_CONFIG} />
      <ClassesSteps config={SURFSUP_CONFIG} />
      <ClassesGallery config={SURFSUP_CONFIG} />
    </>
  )
}

export default SurfSupPage

