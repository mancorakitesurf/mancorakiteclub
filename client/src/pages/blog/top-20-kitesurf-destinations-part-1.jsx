import SEO from '../../components/SEO'
import BlogHeroPage1 from '../../sections/blogPage1/BlogHeroPage1/BlogHeroPage1'
import BlogEditorialIntro from '../../sections/blogPage1/BlogLayoutPage1/BlogEditorialIntro'
import BlogClosing from '../../sections/blogPage1/BlogLayoutPage1/BlogClosing'
import TopDestinationsSection from "../../sections/blogPage1/BlogTop/BlogTop/TopDestinationsSection.jsx"

function BlogPage1() {
  return (
    <>
      <SEO
        title="Blog | The 20 World's best destinations..."
        description="Artículo sobre kitesurf en Perú"
        canonicalPath="/blog/top-20-kitesurf-destinations-part-1"
        hreflang={{ en: '/', es: '/esp', default: '/' }}
      />

      <BlogHeroPage1 />
      <BlogEditorialIntro />
      <TopDestinationsSection />
      <BlogClosing />
    </>
  )
}

export default BlogPage1;
