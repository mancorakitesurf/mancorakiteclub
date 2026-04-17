import { motion } from "framer-motion";
import { SAFETY_DATA15 } from "./introData15";
import heroImg from "../../assets/imagenes-kitesurfing/posicionkt2.jpg";

function HeroSafetyProgression() {
    const { hero } = SAFETY_DATA15;
    return (
        <section className="relative w-full h-[70vh] min-h-[500px] flex flex-col justify-end p-8 md:p-16 overflow-hidden bg-[#031015]">
            <div className="absolute inset-0 z-0">
                <img src={heroImg} className="w-full h-full object-cover opacity-40" alt="Technical Lines" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-[#031015]/60 to-transparent" />
            </div>

            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00696b]/50 border border-white/10 backdrop-blur-md mb-6">
                    <span className="material-symbols-outlined text-[#5af8fb] text-sm">analytics</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#5af8fb] uppercase">{hero.tag}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase leading-tight">
                    {hero.title} <br/>
                    <span className="text-[#ff9069]">{hero.highlight}</span>
                </h1>
                <p className="text-lg md:text-xl text-[#9eaeb4] max-w-2xl font-light leading-relaxed">
                    {hero.description}
                </p>
            </motion.div>
        </section>
    );
}
export default HeroSafetyProgression;