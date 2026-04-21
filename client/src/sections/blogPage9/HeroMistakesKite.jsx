import { motion } from "framer-motion";
import { COACHING_DATA9 } from "./introData9";
import heroImg from '../../assets/imagenes-kitesurfing/posicionkt1.jpg'

function HeroMistakesKite() {
    const { hero } = COACHING_DATA9;

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroImg} 
                    className="w-full h-full object-cover opacity-60" 
                    alt="Mistakes Hero" 
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 text-center text-white max-w-5xl px-6"
            >
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-[#5af8fb]">
                    {hero.category1} <span className="mx-2 text-white/30">|</span> {hero.category2}
                </p>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95] uppercase mb-8">
                    {hero.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                    {hero.subtitle}
                </p>
            </motion.div>
        </section>
    );
}

export default HeroMistakesKite;