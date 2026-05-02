import { motion } from "framer-motion"
import { INTRO_DATA8 } from "./introData8"
import heroImg from "../../assets/imagenes-kitesurfing/posicionkt1.jpg"

function HeroTechniquesKite() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#031015] md:min-h-screen">
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroImg}
          alt="Hero"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-transparent to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
      >
        <span className="inline-block py-1 px-4 rounded-full bg-[#00696b] text-[#d9ffff] text-[10px] tracking-[0.2em] uppercase mb-6 font-bold shadow-[0_0_15px_rgba(90,248,251,0.2)]">
          {INTRO_DATA8.category}
        </span>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-[#e6f6fd] sm:text-5xl md:text-6xl lg:text-7xl">
          {INTRO_DATA8.hero.title}
          <br />
          {INTRO_DATA8.hero.highlight}
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#9eaeb4] sm:text-lg md:text-xl">
          {INTRO_DATA8.hero.description}
        </p>
      </motion.div>
    </section>
  )
}

export default HeroTechniquesKite
