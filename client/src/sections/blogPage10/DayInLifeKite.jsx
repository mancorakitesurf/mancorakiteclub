import { SAFARI_DATA10 } from "./introData10";

function DayInLifeKite() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#031015]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-4">A Day in the Life</h2>
                    <p className="text-[#9eaeb4] text-xl font-light">The rhythm of the wind dictates our schedule.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {SAFARI_DATA10.timeline.map((item, i) => (
                        <div key={i} className={`p-6 rounded-xl border flex flex-col relative overflow-hidden group 
                            ${item.active ? 'border-[#ff9069]/40 bg-[#132930]' : 'border-white/5 bg-[#091c22]'}
                            ${i % 2 !== 0 ? 'md:mt-12' : ''}`}>
                            <span className={`text-4xl font-bold mb-4 opacity-30 ${item.active ? 'text-[#ff9069]' : 'text-[#9eaeb4]'}`}>{item.id}</span>
                            <h3 className="text-lg text-white font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
                            <p className="text-xs text-[#9eaeb4] leading-relaxed mb-6">{item.desc}</p>
                            <span className={`material-symbols-outlined text-3xl mt-auto ${item.active ? 'text-[#ff9069]' : 'text-[#5af8fb] opacity-40'}`}>{item.icon}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default DayInLifeKite;