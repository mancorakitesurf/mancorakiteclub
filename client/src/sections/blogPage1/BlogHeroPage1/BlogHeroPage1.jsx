import { motion } from "framer-motion"
import heroImage from "../../../assets/imagenes-kitesurfing/posicionkt9.jpg"

function BlogHeroPage1() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <img
        src={heroImage}
        alt="Mancora Kitesurf"
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
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">
          Wave Riding Edition
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          The 20 World’s Best
          <br />
          Kitesurfing Wave Destinations
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl opacity-80">
          Ranked by wave quality, wind consistency and riding experience.
        </p>
      </motion.div>
    </section>
  )
}

export default BlogHeroPage1