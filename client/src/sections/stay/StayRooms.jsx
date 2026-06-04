import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaWifi, FaSnowflake, FaSwimmer, FaDumbbell, FaTree, FaUser, FaWhatsapp, FaArrowRight } from 'react-icons/fa'
import { useI18n } from '../../app/providers/i18nContext.js'
import { ROOM_OPTIONS } from '../../config/accommodation.js'
import { buildWhatsAppUrl } from '../../lib/whatsapp.js'

function AmenityIcon({ name }) {
  const iconClass = "text-lg text-[#2A9D8F] dark:text-[#b7e28a]"
  switch (name) {
    case 'wifi':
      return (
        <div className="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-white/5 px-3 py-2 border border-slate-200/50 dark:border-white/5">
          <FaWifi className={iconClass} />
          <span className="text-xs font-bold tracking-wide text-slate-700 dark:text-slate-350">WiFi</span>
        </div>
      )
    case 'ac':
      return (
        <div className="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-white/5 px-3 py-2 border border-slate-200/50 dark:border-white/5">
          <FaSnowflake className={iconClass} />
          <span className="text-xs font-bold tracking-wide text-slate-700 dark:text-slate-350">A/C</span>
        </div>
      )
    case 'pool':
      return (
        <div className="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-white/5 px-3 py-2 border border-slate-200/50 dark:border-white/5">
          <FaSwimmer className={iconClass} />
          <span className="text-xs font-bold tracking-wide text-slate-700 dark:text-slate-350">Pool</span>
        </div>
      )
    case 'gym':
      return (
        <div className="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-white/5 px-3 py-2 border border-slate-200/50 dark:border-white/5">
          <FaDumbbell className={iconClass} />
          <span className="text-xs font-bold tracking-wide text-slate-700 dark:text-slate-350">Gym</span>
        </div>
      )
    case 'garden':
      return (
        <div className="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-white/5 px-3 py-2 border border-slate-200/50 dark:border-white/5">
          <FaTree className={iconClass} />
          <span className="text-xs font-bold tracking-wide text-slate-700 dark:text-slate-350">Garden</span>
        </div>
      )
    case 'ocean-view':
      return (
        <div className="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-white/5 px-3 py-2 border border-slate-200/50 dark:border-white/5">
          <FaSwimmer className={iconClass} />
          <span className="text-xs font-bold tracking-wide text-slate-700 dark:text-slate-350">Ocean View</span>
        </div>
      )
    default:
      return null
  }
}

