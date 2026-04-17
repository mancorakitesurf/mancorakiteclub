import { INTRO_DATA8 } from "./introData8";

function TechniquesContent8() {
    const [swell, turns] = INTRO_DATA8.sections;

    return (
        <div className="bg-[#031015] text-[#e6f6fd]">
            {/* Reading the Swell */}
            <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2 relative group">
                    <div className="absolute -inset-4 bg-[#132930]/50 rounded-xl blur-xl" />
                    <img src="https://picsum.photos/800/1000" className="relative z-10 rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Swell" />
                    <div className="absolute -bottom-8 -right-8 bg-[#132930]/80 backdrop-blur-md p-6 rounded-xl border border-white/10 w-64 hidden md:block z-20 shadow-2xl">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="material-symbols-outlined text-[#5af8fb] text-sm">visibility</span>
                            <h4 className="font-bold text-xs tracking-widest uppercase">Focus Point</h4>
                        </div>
                        <p className="text-xs text-[#9eaeb4]">{swell.focus}</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 italic tracking-tighter">
                        {swell.title}<br/><span className="text-[#ff9069]">{swell.highlight}</span>
                    </h2>
                    <p className="text-lg text-[#9eaeb4] mb-6">{swell.p1}</p>
                    <p className="text-lg text-[#9eaeb4]">{swell.p2}</p>
                </div>
            </section>

            {/* Timing Your Turns */}
            <section className="py-24 px-6 bg-[#05161b]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <img src="https://picsum.photos/800/600" className="rounded-xl shadow-2xl" alt="Turns" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 italic tracking-tighter">
                            {turns.title}<br/><span className="text-[#5af8fb]">{turns.highlight}</span>
                        </h2>
                        <div className="space-y-6 text-[#9eaeb4] text-lg">
                            <p>{turns.p1}</p>
                            <p><strong className="text-white uppercase text-sm block mb-1">The Bottom Turn:</strong> {turns.p2}</p>
                            <p><strong className="text-white uppercase text-sm block mb-1">The Top Turn:</strong> {turns.p3}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default TechniquesContent8;