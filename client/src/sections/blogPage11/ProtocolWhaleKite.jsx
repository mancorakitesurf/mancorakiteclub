import { WHALE_DATA11 } from "./introData11";

function ProtocolWhaleKite() {
    const { timing, protocol } = WHALE_DATA11;
    return (
        <section className="bg-[#05161b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
                
                {/* Columna Izquierda: Timing */}
                <div className="space-y-8">
                    <div>
                        <h3 className="mb-2 text-2xl font-bold uppercase tracking-tighter italic text-white sm:text-3xl md:text-4xl">{timing.title}</h3>
                        <p className="text-sm font-light leading-relaxed text-[#9eaeb4] sm:text-base">{timing.subtitle}</p>
                    </div>
                    <div className="space-y-4">
                        {timing.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 rounded-2xl border border-white/5 bg-[#091c22] p-4 sm:p-5">
                                <span className="material-symbols-outlined text-[#ff9069] mt-1">{item.icon}</span>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-tight text-sm">{item.label}</h4>
                                    <p className="text-xs text-[#9eaeb4] leading-relaxed mt-1">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Columna Derecha: Protocolo de Seguridad (Glowing Box) */}
                <div className="relative overflow-hidden rounded-2xl border border-[#5af8fb]/20 bg-[#0e2229] p-6 shadow-[0_0_40px_rgba(90,248,251,0.05)] sm:p-8 md:p-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#5af8fb]/5 rounded-full blur-3xl -mr-10 -mt-10" />
                    
                    <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                        <span className="material-symbols-outlined text-[#5af8fb]">security</span>
                        <h3 className="text-lg font-bold uppercase tracking-[0.2em] italic text-white sm:text-xl">{protocol.title}</h3>
                    </div>

                    <ul className="space-y-8">
                        {protocol.rules.map((rule, i) => (
                            <li key={i} className="flex items-start gap-5">
                                <span className="text-[#ff9069] font-bold text-xl tracking-tighter mt-1">{rule.id}</span>
                                <div>
                                    <strong className={`block mb-1 uppercase tracking-wider text-xs ${rule.color}`}>{rule.label}</strong>
                                    <span className="text-sm text-[#9eaeb4] font-light leading-relaxed">{rule.text}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
export default ProtocolWhaleKite;
