import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaBed, FaUtensils, FaWifi, FaSwimmer, FaWineGlass, FaDumbbell } from 'react-icons/fa'
import { useI18n } from '../../app/providers/i18nContext.js'

function AmenityCard({ item, index, isHighlight }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.015 }}
      className={`group rounded-3xl border p-8 transition-all duration-300 ${
        isHighlight
          ? 'border-[#2A9D8F]/30 bg-gradient-to-br from-[#2A9D8F]/5 via-white to-[#b7e28a]/5 shadow-lg hover:border-[#2A9D8F]/60 dark:from-slate-900/60 dark:via-[#0e1b17]/20 dark:to-[#b7e28a]/5 dark:border-[#2A9D8F]/20'
          : 'border-slate-100 bg-white/70 shadow-sm hover:shadow-md dark:border-white/5 dark:bg-slate-900/40 backdrop-blur-sm'
      }`}
    >
      <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
        isHighlight
          ? 'bg-[#2A9D8F]/10 text-[#2A9D8F] dark:bg-[#b7e28a]/10 dark:text-[#b7e28a] group-hover:bg-[#2A9D8F] group-hover:text-white dark:group-hover:bg-[#b7e28a] dark:group-hover:text-black'
          : 'bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-300 group-hover:bg-[#2A9D8F]/10 group-hover:text-[#2A9D8F]'
      }`}>
        {item.icon}
      </div>

      <h3 className="text-xl font-bold text-slate-950 dark:text-white transition-colors duration-300 group-hover:text-[#2A9D8F] dark:group-hover:text-[#b7e28a]">
        {item.title}
      </h3>

      <p className="mt-3.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {item.text}
      </p>

      {isHighlight && (
        <div className="mt-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2A9D8F]/10 dark:bg-[#b7e28a]/10 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#2A9D8F] dark:text-[#b7e28a] border border-[#2A9D8F]/20 dark:border-[#b7e28a]/20 animate-pulse">
            ✨ {item.highlight}
          </span>
        </div>
      )}
    </motion.article>
  )
}

function StayAmenities() {
  const { t } = useI18n()
  const amenitiesRef = useRef(null)
  
  const amenities = [
    {
      icon: <FaBed className="text-2xl" />,
      title: t('stay.comfortBeds'),
      text: t('stay.comfortBedsDesc'),
    },
    {
      icon: <FaUtensils className="text-2xl" />,
      title: t('stay.breakfastIncluded'),
      text: t('stay.breakfastIncludedDesc'),
      highlight: 'Daily Fresh Fuel',
      isHighlight: true,
    },
    {
      icon: <FaWifi className="text-2xl" />,
      title: t('stay.wifi'),
      text: t('stay.wifiDesc'),
    },
    {
      icon: <FaSwimmer className="text-2xl" />,
      title: t('stay.swimmingPool'),
      text: t('stay.swimmingPoolDesc'),
    },
    {
      icon: <FaWineGlass className="text-2xl" />,
      title: t('stay.rooftopBar'),
      text: t('stay.rooftopBarDesc'),
    },
    {
      icon: <FaDumbbell className="text-2xl" />,
      title: t('stay.gym'),
      text: t('stay.gymDesc'),
    },
  ]

  return (
    <section 
      ref={amenitiesRef}
      className="relative bg-gradient-to-b from-white to-slate-50/50 px-6 py-24 sm:px-10 lg:px-16 dark:from-[#080d0b] dark:to-background-dark"
    >
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#2A9D8F]/3 blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#2A9D8F]">
          {t('stay.amenitiesLabel') || "AMENITIES"}
        </span>

        <h2 className="mt-4 font-display text-4xl font-black uppercase tracking-tighter text-slate-950 sm:text-5xl dark:text-white">
          {t('stay.amenitiesTitle') || "Everything You Need"}
        </h2>

        <p className="mt-4 text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          {t('stay.amenitiesSubtitle') || "Designed for comfort, progression, and daily ocean fuel"}
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {amenities.map((item, index) => (
          <AmenityCard 
            key={item.title} 
            item={item} 
            index={index}
            isHighlight={item.isHighlight}
          />
        ))}
      </div>
    </section>
  )
}

export default StayAmenities
