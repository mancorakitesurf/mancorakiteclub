import { motion } from "framer-motion"
import { useI18n } from '../../app/providers/i18nContext'

function WingfoilBenefits() {
  const { t } = useI18n()

  const BENEFIT_KEYS = [
    'sections.classes.wingfoilBenefit1',
    'sections.classes.wingfoilBenefit2',
    'sections.classes.wingfoilBenefit3',
    'sections.classes.wingfoilBenefit4',
    'sections.classes.wingfoilBenefit5',
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f2e2c] to-[#071a19] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">

      {/* Decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(42,157,143,0.25),_transparent_60%)]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto mb-16 max-w-4xl text-center sm:mb-20"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] sm:text-3xl md:text-4xl lg:text-5xl">
          {t('sections.classes.benefitsTitle')}
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
          {t('sections.classes.benefitsDesc')}
        </p>
      </motion.div>

      {/* Benefits list */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        {BENEFIT_KEYS.map((key, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-md transition hover:bg-white/10 sm:items-center sm:px-6"
          >
            {/* Check icon */}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8ac43f]/20 text-[#8ac43f] font-bold">
              ✓
            </span>

            {/* Text */}
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              {t(key)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WingfoilBenefits
