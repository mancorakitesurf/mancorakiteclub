import { componentImages } from '../config/images.js'
import SEO from '../components/SEO.jsx'
import FullscreenHero from '../components/ui/FullscreenHero.jsx'
import { createPresetHeroSlides } from '../lib/fullscreenHeroSlides.js'
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
function IconMeal({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 010 8h-1" />
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
      <path d="M6 1v3M10 1v3M14 1v3" />
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
    tagline: 'Harness the wind, own the water',
    Icon: IconKite,
  },
  {
    id: 'Wingfoil',
    label: 'Wingfoil',
    tagline: 'Fly above the surface',
    Icon: IconWing,
  },
  {
    id: 'Surf',
    label: 'Surf',
    tagline: 'Read the wave, ride it clean',
    Icon: IconSurf,
  },
  {
    id: 'SUP',
    label: 'SUP',
    tagline: 'Calm water, strong paddle',
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
const NOCHES_COPY = {
  3: 'Fast escape',
  5: 'Balanced trip',
  7: 'Full week',
  10: 'Deeper stay',
  14: 'Rider reset',
}

const HORAS_OPTIONS = [0, 3, 6, 10, 15]
const HORAS_COPY = {
  0: 'Accommodation only',
  3: 'Intro session',
  6: 'Progression block',
  10: 'Strong upgrade',
  15: 'Full coaching',
}

const EXTRAS_OPTIONS = [
  { id: 'Kitesurf full gear rental', label: 'Kitesurf full gear rental', Icon: IconEquipment, precio: 60, unit: '/day', category: 'gear' },
  { id: 'Wingfoil rental', label: 'Wingfoil rental', Icon: IconEquipment, precio: 60, unit: '/day', category: 'gear' },
  { id: 'Surfboard rental', label: 'Surfboard rental', Icon: IconSurf, precio: 15, unit: '/day', category: 'gear' },
  { id: 'SUP / Paddle rental', label: 'SUP / Paddle rental', Icon: IconSUP, precio: 30, unit: '/day', category: 'gear' },
  { id: 'Day trip to other spots', label: 'Day trip to other spots', Icon: IconTransfer, precio: 55, unit: '/day', category: 'experience' },
  { id: 'Water supervision', label: 'Water supervision (independent riders)', Icon: IconYoga, precio: 15, unit: '/hr', category: 'experience' },
  { id: 'Massage', label: 'Massage', Icon: IconMassage, precio: 21, unit: '', category: 'wellness' },
  { id: 'Airport transfer', label: 'Airport transfer (direct payment to driver)', Icon: IconTransfer, precio: 42, unit: '', category: 'logistics' },
  { id: 'Photo & video pack', label: 'Photo & video pack', Icon: IconCamera, precio: 40, unit: '', category: 'experience' },
]

const EXTRAS_CATEGORIES = [
  { id: 'gear', label: 'Gear & Equipment' },
  { id: 'experience', label: 'Experiences' },
  { id: 'wellness', label: 'Wellness' },
  { id: 'logistics', label: 'Logistics' },
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
  if (precioTotal <= 0) {
    return <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Build your estimate</span>
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
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/50">Estimated total</p>
          <PriceAmount precioTotal={precioTotal} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MobilePriceBar({ paso, precioTotal }) {
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
          <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/35">Estimated</p>
          <PriceAmount precioTotal={precioTotal} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─── STEP INDICATOR — editorial style ───────────────────────────────────── */
function StepIndicator({ pasoActual }) {
  const pasos = [
    { n: 1, label: 'Activity' },
    { n: 2, label: 'Nights' },
    { n: 3, label: 'Classes' },
    { n: 4, label: 'Extras' },
    { n: 5, label: 'Summary' },
  ]

  return (
    <div className="mb-10 flex w-full items-center justify-center gap-0 overflow-x-auto px-2">
      {pasos.map((p, i) => {
        const completado = pasoActual > p.n
        const actual = pasoActual === p.n

        return (
          <div key={p.n} className="flex items-center">
            {/* Step pill */}
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

              {/* Active underline */}
              <motion.div
                initial={false}
                animate={{ scaleX: actual ? 1 : 0, opacity: actual ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="mt-1.5 h-px w-full origin-left bg-[#b7e28a]"
              />
            </div>

            {/* Connector */}
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
  return (
    <div>
      <StepHeading index={1} title="Choose your activity" subtitle="What do you want to do in Máncora?" />
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
              {/* Image */}
              <img
                src={ACTIVIDAD_IMAGENES[a.id]}
                alt={a.label}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${selected ? 'scale-[1.03] opacity-80' : 'scale-100 opacity-55 group-hover:scale-[1.02] group-hover:opacity-70'
                  }`}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Subtle grain overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px',
                }}
              />

              {/* Selected badge */}
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

              {/* Content */}
              <div className="relative z-10 w-full p-6">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#b7e28a]/70">{a.tagline}</p>
                <p className="text-2xl font-black uppercase tracking-tight text-white">{a.label}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur">
                    <a.Icon className="h-3.5 w-3.5 text-[#b7e28a]" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/80">${precioHora}/hr</span>
                  </div>
                  {selected && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b7e28a]">Selected ↗</span>
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
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#b7e28a]/60">{NOCHES_COPY[n]}</p>
        </div>
        <div>
          <div className="flex items-end justify-between gap-2">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black leading-none text-white">{n}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">nights</span>
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
  return (
    <div>
      <StepHeading index={2} title="How many nights?" subtitle="Select the duration of your stay." />
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
        <span className="text-xs text-white/30">accommodation</span>
      </div>
    </div>
  )
}

function PasoHoras({ horas, setHoras, actividad }) {
  const precioHora = PRECIO_HORA_MAP[actividad] || 60

  return (
    <div>
      <StepHeading
        index={3}
        title="Class hours"
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
              No classes — accommodation only
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
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#b7e28a]/60">{HORAS_COPY[h]}</p>
              <div className="flex items-end justify-between gap-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black leading-none text-white">{h}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    {h === 0 ? 'hrs' : 'hours'}
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
        <span className="text-xs text-white/30">classes</span>
      </div>
    </div>
  )
}

function PasoExtras({ extras, extrasQty, toggleExtra, setExtraQty }) {
  const extrasSubtotal = extras.reduce((sum, extraId) => {
    const found = EXTRAS_OPTIONS.find((e) => e.id === extraId)
    if (!found) return sum
    const qty = (extrasQty && extrasQty[extraId]) || 1
    return sum + found.precio * qty
  }, 0)

  return (
    <div>
      <StepHeading index={4} title="Add extras" subtitle="Optional add-ons to complete your trip." />

      <div className="space-y-8">
        {EXTRAS_CATEGORIES.map((cat) => {
          const catExtras = EXTRAS_OPTIONS.filter((e) => e.category === cat.id)
          if (!catExtras.length) return null
          return (
            <div key={cat.id}>
              {/* Category header */}
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/35">{cat.label}</span>
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
                          <p className="text-sm font-semibold leading-tight text-white">{e.label}</p>
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

                      {/* Qty controls */}
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
                                {e.unit === '/day' ? 'Days' : 'Hours'}
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

      {/* Floating subtotal */}
      <div className="sticky bottom-[140px] z-20 mt-8 flex items-center justnify-between rounded-xl border border-white/8 bg-[#0e1b17]/95 px-4 py-3 backdrop-blur lg:bottom-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">
          {extras.length} extras selected
        </span>
        <span className="text-sm font-black text-[#b7e28a]">${extrasSubtotal} USD</span>
      </div>
    </div>
  )
}

function PasoResumen({ actividad, noches, horas, extras, extrasQty, datosUsuario, setDatosUsuario, generarLinkWhatsApp }) {
  const precioTotal = calcularPrecio(actividad, noches, horas, extras, extrasQty)
  const precioAnimado = useAnimatedNumber(precioTotal)
  const canSend = datosUsuario.nombre.trim() !== '' && datosUsuario.email.trim() !== ''
  const extrasSeleccionados = EXTRAS_OPTIONS.filter((e) => extras.includes(e.id))
  const [shakeKey, setShakeKey] = useState(0)

  const lineItems = [
    { label: 'Activity', value: actividad || '—' },
    { label: 'Nights', value: `${noches} nights × $${PRECIO_NOCHE} = $${noches * PRECIO_NOCHE}` },
    { label: 'Classes', value: `${horas}h ${actividad} × $${PRECIO_HORA_MAP[actividad] || 60} = $${horas * (PRECIO_HORA_MAP[actividad] || 60)}` },
  ]

  return (
    <div>
      <StepHeading index={5} title="Trip summary" subtitle="Review and send your request." />

      <div className="grid gap-5 lg:grid-cols-2">
        {/* Left — Summary */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.38 }}
          className="rounded-2xl border border-white/8 bg-[#152720] p-6"
        >
          <div className="flex items-center justify-between mb-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">Your trip</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b7e28a]/50">Breakdown</span>
          </div>

          <div className="space-y-4">
            {lineItems.map((item) => (
              <div key={item.label} className="border-b border-white/6 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/30">{item.label}</p>
                <p className="mt-1.5 text-sm font-semibold text-white">{item.value}</p>
              </div>
            ))}

            {/* Extras */}
            <div className="border-b border-white/6 pb-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/30">Extras</p>
              {extrasSeleccionados.length > 0 ? (
                <ul className="mt-2 space-y-2">
                  {extrasSeleccionados.map((e) => {
                    const qty = (extrasQty && extrasQty[e.id]) || 1
                    const hasQty = e.unit === '/day' || e.unit === '/hr'
                    return (
                      <li key={e.id} className="flex items-center justify-between text-sm text-white/70">
                        <span className="flex items-center gap-2">
                          <e.Icon className="h-3.5 w-3.5 shrink-0 text-[#b7e28a]/70" />
                          {e.label}{hasQty ? ` ×${qty}` : ''}
                        </span>
                        <span className="shrink-0 font-semibold text-white">${e.precio * qty}</span>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <p className="mt-1.5 text-sm text-white/25">None selected</p>
              )}
            </div>
          </div>

          {/* Total */}
          <div className="mt-5 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/30">Total estimated</p>
              <p className="mt-0.5 text-[10px] text-white/20">Final price confirmed on booking</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-white">${precioAnimado}</p>
              <p className="mt-0.5 text-xs text-white/30">≈ S/. {Math.round(precioAnimado * 3.75)}</p>
            </div>
          </div>
        </motion.div>

        {/* Right — Contact form */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.38, delay: 0.06 }}
          className="flex flex-col gap-5 rounded-2xl border border-white/8 bg-[#0e1b17] p-6"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35 mb-4">Your details</p>
            <div className="space-y-4">
              <div>
                <label htmlFor="build-name" className="block text-[11px] font-bold uppercase tracking-[0.22em] text-white/40 mb-1.5">
                  Name
                </label>
                <input
                  id="build-name"
                  type="text"
                  value={datosUsuario.nombre}
                  onChange={(e) => setDatosUsuario({ nombre: e.target.value })}
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-white/12 bg-[#152720] px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#b7e28a]/50 focus:ring-1 focus:ring-[#b7e28a]/20"
                />
              </div>
              <div>
                <label htmlFor="build-email" className="block text-[11px] font-bold uppercase tracking-[0.22em] text-white/40 mb-1.5">
                  Email
                </label>
                <input
                  id="build-email"
                  type="email"
                  value={datosUsuario.email}
                  onChange={(e) => setDatosUsuario({ email: e.target.value })}
                  placeholder="you@email.com"
                  className="w-full rounded-lg border border-white/12 bg-[#152720] px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#b7e28a]/50 focus:ring-1 focus:ring-[#b7e28a]/20"
                />
              </div>
            </div>
          </div>

          {!canSend && (
            <p className="text-center text-[11px] text-red-400/70">
              Enter your name and email to continue.
            </p>
          )}

          <div className="mt-auto">
            {canSend ? (
              <motion.a
                href={generarLinkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[#b7e28a] px-6 py-3 text-sm font-black uppercase tracking-[0.15em] text-black transition hover:brightness-95 hover:shadow-[0_0_28px_rgba(183,226,138,0.3)]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send via WhatsApp
              </motion.a>
            ) : (
              <motion.span
                key={shakeKey}
                animate={shakeKey ? { x: [0, -7, 7, -7, 7, 0] } : { x: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setShakeKey((v) => v + 1)}
                className="flex min-h-12 w-full cursor-not-allowed items-center justify-center gap-2.5 rounded-xl bg-white/8 px-6 py-3 text-sm font-black uppercase tracking-[0.15em] text-white/25"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send via WhatsApp
              </motion.span>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

/* ─── MAIN PAGE ───────────────────────────────────────────────────────────── */
function BuildPage() {
  const directionRef = useRef(1)

  const {
    paso, actividad, noches, horas, extras, extrasQty, datosUsuario,
    setActividad, setNoches, setHoras, toggleExtra, setExtraQty,
    setDatosUsuario, siguientePaso, anteriorPaso, reiniciar, generarLinkWhatsApp,
  } = useTripBuilderStore()

  const canNext =
    (paso === 1 && actividad) ||
    (paso === 2 && noches > 0) ||
    paso === 3 ||
    paso === 4

  const precioTotal = calcularPrecio(actividad, noches, horas, extras, extrasQty)

  const handleNext = () => { directionRef.current = 1; siguientePaso() }
  const handleBack = () => { directionRef.current = -1; anteriorPaso() }
  const handleReset = () => { directionRef.current = -1; reiniciar() }

  return (
    <>
      <SEO
        title="Mancora Kite Club | Build Your Trip"
        description="Customize your trip with classes, stay, and add-ons."
        canonicalPath="/build"
        hreflang={{ en: '/build', es: '/esp', default: '/' }}
      />

      <FullscreenHero
        as="section"
        eyebrow="Mancora Kite Club"
        title="Build Your Trip"
        subtitle="Customize every detail and get your instant estimate."
        slides={createPresetHeroSlides('kite', {
          desktop: [actividadKitesurf, actividadWingfoil, actividadSurf, actividadSup],
          alt: 'Kitesurf trip builder in Mancora',
          imageClassName: 'object-[58%_center] md:object-center',
        })}
        actions={[
          {
            href: '#trip-builder',
            label: 'Start building',
          },
        ]}
      />

      {/* ── WIZARD ── */}
      <section
        id="trip-builder"
        className="bg-[#080f0d] px-3 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-5xl">
          {/* Outer card */}
          <div className="overflow-hidden rounded-[2rem] border border-white/6 bg-[#0e1b17] shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
            {/* Grain on wizard card */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-[0.025]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: '300px 300px',
              }}
            />

            <div className="relative p-5 sm:p-8 lg:p-10">
              {/* Header */}
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/25">
                    Trip Builder
                  </p>
                  <h2 className="mt-1 text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                    Mancora Kite Club
                  </h2>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">5 steps</p>
                  <p className="mt-1 text-sm font-black text-[#b7e28a]">
                    {paso} / 5
                  </p>
                </div>
              </div>

              <StepIndicator pasoActual={paso} />

              {/* Step content */}
              <AnimatePresence mode="wait" custom={directionRef.current}>
                <motion.div
                  key={paso}
                  custom={directionRef.current}
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

              <MobilePriceBar paso={paso} precioTotal={precioTotal} />

              {/* Navigation */}
              <div className="sticky bottom-0 z-40 -mx-5 mt-8 flex items-center justify-between gap-3 border-t border-white/6 bg-[#0e1b17]/95 px-5 py-4 backdrop-blur sm:-mx-8 sm:px-8 lg:static lg:mx-0 lg:border-none lg:bg-transparent lg:p-0 lg:pt-8 lg:backdrop-blur-0">
                {paso > 1 ? (
                  <motion.button
                    type="button"
                    onClick={handleBack}
                    whileHover={{ x: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex min-h-10 items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white/50 transition hover:border-white/20 hover:text-white/80"
                  >
                    ← Back
                  </motion.button>
                ) : (
                  <span />
                )}

                <div className="flex items-center gap-3">
                  <AnimatePresence>
                    {paso > 1 && (
                      <motion.button
                        type="button"
                        onClick={handleReset}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="min-h-10 px-1 text-sm text-white/25 transition hover:text-white/50"
                      >
                        Reset
                      </motion.button>
                    )}
                  </AnimatePresence>

                  {paso < 5 && (
                    <motion.button
                      type="button"
                      onClick={handleNext}
                      disabled={!canNext}
                      whileHover={canNext ? { scale: 1.02 } : {}}
                      whileTap={canNext ? { scale: 0.97 } : {}}
                      className="group flex min-h-10 items-center gap-2 rounded-xl bg-[#b7e28a] px-6 py-2 text-sm font-black uppercase tracking-[0.15em] text-black transition hover:brightness-95 hover:shadow-[0_0_24px_rgba(183,226,138,0.25)] disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      Next
                      <span className="inline-block transition-transform group-hover:translate-x-[2px]" aria-hidden="true">→</span>
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingPrice paso={paso} precioTotal={precioTotal} />
    </>
  )
}

export default BuildPage
