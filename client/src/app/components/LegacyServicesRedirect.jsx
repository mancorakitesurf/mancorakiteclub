import { Navigate, useLocation } from 'react-router-dom'

function LegacyServicesRedirect() {
  const { pathname } = useLocation()
  const localizedPath = pathname.startsWith('/fr') || pathname.endsWith('/fr')
    ? '/fr/services'
    : pathname.startsWith('/esp') || pathname.endsWith('/esp')
      ? '/esp/services'
      : '/services'

  return <Navigate to={localizedPath} replace />
}

export default LegacyServicesRedirect
