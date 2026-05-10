import { CLASSES } from './wavesContent.js'
import { useI18n } from '../../app/providers/i18nContext'

function WavesClasses({ classes = CLASSES }) {
  const { t } = useI18n()
  return (
    <section className="bg-[#8FB38A] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-2xl font-bold text-background-dark sm:text-3xl md:text-4xl lg:text-5xl">
            {t('sections.waves.classesTitle')}
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
                  loading="lazy"
                  className="h-64 w-full rounded-3xl object-cover shadow-lg sm:h-80"
                />
              </div>

              {/* Text */}
              <div className="lg:w-1/2">
                <h3 className="mb-4 font-display text-2xl font-bold text-background-dark sm:text-3xl">
                  {cls.title}
                </h3>
                <p className="text-sm leading-relaxed text-background-dark/80 sm:text-base md:text-lg">
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
