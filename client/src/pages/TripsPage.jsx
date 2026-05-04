import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { trips } from '../content/trips.js'
import { buildWhatsAppUrl } from '../lib/whatsapp.js'

function TripsPage() {
  return (
    <>
      <SEO
        titleKey="seo.tripsTitle"
        descKey="seo.tripsDesc"
        titleFallback="Kitesurf Trips in Máncora, Peru | Core Packages"
        descFallback="Discover kitesurfing, wingfoil, and surf trips in northern Peru. Full-day, 3-day, and 7-day packages with accommodation, coaching, and gear. Book your trip now."
        canonicalPath="/trips"
        hreflang={{ en: '/trips', es: '/esp/viajes', default: '/' }}
      />
      <section className="bg-background-light py-16 sm:py-20 lg:py-28 dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Trips</p>
            <h1 className="mt-4 font-display text-2xl text-slate-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Choose your trip
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              Four core formats with stay included.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {trips.map((trip) => {
              const whatsappHref = buildWhatsAppUrl(trip.whatsappMessage)

              return (
                <article
                  key={trip.slug}
                  className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-surface-dark sm:p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {trip.subtitle}
                  </p>
                  <h2 className="mt-3 font-display text-2xl text-slate-900 dark:text-white">{trip.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">{trip.summary}</p>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      to={trip.path}
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white sm:w-auto"
                    >
                      View details
                    </Link>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary dark:border-slate-600 dark:text-slate-200 sm:w-auto"
                    >
                      Book on WhatsApp
                    </a>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-10">
            <Link
              to="/build"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90 sm:w-auto"
            >
              Build your trip
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default TripsPage
