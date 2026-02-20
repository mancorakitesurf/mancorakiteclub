import SEO from '../components/SEO'
import BlogHero from '../sections/blog/BlogHero/BlogHero'
import BlogLayout from '../sections/blog/BlogLayout/BlogLayout'

function BlogPage() {
  return (
    <>
      <SEO
        title="Blog | Mancora Kite Club"
        description="Artículos sobre kitesurf en Perú"
        canonicalPath="/blog"
        hreflang={{ en: '/', es: '/esp', default: '/' }}
      />

      <BlogHero />
      <BlogLayout />
    </>
  )
}

export default BlogPage