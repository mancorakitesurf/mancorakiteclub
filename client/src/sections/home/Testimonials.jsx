import { FaQuoteLeft } from 'react-icons/fa'
import { TESTIMONIALS } from './homeContent.js'
import { useI18n } from '../../app/providers/i18nContext'

function Testimonials() {
  const { t } = useI18n()

  return (
    <section id="testimonials" className="bg-background-light py-16 sm:py-20 lg:py-28 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center font-display text-2xl font-bold dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {t('sections.home.testimonialsTitle')}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={item.name}
              className={`relative mt-10 rounded-3xl border border-gray-100 bg-white p-4 shadow-md dark:border-white/5 dark:bg-surface-dark sm:p-6 lg:p-8 ${
                index === 1 ? 'xl:-translate-y-4 xl:border-primary/30' : ''
              }`}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <img
                  src={item.image}
                  alt={`User ${index + 1}`}
                  className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-md dark:border-surface-dark"
                />
              </div>
              <div className="mt-8 text-center">
                <div className="mb-4 text-xl text-primary">
                  <FaQuoteLeft />
                </div>
                {/* AQUÍ ESTÁ EL CAMBIO: Envolvemos item.text en t() */}
                <p className="mb-6 text-sm italic leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                  {t(item.text)}
                </p>
                <h5 className="font-bold text-gray-900 dark:text-white">{item.name}</h5>
                {/* AQUÍ ESTÁ EL OTRO CAMBIO: Envolvemos item.country en t() */}
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  {t(item.country)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials