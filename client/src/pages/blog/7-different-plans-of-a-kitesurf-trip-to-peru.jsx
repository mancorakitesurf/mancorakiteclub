import SEO from '../../components/SEO.jsx'
import HeroSevenPlans from '../../sections/blogPage2/BlogHeroPage2/HeroSevenPlans.jsx'
import IntroStatement from '../../sections/blogPage2/BlogLayoutPage2/IntroStatement.jsx'
import PlansScroller from '../../sections/blogPage2/BlogLayoutPage2/PlansScroller.jsx'
import FinalCallToAction from '../../sections/blogPage2/BlogLayoutPage2/FinalCallToAction.jsx'

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

export default BlogPage2;
