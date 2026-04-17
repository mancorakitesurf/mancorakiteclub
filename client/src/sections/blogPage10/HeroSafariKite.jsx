import { motion } from "framer-motion";
import { SAFARI_DATA10 } from "./introData10";
import heroImg from "../../assets/imagenes-kitesurfing/posicionkt2.jpg";

function HeroSafariKite() {
    const { hero } = SAFARI_DATA10;
    return (
        <section className="relative min-h-[85vh] flex items-end pb-24 px-6 md:px-12 bg-[#031015]">
            <div className="absolute inset-0 z-0">
                <img src={heroImg} className="w-full h-full object-cover opacity-60 mix-blend-luminosity" alt="Peru Safari" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-[#031015]/80 to-transparent" />
                <div className="absolute inset-0 bg-[#031015]/30 backdrop-blur-[2px]" />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 max-w-5xl mx-auto w-full"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#00696b]/40 border border-[#5af8fb]/20 backdrop-blur-md mb-6">
                    <span className="material-symbols-outlined text-[#5af8fb] text-sm">sailing</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#5af8fb] font-bold">{hero.tag}</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6 drop-shadow-2xl">
                    {hero.title} <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ff9069] to-[#fe5e1e]">
                        {hero.highlight}
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-[#9eaeb4] max-w-2xl font-light mb-8">
                    {hero.description}
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="bg-gradient-to-br from-[#ff9069] to-[#fe5e1e] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                        Book Your Spot <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button className="border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm">
                        View Itinerary <span className="material-symbols-outlined">map</span>
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
export default HeroSafariKite;