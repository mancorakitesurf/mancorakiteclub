import { COACHING_DATA9 } from "./introData9";

function CoachingContent9() {
    return (
        <div className="bg-[#031015] text-white">
            {/* Reading the Swell */}
            <section className="py-24 px-6 md:px-24 bg-[#05151b]">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter uppercase">01 / READING THE SWELL</h2>
                        <p className="text-[#9eadb4] text-xl max-w-3xl">Anticipation over reaction.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {COACHING_DATA9.swell.map((item, i) => (
                            <div key={i} className="bg-[#0a1c22] p-8 rounded border border-white/5 hover:border-[#52f2f5]/30 transition-colors">
                                <div className="mb-6 flex items-center justify-between">
                                    <span className="material-symbols-outlined text-[#00e7fc] text-3xl">{item.icon}</span>
                                    <span className="text-[10px] text-[#9eadb4] tracking-[0.2em]">{item.id}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-[#9eadb4] text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timing & Control */}
            <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
                <div className="mb-16 text-right">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter uppercase">02 / TIMING & CONTROL</h2>
                    <p className="text-[#9eadb4] text-xl">Synchronizing kite drift with board speed.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        {COACHING_DATA9.timing.map((t, i) => (
                            <div key={i} className="bg-[#0f2229] p-6 rounded-lg border-l-4 border-[#52f2f5]">
                                <h4 className="text-lg font-bold text-[#52f2f5] mb-2 uppercase tracking-tight">{t.title}</h4>
                                <p className="text-[#e4f3fa] text-sm leading-relaxed font-light">{t.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="relative">
                        <img src="https://picsum.photos/800/600" className="rounded shadow-2xl border border-white/10" alt="Timing" />
                        <div className="absolute inset-0 border border-[#52f2f5]/20 m-4 rounded pointer-events-none" />
                    </div>
                </div>
            </section>
        </div>
    );
}
export default CoachingContent9;