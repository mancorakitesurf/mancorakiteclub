import { motion } from "framer-motion"
import heroImg from '../../../assets/imagenes-kitesurfing/posicionkt1.jpg'

function HeroSevenPlans() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <img
        src={heroImg}
        alt="Kitesurf Perú"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center text-white max-w-4xl px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          7 Different Ways
          <br />
          To Experience
          <br />
          Perú’s Wind
        </h1>

        <p className="mt-8 text-lg md:text-xl opacity-80">
          Not every rider follows the same path.
          Choose yours.
        </p>
      </motion.div>
    </section>
  )
}

export default HeroSevenPlans