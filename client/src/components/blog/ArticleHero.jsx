import FullscreenHero from "../ui/FullscreenHero.jsx"
import { createPresetHeroSlides } from "../../lib/fullscreenHeroSlides.js"

function ArticleHero({ post }) {
  if (!post) {
    return null
  }

  const desktopSlides = [
    post.heroImage,
    ...(post.gallery || []).map((image) => image.src),
  ]

  return (
    <FullscreenHero
      eyebrow={[post.category, post.readTime].filter(Boolean).join(' / ')}
      title={post.title}
      subtitle={post.description}
      meta={[post.location, post.date, post.author].filter(Boolean)}
      slides={createPresetHeroSlides('blog', {
        desktop: desktopSlides,
        alt: post.heroAlt || post.title,
        imageClassName: 'object-[52%_center] md:object-center',
      })}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default ArticleHero
