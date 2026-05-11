import { useI18n } from '../../../app/providers/i18nContext'

function WaveProgression() {
  const { t } = useI18n()

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          {t('blogWaveProgression.progression.h2')}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="rounded-2xl p-4 shadow-sm sm:p-6 sm:shadow">
            <h3 className="font-bold text-lg">{t('blogWaveProgression.progression.b1Title')}</h3>
            <p className="mt-4 text-gray-600">
              {t('blogWaveProgression.progression.b1Desc')}
            </p>
          </div>

          <div className="rounded-2xl p-4 shadow-sm sm:p-6 sm:shadow">
            <h3 className="font-bold text-lg">{t('blogWaveProgression.progression.b2Title')}</h3>
            <p className="mt-4 text-gray-600">
              {t('blogWaveProgression.progression.b2Desc')}
            </p>
          </div>

          <div className="rounded-2xl p-4 shadow-sm sm:p-6 sm:shadow">
            <h3 className="font-bold text-lg">{t('blogWaveProgression.progression.b3Title')}</h3>
            <p className="mt-4 text-gray-600">
              {t('blogWaveProgression.progression.b3Desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WaveProgression