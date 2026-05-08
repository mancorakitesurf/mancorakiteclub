import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n } from '../app/providers/i18nContext.jsx'
import { setSeoTags } from '../lib/seo.js'

function SEO({
  title,
  description,
  titleKey = 'seo.homeTitle',
  descKey = 'seo.homeDesc',
  titleFallback = 'Máncora Kite Club',
  descFallback = 'Escuela de Kitesurf y Wingfoil en Máncora, Perú',
}) {
  const { t } = useI18n()
  const location = useLocation()

  const resolvedTitle = title ?? (t(titleKey) !== titleKey ? t(titleKey) : titleFallback)
  const resolvedDescription = description ?? (t(descKey) !== descKey ? t(descKey) : descFallback)

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
      canonicalPath: location.pathname,
      hreflang: dynamicHreflang,
    })
  }, [resolvedTitle, resolvedDescription, location.pathname])

  return null
}

export default SEO