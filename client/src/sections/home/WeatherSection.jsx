import { useState, useEffect } from 'react';

const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast';
const MARINE_URL = 'https://marine-api.open-meteo.com/v1/marine';
const COORDS = { lat: -4.1046, lon: -81.0475 };

const getWindStatus = (kts) => {
    if (kts < 10) return { icon: 'air', label: 'Light', color: 'text-emerald-400' };
    if (kts <= 22) return { icon: 'air', label: 'Ideal', color: 'text-[#5af8fb]' };
    if (kts <= 30) return { icon: 'cyclone', label: 'Strong', color: 'text-orange-400' };
    return { icon: 'storm', label: 'Extreme', color: 'text-red-500' };
};

function WeatherSection() {
    const [data, setData] = useState({ temp: '--', wind: 0, wave: '--', loading: true });

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const weatherRes = await fetch(`${WEATHER_URL}?latitude=${COORDS.lat}&longitude=${COORDS.lon}&current=temperature_2m,wind_speed_10m&timezone=auto`);
                const weatherJSON = await weatherRes.json();

                const marineRes = await fetch(`${MARINE_URL}?latitude=${COORDS.lat}&longitude=${COORDS.lon}&hourly=wave_height&timezone=auto`);
                const marineJSON = await marineRes.json();

                const currentHour = new Date().getHours();
                const currentWave = marineJSON.hourly?.wave_height[currentHour] || '--';

                setData({
                    temp: weatherJSON.current?.temperature_2m || '--',
                    wind: weatherJSON.current?.wind_speed_10m || 0,
                    wave: currentWave,
                    loading: false
                });
            } catch (err) {
                console.error("Error fetching telemetry:", err);
            }
        };
        fetchAllData();
    }, []);

    const knots = Number(data.wind * 0.539).toFixed(1);
    const windStatus = getWindStatus(Number(knots));

    if (data.loading) return (
        <div className="py-24 bg-[#0E201F] text-center text-[#829998] text-xs tracking-[0.3em] uppercase animate-pulse">
            Syncing Satellite Data...
        </div>
    );

    return (
        <section className="bg-[#0E201F] py-24 px-6 border-y border-white/5">
            <div className="max-w-6xl mx-auto">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div className="space-y-4">
                        <span className="text-[#5af8fb] text-xs font-bold uppercase tracking-[0.5em] block">Real-Time Data</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-none">
                            Máncora <span className="text-[#829998] not-italic font-light">Spot Report</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-3 text-[#829998] text-[10px] uppercase tracking-[0.2em] bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
                        Live Telemetry Active
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    
                    {/* Velocidad */}
                    <div className="bg-[#0E201F] p-10 group transition-all duration-500 hover:bg-white/[0.02]">
                        <span className="material-symbols-outlined text-[#829998] mb-6 transition-colors duration-500 group-hover:text-[#5af8fb]">
                            wind_power
                        </span>
                        <h3 className="text-[#829998] text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Wind Velocity</h3>
                        <div className="flex items-baseline gap-3">
                            <p className="text-6xl font-black text-white tracking-tighter">{knots}</p>
                            <span className="text-[#829998] font-bold text-xl italic uppercase">Kts</span>
                        </div>
                        <div className={`inline-flex items-center gap-2 mt-8 px-4 py-1.5 rounded bg-black/40 border border-white/5 ${windStatus.color}`}>
                            <span className="material-symbols-outlined text-sm">{windStatus.icon}</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest">{windStatus.label} Conditions</span>
                        </div>
                    </div>

                    {/* Oleaje */}
                    <div className="bg-[#0E201F] p-10 group transition-all duration-500 hover:bg-white/[0.02]">
                        <span className="material-symbols-outlined text-[#829998] mb-6 transition-colors duration-500 group-hover:text-[#5af8fb]">
                            waves
                        </span>
                        <h3 className="text-[#829998] text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Swell Height</h3>
                        <div className="flex items-baseline gap-3">
                            <p className="text-6xl font-black text-white tracking-tighter">{data.wave}</p>
                            <span className="text-[#829998] font-bold text-xl italic uppercase">Mts</span>
                        </div>
                        <p className="text-[#829998] text-[10px] mt-10 uppercase tracking-[0.2em] font-medium">Clean Wave Formation</p>
                    </div>

                    {/* Temperatura */}
                    <div className="bg-[#0E201F] p-10 group transition-all duration-500 hover:bg-white/[0.02]">
                        <span className="material-symbols-outlined text-[#829998] mb-6 transition-colors duration-500 group-hover:text-[#5af8fb]">
                            device_thermostat
                        </span>
                        <h3 className="text-[#829998] text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Air Temperature</h3>
                        <div className="flex items-baseline gap-3">
                            <p className="text-6xl font-black text-white tracking-tighter">{data.temp}</p>
                            <span className="text-[#829998] font-bold text-xl italic uppercase">°C</span>
                        </div>
                        <p className="text-[#829998] text-[10px] mt-10 uppercase tracking-[0.2em] font-medium">Optimal Riding Climate</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default WeatherSection;