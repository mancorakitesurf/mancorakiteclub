import { motion } from "framer-motion";
import { COACHING_DATA9 } from "./introData9";
import heroImg from '../../assets/imagenes-kitesurfing/posicionkt1.jpg'

function HeroMistakesKite() {
    const { hero } = COACHING_DATA9;
    return (
        <section className="relative min-h-[70vh] flex flex-col justify-end pb-24 px-6 md:px-24 bg-[#031015] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={heroImg} className="w-full h-full object-cover opacity-50" alt="Mistakes Hero" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-[#031015]/40 to-transparent" />
            </div>
            
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl"
            >
                <div className="flex gap-3 mb-6">
                    <span className="bg-[#192f37] text-white text-[10px] px-3 py-1 rounded font-bold tracking-widest uppercase">{hero.category1}</span>
                    <span className="bg-[#192f37] text-white text-[10px] px-3 py-1 rounded font-bold tracking-widest uppercase">{hero.category2}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.9] mb-6 uppercase">
                    {hero.title}
                </h1>
                <p className="text-xl md:text-2xl text-[#9eadb4] max-w-2xl font-light">
                    {hero.subtitle}
                </p>
            </motion.div>
        </section>
    );
}
export default HeroMistakesKite;