// Este archivo ha sido simplificado. 
// La lógica de rutas multi-idioma ahora vive directamente en i18nContext.js y router.jsx
// Se mantienen estas funciones por compatibilidad con código existente.

export function normalizePath(pathname = '/') {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }
  return pathname || '/'
}

// Actualizado para soportar el nuevo estándar de prefijos
export function isSpanishPath(pathname = '/') {
  const normalized = normalizePath(pathname)
  return normalized === '/esp' || normalized.startsWith('/esp/')
}

export function isFrenchPath(pathname = '/') {
  const normalized = normalizePath(pathname)
  return normalized === '/fr' || normalized.startsWith('/fr/')
}

// Ya no necesitamos los mapas de diccionarios, 
// el contexto hace el cambio dinámico.