import SEO from "../../components/SEO.jsx"
import HeroPacasmayo from "../../sections/blogPage6/BlogHeroPage6/HeroPacasmayo.jsx"
import IntroPacasmayo from "../../sections/blogPage6/BlogLayoutPage6/IntroPacasmayo.jsx"
import PacasmayoScroller from "../../sections/blogPage6/BlogLayoutPage6/PacasmayoScroller.jsx"
import PacasmayoFinalCallToAction from "../../sections/blogPage6/BlogLayoutPage6/PacasmayoFinalCallToAction.jsx"

function PacasmayoPage() {
  return (
    <>
      <SEO
        title="Pacasmayo, Peru: The Ultimate Point Break Surf Guide"
        description="Premium Pacasmayo surf guide: season timing, wave expectations, trip pacing, and why many surfers finish their journey in Mancora. Best kitesurfing base in Peru."
        canonicalPath="/blog/pacasmayo-peru-the-ultimate-point-break-surf-guide"
        hreflang={{ en: "/", es: "/esp", default: "/" }}
      />

      <HeroPacasmayo />
      <IntroPacasmayo />
      <PacasmayoScroller />
      <PacasmayoFinalCallToAction />
    </>
  )
}

export default PacasmayoPage