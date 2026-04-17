import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GALLERY_IMAGES } from "../galleyData"

function MancoraExperience() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
  const prev = () =>
    setIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)

  return (
    <section className="py-32 bg-[#0b1f1d] text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITULO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Life in Mancora
          </h2>
          <p className="mt-4 text-gray-400">
            More than a destination — a lifestyle.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative h-[520px] overflow-hidden rounded-3xl">

          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={GALLERY_IMAGES[index]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* BOTONES */}
          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40"
          >
            →
          </button>

          {/* DOTS */}
          <div className="absolute bottom-6 w-full flex justify-center gap-2">
            {GALLERY_IMAGES.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-cyan-400" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default MancoraExperience