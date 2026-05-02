import SEO from "../../components/SEO.jsx"
import HeroPeruKitesurf from "../../sections/blogPage5/BlogHeroPage5/HeroPeruKitesurf.jsx"
import IntroPeruKitesurf from "../../sections/blogPage5/BlogLayoutPage5/IntroPeruKitesurf.jsx"
import PeruKitesurfScroller from "../../sections/blogPage5/BlogLayoutPage5/PeruKitesurfScroller.jsx"
import PeruKitesurfFinalCallToAction from "../../sections/blogPage5/BlogLayoutPage5/PeruKitesurfFinalCallToAction.jsx"

function PeruKitesurfPage() {
  return (
    <>
      <SEO
        title="Peru Kitesurf: North vs South — Spots, Seasons & Wind Guide"
        description="Understand the real difference between north and south Peru for kitesurfing, including seasons, trip style, progression, and why Mancora remains the strongest base."
        canonicalPath="/blog/peru-kitesurf-north-vs-south"
        hreflang={{ en: "/", es: "/esp", default: "/" }}
      />

      <HeroPeruKitesurf />
      <IntroPeruKitesurf />
      <PeruKitesurfScroller />
      <PeruKitesurfFinalCallToAction />
    </>
  )
}

export default PeruKitesurfPage
