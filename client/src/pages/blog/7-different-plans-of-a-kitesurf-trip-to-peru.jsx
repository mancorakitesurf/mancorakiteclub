import SEO from '../../components/SEO.jsx'
import HeroSevenPlans from '../../sections/blogPage2/BlogHeroPage2/HeroSevenPlans.jsx'
import IntroStatement from '../../sections/blogPage2/BlogLayoutPage2/IntroStatement.jsx'
import PlansScroller from '../../sections/blogPage2/BlogLayoutPage2/PlansScroller.jsx'
import FinalCallToAction from '../../sections/blogPage2/BlogLayoutPage2/FinalCallToAction.jsx'

function BlogPage2() {
  return (
    <>
      <SEO
        titleKey="seo.blog7PlansTitle"
        descKey="seo.blog7PlansDesc"
        titleFallback="Blog | 7 Different Plans of a Kitesurf Trip to Perú"
        descFallback="Seven unique ways to experience the wind, waves, and culture of Perú. From solo adventures to group trips, find your perfect kitesurfing plan in Máncora"
      />

      <HeroSevenPlans />
      <IntroStatement />
      <PlansScroller />
      <FinalCallToAction />
    </>
  )
}

export default BlogPage2;
