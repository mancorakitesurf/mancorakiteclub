import { SAFETY_DATA15 } from "./introData15";

function DataStripSafety() {
    return (
        <div className="grid grid-cols-3 gap-4 py-8 border-b border-white/10 max-w-5xl mx-auto px-6">
            {SAFETY_DATA15.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                    <span className="text-[#9eaeb4] text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
                    <span className="text-[#5af8fb] font-bold text-xl tracking-tight">{stat.value}</span>
                </div>
            ))}
        </div>
    );
}
export default DataStripSafety;