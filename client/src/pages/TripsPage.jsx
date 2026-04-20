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
        descFallback="Discover kitesurf trips in the best spots of northern Peru. Full-day, 3-day, and 7-day packages available."
        canonicalPath="/trips"
        hreflang={{ en: '/trips', es: '/esp/viajes', default: '/' }}
      />
      <section className="bg-background-light py-24 dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Trips</p>
            <h1 className="mt-4 font-display text-4xl text-slate-900 dark:text-white md:text-5xl">
              Choose your trip
            </h1>
            <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
              Four core formats with stay included.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {trips.map((trip) => {
              const whatsappHref = buildWhatsAppUrl(trip.whatsappMessage)

              return (
                <article
                  key={trip.slug}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-surface-dark"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {trip.subtitle}
                  </p>
                  <h2 className="mt-3 font-display text-2xl text-slate-900 dark:text-white">{trip.title}</h2>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{trip.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      to={trip.path}
                      className="inline-flex rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      View details
                    </Link>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary dark:border-slate-600 dark:text-slate-200"
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
              className="inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
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
