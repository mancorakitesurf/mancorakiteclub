import { SEVEN_PLANS_DATA7 } from "./introData7";

function TechnicalBentoKite() {
    return (
        <section className="px-6 lg:px-16 py-20 bg-[#05161b] relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#5af8fb]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12 text-white flex items-center gap-4">
                <span className="w-12 h-[2px] bg-[#ff9069]" /> Technical Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
                {SEVEN_PLANS_DATA7.techStats.map((stat, i) => (
                    <div key={i} className="bg-[#132930]/40 backdrop-blur-xl p-8 rounded-xl relative overflow-hidden group hover:bg-[#132930]/60 transition-all border border-white/5">
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
        </section>
    );
}
export default TechnicalBentoKite;