import { motion } from "framer-motion"
import chicamaImg from "../../../assets/imagenes-kitesurfing/posicionkt2.jpg"

function ChicamaStory() {
  return (
    <section className="bg-black text-white">

      {/* HERO VISUAL FULL WIDTH */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img
          src={chicamaImg}
          alt="Chicama longest wave"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              The longest wave on Earth
            </h1>
            <p className="mt-6 text-lg text-gray-200 max-w-2xl">
              Chicama is not just a wave. It’s a journey that keeps going long after takeoff.
            </p>
          </div>
        </div>
      </div>

      {/* STORY TEXT */}
      <div className="max-w-4xl mx-auto px-6 py-28">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl leading-relaxed text-gray-200"
        >
          In Chicama, waves don’t break — they stretch.
        </motion.p>

        <p className="mt-8 text-lg text-gray-400 leading-relaxed">
          A single ride can last minutes. You’re not chasing tricks here. You’re chasing flow.
          Long walls, endless sections, and a rhythm that forces you to slow down and feel the ocean.
        </p>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          This is where surfers come to understand what riding a wave truly means.
        </p>

      </div>
    </section>
  )
}

export default ChicamaStory