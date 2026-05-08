/**
 * Prepend language prefix to a path.
 * EN paths have no prefix; ES gets /esp, FR gets /fr.
 */
export function localizePath(path, lang) {
  if (lang === 'en') return path
  const prefix = `/${lang}`
  return path === '/' ? prefix : `${prefix}${path}`
}

/** Aliases for backward compatibility */
export const EN_TO_ES_ROUTE_MAP = {
  '/': '/esp',
}

export const ES_TO_EN_ROUTE_MAP = Object.fromEntries(
  Object.entries(EN_TO_ES_ROUTE_MAP).map(([enPath, esPath]) => [esPath, enPath]),
)

export function normalizePath(pathname = '/') {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname || '/'
}

export function isSpanishPath(pathname = '/') {
  const normalized = normalizePath(pathname)
  return normalized.startsWith('/esp')
}

export function isFrenchPath(pathname = '/') {
  const normalized = normalizePath(pathname)
  return normalized.startsWith('/fr')
}

export function getLanguage(pathname = '/') {
  const normalized = normalizePath(pathname)
  if (normalized.startsWith('/esp')) return 'es'
  if (normalized.startsWith('/fr')) return 'fr'
  return 'en'
}

export function getLanguageSwitchPath(pathname = '/') {
  const normalized = normalizePath(pathname)
  const currentLang = getLanguage(normalized)

  // Strip the current language prefix
  const pathWithoutLang = normalized.replace(/^\/(?:esp|fr)(\/|$)/, (_, slash) => slash || '/') || '/'

  // Toggle to the next language (en -> es -> fr -> en)
  const nextLang = currentLang === 'en' ? 'es' : currentLang === 'es' ? 'fr' : 'en'

  return localizePath(pathWithoutLang, nextLang)
}
