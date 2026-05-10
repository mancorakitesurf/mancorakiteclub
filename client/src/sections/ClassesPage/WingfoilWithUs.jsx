import { componentImages } from '../../config/images.js'
import { motion } from "framer-motion"

const { gallery1, gallery2, gallery3, gallery4 } = componentImages["sections/ClassesPage/WingfoilWithUs.jsx"]
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
    <section className="relative overflow-hidden bg-[#0E201F] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      
      {/* Header */}
      <div className="mx-auto mb-16 max-w-7xl sm:mb-20 lg:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-6xl"
        >
          WE BROUGHT THE WINGFOIL NORTH
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg"
        >
          Come fly with us. Learn this modern water sport with top instructors
          and premium gear in a safe, inspiring environment.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
        {BENEFITS.map((benefit, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="group relative overflow-hidden rounded-3xl"
          >
            {/* Image */}
            <img
              src={benefit.image}
              alt={benefit.title}
              loading="lazy"
              className="h-[280px] w-full transform object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[320px] lg:h-[360px]"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E201F]/90 via-[#0E201F]/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 p-4 sm:p-6 lg:p-8">
              <h3 className="mb-3 text-xl font-bold tracking-wide sm:text-2xl">
                {benefit.title}
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-white/85">
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
