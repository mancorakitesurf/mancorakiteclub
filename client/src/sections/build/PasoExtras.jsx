import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'
import { NON_RENTAL_EXTRAS, NON_RENTAL_CATEGORIES } from './buildData.js'
import { StepHeading, staggerItem } from './BuildUI.jsx'

export default function PasoExtras({ extras, extrasQty, toggleExtra, setExtraQty }) {
  const { t } = useI18n()
  const extrasSubtotal = extras.reduce((sum, extraId) => {
    const found = NON_RENTAL_EXTRAS.find((e) => e.id === extraId)
    if (!found) return sum
    const qty = (extrasQty && extrasQty[extraId]) || 1
    return sum + found.precio * qty
  }, 0)

  return (
    <div>
      <StepHeading index={4} title={t('build.addExtras')} subtitle={t('build.addExtrasSub')} />

      <div className="space-y-8">
        {NON_RENTAL_CATEGORIES.map((cat) => {
          const catExtras = NON_RENTAL_EXTRAS.filter((e) => e.category === cat.id)
          if (!catExtras.length) return null
          return (
            <div key={cat.id}>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/35">{t(cat.labelKey)}</span>
                <div className="h-px flex-1 bg-white/6" />
              </div>

              <motion.div
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
              >
                {catExtras.map((e) => {
                  const selected = extras.includes(e.id)
                  const qty = (extrasQty && extrasQty[e.id]) || 1
                  const hasQty = e.unit === '/day' || e.unit === '/hr'
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
                          <p className="mt-1.5 text-[11px] font-black text-[#b7e28a]">
                            ${e.precio} USD{e.unit ? ` ${e.unit}` : ''}
                          </p>
                        </div>

                        <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all ${selected ? 'border-[#b7e28a] bg-[#b7e28a]' : 'border-white/20'
                          }`}>
                          {selected && (
                            <motion.svg
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="h-3 w-3 text-black"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </motion.svg>
                          )}
                        </div>
                      </motion.button>

                      <AnimatePresence initial={false}>
                        {selected && hasQty && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="flex items-center gap-3 border-t border-white/8 px-4 py-3">
                              <span className="text-[11px] text-white/40">
                                {e.unit === '/day' ? t('build.days') : t('build.hoursLabel')}
                              </span>
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => setExtraQty(e.id, qty - 1)}
                                  className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-sm text-white/60 transition hover:border-[#b7e28a]/50 hover:text-[#b7e28a]"
                                >
                                  −
                                </button>
                                <span className="w-5 text-center text-sm font-bold text-white">{qty}</span>
                                <button
                                  type="button"
                                  onClick={() => setExtraQty(e.id, qty + 1)}
                                  className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-sm text-white/60 transition hover:border-[#b7e28a]/50 hover:text-[#b7e28a]"
                                >
                                  +
                                </button>
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
            </div>
          )
        })}
      </div>

      <div className="sticky bottom-[140px] z-20 mt-8 flex items-center justify-between rounded-xl border border-white/8 bg-[#0e1b17]/95 px-4 py-3 backdrop-blur lg:bottom-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">
          {extras.length} {t('build.extrasSelected')}
        </span>
        <span className="text-sm font-black text-[#b7e28a]">${extrasSubtotal} USD</span>
      </div>
    </div>
  )
}
