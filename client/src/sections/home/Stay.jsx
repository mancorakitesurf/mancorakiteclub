import { FaSpa, FaUtensils, FaWater } from 'react-icons/fa'
import { STAY_IMAGES } from './homeContent.js'

const STAY_BENEFITS = [
  {
    icon: FaWater,
    title: 'Ocean View Suites',
    description: 'Wake up to the sound of waves and check the wind from your balcony.',
  },
  {
    icon: FaUtensils,
    title: 'Private Chef & Dining',
    description: 'Fresh local seafood and healthy meals prepared daily for our guests.',
  },
  {
    icon: FaSpa,
    title: 'Wellness & Massage',
    description: 'Recover after a long session with our dedicated wellness center.',
  },
]

function Stay() {
  return (
    <section id="stay" className="bg-background-light py-16 sm:py-20 lg:py-28 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Accommodation
          </span>
          <h2 className="mb-6 mt-2 font-display text-2xl font-bold dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Stay With Us
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
            Relax in our luxurious beachfront villa. Ocean views, private chefs, and pure
            tranquility.
          </p>
        </div>

        <div className="mb-12 grid h-auto grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-12">
          <div className="group relative h-72 overflow-hidden rounded-3xl sm:h-96 lg:col-span-8 lg:h-full">
            <img
              src={STAY_IMAGES.main.src}
              alt={STAY_IMAGES.main.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6 lg:p-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">The Main Villa</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-200 sm:text-base">Where modern luxury meets tropical paradise.</p>
              </div>
            </div>
          </div>

          <div className="grid h-full grid-cols-1 gap-4 sm:gap-6 lg:col-span-4 lg:grid-cols-1 lg:grid-rows-2">
            <div className="group relative h-64 overflow-hidden rounded-3xl sm:h-80 lg:h-full">
              <img
                src={STAY_IMAGES.pool.src}
                alt={STAY_IMAGES.pool.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
            </div>
            <div className="group relative h-64 overflow-hidden rounded-3xl sm:h-80 lg:h-full">
              <img
                src={STAY_IMAGES.bedroom.src}
                alt={STAY_IMAGES.bedroom.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {STAY_BENEFITS.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-transform hover:-translate-y-0.5 dark:border-white/5 dark:bg-surface-dark sm:p-6"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                  <Icon className="text-xl" />
                </div>
                <h4 className="mb-2 font-display text-xl font-bold dark:text-white">{benefit.title}</h4>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 sm:text-base">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stay
