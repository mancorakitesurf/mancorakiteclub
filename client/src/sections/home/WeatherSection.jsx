import { useEffect, useState } from 'react'
import { useI18n } from '../../app/providers/i18nContext'

const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast'
const MARINE_URL = 'https://marine-api.open-meteo.com/v1/marine'
const COORDS = { lat: -4.1046, lon: -81.0475 }

const getWindStatus = (kts, t) => {
  if (kts < 10) return { label: t('sections.home.windLight'), color: 'text-slate-400', bg: 'bg-slate-400/10 border-slate-400/30', bar: 'bg-slate-400' }
  if (kts <= 22) return { label: t('sections.home.windIdeal'), color: 'text-primary', bg: 'bg-primary/10 border-primary/30', bar: 'bg-primary' }
  if (kts <= 30) return { label: t('sections.home.windStrong'), color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/30', bar: 'bg-orange-400' }
  return { label: t('sections.home.windExtreme'), color: 'text-red-500', bg: 'bg-red-500/10 border-red-500/30', bar: 'bg-red-500' }
}

/* ── Wind streak lines ─────────────────────────────────────── */
const STREAKS = [
  { y: 15, w: 70, delay: '0s',    dur: '2.2s' },
  { y: 30, w: 100, delay: '0.5s', dur: '1.8s' },
  { y: 45, w: 50,  delay: '0.9s', dur: '2.5s' },
  { y: 60, w: 80,  delay: '0.2s', dur: '2.0s' },
  { y: 75, w: 60,  delay: '1.1s', dur: '2.3s' },
  { y: 88, w: 90,  delay: '0.7s', dur: '1.9s' },
]

function WindStreaks() {
  return (
    <svg viewBox="0 0 300 100" className="h-full w-full" aria-hidden="true">
      {STREAKS.map((s, i) => (
        <line key={i} x1="0" y1={s.y} x2={s.w} y2={s.y} stroke="#2A9D8F" strokeWidth="1.5" strokeLinecap="round">
          <animateTransform attributeName="transform" type="translate" from="-300 0" to="600 0"
            dur={s.dur} begin={s.delay} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.55;0.55;0"
            keyTimes="0;0.08;0.92;1" dur={s.dur} begin={s.delay} repeatCount="indefinite" />
        </line>
      ))}
    </svg>
  )
}

/* ── Wind dial ─────────────────────────────────────────────── */
function WindDial({ knots }) {
  const pct  = Math.min(Number(knots) / 40, 1)
  const r    = 52
  const circ = 2 * Math.PI * r
  const dash = pct * circ * 0.75
  const rot  = -225

  return (
    <svg viewBox="0 0 130 130" className="h-full w-full" aria-hidden="true">
      <circle cx="65" cy="65" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8"
        strokeDasharray={`${circ * 0.75} ${circ}`} strokeLinecap="round" transform={`rotate(${rot} 65 65)`} />
      <circle cx="65" cy="65" r={r} fill="none" stroke="#2A9D8F" strokeWidth="8"
        strokeDasharray={`${dash} ${circ - dash}`} strokeLinecap="round" transform={`rotate(${rot} 65 65)`}
        className="transition-all duration-700" />
    </svg>
  )
}

/* ── Scrolling wave ────────────────────────────────────────── */
function WaveAnim({ waveHeight }) {
  const amp = Math.min(Math.max(Number(waveHeight) * 8, 8), 20)
  const path = `M0 ${30} C100 ${30 - amp} 300 ${30 + amp} 400 ${30} C500 ${30 - amp} 700 ${30 + amp} 800 ${30} V60 H0 Z`
  return (
    <div className="relative h-16 w-full overflow-hidden">
      <svg viewBox="0 0 800 60" preserveAspectRatio="none"
        style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '200%' }}
        aria-hidden="true">
        <path d={path} fill="#2A9D8F" opacity="0.4">
          <animateTransform attributeName="transform" type="translate"
            from="0 0" to="-400 0" dur="4s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  )
}

