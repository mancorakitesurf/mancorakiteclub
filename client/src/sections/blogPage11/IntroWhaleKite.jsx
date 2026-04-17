import { WHALE_DATA11 } from "./introData11";

function IntroWhaleKite() {
    return (
        <section className="py-24 px-6 bg-[#05161b]">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <div className="text-[#5af8fb] font-bold text-sm tracking-[0.3em] uppercase italic">
                    {WHALE_DATA11.intro.tag}
                </div>
                <p className="text-lg md:text-xl text-[#e6f6fd] leading-relaxed font-light">
                    {WHALE_DATA11.intro.body}
                </p>
            </div>
        </section>
    );
}
export default IntroWhaleKite;