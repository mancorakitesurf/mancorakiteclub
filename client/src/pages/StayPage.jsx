import StandardPage from './StandardPage.jsx'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaRegSnowflake, FaShower, FaUtensils, FaWifi } from 'react-icons/fa'
import { buildWhatsAppUrl } from '../lib/whatsapp.js'
import roomMain from '../assets/imagenes-home/posicion24.jpg'
import roomSecondary from '../assets/imagenes-home/posicion23.jpg'
import commonArea from '../assets/imagenes-home/posicion26.jpg'

function StayPage() {
  const stayMessage =
    "Hi! I'm interested in staying with you. My name is ... Dates: ... Number of guests: ..."

  return (
    <StandardPage
      title="Stay with us"
      subtitle="A calm, premium base for your time in Máncora."
      description="Premium accommodation in Máncora for kitesurfers and riders. Clean rooms with A/C, WiFi, hot water, breakfast. Calm base close to the best spots. Book direct!"
      canonicalPath="/stay"
      hreflang={{ en: '/stay', es: '/esp', default: '/' }}
    >
      <div className="space-y-10">
        <section className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-surface-dark sm:p-6 lg:p-8">
          <h2 className="font-display text-2xl text-slate-900 dark:text-white sm:text-3xl">What it is</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            Stay with us is a focused accommodation option designed for riders who want comfort,
            simplicity, and easy planning.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            Clean spaces, flexible structure, and a premium atmosphere close to your sessions.
          </p>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-surface-dark sm:p-6 lg:p-8">
          <h2 className="font-display text-2xl text-slate-900 dark:text-white sm:text-3xl">Amenities</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 p-4 dark:border-white/10">
              <FaWifi className="text-primary" />
              <span className="text-sm text-slate-700 dark:text-slate-200">WiFi</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 p-4 dark:border-white/10">
              <FaRegSnowflake className="text-primary" />
              <span className="text-sm text-slate-700 dark:text-slate-200">A/C</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 p-4 dark:border-white/10">
              <FaShower className="text-primary" />
              <span className="text-sm text-slate-700 dark:text-slate-200">Hot water</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 p-4 dark:border-white/10">
              <FaUtensils className="text-primary" />
              <span className="text-sm text-slate-700 dark:text-slate-200">
                Breakfast (TODO confirm)
              </span>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-surface-dark sm:p-6 lg:p-8">
          <h2 className="font-display text-2xl text-slate-900 dark:text-white sm:text-3xl">Location</h2>
          <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
            <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-slate-100 p-4 text-center text-sm text-slate-500 dark:border-white/20 dark:bg-slate-800/40 dark:text-slate-300">
              Map placeholder (TODO)
            </div>
            <div className="rounded-2xl border border-gray-200 p-5 dark:border-white/10">
              <p className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <FaMapMarkerAlt className="text-primary" />
                Máncora, Peru
              </p>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Exact point: TODO</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-surface-dark sm:p-6 lg:p-8">
          <h2 className="font-display text-2xl text-slate-900 dark:text-white sm:text-3xl">Gallery</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="relative h-72 overflow-hidden rounded-2xl sm:h-80 lg:h-[430px]">
              <img src={roomMain} alt="Stay main room" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
            <div className="grid gap-4">
              <div className="relative h-56 overflow-hidden rounded-2xl sm:h-[205px]">
                <img
                  src={roomSecondary}
                  alt="Stay secondary room"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
              <div className="relative h-56 overflow-hidden rounded-2xl sm:h-[205px]">
                <img src={commonArea} alt="Stay common area" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-primary/40 bg-white p-4 text-center dark:bg-surface-dark sm:p-6 lg:p-8">
          <h2 className="font-display text-2xl text-slate-900 dark:text-white sm:text-3xl">Plan your stay</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            Build your package or contact us directly on WhatsApp.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/build"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90 sm:w-auto"
            >
              Build your trip
            </Link>
            <a
              href={buildWhatsAppUrl(stayMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white sm:w-auto"
            >
              Book on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </StandardPage>
  )
}

export default StayPage
