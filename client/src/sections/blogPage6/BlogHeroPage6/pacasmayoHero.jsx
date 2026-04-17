import heroImg from "../../../assets/imagenes-kitesurfing/posicionkt3.jpg"
import { motion } from "framer-motion"

function PacasmayoHero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-white">

      <img src={heroImg} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center max-w-4xl px-6"
      >
        <h1 className="text-5xl font-bold">
          Pacasmayo, Peru
        </h1>

        <p className="mt-6 text-lg text-gray-200">
          The ultimate point break experience.
        </p>
      </motion.div>

    </section>
  )
}

export default PacasmayoHero