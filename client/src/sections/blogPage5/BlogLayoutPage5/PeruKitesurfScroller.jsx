import ArticleScrollerBase from "../../blogShared/ArticleScrollerBase.jsx"
import imageOne from "../../../assets/imagenes-kitesurfing/posicionkt2.jpg"
import supportOne from "../../../assets/imagenes-home/posicion5.jpg"
import imageTwo from "../../../assets/imagenes-wingfoil/posicionw8.jpg"
import supportTwo from "../../../assets/imagenes-wingfoil/posicionw7.jpg"
import imageThree from "../../../assets/imagenes-home/posicion24.jpg"
import supportThree from "../../../assets/imagenes-home/posicion14y27.jpg"
import { useI18n } from '../../../app/providers/i18nContext'

function PeruKitesurfScroller() {
  const { t } = useI18n()

  const PERU_KITESURF_SECTIONS = [
    {
      eyebrow: t('blogNorthVsSouth.scroller.sec1.eyebrow'),
      title: t('blogNorthVsSouth.scroller.sec1.title'),
      paragraphs: [
        t('blogNorthVsSouth.scroller.sec1.p1'),
        t('blogNorthVsSouth.scroller.sec1.p2'),
      ],
      bullets: [
        t('blogNorthVsSouth.scroller.sec1.b1'),
        t('blogNorthVsSouth.scroller.sec1.b2'),
        t('blogNorthVsSouth.scroller.sec1.b3'),
      ],
      facts: [
        { label: t('blogNorthVsSouth.scroller.sec1.f1Label'), value: t('blogNorthVsSouth.scroller.sec1.f1Value') },
        { label: t('blogNorthVsSouth.scroller.sec1.f2Label'), value: t('blogNorthVsSouth.scroller.sec1.f2Value') },
      ],
      image: imageOne,
      caption: t('blogNorthVsSouth.scroller.sec1.caption1'),
      supportImage: supportOne,
      supportCaption: t('blogNorthVsSouth.scroller.sec1.caption2'),
    },
    {
      eyebrow: t('blogNorthVsSouth.scroller.sec2.eyebrow'),
      title: t('blogNorthVsSouth.scroller.sec2.title'),
      paragraphs: [
        t('blogNorthVsSouth.scroller.sec2.p1'),
        t('blogNorthVsSouth.scroller.sec2.p2'),
      ],
      bullets: [
        t('blogNorthVsSouth.scroller.sec2.b1'),
        t('blogNorthVsSouth.scroller.sec2.b2'),
        t('blogNorthVsSouth.scroller.sec2.b3'),
      ],
      facts: [
        { label: t('blogNorthVsSouth.scroller.sec2.f1Label'), value: t('blogNorthVsSouth.scroller.sec2.f1Value') },
        { label: t('blogNorthVsSouth.scroller.sec2.f2Label'), value: t('blogNorthVsSouth.scroller.sec2.f2Value') },
      ],
      image: imageTwo,
      caption: t('blogNorthVsSouth.scroller.sec2.caption1'),
      supportImage: supportTwo,
      supportCaption: t('blogNorthVsSouth.scroller.sec2.caption2'),
    },
    {
      eyebrow: t('blogNorthVsSouth.scroller.sec3.eyebrow'),
      title: t('blogNorthVsSouth.scroller.sec3.title'),
      paragraphs: [
        t('blogNorthVsSouth.scroller.sec3.p1'),
        t('blogNorthVsSouth.scroller.sec3.p2'),
      ],
      bullets: [
        t('blogNorthVsSouth.scroller.sec3.b1'),
        t('blogNorthVsSouth.scroller.sec3.b2'),
        t('blogNorthVsSouth.scroller.sec3.b3'),
      ],
      facts: [
        { label: t('blogNorthVsSouth.scroller.sec3.f1Label'), value: t('blogNorthVsSouth.scroller.sec3.f1Value') },
        { label: t('blogNorthVsSouth.scroller.sec3.f2Label'), value: t('blogNorthVsSouth.scroller.sec3.f2Value') },
      ],
      image: imageThree,
      caption: t('blogNorthVsSouth.scroller.sec3.caption1'),
      supportImage: supportThree,
      supportCaption: t('blogNorthVsSouth.scroller.sec3.caption2'),
    },
  ]

  return (
    <ArticleScrollerBase
      eyebrow={t('blogNorthVsSouth.scroller.mainEyebrow')}
      title={t('blogNorthVsSouth.scroller.mainTitle')}
      description={t('blogNorthVsSouth.scroller.mainDesc')}
      sections={PERU_KITESURF_SECTIONS}
    />
  )
}

export default PeruKitesurfScroller