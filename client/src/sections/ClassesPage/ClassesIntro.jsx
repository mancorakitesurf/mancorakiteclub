import { motion } from "framer-motion"
import { CLASSES_INTRO } from "./classesData"
import introHover from "../../assets/imagenes-kitesurfing/posicionkt3.jpg"

function ClassesIntro() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 md:grid-cols-2">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-xl text-center md:text-left"
        >
          <h2 className="mb-8 text-3xl font-bold leading-tight text-slate-900 md:text-4xl text-center">
            {CLASSES_INTRO.title}
          </h2>

          <p className="text-justify text-lg leading-relaxed text-slate-600">
            {CLASSES_INTRO.text}
          </p>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[520px] w-full overflow-hidden rounded-3xl shadow-xl group"
        >
          {/* Imagen base */}
          <img
            src={CLASSES_INTRO.image}
            alt={CLASSES_INTRO.title}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
          />

          {/* Imagen hover */}
          <img
            src={introHover}
            alt="Kitesurf class action"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />

          {/* Overlay elegante */}
          <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />
        </motion.div>

      </div>
    </section>
  )
}

export default ClassesIntro