import { motion } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'

function StayAbout() {
  const { t } = useI18n()

  return (
    <section className="relative px-6 py-16 sm:px-10 lg:px-16 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#2A9D8F]">
          {t('stay.introLabel')}
        </p>

        <h1 className="mt-6 font-display text-5xl font-bold leading-tight text-slate-950 sm:text-6xl dark:text-white">
          {t('stay.introTitle')}
        </h1>

        <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
          {t('stay.introP1')}
        </p>

        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
          {t('stay.introP2')}
        </p>
      </motion.div>
    </section>
  )
}

export default StayAbout
