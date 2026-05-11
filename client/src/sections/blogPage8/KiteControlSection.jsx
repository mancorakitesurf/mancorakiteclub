import { INTRO_DATA8 } from "./introData8";
import { useI18n } from "../../app/providers/i18nContext";

function KiteControlSection() {
    const { t } = useI18n();
    const { kiteControl: data } = INTRO_DATA8;

    return (
        <section className="bg-[#031015] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:gap-16">
                <div className="w-full lg:w-1/2">
                    <img src="https://picsum.photos/800/450" loading="lazy" className="w-full rounded-3xl border border-white/5 shadow-2xl" alt="Control" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h2 className="mb-6 text-2xl font-bold italic tracking-tighter text-white sm:text-3xl md:text-4xl lg:text-5xl">
                        {t(data.titleKey)}<br /><span className="text-[#ff7948]">{t(data.highlightKey)}</span>
                    </h2>
                    <p className="mb-8 text-sm leading-relaxed text-[#9eaeb4] sm:text-base md:text-lg">{t(data.descKey)}</p>
                    <div className="space-y-4">
                        {data.items.map((item, i) => (
                            <div key={i} className="flex gap-4 rounded-2xl border border-white/5 bg-[#0e2229] p-4 sm:p-5">
                                <span className="material-symbols-outlined text-[#ff9069]">{item.icon}</span>
                                <div>
                                    <h5 className="text-white font-bold mb-1">{t(item.labelKey)}</h5>
                                    <p className="text-sm leading-relaxed text-[#9eaeb4]">{t(item.textKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default KiteControlSection;