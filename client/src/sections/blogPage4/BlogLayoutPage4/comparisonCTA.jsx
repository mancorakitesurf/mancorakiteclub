import { motion } from "framer-motion"

function ComparisonCTA() {
  return (
    <section className="py-28 bg-gradient-to-r from-black to-[#0b1f1e] text-white text-center">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold">
          Experience Mancora for yourself
        </h2>

        <p className="mt-6 text-gray-300">
          Ride consistent wind, progress faster, and enjoy a full premium experience.
          Not just a trip — a lifestyle.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 bg-cyan-400 text-black rounded-full font-semibold hover:bg-cyan-300 transition">
            Book Your Trip
          </button>

          <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
            Explore Classes
          </button>
        </div>
      </motion.div>

    </section>
  )
}

export default ComparisonCTA