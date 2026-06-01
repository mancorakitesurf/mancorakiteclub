import SEO from "../../components/SEO.jsx"
import SchemaOrg from "../../components/SchemaOrg.jsx"
import { getPremiumBlogPostBySlug } from '../../data/posts.js'
import HeroMancoraBeginner from "../../sections/blogPage14/HeroMancoraBeginner.jsx"
import IntroMancoraBeginner from "../../sections/blogPage14/IntroMancoraBeginner.jsx"
import MancoraBeginnerScroller from "../../sections/blogPage14/MancoraBeginnerScroller.jsx"
import MancoraBeginnerCallToAction from "../../sections/blogPage14/MancoraBeginnerCallToAction.jsx"

function MancoraBeginnerPage() {
  const post = getPremiumBlogPostBySlug('learn-kitesurfing-in-peru-mancora-beginner-guide')
  return (
    <>
      <SEO
        title={post.seoTitle || post.title}
        description={post.description}
        canonicalPath={`/blog/${post.slug}`}
        hreflang={{ en: "/", es: "/esp", default: "/" }}
      />
      <SchemaOrg type="BlogPosting" post={post} />

      <HeroMancoraBeginner />
      <IntroMancoraBeginner />
      <MancoraBeginnerScroller />
      <MancoraBeginnerCallToAction />
    </>
  )
}

export default MancoraBeginnerPage
