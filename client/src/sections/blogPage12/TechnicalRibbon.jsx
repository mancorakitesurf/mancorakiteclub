import { WHALE_SEASON_DATA12 } from "./introData12";

function TechnicalRibbon() {
    return (
        <section className="bg-[#05161b] py-8 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                    {WHALE_SEASON_DATA12.ribbon.map((stat, i) => (
                        <div key={i} className="flex flex-col px-4 first:pl-0">
                            <span className="text-[#9eaeb4] text-[10px] tracking-[0.2em] font-bold uppercase mb-1">{stat.label}</span>
                            <span className={`${stat.color} font-bold text-xl tracking-tight`}>{stat.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default TechnicalRibbon;