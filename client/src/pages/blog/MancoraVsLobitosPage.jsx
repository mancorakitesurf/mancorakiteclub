import SEO from "../../components/SEO.jsx"
import HeroMancoraVsLobitos from "../../sections/blogPage4/BlogHeroPage4/HeroMancoraVsLobitos.jsx"
import IntroMancoraVsLobitos from "../../sections/blogPage4/BlogLayoutPage4/IntroMancoraVsLobitos.jsx"
import MancoraVsLobitosScroller from "../../sections/blogPage4/BlogLayoutPage4/MancoraVsLobitosScroller.jsx"
import MancoraVsLobitosFinalCallToAction from "../../sections/blogPage4/BlogLayoutPage4/MancoraVsLobitosFinalCallToAction.jsx"

function MancoraVsLobitosPage() {
  return (
    <>
      <SEO
        titleKey="seo.blogMancoraVsLobitosTitle"
        descKey="seo.blogMancoraVsLobitosDesc"
        titleFallback="Mancora vs Lobitos vs Cabo Blanco: Best Wave Kitesurf Spot in Peru"
        descFallback="Compare Mancora, Lobitos, and Cabo Blanco for wave kitesurfing in Peru. Detailed analysis of comfort, progression, and why Mancora is the best base. Book now!"
      />

      <HeroMancoraVsLobitos />
      <IntroMancoraVsLobitos />
      <MancoraVsLobitosScroller />
      <MancoraVsLobitosFinalCallToAction />
    </>
  )
}

export default MancoraVsLobitosPage