import SEO from '../../components/SEO'
import PacasmayoHero from '../../sections/blogPage6/BlogHeroPage6/pacasmayoHero'
import PacasmayoIntro from '../../sections/blogPage6/BlogLayoutPage6/pacasmayoIntro'
import PacasmayoPointBreak from '../../sections/blogPage6/BlogLayoutPage6/pacasmayoPointBreak'
import PacasmayoConditions from '../../sections/blogPage6/BlogLayoutPage6/pacasmayoConditions'
import PacasmayoForWho from '../../sections/blogPage6/BlogLayoutPage6/pacasmayoForWho'
import PacasmayoReality from '../../sections/blogPage6/BlogLayoutPage6/pacasmayoReality'
import PacasmayoBridge from '../../sections/blogPage6/BlogLayoutPage6/pacasmayoBrindge'
import PacasmayoCTA from '../../sections/blogPage6/BlogLayoutPage6/pacasmayoCTA'


function BlogPage6() {
  return (
    <>
      <SEO
        title="Pacasmayo, Peru: The Ultimate Point Break Surf Guide"
        description="Discover Pacasmayo, one of the longest left-hand point breaks in the world. Conditions, seasons and who it's for."
        canonicalPath="/blog/pacasmayo-peru-point-break-guide"
        hreflang={{ en: '/blog/pacasmayo-peru-point-break-guide', es: '/esp', default: '/' }}
      />

      <PacasmayoHero />
      <PacasmayoIntro />
      <PacasmayoPointBreak />
      <PacasmayoConditions />
      <PacasmayoForWho />
      <PacasmayoReality />
      <PacasmayoBridge />
      <PacasmayoBridge />
      <PacasmayoCTA />
    </>
  )
}

export default BlogPage6