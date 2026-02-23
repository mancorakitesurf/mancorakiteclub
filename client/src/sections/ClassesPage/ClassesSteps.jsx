import { motion } from "framer-motion"
import { PRIVATE_CLASSES } from "./classesData"

function ClassesSteps() {
  return (
    <section className="relative bg-[#0f1416] py-32 px-6 text-white">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          YOUR KITESURF JOURNEY
        </h2>
        <p className="mt-6 text-lg text-gray-400">
          Step by step progression with certified instructors and premium gear.
        </p>
      </motion.div>

      {/* Timeline vertical */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-transparent -translate-x-1/2" />

        <div className="space-y-24">
          {PRIVATE_CLASSES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Imagen con hover swap */}
              <div className="relative w-full md:w-1/2 h-[320px] rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {item.hoverImage && (
                  <img
                    src={item.hoverImage}
                    alt={`${item.title} hover`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
              </div>

              {/* Contenido centrado */}
              <div className="w-full md:w-1/2 text-center">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <span className="text-sm uppercase tracking-wider text-gray-400">
                  {item.duration}
                </span>
                <div className="my-4 text-2xl font-bold text-cyan-400">
                  {item.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-300 flex items-center justify-center gap-2"
                    >
                      <span className="text-cyan-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="rounded-full bg-cyan-400 px-6 py-2 font-bold text-[#0f1416] hover:bg-white transition">
                  BOOK NOW
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClassesSteps
