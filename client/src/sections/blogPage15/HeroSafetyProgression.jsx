import { motion } from "framer-motion";
import { SAFETY_DATA15 } from "./introData15";
import heroImg from "../../assets/imagenes-kitesurfing/posicionkt2.jpg";

function HeroSafetyProgression() {
    const { hero } = SAFETY_DATA15;

    return (
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-black md:min-h-screen">
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
                className="relative z-10 max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8"
            >
                {/* Etiqueta superior (Tag) */}
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-[#5af8fb]">
                    {hero.tag}
                </p>

                {/* Título Principal */}
                <h1 className="text-4xl font-bold uppercase leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    {hero.title} <br />
                    {hero.highlight}
                </h1>

                {/* Descripción */}
                <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-white/80 sm:text-lg md:text-xl">
                    {hero.description}
                </p>
            </motion.div>
        </section>
    );
}

export default HeroSafetyProgression;
