import SEO from '../components/SEO'
import BlogHero from '../sections/blog/BlogHero/BlogHero'
import BlogLayout from '../sections/blog/BlogLayout/BlogLayout'

function BlogPage() {
  return (
    <>
      <SEO
        titleKey="seo.blogTitle"
        descKey="seo.blogDesc"
        titleFallback="Blog | Mancora Kite Club"
        descFallback="Kitesurfing, wingfoil, and surf blog from Máncora, Peru. Read guides, spot breakdowns, trip reports, and coaching. Stay updated with the best wind and waves."
      />

      <BlogHero />
      <BlogLayout />
    </>
  )
}

export default BlogPage