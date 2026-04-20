import { createContext, useContext } from 'react'

export const I18nContext = createContext({
  language: 'en',           // 'en' | 'es' | 'fr'
  currentLang: 'en',        // Alias para compatibilidad con Header
  isSpanish: false,         // boolean (mantener para no romper código existente)
  isFrench: false,          // boolean nuevo
  changeLanguage: () => {}, // Función que manipula la URL y navega
  t: () => '',              // Función de traducción: t('key.nested') → string
})

export function useI18n() {
  return useContext(I18nContext)
}
