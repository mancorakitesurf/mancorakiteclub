import SEO from "../components/SEO"
import SchemaOrg from "../components/SchemaOrg.jsx"
import { useI18n } from "../app/providers/i18nContext"
import { localizePath } from "../lib/routes"
import BeginnersHero from "../sections/BeginnersGuide/BeginnersHero"
import BeginnersIntro from "../sections/BeginnersGuide/BeginnersIntro"
import WhyMancora from "../sections/BeginnersGuide/WhyMancora"
import WhatsIncluded from "../sections/BeginnersGuide/WhatsIncluded"
import LearningPath from "../sections/BeginnersGuide/LearningPath"
import BeginnersFaq from "../sections/BeginnersGuide/BeginnersFaq"
import BeginnersCta from "../sections/BeginnersGuide/BeginnersCta"

function BeginnersGuidePage() {
  const { currentLang, t } = useI18n()

  return (
    <>
      <SEO
        title={t("beginnersGuide.seo.title")}
        description={t("beginnersGuide.seo.description")}
        canonicalPath={localizePath("/beginners", currentLang)}
        hreflang={{ en: "/beginners", es: "/esp/beginners", fr: "/fr/beginners", default: "/beginners" }}
      />

      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Beginners Guide", path: "/beginners" },
        ]}
      />

      <BeginnersHero />
      <BeginnersIntro />
      <WhyMancora />
      <WhatsIncluded />
      <LearningPath />
      <BeginnersFaq />
      <BeginnersCta />
    </>
  )
}

export default BeginnersGuidePage
