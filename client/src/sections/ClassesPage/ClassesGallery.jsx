import { CLASSES_GALLERY } from "./classesData"
import { motion } from "framer-motion"

function ClassesGallery() {
  return (
    <section className="relative py-14 bg-[#0f1416] text-white overflow-hidden">

      {/* Header */}
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
          <span className="text-[#829988]">RAW ADVENTURE MANIFESTO.</span>
        </motion.h2>

        <p className="mt-6 text-lg text-gray-300 font-bold">
          Real Stories, Real Adrenaline, Your Tribe Awaits.
        </p>

        <button className="mt-8 px-8 py-3 border border-[#829988] text-[#829988] hover:bg-[#829988] hover:text-[#0f1416] transition rounded-full font-bold">
          JOIN THE TRIBE
        </button>
      </div>

      {/* Collage */}
      <div className="relative mt-10 max-w-[1600px] mx-auto h-[700px]">

        {/* Central */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="absolute left-1/2 top-1/2 
                        -translate-x-1/2 -translate-y-1/2
                        w-[420px] h-[540px]
                        rounded-2xl overflow-hidden shadow-2xl z-40"
        >
          <img src={CLASSES_GALLERY[0]} className="w-full h-full object-cover" />
        </motion.div>

        {/* Izquierda */}
        {[
          { pos: "left-0 top-0", w: 220, h: 280, rot: -10, idx: 1 },
          { pos: "left-64 top-[80px]", w: 200, h: 260, rot: 6, idx: 2 },
          { pos: "left-24 top-[240px]", w: 240, h: 300, rot: -4, idx: 3 },
        ].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, rotate: 0 }}
            className={`absolute ${img.pos} w-[${img.w}px] h-[${img.h}px] rounded-xl overflow-hidden shadow-xl rotate-[${img.rot}deg]`}
          >
            <img src={CLASSES_GALLERY[img.idx]} className="w-full h-full object-cover" />
          </motion.div>
        ))}

        {/* Derecha */}
        {[
          { pos: "right-0 top-20", w: 220, h: 280, rot: 9, idx: 6 },
          { pos: "right-72 top-[40px]", w: 210, h: 260, rot: -7, idx: 7 },
          { pos: "right-28 top-[260px]", w: 250, h: 310, rot: 4, idx: 8 },
        ].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, rotate: 0 }}
            className={`absolute ${img.pos} w-[${img.w}px] h-[${img.h}px] rounded-xl overflow-hidden shadow-xl rotate-[${img.rot}deg]`}
          >
            <img src={CLASSES_GALLERY[img.idx]} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ClassesGallery
