import { SAFARI_DATA10 } from "./introData10";
import { useI18n } from '../../app/providers/i18nContext'

function RequirementsKite() {
    const { t } = useI18n();
    const { requirements: req } = SAFARI_DATA10;

    return (
        <section className="bg-[#05161b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                    <h2 className="mb-6 text-2xl font-bold uppercase tracking-tighter italic leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl sm:mb-8">
                        {t(req.titleKey)}
                    </h2>
                    <p className="mb-6 text-sm font-light leading-relaxed text-[#9eaeb4] sm:text-base md:text-lg sm:mb-8">
                        {t(req.descriptionKey)}
                    </p>
                    <div className="space-y-4">
                        {req.items.map((item, i) => (
                            <div key={i} className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#132930]/50 p-4 group sm:p-6">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5af8fb] group-hover:w-2 transition-all" />
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-[#5af8fb] text-3xl">{item.icon}</span>
                                    <div>
                                        <h4 className="mb-1 text-lg font-bold uppercase tracking-tight text-white sm:text-xl">{t(item.titleKey)}</h4>
                                        <p className="text-sm leading-relaxed text-[#9eaeb4]">{t(item.descKey)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 md:aspect-[4/3]">
                    <img src="https://picsum.photos/800/600" loading="lazy" className="h-full w-full object-cover" alt="Requirement" />
                    <div className="absolute bottom-4 left-4 rounded-xl border border-[#5af8fb]/30 bg-[#031015]/80 px-4 py-2 backdrop-blur-md sm:bottom-6 sm:left-6">
                        <span className="text-[10px] uppercase text-[#5af8fb] font-bold tracking-widest">{t('blogSafariKite.ui.skillLevel')}</span>
                        <p className="text-base font-bold uppercase text-white sm:text-lg">{t('blogSafariKite.ui.levelValue')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default RequirementsKite;