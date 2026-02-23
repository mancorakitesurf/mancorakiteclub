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
      description="Accommodation options for your Máncora stay."
      canonicalPath="/stay"
      hreflang={{ en: '/stay', es: '/esp', default: '/' }}
    >
      <div className="space-y-10">
        <section className="rounded-xl border border-gray-200 bg-white p-8 dark:border-white/10 dark:bg-surface-dark">
          <h2 className="font-display text-2xl text-slate-900 dark:text-white">What it is</h2>
          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
            Stay with us is a focused accommodation option designed for riders who want comfort,
            simplicity, and easy planning.
          </p>
          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
            Clean spaces, flexible structure, and a premium atmosphere close to your sessions.
          </p>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-8 dark:border-white/10 dark:bg-surface-dark">
          <h2 className="font-display text-2xl text-slate-900 dark:text-white">Amenities</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 dark:border-white/10">
              <FaWifi className="text-primary" />
              <span className="text-sm text-slate-700 dark:text-slate-200">WiFi</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 dark:border-white/10">
              <FaRegSnowflake className="text-primary" />
              <span className="text-sm text-slate-700 dark:text-slate-200">A/C</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 dark:border-white/10">
              <FaShower className="text-primary" />
              <span className="text-sm text-slate-700 dark:text-slate-200">Hot water</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 dark:border-white/10">
              <FaUtensils className="text-primary" />
              <span className="text-sm text-slate-700 dark:text-slate-200">
                Breakfast (TODO confirm)
              </span>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-8 dark:border-white/10 dark:bg-surface-dark">
          <h2 className="font-display text-2xl text-slate-900 dark:text-white">Location</h2>
          <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
            <div className="flex min-h-[220px] items-center justify-center rounded-lg border border-dashed border-gray-300 bg-slate-100 text-sm text-slate-500 dark:border-white/20 dark:bg-slate-800/40 dark:text-slate-300">
              Map placeholder (TODO)
            </div>
            <div className="rounded-lg border border-gray-200 p-5 dark:border-white/10">
              <p className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <FaMapMarkerAlt className="text-primary" />
                Máncora, Peru
              </p>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Exact point: TODO</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-8 dark:border-white/10 dark:bg-surface-dark">
          <h2 className="font-display text-2xl text-slate-900 dark:text-white">Gallery</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-xl md:h-[430px]">
              <img src={roomMain} alt="Stay main room" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
            <div className="grid gap-4">
              <div className="relative h-[205px] overflow-hidden rounded-xl">
                <img
                  src={roomSecondary}
                  alt="Stay secondary room"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
              <div className="relative h-[205px] overflow-hidden rounded-xl">
                <img src={commonArea} alt="Stay common area" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-primary/40 bg-white p-8 text-center dark:bg-surface-dark">
          <h2 className="font-display text-3xl text-slate-900 dark:text-white">Plan your stay</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Build your package or contact us directly on WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/build"
              className="inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Build your trip
            </Link>
            <a
              href={buildWhatsAppUrl(stayMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
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
