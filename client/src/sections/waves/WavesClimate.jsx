import { CLIMATE } from './wavesContent.js'

function WavesClimate() {
  return (
    <section className="bg-surface-light py-16 sm:py-20 lg:py-28 dark:bg-surface-dark/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          {/* Left – subtitle */}
          <div className="lg:w-5/12">
            <div className="mb-6 h-1 w-20 rounded-full bg-primary" />
            <h3 className="font-display text-2xl font-bold dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {CLIMATE.subtitle}
            </h3>
          </div>

          {/* Right – text */}
          <div className="lg:w-7/12">
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base md:text-lg">
              {CLIMATE.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WavesClimate
