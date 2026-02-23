import { motion } from "framer-motion"

const BENEFITS = [
  "Guaranteed Quality – Certified instructors with extensive experience.",
  "Vanguard Team – Latest technologies in wings and boards.",
  "Priority Security – Small groups and constant support.",
  "Unforgettable memories – Professional visual material.",
  "Total Flexibility – Programs adapted to your needs."
]

function WingfoilBenefits() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-[#0f2e2c] to-[#071a19] text-white overflow-hidden">

      {/* Decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(42,157,143,0.25),_transparent_60%)]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-[0.35em]">
          BENEFITS
        </h2>
        <p className="mt-6 text-lg text-white/70">
          Everything included to elevate your kitesurfing experience
        </p>
      </motion.div>

      {/* Benefits list */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        {BENEFITS.map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 rounded-xl bg-white/5 px-6 py-5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition"
          >
            {/* Check icon */}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8ac43f]/20 text-[#8ac43f] font-bold">
              ✓
            </span>

            {/* Text */}
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              {benefit}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WingfoilBenefits