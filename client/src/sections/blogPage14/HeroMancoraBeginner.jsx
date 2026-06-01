import { getPremiumBlogPostBySlug } from '../../data/posts.js'
import FullscreenHero from "../../components/ui/FullscreenHero.jsx"

function HeroMancoraBeginner() {
  const post = getPremiumBlogPostBySlug('learn-kitesurfing-in-peru-mancora-beginner-guide')
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
export default HeroMancoraBeginner
