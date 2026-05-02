import { INTRO_DATA8 } from "./introData8";

function ProTipsSection() {
    return (
        <section className="bg-[#05161b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="max-w-4xl mx-auto">
                <div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#5af8fb]/40 via-transparent to-[#ff9069]/40">
                    <div className="relative overflow-hidden rounded-2xl bg-[#132930] p-4 sm:p-6 md:p-10 lg:p-12">
                        <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-white/5 rotate-[-15deg] pointer-events-none">lightbulb</span>
                        <h3 className="mb-8 flex items-center gap-4 text-2xl font-bold italic tracking-tight text-white sm:text-3xl md:text-4xl sm:mb-10">
                            <span className="material-symbols-outlined text-[#5af8fb] text-4xl">tips_and_updates</span>
                            INTERMEDIATE PRO-TIPS
                        </h3>
                        <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
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
