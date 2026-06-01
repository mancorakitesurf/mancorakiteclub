import { getPremiumBlogPostBySlug } from '../../data/posts.js'
import FullscreenHero from "../../components/ui/FullscreenHero.jsx"

function HeroIKOCertification() {
  const post = getPremiumBlogPostBySlug('iko-certified-kitesurfing-school-why-it-matters')
  return (
    <FullscreenHero
      as="section"
      eyebrow={post.category}
      title={post.title}
      subtitle={post.excerpt}
      slides={[
        {
          desktopSrc: post.heroImage,
          mobileSrc: post.mobileImage || post.heroImage,
          alt: post.heroAlt || post.title,
          imageClassName: 'object-cover',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}
export default HeroIKOCertification
