import { WHALE_DATA11 } from "./introData11";

function IntroWhaleKite() {
    return (
        <section className="bg-[#05161b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <div className="text-[#5af8fb] text-xs font-bold uppercase italic tracking-[0.3em] sm:text-sm">
                    {WHALE_DATA11.intro.tag}
                </div>
                <p className="text-sm font-light leading-relaxed text-[#e6f6fd] sm:text-base md:text-lg lg:text-xl">
                    {WHALE_DATA11.intro.body}
                </p>
            </div>
        </section>
    );
}
export default IntroWhaleKite;
