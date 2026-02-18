import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { isSpanishPath } from '../../lib/routes.js'
import { I18nContext } from './i18nContext.js'

export function I18nProvider({ children }) {
  const location = useLocation()
  const isSpanish = isSpanishPath(location.pathname)

  const contextValue = useMemo(
    () => ({
      isSpanish,
      language: isSpanish ? 'es' : 'en',
    }),
    [isSpanish],
  )

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
}
