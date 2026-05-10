import { motion } from "framer-motion"
import { CLASSES_BENEFITS } from "./classesData"
import { useI18n } from '../../app/providers/i18nContext'

function ClassesBenefits() {
  const { t } = useI18n()

  return (
    <section className="relative bg-gradient-to-b from-[#0f2e2c] to-[#071a19] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {t('sections.classes.benefitsTitle')}
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
          {t('sections.classes.benefitsDesc')}
        </p>
      </motion.div>
      <div className="max-w-4xl mx-auto grid gap-6">
        {CLASSES_BENEFITS.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-start gap-4 rounded-3xl bg-white/5 px-4 py-5 text-white shadow-lg transition hover:bg-white/10 sm:items-center sm:gap-6 sm:px-6 lg:px-8"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8ac43f]/20 text-[#8ac43f] text-xl font-bold">
              ✓
            </div>
            <p className="text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
              {t(benefit)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ClassesBenefits