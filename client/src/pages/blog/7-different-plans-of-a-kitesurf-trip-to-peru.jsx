import SEO from '../../components/SEO.jsx'
import HeroSevenPlans from '../../sections/blogPage2/sevenPlans/HeroSevenPlans.jsx'
import IntroStatement from '../../sections/blogPage2/sevenPlans/IntroStatement.jsx'
import PlansScroller from '../../sections/blogPage2/sevenPlans/PlansScroller.jsx'
import FinalCallToAction from '../../sections/blogPage2/sevenPlans/FinalCallToAction.jsx'

function BlogPage2() {
  return (
    <>
      <SEO
        title="Blog | 7 Different Plans of a Kitesurf Trip to Perú"
        description="Seven unique ways to experience the wind, waves and culture of Perú."
        canonicalPath="/blog/7-different-plans-of-a-kitesurf-trip-to-peru"
        hreflang={{ en: '/', es: '/esp', default: '/' }}
      />

      <HeroSevenPlans />
      <IntroStatement />
      <PlansScroller />
      <FinalCallToAction />
    </>
  )
}

export default BlogPage2
