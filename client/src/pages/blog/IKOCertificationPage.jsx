import SEO from "../../components/SEO.jsx"
import SchemaOrg from "../../components/SchemaOrg.jsx"
import { getPremiumBlogPostBySlug } from '../../data/posts.js'
import HeroIKOCertification from "../../sections/blogPage16/HeroIKOCertification.jsx"
import IntroIKOCertification from "../../sections/blogPage16/IntroIKOCertification.jsx"
import IKOCertificationScroller from "../../sections/blogPage16/IKOCertificationScroller.jsx"
import IKOCertificationCallToAction from "../../sections/blogPage16/IKOCertificationCallToAction.jsx"

function IKOCertificationPage() {
  const post = getPremiumBlogPostBySlug('iko-certified-kitesurfing-school-why-it-matters')
  return (
    <>
      <SEO
        title={post.seoTitle || post.title}
        description={post.description}
        canonicalPath={`/blog/${post.slug}`}
        hreflang={{ en: "/", es: "/esp", default: "/" }}
      />
      <SchemaOrg type="BlogPosting" post={post} />

      <HeroIKOCertification />
      <IntroIKOCertification />
      <IKOCertificationScroller />
      <IKOCertificationCallToAction />
    </>
  )
}

export default IKOCertificationPage
