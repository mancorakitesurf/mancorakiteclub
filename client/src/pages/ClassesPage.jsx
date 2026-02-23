import SEO from "../components/SEO"
import ClassesHero from "../sections/ClassesPage/ClassesHero.jsx"
import ClassesIntro from "../sections/ClassesPage/ClassesIntro.jsx"
import ClassesPricing from "../sections/ClassesPage/ClassesPricing.jsx"
import ClassesBenefits from "../sections/ClassesPage/ClassesBenefits.jsx"
import ClassesSteps from "../sections/ClassesPage/ClassesSteps.jsx"
import ClassesGallery from "../sections/ClassesPage/ClassesGallery.jsx"
import EquipmentKite from "../sections/ClassesPage/equipment/EquipmentKite.jsx"
import WingfoilIntro from "../sections/ClassesPage/WingfoilIntro.jsx"
import WingfoilWithUs from "../sections/ClassesPage/WingfoilWithUs.jsx"
import WingfoilClasses from "../sections/ClassesPage/WingfoilClasses.jsx"
import WingfoilBenefits from "../sections/ClassesPage/WingfoilBenefits.jsx"
import EquipmentWing from "../sections/ClassesPage/equipment/EquipmentWing.jsx"

function ClassesPage() {
  return (
    <>
      <SEO
        title="Mancora Kite Club | Classes"
        description="Private and small-group sessions without accommodation."
        canonicalPath="/classes"
        hreflang={{ en: "/classes", es: "/esp", default: "/" }}
      />

      {/* Bloques de Kitesurf */}
      <ClassesHero />
      <ClassesIntro />
      <ClassesPricing />
      <ClassesBenefits />
      <ClassesSteps />
      <EquipmentKite />

      {/* Bloques de Wingfoil */}
      <WingfoilIntro />
      <WingfoilWithUs />
      <WingfoilClasses />
      <WingfoilBenefits />
      <EquipmentWing />


      {/* Collage premium */}
      <ClassesGallery />
    </>
  )
}

export default ClassesPage
