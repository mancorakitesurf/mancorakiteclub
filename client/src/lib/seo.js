function ensureMetaTag(selector, attributeName, attributeValue) {
  let tag = document.querySelector(selector)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attributeName, attributeValue)
    document.head.appendChild(tag)
  }

  return tag
}

function ensureLinkTag(selector, rel) {
  let linkTag = document.querySelector(selector)

  if (!linkTag) {
    linkTag = document.createElement('link')
    linkTag.setAttribute('rel', rel)
    document.head.appendChild(linkTag)
  }

  return linkTag
}

function toAbsoluteUrl(path) {
  const origin = window.location.origin
  return new URL(path, origin).toString()
}

export function setSeoTags({ title, description, image, canonicalPath, hreflang }) {
  if (title) {
    document.title = title
  }

  // Meta description
  const descriptionTag = ensureMetaTag('meta[name="description"]', 'name', 'description')
  descriptionTag.setAttribute('content', description || 'TODO: contenido real')

  // Open Graph tags
  const ogTitle = ensureMetaTag('meta[property="og:title"]', 'property', 'og:title')
  ogTitle.setAttribute('content', title || 'Máncora Kite Club')

  const ogDescription = ensureMetaTag('meta[property="og:description"]', 'property', 'og:description')
  ogDescription.setAttribute('content', description || 'Escuela de Kitesurf y Wingfoil en Máncora, Perú')

  const ogImage = ensureMetaTag('meta[property="og:image"]', 'property', 'og:image')
  ogImage.setAttribute('content', image || 'https://www.mancorakiteclub.com/assets/main-CpaNiQFq.webp')

  const ogUrl = ensureMetaTag('meta[property="og:url"]', 'property', 'og:url')
  ogUrl.setAttribute('content', canonicalPath ? toAbsoluteUrl(canonicalPath) : window.location.href)

  const ogType = ensureMetaTag('meta[property="og:type"]', 'property', 'og:type')
  ogType.setAttribute('content', 'website')

  const ogSiteName = ensureMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name')
  ogSiteName.setAttribute('content', 'Máncora Kite Club')

  // Twitter Card tags
  const twitterCard = ensureMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card')
  twitterCard.setAttribute('content', 'summary_large_image')

  const twitterTitle = ensureMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title')
  twitterTitle.setAttribute('content', title || 'Máncora Kite Club')

  const twitterDescription = ensureMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description')
  twitterDescription.setAttribute('content', description || 'Escuela de Kitesurf y Wingfoil en Máncora, Perú')

  const twitterImage = ensureMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image')
  twitterImage.setAttribute('content', image || 'https://www.mancorakiteclub.com/assets/main-CpaNiQFq.webp')

  if (canonicalPath) {
    const canonicalTag = ensureLinkTag('link[rel="canonical"]', 'canonical')
    canonicalTag.setAttribute('href', toAbsoluteUrl(canonicalPath))
  }

  const hreflangEn = ensureLinkTag('link[rel="alternate"][hreflang="en"]', 'alternate')
  hreflangEn.setAttribute('hreflang', 'en')
  hreflangEn.setAttribute('href', toAbsoluteUrl(hreflang.en))

  const hreflangEs = ensureLinkTag('link[rel="alternate"][hreflang="es"]', 'alternate')
  hreflangEs.setAttribute('hreflang', 'es')
  hreflangEs.setAttribute('href', toAbsoluteUrl(hreflang.es))

  const hreflangDefault = ensureLinkTag(
    'link[rel="alternate"][hreflang="x-default"]',
    'alternate',
  )
  hreflangDefault.setAttribute('hreflang', 'x-default')
  hreflangDefault.setAttribute('href', toAbsoluteUrl(hreflang.default))
}

