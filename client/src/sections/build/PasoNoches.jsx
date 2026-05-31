import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'
import { useTripBuilderStore } from '../../store/useTripBuilderStore.js'
import { NOCHES_OPTIONS, NOCHES_IMAGENES, NOCHES_COPY_KEYS, getPrecioNoche } from './buildData.js'
import { StepHeading, staggerContainer, staggerItem } from './BuildUI.jsx'

function NightCard({ n, i, selected, onClick, precioNoche }) {
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
              ${n * precioNoche}
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  )
}

export default function PasoNoches({ noches, setNoches, personas, setPersonas }) {
  const { t, currentLang } = useI18n()
  const { fechaInicio, setFechaInicio } = useTripBuilderStore()
  const precioNoche = getPrecioNoche(personas)

  // Local state for calendar navigation
  const [viewDate, setViewDate] = useState(() => {
    return fechaInicio ? new Date(fechaInicio + 'T12:00:00') : new Date()
  })

  // Sync view date if store's fechaInicio changes externally
  useEffect(() => {
    if (fechaInicio) {
      setViewDate(new Date(fechaInicio + 'T12:00:00'))
    }
  }, [fechaInicio])

  const getTodayString = () => {
    const d = new Date()
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
  const todayStr = getTodayString()

  // Calculate checkout date
  const getCheckoutDate = () => {
    if (!fechaInicio) return null
    const checkIn = new Date(fechaInicio + 'T12:00:00')
    const checkOut = new Date(checkIn)
    checkOut.setDate(checkIn.getDate() + noches)
    return checkOut
  }
  const checkOutDate = getCheckoutDate()
  const checkOutStr = checkOutDate
    ? `${checkOutDate.getFullYear()}-${String(checkOutDate.getMonth() + 1).padStart(2, '0')}-${String(checkOutDate.getDate()).padStart(2, '0')}`
    : null

  // Calendar parameters
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()

  // First day of current month (0 = Sun, 1 = Mon, etc.)
  const firstDayIndex = new Date(year, month, 1).getDay()
  // Total days in current month
  const totalDays = new Date(year, month + 1, 0).getDate()
  // Total days in previous month
  const prevMonthTotalDays = new Date(year, month, 0).getDate()

  const daysGrid = []

  // Trailing days from previous month
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const prevDay = prevMonthTotalDays - i
    const prevMonth = month === 0 ? 11 : month - 1
    const prevYear = month === 0 ? year - 1 : year
    daysGrid.push({
      day: prevDay,
      dateStr: `${prevYear}-${String(prevMonth + 1).padStart(2, '0')}-${String(prevDay).padStart(2, '0')}`,
      isCurrentMonth: false,
    })
  }

  // Days of current month
  for (let i = 1; i <= totalDays; i++) {
    daysGrid.push({
      day: i,
      dateStr: `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`,
      isCurrentMonth: true,
    })
  }

  // Pad with next month's days to make grid multiple of 7 (6 rows = 42 cells)
  const remaining = 42 - daysGrid.length
  const nextMonth = month === 11 ? 0 : month + 1
  const nextYear = month === 11 ? year + 1 : year
  for (let i = 1; i <= remaining; i++) {
    daysGrid.push({
      day: i,
      dateStr: `${nextYear}-${String(nextMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`,
      isCurrentMonth: false,
    })
  }

  const handlePrevMonth = () => {
    const actualToday = new Date()
    if (year > actualToday.getFullYear() || (year === actualToday.getFullYear() && month > actualToday.getMonth())) {
      setViewDate(new Date(year, month - 1, 1))
    }
  }

  const handleNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1))
  }

  const handleSelectDay = (dateStr) => {
    if (dateStr < todayStr) return
    setFechaInicio(dateStr)
  }

  const capitalizedMonth = () => {
    const name = new Intl.DateTimeFormat(currentLang, { month: 'long', year: 'numeric' }).format(viewDate)
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  const getWeekdays = () => {
    const format = new Intl.DateTimeFormat(currentLang, { weekday: 'short' })
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(Date.UTC(2026, 4, 3 + i, 12, 0, 0)) // 3 May 2026 was Sunday
      return format.format(d).toUpperCase().replace('.', '')
    })
  }

  const formatLocalDate = (date) => {
    if (!date) return ''
    return new Intl.DateTimeFormat(currentLang, { weekday: 'short', day: 'numeric', month: 'short' }).format(date)
  }

  const displayCheckIn = fechaInicio ? formatLocalDate(new Date(fechaInicio + 'T12:00:00')) : ''
  const displayCheckOut = checkOutDate ? formatLocalDate(checkOutDate) : ''

  return (
    <div>
      <StepHeading index={3} title={t('build.howManyNights')} subtitle={t('build.howManyNightsSub')} />

      {/* Guest selector */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-white/50">{t('build.guests') || 'Guests'}</span>
        <div className="flex gap-2">
          {[1, 2].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPersonas(p)}
              className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
                personas === p
                  ? 'bg-[#b7e28a] text-black'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
            >
              {p} {p === 1 ? (t('build.person') || 'person') : (t('build.people') || 'people')}
            </button>
          ))}
        </div>
        <span className="text-xs text-white/30">${precioNoche} USD / {t('build.night') || 'night'}</span>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5"
      >
        {NOCHES_OPTIONS.map((n, i) => (
          <NightCard key={n} n={n} i={i} selected={noches === n} onClick={() => setNoches(n)} precioNoche={precioNoche} />
        ))}
      </motion.div>

      {/* Date Selector / Calendar Header */}
      <div className="mt-12 mb-6 border-t border-white/6 pt-8">
        <h3 className="text-base font-black uppercase tracking-wider text-[#b7e28a]">{t('build.selectCheckIn') || 'Selecciona tu fecha de llegada'}</h3>
        <p className="text-xs text-white/50">{t('build.selectCheckInSub') || 'Elige cuándo empieza tu aventura en Máncora'}</p>
      </div>

      {/* Calendar layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calendar Grid */}
        <div className="lg:col-span-2 rounded-2xl border border-white/8 bg-white/3 p-6 backdrop-blur-sm">
          {/* Calendar Month Header */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-bold text-white tracking-wide">{capitalizedMonth()}</span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed"
                disabled={year === new Date().getFullYear() && month === new Date().getMonth()}
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white transition hover:bg-white/10"
              >
                &rarr;
              </button>
            </div>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 gap-y-2 text-center text-[10px] font-black uppercase tracking-wider text-white/40 pb-2 border-b border-white/5 mb-2">
            {getWeekdays().map((wd, idx) => (
              <div key={idx}>{wd}</div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-y-1 text-center text-xs font-semibold text-white/80">
            {daysGrid.map(({ day, dateStr, isCurrentMonth }, idx) => {
              const isPast = dateStr < todayStr
              const isStart = dateStr === fechaInicio
              const isEnd = dateStr === checkOutStr
              const isInRange = dateStr > fechaInicio && dateStr < checkOutStr
              const isSelected = isStart || isEnd

              let buttonBg = ''
              if (isStart) {
                buttonBg = 'bg-[#b7e28a]/15 rounded-l-full'
              } else if (isEnd) {
                buttonBg = 'bg-[#b7e28a]/15 rounded-r-full'
              } else if (isInRange) {
                buttonBg = 'bg-[#b7e28a]/8'
              }

              return (
                <div key={idx} className={`relative py-1 ${buttonBg}`}>
                  <button
                    type="button"
                    disabled={isPast}
                    onClick={() => handleSelectDay(dateStr)}
                    className={`w-full aspect-square flex items-center justify-center focus:outline-none transition-all ${
                      isPast ? 'text-white/10 cursor-not-allowed' : 'cursor-pointer'
                    } ${isCurrentMonth ? '' : 'text-white/30'}`}
                  >
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                      isSelected ? 'bg-[#b7e28a] text-[#0e1b17] font-black shadow-[0_0_15px_rgba(183,226,138,0.4)] scale-110' : ''
                    } ${
                      !isSelected && !isPast && isCurrentMonth ? 'hover:bg-white/10 hover:text-white' : ''
                    } ${
                      !isSelected && !isPast && !isCurrentMonth ? 'hover:bg-white/5 hover:text-white/70' : ''
                    }`}>
                      {day}
                    </span>
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stay Info Summary Column */}
        <div className="flex flex-col justify-between rounded-2xl border border-white/8 bg-white/3 p-6 backdrop-blur-sm">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#b7e28a] mb-4">{t('build.staySummary') || 'Resumen de Estadía'}</h4>
            
            <div className="space-y-4">
              {/* Check-In Card */}
              <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#b7e28a]/10 text-[#b7e28a]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">{t('build.checkIn') || 'Llegada'}</p>
                    <p className="text-sm font-black text-white">{displayCheckIn || '-'}</p>
                  </div>
                </div>
              </div>

              {/* Check-Out Card */}
              <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#b7e28a]/10 text-[#b7e28a]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 2v4M8 2v4M3 10h18M3 14h6m-6 4h6" />
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <path d="M12 16h8m-3-3l3 3-3 3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">{t('build.checkOut') || 'Salida'}</p>
                    <p className="text-sm font-black text-white">{displayCheckOut || '-'}</p>
                  </div>
                </div>
              </div>

              {/* Duration Card */}
              <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#b7e28a]/10 text-[#b7e28a]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">{t('build.duration') || 'Duración'}</p>
                      <p className="text-sm font-black text-white">{noches} {noches === 1 ? t('build.night') : t('build.nights')}</p>
                    </div>
                  </div>
                  <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-black text-[#b7e28a]">
                    ${noches * precioNoche}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-6 border-t border-white/5 pt-4 text-center">
            <p className="text-[11px] text-white/30 italic">
              {t('build.finalPriceNote')}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-end gap-2 border-t border-white/5 pt-6">
        <p className="text-sm font-bold text-[#b7e28a]">${noches * precioNoche} USD</p>
        <span className="text-xs text-white/30">{t('build.accommodation')}</span>
      </div>
    </div>
  )
}
