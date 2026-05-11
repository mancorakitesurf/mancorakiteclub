import { WHALE_DATA11 } from "./introData11";
import { useI18n } from '../../app/providers/i18nContext'

function IntroWhaleKite() {
    const { t } = useI18n();
    return (
        <section className="bg-[#05161b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <div className="text-[#5af8fb] text-xs font-bold uppercase italic tracking-[0.3em] sm:text-sm">
                    {t(WHALE_DATA11.intro.tagKey)}
                </div>
                <p className="text-sm font-light leading-relaxed text-[#e6f6fd] sm:text-base md:text-lg lg:text-xl">
                    {t(WHALE_DATA11.intro.bodyKey)}
                </p>
            </div>
        </section>
    );
}
export default IntroWhaleKite;