import { useEffect, useState } from 'react'

const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast'
const MARINE_URL = 'https://marine-api.open-meteo.com/v1/marine'
const COORDS = { lat: -4.1046, lon: -81.0475 }

const getWindStatus = (kts) => {
  if (kts < 10) return { icon: 'air', label: 'Light', color: 'text-emerald-400' }
  if (kts <= 22) return { icon: 'air', label: 'Ideal', color: 'text-[#5af8fb]' }
  if (kts <= 30) return { icon: 'cyclone', label: 'Strong', color: 'text-orange-400' }
  return { icon: 'storm', label: 'Extreme', color: 'text-red-500' }
}

function WeatherSection() {
  const [data, setData] = useState({ temp: '--', wind: 0, wave: '--', loading: true })

  useEffect(() => {
    let isActive = true

    const fetchAllData = async () => {
      try {
        const weatherRes = await fetch(
          `${WEATHER_URL}?latitude=${COORDS.lat}&longitude=${COORDS.lon}&current=temperature_2m,wind_speed_10m&timezone=auto`,
        )
        const weatherJSON = await weatherRes.json()

        const marineRes = await fetch(
          `${MARINE_URL}?latitude=${COORDS.lat}&longitude=${COORDS.lon}&hourly=wave_height&timezone=auto`,
        )
        const marineJSON = await marineRes.json()

        const currentHour = new Date().getHours()
        const currentWave = marineJSON.hourly?.wave_height?.[currentHour] ?? '--'

        if (!isActive) return

        setData({
          temp: weatherJSON.current?.temperature_2m ?? '--',
          wind: weatherJSON.current?.wind_speed_10m ?? 0,
          wave: currentWave,
          loading: false,
        })
      } catch {
        if (!isActive) return

        setData((current) => ({
          ...current,
          loading: false,
        }))
      }
    }

    fetchAllData()

    return () => {
      isActive = false
    }
  }, [])

  const knots = Number(data.wind * 0.539).toFixed(1)
  const windStatus = getWindStatus(Number(knots))

  if (data.loading) {
    return (
      <div className="animate-pulse bg-[#0E201F] px-4 py-16 text-center text-xs uppercase tracking-[0.3em] text-[#829998] sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        Syncing Satellite Data...
      </div>
    )
  }

  return (
    <section className="border-y border-white/5 bg-[#0E201F] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-8 sm:mb-16 md:flex-row md:items-end">
          <div className="space-y-4">
            <span className="block text-xs font-bold uppercase tracking-[0.5em] text-[#5af8fb]">
              Real-Time Data
            </span>
            <h2 className="text-3xl font-black uppercase leading-none tracking-tighter italic text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Mancora <span className="font-light not-italic text-[#829998]">Spot Report</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#829998] sm:px-5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
            Live Telemetry Active
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl sm:grid-cols-2 xl:grid-cols-3">
          <div className="group bg-[#0E201F] p-6 transition-all duration-500 hover:bg-white/[0.02] sm:p-8 lg:p-10">
            <span className="material-symbols-outlined mb-6 text-[#829998] transition-colors duration-500 group-hover:text-[#5af8fb]">
              wind_power
            </span>
            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#829998]">
              Wind Velocity
            </h3>
            <div className="flex items-baseline gap-3">
              <p className="text-4xl font-black tracking-tighter text-white sm:text-5xl lg:text-6xl">{knots}</p>
              <span className="text-lg font-bold uppercase italic text-[#829998] sm:text-xl">Kts</span>
            </div>
            <div className={`mt-8 inline-flex items-center gap-2 rounded border border-white/5 bg-black/40 px-4 py-1.5 ${windStatus.color}`}>
              <span className="material-symbols-outlined text-sm">{windStatus.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">
                {windStatus.label} Conditions
              </span>
            </div>
          </div>

          <div className="group bg-[#0E201F] p-6 transition-all duration-500 hover:bg-white/[0.02] sm:p-8 lg:p-10">
            <span className="material-symbols-outlined mb-6 text-[#829998] transition-colors duration-500 group-hover:text-[#5af8fb]">
              waves
            </span>
            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#829998]">
              Swell Height
            </h3>
            <div className="flex items-baseline gap-3">
              <p className="text-4xl font-black tracking-tighter text-white sm:text-5xl lg:text-6xl">{data.wave}</p>
              <span className="text-lg font-bold uppercase italic text-[#829998] sm:text-xl">Mts</span>
            </div>
            <p className="mt-10 text-[10px] font-medium uppercase tracking-[0.2em] text-[#829998]">
              Clean Wave Formation
            </p>
          </div>

          <div className="group bg-[#0E201F] p-6 transition-all duration-500 hover:bg-white/[0.02] sm:p-8 lg:p-10">
            <span className="material-symbols-outlined mb-6 text-[#829998] transition-colors duration-500 group-hover:text-[#5af8fb]">
              device_thermostat
            </span>
            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#829998]">
              Air Temperature
            </h3>
            <div className="flex items-baseline gap-3">
              <p className="text-4xl font-black tracking-tighter text-white sm:text-5xl lg:text-6xl">{data.temp}</p>
              <span className="text-lg font-bold uppercase italic text-[#829998] sm:text-xl">&deg;C</span>
            </div>
            <p className="mt-10 text-[10px] font-medium uppercase tracking-[0.2em] text-[#829998]">
              Optimal Riding Climate
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeatherSection
