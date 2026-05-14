import { Link } from 'react-router-dom'
import { ArrowRight, BedDouble, Clock3, MessageCircle, Sparkles, Waves } from 'lucide-react'

import { trips } from '../../content/trips.js'
import { resolveImage } from '../../config/images.js'

const FEATURED_TRIP = trips[0]
const SUPPORT_TRIPS = trips.slice(1, 3)
const BUILDER_PREVIEW_HERO_IMAGE = resolveImage("fotos trip/DSC03882.webp")

const PACKAGE_STATS = [
  { value: '5 steps', label: 'Custom flow' },
  { value: '3-14 nights', label: 'Flexible stay' },
  { value: '0-15 hrs', label: 'Coaching' },
]

const STEPS = [
  {
    n: 1,
    title: 'Pick your activity',
    desc: 'Kitesurf, Wingfoil, Surf or SUP — you decide what gets you stoked.',
    Icon: Waves,
  },
  {
    n: 2,
    title: 'Choose your nights',
    desc: 'From a quick 3-night escape to a full 2-week immersion.',
    Icon: BedDouble,
  },
  {
    n: 3,
    title: 'Add class hours',
    desc: 'Private coaching at your pace — 0 to 15 hours, all levels welcome.',
    Icon: Clock3,
  },
  {
    n: 4,
    title: 'Stack your extras',
    desc: 'Gear rental, day trips, massage, transfers — mix and match what you want.',
    Icon: Sparkles,
  },
  {
    n: 5,
    title: 'See your price & book',
    desc: 'Get an instant estimate and send it straight to us on WhatsApp.',
    Icon: MessageCircle,
  },
]

function BuilderPreview() {
  return (
    <section id="packages" className="relative overflow-hidden bg-surface-dark py-16 text-white sm:py-20 lg:py-28">
      <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
          <div className="relative lg:self-stretch">
            <div className="grid gap-4 lg:h-full lg:min-h-[680px] lg:grid-rows-[minmax(0,1fr)_140px]">
              <figure className="group relative h-[420px] overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.34)] sm:h-[540px] lg:h-auto lg:min-h-0">
                <img
                  src={BUILDER_PREVIEW_HERO_IMAGE}
                  alt={FEATURED_TRIP.heroAlt || FEATURED_TRIP.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071214]/82 via-[#071214]/18 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-normal text-white backdrop-blur-md">
                  {FEATURED_TRIP.subtitle}
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-semibold uppercase tracking-normal text-primary">Featured package</p>
                  <h3 className="mt-2 font-display text-4xl font-bold leading-none text-white sm:text-5xl">
                    {FEATURED_TRIP.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/82 sm:text-base">
                    {FEATURED_TRIP.summary}
                  </p>
                </div>
              </figure>

              <div className="grid grid-cols-2 gap-4">
                {SUPPORT_TRIPS.map((trip) => (
                  <Link
                    key={trip.slug}
                    to={trip.path}
                    className="group relative min-h-[118px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:min-h-[140px] lg:min-h-0"
                  >
                    <img
                      src={trip.heroImage}
                      alt={trip.heroAlt || trip.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071214]/82 via-[#071214]/12 to-transparent" />
                    <div className="absolute inset-x-3 bottom-3">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-normal text-primary">{trip.subtitle}</p>
                      <p className="mt-1 text-sm font-bold leading-tight text-white">{trip.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-normal text-primary backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(42,157,143,0.8)]" />
              Build your trip
            </div>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Your trip, your rules.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              In 5 steps you'll have a custom package with everything included — and a price ready to confirm on WhatsApp.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {PACKAGE_STATS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.075] p-4 text-left shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-md"
                >
                  <span className="font-display text-2xl font-semibold leading-none text-white">{item.value}</span>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-normal text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {STEPS.map((step, index) => {
                const Icon = step.Icon

                return (
                  <article
                    key={step.n}
                    className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.075] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:border-primary/40 hover:bg-white/[0.115] ${
                      index === STEPS.length - 1 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/35 bg-primary/20 text-sm font-bold text-white">
                        {step.n}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#F4F2EA]/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                            <Icon className="h-5 w-5" strokeWidth={1.8} />
                          </span>
                          <h3 className="text-base font-bold leading-tight text-white">{step.title}</h3>
                        </div>
                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-300">{step.desc}</p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="mt-7 rounded-3xl border border-white/10 bg-[#F4F2EA]/10 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.2)] backdrop-blur-md sm:p-6">
              <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
                <p className="max-w-xl text-sm leading-6 text-slate-200">
                  Start with the essentials, adjust the pace, and send the exact trip plan when it feels right.
                </p>
                <Link
                  to="/build"
                  className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border border-primary/30 bg-primary px-7 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] hover:bg-primary/90 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/70 focus:ring-offset-2 focus:ring-offset-surface-dark sm:w-auto"
                >
                  Let's do it
                  <ArrowRight className="h-5 w-5" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuilderPreview
