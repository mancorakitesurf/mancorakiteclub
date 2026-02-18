import { TRIPS } from './homeContent.js'

function Trips() {
  return (
    <section id="trips" className="relative bg-background-light py-24 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold dark:text-white md:text-5xl">
            Curated Trips
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Choose your adventure level. From beginners to pros, we have the perfect itinerary for
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TRIPS.map((trip) => (
            <div
              key={trip.title}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-white/5 dark:bg-surface-dark"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur dark:bg-black/80">
                  {trip.level}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 font-display text-xl font-bold transition-colors group-hover:text-primary dark:text-white">
                  {trip.title}
                </h3>
                <p className="mb-6 flex-1 text-sm text-gray-600 dark:text-gray-400">
                  {trip.description}
                </p>
                <button
                  type="button"
                  className="w-full rounded-lg border border-primary py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trips
