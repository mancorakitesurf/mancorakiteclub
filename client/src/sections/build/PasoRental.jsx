import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'
import { RENTAL_OPTIONS } from './buildData.js'
import { StepHeading, staggerItem } from './BuildUI.jsx'

export default function PasoRental({ extras, extrasQty, toggleExtra, setExtraQty }) {
  const { t } = useI18n()
  const rentalSubtotal = RENTAL_OPTIONS.reduce((sum, e) => {
    if (!extras.includes(e.id)) return sum
    const qty = (extrasQty && extrasQty[e.id]) || 1
    return sum + e.precio * qty
  }, 0)

  return (
    <div>
      <StepHeading index={3} title="Equipment Rental" subtitle="Add gear rental to your trip" />
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {RENTAL_OPTIONS.map((e) => {
          const selected = extras.includes(e.id)
          const qty = (extrasQty && extrasQty[e.id]) || 1
          return (
            <motion.div
              key={e.id}
              variants={staggerItem}
              className={`relative overflow-hidden rounded-xl border transition-all duration-200 ${selected
                ? 'border-[#b7e28a]/40 bg-[#b7e28a]/5 shadow-[inset_0_0_0_1px_rgba(183,226,138,0.15)]'
                : 'border-white/8 bg-[#152720] hover:border-white/16'
                }`}
            >
              <motion.button
                type="button"
                onClick={() => toggleExtra(e.id)}
                whileTap={{ scale: 0.99 }}
                className="flex w-full items-start gap-3 p-4 text-left"
              >
                <motion.div
                  animate={
                    selected
                      ? { backgroundColor: '#b7e28a', color: '#000' }
                      : { backgroundColor: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.5)' }
                  }
                  transition={{ duration: 0.18 }}
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                >
                  <e.Icon className="h-5 w-5" />
                </motion.div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-tight text-white">{t(e.labelKey)}</p>
                  <p className="mt-1.5 text-[11px] font-black text-[#b7e28a]">${e.precio} USD{e.unit ? ` ${e.unit}` : ''}</p>
                </div>
                <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all ${selected ? 'border-[#b7e28a] bg-[#b7e28a]' : 'border-white/20'}`}>
                  {selected && (
                    <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} className="h-3 w-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></motion.svg>
                  )}
                </div>
              </motion.button>

              <AnimatePresence initial={false}>
                {selected && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center gap-3 border-t border-white/8 px-4 py-3">
                      <span className="text-[11px] text-white/40">{t('build.days')}</span>
                      <div className="flex items-center gap-2">
                        <button type="button" onClick={() => setExtraQty(e.id, qty - 1)} className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-sm text-white/60 transition hover:border-[#b7e28a]/50 hover:text-[#b7e28a]">−</button>
                        <span className="w-5 text-center text-sm font-bold text-white">{qty}</span>
                        <button type="button" onClick={() => setExtraQty(e.id, qty + 1)} className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-sm text-white/60 transition hover:border-[#b7e28a]/50 hover:text-[#b7e28a]">+</button>
                      </div>
                      <span className="ml-auto text-[11px] font-bold text-[#b7e28a]">${e.precio * qty} USD</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </motion.div>
      <div className="mt-5 flex items-center justify-end gap-2">
        <div className="h-px flex-1 bg-white/6" />
        <p className="text-sm font-bold text-[#b7e28a]">${rentalSubtotal} USD</p>
        <span className="text-xs text-white/30">Rental</span>
      </div>
    </div>
  )
}
