import { useI18n } from '../../../app/providers/i18nContext'

function WaveProblem() {
  const { t } = useI18n()

  return (
    <section className="py-28 bg-black text-center text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-4xl font-bold">
          {t('blogWaveProgression.problem.h2')}
        </h2>

        <p className="mt-8 text-gray-400">
          {t('blogWaveProgression.problem.p1')}
        </p>

        <p className="mt-4 text-gray-400">
          {t('blogWaveProgression.problem.p2')}
        </p>

        <p className="mt-6 font-semibold text-cyan-400">
          {t('blogWaveProgression.problem.p3')}
        </p>
      </div>
    </section>
  )
}

export default WaveProblem