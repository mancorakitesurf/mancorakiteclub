import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import PremiumBlogArticle from "../../components/blog/PremiumBlogArticle.jsx"
import { getPremiumBlogPostBySlug } from "../../data/posts.js"
import { POSTS as LEGACY_POSTS } from "../../sections/blog/BlogLayout/blogContent.js"
import ChicamaPage from "./ChicamaPage.jsx"
import MancoraVsLobitosPage from "./MancoraVsLobitosPage.jsx"
import PeruKitesurfPage from "./PeruKitesurfPage.jsx"
import PacasmayoPage from "./PacasmayoPage.jsx"
import SEO from "../../components/SEO.jsx"
import { useI18n } from "../../app/providers/i18nContext"

const STRUCTURED_PAGE_BY_SLUG = {
  "chicama-peru-surf-trip": ChicamaPage,
  "chicama-peru-longest-wave-surf-trip": ChicamaPage,
  "mancora-vs-lobitos-vs-cabo-blanco": MancoraVsLobitosPage,
  "mancora-vs-lobitos-kitesurf-comparison": MancoraVsLobitosPage,
  "peru-kitesurf-north-vs-south": PeruKitesurfPage,
  "peru-kitesurf-north-vs-south-spots-seasons-wind": PeruKitesurfPage,
  "pacasmayo-peru-the-ultimate-point-break-surf-guide": PacasmayoPage,
  "pacasmayo-peru-point-break-guide": PacasmayoPage,
}

function BlogPostPage() {
  const { slug } = useParams()
  const { t } = useI18n()
  const StructuredComponent = STRUCTURED_PAGE_BY_SLUG[slug]
  const premiumPost = getPremiumBlogPostBySlug(slug)
  const legacyPost = LEGACY_POSTS.find((post) => post.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (StructuredComponent) {
    let structuredTitleKey = ""
    let structuredDescKey = ""
    let structuredTitleFallback = ""
    let structuredDescFallback = ""
    switch (slug) {
      case "chicama-peru-surf-trip":
      case "chicama-peru-longest-wave-surf-trip":
        structuredTitleKey = "seo.blogChicamaTitle"
        structuredDescKey = "seo.blogChicamaDesc"
        structuredTitleFallback = "Chicama, Peru: The Longest Wave | Surf Guide"
        structuredDescFallback = "Complete guide to Chicama, the world's longest left-hand wave. Best seasons, accommodation, and tips for surfers."
        break
      case "mancora-vs-lobitos-vs-cabo-blanco":
      case "mancora-vs-lobitos-kitesurf-comparison":
        structuredTitleKey = "seo.blogMancoraVsLobitosTitle"
        structuredDescKey = "seo.blogMancoraVsLobitosDesc"
        structuredTitleFallback = "Mancora vs Lobitos vs Cabo Blanco: Best Kitesurf Spot"
        structuredDescFallback = "Compare the top wave kitesurf spots in Peru – wind, waves, season and vibe."
        break
      case "peru-kitesurf-north-vs-south":
      case "peru-kitesurf-north-vs-south-spots-seasons-wind":
        structuredTitleKey = "seo.blogPeruKitesurfTitle"
        structuredDescKey = "seo.blogPeruKitesurfDesc"
        structuredTitleFallback = "Peru Kitesurf: North vs South – Wind & Spot Guide"
        structuredDescFallback = "North vs South Peru for kitesurfing: wind conditions, best spots, seasons, and expert recommendations."
        break
      case "pacasmayo-peru-the-ultimate-point-break-surf-guide":
      case "pacasmayo-peru-point-break-guide":
        structuredTitleKey = "seo.blogPacasmayoTitle"
        structuredDescKey = "seo.blogPacasmayoDesc"
        structuredTitleFallback = "Pacasmayo Peru: Ultimate Point Break Surf Guide"
        structuredDescFallback = "Everything about Pacasmayo's legendary point break: swell, winds, tides and local tips."
        break
      default:
        structuredTitleKey = "seo.blogTitle"
        structuredDescKey = "seo.blogDesc"
        structuredTitleFallback = "Kitesurf & Surf Peru | Expert Guide"
        structuredDescFallback = "Discover the best kitesurf and surf spots in Peru. Detailed guides, tips and local knowledge."
    }
    return (
      <>
        <SEO titleKey={structuredTitleKey} descKey={structuredDescKey} titleFallback={structuredTitleFallback} descFallback={structuredDescFallback} />
        <StructuredComponent />
      </>
    )
  }

  if (legacyPost) {
    const LegacyComponent = legacyPost.component
    return (
      <>
        <SEO title={legacyPost.metaTitle} description={legacyPost.metaDescription} />
        <LegacyComponent />
      </>
    )
  }

  if (premiumPost) {
    const premiumTitle = premiumPost.metaTitle || premiumPost.title || "Premium Kitesurf Article"
    const premiumDesc = premiumPost.metaDescription || premiumPost.excerpt || "Artículo exclusivo de kitesurf con técnicas avanzadas y spots secretos."
    return (
      <>
        <SEO title={premiumTitle} description={premiumDesc} />
        <PremiumBlogArticle post={premiumPost} />
      </>
    )
  }

  return (
    <>
      <SEO 
        titleKey="seo.blogPostNotFoundTitle"
        descKey="seo.blogPostNotFoundDesc"
        titleFallback="Article Not Found | Kite Blog" 
        descFallback="The article you are looking for does not exist or may have been moved. Check our latest blog posts." 
      />
      <section className="bg-slate-50 px-4 py-16 text-center text-slate-900 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-700">{t('blogPost.notFoundLabel')}</p>
          <h1 className="mt-4 font-display text-2xl text-slate-950 sm:text-3xl md:text-4xl">{t('blogPost.notFoundTitle')}</h1>
          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
            {t('blogPost.notFoundDesc')}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/blog"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-cyan-700 sm:w-auto"
            >
              {t('blogPost.backToBlog')}
            </Link>
            <Link
              to="/"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-800 transition hover:border-cyan-700 hover:text-cyan-700 sm:w-auto"
            >
              {t('blogPost.goHome')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPostPage