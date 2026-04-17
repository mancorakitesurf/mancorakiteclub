import { INTRO_DATA8 } from "./introData8";

function KiteControlSection() {
    const { kiteControl: data } = INTRO_DATA8;
    return (
        <section className="py-24 px-6 bg-[#031015]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2">
                    <img src="https://picsum.photos/800/450" className="rounded-xl shadow-2xl border border-white/5" alt="Control" />
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 italic tracking-tighter">
                        {data.title}<br/><span className="text-[#ff7948]">{data.highlight}</span>
                    </h2>
                    <p className="text-lg text-[#9eaeb4] mb-8">{data.desc}</p>
                    <div className="space-y-4">
                        {data.items.map((item, i) => (
                            <div key={i} className="flex gap-4 p-5 rounded-lg bg-[#0e2229] border border-white/5">
                                <span className="material-symbols-outlined text-[#ff9069]">{item.icon}</span>
                                <div>
                                    <h5 className="text-white font-bold mb-1">{item.label}</h5>
                                    <p className="text-sm text-[#9eaeb4]">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default KiteControlSection;