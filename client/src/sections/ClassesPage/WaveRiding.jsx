import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useI18n } from "../../app/providers/i18nContext"

function WaveRiding() {
  const { t } = useI18n()
  const benefits = t("serviceCopy.waveRidingCoaching.benefits")

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A0F14] to-[#0f2e2c] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(222,255,154,0.15),_transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto mb-16 max-w-4xl text-center sm:mb-20"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] sm:text-3xl md:text-4xl lg:text-5xl">
          {t("serviceCopy.waveRidingCoaching.introTitle")}
        </h2>
        <p className="mt-4 text-sm font-semibold tracking-widest uppercase text-[#DEFF9A]">
          {t("serviceCopy.waveRidingCoaching.heroTagline")}
        </p>
        <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
          {t("serviceCopy.waveRidingCoaching.introText")}
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-8"
        >
          <div className="mb-6 space-y-4">
            {Array.isArray(benefits) && benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8ac43f]/20 text-[#8ac43f] text-xs font-bold">✓</span>
                <p className="text-sm text-white/80 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="text-4xl font-bold mb-2 text-center">$80 USD <span className="text-lg font-normal text-white/50">{t("classes.waveRiding.priceSuffix")}</span></div>
          <p className="mb-6 text-center text-sm text-white/50">{t("serviceCopy.waveRidingCoaching.priceNote")}</p>
          <Link
            to="/build"
            className="inline-flex min-h-12 w-full max-w-sm mx-auto items-center justify-center rounded-full bg-[#DEFF9A] px-6 py-3 font-bold text-[#0A0F14] transition hover:bg-white"
          >
            {t("serviceCopy.waveRidingCoaching.cta")}
          </Link>
        </motion.div>
      </div>

      {/* Builder CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 mx-auto mt-12 max-w-2xl text-center"
      >
        <p className="text-sm text-white/50">
          {t("serviceCopy.waveRidingCoaching.builderNote")}
        </p>
      </motion.div>
    </section>
  )
}

export default WaveRiding
