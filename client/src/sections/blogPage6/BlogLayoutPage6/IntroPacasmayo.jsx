import ArticleIntroBase from "../../blogShared/ArticleIntroBase.jsx"
import imageOne from "../../../assets/imagenes-home/posicion13.jpg"
import imageTwo from "../../../assets/imagenes-home/posicion15.jpg"
import { useI18n } from '../../../app/providers/i18nContext'

function IntroPacasmayo() {
  const { t } = useI18n()

  return (
    <ArticleIntroBase
      eyebrow={t('blogPacasmayo.intro.eyebrow')}
      title={t('blogPacasmayo.intro.title')}
      paragraphs={[
        t('blogPacasmayo.intro.p1'),
        t('blogPacasmayo.intro.p2'),
      ]}
      quote={t('blogPacasmayo.intro.quote')}
      images={[
        {
          src: imageOne,
          alt: "Long wave wall bending across the Peruvian coast",
          caption: t('blogPacasmayo.intro.caption1'),
        },
        {
          src: imageTwo,
          alt: "Travel boards and calm premium surf mood",
          caption: t('blogPacasmayo.intro.caption2'),
        },
      ]}
    />
  )
}
export default IntroPacasmayo