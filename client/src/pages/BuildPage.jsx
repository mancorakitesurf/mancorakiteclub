import { componentImages } from '../config/images.js'
import SEO from '../components/SEO.jsx'
import { useI18n } from '../app/providers/i18nContext.jsx'
import { useTripBuilderStore } from '../store/useTripBuilderStore.js'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const { actividadKitesurf, actividadWingfoil, actividadSurf, actividadSup, nightcaption, DSC05231, DSC05128Panoramica, DSC05120HDR, DSC05085HDR, hora0, hora3, hora6, hora10, hora15 } = componentImages["pages/BuildPage.jsx"]

function IconKite({ className = 'h-7 w-7' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 12l8 10 8-10L12 2z" />
      <path d="M12 22v-10" />
      <path d="M4 12h16" />
    </svg>
  )
}
function IconWing({ className = 'h-7 w-7' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12c0-4 3-8 9-8s9 4 9 8" />
      <path d="M12 4v16" />
      <path d="M7 9c2-1 4-1.5 5-1.5s3 .5 5 1.5" />
      <path d="M5 14l7-2 7 2" />
    </svg>
  )
}
function IconSurf({ className = 'h-7 w-7' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 3L3 21" />
      <path d="M3 21c0 0 2-2 5-5 3-3 8-7 10-9s3-4 3-4" />
      <path d="M6 18c1-3 4-7 7-10" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  )
}
function IconSUP({ className = 'h-7 w-7' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v14" />
      <path d="M8 22c0-2 1.5-3 4-3s4 1 4 3" />
      <ellipse cx="12" cy="19" rx="5" ry="2" />
      <path d="M9 8h6" />
    </svg>
  )
}
function IconTransfer({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17h1l2-7h12l2 7h1" />
      <circle cx="7.5" cy="17" r="2" />
      <circle cx="16.5" cy="17" r="2" />
      <path d="M5.5 10V7a1 1 0 011-1h11a1 1 0 011 1v3" />
    </svg>
  )
}
function IconYoga({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="2" />
      <path d="M12 6v4M8 10l4 2 4-2M12 12v5M9 21l3-4 3 4" />
    </svg>
  )
}
function IconMassage({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18h16M4 18c0-3 2-5 5-6M20 18c0-3-2-5-5-6" />
      <circle cx="12" cy="8" r="4" />
      <path d="M9 4c0-1 1-2 3-2s3 1 3 2" />
    </svg>
  )
}
function IconEquipment({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  )
}
function IconCamera({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  )
}

const ACTIVIDADES = [
  {
    id: 'Kitesurf',
    label: 'Kitesurf',
    taglineKey: 'build.kitesurfTagline',
    Icon: IconKite,
  },
  {
    id: 'Wingfoil',
    label: 'Wingfoil',
    taglineKey: 'build.wingfoilTagline',
    Icon: IconWing,
  },
  {
    id: 'Surf',
    label: 'Surf',
    taglineKey: 'build.surfTagline',
    Icon: IconSurf,
  },
  {
    id: 'SUP',
    label: 'SUP',
    taglineKey: 'build.supTagline',
    Icon: IconSUP,
  },
]

const ACTIVIDAD_IMAGENES = {
  Kitesurf: actividadKitesurf,
  Wingfoil: actividadWingfoil,
  Surf: actividadSurf,
  SUP: actividadSup,
}

const NOCHES_OPTIONS = [3, 5, 7, 10, 14]
const NOCHES_IMAGENES = [nightcaption, DSC05231, DSC05128Panoramica, DSC05120HDR, DSC05085HDR]
const HORAS_IMAGENES = [hora0, hora3, hora6, hora10, hora15]
const NOCHES_COPY_KEYS = {
  3: 'build.fastEscape',
  5: 'build.balancedTrip',
  7: 'build.fullWeek',
  10: 'build.deeperStay',
  14: 'build.riderReset',
}

const HORAS_OPTIONS = [0, 3, 6, 10, 15]
const HORAS_COPY_KEYS = {
  0: 'build.accomOnly',
  3: 'build.introSession',
  6: 'build.progressionBlock',
  10: 'build.strongUpgrade',
  15: 'build.fullCoaching',
}

