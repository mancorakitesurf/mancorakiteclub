import StandardPage from '../StandardPage.jsx'

function BlogEsPage() {
  return (
    <StandardPage
      title="Mancora Kite Club | Blog"
      description="Kitesurfing and wingfoiling blog in Máncora, Peru. Spot guides, technique tips, travel information, and news for riders of all levels. Be the first to know."
      canonicalPath="/blog/esp"
      hreflang={{ en: '/blog', es: '/blog/esp', default: '/' }}
    />
  )
}

export default BlogEsPage
