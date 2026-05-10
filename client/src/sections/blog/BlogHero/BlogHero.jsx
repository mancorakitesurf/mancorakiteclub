import FullscreenHero from "../../../components/ui/FullscreenHero.jsx"
import { createPresetHeroSlides } from "../../../lib/fullscreenHeroSlides.js"
import { BLOGHERO_IMAGE } from "../BlogLayout/blogContent.js"

function BlogHero() {
  return (
    <FullscreenHero
      as="section"
      eyebrow="The Journal"
      title="Kitesurfing Peru"
      subtitle="Wave riding and ocean stories from the wind, waves, and culture of northern Peru."
      slides={createPresetHeroSlides('blog', {
        desktop: [BLOGHERO_IMAGE],
        alt: 'Kite surfer jumping over waves in Mancora',
        imageClassName: 'object-[52%_center] md:object-center',
      })}
    />
  )
}

export default BlogHero
