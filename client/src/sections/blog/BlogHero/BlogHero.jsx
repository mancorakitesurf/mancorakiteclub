import { motion } from "framer-motion"
import { BLOGHERO_IMAGE } from "../BlogLayout/blogContent.js"

function BlogHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden md:min-h-screen">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={BLOGHERO_IMAGE}
          alt="Kite surfer jumping over waves in Mancora"
          className="w-full h-full object-cover"
        />

        {/* Premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8"
      >

        {/* Mini label */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-[2px] w-10 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
            The Journal
          </span>
          <span className="h-[2px] w-10 bg-primary" />
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Kitesurfing Peru <br />
          <span className="text-primary">
            Wave Riding & Ocean Stories
          </span>
        </h1>

        {/* Divider */}
        <div className="mx-auto mt-8 h-[3px] w-24 rounded-full bg-primary/80" />

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-relaxed text-white/80 sm:text-lg md:text-xl">
          We explore the wind, the waves, and the ocean culture of northern Peru.
          Real stories, technique, and lifestyle from Máncora.
        </p>

      </motion.div>
    </section>
  )
}

export default BlogHero
