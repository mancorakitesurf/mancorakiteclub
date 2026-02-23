import { motion } from "framer-motion"
import heroWingfoil from '../../assets/imagenes-wingfoil/posicionw7.jpg'

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
      <div className="relative max-w-5xl mx-auto text-center py-40 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          ABOUT WINGFOIL
        </motion.h2>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto text-justify">
          The first time someone was seen practicing wingfoil was in 2019, when Robby NAish appeared in Hawaii on a board with a foil and handling a wing. Those images caused so much emotion that in a few months we began to see videos and photos on all social networks of different types of wings and people practicing this strange sport. 
        </p>
        <button className="mt-10 px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition rounded-full">
          JOIN THE CLUB
        </button>
      </div>
    </section>
  )
}

export default WingfoilIntro
