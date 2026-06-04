import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaCompass, FaPlane, FaTaxi, FaWalking, FaWater } from 'react-icons/fa'
import { useI18n } from '../../app/providers/i18nContext.js'

function StayLocation() {
  const { t } = useI18n()

  return (
    <section className="relative px-6 py-24 sm:px-10 lg:px-16 overflow-hidden bg-slate-50 dark:bg-[#080d0b]">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#2A9D8F]/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#b7e28a]/4 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
          {/* Map Column (lg: 7/12 width) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="h-full min-h-[450px] w-full overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white p-3 shadow-2xl dark:border-white/10 dark:bg-slate-900/40 backdrop-blur-md">
              <div className="h-full w-full overflow-hidden rounded-[2rem] relative">
                <iframe
                  title="Bali Lodge - Máncora Kite Club"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.8!2d-81.0531!3d-4.1021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNicwNy42IlMgODHCsDAzJzExLjIiVw!5e0!3m2!1sen!2spe!4v1778131649396"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0 transition-all duration-500 saturate-[0.85] dark:invert-[0.9] dark:hue-rotate-[180deg] dark:saturate-[0.7]"
                />
              </div>
            </div>
          </motion.div>

          {/* Travel Info Panel Column (lg: 5/12 width) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Header badges */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A9D8F]/10 border border-[#2A9D8F]/20 text-[10px] font-black uppercase tracking-[0.25em] text-[#2A9D8F] dark:text-[#b7e28a]">
                📍 {t('stay.locationLabel')}
              </span>
              
              <div className="flex items-center gap-2 rounded-full bg-slate-200/50 dark:bg-white/5 px-4.5 py-1.5 border border-slate-300/30 dark:border-white/5 text-[10px] font-bold text-slate-650 dark:text-slate-350 shadow-sm">
                <FaCompass className="text-[#2A9D8F] dark:text-[#b7e28a] text-xs animate-spin-slow" />
                <span className="font-mono tracking-wider">{t('stay.locationCoordinatesVal')}</span>
              </div>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-950 dark:text-white uppercase tracking-tight">
              {t('stay.locationTitle')}
            </h2>

            <p className="mt-6 flex items-start gap-3.5 text-base font-bold text-slate-800 dark:text-slate-205">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-xl text-[#2A9D8F] dark:text-[#b7e28a]" />
              <span>{t('stay.locationAddress')}</span>
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-350">
              {t('stay.locationDesc')}
            </p>

            {/* Travel Guide Segment */}
            <div className="mt-8 rounded-3xl border border-slate-200/60 bg-white/70 p-6 dark:border-white/5 dark:bg-white/[0.02] backdrop-blur-sm shadow-xl">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#2A9D8F] dark:text-[#b7e28a] mb-5 flex items-center gap-2">
                <FaPlane className="text-sm" />
                {t('stay.locationHowToGetThere')}
              </h3>
              
              <ul className="space-y-4">
                {/* Flight Option Talara */}
                <li className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/30 dark:border-white/5 text-slate-600 dark:text-slate-350">
                    <FaTaxi className="text-sm text-[#2A9D8F] dark:text-[#b7e28a]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-850 dark:text-white leading-tight">
                      {t('stay.locationFlightTalara')}
                    </p>
                  </div>
                </li>

                {/* Flight Option Tumbes */}
                <li className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/30 dark:border-white/5 text-slate-600 dark:text-slate-350">
                    <FaTaxi className="text-sm text-[#2A9D8F] dark:text-[#b7e28a]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-850 dark:text-white leading-tight">
                      {t('stay.locationFlightTumbes')}
                    </p>
                  </div>
                </li>

                {/* Flight Option Piura */}
                <li className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/30 dark:border-white/5 text-slate-600 dark:text-slate-350">
                    <FaTaxi className="text-sm text-[#2A9D8F] dark:text-[#b7e28a]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-850 dark:text-white leading-tight">
                      {t('stay.locationFlightPiura')}
                    </p>
                  </div>
                </li>
              </ul>

              {/* Local Proximity Highlights */}
              <div className="mt-6 pt-5 border-t border-slate-150 dark:border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#2A9D8F]/10 text-[#2A9D8F] dark:bg-[#b7e28a]/10 dark:text-[#b7e28a]">
                    <FaWater className="text-sm" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 leading-tight">
                    {t('stay.locationDistanceBeach')}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#2A9D8F]/10 text-[#2A9D8F] dark:bg-[#b7e28a]/10 dark:text-[#b7e28a]">
                    <FaWalking className="text-sm" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 leading-tight">
                    {t('stay.locationDistanceTown')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StayLocation
