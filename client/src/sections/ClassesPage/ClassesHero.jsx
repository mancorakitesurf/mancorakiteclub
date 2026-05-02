import { motion } from "framer-motion"
import { CLASSES_HERO } from "./classesData"

function ClassesHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden md:min-h-screen">

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
        className="relative z-10 max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8"
      >
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {CLASSES_HERO.title}
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed opacity-80 sm:text-lg md:text-xl">
          {CLASSES_HERO.subtitle}
        </p>
      </motion.div>

    </section>
  )
}

export default ClassesHero
