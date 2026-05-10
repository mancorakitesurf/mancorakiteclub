import { componentImages } from '../../../config/images.js'
import { motion } from "framer-motion"

const { ctaBg } = componentImages["sections/blogPage2/BlogLayoutPage2/FinalCallToAction.jsx"]
function FinalCallToAction() {
  return (
    <section className="relative py-56 overflow-hidden text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ctaBg}
          alt=""
          className="w-full h-full object-cover scale-110 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.4em] text-xs text-white/70 mb-10"
        >
          Seven Ways. One Coast.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-12"
        >
          Choose the wind
          <br />
          that matches who you are
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/80 leading-relaxed mb-16 max-w-2xl mx-auto"
        >
          These are not packages.  
          They are journeys shaped by conditions, rhythm and intent.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className="
            inline-block px-12 py-4
            border border-white/80
            text-sm uppercase tracking-widest
            hover:bg-white hover:text-black
            transition
          "
        >
          Start Your Journey
        </motion.button>

      </div>
    </section>
  )
}

export default FinalCallToAction