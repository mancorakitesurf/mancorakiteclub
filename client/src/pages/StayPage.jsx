import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaBed, FaWhatsapp, FaDumbbell, FaUmbrellaBeach } from 'react-icons/fa'
import { GiLotus, GiWhaleTail, GiScubaMask, GiTurtle } from 'react-icons/gi'
import StandardPage from './StandardPage.jsx'
import { buildWhatsAppUrl } from '../lib/whatsapp.js'
import heroImg from '../assets/HOSPEDAJE KITE HOUSE/main.webp'
import img1 from '../assets/HOSPEDAJE KITE HOUSE/cuartonazi.webp'
import img2 from '../assets/HOSPEDAJE KITE HOUSE/habitacion.webp'
import img3 from '../assets/HOSPEDAJE KITE HOUSE/nightcaption.webp'
import img4 from '../assets/HOSPEDAJE KITE HOUSE/piscinabuenarda.webp'
import img5 from '../assets/HOSPEDAJE KITE HOUSE/image.webp'

function StayPage() {
  const stayMessage =
    "Hi! I'm interested in staying with you. My name is ... Dates: ... Number of guests: ..."

  const amenities = [
    {
      icon: <GiLotus />,
      title: 'Yoga',
      text: 'Start your morning with yoga sessions by the sea.',
    },
    {
      icon: <GiWhaleTail />,
      title: 'Whale Watching',
      text: 'Witness humpback whales in the warm Pacific waters of Mancora.',
    },
    {
      icon: <GiScubaMask />,
      title: 'Scuba Diving',
      text: 'Explore vibrant reefs and underwater life along the coast.',
    },
    {
      icon: <GiTurtle />,
      title: 'Swim with Turtles',
      text: 'Snorkel alongside sea turtles in their natural habitat.',
    },
    {
      icon: <FaDumbbell />,
      title: 'Gym',
      text: 'Keep training with our on-site fitness area, anytime.',
    },
    {
      icon: <FaUmbrellaBeach />,
      title: 'Beachfront Bungalows',
      text: 'Fall asleep to the sound of waves in our oceanfront bungalows.',
    },
  ]

  const pricing = [
    {
      guests: 1,
      label: '1 Person',
      sublabel: 'Private room',
      price: 50,
    },
    {
      guests: 2,
      label: '2 Persons',
      sublabel: 'Same room',
      price: 80,
    },
  ]

  const gallery = [
    {
      image: img1,
      title: 'Private Room',
      label: 'Comfort',
    },
    {
      image: img2,
      title: 'Bedroom',
      label: 'Rest',
    },
    {
      image: img3,
      title: 'Night View',
      label: 'Atmosphere',
    },
    {
      image: img4,
      title: 'Swimming Pool',
      label: 'Lifestyle',
    },
    {
      image: img5,
      title: 'The Lodge',
      label: 'Experience',
    },
  ]

  return (
    <StandardPage
      title="Stay with us"
      subtitle="A calm, premium base for your time in Mancora."
      description="Accommodation options for your Mancora stay."
      canonicalPath="/stay"
      hreflang={{ en: '/stay', es: '/esp', default: '/' }}
      fullWidth
    >
      <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.10)] dark:bg-surface-dark">
        
        {/* HERO */}
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden md:min-h-screen">
          <div className="absolute inset-0 z-0">
            <motion.img
              src={heroImg}
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

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* PRICING */}
        <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Rates
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-950 dark:text-white">
              Bali Lodge Accommodation
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              Base prices per night — breakfast included with every stay.
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
            {pricing.map((plan) => (
              <article
                key={plan.guests}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-surface-dark"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-sm font-bold text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                    {plan.guests}
                  </div>
                  <div>
                    <p className="font-bold text-slate-950 dark:text-white">{plan.label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{plan.sublabel}</p>
                  </div>
                </div>

                <div className="flex items-end gap-1">
                  <span className="font-display text-5xl font-bold text-slate-950 dark:text-white">
                    ${plan.price}
                  </span>
                  <span className="mb-2 text-sm text-slate-500 dark:text-slate-400">/ night</span>
                </div>

                <p className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                  <FaBed />
                  Breakfast included
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

          {/* Row 1: large + medium */}
          <div className="grid gap-5 lg:grid-cols-12">
            {[gallery[0], gallery[1]].map((item, i) => (
              <article
                key={item.title}
                className={`group relative h-[400px] overflow-hidden rounded-[2rem] ${
                  i === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{item.label}</p>
                  <h3 className={`mt-2 font-bold ${ i === 0 ? 'text-3xl' : 'text-2xl'}`}>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>

          {/* Row 2: three equal */}
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {[gallery[2], gallery[3], gallery[4]].map((item) => (
              <article
                key={item.title}
                className="group relative h-[300px] overflow-hidden rounded-[2rem]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{item.label}</p>
                  <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* LOCATION */}
        <section className="grid gap-8 bg-slate-50 px-6 py-20 dark:bg-background-dark sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-surface-dark">
            <div className="overflow-hidden rounded-[1.5rem]" style={{ height: '380px' }}>
              <iframe
                title="Mancora Kite House location"
                src="https://maps.google.com/maps?q=hotel+samana+chakra+Mancora+Peru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ filter: 'invert(1) hue-rotate(180deg) grayscale(0.15) brightness(0.85)', border: 0 }}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-surface-dark">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Location
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold text-slate-950 dark:text-white">
              Mancora, Peru
            </h2>

            <p className="mt-5 flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-primary" />
              Panamericana Norte, Av. Piura s/n — Hotel Samana Chakra, Máncora, Peru
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Located right on the Panamericana Norte, minutes from the beach and the
              kite spot. Easy arrival from Piura or Tumbes airports.
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
