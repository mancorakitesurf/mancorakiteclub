/**
 * Rutas y utilidades de navegación para Máncora Kite Club.
 * Sistema de prefijos: EN (raíz), ES (/esp), FR (/fr).
 */

/**
 * Normaliza una ruta eliminando la barra final (slash) si existe.
 */
export function normalizePath(pathname = '/') {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }
  return pathname || '/'
}

/**
 * Agrega el prefijo de idioma a una ruta.
 */
export function localizePath(path, lang) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  if (lang === 'en' || !lang) return cleanPath
  
  const prefix = lang === 'fr' ? '/fr' : '/esp'
  
  // Evitar duplicar prefijos si ya existen
  if (cleanPath.startsWith(prefix)) return cleanPath
  
  return cleanPath === '/' ? prefix : `${prefix}${cleanPath}`
}

/**
 * Detecta el idioma actual basado en el pathname.
 */
export function getLanguage(pathname = '/') {
  const normalized = normalizePath(pathname)
  if (normalized === '/esp' || normalized.startsWith('/esp/')) return 'es'
  if (normalized === '/fr' || normalized.startsWith('/fr/')) return 'fr'
  return 'en'
}

export function isSpanishPath(pathname = '/') {
  return getLanguage(pathname) === 'es'
}

export function isFrenchPath(pathname = '/') {
  return getLanguage(pathname) === 'fr'
}

// Aliases para compatibilidad con código antiguo
export const EN_TO_ES_ROUTE_MAP = { '/': '/esp' }
export const ES_TO_EN_ROUTE_MAP = { '/esp': '/' }