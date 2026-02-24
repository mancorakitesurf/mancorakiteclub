import { CLASSES } from './wavesContent.js'

function WavesClasses({ classes = CLASSES }) {
  return (
    <section className="bg-[#8FB38A] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold text-background-dark md:text-5xl">
            Classes For All Levels
          </h2>
        </div>

        <div className="space-y-16">
          {classes.map((cls) => (
            <div
              key={cls.title}
              className={`flex flex-col items-center gap-10 lg:flex-row ${
                cls.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <img
                  src={cls.image}
                  alt={cls.alt}
                  className="h-80 w-full rounded-2xl object-cover shadow-lg"
                />
              </div>

              {/* Text */}
              <div className="lg:w-1/2">
                <h3 className="mb-4 font-display text-2xl font-bold text-background-dark">
                  {cls.title}
                </h3>
                <p className="text-lg leading-relaxed text-background-dark/80">
                  {cls.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WavesClasses
