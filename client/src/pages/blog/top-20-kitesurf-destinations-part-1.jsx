import SEO from '../../components/SEO.jsx'
import BlogHeroPage1 from '../../sections/blogPage1/BlogHeroPage1/BlogHeroPage1'
import BlogEditorialIntro from '../../sections/blogPage1/BlogLayoutPage1/BlogEditorialIntro'
import BlogClosing from '../../sections/blogPage1/BlogLayoutPage1/BlogClosing'
import TopDestinationsSection from "../../sections/blogPage1/BlogTop/TopDestinationsSection.jsx"

function BlogPage1() {
  return (
    <>
      <SEO
        titleKey="seo.blogTop20Title"
        descKey="seo.blogTop20Desc"
        titleFallback="Blog | The 20 World's best destinations..."
        descFallback="Discover the top 20 kitesurf destinations worldwide. From Máncora to Brazil, find the best spots for wind, waves, and adventure. Part 1 of our global guide."
      />

      <BlogHeroPage1 />
      <BlogEditorialIntro />
      <TopDestinationsSection />
      <BlogClosing />
    </>
  )
}

export default BlogPage1;