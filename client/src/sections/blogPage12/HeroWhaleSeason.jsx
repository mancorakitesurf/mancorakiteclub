import { motion } from "framer-motion";
import { WHALE_SEASON_DATA12 } from "./introData12";
import heroImg from "../../assets/imagenes-kitesurfing/posicionkt2.jpg";

function HeroWhaleSeason() {
    const { hero } = WHALE_SEASON_DATA12;
    return (
        <section className="relative min-h-[70vh] flex items-end pb-16 px-8 lg:px-16 overflow-hidden bg-[#031015]">
            <div className="absolute inset-0 z-0">
                <img src={heroImg} className="w-full h-full object-cover opacity-60 mix-blend-luminosity" alt="Whale Season" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-[#031015]/80 to-transparent" />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#132930]/50 backdrop-blur-md rounded-full border border-white/10 mb-6">
                    <span className="material-symbols-outlined text-[#5af8fb] text-sm">location_on</span>
                    <span className="text-[10px] font-bold tracking-widest text-white uppercase">{hero.location}</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-4 tracking-tighter uppercase">
                    {hero.title} <span className="text-[#ff9069] block">{hero.highlight}</span>
                </h1>
                <p className="text-lg md:text-xl text-[#9eaeb4] max-w-2xl font-light leading-relaxed">
                    {hero.description}
                </p>
            </motion.div>
        </section>
    );
}
export default HeroWhaleSeason;