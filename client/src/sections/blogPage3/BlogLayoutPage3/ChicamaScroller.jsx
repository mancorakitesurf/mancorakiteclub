import ArticleScrollerBase from "../../blogShared/ArticleScrollerBase.jsx"
import imageOne from "../../../assets/imagenes-home/posicion16.jpg"
import supportOne from "../../../assets/imagenes-home/posicion17.jpg"
import imageTwo from "../../../assets/imagenes-home/posicion18.jpg"
import supportTwo from "../../../assets/imagenes-home/posicion19.jpg"
import imageThree from "../../../assets/imagenes-home/posicion20.jpg"
import supportThree from "../../../assets/imagenes-home/posicion21.jpg"
import { useI18n } from '../../../app/providers/i18nContext'

function ChicamaScroller() {
  const { t } = useI18n()

  const CHICAMA_SECTIONS = [
    {
      eyebrow: t('blogChicama.scroller.sec1.eyebrow'),
      title: t('blogChicama.scroller.sec1.title'),
      paragraphs: [
        t('blogChicama.scroller.sec1.p1'),
        t('blogChicama.scroller.sec1.p2'),
      ],
      bullets: [
        t('blogChicama.scroller.sec1.b1'),
        t('blogChicama.scroller.sec1.b2'),
        t('blogChicama.scroller.sec1.b3'),
      ],
      facts: [
        { label: t('blogChicama.scroller.sec1.f1Label'), value: t('blogChicama.scroller.sec1.f1Value') },
        { label: t('blogChicama.scroller.sec1.f2Label'), value: t('blogChicama.scroller.sec1.f2Value') },
      ],
      image: imageOne,
      caption: t('blogChicama.scroller.sec1.caption1'),
      supportImage: supportOne,
      supportCaption: t('blogChicama.scroller.sec1.caption2'),
    },
    {
      eyebrow: t('blogChicama.scroller.sec2.eyebrow'),
      title: t('blogChicama.scroller.sec2.title'),
      paragraphs: [
        t('blogChicama.scroller.sec2.p1'),
        t('blogChicama.scroller.sec2.p2'),
      ],
      bullets: [
        t('blogChicama.scroller.sec2.b1'),
        t('blogChicama.scroller.sec2.b2'),
        t('blogChicama.scroller.sec2.b3'),
      ],
      facts: [
        { label: t('blogChicama.scroller.sec2.f1Label'), value: t('blogChicama.scroller.sec2.f1Value') },
        { label: t('blogChicama.scroller.sec2.f2Label'), value: t('blogChicama.scroller.sec2.f2Value') },
      ],
      image: imageTwo,
      caption: t('blogChicama.scroller.sec2.caption1'),
      supportImage: supportTwo,
      supportCaption: t('blogChicama.scroller.sec2.caption2'),
    },
    {
      eyebrow: t('blogChicama.scroller.sec3.eyebrow'),
      title: t('blogChicama.scroller.sec3.title'),
      paragraphs: [
        t('blogChicama.scroller.sec3.p1'),
        t('blogChicama.scroller.sec3.p2'),
      ],
      bullets: [
        t('blogChicama.scroller.sec3.b1'),
        t('blogChicama.scroller.sec3.b2'),
        t('blogChicama.scroller.sec3.b3'),
      ],
      facts: [
        { label: t('blogChicama.scroller.sec3.f1Label'), value: t('blogChicama.scroller.sec3.f1Value') },
        { label: t('blogChicama.scroller.sec3.f2Label'), value: t('blogChicama.scroller.sec3.f2Value') },
      ],
      image: imageThree,
      caption: t('blogChicama.scroller.sec3.caption1'),
      supportImage: supportThree,
      supportCaption: t('blogChicama.scroller.sec3.caption2'),
    },
  ]

  return (
    <ArticleScrollerBase
      eyebrow={t('blogChicama.scroller.mainEyebrow')}
      title={t('blogChicama.scroller.mainTitle')}
      description={t('blogChicama.scroller.mainDesc')}
      sections={CHICAMA_SECTIONS}
    />
  )
}
export default ChicamaScroller