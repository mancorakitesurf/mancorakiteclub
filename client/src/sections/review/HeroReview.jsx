import { componentImages } from '../../config/images.js'
import FullscreenHero from "../../components/ui/FullscreenHero.jsx"
import { createPresetHeroSlides } from "../../lib/fullscreenHeroSlides.js"

const { reviewHeroImg } = componentImages["sections/review/HeroReview.jsx"]
function HeroReview() {
  return (
    <FullscreenHero
      as="section"
      eyebrow="Mancora Kite Club"
      title="What Our Riders Say"
      subtitle="Real stories from the riders who lived the wind, the ocean, and the tribe experience."
      slides={createPresetHeroSlides('community', {
        desktop: [reviewHeroImg],
        alt: 'Mancora Kite Club rider testimonials',
        imageClassName: 'object-[52%_center] md:object-center',
      })}
      actions={[
        {
          href: '#videos',
          label: 'Watch Videos',
        },
      ]}
    />
  )
}

export default HeroReview
