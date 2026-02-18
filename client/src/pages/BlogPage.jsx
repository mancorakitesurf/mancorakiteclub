import StandardPage from './StandardPage.jsx'

function BlogPage() {
  return (
    <StandardPage
      title="Mancora Kite Club | Blog"
      description="TODO: contenido real"
      canonicalPath="/blog"
      hreflang={{ en: '/blog', es: '/blog/esp', default: '/' }}
    />
  )
}

export default BlogPage
