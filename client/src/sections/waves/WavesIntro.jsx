import { INTRO } from './wavesContent.js'

function WavesIntro() {
  return (
    <section className="bg-surface-light py-24 dark:bg-surface-dark/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          {/* Left – subtitle */}
          <div className="lg:w-5/12">
            <div className="mb-6 h-1 w-20 rounded-full bg-primary" />
            <h2 className="font-display text-3xl font-bold dark:text-white md:text-4xl">
              {INTRO.subtitle}
            </h2>
          </div>

          {/* Right – description */}
          <div className="lg:w-7/12">
            <h3 className="mb-4 font-display text-xl font-semibold text-primary">
              {INTRO.heading}
            </h3>
            {INTRO.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mb-4 text-lg leading-relaxed text-gray-600 last:mb-0 dark:text-gray-300"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WavesIntro