function RoomRow({ room, index }) {
  const { t, currentLang } = useI18n()
  const isEven = index % 2 === 0

  const buildUrl = `/build${currentLang === 'en' ? '' : currentLang === 'fr' ? '/fr' : '/esp'}?guests=${room.capacity}&stay=true`
  const message = `${t('stay.whatsappMessage')} - Room: ${t(room.nameKey)}`

  // Alternating flex direction on desktop (md/lg screens)
  const layoutClass = isEven
    ? 'lg:flex-row'
    : 'lg:flex-row-reverse'

  const glowColorClass = isEven
    ? 'group-hover:shadow-[0_20px_50px_rgba(42,157,143,0.12)]'
    : 'group-hover:shadow-[0_20px_50px_rgba(183,226,138,0.12)]'

  const borderColorClass = isEven
    ? 'group-hover:border-[#2A9D8F]/40'
    : 'group-hover:border-[#b7e28a]/40'

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col ${layoutClass} w-full overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 dark:bg-slate-900/40 backdrop-blur-md shadow-xl transition-all duration-500 dark:border-white/5 ${glowColorClass} ${borderColorClass}`}
    >
      {/* 1. Visual/Image Column */}
      <div className="relative h-72 w-full overflow-hidden lg:h-auto lg:w-1/2 min-h-[350px]">
        <img
          src={room.image}
          alt={t(room.nameKey)}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Floating Capacity Badge */}
        <div className="absolute top-6 left-6 z-10 flex items-center gap-2 rounded-full bg-slate-950/70 px-4 py-2 text-xs font-bold text-[#b7e28a] backdrop-blur-md border border-white/10 shadow-lg">
          <FaUser className="text-[10px]" />
          <span>
            {room.capacity} {room.capacity === 1 ? t('build.person') : t('build.people')}
          </span>
        </div>

        {/* Floating Pricing */}
        <div className="absolute bottom-6 left-6 z-10">
          <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#b7e28a] mb-1">Exclusive rates</p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-4xl font-black text-white leading-none tracking-tight">${room.pricePerNight}</span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">{t('stay.perNight')}</span>
          </div>
        </div>
      </div>

      {/* 2. Content Column */}
      <div className="flex w-full flex-col justify-between p-8 sm:p-10 lg:w-1/2 lg:p-12">
        <div>
          {/* Section subtitle decoration */}
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#2A9D8F] dark:text-[#b7e28a] mb-2 block">
            {room.capacity === 1 ? 'Solo Traveler Paradise' : 'Couple / Shared Sanctuary'}
          </span>

          <h3 className="font-display text-3xl font-black text-slate-950 dark:text-white transition-colors duration-300 group-hover:text-[#2A9D8F] dark:group-hover:text-[#b7e28a] tracking-tight">
            {t(room.nameKey)}
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-350">
            {t(room.descriptionKey)}
          </p>

          {/* Amenities wrap */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {room.amenities.map((item) => (
              <AmenityIcon key={item} name={item} />
            ))}
          </div>

          {/* Rate includes */}
          <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50/50 p-5 dark:border-white/5 dark:bg-white/[0.01]">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500 mb-3.5">
              {t('stay.ratesSubtitle') || "What's included"}
            </h4>
            <ul className="grid gap-2.5 sm:grid-cols-2 text-xs text-slate-750 dark:text-slate-300 font-medium">
              {room.includesKeys.map((key) => (
                <li key={key} className="flex items-start gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#2A9D8F]/10 text-[9px] text-[#2A9D8F] dark:bg-[#b7e28a]/10 dark:text-[#b7e28a] font-bold">✓</span>
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to={buildUrl}
            className="flex-1 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#2A9D8F] to-[#2A9D8F]/90 text-xs font-black uppercase tracking-widest text-white transition hover:shadow-lg hover:shadow-[#2A9D8F]/20 hover:scale-[1.02]"
          >
            <FaArrowRight className="text-[10px]" />
            {t('stay.selectRoom') || 'Book via Builder'}
          </Link>
          <a
            href={buildWhatsAppUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-slate-200 hover:border-[#b7e28a] px-8 text-xs font-black uppercase tracking-widest text-slate-800 dark:text-[#b7e28a] dark:border-white/10 hover:bg-[#b7e28a]/10 transition hover:scale-[1.02]"
          >
            <FaWhatsapp className="text-sm" />
            {t('stay.bookWhatsApp') || 'Inquire'}
          </a>
        </div>
      </div>
    </motion.article>
  )
}

function StayRooms() {
  const { t } = useI18n()

  return (
    <section className="relative px-6 py-24 sm:px-10 lg:px-16 overflow-hidden bg-slate-50/40 dark:bg-[#080d0b]">
      {/* Visual backgrounds design */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#2A9D8F]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-[#b7e28a]/4 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2A9D8F]/10 to-[#b7e28a]/10 border border-[#2A9D8F]/20 text-[10px] font-black uppercase tracking-[0.3em] text-[#2A9D8F] dark:text-[#b7e28a] shadow-sm">
              ⚡ Luxury Lodging
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-black text-slate-950 dark:text-white uppercase tracking-tighter">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A9D8F] to-[#b7e28a] [text-shadow:0_0_30px_rgba(42,157,143,0.2)]">Sanctuary</span>
          </h2>
          
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('stay.rooms.title') || 'Each space at Bali Lodge is fully tailored to support active ocean days with premium comfort, secure storage, and organic breakfast.'}
          </p>
        </motion.div>

        {/* Room showcase list layout */}
        <div className="space-y-12">
          {ROOM_OPTIONS.map((room, index) => (
            <RoomRow key={room.id} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StayRooms
