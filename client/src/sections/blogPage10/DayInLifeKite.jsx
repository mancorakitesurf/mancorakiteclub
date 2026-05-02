import { SAFARI_DATA10 } from "./introData10";

function DayInLifeKite() {
    return (
        <section className="bg-[#031015] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center sm:mb-16">
                    <h2 className="mb-4 text-2xl font-bold uppercase tracking-tighter text-white sm:text-3xl md:text-4xl lg:text-5xl">A Day in the Life</h2>
                    <p className="text-base font-light leading-relaxed text-[#9eaeb4] sm:text-lg md:text-xl">The rhythm of the wind dictates our schedule.</p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {SAFARI_DATA10.timeline.map((item, i) => (
                        <div key={i} className={`relative flex flex-col overflow-hidden rounded-2xl border p-4 group sm:p-6 
                            ${item.active ? 'border-[#ff9069]/40 bg-[#132930]' : 'border-white/5 bg-[#091c22]'}
                            ${i % 2 !== 0 ? 'xl:mt-12' : ''}`}>
                            <span className={`text-4xl font-bold mb-4 opacity-30 ${item.active ? 'text-[#ff9069]' : 'text-[#9eaeb4]'}`}>{item.id}</span>
                            <h3 className="mb-2 text-lg font-bold uppercase tracking-tight text-white">{item.title}</h3>
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
