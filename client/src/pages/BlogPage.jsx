import SEO from '../components/SEO.jsx'
import BlogHero from '../sections/blog/BlogHero/BlogHero.jsx'
import BlogLayout from '../sections/blog/BlogLayout/BlogLayout.jsx'
import { useI18n } from '../app/providers/i18nContext.js'
import { localizePath } from '../lib/routes.js'

function BlogPage() {
  const { currentLang } = useI18n()

  return (
    <>
      <SEO
        titleKey="seo.blogTitle"
        descKey="seo.blogDesc"
        titleFallback="Blog | Mancora Kite Club"
        descFallback="Kitesurfing, wingfoil, and surf blog from Máncora, Peru. Read guides, spot breakdowns, trip reports, and coaching. Stay updated with the best wind and waves."
        canonicalPath={localizePath('/blog', currentLang)}
        hreflang={{ en: '/blog', es: '/esp/blog', fr: '/fr/blog', default: '/blog' }}
      />

      <BlogHero />
      <BlogLayout />
    </>
  )
}

export default BlogPage
