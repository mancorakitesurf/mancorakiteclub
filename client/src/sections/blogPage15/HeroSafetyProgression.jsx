import { motion } from "framer-motion";
import { SAFETY_DATA15 } from "./introData15";
import heroImg from "../../assets/imagenes-kitesurfing/posicionkt2.jpg";

function HeroSafetyProgression() {
    const { hero } = SAFETY_DATA15;

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Imagen de fondo - Ajustada para cubrir todo */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroImg} 
                    className="w-full h-full object-cover opacity-60" 
                    alt="Technical Edge" 
                />
                {/* Overlay oscuro uniforme como la segunda imagen */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Contenido Centrado */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 text-center text-white max-w-5xl px-6"
            >
                {/* Etiqueta superior (Tag) */}
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-[#5af8fb]">
                    {hero.tag}
                </p>

                {/* Título Principal */}
                <h1 className="text-5xl md:text-7xl font-bold leading-tight uppercase tracking-tighter">
                    {hero.title} <br />
                    {hero.highlight}
                </h1>

                {/* Descripción */}
                <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-light leading-relaxed">
                    {hero.description}
                </p>
            </motion.div>
        </section>
    );
}

export default HeroSafetyProgression;