import { CHOICE_DATA14 } from "./introData14";

function TechnicalBreakdownKite() {
    return (
        <section className="bg-[#05161b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-7xl space-y-16 sm:space-y-20 lg:space-y-24">
                {CHOICE_DATA14.factors.map((factor, i) => (
                    <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${factor.isReversed ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-full lg:w-1/2 relative">
                            <div className={`absolute -inset-4 ${i === 0 ? 'bg-[#ff9069]/5' : 'bg-[#5af8fb]/5'} blur-3xl rounded-full`} />
                            <img src={`https://picsum.photos/800/1000?random=${i}`} loading="lazy" className="relative z-10 aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover grayscale transition-all duration-700 hover:grayscale-0" alt={factor.label} />
                        </div>
                        
                        <div className="w-full lg:w-1/2 space-y-6">
                            <div className="flex items-center gap-4 text-[#5af8fb]">
                                <span className="material-symbols-outlined text-4xl">{factor.icon}</span>
                                <span className="text-sm font-bold tracking-[0.3em] uppercase">{factor.label}</span>
                            </div>
                            <h3 className="text-2xl font-bold uppercase leading-tight tracking-tighter italic text-white sm:text-3xl md:text-4xl lg:text-5xl">
                                {factor.title}
                            </h3>
                            <p className="text-sm font-light leading-relaxed text-[#9eaeb4] sm:text-base md:text-lg">
                                {factor.desc}
                            </p>
                            
                            {factor.zones && (
                                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {factor.zones.map((zone, idx) => (
                                        <div key={idx} className={`rounded-2xl border border-white/5 border-t-2 bg-[#031015] p-4 sm:p-6 ${zone.color}`}>
                                            <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2 font-bold">Zone</p>
                                            <p className="text-xl font-bold tracking-tight">{zone.value}</p>
                                            <p className="text-[10px] uppercase mt-1 opacity-80">{zone.name}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default TechnicalBreakdownKite;
