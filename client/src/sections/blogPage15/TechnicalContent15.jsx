import { SAFETY_DATA15 } from "./introData15";
import { useI18n } from '../../app/providers/i18nContext'

function TechnicalContent15() {
    const { t } = useI18n();
    const { mechanics, calibration } = SAFETY_DATA15;

    // Validación de seguridad para evitar que la página se rompa
    const bulletList = mechanics.bulletsKeys || mechanics.bullets || [];

    return (
        <section className="max-w-5xl mx-auto px-6 py-24 space-y-32 bg-[#031015]">
            
            {/* Section 1: 2:1 Ratio */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5 space-y-6">
                    <h2 className="text-3xl font-bold text-white uppercase tracking-tighter italic">{t(mechanics.titleKey)}</h2>
                    <p className="text-[#9eaeb4] leading-relaxed font-light">{t(mechanics.bodyKey)}</p>
                    <ul className="space-y-4 pt-4 border-t border-white/10">
                        {bulletList.map((bulletKey, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#ff9069] text-xl">check_circle</span>
                                <span className="text-sm text-[#e6f6fd] font-light">{t(bulletKey)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:col-span-7 relative h-80 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <img src="https://picsum.photos/800/500?random=5" className="w-full h-full object-cover opacity-70 grayscale" alt="Bar Setup" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#031015]/80 to-transparent" />
                </div>
            </div>

            {/* Section 2: Arc Calibration */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-7 order-2 md:order-1 relative h-96 bg-[#132930] rounded-xl overflow-hidden border border-white/10 p-8 flex flex-col justify-between shadow-2xl">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-[#5af8fb]/10 rounded-full blur-3xl -mr-10 -mt-10" />
                    <div className="relative z-10 space-y-4">
                        <span className="material-symbols-outlined text-4xl text-[#5af8fb]">architecture</span>
                        <h3 className="text-2xl font-bold text-white uppercase italic tracking-tight">{t(calibration.boxTitleKey)}</h3>
                        <p className="text-sm text-[#9eaeb4] font-light leading-relaxed">{t(calibration.boxBodyKey)}</p>
                    </div>
                    <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-4">
                        {calibration.arcs?.map((arc, i) => (
                            <div key={i} className={arc.side === 'right' ? 'text-right' : ''}>
                                <span className="block text-[10px] font-bold text-[#9eaeb4] uppercase mb-1">{t(arc.labelKey)}</span>
                                <span className={`text-lg font-bold uppercase ${arc.highlight ? 'text-[#5af8fb]' : 'text-white'}`}>{t(arc.valueKey)}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-5 order-1 md:order-2 space-y-6">
                    <h2 className="text-3xl font-bold text-white uppercase tracking-tighter italic">{t(calibration.titleKey)}</h2>
                    <p className="text-[#9eaeb4] leading-relaxed font-light">
                        {t('blogSafetyKite.calibration.desc')}
                    </p>
                </div>
            </div>

        </section>
    );
}
export default TechnicalContent15;