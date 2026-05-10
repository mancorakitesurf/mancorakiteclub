import FullscreenHero from "../../components/ui/FullscreenHero.jsx"
import { createPresetHeroSlides } from "../../lib/fullscreenHeroSlides.js"
import { CLASSES_HERO } from "./classesData"

function ClassesHero() {
  return (
    <FullscreenHero
      as="section"
      eyebrow="Mancora, Peru"
      title={CLASSES_HERO.title}
      subtitle={CLASSES_HERO.subtitle}
      slides={createPresetHeroSlides('lessons', {
        desktop: [CLASSES_HERO.image],
        alt: CLASSES_HERO.title,
        imageClassName: 'object-[58%_center] md:object-center',
      })}
    />
  )
}

export default ClassesHero
