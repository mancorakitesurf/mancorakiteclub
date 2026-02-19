function Movements() {
  return (
    <section className="relative overflow-hidden bg-[#DCEEDC] py-3 border-y border-gray-200">
      
      {/* Fade izquierdo */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

      {/* Fade derecho */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="whitespace-nowrap overflow-hidden">
        <div className="marquee flex items-center gap-16 w-max">
          
          {/* BLOQUE ORIGINAL */}
          <span className="font-display text-3xl font-black uppercase tracking-widest text-primary">
            Tu pasión a un siguiente nivel
          </span>
          <span className="font-display text-3xl font-black uppercase tracking-widest text-black">
            Tu pasión a un siguiente nivel
          </span>
          <span className="font-display text-3xl font-black uppercase tracking-widest text-primary">
            Tu pasión a un siguiente nivel
          </span>

          {/* DUPLICADO EXACTO */}
          <span className="font-display text-3xl font-black uppercase tracking-widest text-primary">
            Tu pasión a un siguiente nivel
          </span>
          <span className="font-display text-3xl font-black uppercase tracking-widest text-black">
            Tu pasión a un siguiente nivel
          </span>
          <span className="font-display text-3xl font-black uppercase tracking-widest text-primary">
            Tu pasión a un siguiente nivel
          </span>

        </div>
      </div>
    </section>
  )
}

export default Movements
