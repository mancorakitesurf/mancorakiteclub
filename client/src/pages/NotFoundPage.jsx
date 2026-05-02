import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

function NotFoundPage() {
  return (
    <>
      <SEO
        titleKey="seo.notFoundTitle"
        descKey="seo.notFoundDesc"
        titleFallback="Mancora Kite Club | 404"
        descFallback="The page you are looking for does not exist."
        canonicalPath="/"
        hreflang={{ en: '/', es: '/esp', default: '/' }}
      />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#031015] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(42,157,143,0.22),transparent_38%),linear-gradient(180deg,rgba(3,16,21,0.9),rgba(3,16,21,1))]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary sm:text-sm">
            Lost In The Wind
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            404 &mdash; You&apos;ve gone off route
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
            This page doesn&apos;t exist or the wind took you somewhere else.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
            Let&apos;s get you back to where the real adventure begins.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_28px_rgba(42,157,143,0.35)] sm:w-auto"
            >
              Back to Home
            </Link>
            <Link
              to="/trips"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-primary/60 bg-white/5 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/10 hover:text-white sm:w-auto"
            >
              Explore Trips
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
