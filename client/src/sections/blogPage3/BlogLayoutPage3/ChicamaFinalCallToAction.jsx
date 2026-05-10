import ArticleFinalCallToActionBase from "../../blogShared/ArticleFinalCallToActionBase.jsx"
import ctaImage from "../../../assets/imagenes-home/posicion24.jpg"
import { useI18n } from '../../../app/providers/i18nContext'

function ChicamaFinalCallToAction() {
  const { t } = useI18n()
  return (
    <ArticleFinalCallToActionBase
      eyebrow={t('blogChicama.cta.eyebrow')}
      title={t('blogChicama.cta.title')}
      description={t('blogChicama.cta.desc')}
      image={ctaImage}
      buttonLabel={t('blogChicama.cta.btn')}
    />
  )
}
export default ChicamaFinalCallToAction