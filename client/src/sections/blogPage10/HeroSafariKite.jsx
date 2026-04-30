import { motion } from "framer-motion";
import { SAFARI_DATA10 } from "./introData10";
import heroImg from "../../assets/imagenes-kitesurfing/posicionkt2.jpg";

function HeroSafariKite() {
    const { hero } = SAFARI_DATA10;

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image & Uniform Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroImg} 
                    className="w-full h-full object-cover opacity-60" 
                    alt="Peru Safari" 
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Centered Content */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 text-center text-white max-w-5xl px-6"
            >
                {/* Tag Minimalista */}
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-[#5af8fb]">
                    {hero.tag}
                </p>

                {/* Título Principal */}
                <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter uppercase mb-6">
                    {hero.title} <br/>
                    {hero.highlight}
                </h1>

                {/* Descripción Centrada (Sin botones) */}
                <p className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                    {hero.description}
                </p>
            </motion.div>
        </section>
    );
}

export default HeroSafariKite;