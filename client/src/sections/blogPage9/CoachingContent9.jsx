import { COACHING_DATA9 } from "./introData9";

function CoachingContent9() {
    return (
        <div className="bg-[#031015] text-white">
            {/* Reading the Swell */}
            <section className="bg-[#05151b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 sm:mb-16">
                        <h2 className="mb-4 text-2xl font-bold uppercase tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">01 / READING THE SWELL</h2>
                        <p className="max-w-3xl text-base leading-relaxed text-[#9eadb4] sm:text-lg md:text-xl">Anticipation over reaction.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                        {COACHING_DATA9.swell.map((item, i) => (
                            <div key={i} className="rounded-2xl border border-white/5 bg-[#0a1c22] p-4 transition-colors hover:border-[#52f2f5]/30 sm:p-6 lg:p-8">
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
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
                <div className="mb-12 text-left sm:mb-16 lg:text-right">
                    <h2 className="mb-4 text-2xl font-bold uppercase tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">02 / TIMING & CONTROL</h2>
                    <p className="text-base leading-relaxed text-[#9eadb4] sm:text-lg md:text-xl">Synchronizing kite drift with board speed.</p>
                </div>
                <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-8">
                        {COACHING_DATA9.timing.map((t, i) => (
                            <div key={i} className="rounded-2xl border-l-4 border-[#52f2f5] bg-[#0f2229] p-4 sm:p-6">
                                <h4 className="text-lg font-bold text-[#52f2f5] mb-2 uppercase tracking-tight">{t.title}</h4>
                                <p className="text-[#e4f3fa] text-sm leading-relaxed font-light">{t.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="relative">
                        <img src="https://picsum.photos/800/600" loading="lazy" className="w-full rounded-3xl border border-white/10 shadow-2xl" alt="Timing" />
                        <div className="absolute inset-0 border border-[#52f2f5]/20 m-4 rounded pointer-events-none" />
                    </div>
                </div>
            </section>
        </div>
    );
}
export default CoachingContent9;
