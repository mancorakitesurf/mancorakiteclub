import { SEVEN_PLANS_DATA7 } from "./introData13";
import { resolveImage } from "../../config/images.js";

const ITINERARY_IMAGES = [
    resolveImage("fotos clases/DSC09589.webp"),
    resolveImage("fotos clases/DSC07694.webp"),
    resolveImage("fotos home/DSC00406.webp"),
];

function ItineraryDriftKite() {
    return (
        <section className="bg-[#031015] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-7xl space-y-16 sm:space-y-20 lg:space-y-24">
                {SEVEN_PLANS_DATA7.itinerary.map((item, i) => (
                    <div key={i} className={`flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:gap-24 ${item.isReversed ? 'lg:flex-row-reverse' : ''}`}>
                        
                        <div className="relative z-10 w-full lg:w-1/2">
                            <div className="flex items-center gap-2 text-[#5af8fb] mb-4">
                                {item.icons.map((icon, idx) => (
                                    <span key={idx} className="material-symbols-outlined text-sm">{icon}</span>
                                ))}
                                <span className="text-xs font-bold uppercase tracking-widest ml-2">{item.days}</span>
                            </div>
                            <h3 className="mb-6 text-2xl font-bold uppercase leading-tight tracking-tighter text-white sm:text-3xl md:text-4xl lg:text-5xl">
                                {item.title}
                            </h3>
                            <p className="mb-8 text-sm font-light italic leading-relaxed text-[#9eaeb4] sm:text-base md:text-lg">
                                {item.description}
                            </p>
                            
                            {item.targets && (
                                <ul className="space-y-4 mb-8">
                                    {item.targets.map((t, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-[#9eaeb4]">
                                            <span className="material-symbols-outlined text-[#ff9069] text-lg">target</span>
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {item.proTip && (
                                <div className="rounded-2xl border border-white/10 bg-[#132930] p-4 shadow-2xl sm:p-6">
                                    <h4 className="text-[#ff9069] font-bold uppercase text-xs mb-2 tracking-widest">Pro Tip: The Loop</h4>
                                    <p className="text-[#9eaeb4] text-xs leading-relaxed">{item.proTip}</p>
                                </div>
                            )}
                        </div>

                        <div className="relative w-full lg:w-1/2">
                            <div className="absolute -inset-4 bg-[#132930]/50 blur-2xl rounded-xl z-0" />
                            <img src={ITINERARY_IMAGES[i]} loading="lazy" className="relative z-10 h-[320px] w-full rounded-3xl border border-white/5 object-cover shadow-2xl grayscale transition-all duration-700 hover:grayscale-0 sm:h-[420px] lg:h-[500px]" alt={item.title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default ItineraryDriftKite;
