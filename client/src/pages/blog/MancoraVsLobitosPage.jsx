import SEO from "../../components/SEO.jsx"
import HeroMancoraVsLobitos from "../../sections/blogPage4/BlogHeroPage4/HeroMancoraVsLobitos.jsx"
import IntroMancoraVsLobitos from "../../sections/blogPage4/BlogLayoutPage4/IntroMancoraVsLobitos.jsx"
import MancoraVsLobitosScroller from "../../sections/blogPage4/BlogLayoutPage4/MancoraVsLobitosScroller.jsx"
import MancoraVsLobitosFinalCallToAction from "../../sections/blogPage4/BlogLayoutPage4/MancoraVsLobitosFinalCallToAction.jsx"

function MancoraVsLobitosPage() {
  return (
    <>
      <SEO
        title="Mancora vs Lobitos vs Cabo Blanco: Best Wave Kitesurf Spot in Peru"
        description="Compare Mancora, Lobitos, and Cabo Blanco for wave kitesurfing in Peru, including comfort, progression, trip style, and the best final base."
        canonicalPath="/blog/mancora-vs-lobitos-vs-cabo-blanco"
        hreflang={{ en: "/", es: "/esp", default: "/" }}
      />

      <HeroMancoraVsLobitos />
      <IntroMancoraVsLobitos />
      <MancoraVsLobitosScroller />
      <MancoraVsLobitosFinalCallToAction />
    </>
  )
}

export default MancoraVsLobitosPage
