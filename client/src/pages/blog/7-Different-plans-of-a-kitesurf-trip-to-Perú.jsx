import SEO from '../../components/SEO'
import HeroSevenPlans from '../../sections/blogPage2/sevenPlans/HeroSevenPlans.jsx'
import IntroStatement from '../../sections/blogPage2/sevenPlans/IntroStatement.jsx'
import PlansScroller from '../../sections/blogPage2/sevenPlans/PlansScroller.jsx'
import FinalCallToAction from '../../sections/blogPage2/sevenPlans/FinalCallToAction.jsx'

function SevenPlansPage() {
  return (
    <>
      <SEO
        title="Blog | 7 Different Plans of a Kitesurf Trip to Perú"
        description="Seven unique ways to experience the wind, waves and culture of Perú."
        canonicalPath="/7-different-plans-of-a-kitesurf-trip-to-peru"
        hreflang={{ en: '/', es: '/esp', default: '/' }}
      />

      <HeroSevenPlans />
      <IntroStatement />
      <PlansScroller />
      <FinalCallToAction />
    </>
  )
}

export default SevenPlansPage