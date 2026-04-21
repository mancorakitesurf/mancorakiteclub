import { motion } from "framer-motion";
import { SEVEN_PLANS_DATA7 } from "./introData7";
import heroImg from "../../assets/imagenes-kitesurfing/posicionkt2.jpg";

function HeroProgressionKite() {
    const { hero } = SEVEN_PLANS_DATA7;

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Fondo con imagen y overlay uniforme */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroImg} 
                    className="w-full h-full object-cover opacity-50" 
                    alt="Mancora" 
                />
                {/* Overlay oscuro simple para que el texto resalte */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Contenido centrado al estilo de la Referencia 2 */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 text-center text-white max-w-5xl px-6"
            >
                {/* Tag Minimalista: Sin bordes ni fondos */}
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-[#5af8fb]">
                    {hero.location}
                </p>

                {/* Título Principal Impactante */}
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight uppercase mb-6">
                    {hero.title}<br/>
                    {hero.highlight}<br/>
                    {hero.subtitle}
                </h1>

                {/* Descripción Centrada */}
                <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed font-light">
                    {hero.description}
                </p>
            </motion.div>
        </section>
    );
}

export default HeroProgressionKite;