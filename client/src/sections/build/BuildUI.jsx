import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'
import { SlotText } from 'slot-text/react'
import 'slot-text/style.css'

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

export function SlotNumber({ value }) {
  return (
    <span className="inline-block select-none align-middle leading-none">
      <SlotText text={String(value)} />
    </span>
  )
}

export function PriceAmount({ precioTotal }) {
  const { t } = useI18n()
  if (precioTotal <= 0) {
    return <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">{t('build.buildEstimate')}</span>
  }
  return (
    <div className="flex items-center gap-1 leading-none">
      <span className="text-sm font-bold text-[#b7e28a]">$</span>
      <span className="text-lg font-black text-white">
        <SlotNumber value={precioTotal} />
      </span>
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-0.5">USD</span>
    </div>
  )
}

export function FloatingPrice({ paso, precioTotal }) {
  const { t } = useI18n()
  return (
    <AnimatePresence>
      {paso >= 2 && paso <= 3 && (
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
      {paso >= 2 && paso <= 3 && (
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

export function MobileBuilderNav({ paso, precioTotal, onBack, onNext, activeTab, setActiveTab }) {
  const { t } = useI18n()
  const showBack = paso > 1
  const isLastStep = paso === 3

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0b1714]/95 px-4 py-3 shadow-[0_-18px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-5xl items-center gap-3">
        {showBack && (
          <button
            type="button"
            onClick={() => {
              if (isLastStep && activeTab === 'summary') {
                setActiveTab('options')
              } else {
                onBack()
              }
            }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-black text-white/70"
            aria-label={t('build.back')}
          >
            ←
          </button>
        )}

        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/35">
            {t('build.estimatedTotal')}
          </p>
          <PriceAmount precioTotal={precioTotal} />
        </div>

        {!isLastStep && (
          <button
            type="button"
            onClick={onNext}
            className="flex h-12 shrink-0 items-center justify-center rounded-full bg-[#b7e28a] px-5 text-[11px] font-black uppercase tracking-[0.18em] text-black shadow-[0_10px_30px_rgba(183,226,138,0.25)]"
          >
            {t('build.next')}
          </button>
        )}

        {isLastStep && activeTab === 'options' && (
          <button
            type="button"
            onClick={() => {
              setActiveTab('summary')
              setTimeout(() => {
                const el = document.getElementById('trip-summary')
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }, 80)
            }}
            className="flex h-12 shrink-0 items-center justify-center rounded-full bg-[#b7e28a] px-5 text-[11px] font-black uppercase tracking-[0.18em] text-black shadow-[0_10px_30px_rgba(183,226,138,0.25)]"
          >
            {t('build.review')}
          </button>
        )}
      </div>
    </div>
  )
}

// ── Icon set for the step indicator ──────────────────────────────
function IconStep1({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 12l8 10 8-10L12 2z" />
      <path d="M12 22v-10M4 12h16" />
    </svg>
  )
}
function IconStep2({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M16 8V6a4 4 0 00-8 0v2" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
    </svg>
  )
}
function IconStep3({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 4.18 2 2 0 015 2h3a2 2 0 012 1.72 12.5 12.5 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.5 12.5 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

export function StepIndicator({ pasoActual }) {
  const { t } = useI18n()
  const STEPS = [
    { n: 1, label: t('build.stepExperience'), Icon: IconStep1 },
    { n: 2, label: t('build.stepStay'),       Icon: IconStep2 },
    { n: 3, label: t('build.stepSend'),       Icon: IconStep3 },
  ]

  return (
    <div className="mb-10 flex w-full items-center justify-center gap-0 px-2">
      {STEPS.map((step, i) => {
        const done    = pasoActual > step.n
        const active  = pasoActual === step.n
        const inactive = !done && !active

        return (
          <div key={step.n} className="flex items-center">
            {/* Node */}
            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={active ? {
                  boxShadow: ['0 0 0px rgba(183,226,138,0)', '0 0 18px rgba(183,226,138,0.45)', '0 0 0px rgba(183,226,138,0)'],
                } : {}}
                transition={active ? { repeat: Infinity, duration: 2.2 } : {}}
                className={`relative flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                  done    ? 'border-[#b7e28a] bg-[#b7e28a]' :
                  active  ? 'border-[#b7e28a] bg-[#b7e28a]/10' :
                            'border-white/10 bg-white/5'
                }`}
              >
                <AnimatePresence mode="wait">
                  {done ? (
                    <motion.svg
                      key="check"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                      viewBox="0 0 24 24" fill="none" stroke="#0e1b17" strokeWidth="3"
                      strokeLinecap="round" strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </motion.svg>
                  ) : (
                    <motion.div key="icon" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                      <step.Icon className={`h-5 w-5 ${active ? 'text-[#b7e28a]' : 'text-white/25'}`} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <span className={`text-[9px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 sm:text-[10px] ${
                active ? 'text-white/70' : done ? 'text-[#b7e28a]/60' : 'text-white/20'
              }`}>
                {step.label}
              </span>
            </div>

            {/* Connector */}
            {i < STEPS.length - 1 && (
              <div className="relative mx-3 mb-5 h-px w-12 overflow-hidden rounded-full bg-white/8 sm:w-20">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: done ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="h-full origin-left rounded-full bg-gradient-to-r from-[#b7e28a]/80 to-[#b7e28a]"
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

// ── Check burst flash when adding a package ───────────────────────
export function AddedCheckBurst({ trigger }) {
  return (
    <AnimatePresence>
      {trigger && (
        <motion.span
          key={trigger}
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 2.2, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#b7e28a" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </motion.span>
      )}
    </AnimatePresence>
  )
}

// ── Live Summary Panel (visible on lg screens, paso 1 only) ───────
export function LiveSummaryPanel({ selectedPackages, precioTotal }) {
  const { t } = useI18n()
  const hasItems = selectedPackages.length > 0

  return (
    <AnimatePresence>
      {hasItems && (
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 40, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          className="hidden lg:block sticky top-24 self-start min-w-[220px] rounded-2xl border border-[#b7e28a]/15 bg-[#0b1714]/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        >
          <p className="mb-4 text-[9px] font-black uppercase tracking-[0.3em] text-[#b7e28a]">
            {t('build.yourTrip')}
          </p>

          <div className="space-y-2">
            {selectedPackages.map((pkg) => (
              <motion.div
                key={pkg.packageId}
                initial={{ x: 12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -12, opacity: 0 }}
                className="flex items-center gap-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#b7e28a] shrink-0" />
                <span className="text-[11px] text-white/70 leading-tight capitalize">
                  {pkg.packageId.replace(/-/g, ' ')}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 border-t border-white/8 pt-4">
            <p className="text-[9px] text-white/35 uppercase tracking-widest mb-1">{t('build.estimatedTotal')}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-bold text-[#b7e28a]">$</span>
              <span className="text-2xl font-black text-white">
                <SlotNumber value={precioTotal} />
              </span>
              <span className="text-[9px] text-white/30 uppercase tracking-widest">USD</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