const EXTRAS_OPTIONS = [
  { id: 'Kitesurf full gear rental', labelKey: 'build.kitesurfGearRental', Icon: IconEquipment, precio: 60, unit: '/day', category: 'gear' },
  { id: 'Wingfoil rental', labelKey: 'build.wingfoilRental', Icon: IconEquipment, precio: 60, unit: '/day', category: 'gear' },
  { id: 'Surfboard rental', labelKey: 'build.surfboardRental', Icon: IconSurf, precio: 15, unit: '/day', category: 'gear' },
  { id: 'SUP / Paddle rental', labelKey: 'build.supPaddleRental', Icon: IconSUP, precio: 30, unit: '/day', category: 'gear' },
  { id: 'Day trip to other spots', labelKey: 'build.dayTrip', Icon: IconTransfer, precio: 55, unit: '/day', category: 'experience' },
  { id: 'Water supervision', labelKey: 'build.waterSupervision', Icon: IconYoga, precio: 15, unit: '/hr', category: 'experience' },
  { id: 'Massage', labelKey: 'build.massage', Icon: IconMassage, precio: 21, unit: '', category: 'wellness' },
  { id: 'Airport transfer', labelKey: 'build.airportTransfer', Icon: IconTransfer, precio: 42, unit: '', category: 'logistics' },
  { id: 'Photo & video pack', labelKey: 'build.photoVideoPack', Icon: IconCamera, precio: 40, unit: '', category: 'experience' },
]

const EXTRAS_CATEGORIES = [
  { id: 'gear', labelKey: 'build.gearEquipment' },
  { id: 'experience', labelKey: 'build.experiences' },
  { id: 'wellness', labelKey: 'build.wellness' },
  { id: 'logistics', labelKey: 'build.logistics' },
]

const PRECIO_NOCHE = 50
const PRECIO_HORA_MAP = {
  Kitesurf: 60,
  Wingfoil: 60,
  Surf: 25,
  SUP: 30,
}

function calcularPrecio(actividad, noches, horas, extras, extrasQty) {
  const precioHora = PRECIO_HORA_MAP[actividad] || 60
  const base = noches * PRECIO_NOCHE + horas * precioHora
  const extrasTotal = extras.reduce((sum, extraId) => {
    const found = EXTRAS_OPTIONS.find((e) => e.id === extraId)
    if (!found) return sum
    const qty = (extrasQty && extrasQty[extraId]) || 1
    return sum + found.precio * qty
  }, 0)
  return base + extrasTotal
}

const stepVariants = {
  enter: (direction) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
}
const stepTransition = { duration: 0.32, ease: 'easeInOut' }

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}
const staggerItem = {
  hidden: { y: 16, opacity: 0 },
  show: { y: 0, opacity: 1 },
}

