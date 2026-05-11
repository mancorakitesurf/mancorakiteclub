import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { useI18n } from '../app/providers/i18nContext.jsx'

function NotFoundPage() {
  const { t, currentLang } = useI18n()

  const homePath = `/home${currentLang === 'en' ? '' : currentLang === 'fr' ? '/fr' : '/esp'}`
  const tripsPath = `/trips${currentLang === 'en' ? '' : currentLang === 'fr' ? '/fr' : '/esp'}`

  return (
    <>
      <SEO
        titleKey="seo.notFoundTitle"
        descKey="seo.notFoundDesc"
        titleFallback="Mancora Kite Club | 404"
        descFallback="Page not found. The kitesurfing spot, trip, or page you are looking for does not exist. Return to home and keep riding with Máncora Kite Club in Peru."
      />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#031015] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(42,157,143,0.22),transparent_38%),linear-gradient(180deg,rgba(3,16,21,0.9),rgba(3,16,21,1))]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary sm:text-sm">
            {t('notFound.label')}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {t('notFound.title')}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
            {t('notFound.subtitle')}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
            {t('notFound.desc')}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to={homePath}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_28px_rgba(42,157,143,0.35)] sm:w-auto"
            >
              {t('common.backToHome')}
            </Link>
            <Link
              to={tripsPath}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-primary/60 bg-white/5 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/10 hover:text-white sm:w-auto"
            >
              {t('common.exploreTrips')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
