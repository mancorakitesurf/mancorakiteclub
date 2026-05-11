import { SAFETY_DATA15 } from "./introData15";
import { useI18n } from '../../app/providers/i18nContext'

function DataStripSafety() {
    const { t } = useI18n();

    return (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 border-b border-white/10 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
            {SAFETY_DATA15.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                    <span className="text-[#9eaeb4] text-[10px] uppercase tracking-widest font-bold">{t(stat.labelKey)}</span>
                    <span className="text-[#5af8fb] font-bold text-xl tracking-tight">{t(stat.valueKey)}</span>
                </div>
            ))}
        </div>
    );
}
export default DataStripSafety;