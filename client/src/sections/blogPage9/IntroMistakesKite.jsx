import { COACHING_DATA9 } from "./introData9";

function IntroMistakesKite() {
    const { intro } = COACHING_DATA9;
    return (
        <section className="bg-[#031015] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="relative h-[320px] sm:h-[420px] lg:col-span-5 lg:h-[400px]">
                <img src="https://picsum.photos/600/800" loading="lazy" className="h-full w-full rounded-3xl object-cover shadow-2xl" alt="Technical" />
                <div className="absolute inset-0 bg-[#3de4e7]/10 rounded" />
            </div>
            <div className="space-y-8 lg:col-span-7">
                <h2 className="text-2xl font-bold uppercase tracking-tight text-[#52f2f5] sm:text-3xl md:text-4xl lg:text-5xl">
                    {intro.title}
                </h2>
                <div className="space-y-6 text-sm font-light leading-relaxed text-[#e4f3fa] sm:text-base md:text-lg">
                    <p>{intro.p1}</p>
                    <p>{intro.p2}</p>
                </div>
                <div className="w-full h-[1px] bg-gradient-to-r from-[#00e7fc]/50 to-transparent opacity-30 mt-12" />
            </div>
            </div>
        </section>
    );
}
export default IntroMistakesKite;
