import { motion } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'
import { RENTAL_OPTIONS, getRentalPrice } from './buildData.js'
import { StepHeading, staggerItem } from './BuildUI.jsx'

export default function PasoRental({ rentals, setRentalDays, removeRental }) {
  const { t } = useI18n()
  const rentalSubtotal = rentals.reduce((sum, rental) => sum + getRentalPrice(rental.rentalId, rental.days), 0)

  return (
    <div>
      <StepHeading index={2} title={t('build.rentalTitle')} subtitle={t('build.rentalSub')} />
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
              <div className="flex w-full items-start gap-3 p-4 text-left">
                <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${selected ? 'bg-[#b7e28a] text-black' : 'bg-white/5 text-white/60'}`}>
                  <rental.Icon className="h-5 w-5" />
                </div>
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
