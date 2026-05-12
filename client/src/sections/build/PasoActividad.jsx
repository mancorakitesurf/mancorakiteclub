import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'
import { ACTIVIDADES, ACTIVIDAD_CAROUSELS, PRECIO_HORA_MAP } from './buildData.js'
import { StepHeading } from './BuildUI.jsx'

function ActividadCard({ a, selected, toggleActividad, hrs, precioHora, setActividadHoras, t }) {
  const images = ACTIVIDAD_CAROUSELS[a.id] || []
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="flex flex-col gap-0">
      <motion.button
        type="button"
        onClick={() => toggleActividad(a.id)}
        whileHover={{ scale: 1.015, y: -3 }}
        whileTap={{ scale: 0.985 }}
        className={`group relative flex h-80 items-end overflow-hidden rounded-2xl text-left transition-all duration-300 ${
          selected
            ? 'ring-2 ring-[#b7e28a] ring-offset-2 ring-offset-[#0e1b17]'
            : 'ring-1 ring-white/8 hover:ring-white/20'
        }`}
      >
        <div className={`absolute inset-0 h-full w-full transition-all duration-500 ${selected ? 'scale-[1.03] opacity-80' : 'scale-100 opacity-55 group-hover:scale-[1.02] group-hover:opacity-70'}`}>
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              alt={a.label}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>

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

      <AnimatePresence initial={false}>
        {selected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-2 flex items-center justify-between rounded-xl border border-[#b7e28a]/20 bg-[#b7e28a]/5 px-4 py-3">
              <span className="text-xs font-bold text-white/60">{t('build.hours')}</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setActividadHoras(a.id, hrs - 1) }}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-sm text-white/60 transition hover:border-[#b7e28a]/50 hover:text-[#b7e28a]"
                >−</button>
                <span className="w-6 text-center text-lg font-black text-white">{hrs}</span>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setActividadHoras(a.id, hrs + 1) }}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-sm text-white/60 transition hover:border-[#b7e28a]/50 hover:text-[#b7e28a]"
                >+</button>
              </div>
              <span className="text-xs font-bold text-[#b7e28a]">${hrs * precioHora}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function PasoActividad({ actividades, toggleActividad, setActividadHoras }) {
  const { t } = useI18n()
  return (
    <div>
      <StepHeading index={1} title={t('build.chooseActivity')} subtitle={t('build.chooseActivitySub')} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {ACTIVIDADES.map((a) => {
          const selected = a.id in actividades
          const precioHora = PRECIO_HORA_MAP[a.id] || 60
          const hrs = actividades[a.id] || 0
          return (
            <ActividadCard
              key={a.id}
              a={a}
              selected={selected}
              toggleActividad={toggleActividad}
              hrs={hrs}
              precioHora={precioHora}
              setActividadHoras={setActividadHoras}
              t={t}
            />
          )
        })}
      </div>
      {Object.keys(actividades).length > 0 && (
        <div className="mt-5 flex items-center justify-end gap-2">
          <div className="h-px flex-1 bg-white/6" />
          <p className="text-sm font-bold text-[#b7e28a]">
            ${Object.entries(actividades).reduce((s, [id, h]) => s + (PRECIO_HORA_MAP[id] || 60) * h, 0)} USD
          </p>
          <span className="text-xs text-white/30">{t('build.classes')}</span>
        </div>
      )}
    </div>
  )
}
