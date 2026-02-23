import { motion } from "framer-motion"
import { CLASSES_BENEFITS } from "./classesData"

function ClassesBenefits() {
  return (
    <section className="relative bg-gradient-to-b from-[#0f2e2c] to-[#071a19] py-28 px-6">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-[0.3em] text-white">
          BENEFITS
        </h2>
        <p className="mt-6 text-white/70 text-lg">
          Everything included to elevate your kitesurfing experience
        </p>
      </motion.div>

      {/* Benefits list */}
      <div className="max-w-4xl mx-auto grid gap-6">
        {CLASSES_BENEFITS.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-center gap-6 rounded-2xl bg-white/5 backdrop-blur-md px-8 py-6 text-white shadow-lg hover:bg-white/10 transition"
          >
            {/* Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8ac43f]/20 text-[#8ac43f] text-xl font-bold">
              ✓
            </div>

            {/* Text */}
            <p className="text-lg text-white/90">
              {benefit}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default ClassesBenefits