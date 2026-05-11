import { INTRO_DATA8 } from "./introData8";
import { useI18n } from "../../app/providers/i18nContext";

function TechniquesContent8() {
    const { t } = useI18n();
    const [swell, turns] = INTRO_DATA8.sections;

    return (
        <div className="bg-[#031015] text-[#e6f6fd]">
            {/* Reading the Swell */}
            <section className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 sm:gap-10 sm:px-6 sm:py-20 lg:flex-row lg:gap-16 lg:px-8 lg:py-28">
                <div className="group relative w-full lg:w-1/2">
                    <div className="absolute -inset-4 bg-[#132930]/50 rounded-xl blur-xl" />
                    <img src="https://picsum.photos/800/1000" loading="lazy" className="relative z-10 w-full rounded-3xl shadow-2xl grayscale transition-all duration-700 hover:grayscale-0" alt="Swell" />
                    <div className="absolute -bottom-8 -right-8 z-20 hidden w-64 rounded-2xl border border-white/10 bg-[#132930]/80 p-6 shadow-2xl backdrop-blur-md lg:block">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="material-symbols-outlined text-[#5af8fb] text-sm">visibility</span>
                            <h4 className="font-bold text-xs tracking-widest uppercase">{t('blogTechKite.ui.focusPoint')}</h4>
                        </div>
                        <p className="text-xs text-[#9eaeb4]">{t(swell.focusKey)}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <h2 className="mb-6 text-2xl font-bold italic tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                        {t(swell.titleKey)}<br /><span className="text-[#ff9069]">{t(swell.highlightKey)}</span>
                    </h2>
                    <p className="mb-6 text-sm leading-relaxed text-[#9eaeb4] sm:text-base md:text-lg">{t(swell.p1Key)}</p>
                    <p className="text-sm leading-relaxed text-[#9eaeb4] sm:text-base md:text-lg">{t(swell.p2Key)}</p>
                </div>
            </section>

            {/* Timing Your Turns */}
            <section className="bg-[#05161b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 sm:gap-10 lg:flex-row-reverse lg:gap-16">
                    <div className="w-full lg:w-1/2">
                        <img src="https://picsum.photos/800/600" loading="lazy" className="w-full rounded-3xl shadow-2xl" alt="Turns" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="mb-6 text-2xl font-bold italic tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                            {t(turns.titleKey)}<br /><span className="text-[#5af8fb]">{t(turns.highlightKey)}</span>
                        </h2>
                        <div className="space-y-6 text-sm leading-relaxed text-[#9eaeb4] sm:text-base md:text-lg">
                            <p>{t(turns.p1Key)}</p>
                            <p><strong className="text-white uppercase text-sm block mb-1">{t(turns.p2LabelKey)}</strong> {t(turns.p2Key)}</p>
                            <p><strong className="text-white uppercase text-sm block mb-1">{t(turns.p3LabelKey)}</strong> {t(turns.p3Key)}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default TechniquesContent8;