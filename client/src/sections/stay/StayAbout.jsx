import { motion } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'
import { FaMapMarkerAlt, FaSwimmingPool, FaLock, FaSun } from 'react-icons/fa'

function HighlightCard({ icon, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="flex flex-col gap-3 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/5 dark:bg-surface-dark"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2A9D8F]/10 text-[#2A9D8F] dark:bg-[#b7e28a]/10 dark:text-[#b7e28a]">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">{title}</h4>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-normal">{desc}</p>
      </div>
    </motion.div>
  )
}

function StayAbout() {
  const { t } = useI18n()

  const highlights = [
    {
      icon: <FaMapMarkerAlt className="text-base" />,
      title: t('stay.about.spotTitle') || "Spot beachfront",
      desc: t('stay.about.spotDesc') || "Located directly on the beach, step out of your bed and onto the water."
    },
    {
      icon: <FaLock className="text-base" />,
      title: t('stay.about.storageTitle') || "Secure storage",
      desc: t('stay.about.storageDesc') || "Individual locked storage for sails, kites, and boards with washing facilities."
    },
    {
      icon: <FaSwimmingPool className="text-base" />,
      title: t('stay.about.poolTitle') || "Saltwater pool",
      desc: t('stay.about.poolDesc') || "Relax after long sessions in our ocean-view pool area."
    },
    {
      icon: <FaSun className="text-base" />,
      title: t('stay.about.vibeTitle') || "Sunset socials",
      desc: t('stay.about.vibeDesc') || "Enjoy community rooftop gatherings with standard-setting sunset views."
    }
  ]

  return (
    <section className="relative px-6 py-20 sm:px-10 lg:px-16 lg:py-28 dark:bg-background-dark bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left Column - Storytelling */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs font-black uppercase tracking-[0.35em] text-[#2A9D8F] dark:text-[#b7e28a]">
            {t('stay.introLabel') || "ACCOMMODATION"}
          </span>

          <h1 className="mt-5 font-display text-4xl font-black uppercase tracking-tighter text-slate-950 sm:text-5xl lg:text-6xl dark:text-white leading-tight">
            {t('stay.introTitle') || "Your Beachfront Sanctuary"}
          </h1>

          <div className="mt-8 space-y-6 text-sm sm:text-base leading-relaxed text-slate-650 dark:text-slate-350">
            <p>{t('stay.introP1')}</p>
            <p>{t('stay.introP2')}</p>
          </div>
        </motion.div>

        {/* Right Column - Highlights Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <HighlightCard
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StayAbout
