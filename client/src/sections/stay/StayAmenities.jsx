import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBed, FaUtensils, FaWifi, FaSwimmer, FaWineGlass, FaDumbbell } from 'react-icons/fa'
import { useI18n } from '../../app/providers/i18nContext.js'

function AmenityCard({ item, index, isHighlight }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group rounded-2xl border p-6 transition-all duration-300 ${
        isHighlight
          ? 'border-[#2A9D8F]/30 bg-gradient-to-br from-[#2A9D8F]/5 to-[#b7e28a]/5 shadow-lg hover:border-[#2A9D8F]/60 hover:shadow-xl'
          : 'border-slate-200 bg-white shadow-sm hover:shadow-md dark:border-white/10 dark:bg-surface-dark'
      }`}
    >
      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
        isHighlight
          ? 'bg-[#2A9D8F]/20 text-[#2A9D8F] group-hover:bg-[#2A9D8F] group-hover:text-white'
          : 'bg-[#b7e28a]/10 text-[#b7e28a] group-hover:bg-[#b7e28a] group-hover:text-black'
      }`}>
        {item.icon}
      </div>

      <h3 className="text-lg font-bold text-slate-950 dark:text-white">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {item.text}
      </p>

      {isHighlight && (
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          className="mt-4 inline-block"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2A9D8F]">
            ✨ {item.highlight}
          </span>
        </motion.div>
      )}
    </motion.article>
  )
}

function StayAmenities() {
  const { t } = useI18n()
  const amenitiesRef = useRef(null)
  
  // We can keep useInView if we want to trigger animations based on this ref
  // useInView(amenitiesRef, { once: true, margin: "-100px" })

  const amenities = [
    {
      icon: <FaBed className="text-xl" />,
      title: t('stay.comfortBeds'),
      text: t('stay.comfortBedsDesc'),
    },
    {
      icon: <FaUtensils className="text-xl" />,
      title: t('stay.breakfastIncluded'),
      text: t('stay.breakfastIncludedDesc'),
      highlight: 'Included Daily',
      isHighlight: true,
    },
    {
      icon: <FaWifi className="text-xl" />,
      title: t('stay.wifi'),
      text: t('stay.wifiDesc'),
    },
    {
      icon: <FaSwimmer className="text-xl" />,
      title: t('stay.swimmingPool'),
      text: t('stay.swimmingPoolDesc'),
    },
    {
      icon: <FaWineGlass className="text-xl" />,
      title: t('stay.rooftopBar'),
      text: t('stay.rooftopBarDesc'),
    },
    {
      icon: <FaDumbbell className="text-xl" />,
      title: t('stay.gym'),
      text: t('stay.gymDesc'),
    },
  ]

  return (
    <section 
      ref={amenitiesRef}
      className="relative bg-gradient-to-b from-slate-50 to-white px-6 py-20 sm:px-10 lg:px-16 dark:from-background-dark dark:to-surface-dark"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#2A9D8F]">
          {t('stay.amenitiesLabel')}
        </p>

        <h2 className="mt-4 font-display text-4xl font-bold text-slate-950 sm:text-5xl dark:text-white">
          {t('stay.amenitiesTitle')}
        </h2>

        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
          {t('stay.amenitiesSubtitle')}
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
