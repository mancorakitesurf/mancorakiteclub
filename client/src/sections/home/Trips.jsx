import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { trips } from '../../content/trips.js'

function Trips() {
  return (
    <section id="trips" className="relative bg-background-light py-16 sm:py-20 lg:py-28 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              Curated Trips
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              Choose your route through wind, waves and stay.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            The same core trips from our trip page, edited into a quick visual preview for the Home.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {trips.map((trip) => (
            <Link
              key={trip.slug}
              to={trip.path}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-primary/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-900 sm:aspect-[5/4] md:aspect-[4/5]">
                <img
                  src={trip.heroImage}
                  alt={trip.heroAlt || trip.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  {trip.subtitle}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-2xl font-semibold leading-none text-slate-950 transition group-hover:text-primary dark:text-white">
                  {trip.title}
                </h3>
                <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {trip.summary}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4 text-sm font-semibold text-primary dark:border-white/10">
                  <span>Explore trip</span>
                  <FaArrowRight className="transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            to="/trips"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white transition duration-300 hover:bg-primary dark:bg-white dark:text-slate-950 dark:hover:bg-primary dark:hover:text-white sm:w-auto"
          >
            View all trips
            <FaArrowRight className="text-xs" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Trips
