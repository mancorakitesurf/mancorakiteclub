import { CLASSES_GALLERY } from "./classesData"
import { motion } from "framer-motion"

function ClassesGallery() {
  return (
    <section className="relative overflow-hidden bg-[#0f1416] py-16 text-white sm:py-20 lg:py-28">

      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-6xl"
        >
          MANCORA KITE CLUB:
          <br />
          <span className="text-cyan-400">RAW ADVENTURE MANIFESTO.</span>
        </motion.h2>

        <p className="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
          Real Stories, Real Adrenaline, Your Tribe Awaits.
        </p>

        <button className="mt-8 min-h-12 w-full rounded-full border border-cyan-400 px-6 py-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-black sm:w-auto sm:px-8">
          JOIN THE TRIBE
        </button>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-4 px-4 sm:mt-20 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:mt-24 lg:h-[650px] lg:grid-cols-12 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl shadow-2xl lg:absolute lg:left-1/2 lg:top-1/2 lg:z-20 lg:h-[420px] lg:w-[320px] lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <img
            src={CLASSES_GALLERY[0]}
            loading="lazy"
            className="h-[320px] w-full object-cover sm:h-[360px] lg:h-full"
            alt=""
          />
        </motion.div>

        <div className="overflow-hidden rounded-3xl shadow-xl lg:absolute lg:left-10 lg:top-24 lg:h-[300px] lg:w-[220px] lg:rotate-[-6deg]">
          <img src={CLASSES_GALLERY[1]} loading="lazy" className="h-[260px] w-full object-cover sm:h-[300px] lg:h-full" alt="" />
        </div>

        <div className="overflow-hidden rounded-3xl shadow-lg lg:absolute lg:bottom-16 lg:left-24 lg:h-[260px] lg:w-[200px] lg:rotate-[4deg]">
          <img src={CLASSES_GALLERY[2]} loading="lazy" className="h-[240px] w-full object-cover sm:h-[260px] lg:h-full" alt="" />
        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl lg:absolute lg:right-16 lg:top-32 lg:h-[310px] lg:w-[230px] lg:rotate-[5deg]">
          <img src={CLASSES_GALLERY[3]} loading="lazy" className="h-[260px] w-full object-cover sm:h-[310px] lg:h-full" alt="" />
        </div>

        <div className="overflow-hidden rounded-3xl shadow-lg lg:absolute lg:bottom-10 lg:right-8 lg:h-[240px] lg:w-[180px] lg:rotate-[-3deg]">
          <img src={CLASSES_GALLERY[1]} loading="lazy" className="h-[220px] w-full object-cover sm:h-[240px] lg:h-full" alt="" />
        </div>
      </div>
    </section>
  )
}

export default ClassesGallery
