import { buildWhatsAppUrl, defaultInquiryMessage } from '../../lib/whatsapp.js'

function TripCard({ trip }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface-dark">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={trip.image}
          alt={trip.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-white">{trip.title}</h3>
        <p className="mt-2 text-3xl font-bold text-primary">{trip.price}</p>
        <p className="mt-1 text-sm text-gray-400">({trip.duration})</p>
        <p className="mt-3 text-sm leading-relaxed text-gray-300">{trip.description}</p>

        {/* Includes */}
        <div className="mt-4">
          <p className="mb-2 text-sm font-semibold text-white">Includes:</p>
          <ul className="space-y-1">
            {trip.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="mt-1 text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer info */}
        <div className="mt-auto pt-4">
          {trip.extra && (
            <p className="mb-3 text-sm italic text-gray-400">{trip.extra}</p>
          )}
          {trip.totalDuration && (
            <p className="text-sm text-gray-400">{trip.totalDuration}</p>
          )}
          {trip.level && (
            <p className="text-sm text-gray-400">{trip.level}</p>
          )}
        </div>

        {/* CTA */}
        <div className="mt-4">
          <a
            href={buildWhatsAppUrl(
              defaultInquiryMessage({ tripName: trip.title, page: 'Waves' }),
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-background-dark sm:w-auto"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}

function WavesTrips({ title, trips }) {
  return (
    <section className="bg-background-dark py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
          {trips.map((trip) => (
            <TripCard key={trip.title} trip={trip} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WavesTrips
