import FullscreenHero from "../../components/ui/FullscreenHero.jsx"
import { createPresetHeroSlides } from "../../lib/fullscreenHeroSlides.js"
import { CLASSES_HERO } from "./classesData"
import { useI18n } from "../../app/providers/i18nContext.js"

function ClassesHero() {
  const { t } = useI18n()
  const title = t(CLASSES_HERO.titleKey)

  return (
    <FullscreenHero
      as="section"
      eyebrow={t("classes.kitesurf.hero.eyebrow")}
      title={title}
      subtitle={t(CLASSES_HERO.subtitleKey)}
      slides={createPresetHeroSlides('lessons', {
        desktop: [CLASSES_HERO.image],
        alt: title,
        imageClassName: 'object-[58%_center] md:object-center',
      })}
    />
  )
}

export default ClassesHero
