import { getPremiumBlogPostBySlug } from '../../data/posts.js'
import ArticleFinalCallToActionBase from "../blogShared/ArticleFinalCallToActionBase.jsx"

function WingfoilComparisonCallToAction() {
  const post = getPremiumBlogPostBySlug('kitesurf-vs-wingfoil-which-watersport-should-you-learn')
  return (
    <ArticleFinalCallToActionBase
      eyebrow="Next Step"
      title={post.cta?.title || "Ready for your adventure?"}
      description={post.cta?.body || "Join us in Mancora."}
      image={post.heroImage}
      imageAlt={post.heroAlt || post.title}
      buttonLabel="Build Trip"
    />
  )
}
export default WingfoilComparisonCallToAction