/* ── Section ───────────────────────────────────────────────── */
function WeatherSection() {
  const { t } = useI18n()
  const [data, setData] = useState({ temp: '--', wind: 0, wave: '--', loading: true })

  // Data fetch
  useEffect(() => {
    let alive = true
    const run = async () => {
      try {
        const [wRes, mRes] = await Promise.all([
          fetch(`${WEATHER_URL}?latitude=${COORDS.lat}&longitude=${COORDS.lon}&current=temperature_2m,wind_speed_10m&timezone=auto`),
          fetch(`${MARINE_URL}?latitude=${COORDS.lat}&longitude=${COORDS.lon}&hourly=wave_height&timezone=auto`),
        ])
        const [wJSON, mJSON] = await Promise.all([wRes.json(), mRes.json()])
        const waveNow = mJSON.hourly?.wave_height?.[new Date().getHours()] ?? '--'
        if (!alive) return
        setData({ temp: wJSON.current?.temperature_2m ?? '--', wind: wJSON.current?.wind_speed_10m ?? 0, wave: waveNow, loading: false })
      } catch {
        if (alive) setData(d => ({ ...d, loading: false }))
      }
    }
    run()
    return () => { alive = false }
  }, [])

  const knots     = Number(data.wind * 0.539).toFixed(1)
  const windStatus = getWindStatus(Number(knots), t)

  if (data.loading) {
    return (
      <div className="animate-pulse bg-background-dark px-4 py-16 text-center text-xs uppercase tracking-[0.3em] text-secondary sm:py-20 lg:py-28">
        {t('sections.home.syncing')}
      </div>
    )
  }

  return (
    <section className="border-y border-white/5 bg-background-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{t('sections.home.weatherBadge')}</p>
            <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl md:text-5xl">{t('sections.home.spotReport')}</h2>
          </div>
          <div className="flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-secondary sm:self-auto">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_6px_#2A9D8F]" />
            {t('sections.home.liveTelemetry')}
          </div>
        </div>

        {/* Main grid — 3 equal columns */}
        <div className="grid gap-4 md:grid-cols-3">

          {/* ── Wind card ── */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-dark">
            {/* Animation zone */}
            <div className="relative flex h-52 items-center justify-center overflow-hidden">
              {/* streaks bg */}
              <div className="pointer-events-none absolute inset-0">
                <WindStreaks />
              </div>
              {/* dial centered */}
              <div className="relative h-40 w-40">
                <WindDial knots={knots} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black tracking-tight text-white">{knots}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary">knots</span>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-primary/5 blur-2xl" />
            </div>

            {/* Divider */}
            <div className="mx-6 border-t border-white/8" />

            {/* Data zone */}
            <div className="flex flex-col items-center gap-4 p-6 text-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{t('sections.home.windVelocity')}</p>
                <p className="mt-1 font-display text-3xl text-white">
                  {data.wind} <span className="text-base font-normal text-secondary">km/h</span>
                </p>
              </div>
              <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest ${windStatus.bg} ${windStatus.color}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
                  <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
                </svg>
                {windStatus.label}
              </div>
              <div className="w-full space-y-1.5">
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-secondary">
                  <span>0 kts</span><span>40 kts</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className={`h-full rounded-full transition-all duration-700 ${windStatus.bar}`}
                    style={{ width: `${Math.min((Number(knots) / 40) * 100, 100)}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Swell card ── */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-dark">
            {/* Animation zone */}
            <div className="relative flex h-52 items-end overflow-hidden">
              {/* decorative wave fills the height */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6"
                  className="h-28 w-28 text-primary/10" aria-hidden="true">
                  <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5s2.5 2 5 2 2.5-2 5-2" />
                  <path d="M2 12c.6.5 1.2 1 2.5 1C7 13 7 11 9.5 11s2.5 2 5 2 2.5-2 5-2" />
                  <path d="M2 18c.6.5 1.2 1 2.5 1C7 19 7 17 9.5 17s2.5 2 5 2 2.5-2 5-2" />
                </svg>
              </div>
              <div className="w-full">
                <WaveAnim waveHeight={data.wave} />
              </div>
            </div>

            {/* Divider */}
            <div className="mx-6 border-t border-white/8" />

            {/* Data zone */}
            <div className="flex flex-col items-center gap-2 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{t('sections.home.swellHeight')}</p>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl text-white">{data.wave}</span>
                <span className="text-sm text-secondary">m</span>
              </div>
              <p className="text-xs text-secondary">{t('sections.home.cleanWave')}</p>
            </div>
          </div>

          {/* ── Temperature card ── */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-dark">
            {/* Icon zone */}
            <div className="flex h-52 items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="1.2"
                strokeLinecap="round" strokeLinejoin="round"
                className="h-28 w-28 opacity-80" aria-hidden="true">
                <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
              </svg>
            </div>

            {/* Divider */}
            <div className="mx-6 border-t border-white/8" />

            {/* Data zone */}
            <div className="flex flex-col items-center gap-2 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{t('sections.home.airTemperature')}</p>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl text-white">{data.temp}</span>
                <span className="text-sm text-secondary">°C</span>
              </div>
              <p className="text-xs text-secondary">{t('sections.home.optimalClimate')}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WeatherSection
