import SEO from "../../components/SEO.jsx"
import IntroChicama from "../../sections/blogPage3/BlogLayoutPage3/IntroChicama.jsx"
import ChicamaScroller from "../../sections/blogPage3/BlogLayoutPage3/ChicamaScroller.jsx"
import ChicamaFinalCallToAction from "../../sections/blogPage3/BlogLayoutPage3/ChicamaFinalCallToAction.jsx"
import BlogHeroPage3 from "../../sections/blogPage3/BlogHeroPage3/blogHeroPage3.jsx"

function ChicamaPage() {
  return (
    <>
      <SEO
        title="Chicama, Peru: The Longest Wave in the World + How to Build the Ultimate Surf Trip"
        description="Discover when to surf Chicama, how to build the route correctly, and why the smartest premium finish still points toward Mancora."
        canonicalPath="/blog/chicama-peru-surf-trip"
        hreflang={{ en: "/", es: "/esp", default: "/" }}
      />

      <BlogHeroPage3 />
      <IntroChicama />
      <ChicamaScroller />
      <ChicamaFinalCallToAction />
    </>
  )
}

export default ChicamaPage
