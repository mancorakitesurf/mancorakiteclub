import { componentImages } from '../../../config/images.js'
import FullscreenHero from "../../../components/ui/FullscreenHero.jsx"
import { createPresetHeroSlides } from "../../../lib/fullscreenHeroSlides.js"

const { heroImage } = componentImages["sections/blogPage4/BlogHeroPage4/HeroMancoraVsLobitos.jsx"]
function HeroMancoraVsLobitos() {
  return (
    <FullscreenHero
      as="section"
      eyebrow="Wave Kitesurf Peru"
      title="Mancora vs Lobitos vs Cabo Blanco"
      subtitle="Choose the best wave kitesurf spot in Peru based on progression, raw edge, and northern Peru trip logic."
      slides={createPresetHeroSlides('kite', {
        desktop: [heroImage],
        alt: 'Wave kitesurfer carving across textured blue water',
        imageClassName: 'object-[52%_center] md:object-center',
      })}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default HeroMancoraVsLobitos
