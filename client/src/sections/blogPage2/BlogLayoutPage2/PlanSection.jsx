import { motion } from "framer-motion"

function PlanSection({ plan, index }) {
  const isEven = index % 2 === 0
  const textSide = isEven ? "left" : "right"

  return (
    <section className="relative py-48 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={plan.image}
          alt=""
          className="w-full h-full object-cover scale-110 blur-[2px]"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-24 items-center">

          {/* Imagen PRINCIPAL – tamaño fijo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`${isEven ? "" : "md:order-2"}`}
          >
            <div className="w-full h-[520px] overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative text-white"
          >
            {/* Letra gigante alineada */}
            <span
              className={`
                absolute top-[-120px]
                ${textSide === "left" ? "left-0" : "right-0"}
                text-[220px] font-extrabold
                text-white/10 leading-none
                select-none
              `}
            >
              {plan.letter}
            </span>

            <p className="uppercase tracking-[0.35em] text-xs text-white/70 mb-6">
              Plan {plan.letter}
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {plan.title}
            </h2>

            {/* TEXTO JUSTIFICADO */}
            <p className="text-lg text-white/85 leading-relaxed mb-12 max-w-xl text-justify">
              {plan.description}
            </p>

            {/* Metadata */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-12 text-sm text-white/80">
              <div>
                <span className="block uppercase tracking-wide text-xs text-white/50">
                  Duration
                </span>
                {plan.duration}
              </div>

              <div>
                <span className="block uppercase tracking-wide text-xs text-white/50">
                  Level
                </span>
                {plan.level}
              </div>

              <div>
                <span className="block uppercase tracking-wide text-xs text-white/50">
                  Spots
                </span>
                {plan.spots}
              </div>

              <div>
                <span className="block uppercase tracking-wide text-xs text-white/50">
                  Vibe
                </span>
                {plan.vibe}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default PlanSection