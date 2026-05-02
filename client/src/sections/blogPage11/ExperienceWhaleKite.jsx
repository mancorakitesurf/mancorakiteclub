import { WHALE_DATA11 } from "./introData11";

function ExperienceWhaleKite() {
    const { experience: exp } = WHALE_DATA11;
    return (
        <section className="bg-[#031015] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="relative mx-auto max-w-7xl">
                {/* Imagen desplazada a la derecha */}
                <div className="relative ml-auto aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/5 lg:w-3/4">
                    <img src="https://picsum.photos/1200/800" loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-1000 hover:grayscale-0" alt="Experience" />
                    <div className="absolute inset-0 bg-[#031015]/20 mix-blend-multiply" />
                </div>
                
                {/* Caja de texto solapada a la izquierda */}
                <div className="relative z-10 -mt-12 w-full rounded-2xl border border-white/10 bg-[#132930]/90 p-4 shadow-2xl backdrop-blur-xl sm:-mt-16 sm:w-[92%] sm:p-6 lg:-mt-40 lg:w-1/2 lg:p-12">
                    <h2 className="mb-6 text-2xl font-bold uppercase tracking-tighter italic text-white sm:text-3xl md:text-4xl">{exp.title}</h2>
                    <p className="mb-6 text-sm font-light leading-relaxed text-[#9eaeb4] sm:text-base">{exp.p1}</p>
                    <p className="text-sm font-light leading-relaxed text-[#9eaeb4] sm:text-base">{exp.p2}</p>
                </div>
            </div>
        </section>
    );
}
export default ExperienceWhaleKite;
