import { useI18n } from '../../../app/providers/i18nContext'

function WaveLifestyle() {
  const { t } = useI18n()

  return (
    <section className="py-28 bg-black text-center text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-4xl font-bold">
          {t('blogWaveProgression.lifestyle.h2')}
        </h2>

        <p className="mt-6 text-gray-400">
          {t('blogWaveProgression.lifestyle.p1')}
        </p>

        <p className="mt-4 text-gray-400">
          {t('blogWaveProgression.lifestyle.p2')}
        </p>
      </div>
    </section>
  )
}

export default WaveLifestyle