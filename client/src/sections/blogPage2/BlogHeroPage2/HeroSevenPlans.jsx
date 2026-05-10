import { componentImages } from '../../../config/images.js'
import FullscreenHero from "../../../components/ui/FullscreenHero.jsx"
import { createPresetHeroSlides } from "../../../lib/fullscreenHeroSlides.js"

const { heroImg } = componentImages["sections/blogPage2/BlogHeroPage2/HeroSevenPlans.jsx"]
function HeroSevenPlans() {
  return (
    <FullscreenHero
      as="section"
      eyebrow="Seven Ways to Ride Peru"
      title="7 Different Ways To Experience Peru's Wind"
      subtitle="Not every rider follows the same path. Choose yours."
      slides={createPresetHeroSlides('kite', {
        desktop: [heroImg],
        alt: 'Kitesurf Peru',
        imageClassName: 'object-[54%_center] md:object-center',
      })}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default HeroSevenPlans
