import { WHALE_DATA11 } from "./introData11";

function ProtocolWhaleKite() {
    const { timing, protocol } = WHALE_DATA11;
    return (
        <section className="py-24 px-6 bg-[#05161b]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                
                {/* Columna Izquierda: Timing */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-tighter italic">{timing.title}</h3>
                        <p className="text-[#9eaeb4] font-light">{timing.subtitle}</p>
                    </div>
                    <div className="space-y-4">
                        {timing.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-5 rounded-lg bg-[#091c22] border border-white/5">
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
                <div className="p-8 md:p-10 rounded-xl bg-[#0e2229] border border-[#5af8fb]/20 shadow-[0_0_40px_rgba(90,248,251,0.05)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#5af8fb]/5 rounded-full blur-3xl -mr-10 -mt-10" />
                    
                    <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                        <span className="material-symbols-outlined text-[#5af8fb]">security</span>
                        <h3 className="text-xl font-bold text-white tracking-[0.2em] uppercase italic">{protocol.title}</h3>
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