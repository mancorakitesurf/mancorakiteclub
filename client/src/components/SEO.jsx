import { useEffect } from 'react'
import { useI18n } from '../app/providers/i18nContext.js'
import { setSeoTags } from '../lib/seo.js'

/**
 * Componente SEO mejorado con soporte multi-idioma
 * Usa el sistema i18n (t()) para traducciones dinámicas de meta tags
 *
 * @param {string} titleKey - Clave del JSON para el título (ej: 'seo.homeTitle')
 * @param {string} descKey - Clave del JSON para la descripción (ej: 'seo.homeDesc')
 * @param {string} titleFallback - Fallback si la key no existe
 * @param {string} descFallback - Fallback si la key no existe
 * @param {string} canonicalPath - Ruta canónica relativa (ej: '/', '/trips')
 * @param {object} hreflang - Objeto con rutas por idioma {en: '/', es: '/esp', default: '/'}
 */
function SEO({
  titleKey = 'seo.homeTitle',
  descKey = 'seo.homeDesc',
  titleFallback = 'Máncora Kite Club',
  descFallback = 'Escuela de Kitesurf y Wingfoil en Máncora, Perú',
  canonicalPath = '/',
  hreflang = { en: '/', es: '/esp', default: '/' },
}) {
  const { t } = useI18n()

  // Obtener título y descripción del i18n o fallback
  const title = t(titleKey) !== titleKey ? t(titleKey) : titleFallback
  const description = t(descKey) !== descKey ? t(descKey) : descFallback

  useEffect(() => {
    setSeoTags({
      title,
      description,
      canonicalPath,
      hreflang,
    })
  }, [title, description, canonicalPath, hreflang])

  return null
}

export default SEO

