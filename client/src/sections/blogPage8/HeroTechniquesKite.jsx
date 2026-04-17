import { motion } from "framer-motion";
import { INTRO_DATA8 } from "./introData8";
import heroImg from "../../assets/imagenes-kitesurfing/posicionkt1.jpg";

function HeroTechniquesKite() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#031015]">
            <div className="absolute inset-0 z-0">
                <img src={heroImg} alt="Hero" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-transparent to-transparent" />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
            >
                <span className="inline-block py-1 px-4 rounded-full bg-[#00696b] text-[#d9ffff] text-[10px] tracking-[0.2em] uppercase mb-6 font-bold shadow-[0_0_15px_rgba(90,248,251,0.2)]">
                    {INTRO_DATA8.category}
                </span>
                <h1 className="text-5xl md:text-8xl font-bold text-[#e6f6fd] leading-tight tracking-tighter mb-6">
                    {INTRO_DATA8.hero.title}<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9069] to-[#fe5e1e]">
                        {INTRO_DATA8.hero.highlight}
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-[#9eaeb4] max-w-2xl mx-auto leading-relaxed">
                    {INTRO_DATA8.hero.description}
                </p>
            </motion.div>
        </section>
    );
}
export default HeroTechniquesKite;