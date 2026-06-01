import { getPremiumBlogPostBySlug } from '../../data/posts.js'
import ArticleIntroBase from "../blogShared/ArticleIntroBase.jsx"

function IntroMancoraBeginner() {
  const post = getPremiumBlogPostBySlug('learn-kitesurfing-in-peru-mancora-beginner-guide')
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
export default IntroMancoraBeginner
