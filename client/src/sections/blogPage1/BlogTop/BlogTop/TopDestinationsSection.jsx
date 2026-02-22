import { motion } from "framer-motion"
import DestinationCard from "../../../../sections/blogPage1/BlogLayoutPage1/DestinationCard"
import { DESTINATIONS } from "../../../../sections/blogPage1/destinationsData"
import sectionBg from "../../../../assets/imagenes-kitsurfing-lessons/posicionk4.jpg"

function TopDestinationsSection() {
  return (
    <section
      className="relative py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${sectionBg})`,
      }}
    >
      {/* Overlay elegante */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white">
            The 20 World’s Best Destinations for Kitesurfing Waves
          </h2>

          <p className="mt-6 text-white max-w-2xl mx-auto">
            A curated selection of world-class wave spots ranked by wind reliability,
            wave quality and overall experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {DESTINATIONS.map((place, index) => (
            <DestinationCard
              key={index}
              data={place}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default TopDestinationsSection