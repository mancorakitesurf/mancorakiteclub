import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n } from '../app/providers/i18nContext.jsx'
import { seoImages } from '../config/images.js'
import { setSeoTags } from '../lib/seo.js'

/**
 * Componente SEO con soporte multi-idioma automático.
 * Calcula automáticamente canonicalPath y hreflang basados en la URL actual.
 */
function SEO({
  title,
  description,
  image = seoImages.defaultOpenGraph,
  titleKey = 'seo.homeTitle',
  descKey = 'seo.homeDesc',
  titleFallback = 'Máncora Kite Club',
  descFallback = 'Escuela de Kitesurf y Wingfoil en Máncora, Perú',
}) {
  const { t } = useI18n()
  const location = useLocation()

  // Prioridad: Prop title/description > Traducción t(key) > Fallback
  const resolvedTitle = title ?? (t(titleKey) !== titleKey ? t(titleKey) : titleFallback)
  const resolvedDescription = description ?? (t(descKey) !== descKey ? t(descKey) : descFallback)

  // Lógica para generar hreflangs automáticos
  const basePath = location.pathname.replace(/^\/(esp|fr)(\/|$)/, '/');
  const cleanPath = basePath === '/' ? '' : basePath;

  const dynamicHreflang = {
    en: cleanPath || '/',
    es: `/esp${cleanPath}`,
    fr: `/fr${cleanPath}`,
    default: cleanPath || '/'
  };

  useEffect(() => {
    setSeoTags({
      title: resolvedTitle,
      description: resolvedDescription,
      image,
      canonicalPath: location.pathname,
      hreflang: dynamicHreflang,
    })
  }, [resolvedTitle, resolvedDescription, image, location.pathname])

  return null
}

export default SEO