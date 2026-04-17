import { motion } from "framer-motion"
import heroImg from "../../../assets/imagenes-kitesurfing/posicionkt2.jpg"

function ComparisonHero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-white">

      <img
        src={heroImg}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center max-w-4xl px-6"
      >
        <h1 className="text-5xl font-bold leading-tight">
          Mancora vs Lobitos vs Cabo Blanco
        </h1>

        <p className="mt-6 text-lg text-gray-200">
          The ultimate guide to wave kitesurfing in Peru.  
          Three iconic spots. One clear winner.
        </p>
      </motion.div>

    </section>
  )
}

export default ComparisonHero