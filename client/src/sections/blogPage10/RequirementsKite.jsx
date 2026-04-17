import { SAFARI_DATA10 } from "./introData10";

function RequirementsKite() {
    const { requirements: req } = SAFARI_DATA10;
    return (
        <section className="py-24 px-6 md:px-12 bg-[#05161b]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tighter italic">Rider Requirements</h2>
                    <p className="text-[#9eaeb4] text-lg mb-8 leading-relaxed font-light">{req.description}</p>
                    <div className="space-y-4">
                        {req.items.map((item, i) => (
                            <div key={i} className="p-6 bg-[#132930]/50 rounded-xl border border-white/5 relative group overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5af8fb] group-hover:w-2 transition-all" />
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-[#5af8fb] text-3xl">{item.icon}</span>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-[#9eaeb4] text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square md:aspect-[4/3]">
                    <img src="https://picsum.photos/800/600" className="w-full h-full object-cover" alt="Requirement" />
                    <div className="absolute bottom-6 left-6 bg-[#031015]/80 backdrop-blur-md px-4 py-2 rounded-md border border-[#5af8fb]/30">
                        <span className="text-[10px] uppercase text-[#5af8fb] font-bold tracking-widest">Skill Level</span>
                        <p className="text-lg text-white font-bold uppercase">Intermediate / Advanced</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default RequirementsKite;