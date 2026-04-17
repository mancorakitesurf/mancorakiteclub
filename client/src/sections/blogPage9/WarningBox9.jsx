import { COACHING_DATA9 } from "./introData9";

function WarningBox9() {
    return (
        <section className="py-12 px-6 md:px-24 max-w-5xl mx-auto mb-24">
            <div className="bg-[#142830] border-l-4 border-[#ff716c] p-8 rounded shadow-2xl relative overflow-hidden">
                <div className="flex items-center gap-4 mb-4 relative z-10">
                    <span className="material-symbols-outlined text-[#ff716c] text-4xl">warning</span>
                    <h3 className="text-2xl font-bold text-[#ff716c] uppercase tracking-tight">TECHNICAL WARNING</h3>
                </div>
                <p className="text-lg text-[#e4f3fa] font-light leading-relaxed relative z-10">
                    {COACHING_DATA9.warning}
                </p>
                {/* Decoración de fondo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff716c]/5 rounded-full -mr-16 -mt-16 blur-3xl" />
            </div>
        </section>
    );
}
export default WarningBox9;