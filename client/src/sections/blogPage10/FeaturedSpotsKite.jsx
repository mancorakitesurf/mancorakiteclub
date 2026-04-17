import { SAFARI_DATA10 } from "./introData10";

function FeaturedSpotsKite() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#05161b]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 border-l-4 border-[#ff9069] pl-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">Featured Spots</h2>
                    <p className="text-[#9eaeb4] text-lg font-light">The Peruvian Wave Circuit</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
                    {SAFARI_DATA10.spots.map((spot, i) => (
                        <div key={i} className={`${spot.colSpan} rounded-2xl overflow-hidden relative group border border-white/5`}>
                            <img src={`https://picsum.photos/800/600?random=${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={spot.name} />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <span className="text-[10px] font-bold text-[#5af8fb] uppercase tracking-[0.2em] mb-2 block">{spot.tag}</span>
                                <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">{spot.name}</h3>
                                {spot.desc && <p className="text-[#9eaeb4] text-sm mt-2 max-w-xs hidden md:block">{spot.desc}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default FeaturedSpotsKite;