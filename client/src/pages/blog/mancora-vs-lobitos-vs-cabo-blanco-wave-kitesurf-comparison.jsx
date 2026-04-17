import SEO from '../../components/SEO'

import ComparisonHero from '../../sections/blogPage4/BlogHeroPage4/comparisonHero'
import ComparisonCards from '../../sections/blogPage4/BlogLayoutPage4/comparisonCards'
import ComparisonDeepDive from '../../sections/blogPage4/BlogLayoutPage4/comparisonDeppDive'
import ComparisonCTA from '../../sections/blogPage4/BlogLayoutPage4/comparisonCTA'

function BlogPage4() {
  return (
    <>
      <SEO
        title="Mancora vs Lobitos vs Cabo Blanco: Best Wave Kitesurf Spot in Peru"
        description="Compare Mancora, Lobitos and Cabo Blanco for wave kitesurfing. Discover which spot fits your level and why Mancora stands out."
        canonicalPath="/blog/mancora-vs-lobitos-vs-cabo-blanco"
        hreflang={{ en: '/blog/mancora-vs-lobitos-vs-cabo-blanco', es: '/esp', default: '/' }}
      />

      <ComparisonHero />
      <ComparisonCards />
      <ComparisonDeepDive />
      <ComparisonCTA />
    </>
  )
}

export default BlogPage4;