import ArticleFinalCallToActionBase from "../../blogShared/ArticleFinalCallToActionBase.jsx"
import ctaImage from "../../../assets/imagenes-home/posicion20.jpg"
import { useI18n } from '../../../app/providers/i18nContext'

function PacasmayoFinalCallToAction() {
  const { t } = useI18n()
  return (
    <ArticleFinalCallToActionBase
      eyebrow={t('blogPacasmayo.cta.eyebrow')}
      title={t('blogPacasmayo.cta.title')}
      description={t('blogPacasmayo.cta.desc')}
      image={ctaImage}
      buttonLabel={t('blogPacasmayo.cta.btn')}
    />
  )
}
export default PacasmayoFinalCallToAction