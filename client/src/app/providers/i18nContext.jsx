import { createContext, useContext } from 'react'

/**
 * Context de internacionalización (i18n)
 * Provee: language, currentLang, isSpanish, isFrench, changeLanguage, t()
 */
export const I18nContext = createContext(null)

/**
 * Hook para consumir el contexto i18n
 * @returns {{ language: string, currentLang: string, isSpanish: boolean, isFrench: boolean, changeLanguage: function, t: function }}
 */
export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
