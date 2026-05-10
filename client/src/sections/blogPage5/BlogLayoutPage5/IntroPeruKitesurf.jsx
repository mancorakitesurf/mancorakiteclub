import ArticleIntroBase from "../../blogShared/ArticleIntroBase.jsx"
import imageOne from "../../../assets/imagenes-kitsurfing-lessons/posicionk6.jpg"
import imageTwo from "../../../assets/imagenes-home/posicion3.jpg"
import { useI18n } from '../../../app/providers/i18nContext'

function IntroPeruKitesurf() {
  const { t } = useI18n()

  return (
    <ArticleIntroBase
      eyebrow={t('blogNorthVsSouth.intro.eyebrow')}
      title={t('blogNorthVsSouth.intro.title')}
      paragraphs={[
        t('blogNorthVsSouth.intro.p1'),
        t('blogNorthVsSouth.intro.p2'),
      ]}
      quote={t('blogNorthVsSouth.intro.quote')}
      images={[
        {
          src: imageOne,
          alt: "Beginner-friendly kitesurf setup and instruction zone",
          caption: t('blogNorthVsSouth.intro.caption1'),
        },
        {
          src: imageTwo,
          alt: "Wide travel landscape and Peru coast atmosphere",
          caption: t('blogNorthVsSouth.intro.caption2'),
        },
      ]}
    />
  )
}

export default IntroPeruKitesurf