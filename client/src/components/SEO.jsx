import { useEffect } from 'react'
import { setSeoTags } from '../lib/seo.js'

function SEO({ title, description, canonicalPath, hreflang }) {
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
