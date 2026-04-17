import { CHOICE_DATA14 } from "./introData14";

function TechnicalBreakdownKite() {
    return (
        <section className="py-24 px-6 md:px-24 bg-[#05161b]">
            <div className="max-w-7xl mx-auto space-y-32">
                {CHOICE_DATA14.factors.map((factor, i) => (
                    <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${factor.isReversed ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-full lg:w-1/2 relative">
                            <div className={`absolute -inset-4 ${i === 0 ? 'bg-[#ff9069]/5' : 'bg-[#5af8fb]/5'} blur-3xl rounded-full`} />
                            <img src={`https://picsum.photos/800/1000?random=${i}`} className="relative z-10 w-full aspect-[4/5] object-cover rounded-lg border border-white/10 grayscale hover:grayscale-0 transition-all duration-700" alt={factor.label} />
                        </div>
                        
                        <div className="w-full lg:w-1/2 space-y-6">
                            <div className="flex items-center gap-4 text-[#5af8fb]">
                                <span className="material-symbols-outlined text-4xl">{factor.icon}</span>
                                <span className="text-sm font-bold tracking-[0.3em] uppercase">{factor.label}</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight uppercase italic">
                                {factor.title}
                            </h3>
                            <p className="text-[#9eaeb4] text-lg leading-relaxed font-light">
                                {factor.desc}
                            </p>
                            
                            {factor.zones && (
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    {factor.zones.map((zone, idx) => (
                                        <div key={idx} className={`bg-[#031015] p-6 rounded-lg border border-white/5 border-t-2 ${zone.color}`}>
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