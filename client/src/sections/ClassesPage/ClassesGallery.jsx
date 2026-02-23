import { CLASSES_GALLERY } from "./classesData"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

function ClassesGallery() {
  return (
    <section className="relative py-32 bg-[#0f1416] text-white overflow-hidden">

      <div className="max-w-6xl mx-auto text-center px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          MANCORA KITE CLUB:
          <br />
          <span className="text-cyan-400">RAW ADVENTURE MANIFESTO.</span>
        </motion.h2>

        <p className="mt-6 text-lg text-gray-300">
          Real Stories, Real Adrenaline, Your Tribe Awaits.
        </p>

        <button className="mt-8 px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition rounded-full">
          JOIN THE TRIBE
        </button>
      </div>

      {/* Collage estructurado */}
      <div className="relative mt-24 max-w-7xl mx-auto h-[650px]">

        {/* Imagen Central (principal) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[320px] h-[420px] rounded-2xl overflow-hidden shadow-2xl z-20"
        >
          <img
            src={CLASSES_GALLERY[0]}
            className="w-full h-full object-cover"
            alt=""
          />
        </motion.div>

        {/* Izquierda */}
        <div className="absolute left-10 top-24 w-[220px] h-[300px] rounded-xl overflow-hidden shadow-xl rotate-[-6deg]">
          <img src={CLASSES_GALLERY[1]} className="w-full h-full object-cover" alt="" />
        </div>

        <div className="absolute left-24 bottom-16 w-[200px] h-[260px] rounded-xl overflow-hidden shadow-lg rotate-[4deg]">
          <img src={CLASSES_GALLERY[2]} className="w-full h-full object-cover" alt="" />
        </div>

        {/* Derecha */}
        <div className="absolute right-16 top-32 w-[230px] h-[310px] rounded-xl overflow-hidden shadow-xl rotate-[5deg]">
          <img src={CLASSES_GALLERY[3]} className="w-full h-full object-cover" alt="" />
        </div>

        <div className="absolute right-8 bottom-10 w-[180px] h-[240px] rounded-xl overflow-hidden shadow-lg rotate-[-3deg]">
          <img src={CLASSES_GALLERY[1]} className="w-full h-full object-cover" alt="" />
        </div>

      </div>

    </section>
  )
}

export default ClassesGallery