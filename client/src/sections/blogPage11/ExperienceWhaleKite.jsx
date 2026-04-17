import { WHALE_DATA11 } from "./introData11";

function ExperienceWhaleKite() {
    const { experience: exp } = WHALE_DATA11;
    return (
        <section className="py-24 px-6 bg-[#031015]">
            <div className="max-w-6xl mx-auto relative">
                {/* Imagen desplazada a la derecha */}
                <div className="relative w-full md:w-3/4 aspect-[16/9] ml-auto overflow-hidden rounded-xl border border-white/5">
                    <img src="https://picsum.photos/1200/800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Experience" />
                    <div className="absolute inset-0 bg-[#031015]/20 mix-blend-multiply" />
                </div>
                
                {/* Caja de texto solapada a la izquierda */}
                <div className="relative z-10 w-[95%] md:w-1/2 -mt-20 md:-mt-40 md:mr-auto p-8 md:p-12 bg-[#132930]/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl">
                    <h2 className="text-3xl font-bold mb-6 text-white tracking-tighter italic uppercase">{exp.title}</h2>
                    <p className="text-[#9eaeb4] mb-6 leading-relaxed font-light">{exp.p1}</p>
                    <p className="text-[#9eaeb4] leading-relaxed font-light">{exp.p2}</p>
                </div>
            </div>
        </section>
    );
}
export default ExperienceWhaleKite;