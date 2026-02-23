import { motion } from "framer-motion"
import { CLASSES_HERO } from "./classesData"

function ClassesHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <img
        src={CLASSES_HERO.image}
        alt={CLASSES_HERO.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center text-white max-w-4xl px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          {CLASSES_HERO.title}
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl opacity-80">
          {CLASSES_HERO.subtitle}
        </p>
      </motion.div>

    </section>
  )
}

export default ClassesHero