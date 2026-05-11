import ArticleFinalCallToActionBase from "../../blogShared/ArticleFinalCallToActionBase.jsx"
import ctaImage from "../../../assets/imagenes-home/posicion23.jpg"
import { useI18n } from '../../../app/providers/i18nContext'

function PeruKitesurfFinalCallToAction() {
  const { t } = useI18n()

  return (
    <ArticleFinalCallToActionBase
      eyebrow={t('blogNorthVsSouth.cta.eyebrow')}
      title={t('blogNorthVsSouth.cta.title')}
      description={t('blogNorthVsSouth.cta.desc')}
      image={ctaImage}
      buttonLabel={t('blogNorthVsSouth.cta.btn')}
    />
  )
}

export default PeruKitesurfFinalCallToAction