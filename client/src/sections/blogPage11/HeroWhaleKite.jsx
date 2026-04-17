import { motion } from "framer-motion";
import { WHALE_DATA11 } from "./introData11";
import whaleHeroImg from "../../assets/imagenes-kitesurfing/posicionkt2.jpg";

function HeroWhaleKite() {
    const { hero } = WHALE_DATA11;
    return (
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-end pb-12 px-6 bg-[#031015]">
            <div className="absolute inset-0 z-0">
                <img src={whaleHeroImg} className="w-full h-full object-cover" alt="Whale Breaching" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-[#031015]/60 to-transparent" />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-4xl mx-auto"
            >
                <div className="inline-flex items-center px-3 py-1 mb-6 rounded-md bg-[#00696b]/80 backdrop-blur-md border border-white/10 text-[#5af8fb] text-[10px] tracking-[0.2em] uppercase font-bold">
                    {hero.tag}
                </div>
                <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-4 tracking-tighter text-white uppercase italic">
                    {hero.title}
                </h1>
                <p className="text-xl md:text-2xl text-[#9eaeb4] font-light max-w-2xl leading-relaxed">
                    {hero.subtitle}
                </p>
            </motion.div>
        </section>
    );
}
export default HeroWhaleKite;