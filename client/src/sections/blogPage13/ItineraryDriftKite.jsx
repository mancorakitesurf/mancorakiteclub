import { SEVEN_PLANS_DATA7 } from "./introData13";

function ItineraryDriftKite() {
    return (
        <section className="py-24 px-6 lg:px-16 bg-[#031015]">
            <div className="max-w-6xl mx-auto space-y-32">
                {SEVEN_PLANS_DATA7.itinerary.map((item, i) => (
                    <div key={i} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${item.isReversed ? 'md:flex-row-reverse' : ''}`}>
                        
                        <div className="w-full md:w-1/2 relative z-10">
                            <div className="flex items-center gap-2 text-[#5af8fb] mb-4">
                                {item.icons.map((icon, idx) => (
                                    <span key={idx} className="material-symbols-outlined text-sm">{icon}</span>
                                ))}
                                <span className="text-xs font-bold uppercase tracking-widest ml-2">{item.days}</span>
                            </div>
                            <h3 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-white mb-6 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-[#9eaeb4] text-lg leading-relaxed mb-8 font-light italic">
                                {item.description}
                            </p>
                            
                            {item.targets && (
                                <ul className="space-y-4 mb-8">
                                    {item.targets.map((t, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-[#9eaeb4]">
                                            <span className="material-symbols-outlined text-[#ff9069] text-lg">target</span>
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {item.proTip && (
                                <div className="bg-[#132930] p-6 rounded-lg border border-white/10 shadow-2xl">
                                    <h4 className="text-[#ff9069] font-bold uppercase text-xs mb-2 tracking-widest">Pro Tip: The Loop</h4>
                                    <p className="text-[#9eaeb4] text-xs leading-relaxed">{item.proTip}</p>
                                </div>
                            )}
                        </div>

                        <div className="w-full md:w-1/2 relative">
                            <div className="absolute -inset-4 bg-[#132930]/50 blur-2xl rounded-xl z-0" />
                            <img src="https://picsum.photos/800/600" className="relative z-10 w-full h-[500px] object-cover rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/5" alt={item.title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default ItineraryDriftKite;