import { motion } from "framer-motion";
import { WHALE_SEASON_DATA12 } from "./introData12";
import heroImg from "../../assets/imagenes-kitesurfing/posicionkt2.jpg";

function HeroWhaleSeason() {
    const { hero } = WHALE_SEASON_DATA12;

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Fondo con imagen y overlay uniforme (Estilo Imagen 2) */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroImg} 
                    className="w-full h-full object-cover opacity-60" 
                    alt="Whale Season" 
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Contenido Centrado y Minimalista */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 text-center text-white max-w-5xl px-6"
            >
                {/* Tag: Texto puro con tracking ancho, sin cápsula ni blur */}
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-[#5af8fb]">
                    {hero.location}
                </p>

                {/* Título Principal */}
                <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase mb-6">
                    {hero.title}<br />
                    {hero.highlight}
                </h1>

                {/* Descripción Centrada */}
                <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-light leading-relaxed">
                    {hero.description}
                </p>
            </motion.div>
        </section>
    );
}

export default HeroWhaleSeason;