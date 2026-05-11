import ArticleIntroBase from "../../blogShared/ArticleIntroBase.jsx"
import imageOne from "../../../assets/imagenes-home/posicion23.jpg"
import imageTwo from "../../../assets/imagenes-home/posicion26.jpg"
import { useI18n } from '../../../app/providers/i18nContext'

function IntroMancoraVsLobitos() {
  const { t } = useI18n()

  return (
    <ArticleIntroBase
      eyebrow={t('blogMancoraVsLobitos.intro.eyebrow')}
      title={t('blogMancoraVsLobitos.intro.title')}
      paragraphs={[
        t('blogMancoraVsLobitos.intro.p1'),
        t('blogMancoraVsLobitos.intro.p2'),
      ]}
      quote={t('blogMancoraVsLobitos.intro.quote')}
      images={[
        {
          src: imageOne,
          alt: "Warm light over a northern Peru beach town",
          caption: t('blogMancoraVsLobitos.intro.caption1'),
        },
        {
          src: imageTwo,
          alt: "Coastal wind line and open Pacific horizon",
          caption: t('blogMancoraVsLobitos.intro.caption2'),
        },
      ]}
    />
  )
}
export default IntroMancoraVsLobitos