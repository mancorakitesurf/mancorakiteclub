import { SEVEN_PLANS_DATA7 } from "./introData13";
import { useI18n } from '../../app/providers/i18nContext'

function TacticalLoadoutKite() {
    const { t } = useI18n();
    const { loadout } = SEVEN_PLANS_DATA7;

    return (
        <section className="px-6 lg:px-16 py-24 bg-[#05161b]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold uppercase text-center text-white mb-16 tracking-tighter">
                    {t('blogProgressionKite.ui.tacticalLoadout')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Quiver Card */}
                    <div className="bg-[#031015] p-8 rounded-xl border border-white/10 hover:border-[#5af8fb]/30 transition-all shadow-xl group">
                        <span className="material-symbols-outlined text-[#ff9069] text-4xl mb-4 group-hover:scale-110 transition-transform">surfing</span>
                        <h3 className="text-xl font-bold text-white uppercase mb-3 italic">{t(loadout.quiver.titleKey)}</h3>
                        <p className="text-[#9eaeb4] text-xs leading-relaxed mb-6 font-light">{t(loadout.quiver.descKey)}</p>
                        <div className="flex flex-wrap gap-2">
                            {loadout.quiver.tagsKeys.map((tagKey, i) => (
                                <span key={i} className="px-3 py-1 bg-[#00696b]/30 text-[#5af8fb] rounded-md text-[10px] font-bold tracking-widest uppercase border border-[#5af8fb]/20">{t(tagKey)}</span>
                            ))}
                        </div>
                    </div>

                    {/* Armor Card */}
                    <div className="bg-[#031015] p-8 rounded-xl border border-white/10 hover:border-[#ff9069]/30 transition-all shadow-xl group">
                        <span className="material-symbols-outlined text-[#5af8fb] text-4xl mb-4 group-hover:scale-110 transition-transform">waves</span>
                        <h3 className="text-xl font-bold text-white uppercase mb-3 italic">{t(loadout.armor.titleKey)}</h3>
                        <p className="text-[#9eaeb4] text-xs leading-relaxed mb-6 font-light">{t(loadout.armor.descKey)}</p>
                        <div className="flex flex-wrap gap-2">
                            {loadout.armor.tagsKeys.map((tagKey, i) => (
                                <span key={i} className="px-3 py-1 bg-[#ff9069]/10 text-[#ff9069] rounded-md text-[10px] font-bold tracking-widest uppercase border border-[#ff9069]/20">{t(tagKey)}</span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default TacticalLoadoutKite;