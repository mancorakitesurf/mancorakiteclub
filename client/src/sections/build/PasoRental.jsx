import { motion } from 'framer-motion'
import { componentImages } from '../../config/images.js'
import { useI18n } from '../../app/providers/i18nContext.js'
import { RENTAL_OPTIONS, getRentalPrice } from './buildData.js'
import { StepHeading, staggerItem } from './BuildUI.jsx'

const {
  kiteCarousel,
  wingCarousel,
  surfCarousel,
  supCarousel,
} = componentImages["pages/BuildPage.jsx"]

const rentalImages = {
  'kite-gear-rental': kiteCarousel[2],
  'wingfoil-gear-rental': wingCarousel[0],
  'surfboard-rental': surfCarousel[0],
  'sup-rental': supCarousel[0],
}

export default function PasoRental({ headingIndex = 2, rentals, setRentalDays, removeRental }) {
  const { t } = useI18n()
  const rentalSubtotal = rentals.reduce((sum, rental) => sum + getRentalPrice(rental.rentalId, rental.days), 0)

  return (
    <div>
      <StepHeading index={headingIndex} title={t('build.rentalTitle')} subtitle={t('build.rentalOptionalSub')} />
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {RENTAL_OPTIONS.map((rental) => {
          const selected = rentals.find((item) => item.rentalId === rental.id)
          const selectedDays = selected?.days
          return (
            <motion.div
              key={rental.id}
              variants={staggerItem}
              className={`relative overflow-hidden rounded-xl border transition-all duration-200 ${selected
                ? 'border-[#b7e28a]/40 bg-[#b7e28a]/5 shadow-[inset_0_0_0_1px_rgba(183,226,138,0.15)]'
                : 'border-white/8 bg-[#152720] hover:border-white/16'
                }`}
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src={rentalImages[rental.id]}
                  alt=""
                  className={`h-full w-full object-cover transition duration-500 ${selected ? 'opacity-80 scale-[1.03]' : 'opacity-50 hover:opacity-65'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#152720] via-[#152720]/35 to-transparent" />
                <div className={`absolute left-3 top-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${selected ? 'bg-[#b7e28a] text-black' : 'bg-black/45 text-white'}`}>
                  <rental.Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="flex w-full items-start gap-3 p-4 text-left">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-tight text-white">{t(rental.labelKey)}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {rental.durations.map((duration) => (
                      <span
                        key={duration.days}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold text-white/60"
                      >
                        {duration.days} {t('build.days')} · ${duration.price}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-white/8 px-4 py-3">
                <p className="text-[11px] text-white/40">{t('build.selectRentalDays')}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {rental.durations.map((duration) => {
                    const isActive = selectedDays === duration.days
                    return (
                      <button
                        key={duration.days}
                        type="button"
                        onClick={() => setRentalDays(rental.id, duration.days)}
                        className={`rounded-full px-3 py-1 text-[11px] font-bold transition ${isActive
                          ? 'bg-[#b7e28a] text-black'
                          : 'bg-white/5 text-white/60 hover:bg-white/10'
                          }`}
                      >
                        {duration.days}
                      </button>
                    )
                  })}
                  {selected && (
                    <button
                      type="button"
                      onClick={() => removeRental(rental.id)}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold text-white/50 transition hover:border-white/30"
                    >
                      {t('build.removeRental')}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
      <div className="mt-5 flex items-center justify-end gap-2">
        <div className="h-px flex-1 bg-white/6" />
        <p className="text-sm font-bold text-[#b7e28a]">${rentalSubtotal} USD</p>
        <span className="text-xs text-white/30">{t('build.rentalsLabel')}</span>
      </div>
    </div>
  )
}
