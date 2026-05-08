import SEO from "../../components/SEO.jsx"
import IntroChicama from "../../sections/blogPage3/BlogLayoutPage3/IntroChicama.jsx"
import ChicamaScroller from "../../sections/blogPage3/BlogLayoutPage3/ChicamaScroller.jsx"
import ChicamaFinalCallToAction from "../../sections/blogPage3/BlogLayoutPage3/ChicamaFinalCallToAction.jsx"
import BlogHeroPage3 from "../../sections/blogPage3/BlogHeroPage3/blogHeroPage3.jsx"

function ChicamaPage() {
  return (
    <>
      <SEO
        titleKey="seo.blogChicamaTitle"
        descKey="seo.blogChicamaDesc"
        titleFallback="Chicama, Peru: The Longest Wave in the World + How to Build the Ultimate Surf Trip"
        descFallback="Discover when to surf Chicama, the longest wave, how to build the route, and why the smartest premium finish points toward Máncora for kitesurfing. Book your trip."
      />

      <BlogHeroPage3 />
      <IntroChicama />
      <ChicamaScroller />
      <ChicamaFinalCallToAction />
    </>
  )
}

export default ChicamaPage
