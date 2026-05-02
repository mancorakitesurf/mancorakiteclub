import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import PremiumBlogArticle from "../../components/blog/PremiumBlogArticle.jsx"
import { getPremiumBlogPostBySlug } from "../../data/posts.js"
import { POSTS as LEGACY_POSTS } from "../../sections/blog/BlogLayout/blogContent.js"
import ChicamaPage from "./ChicamaPage.jsx"
import MancoraVsLobitosPage from "./MancoraVsLobitosPage.jsx"
import PeruKitesurfPage from "./PeruKitesurfPage.jsx"
import PacasmayoPage from "./PacasmayoPage.jsx"

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
  const StructuredComponent = STRUCTURED_PAGE_BY_SLUG[slug]
  const premiumPost = getPremiumBlogPostBySlug(slug)
  const legacyPost = LEGACY_POSTS.find((post) => post.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (StructuredComponent) {
    return <StructuredComponent />
  }

  if (legacyPost) {
    const LegacyComponent = legacyPost.component

    return <LegacyComponent />
  }

  if (premiumPost) {
    return <PremiumBlogArticle post={premiumPost} />
  }

  return (
    <section className="bg-slate-50 px-4 py-16 text-center text-slate-900 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-700">Post not found</p>
        <h1 className="mt-4 font-display text-2xl text-slate-950 sm:text-3xl md:text-4xl">This article is not available.</h1>
        <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
          The article may have moved or the slug may no longer be active.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/blog"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-cyan-700 sm:w-auto"
          >
            Back to Blog
          </Link>
          <Link
            to="/"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-800 transition hover:border-cyan-700 hover:text-cyan-700 sm:w-auto"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPostPage
