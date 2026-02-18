function ensureMetaDescription() {
  let descriptionTag = document.querySelector('meta[name="description"]')

  if (!descriptionTag) {
    descriptionTag = document.createElement('meta')
    descriptionTag.setAttribute('name', 'description')
    document.head.appendChild(descriptionTag)
  }

  return descriptionTag
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

export function setSeoTags({ title, description, canonicalPath, hreflang }) {
  if (title) {
    document.title = title
  }

  const descriptionTag = ensureMetaDescription()
  descriptionTag.setAttribute('content', description || 'TODO: contenido real')

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

