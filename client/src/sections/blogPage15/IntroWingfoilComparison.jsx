import { getPremiumBlogPostBySlug } from '../../data/posts.js'
import ArticleIntroBase from "../blogShared/ArticleIntroBase.jsx"

function IntroWingfoilComparison() {
  const post = getPremiumBlogPostBySlug('kitesurf-vs-wingfoil-which-watersport-should-you-learn')
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
export default IntroWingfoilComparison
