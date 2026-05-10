import { componentImages } from '../../config/images.js'
import FullscreenHero from "../../components/ui/FullscreenHero.jsx"
import { createPresetHeroSlides } from "../../lib/fullscreenHeroSlides.js"
import { COACHING_DATA9 } from "./introData9"

const { heroImg } = componentImages["sections/blogPage9/HeroMistakesKite.jsx"]
function HeroMistakesKite() {
  const { hero } = COACHING_DATA9

  return (
    <FullscreenHero
      as="section"
      eyebrow={`${hero.category1} / ${hero.category2}`}
      title={hero.title}
      subtitle={hero.subtitle}
      slides={createPresetHeroSlides('kite', {
        desktop: [heroImg],
        alt: 'Intermediate rider kitesurf coaching',
        imageClassName: 'object-[54%_center] md:object-center',
      })}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default HeroMistakesKite
