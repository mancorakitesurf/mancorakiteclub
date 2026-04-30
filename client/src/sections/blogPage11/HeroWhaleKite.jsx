import { motion } from "framer-motion";
import { WHALE_DATA11 } from "./introData11";
import whaleHeroImg from "../../assets/imagenes-kitesurfing/posicionkt2.jpg";

function HeroWhaleKite() {
    const { hero } = WHALE_DATA11;

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image & Uniform Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={whaleHeroImg} 
                    className="w-full h-full object-cover opacity-60" 
                    alt="Whale Breaching" 
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content Centered - "Image 2" Style */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 text-center text-white max-w-5xl px-6"
            >
                {/* Tag Minimalista: Texto puro con tracking ancho */}
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-[#5af8fb]">
                    {hero.tag}
                </p>

                {/* Título: Eliminamos el 'italic' para un look más limpio y moderno */}
                <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter uppercase mb-6">
                    {hero.title}
                </h1>

                {/* Subtítulo centrado y con opacidad suave */}
                <p className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                    {hero.subtitle}
                </p>
            </motion.div>
        </section>
    );
}

export default HeroWhaleKite;