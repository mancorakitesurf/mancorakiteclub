import { motion } from "framer-motion"
import { useI18n } from '../../../app/providers/i18nContext'

function WaveIntro() {
  const { t } = useI18n()

  return (
    <section className="relative bg-white py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold leading-tight text-black md:text-5xl"
        >
          {t('blogWaveProgression.intro.h2')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-lg text-gray-600"
        >
          {t('blogWaveProgression.intro.p1')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-gray-500"
        >
          {t('blogWaveProgression.intro.p2')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <p className="text-xl font-semibold text-black">
            {t('blogWaveProgression.intro.p3')}
          </p>
          <p className="mt-2 font-semibold text-cyan-500">
            {t('blogWaveProgression.intro.p4')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WaveIntro