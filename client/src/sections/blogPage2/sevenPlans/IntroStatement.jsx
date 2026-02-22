import { motion } from "framer-motion"
import { INTRO_DATA } from './introData.js'

function IntroStatement() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.3em] uppercase text-slate-500 mb-6"
        >
          {INTRO_DATA.preTitle}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-black mb-8"
        >
          {INTRO_DATA.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg text-slate-700 leading-relaxed mb-8"
        >
          {INTRO_DATA.paragraph1}
        </motion.p>

        <p className="text-lg text-slate-700 leading-relaxed mb-8">
          {INTRO_DATA.paragraph2}
        </p>

        <p className="text-lg text-slate-700 leading-relaxed mb-12">
          {INTRO_DATA.paragraph3}
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl font-semibold text-primary"
        >
          {INTRO_DATA.highlight}
        </motion.p>

        <p className="mt-6 text-slate-500 italic">
          {INTRO_DATA.closingLine}
        </p>

      </div>
    </section>
  )
}

export default IntroStatement