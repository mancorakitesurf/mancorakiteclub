import ArticleScrollerBase from "../../blogShared/ArticleScrollerBase.jsx"
import imageOne from "../../../assets/imagenes-home/posicion18.jpg"
import supportOne from "../../../assets/imagenes-home/posicion19.jpg"
import imageTwo from "../../../assets/imagenes-home/posicion23.jpg"
import supportTwo from "../../../assets/imagenes-home/posicion26.jpg"
import imageThree from "../../../assets/imagenes-home/posicion17.jpg"
import supportThree from "../../../assets/imagenes-home/posicion24.jpg"
import { useI18n } from '../../../app/providers/i18nContext'

function PacasmayoScroller() {
  const { t } = useI18n()

  const PACASMAYO_SECTIONS = [
    {
      eyebrow: t('blogPacasmayo.scroller.sec1.eyebrow'),
      title: t('blogPacasmayo.scroller.sec1.title'),
      paragraphs: [
        t('blogPacasmayo.scroller.sec1.p1'),
        t('blogPacasmayo.scroller.sec1.p2'),
      ],
      bullets: [
        t('blogPacasmayo.scroller.sec1.b1'),
        t('blogPacasmayo.scroller.sec1.b2'),
        t('blogPacasmayo.scroller.sec1.b3'),
      ],
      facts: [
        { label: t('blogPacasmayo.scroller.sec1.f1Label'), value: t('blogPacasmayo.scroller.sec1.f1Value') },
        { label: t('blogPacasmayo.scroller.sec1.f2Label'), value: t('blogPacasmayo.scroller.sec1.f2Value') },
      ],
      image: imageOne,
      caption: t('blogPacasmayo.scroller.sec1.caption1'),
      supportImage: supportOne,
      supportCaption: t('blogPacasmayo.scroller.sec1.caption2'),
    },
    {
      eyebrow: t('blogPacasmayo.scroller.sec2.eyebrow'),
      title: t('blogPacasmayo.scroller.sec2.title'),
      paragraphs: [
        t('blogPacasmayo.scroller.sec2.p1'),
        t('blogPacasmayo.scroller.sec2.p2'),
      ],
      bullets: [
        t('blogPacasmayo.scroller.sec2.b1'),
        t('blogPacasmayo.scroller.sec2.b2'),
        t('blogPacasmayo.scroller.sec2.b3'),
      ],
      facts: [
        { label: t('blogPacasmayo.scroller.sec2.f1Label'), value: t('blogPacasmayo.scroller.sec2.f1Value') },
        { label: t('blogPacasmayo.scroller.sec2.f2Label'), value: t('blogPacasmayo.scroller.sec2.f2Value') },
      ],
      image: imageTwo,
      caption: t('blogPacasmayo.scroller.sec2.caption1'),
      supportImage: supportTwo,
      supportCaption: t('blogPacasmayo.scroller.sec2.caption2'),
    },
    {
      eyebrow: t('blogPacasmayo.scroller.sec3.eyebrow'),
      title: t('blogPacasmayo.scroller.sec3.title'),
      paragraphs: [
        t('blogPacasmayo.scroller.sec3.p1'),
        t('blogPacasmayo.scroller.sec3.p2'),
      ],
      bullets: [
        t('blogPacasmayo.scroller.sec3.b1'),
        t('blogPacasmayo.scroller.sec3.b2'),
        t('blogPacasmayo.scroller.sec3.b3'),
      ],
      facts: [
        { label: t('blogPacasmayo.scroller.sec3.f1Label'), value: t('blogPacasmayo.scroller.sec3.f1Value') },
        { label: t('blogPacasmayo.scroller.sec3.f2Label'), value: t('blogPacasmayo.scroller.sec3.f2Value') },
      ],
      image: imageThree,
      caption: t('blogPacasmayo.scroller.sec3.caption1'),
      supportImage: supportThree,
      supportCaption: t('blogPacasmayo.scroller.sec3.caption2'),
    },
  ]

  return (
    <ArticleScrollerBase
      eyebrow={t('blogPacasmayo.scroller.mainEyebrow')}
      title={t('blogPacasmayo.scroller.mainTitle')}
      description={t('blogPacasmayo.scroller.mainDesc')}
      sections={PACASMAYO_SECTIONS}
    />
  )
}
export default PacasmayoScroller