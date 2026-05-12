import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'

export const stepVariants = {
  enter: (direction) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
}

export const stepTransition = { duration: 0.32, ease: 'easeInOut' }

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

export const staggerItem = {
  hidden: { y: 16, opacity: 0 },
  show: { y: 0, opacity: 1 },
}

export function useAnimatedNumber(value) {
  const [displayValue, setDisplayValue] = useState(0)
  useEffect(() => {
    let frameId
    const duration = 800
    const start = performance.now()
    function animate(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(value * eased))
      if (progress < 1) frameId = requestAnimationFrame(animate)
    }
    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [value])
  return displayValue
}

export function PriceAmount({ precioTotal }) {
  const { t } = useI18n()
  if (precioTotal <= 0) {
    return <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">{t('build.buildEstimate')}</span>
  }
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-sm font-bold text-[#b7e28a]">$</span>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={precioTotal}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="text-lg font-black text-white"
        >
          {precioTotal}
        </motion.span>
      </AnimatePresence>
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">USD</span>
    </div>
  )
}

export function FloatingPrice({ paso, precioTotal }) {
  const { t } = useI18n()
  return (
    <AnimatePresence>
      {paso >= 2 && paso < 5 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 left-4 z-40 rounded-full border border-[#b7e28a]/20 bg-[#0e1b17]/95 px-4 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/50">{t('build.estimatedTotal')}</p>
          <PriceAmount precioTotal={precioTotal} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function MobilePriceBar({ paso, precioTotal }) {
  const { t } = useI18n()
  return (
    <AnimatePresence>
      {paso >= 2 && paso < 5 && (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="sticky bottom-[74px] z-30 mt-6 flex items-center justify-between rounded-xl border border-[#b7e28a]/15 bg-[#0e1b17]/95 px-4 py-3 backdrop-blur lg:hidden"
        >
          <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/35">{t('build.estimated')}</p>
          <PriceAmount precioTotal={precioTotal} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function StepIndicator({ pasoActual }) {
  const { t } = useI18n()
  const pasos = [
    { n: 1, label: t('build.stepActivity') },
    { n: 2, label: t('build.stepNights') },
    { n: 3, label: 'Rental' },
    { n: 4, label: t('build.stepExtras') },
    { n: 5, label: t('build.stepSummary') },
  ]

  return (
    <div className="mb-10 flex w-full items-center justify-center gap-0 overflow-x-auto px-2">
      {pasos.map((p, i) => {
        const completado = pasoActual > p.n
        const actual = pasoActual === p.n

        return (
          <div key={p.n} className="flex items-center">
            <div className="flex flex-col items-center px-2 sm:px-3">
              <div className="flex items-center gap-1.5">
                <motion.span
                  animate={actual ? { opacity: [0.5, 1, 0.5] } : {}}
                  transition={actual ? { repeat: Infinity, duration: 2 } : {}}
                  className={`text-[10px] font-black tabular-nums transition-colors sm:text-[11px] ${completado
                    ? 'text-[#b7e28a]'
                    : actual
                      ? 'text-[#b7e28a]'
                      : 'text-white/20'
                    }`}
                >
                  {String(p.n).padStart(2, '0')}
                </motion.span>

                {completado && (
                  <motion.svg
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                    className="h-3 w-3 text-[#b7e28a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </motion.svg>
                )}
              </div>

              <span
                className={`mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors sm:block ${actual ? 'text-white/70' : completado ? 'text-[#b7e28a]/60' : 'text-white/20'
                  }`}
              >
                {p.label}
              </span>

              <motion.div
                initial={false}
                animate={{ scaleX: actual ? 1 : 0, opacity: actual ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="mt-1.5 h-px w-full origin-left bg-[#b7e28a]"
              />
            </div>

            {i < pasos.length - 1 && (
              <div className="relative mx-0 h-px w-6 overflow-hidden bg-white/8 sm:w-10">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: completado ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full origin-left bg-[#b7e28a]/50"
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export function StepHeading({ index, title, subtitle }) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-3">
        <span className="text-[11px] font-black tracking-[0.3em] text-[#b7e28a]/50">
          {String(index).padStart(2, '0')}
        </span>
        <h2 className="text-2xl font-black uppercase tracking-[0.12em] text-white sm:text-3xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-2 pl-8 text-sm text-white/40">{subtitle}</p>
      )}
    </div>
  )
}
