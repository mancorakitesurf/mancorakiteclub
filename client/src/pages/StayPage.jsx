import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { buildWhatsAppUrl } from '../lib/whatsapp.js'

import heroMain from '../assets/imagenes-hotel/main.jpg'
import img1 from '../assets/imagenes-hotel/DSC04826.jpg'
import img2 from '../assets/imagenes-hotel/DSC04859.jpg'
import img3 from '../assets/imagenes-hotel/DSC04958-HDR.jpg'
import img4 from '../assets/imagenes-hotel/DSC04986.jpg'
import img5 from '../assets/imagenes-hotel/DSC05068.jpg'
import img6 from '../assets/imagenes-hotel/DSC05100-Pano-HDR.jpg'
import img7 from '../assets/imagenes-hotel/DSC05117-HDR.jpg'
import img8 from '../assets/imagenes-hotel/DSC05123-HDR.jpg'
import img9 from '../assets/imagenes-hotel/DSC05231.jpg'

const AMENITIES = [
  { label: 'Yoga', Icon: IconYoga },
  { label: 'Whale Watching', Icon: IconWhale },
  { label: 'Diving', Icon: IconDiving },
  { label: 'Swim with Turtles', Icon: IconTurtle },
  { label: 'Gym', Icon: IconGym },
  { label: 'Beachfront Bungalows', Icon: IconBeach },
  { label: 'Breakfast Included', Icon: IconBreakfast },
]

const GALLERY = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

function IconBreakfast({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 010 8h-1" />
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
      <path d="M6 1v3" />
      <path d="M10 1v3" />
      <path d="M14 1v3" />
    </svg>
  )
}

function IconYoga({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="2" />
      <path d="M12 6v4" />
      <path d="M8 10l4 2 4-2" />
      <path d="M12 12v5" />
      <path d="M9 21l3-4 3 4" />
    </svg>
  )
}

function IconWhale({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12c1-4 5-7 10-7s9 3 10 7" />
      <path d="M22 12c-1 4-5 7-10 7s-9-3-10-7" />
      <path d="M20 8c1-2 2-4 2-4" />
      <path d="M19 7c1-1 2-3 3-3" />
      <circle cx="7" cy="12" r="1" fill="currentColor" />
    </svg>
  )
}

function IconDiving({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <path d="M12 8v6" />
      <path d="M8 14l4 4 4-4" />
      <path d="M6 20h12" />
      <path d="M15 5c2 1 4 3 4 5" />
    </svg>
  )
}

function IconTurtle({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="13" rx="7" ry="5" />
      <path d="M5 13c-2-1-3-2-3-3s1-2 3-2" />
      <path d="M19 13c2-1 3-2 3-3s-1-2-3-2" />
      <path d="M9 18l-1 3" />
      <path d="M15 18l1 3" />
      <circle cx="10" cy="11" r="0.5" fill="currentColor" />
    </svg>
  )
}

function IconGym({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 7v10" />
      <path d="M18 7v10" />
      <path d="M6 12h12" />
      <rect x="3" y="9" width="3" height="6" rx="1" />
      <rect x="18" y="9" width="3" height="6" rx="1" />
    </svg>
  )
}

function IconBeach({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21H7l2-8h6l2 8z" />
      <path d="M12 3v10" />
      <path d="M12 3c-3 0-6 2-6 5h12c0-3-3-5-6-5z" />
      <path d="M2 21h20" />
    </svg>
  )
}

function StayPage() {
  const stayMessage =
    "Hi! I'm interested in staying at the Bali Lodge.\nMy name is ...\nDates: ...\nGuests: ..."

  return (
    <>
      <SEO
        title="Mancora Kite Club | Stay — Bali Lodge"
        description="Beachfront bungalows in Máncora. Ride your kite right in front of your room."
        canonicalPath="/stay"
        hreflang={{ en: '/stay', es: '/esp', default: '/' }}
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img
          src={heroMain}
          alt="Bali Lodge beachfront"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Bali Lodge</p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            ¿Montar tu Kite frente a tu habitación no es el sueño de todo Kiter? Lo hicimos posible.
          </h1>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-background-light py-20 dark:bg-background-dark">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Accommodation</p>
            <h2 className="mt-3 font-display text-3xl text-slate-900 dark:text-white sm:text-4xl">
              Bali Lodge — Rates
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-300">
              Beachfront bungalows with breakfast included.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {/* 1 person */}
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-8 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-surface-dark">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21a6.5 6.5 0 0113 0" />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-xl text-slate-900 dark:text-white">1 Person</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Private room</p>
              <p className="mt-4 text-4xl font-black text-slate-900 dark:text-white">$50</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">USD / night</p>
              <p className="mt-3 text-xs text-primary">Breakfast included</p>
            </div>

            {/* 2 people */}
            <div className="rounded-2xl border-2 border-primary bg-white/80 p-8 text-center shadow-md backdrop-blur dark:bg-surface-dark">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="7" r="4" />
                  <circle cx="17" cy="7" r="3" />
                  <path d="M2 21a7 7 0 0114 0" />
                  <path d="M14 21a5 5 0 016 0" />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-xl text-slate-900 dark:text-white">2 People</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Same room</p>
              <p className="mt-4 text-4xl font-black text-slate-900 dark:text-white">$80</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">USD / night</p>
              <p className="mt-3 text-xs text-primary">Breakfast included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-background-light py-20 dark:bg-background-dark">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Experiences</p>
            <h2 className="mt-3 font-display text-3xl text-slate-900 dark:text-white sm:text-4xl">
              Amenities & Activities
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {AMENITIES.map((a) => (
              <div
                key={a.label}
                className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white/80 p-5 text-center backdrop-blur dark:border-white/10 dark:bg-surface-dark"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white dark:bg-white/10">
                  <a.Icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold text-slate-900 dark:text-white">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Gallery */}
      <section className="bg-background-light py-20 dark:bg-background-dark">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Gallery</p>
            <h2 className="mt-3 font-display text-3xl text-slate-900 dark:text-white sm:text-4xl">
              Your home in Máncora
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
            {GALLERY.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              >
                <img
                  src={src}
                  alt={`Bali Lodge ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  style={{ minHeight: i === 0 ? '320px' : '180px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-background-light py-20 dark:bg-background-dark">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Location</p>
            <h2 className="mt-3 font-display text-3xl text-slate-900 dark:text-white sm:text-4xl">
              Find us
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-300">
              Panamericana Norte Av Piura s/n — Hotel Samana Chakra, Máncora
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
            <iframe
              title="Bali Lodge location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.123!2d-81.0651!3d-4.1083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPanamericana+Norte+Av+piura+sin+numero+hotel+samana+chakra+M%C3%A1ncora!5e0!3m2!1ses!2spe!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background-light py-20 dark:bg-background-dark">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-primary/40 bg-white/80 p-8 backdrop-blur dark:bg-surface-dark sm:p-12">
            <h2 className="font-display text-3xl text-slate-900 dark:text-white sm:text-4xl">
              Ready to stay with us?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-300">
              Book directly on WhatsApp or build your complete trip package.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={buildWhatsAppUrl(stayMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 sm:w-auto"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book on WhatsApp
              </a>
              <Link
                to="/build"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-primary/90 sm:w-auto"
              >
                Build your trip
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StayPage
