import SEO from "../../components/SEO.jsx"
import SchemaOrg from "../../components/SchemaOrg.jsx"
import { getPremiumBlogPostBySlug } from '../../data/posts.js'
import HeroWingfoilComparison from "../../sections/blogPage15/HeroWingfoilComparison.jsx"
import IntroWingfoilComparison from "../../sections/blogPage15/IntroWingfoilComparison.jsx"
import WingfoilComparisonScroller from "../../sections/blogPage15/WingfoilComparisonScroller.jsx"
import WingfoilComparisonCallToAction from "../../sections/blogPage15/WingfoilComparisonCallToAction.jsx"

function WingfoilComparisonPage() {
  const post = getPremiumBlogPostBySlug('kitesurf-vs-wingfoil-which-watersport-should-you-learn')
  return (
    <>
      <SEO
        title={post.seoTitle || post.title}
        description={post.description}
        canonicalPath={`/blog/${post.slug}`}
        hreflang={{ en: "/", es: "/esp", default: "/" }}
      />
      <SchemaOrg type="BlogPosting" post={post} />

      <HeroWingfoilComparison />
      <IntroWingfoilComparison />
      <WingfoilComparisonScroller />
      <WingfoilComparisonCallToAction />
    </>
  )
}

export default WingfoilComparisonPage
