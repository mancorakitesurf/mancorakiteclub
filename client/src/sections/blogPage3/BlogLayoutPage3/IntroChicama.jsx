import ArticleIntroBase from "../../blogShared/ArticleIntroBase.jsx"
import imageOne from "../../../assets/imagenes-home/posicion14y27.jpg"
import imageTwo from "../../../assets/imagenes-home/posicion15.jpg"
import { useI18n } from '../../../app/providers/i18nContext'

function IntroChicama() {
  const { t } = useI18n()
  return (
    <ArticleIntroBase
      eyebrow={t('blogChicama.intro.eyebrow')}
      title={t('blogChicama.intro.title')}
      paragraphs={[
        t('blogChicama.intro.p1'),
        t('blogChicama.intro.p2'),
      ]}
      quote={t('blogChicama.intro.quote')}
      images={[
        {
          src: imageOne,
          alt: "Morning light over a long Peruvian lineup",
          caption: t('blogChicama.intro.caption1'),
        },
        {
          src: imageTwo,
          alt: "Coastal road and desert tones in northern Peru",
          caption: t('blogChicama.intro.caption2'),
        },
      ]}
    />
  )
}
export default IntroChicama