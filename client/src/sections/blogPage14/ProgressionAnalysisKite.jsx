import { CHOICE_DATA14 } from "./introData14";
import { useI18n } from '../../app/providers/i18nContext'

function ProgressionAnalysisKite() {
    const { t } = useI18n();
    const { progression: prog } = CHOICE_DATA14;

    return (
        <section className="bg-[#031015] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 sm:gap-10 lg:flex-row lg:gap-24">
                <div className="w-full lg:w-1/3 space-y-4">
                    <div className="flex items-center gap-4 text-white">
                        <span className="material-symbols-outlined text-4xl">trending_up</span>
                        <span className="text-sm font-bold tracking-[0.2em] uppercase">{t('blogWingVsKite.ui.progression')}</span>
                    </div>
                    <h3 className="text-2xl font-bold uppercase italic tracking-tighter text-white sm:text-3xl md:text-4xl">
                        {t(prog.titleKey)}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-[#9eaeb4] sm:text-base">
                        {t(prog.descKey)}
                    </p>
                </div>

                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-2/3">
                    {prog.cards.map((card, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#132930]/40 p-4 sm:p-6 lg:p-8">
                            <div className={`absolute top-0 left-0 w-1 h-full ${card.color}`} />
                            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{t(card.titleKey)}</h4>
                            <p className="text-sm text-[#9eaeb4] leading-relaxed font-light italic">
                                {t(card.textKey)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default ProgressionAnalysisKite;