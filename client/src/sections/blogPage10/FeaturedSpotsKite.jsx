import { SAFARI_DATA10 } from "./introData10";
import { useI18n } from '../../app/providers/i18nContext'

function FeaturedSpotsKite() {
    const { t } = useI18n();

    return (
        <section className="bg-[#05161b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 border-l-4 border-[#ff9069] pl-4 sm:mb-12 sm:pl-6">
                    <h2 className="text-2xl font-bold uppercase tracking-tighter text-white sm:text-3xl md:text-4xl lg:text-5xl">
                        {t('blogSafariKite.ui.featuredSpots')}
                    </h2>
                    <p className="text-sm font-light leading-relaxed text-[#9eaeb4] sm:text-base md:text-lg">
                        {t('blogSafariKite.ui.peruvianCircuit')}
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 auto-rows-[240px] sm:auto-rows-[280px] lg:grid-cols-12 lg:auto-rows-[300px]">
                    {SAFARI_DATA10.spots.map((spot, i) => (
                        <div key={i} className={`${spot.colSpan} rounded-2xl overflow-hidden relative group border border-white/5`}>
                            <img src={`https://picsum.photos/800/600?random=${i}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt={t(spot.nameKey)} />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-transparent to-transparent" />
                            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
                                <span className="text-[10px] font-bold text-[#5af8fb] uppercase tracking-[0.2em] mb-2 block">{t(spot.tagKey)}</span>
                                <h3 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">{t(spot.nameKey)}</h3>
                                {spot.descKey && <p className="mt-2 hidden max-w-xs text-sm leading-relaxed text-[#9eaeb4] lg:block">{t(spot.descKey)}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default FeaturedSpotsKite;