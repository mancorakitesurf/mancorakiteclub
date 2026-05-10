import { componentImages } from '../../../config/images.js'
import { motion } from "framer-motion"
import DestinationCard from "../BlogLayoutPage1/DestinationCard"
import { DESTINATIONS } from "../destinationsData"

const { sectionBg } = componentImages["sections/blogPage1/BlogTop/TopDestinationsSection.jsx"]
function TopDestinationsSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-28"
      style={{
        backgroundImage: `url(${sectionBg})`,
      }}
    >
      {/* Overlay elegante */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center sm:mb-20"
        >
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            The 20 World’s Best Destinations for Kitesurfing Waves
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white sm:text-base">
            A curated selection of world-class wave spots ranked by wind reliability,
            wave quality and overall experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
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
