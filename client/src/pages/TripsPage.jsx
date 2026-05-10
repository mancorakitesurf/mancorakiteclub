import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaWind } from 'react-icons/fa'
import SEO from '../components/SEO.jsx'
import { trips } from '../content/trips.js'
import { useI18n } from '../app/providers/i18nContext'

import heroImg from '../assets/imagenes-kitesurfing/posicionkt2.jpg'
import firstFlyImg from '../assets/imagenes-kitesurfing/posicionkt1.jpg'
import olasVientoImg from '../assets/imagenes-kitesurfing/posicionkt8.jpg'
import soloSurfImg from '../assets/imagenes-home/posicion12.jpg'
import rideCoastImg from '../assets/imagenes-wingfoil/posicionw4.jpg'

const tripImages = [
  firstFlyImg,
  olasVientoImg,
  soloSurfImg,
  rideCoastImg,
]

const tripLabels = [
  'First Fly',
  'Olas y Viento',
  'Solo Surf',
  'Ride the Coast',
]

function TripsPage() {
  const { t } = useI18n()

  return (
    <>
      <SEO
        titleKey="seo.tripsTitle"
        descKey="seo.tripsDesc"
        titleFallback="Kitesurf Trips in Máncora, Peru | Core Packages"
        descFallback="Discover kitesurfing, wingfoil, and surf trips in northern Peru. Full-day, 3-day, and 7-day packages with accommodation, coaching, and gear. Book your trip now."
      />

      <main className="overflow-hidden bg-[#031015] text-white">
        {/* HERO */}
        <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden px-6 text-center sm:min-h-[80vh] lg:min-h-screen">
          <div className="absolute inset-0 z-0">
            <motion.img
              src={heroImg}
              alt="Mancora Kite Club trips"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.4, ease: 'easeOut' }}
              className="h-full w-full object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-[#031015]/35 to-transparent" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative z-10 mx-auto max-w-5xl"
          >
            <p className="mb-6 text-xs font-black uppercase tracking-[0.45em] text-[#5af8fb]">
              Mancora Kite Club
            </p>

            <h1 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl">
              {t('tripsPage.heroTitle1')}
              <br />
              {t('tripsPage.heroTitle2')}
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              {t('tripsPage.heroSubtitle')}
            </p>

            <a
              href="#trip-list"
              className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full border border-[#5af8fb]/60 px-8 text-sm font-black uppercase tracking-[0.22em] text-[#5af8fb] transition hover:bg-[#5af8fb] hover:text-black"
            >
              {t('tripsPage.exploreTrips')}
            </a>
          </motion.div>
        </section>

        {/* TRIP LIST */}
        <section id="trip-list" className="relative">
          {trips.map((trip, index) => {
            const image = tripImages[index % tripImages.length]
            const label = tripLabels[index] || trip.title
            const isEven = index % 2 === 0

            return (
              <Link
                key={trip.slug}
                to={trip.path}
                className="group block"
              >
                <motion.article
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="relative flex min-h-[68vh] items-center overflow-hidden border-t border-white/10 px-5 py-20 sm:min-h-[76vh] sm:px-8 lg:min-h-screen lg:px-16"
                >
                  {/* Background image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={image}
                      alt={trip.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-[#031015]/25 to-transparent" />
                    <div
                      className={`absolute inset-0 ${
                        isEven
                          ? 'bg-gradient-to-r from-[#031015]/75 via-[#031015]/20 to-transparent'
                          : 'bg-gradient-to-l from-[#031015]/75 via-[#031015]/20 to-transparent'
                      }`}
                    />
                  </div>

                  {/* Number */}
                  <div
                    className={`absolute top-8 z-10 text-6xl font-black leading-none text-white/15 transition duration-500 group-hover:text-[#5af8fb]/25 sm:text-8xl lg:text-9xl ${
                      isEven ? 'right-6 lg:right-16' : 'left-6 lg:left-16'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div
                    className={`relative z-10 mx-auto flex w-full max-w-7xl ${
                      isEven ? 'justify-start text-left' : 'justify-end text-right'
                    }`}
                  >
                    <div className="max-w-4xl">
                      <p
                        className={`mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.35em] text-[#5af8fb] ${
                          isEven ? 'justify-start' : 'justify-end'
                        }`}
                      >
                        <FaWind />
                        {trip.subtitle || t('tripsPage.tripExperience')}
                      </p>

                      <h2
                        className="
                          font-display text-5xl font-black uppercase leading-[0.82] tracking-tighter
                          text-transparent transition duration-500
                          [-webkit-text-stroke:1.5px_rgba(255,255,255,0.78)]
                          group-hover:text-white group-hover:[-webkit-text-stroke:1.5px_rgba(90,248,251,0.35)]
                          sm:text-7xl md:text-8xl lg:text-[8.5rem]
                        "
                      >
                        {label}
                      </h2>

                      <p
                        className={`mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base ${
                          isEven ? 'mr-auto' : 'ml-auto'
                        }`}
                      >
                        {trip.summary}
                      </p>

                      <div
                        className={`mt-8 flex ${
                          isEven ? 'justify-start' : 'justify-end'
                        }`}
                      >
                        <span className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#5af8fb] px-7 text-sm font-black uppercase tracking-[0.2em] text-black transition group-hover:bg-white">
                          {t('tripsPage.viewDetails')}
                          <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom strip */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-[#5af8fb]/50 to-transparent" />
                </motion.article>
              </Link>
            )
          })}
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden px-6 py-24 text-center sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(90,248,251,0.18),_transparent_60%)]" />

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-4xl"
          >
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#5af8fb]">
              {t('tripsPage.ctaLabel')}
            </p>

            <h2 className="mt-5 font-display text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              {t('tripsPage.ctaTitle')}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              {t('tripsPage.ctaDesc')}
            </p>

            <Link
              to="/build"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#5af8fb] px-8 text-sm font-black uppercase tracking-[0.22em] text-black transition hover:bg-white sm:w-auto"
            >
              {t('tripsPage.ctaBtnText')}
              <FaArrowRight />
            </Link>
          </motion.div>
        </section>
      </main>
    </>
  )
}

export default TripsPage