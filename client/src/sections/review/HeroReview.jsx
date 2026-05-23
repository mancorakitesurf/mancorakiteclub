import { componentImages } from '../../config/images.js'
import FullscreenHero from "../../components/ui/FullscreenHero.jsx"
import { createPresetHeroSlides } from "../../lib/fullscreenHeroSlides.js"
import { useI18n } from '../../app/providers/i18nContext.js'

const { reviewHeroImg } = componentImages["sections/review/HeroReview.jsx"]
function HeroReview() {
  const { t } = useI18n()

  return (
    <FullscreenHero
      as="section"
      eyebrow={t('reviews.hero.eyebrow')}
      title={t('reviews.hero.title')}
      subtitle={t('reviews.hero.subtitle')}
      slides={createPresetHeroSlides('community', {
        desktop: [reviewHeroImg],
        alt: 'Mancora Kite Club rider testimonials',
        imageClassName: 'object-[52%_center] md:object-center',
      })}
      actions={[
        {
          href: '#videos',
          label: t('reviews.hero.watchVideos'),
        },
      ]}
    />
  )
}

export default HeroReview
