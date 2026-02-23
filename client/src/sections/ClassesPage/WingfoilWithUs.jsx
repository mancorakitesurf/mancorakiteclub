import { motion } from "framer-motion"
import gallery1 from "../../assets/imagenes-wingfoil/posicionw1.jpg"
import gallery2 from "../../assets/imagenes-wingfoil/posicionw2.jpg"
import gallery3 from "../../assets/imagenes-wingfoil/posicionw4.jpg"
import gallery4 from "../../assets/imagenes-wingfoil/posicionw5.jpg"

const BENEFITS = [
  {
    title: "SIMPLE AND AMAZING",
    text: "Intuitive and accessible. No elite level required to start flying.",
    image: gallery1
  },
  {
    title: "FAST PROGRESSION",
    text: "In just a few sessions you’ll experience your first controlled flights.",
    image: gallery2
  },
  {
    title: "UNPARALLELED EXPERIENCE",
    text: "Flying over water blends freedom, calm, and adrenaline.",
    image: gallery3
  },
  {
    title: "EFFICIENCY",
    text: "Premium equipment and expert coaching maximize every session.",
    image: gallery4
  }
]

function WingfoilWithUs() {
  return (
    <section className="relative bg-[#0E201F] py-32 px-6 text-white overflow-hidden">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          WE BROUGHT THE WINGFOIL NORTH
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-white/80"
        >
          Come fly with us. Learn this modern water sport with top instructors
          and premium gear in a safe, inspiring environment.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
        {BENEFITS.map((benefit, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="group relative rounded-3xl overflow-hidden"
          >
            {/* Image */}
            <img
              src={benefit.image}
              alt={benefit.title}
              className="w-full h-[360px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E201F]/90 via-[#0E201F]/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 p-8">
              <h3 className="text-2xl font-bold tracking-wide mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/85 max-w-sm">
                {benefit.text}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default WingfoilWithUs