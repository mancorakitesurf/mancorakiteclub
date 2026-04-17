import { motion } from "framer-motion"

function WaveIntro() {
  return (
    <section className="relative py-32 bg-white">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-black leading-tight"
        >
          Most kitesurfers don’t struggle because of skill.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-lg text-gray-600"
        >
          They struggle because they’re in the wrong conditions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-gray-500 max-w-2xl mx-auto"
        >
          Gusty wind, overcrowded spots, cold water, inconsistent waves…
          all of it slows progression without you even realizing it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <p className="text-xl font-semibold text-black">
            Progression is not random.
          </p>

          <p className="mt-2 text-cyan-500 font-semibold">
            It’s built by the environment.
          </p>
        </motion.div>

      </div>

    </section>
  )
}

export default WaveIntro;