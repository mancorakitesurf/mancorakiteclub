import { Link } from 'react-router-dom'
import { TRIPS } from './homeContent.js'

function Trips() {
  const teaserTrips = TRIPS.slice(0, 3)

  return (
    <section id="trips" className="relative bg-background-light py-16 sm:py-20 lg:py-28 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Curated Trips
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
            A quick preview of trip styles. Explore the full trip page for complete options.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
          {teaserTrips.map((trip) => (
            <div
              key={trip.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:border-white/5 dark:bg-surface-dark"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur dark:bg-black/80">
                  {trip.level}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-display text-xl font-bold leading-snug transition-colors group-hover:text-primary dark:text-white sm:text-2xl">
                  {trip.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/trips"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white sm:w-auto"
          >
            View Trips
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Trips
