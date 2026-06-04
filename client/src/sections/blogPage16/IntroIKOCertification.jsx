import { getPremiumBlogPostBySlug } from '../../data/posts.js'
import ArticleIntroBase from "../blogShared/ArticleIntroBase.jsx"

function IntroIKOCertification() {
  const post = getPremiumBlogPostBySlug('iko-certified-kitesurfing-school-why-it-matters')
  return (
    <ArticleIntroBase
      eyebrow="Introduction"
      title={post.title}
      paragraphs={post.intro || []}
      quote=""
      images={post.gallery?.slice(0, 2).map((img) => ({
        src: img.src,
        alt: img.alt,
        caption: img.alt,
      })) || []}
    />
  )
}
export default IntroIKOCertification
