import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useI18n } from "../../app/providers/i18nContext"

const TRIP_KEYS = ["dayTrips", "downwinds"]

function TripsDownwinds() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden bg-[#0A0F14] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="absolute inset-0 opacity-20 bg-center bg-cover" style={{ backgroundImage: "url('/images/downwind-hero.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F14] via-[#0A0F14]/80 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto mb-16 max-w-4xl text-center sm:mb-20"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] sm:text-3xl md:text-4xl lg:text-5xl text-[#DEFF9A]">
          {t("serviceCopy.tripsDownwinds.introTitle")}
        </h2>
        <p className="mt-4 text-sm font-semibold tracking-widest uppercase text-white/60">
          {t("serviceCopy.tripsDownwinds.heroTagline")}
        </p>
        <p className="mt-6 text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
          {t("serviceCopy.tripsDownwinds.introText")}
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl space-y-8">
        {TRIP_KEYS.map((tripKey, i) => (
          <motion.div
            key={tripKey}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{t(`classes.tripsDownwinds.items.${tripKey}.title`)}</h3>
              <p className="text-white/70">{t(`classes.tripsDownwinds.items.${tripKey}.description`)}</p>
            </div>
            <div className="flex flex-col items-end gap-3 min-w-[160px]">
              <span className="text-xl font-bold text-[#DEFF9A]">{t(`classes.tripsDownwinds.items.${tripKey}.price`)}</span>
              <button className="text-sm font-bold tracking-wider text-white border-b border-[#DEFF9A] pb-1 hover:text-[#DEFF9A] transition">
                {t("classes.common.learnMore")}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Builder CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 mx-auto mt-16 max-w-2xl text-center"
      >
        <p className="mb-5 text-sm text-white/60 sm:text-base">
          {t("serviceCopy.tripsDownwinds.builderNote")}
        </p>
        <Link
          to="/build"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#DEFF9A] px-8 py-3 font-bold text-[#0A0F14] transition hover:bg-white"
        >
          {t("serviceCopy.tripsDownwinds.builderCta")}
        </Link>
      </motion.div>
    </section>
  )
}

export default TripsDownwinds
