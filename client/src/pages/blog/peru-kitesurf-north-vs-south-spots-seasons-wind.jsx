import SEO from '../../components/SEO'

import PeruHero from '../../sections/blogPage5/BlogHeroPage5/PeruHero'
import PeruIntro from '../../sections/blogPage5/BlogLayoutPage5/PeruIntro'
import PeruComparison from '../../sections/blogPage5/BlogLayoutPage5/PeruComparasion'
import PeruBreakdown from '../../sections/blogPage5/BlogLayoutPage5/PeruBreakdown'
import PeruClose from '../../sections/blogPage5/BlogLayoutPage5/PeruClose'
import PeruCTA from '../../sections/blogPage5/BlogLayoutPage5/PeruCTA'

function BlogPage5() {
  return (
    <>
      <SEO
        title="Peru Kitesurf: North vs South — Spots, Seasons & Wind Guide"
        description="Discover the difference between Northern and Southern Peru for kitesurfing. Wind, waves, seasons and where to go."
        canonicalPath="/blog/peru-kitesurf-north-vs-south"
        hreflang={{ en: '/blog/peru-kitesurf-north-vs-south', es: '/esp', default: '/' }}
      />

      <PeruHero />
      <PeruIntro />
      <PeruComparison />
      <PeruBreakdown />
      <PeruClose />
      <PeruCTA />
    </>
  )
}

export default BlogPage5