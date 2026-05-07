import { useEffect, useState } from 'react'

const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast'
const MARINE_URL = 'https://marine-api.open-meteo.com/v1/marine'
const COORDS = { lat: -4.1046, lon: -81.0475 }

const getWindStatus = (kts) => {
  if (kts < 10) return { label: 'Light', color: 'text-slate-400' }
  if (kts <= 22) return { label: 'Ideal', color: 'text-primary' }
  if (kts <= 30) return { label: 'Strong', color: 'text-orange-400' }
  return { label: 'Extreme', color: 'text-red-400' }
}

function WeatherSection() {
  const [data, setData] = useState({ temp: '--', wind: 0, wave: '--', loading: true })

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

  const knots = Number(data.wind * 0.539).toFixed(1)
  const windStatus = getWindStatus(Number(knots))

  if (data.loading) return null

  return (
    <div className="border-b border-white/5 bg-background-dark/60">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-4 sm:px-6 lg:px-8">

        {/* Label */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
            Live · Máncora
          </span>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">

          {/* Wind */}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" className="h-3.5 w-3.5 text-primary/70" aria-hidden="true">
              <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
            </svg>
            <span className="text-sm text-white/80">
              {knots} <span className="text-xs text-secondary">kts</span>
            </span>
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${windStatus.color}`}>
              {windStatus.label}
            </span>
          </div>

          <span className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden="true" />

          {/* Swell */}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" className="h-3.5 w-3.5 text-primary/70" aria-hidden="true">
              <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5s2.5 2 5 2 2.5-2 5-2" />
              <path d="M2 12c.6.5 1.2 1 2.5 1C7 13 7 11 9.5 11s2.5 2 5 2 2.5-2 5-2" />
            </svg>
            <span className="text-sm text-white/80">
              {data.wave} <span className="text-xs text-secondary">m swell</span>
            </span>
          </div>

          <span className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden="true" />

          {/* Temp */}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"
              className="h-3.5 w-3.5 text-primary/70" aria-hidden="true">
              <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
            </svg>
            <span className="text-sm text-white/80">
              {data.temp} <span className="text-xs text-secondary">°C</span>
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WeatherSection
