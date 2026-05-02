import { SEVEN_PLANS_DATA7 } from "./introData13";

function TechnicalBentoKite() {
    return (
        <section className="relative overflow-hidden bg-[#05161b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#5af8fb]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="mx-auto max-w-7xl">
                <h2 className="mb-10 flex items-center gap-4 text-2xl font-bold uppercase tracking-tight text-white sm:mb-12 sm:text-3xl md:text-4xl">
                    <span className="h-[2px] w-12 bg-[#ff9069]" /> Technical Overview
                </h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SEVEN_PLANS_DATA7.techStats.map((stat, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#132930]/40 p-4 backdrop-blur-xl transition-all hover:bg-[#132930]/60 sm:p-6 lg:p-8">
                        <div className="absolute -right-4 -top-4 text-white/5 group-hover:text-white/10 transition-colors">
                            <span className="material-symbols-outlined text-9xl">{stat.icon}</span>
                        </div>
                        <div className="relative z-10">
                            <p className="text-[#9eaeb4] text-[10px] uppercase tracking-[0.2em] font-bold mb-2">{stat.label}</p>
                            <p className={`text-5xl font-bold ${stat.color} mb-1 tracking-tighter`}>
                                {stat.value}<span className="text-2xl opacity-60 ml-1">{stat.unit}</span>
                            </p>
                            <p className="text-xs text-[#9eaeb4] mt-6 font-light leading-relaxed">{stat.desc}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default TechnicalBentoKite;