function useAnimatedNumber(value) {
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

/* ─── PRICE UI ────────────────────────────────────────────────────────────── */
function PriceAmount({ precioTotal }) {
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

function FloatingPrice({ paso, precioTotal }) {
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

function MobilePriceBar({ paso, precioTotal }) {
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

/* ─── STEP INDICATOR — editorial style ───────────────────────────────────── */
function StepIndicator({ pasoActual }) {
  const { t } = useI18n()
  const pasos = [
    { n: 1, label: t('build.stepActivity') },
    { n: 2, label: t('build.stepNights') },
    { n: 3, label: t('build.stepClasses') },
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

/* ─── STEPS ───────────────────────────────────────────────────────────────── */

function StepHeading({ index, title, subtitle }) {
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

function PasoActividad({ actividad, setActividad }) {
  const { t } = useI18n()
  return (
    <div>
      <StepHeading index={1} title={t('build.chooseActivity')} subtitle={t('build.chooseActivitySub')} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {ACTIVIDADES.map((a) => {
          const selected = actividad === a.id
          const precioHora = PRECIO_HORA_MAP[a.id] || 60
          return (
            <motion.button
              key={a.id}
              type="button"
              onClick={() => setActividad(a.id)}
              whileHover={{ scale: 1.015, y: -3 }}
              whileTap={{ scale: 0.985 }}
              className={`group relative flex h-80 items-end overflow-hidden rounded-2xl text-left transition-all duration-300 ${selected
                ? 'ring-2 ring-[#b7e28a] ring-offset-2 ring-offset-[#0e1b17]'
                : 'ring-1 ring-white/8 hover:ring-white/20'
                }`}
            >
              <img
                src={ACTIVIDAD_IMAGENES[a.id]}
                alt={a.label}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${selected ? 'scale-[1.03] opacity-80' : 'scale-100 opacity-55 group-hover:scale-[1.02] group-hover:opacity-70'
                  }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px',
                }}
              />

              <AnimatePresence>
                {selected && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                    className="absolute right-4 top-4 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-[#b7e28a] text-black"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative z-10 w-full p-6">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#b7e28a]/70">{t(a.taglineKey)}</p>
                <p className="text-2xl font-black uppercase tracking-tight text-white">{a.label}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur">
                    <a.Icon className="h-3.5 w-3.5 text-[#b7e28a]" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/80">${precioHora}/hr</span>
                  </div>
                  {selected && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b7e28a]">{t('build.selected')}</span>
                  )}
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

function NightCard({ n, i, selected, onClick }) {
  const { t } = useI18n()
  return (
    <motion.button
      type="button"
      onClick={onClick}
      variants={staggerItem}
      whileHover={{ y: -4, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative min-h-[180px] overflow-hidden rounded-2xl text-left transition-all duration-300 ${selected
        ? 'ring-2 ring-[#b7e28a] ring-offset-2 ring-offset-[#0e1b17]'
        : 'ring-1 ring-white/8 hover:ring-white/20'
        }`}
    >
      <img
        src={NOCHES_IMAGENES[i]}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${selected ? 'scale-[1.04] opacity-70' : 'scale-100 opacity-45 group-hover:scale-[1.02] group-hover:opacity-60'
          }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      <div className="relative z-10 flex min-h-[180px] flex-col justify-between p-4">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#b7e28a]/60">{t(NOCHES_COPY_KEYS[n])}</p>
        </div>
        <div>
          <div className="flex items-end justify-between gap-2">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black leading-none text-white">{n}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{t('build.nights')}</span>
            </div>
            <span className={`rounded-md px-2 py-1 text-[11px] font-black ${selected ? 'bg-[#b7e28a] text-black' : 'bg-white/10 text-white'}`}>
              ${n * PRECIO_NOCHE}
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  )
}

function PasoNoches({ noches, setNoches }) {
  const { t } = useI18n()
  return (
    <div>
      <StepHeading index={2} title={t('build.howManyNights')} subtitle={t('build.howManyNightsSub')} />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5"
      >
        {NOCHES_OPTIONS.map((n, i) => (
          <NightCard key={n} n={n} i={i} selected={noches === n} onClick={() => setNoches(n)} />
        ))}
      </motion.div>
      <div className="mt-5 flex items-center justify-end gap-2">
        <div className="h-px flex-1 bg-white/6" />
        <p className="text-sm font-bold text-[#b7e28a]">${noches * PRECIO_NOCHE} USD</p>
        <span className="text-xs text-white/30">{t('build.accommodation')}</span>
      </div>
    </div>
  )
}

function PasoHoras({ horas, setHoras, actividad }) {
  const { t } = useI18n()
  const precioHora = PRECIO_HORA_MAP[actividad] || 60

  return (
    <div>
      <StepHeading
        index={3}
        title={t('build.classHours')}
        subtitle={`$${precioHora} USD/hr · ${actividad}`}
      />
      <AnimatePresence>
        {horas === 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mb-5 overflow-hidden"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-300/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-yellow-200/70">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-300/60" />
              {t('build.noClassesOnly')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5"
      >
        {HORAS_OPTIONS.map((h, i) => (
          <motion.button
            key={h}
            type="button"
            onClick={() => setHoras(h)}
            variants={staggerItem}
            whileHover={{ y: -4, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative min-h-[180px] overflow-hidden rounded-2xl text-left transition-all duration-300 ${horas === h
              ? 'ring-2 ring-[#b7e28a] ring-offset-2 ring-offset-[#0e1b17]'
              : 'ring-1 ring-white/8 hover:ring-white/20'
              }`}
          >
            <img
              src={HORAS_IMAGENES[i]}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${horas === h ? 'scale-[1.04] opacity-70' : 'scale-100 opacity-40 group-hover:scale-[1.02] group-hover:opacity-58'
                }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px',
              }}
            />
            <div className="relative z-10 flex min-h-[180px] flex-col justify-between p-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#b7e28a]/60">{t(HORAS_COPY_KEYS[h])}</p>
              <div className="flex items-end justify-between gap-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black leading-none text-white">{h}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    {h === 0 ? t('build.hrs') : t('build.hours')}
                  </span>
                </div>
                <span className={`rounded-md px-2 py-1 text-[11px] font-black ${horas === h ? (h === 0 ? 'bg-yellow-300 text-black' : 'bg-[#b7e28a] text-black') : 'bg-white/10 text-white'
                  }`}>
                  ${h * precioHora}
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>
      <div className="mt-5 flex items-center justify-end gap-2">
        <div className="h-px flex-1 bg-white/6" />
        <p className="text-sm font-bold text-[#b7e28a]">${horas * precioHora} USD</p>
        <span className="text-xs text-white/30">{t('build.classes')}</span>
      </div>
    </div>
  )
}

function PasoExtras({ extras, extrasQty, toggleExtra, setExtraQty }) {
  const { t } = useI18n()
  const extrasSubtotal = extras.reduce((sum, extraId) => {
    const found = EXTRAS_OPTIONS.find((e) => e.id === extraId)
    if (!found) return sum
    const qty = (extrasQty && extrasQty[extraId]) || 1
    return sum + found.precio * qty
  }, 0)

  return (
    <div>
      <StepHeading index={4} title={t('build.addExtras')} subtitle={t('build.addExtrasSub')} />

      <div className="space-y-8">
        {EXTRAS_CATEGORIES.map((cat) => {
          const catExtras = EXTRAS_OPTIONS.filter((e) => e.category === cat.id)
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

function PasoResumen({ actividad, noches, horas, extras, extrasQty, datosUsuario, setDatosUsuario, generarLinkWhatsApp }) {
  const { t } = useI18n()
  const precioTotal = calcularPrecio(actividad, noches, horas, extras, extrasQty)
  const precioAnimado = useAnimatedNumber(precioTotal)
  const canSend = datosUsuario.nombre.trim() !== '' && datosUsuario.email.trim() !== ''
  const [shakeKey, setShakeKey] = useState(0)

  return (
    <div>
      <StepHeading index={5} title={t('build.tripSummary')} subtitle={t('build.tripSummarySub')} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white/40">{t('build.yourTrip')}</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/50">{t('build.activity')}</span>
                <span className="font-bold text-white">{actividad}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">{t('build.nights')}</span>
                <span className="font-bold text-white">{noches} {t('build.nights')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">{t('build.classes')}</span>
                <span className="font-bold text-white">{horas} {t('build.hrs')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">{t('build.extrasLabel')}</span>
                <span className="font-bold text-white">{extras.length || t('build.noneSelected')}</span>
              </div>
              <div className="mt-4 border-t border-white/8 pt-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">{t('build.totalEstimated')}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-[#b7e28a]">$</span>
                    <span className="text-3xl font-black text-white">{precioAnimado}</span>
                    <span className="text-[10px] font-bold text-white/30">USD</span>
                  </div>
                </div>
                <p className="mt-2 text-[10px] text-white/30 italic">*{t('build.finalPriceNote')}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white/40">{t('build.yourDetails')}</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-white/50">{t('build.name')}</label>
                <input
                  type="text"
                  value={datosUsuario.nombre}
                  onChange={(e) => setDatosUsuario({ ...datosUsuario, nombre: e.target.value })}
                  placeholder={t('build.namePlaceholder')}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#b7e28a]/50 focus:outline-none focus:ring-1 focus:ring-[#b7e28a]/50"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-white/50">{t('build.email')}</label>
                <input
                  type="email"
                  value={datosUsuario.email}
                  onChange={(e) => setDatosUsuario({ ...datosUsuario, email: e.target.value })}
                  placeholder="email@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#b7e28a]/50 focus:outline-none focus:ring-1 focus:ring-[#b7e28a]/50"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <AnimatePresence>
            {!canSend && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mb-4 rounded-xl border border-yellow-300/20 bg-yellow-300/5 p-4 text-center"
              >
                <p className="text-xs font-medium text-yellow-200/70">{t('build.enterDetails')}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            key={shakeKey}
            href={canSend ? generarLinkWhatsApp() : '#'}
            target={canSend ? '_blank' : '_self'}
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!canSend) {
                e.preventDefault()
                setShakeKey((k) => k + 1)
              }
            }}
            animate={!canSend && shakeKey > 0 ? { x: [-4, 4, -4, 4, 0] } : {}}
            className={`flex h-16 items-center justify-center rounded-2xl text-sm font-black uppercase tracking-[0.25em] transition-all duration-300 ${canSend
              ? 'bg-[#b7e28a] text-black shadow-[0_10px_30px_rgba(183,226,138,0.3)] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(183,226,138,0.4)]'
              : 'bg-white/5 text-white/20 cursor-not-allowed'
              }`}
          >
            {t('build.sendViaWhatsApp')}
          </motion.a>
        </div>
      </div>
    </div>
  )
}

function BuildPage() {
  const { t, currentLang } = useI18n()
  const {
    actividad, setActividad,
    noches, setNoches,
    horas, setHoras,
    extras, toggleExtra,
    extrasQty, setExtraQty,
    paso, setPaso,
    datosUsuario, setDatosUsuario,
    reset,
  } = useTripBuilderStore()

  const [direction, setDirection] = useState(0)
  const containerRef = useRef(null)

  const cambiarPaso = (nuevoPaso) => {
    setDirection(nuevoPaso > paso ? 1 : -1)
    setPaso(nuevoPaso)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const generarLinkWhatsApp = () => {
    const total = calcularPrecio(actividad, noches, horas, extras, extrasQty)
    const listExtras = EXTRAS_OPTIONS.filter((e) => extras.includes(e.id))
      .map((e) => `- ${e.labelKey} (x${extrasQty[e.id] || 1})`)
      .join('\n')

    const mensaje = `¡Hola! He armado mi viaje en la web:
- Actividad: ${actividad}
- Noches: ${noches}
- Horas de clase: ${horas}
${listExtras ? `- Extras:\n${listExtras}` : ''}
---
Total estimado: $${total} USD
Nombre: ${datosUsuario.nombre}
Email: ${datosUsuario.email}`

    return `https://wa.me/51996557689?text=${encodeURIComponent(mensaje)}`
  }

  const precioTotal = calcularPrecio(actividad, noches, horas, extras, extrasQty)

  return (
    <div className="min-h-screen bg-[#0e1b17]">
      <SEO
        titleKey="build.heroTitle1"
        descKey="build.heroSubtitle"
        titleFallback="Build Your Trip | Máncora Kite Club"
      />

      <div className="relative overflow-hidden bg-background-dark py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <img src={DSC05128Panoramica} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e1b17]/80 to-[#0e1b17]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#b7e28a]"
          >
            {t('build.heroLabel')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black uppercase tracking-tighter text-white sm:text-6xl lg:text-7xl"
          >
            {t('build.heroTitle1')}{' '}
            <span className="text-transparent transition-all [text-shadow:0_0_20px_rgba(183,226,138,0.3)] [-webkit-text-stroke:1px_rgba(183,226,138,0.5)]">
              {t('build.heroTitle2')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-sm tracking-wide text-white/50 sm:text-base"
          >
            {t('build.heroSubtitle')}
          </motion.p>
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8" ref={containerRef}>
        <StepIndicator pasoActual={paso} />

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={paso}
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={stepTransition}
            >
              {paso === 1 && <PasoActividad actividad={actividad} setActividad={setActividad} />}
              {paso === 2 && <PasoNoches noches={noches} setNoches={setNoches} />}
              {paso === 3 && <PasoHoras horas={horas} setHoras={setHoras} actividad={actividad} />}
              {paso === 4 && (
                <PasoExtras
                  extras={extras}
                  extrasQty={extrasQty}
                  toggleExtra={toggleExtra}
                  setExtraQty={setExtraQty}
                />
              )}
              {paso === 5 && (
                <PasoResumen
                  actividad={actividad}
                  noches={noches}
                  horas={horas}
                  extras={extras}
                  extrasQty={extrasQty}
                  datosUsuario={datosUsuario}
                  setDatosUsuario={setDatosUsuario}
                  generarLinkWhatsApp={generarLinkWhatsApp}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/6 pt-8">
          <button
            type="button"
            onClick={() => (paso === 1 ? reset() : cambiarPaso(paso - 1))}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 transition hover:text-white"
          >
            {paso === 1 ? t('build.reset') : t('build.back')}
          </button>

          {paso < 5 && (
            <button
              type="button"
              onClick={() => cambiarPaso(paso + 1)}
              className="group flex h-12 items-center gap-4 rounded-full bg-white/5 pl-8 pr-2 transition-all hover:bg-white/10"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                {t('build.next')}
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b7e28a] text-black transition-transform group-hover:translate-x-1">
                →
              </div>
            </button>
          )}
        </div>
      </main>

      <FloatingPrice paso={paso} precioTotal={precioTotal} />
      <MobilePriceBar paso={paso} precioTotal={precioTotal} />
    </div>
  )
}

export default BuildPage
