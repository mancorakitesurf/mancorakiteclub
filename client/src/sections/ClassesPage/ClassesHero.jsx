import FullscreenHero from "../../components/ui/FullscreenHero.jsx"
import { createPresetHeroSlides } from "../../lib/fullscreenHeroSlides.js"
import { KITESURF_CONFIG } from "./classesData"
import { useI18n } from "../../app/providers/i18nContext.js"

function ClassesHero({ config = KITESURF_CONFIG }) {
  const { t } = useI18n()
  const title = t(config.hero.titleKey)
  const eyebrow = config.hero.eyebrowKey ? t(config.hero.eyebrowKey) : undefined
  const subtitle = t(`${config.copyNs}.heroTagline`)

  return (
    <FullscreenHero
      as="section"
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      slides={createPresetHeroSlides(config.heroPreset || 'lessons', {
        desktop: [config.hero.image].filter(Boolean),
        alt: title,
        imageClassName: config.hero.imageClassName || 'object-center',
      })}
    />
  )
}

export default ClassesHero
