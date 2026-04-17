import { motion } from "framer-motion";
import { CHOICE_DATA14 } from "./introData14";
import heroImg from "../../assets/imagenes-kitesurfing/posicionkt2.jpg";

function HeroChoiceKite() {
    const { hero } = CHOICE_DATA14;
    return (
        <section className="relative w-full min-h-[85vh] flex flex-col justify-end pb-24 px-6 md:px-24 bg-[#031015]">
            <div className="absolute inset-0 z-0">
                <img src={heroImg} className="w-full h-full object-cover opacity-60" alt="Peru Swell" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-transparent to-transparent" />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 max-w-5xl"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#132930]/60 backdrop-blur-md border border-white/10 rounded-full">
                    <span className="material-symbols-outlined text-[#5af8fb] text-sm fill">water</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#5af8fb] font-bold">{hero.tag}</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6">
                    {hero.title}<br/>
                    <span className="text-[#ff9069]">{hero.highlight}</span>
                </h1>
                <p className="text-lg md:text-xl text-[#9eaeb4] max-w-2xl font-light leading-relaxed italic">
                    {hero.description}
                </p>
            </motion.div>

            {/* Data Anchors */}
            <div className="absolute right-6 md:right-24 bottom-24 hidden md:flex flex-col gap-4">
                {hero.anchors.map((anchor, i) => (
                    <div key={i} className="bg-[#132930]/60 backdrop-blur-md p-4 rounded-xl border border-white/10 min-w-[160px]">
                        <p className="text-[10px] uppercase tracking-widest text-[#9eaeb4] mb-1">{anchor.sub}</p>
                        <p className="text-3xl font-bold text-white tracking-tighter">
                            {anchor.value}<span className="text-sm ml-1 opacity-50">{anchor.unit || ""}</span>
                        </p>
                        <p className="text-[10px] text-[#5af8fb] font-bold uppercase mt-1">{anchor.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default HeroChoiceKite;