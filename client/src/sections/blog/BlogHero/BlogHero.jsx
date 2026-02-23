import { motion } from "framer-motion"
import { BLOGHERO_IMAGE } from "../BlogLayout/blogContent.js"

function BlogHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

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
        className="relative z-10 mx-auto max-w-6xl px-6 text-center text-white"
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
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Kitesurfing Peru <br />
          <span className="text-primary">
            Wave Riding & Ocean Stories
          </span>
        </h1>

        {/* Divider */}
        <div className="mx-auto mt-8 h-[3px] w-24 rounded-full bg-primary/80" />

        {/* Subtitle */}
        <p className="mx-auto mt-10 max-w-3xl text-lg md:text-xl font-light leading-relaxed text-white/80">
          We explore the wind, the waves, and the ocean culture of northern Peru.
          Real stories, technique, and lifestyle from Máncora.
        </p>

      </motion.div>
    </section>
  )
}

export default BlogHero