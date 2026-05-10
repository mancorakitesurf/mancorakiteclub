import ArticleFinalCallToActionBase from "../../blogShared/ArticleFinalCallToActionBase.jsx"
import ctaImage from "../../../assets/imagenes-home/posicion5.jpg"
import { useI18n } from '../../../app/providers/i18nContext'

function MancoraVsLobitosFinalCallToAction() {
  const { t } = useI18n()

  return (
    <ArticleFinalCallToActionBase
      eyebrow={t('blogMancoraVsLobitos.cta.eyebrow')}
      title={t('blogMancoraVsLobitos.cta.title')}
      description={t('blogMancoraVsLobitos.cta.desc')}
      image={ctaImage}
      buttonLabel={t('blogMancoraVsLobitos.cta.btn')}
    />
  )
}
export default MancoraVsLobitosFinalCallToAction