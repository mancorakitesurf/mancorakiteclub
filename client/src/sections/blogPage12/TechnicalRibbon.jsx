import { WHALE_SEASON_DATA12 } from "./introData12";

function TechnicalRibbon() {
    return (
        <section className="border-y border-white/5 bg-[#05161b] py-6 sm:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 divide-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:divide-x">
                    {WHALE_SEASON_DATA12.ribbon.map((stat, i) => (
                        <div key={i} className="flex flex-col rounded-2xl border border-white/10 px-4 py-4 lg:rounded-none lg:border-0 lg:py-0 lg:first:pl-0">
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
