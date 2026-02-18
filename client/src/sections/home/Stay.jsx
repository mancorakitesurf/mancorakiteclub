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
    <section id="stay" className="bg-background-light py-24 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Accommodation
          </span>
          <h2 className="mt-2 mb-6 font-display text-4xl font-bold dark:text-white md:text-5xl">
            Stay With Us
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Relax in our luxurious beachfront villa. Ocean views, private chefs, and pure
            tranquility.
          </p>
        </div>

        <div className="mb-12 grid h-auto grid-cols-1 gap-4 md:h-[600px] md:grid-cols-12">
          <div className="group relative h-64 overflow-hidden rounded-2xl md:col-span-8 md:h-full">
            <img
              src={STAY_IMAGES.main.src}
              alt={STAY_IMAGES.main.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-8">
              <div>
                <h3 className="font-display text-3xl font-bold text-white">The Main Villa</h3>
                <p className="mt-2 text-gray-200">Where modern luxury meets tropical paradise.</p>
              </div>
            </div>
          </div>

          <div className="grid h-full grid-rows-2 gap-4 md:col-span-4">
            <div className="group relative h-64 overflow-hidden rounded-2xl md:h-full">
              <img
                src={STAY_IMAGES.pool.src}
                alt={STAY_IMAGES.pool.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
            </div>
            <div className="group relative h-64 overflow-hidden rounded-2xl md:h-full">
              <img
                src={STAY_IMAGES.bedroom.src}
                alt={STAY_IMAGES.bedroom.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {STAY_BENEFITS.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 dark:border-white/5 dark:bg-surface-dark"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                  <Icon className="text-xl" />
                </div>
                <h4 className="mb-2 font-display text-xl font-bold dark:text-white">{benefit.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stay
