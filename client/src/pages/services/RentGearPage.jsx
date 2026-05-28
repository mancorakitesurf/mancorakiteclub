import { useI18n } from '../../app/providers/i18nContext.js'
import { localizePath } from '../../lib/routes.js'
import { Navigate } from 'react-router-dom'
function RentGearPage() {
  const { currentLang } = useI18n()

  return <Navigate to={localizePath('/services', currentLang)} replace />
}

export default RentGearPage
