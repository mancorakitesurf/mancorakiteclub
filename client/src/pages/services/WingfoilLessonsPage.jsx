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
import EquipmentWing from '../../sections/ClassesPage/equipment/EquipmentWing.jsx'
import TrustBadges from '../../sections/common/TrustBadges.jsx'
import { WINGFOIL_CONFIG } from '../../sections/ClassesPage/classesData.js'

function WingfoilLessonsPage() {
  const { currentLang } = useI18n()

  return (
    <>
      <SEO
        titleKey="seo.wingfoilLessonsTitle"
        descKey="seo.wingfoilLessonsDesc"
        titleFallback="Wingfoil Lessons in Máncora | Learn Wingfoiling | Mancora Kite Club"
        descFallback="Master wingfoiling in Máncora, Peru. Safe, structured lessons for beginners and intermediate progression with our experienced coaches. Book your wingfoil class!"
        canonicalPath={localizePath('/services/wingfoil-lessons', currentLang)}
        hreflang={{
          en: '/services/wingfoil-lessons',
          es: '/esp/services/wingfoil-lessons',
          fr: '/fr/services/wingfoil-lessons',
          default: '/services/wingfoil-lessons',
        }}
      />
      <SchemaOrg type="Course" serviceKey="wingfoilLessons" />

      <ClassesHero config={WINGFOIL_CONFIG} />
      <TrustBadges variant="marquee" showTitle />
      <ClassesIntro config={WINGFOIL_CONFIG} />
      <ClassesPricing config={WINGFOIL_CONFIG} />
      <ClassesBenefits config={WINGFOIL_CONFIG} />
      <ClassesSteps config={WINGFOIL_CONFIG} />
      <EquipmentWing />
      <ClassesGallery config={WINGFOIL_CONFIG} />
    </>
  )
}

export default WingfoilLessonsPage

