import { componentImages } from '../../config/images.js'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const { heroWingfoil } = componentImages["sections/ClassesPage/WingfoilIntro.jsx"]
function WingfoilIntro() {
  return (
    <section className="relative bg-[#0f1416] text-white overflow-hidden">
      {/* Imagen de fondo */}
    <div className="absolute inset-0">
        <img
            src={heroWingfoil}
            alt="Wingfoil Hero"
            className="w-full h-full object-cover opacity-40"
        />
        </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />

      {/* Contenido */}
      <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
        >
          ABOUT WINGFOIL
        </motion.h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg md:text-left">
          The first time someone was seen practicing wingfoil was in 2019, when Robby NAish appeared in Hawaii on a board with a foil and handling a wing. Those images caused so much emotion that in a few months we began to see videos and photos on all social networks of different types of wings and people practicing this strange sport. 
        </p>
        <Link
          to="/build"
          className="mt-10 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-cyan-400 px-6 py-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-black sm:w-auto sm:px-8"
        >
          JOIN THE CLUB
        </Link>
      </div>
    </section>
  )
}

export default WingfoilIntro
