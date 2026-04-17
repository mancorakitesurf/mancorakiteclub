import { INTRO_DATA8 } from "./introData8";

function ProTipsSection() {
    return (
        <section className="py-24 px-6 bg-[#05161b]">
            <div className="max-w-4xl mx-auto">
                <div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#5af8fb]/40 via-transparent to-[#ff9069]/40">
                    <div className="bg-[#132930] rounded-2xl p-8 md:p-12 relative overflow-hidden">
                        <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-white/5 rotate-[-15deg] pointer-events-none">lightbulb</span>
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-10 flex items-center gap-4 italic tracking-tight">
                            <span className="material-symbols-outlined text-[#5af8fb] text-4xl">tips_and_updates</span>
                            INTERMEDIATE PRO-TIPS
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                            {INTRO_DATA8.proTips.map((tip, i) => (
                                <div key={i}>
                                    <h4 className={`${tip.color} font-bold mb-2 uppercase tracking-widest text-xs`}>{tip.title}</h4>
                                    <p className="text-[#9eaeb4] text-sm leading-relaxed">{tip.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ProTipsSection;