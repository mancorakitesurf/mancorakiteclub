import SEO from '../../components/SEO.jsx'
import { buildWhatsAppUrl } from '../../lib/whatsapp.js'

function formatUsd(value) {
  return `$${value}`
}

function TripDetailPage({ trip }) {
  if (!trip) return null

  const whatsappHref = buildWhatsAppUrl(trip.whatsappMessage)

  return (
    <>
      <SEO
        title={`${trip.title} | Mancora Kite Club`}
        description={trip.summary}
        canonicalPath={trip.path}
        hreflang={{ en: trip.path, es: '/esp', default: '/' }}
      />

      <section className="bg-background-light dark:bg-background-dark">
        <div className="relative h-[62vh] min-h-[420px]">
          <img src={trip.heroImage} alt={trip.heroAlt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {trip.subtitle}
              </p>
              <h1 className="mt-4 font-display text-4xl text-white md:text-6xl">{trip.title}</h1>
              <p className="mt-4 max-w-2xl text-sm text-white/85 md:text-base">{trip.summary}</p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-light py-20 dark:bg-background-dark">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-white/10 dark:bg-surface-dark">
            <h2 className="font-display text-2xl text-slate-900 dark:text-white">
              This trip is for you if...
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {trip.forYouIf.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-white/10 dark:bg-surface-dark">
            <h2 className="font-display text-2xl text-slate-900 dark:text-white">What&apos;s included</h2>
            <ul className="mt-4 grid gap-2 text-sm text-slate-600 dark:text-slate-300 md:grid-cols-2">
              {trip.includes.slice(0, 8).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-white/10 dark:bg-surface-dark">
            <h2 className="font-display text-2xl text-slate-900 dark:text-white">Choose duration</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {trip.durations.map((duration) => (
                <span
                  key={duration}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 dark:border-slate-600 dark:text-slate-200"
                >
                  {duration}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-white/10 dark:bg-surface-dark">
            <h2 className="font-display text-2xl text-slate-900 dark:text-white">Pricing</h2>
            <div className="mt-5 overflow-hidden rounded-lg border border-gray-200 dark:border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <tr>
                    <th className="px-4 py-3">Duration</th>
                    <th className="px-4 py-3">1 person</th>
                    <th className="px-4 py-3">2 people</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 dark:text-slate-200">
                  <tr className="border-t border-gray-200 dark:border-white/10">
                    <td className="px-4 py-3">3 nights</td>
                    <td className="px-4 py-3">{formatUsd(trip.pricing.onePerson.threeNights)}</td>
                    <td className="px-4 py-3">{formatUsd(trip.pricing.twoPeople.threeNights)}</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-white/10">
                    <td className="px-4 py-3">7 nights</td>
                    <td className="px-4 py-3">{formatUsd(trip.pricing.onePerson.sevenNights)}</td>
                    <td className="px-4 py-3">{formatUsd(trip.pricing.twoPeople.sevenNights)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-white/10 dark:bg-surface-dark">
            <h2 className="font-display text-2xl text-slate-900 dark:text-white">Add-ons</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {trip.addOns.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-white/10 dark:bg-surface-dark">
            <h2 className="font-display text-2xl text-slate-900 dark:text-white">FAQ</h2>
            <div className="mt-4 space-y-4">
              {trip.faq.slice(0, 4).map((item) => (
                <div key={item.question}>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{item.question}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-primary/40 bg-white p-10 text-center dark:bg-surface-dark">
            <h2 className="font-display text-3xl text-slate-900 dark:text-white">Ready to book?</h2>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-lg bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default TripDetailPage
