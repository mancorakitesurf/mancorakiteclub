import { SEVEN_PLANS_DATA7 } from "./introData13";

function TacticalLoadoutKite() {
    const { loadout } = SEVEN_PLANS_DATA7;
    return (
        <section className="px-6 lg:px-16 py-24 bg-[#05161b]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold uppercase text-center text-white mb-16 tracking-tighter">Tactical Loadout</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Quiver Card */}
                    <div className="bg-[#031015] p-8 rounded-xl border border-white/10 hover:border-[#5af8fb]/30 transition-all shadow-xl group">
                        <span className="material-symbols-outlined text-[#ff9069] text-4xl mb-4 group-hover:scale-110 transition-transform">surfing</span>
                        <h3 className="text-xl font-bold text-white uppercase mb-3 italic">{loadout.quiver.title}</h3>
                        <p className="text-[#9eaeb4] text-xs leading-relaxed mb-6 font-light">{loadout.quiver.desc}</p>
                        <div className="flex flex-wrap gap-2">
                            {loadout.quiver.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-[#00696b]/30 text-[#5af8fb] rounded-md text-[10px] font-bold tracking-widest uppercase border border-[#5af8fb]/20">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Armor Card */}
                    <div className="bg-[#031015] p-8 rounded-xl border border-white/10 hover:border-[#ff9069]/30 transition-all shadow-xl group">
                        <span className="material-symbols-outlined text-[#5af8fb] text-4xl mb-4 group-hover:scale-110 transition-transform">waves</span>
                        <h3 className="text-xl font-bold text-white uppercase mb-3 italic">{loadout.armor.title}</h3>
                        <p className="text-[#9eaeb4] text-xs leading-relaxed mb-6 font-light">{loadout.armor.desc}</p>
                        <div className="flex flex-wrap gap-2">
                            {loadout.armor.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-[#ff9069]/10 text-[#ff9069] rounded-md text-[10px] font-bold tracking-widest uppercase border border-[#ff9069]/20">{tag}</span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default TacticalLoadoutKite;