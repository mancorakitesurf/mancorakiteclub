import { motion } from "framer-motion";
import { SEVEN_PLANS_DATA7 } from "./introData13";
import heroImg from "../../assets/imagenes-kitesurfing/posicionkt2.jpg";
function HeroProgressionKite() {
    const { hero } = SEVEN_PLANS_DATA7;
    return (
        <section className="relative min-h-[85vh] flex items-end pb-24 pt-32 px-6 lg:px-16 overflow-hidden bg-[#031015]">
            <div className="absolute inset-0 z-0">
                <img src={heroImg} className="w-full h-full object-cover opacity-60 mix-blend-luminosity" alt="Mancora" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-[#031015]/80 to-transparent" />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 max-w-4xl"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#132930]/40 backdrop-blur-md border border-white/10 text-[#5af8fb] text-xs font-bold tracking-widest uppercase mb-6">
                    <span className="material-symbols-outlined text-[18px]">explore</span>
                    {hero.location}
                </div>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white uppercase mb-6">
                    {hero.title}<br/>
                    <span className="text-[#ff9069]">{hero.highlight}</span><br/>
                    {hero.subtitle}
                </h1>
                <p className="text-lg md:text-xl text-[#9eaeb4] max-w-2xl leading-relaxed font-light">
                    {hero.description}
                </p>
            </motion.div>
        </section>
    );
}
export default HeroProgressionKite;