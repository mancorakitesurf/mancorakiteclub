import { COACHING_DATA9 } from "./introData9";

function IntroMistakesKite() {
    const { intro } = COACHING_DATA9;
    return (
        <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-[#031015]">
            <div className="md:col-span-5 relative h-[400px]">
                <img src="https://picsum.photos/600/800" className="w-full h-full object-cover rounded shadow-2xl" alt="Technical" />
                <div className="absolute inset-0 bg-[#3de4e7]/10 rounded" />
            </div>
            <div className="md:col-span-7 space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#52f2f5] tracking-tight uppercase">
                    {intro.title}
                </h2>
                <div className="text-lg text-[#e4f3fa] space-y-6 font-light leading-relaxed">
                    <p>{intro.p1}</p>
                    <p>{intro.p2}</p>
                </div>
                <div className="w-full h-[1px] bg-gradient-to-r from-[#00e7fc]/50 to-transparent opacity-30 mt-12" />
            </div>
        </section>
    );
}
export default IntroMistakesKite;