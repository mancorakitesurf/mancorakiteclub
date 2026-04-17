import SEO from '../../components/SEO'
import BlogHeroPage3 from '../../sections/blogPage3/BlogHeroPage3/blogHeroPage3'
import ChicamaIntro from '../../sections/blogPage3/BlogLayoutPage3/chikamaIntro'
import ChicamaStory from '../../sections/blogPage3/BlogLayoutPage3/chicamaStory'
import ChicamaExperience from '../../sections/blogPage3/BlogLayoutPage3/chicamaExperience'
import MancoraBridge from '../../sections/blogPage3/BlogLayoutPage3/mancoraBridge'
import BlogClosing from '../../sections/blogPage3/BlogLayoutPage3/blogClosing'
import MancoraExperience from '../../sections/blogPage3/BlogLayoutPage3/mancoraExperience'
import MancoraCollage from '../../sections/blogPage3/BlogLayoutPage3/MancoraCollage'


function BlogPage3() {
  return (
    <>
      <SEO
        title="Chicama, Peru: The Longest Wave in the World & The Ultimate Surf Trip Guide"
        description="Discover Chicama, the longest wave on Earth, and how to turn your trip into a full kitesurf and lifestyle experience in Mancora."
        canonicalPath="/blog/chicama-peru-longest-wave-surf-trip"
        hreflang={{ en: '/', es: '/esp', default: '/' }}
      />

      <BlogHeroPage3 />
      <ChicamaIntro />
      <ChicamaStory />
      <ChicamaExperience />
      <MancoraBridge />
      <MancoraExperience />
      <MancoraCollage />
      <BlogClosing />
    </>
  )
}

export default BlogPage3;