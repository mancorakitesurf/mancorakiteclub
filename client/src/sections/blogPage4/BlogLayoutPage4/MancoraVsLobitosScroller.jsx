import ArticleScrollerBase from "../../blogShared/ArticleScrollerBase.jsx"
import imageOne from "../../../assets/imagenes-kitesurfing/posicionkt7.jpg"
import supportOne from "../../../assets/imagenes-kitesurfing/posicionkt9.jpg"
import imageTwo from "../../../assets/imagenes-home/posicion24.jpg"
import supportTwo from "../../../assets/imagenes-home/posicion25.png"
import imageThree from "../../../assets/imagenes-home/posicion29.jpg"
import supportThree from "../../../assets/imagenes-home/posicion22.png"
import { useI18n } from '../../../app/providers/i18nContext'

function MancoraVsLobitosScroller() {
  const { t } = useI18n()

  const COMPARISON_SECTIONS = [
    {
      eyebrow: t('blogMancoraVsLobitos.scroller.sec1.eyebrow'),
      title: t('blogMancoraVsLobitos.scroller.sec1.title'),
      paragraphs: [
        t('blogMancoraVsLobitos.scroller.sec1.p1'),
        t('blogMancoraVsLobitos.scroller.sec1.p2'),
      ],
      bullets: [
        t('blogMancoraVsLobitos.scroller.sec1.b1'),
        t('blogMancoraVsLobitos.scroller.sec1.b2'),
        t('blogMancoraVsLobitos.scroller.sec1.b3'),
      ],
      facts: [
        { label: t('blogMancoraVsLobitos.scroller.sec1.f1Label'), value: t('blogMancoraVsLobitos.scroller.sec1.f1Value') },
        { label: t('blogMancoraVsLobitos.scroller.sec1.f2Label'), value: t('blogMancoraVsLobitos.scroller.sec1.f2Value') },
      ],
      image: imageOne,
      caption: t('blogMancoraVsLobitos.scroller.sec1.caption1'),
      supportImage: supportOne,
      supportCaption: t('blogMancoraVsLobitos.scroller.sec1.caption2'),
    },
    {
      eyebrow: t('blogMancoraVsLobitos.scroller.sec2.eyebrow'),
      title: t('blogMancoraVsLobitos.scroller.sec2.title'),
      paragraphs: [
        t('blogMancoraVsLobitos.scroller.sec2.p1'),
        t('blogMancoraVsLobitos.scroller.sec2.p2'),
      ],
      bullets: [
        t('blogMancoraVsLobitos.scroller.sec2.b1'),
        t('blogMancoraVsLobitos.scroller.sec2.b2'),
        t('blogMancoraVsLobitos.scroller.sec2.b3'),
      ],
      facts: [
        { label: t('blogMancoraVsLobitos.scroller.sec2.f1Label'), value: t('blogMancoraVsLobitos.scroller.sec2.f1Value') },
        { label: t('blogMancoraVsLobitos.scroller.sec2.f2Label'), value: t('blogMancoraVsLobitos.scroller.sec2.f2Value') },
      ],
      image: imageTwo,
      caption: t('blogMancoraVsLobitos.scroller.sec2.caption1'),
      supportImage: supportTwo,
      supportCaption: t('blogMancoraVsLobitos.scroller.sec2.caption2'),
    },
    {
      eyebrow: t('blogMancoraVsLobitos.scroller.sec3.eyebrow'),
      title: t('blogMancoraVsLobitos.scroller.sec3.title'),
      paragraphs: [
        t('blogMancoraVsLobitos.scroller.sec3.p1'),
        t('blogMancoraVsLobitos.scroller.sec3.p2'),
      ],
      bullets: [
        t('blogMancoraVsLobitos.scroller.sec3.b1'),
        t('blogMancoraVsLobitos.scroller.sec3.b2'),
        t('blogMancoraVsLobitos.scroller.sec3.b3'),
      ],
      facts: [
        { label: t('blogMancoraVsLobitos.scroller.sec3.f1Label'), value: t('blogMancoraVsLobitos.scroller.sec3.f1Value') },
        { label: t('blogMancoraVsLobitos.scroller.sec3.f2Label'), value: t('blogMancoraVsLobitos.scroller.sec3.f2Value') },
      ],
      image: imageThree,
      caption: t('blogMancoraVsLobitos.scroller.sec3.caption1'),
      supportImage: supportThree,
      supportCaption: t('blogMancoraVsLobitos.scroller.sec3.caption2'),
    },
  ]

  return (
    <ArticleScrollerBase
      eyebrow={t('blogMancoraVsLobitos.scroller.mainEyebrow')}
      title={t('blogMancoraVsLobitos.scroller.mainTitle')}
      description={t('blogMancoraVsLobitos.scroller.mainDesc')}
      sections={COMPARISON_SECTIONS}
    />
  )
}
export default MancoraVsLobitosScroller