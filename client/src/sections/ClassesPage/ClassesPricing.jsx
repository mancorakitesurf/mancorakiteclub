import { motion } from "framer-motion"
import { PRIVATE_CLASSES } from "./classesData"

function ClassesPricing() {
  return (
    <section className="relative bg-gradient-to-b from-[#0f2e2c] to-[#071a19] py-32 px-6 text-white">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-[0.35em]">
          KITE CLASSES
        </h2>
        <p className="mt-6 text-lg text-white/70">
          Enjoy 100% personalized experience with IKO certified instructors and premium equipment.
        </p>
      </motion.div>

      {/* GRID → 4 HORIZONTALES */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {PRIVATE_CLASSES.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative flex flex-col overflow-hidden rounded-3xl bg-[#0c2523]"
          >

            {/* IMAGE HOVER CHANGE */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              {item.hoverImage && (
                <img
                  src={item.hoverImage}
                  alt={`${item.title} hover`}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 hover:opacity-100"
                />
              )}
            </div>

            {/* CONTENT */}
            <div className="flex flex-col flex-1 p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <span className="text-xs uppercase tracking-wider text-white/50">
                {item.duration}
              </span>

              <div className="my-6 text-2xl font-bold text-[#8ac43f]">
                {item.price}
              </div>

              <ul className="mb-8 space-y-3 flex-1">
                {item.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm text-white/80 flex items-center justify-center gap-2"
                  >
                    <span className="text-[#8ac43f]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="rounded-xl bg-[#8ac43f] py-3 font-bold text-[#071a19] transition hover:bg-white">
                BOOK NOW
              </button>
            </div>

            {/* ⭐ FEATURED CHIP ANIMATION */}
            {item.featured && (
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  boxShadow: [
                    "0 0 0px #8ac43f",
                    "0 0 25px #8ac43f",
                    "0 0 0px #8ac43f"
                  ]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-5 right-5 rounded-full bg-[#8ac43f] px-4 py-1 text-xs font-bold text-[#071a19]"
              >
                MOST POPULAR
              </motion.div>
            )}

          </motion.div>
        ))}

      </div>
    </section>
  )
}

export default ClassesPricing