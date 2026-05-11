import { useI18n } from '../../../app/providers/i18nContext'
import { Link } from 'react-router-dom'

function WaveCTA() {
  const { t } = useI18n()

  return (
    <section className="py-28 bg-gradient-to-r from-black to-[#0b1f1e] text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold">
          {t('blogWaveProgression.cta.h2')}
        </h2>

        <p className="mt-6 text-gray-300">
          {t('blogWaveProgression.cta.p')}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/build">
            <button className="px-6 py-3 w-full sm:w-auto bg-cyan-400 text-black rounded-full font-semibold">
              {t('blogWaveProgression.cta.btn1')}
            </button>
          </Link>

          <Link to="/trips">
            <button className="px-6 py-3 w-full sm:w-auto border border-white rounded-full transition hover:bg-white/10">
              {t('blogWaveProgression.cta.btn2')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WaveCTA