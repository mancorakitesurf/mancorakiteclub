import FullscreenHero from "../../../components/ui/FullscreenHero.jsx"
import { createHeroSlides, HERO_SLIDE_PRESETS } from "../../../lib/fullscreenHeroSlides.js"
import { BLOGHERO_IMAGE, BLOGHERO_MOBILE_IMAGE } from "../BlogLayout/blogContent.js"
import { useI18n } from "../../../app/providers/i18nContext.js"

const blogHeroSlides = createHeroSlides({
  desktop: [BLOGHERO_IMAGE, ...HERO_SLIDE_PRESETS.blog.desktop],
  mobile: [BLOGHERO_MOBILE_IMAGE, ...HERO_SLIDE_PRESETS.blog.mobile],
  alt: 'Kite surfer jumping over waves in Mancora',
  imageClassName: 'object-[52%_center] md:object-center',
})

function BlogHero() {
  const { t } = useI18n()

  return (
    <FullscreenHero
      as="section"
      eyebrow={t('blog.hero.eyebrow')}
      title={t('blog.hero.title')}
      subtitle={t('blog.hero.subtitle')}
      slides={blogHeroSlides}
    />
  )
}

export default BlogHero
