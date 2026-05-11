import { motion } from "framer-motion"
import DestinationCard from "../BlogLayoutPage1/DestinationCard"
import { DESTINATIONS } from "../destinationsData" // Asegúrate de que la ruta apunte al archivo correcto
import sectionBg from "../../../assets/imagenes-wingfoil/posicionw5.jpg"
import { useI18n } from "../../../app/providers/i18nContext"

function TopDestinationsSection() {
  const { t } = useI18n()

  // Truco ninja: Traducimos todo el arreglo de destinos al vuelo
  const translatedDestinations = DESTINATIONS.map(place => ({
    ...place,
    name: t(place.nameKey, { defaultValue: place.name }),
    shortDescription: t(place.shortDescKey, { defaultValue: place.shortDescription }),
    description: t(place.descKey, { defaultValue: place.description }),
    level: t(place.levelKey, { defaultValue: place.level }),
    season: t(place.seasonKey, { defaultValue: place.season }),
  }))

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-28"
      style={{ backgroundImage: `url(${sectionBg})` }}
    >
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
            {t('blogTop20.sectionTitle')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white sm:text-base">
            {t('blogTop20.sectionDesc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {translatedDestinations.map((place, index) => (
            <DestinationCard key={index} data={place} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default TopDestinationsSection