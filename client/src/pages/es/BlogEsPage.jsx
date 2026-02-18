import StandardPage from '../StandardPage.jsx'

function BlogEsPage() {
  return (
    <StandardPage
      title="Mancora Kite Club | Blog"
      description="TODO: contenido real"
      canonicalPath="/blog/esp"
      hreflang={{ en: '/blog', es: '/blog/esp', default: '/' }}
    />
  )
}

export default BlogEsPage
