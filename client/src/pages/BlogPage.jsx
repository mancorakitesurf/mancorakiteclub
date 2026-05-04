import SEO from '../components/SEO'
import BlogHero from '../sections/blog/BlogHero/BlogHero'
import BlogLayout from '../sections/blog/BlogLayout/BlogLayout'

function BlogPage() {
  return (
    <>
      <SEO
        title="Blog | Mancora Kite Club"
        description="Kitesurfing, wingfoil, and surf blog from Máncora, Peru. Read guides, spot breakdowns, trip reports, and coaching. Stay updated with the best wind and waves."
        canonicalPath="/blog"
        hreflang={{ en: '/', es: '/esp', default: '/' }}
      />

      <BlogHero />
      <BlogLayout />
    </>
  )
}

export default BlogPage