import FullscreenHero from "../../components/ui/FullscreenHero.jsx"
import { createPresetHeroSlides } from "../../lib/fullscreenHeroSlides.js"
import { getImage } from "../../config/images.js"
import { useI18n } from "../../app/providers/i18nContext.js"

function BeginnersHero() {
  const { t } = useI18n()
  const title = t("beginnersGuide.hero.title")

  return (
    <FullscreenHero
      as="header"
      eyebrow={t("beginnersGuide.hero.eyebrow")}
      title={title}
      subtitle={t("beginnersGuide.hero.subtitle")}
      slides={createPresetHeroSlides('lessons', {
        desktop: [getImage("optimized/critical/classes-hero-progress-desktop.webp")],
        alt: title,
        imageClassName: 'object-[58%_center] md:object-center',
      })}
    />
  )
}

export default BeginnersHero
