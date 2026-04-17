import { CHOICE_DATA14 } from "./introData14";

function ProgressionAnalysisKite() {
    const { progression: prog } = CHOICE_DATA14;
    return (
        <section className="py-24 px-6 md:px-24 bg-[#031015]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
                <div className="w-full lg:w-1/3 space-y-4">
                    <div className="flex items-center gap-4 text-white">
                        <span className="material-symbols-outlined text-4xl">trending_up</span>
                        <span className="text-sm font-bold tracking-[0.2em] uppercase">Progression</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white uppercase italic tracking-tighter">
                        {prog.title}
                    </h3>
                    <p className="text-[#9eaeb4] font-light leading-relaxed">
                        {prog.desc}
                    </p>
                </div>

                <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {prog.cards.map((card, i) => (
                        <div key={i} className="bg-[#132930]/40 p-8 rounded-xl border border-white/5 relative overflow-hidden group">
                            <div className={`absolute top-0 left-0 w-1 h-full ${card.color}`} />
                            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{card.title}</h4>
                            <p className="text-sm text-[#9eaeb4] leading-relaxed font-light italic">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default ProgressionAnalysisKite;