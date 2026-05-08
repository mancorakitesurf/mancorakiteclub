import SEO from "../../components/SEO.jsx"
import HeroPacasmayo from "../../sections/blogPage6/BlogHeroPage6/HeroPacasmayo.jsx"
import IntroPacasmayo from "../../sections/blogPage6/BlogLayoutPage6/IntroPacasmayo.jsx"
import PacasmayoScroller from "../../sections/blogPage6/BlogLayoutPage6/PacasmayoScroller.jsx"
import PacasmayoFinalCallToAction from "../../sections/blogPage6/BlogLayoutPage6/PacasmayoFinalCallToAction.jsx"

function PacasmayoPage() {
  return (
    <>
      <SEO
        titleKey="seo.blogPacasmayoTitle"
        descKey="seo.blogPacasmayoDesc"
        titleFallback="Pacasmayo, Peru: The Ultimate Point Break Surf Guide"
        descFallback="Premium Pacasmayo surf guide: season timing, wave expectations, trip pacing, and why many surfers finish their journey in Mancora. Best kitesurfing base in Peru."
      />

      <HeroPacasmayo />
      <IntroPacasmayo />
      <PacasmayoScroller />
      <PacasmayoFinalCallToAction />
    </>
  )
}

export default PacasmayoPage