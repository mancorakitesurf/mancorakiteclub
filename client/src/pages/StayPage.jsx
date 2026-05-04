import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaRegSnowflake, FaShower, FaUtensils, FaWifi, FaBed, FaWhatsapp} from 'react-icons/fa'
import StandardPage from './StandardPage.jsx'
import { buildWhatsAppUrl } from '../lib/whatsapp.js'
import roomMain from '../assets/imagenes-home/posicion24.jpg'
import roomSecondary from '../assets/imagenes-home/posicion23.jpg'
import commonArea from '../assets/imagenes-home/posicion26.jpg'

function StayPage() {
  const stayMessage =
    "Hi! I'm interested in staying with you. My name is ... Dates: ... Number of guests: ..."

  const amenities = [
    {
      icon: <FaWifi />,
      title: 'Fast WiFi',
      text: 'Stay connected for work, planning, or sharing your trip.',
    },
    {
      icon: <FaRegSnowflake />,
      title: 'A/C Rooms',
      text: 'Comfortable rest after warm beach days and kite sessions.',
    },
    {
      icon: <FaShower />,
      title: 'Hot Water',
      text: 'Clean and simple essentials for a relaxed stay.',
    },
    {
      icon: <FaUtensils />,
      title: 'Breakfast Option',
      text: 'Easy mornings before heading to the beach or your session.',
    },
  ]

  const gallery = [
    {
      image: roomMain,
      title: 'Private Room',
      label: 'Comfort',
    },
    {
      image: roomSecondary,
      title: 'Stay Details',
      label: 'Rest',
    },
    {
      image: commonArea,
      title: 'Common Area',
      label: 'Lifestyle',
    },
  ]

  return (
    <StandardPage
      title="Stay with us"
      subtitle="A calm, premium base for your time in Máncora."
      description="Premium accommodation in Máncora for kitesurfers and riders. Clean rooms with A/C, WiFi, hot water, breakfast. Calm base close to the best spots. Book direct!"
      canonicalPath="/stay"
      hreflang={{ en: '/stay', es: '/esp', default: '/' }}
      fullWidth
    >
      <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.10)] dark:bg-surface-dark">
        
        {/* HERO */}
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden md:min-h-screen">
          <div className="absolute inset-0 z-0">
            <motion.img
              src={roomMain}
              alt="Stay with us in Mancora"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              className="h-full w-full object-cover opacity-60"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Stay in Mancora
            </p>

            <h1 className="font-display text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
              Stay with us in Mancora
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Simple, comfortable accommodation designed for riders and travelers
              who want easy planning, clean spaces, and a relaxed atmosphere close
              to the ocean.
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                to="/build"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-primary/90 sm:w-auto"
              >
                Build your trip
              </Link>
            </div>
          </motion.div>
        </section>

        {/* INTRO */}
        <section className="grid gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_1.15fr] lg:px-16 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              What it is
            </p>

            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl">
              Comfort without overcomplication.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            <p>
              Stay with us is a focused accommodation option for riders who want
              comfort, simplicity, and easy planning during their time in Mancora.
            </p>

            <p>
              Clean spaces, flexible structure, and a premium atmosphere make it a
              strong base before and after your kite, surf, or wingfoil sessions.
            </p>
          </div>
        </section>

        {/* AMENITIES */}
        <section className="bg-slate-50 px-6 py-20 dark:bg-background-dark sm:px-10 lg:px-16">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Amenities
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold text-slate-950 dark:text-white">
              Everything you need to reset.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-surface-dark"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Visual Gallery
              </p>

              <h2 className="mt-4 font-display text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">
                Real spaces, real stay.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              A visual preview of the room, details, and shared spaces designed
              for a quiet and comfortable stay in Mancora.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            <article className="group relative h-[520px] overflow-hidden rounded-[2rem] lg:col-span-7">
              <img
                src={gallery[0].image}
                alt={gallery[0].title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-7 left-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  {gallery[0].label}
                </p>
                <h3 className="mt-2 text-3xl font-bold">
                  {gallery[0].title}
                </h3>
              </div>
            </article>

            <div className="grid gap-5 lg:col-span-5">
              {gallery.slice(1).map((item) => (
                <article
                  key={item.title}
                  className="group relative h-[250px] overflow-hidden rounded-[2rem]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                      {item.label}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">
                      {item.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="grid gap-8 bg-slate-50 px-6 py-20 dark:bg-background-dark sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-surface-dark">
            <div className="flex min-h-[320px] items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-100 text-center text-sm text-slate-500 dark:border-white/20 dark:bg-slate-800/40 dark:text-slate-300">
              Map placeholder
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-surface-dark">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Location
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold text-slate-950 dark:text-white">
              Mancora, Peru
            </h2>

            <p className="mt-5 flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
              <FaMapMarkerAlt className="text-primary" />
              Calm base close to your sessions.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Exact point can be shared once your stay request is confirmed.
              This keeps planning simple while maintaining privacy and flexibility.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-center text-white sm:px-10 lg:px-16">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <FaBed className="mx-auto text-4xl text-primary" />

            <h2 className="mt-6 font-display text-4xl font-bold sm:text-5xl">
              Plan your stay.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Build your package or contact us directly on WhatsApp with your
              dates, number of guests, and preferred stay style.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/build"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-primary/90 sm:w-auto"
              >
                Build your trip
              </Link>

              <a
                href={buildWhatsAppUrl(stayMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/40 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-slate-950 sm:w-auto"
              >
                <FaWhatsapp />
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </StandardPage>
  )
}

export default StayPage
