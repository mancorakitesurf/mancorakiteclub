/**
 * Prepend language prefix to a path.
 * EN paths have no prefix; ES gets /esp, FR gets /fr.
 */
export function localizePath(path, lang) {
  if (lang === 'en') return path;
  
  // Asignamos el prefijo correcto (con la 'p' para español)
  const prefix = lang === 'es' ? '/esp' : '/fr';
  
  // Nos aseguramos de que la ruta siempre empiece con '/'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return normalizedPath === '/' ? prefix : `${prefix}${normalizedPath}`;
}