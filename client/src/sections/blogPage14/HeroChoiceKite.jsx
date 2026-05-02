import { motion } from "framer-motion";
import { CHOICE_DATA14 } from "./introData14";
import heroImg from "../../assets/imagenes-kitesurfing/posicionkt2.jpg";

function HeroChoiceKite() {
    const { hero } = CHOICE_DATA14;

    return (
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-black md:min-h-screen">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroImg} 
                    className="w-full h-full object-cover opacity-60" 
                    alt="Peru Swell" 
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Main Content - Centered */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8"
            >
                {/* Tag style de la imagen 2 */}
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-[#5af8fb]">
                    {hero.tag}
                </p>

                {/* Title */}
                <h1 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    {hero.title}<br/>
                    {hero.highlight}
                </h1>

                {/* Description */}
                <p className="mx-auto mt-8 max-w-2xl text-base font-light italic leading-relaxed text-white/80 sm:text-lg md:text-xl">
                    {hero.description}
                </p>
            </motion.div>

            {/* Anchors/Stats - Reubicados horizontalmente abajo para mantener la simetría centrada */}
            <div className="absolute bottom-12 left-0 z-10 hidden w-full justify-center gap-8 lg:flex">
                {hero.anchors.map((anchor, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="text-center border-l border-white/20 pl-8 first:border-none"
                    >
                        <p className="text-[10px] uppercase tracking-widest text-[#9eaeb4] mb-1">{anchor.sub}</p>
                        <p className="text-3xl font-bold text-white tracking-tighter">
                            {anchor.value}<span className="text-sm ml-1 opacity-50">{anchor.unit || ""}</span>
                        </p>
                        <p className="text-[10px] text-[#5af8fb] font-bold uppercase mt-1">{anchor.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default HeroChoiceKite;
