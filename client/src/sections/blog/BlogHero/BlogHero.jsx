import { motion } from "framer-motion"
import { BLOGHERO_IMAGE } from "../BlogLayout/blogContent.js"

function BlogHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden md:min-h-screen">
      <div className="absolute inset-0">
        <motion.img
          src={BLOGHERO_IMAGE}
          alt="Kite surfer jumping over waves in Mancora"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="h-full w-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8"
      >
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-[2px] w-10 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
            The Journal
          </span>
          <span className="h-[2px] w-10 bg-primary" />
        </div>

        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Kitesurfing Peru <br />
          <span className="text-primary">
            Wave Riding & Ocean Stories
          </span>
        </h1>

        <div className="mx-auto mt-8 h-[3px] w-24 rounded-full bg-primary/80" />

        <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-relaxed text-white/80 sm:text-lg md:text-xl">
          We explore the wind, the waves, and the ocean culture of northern Peru.
          Real stories, technique, and lifestyle from Mancora.
        </p>
      </motion.div>
    </section>
  )
}

export default BlogHero
