import { motion } from "framer-motion"
import Container from "../../../components/ui/Container"
import EquipmentSelector from "./EquipmentSelector"
import { WINGFOIL_DATA } from "./classesContent"
import { useI18n } from "../../../app/providers/i18nContext"

function EquipmentWing() {
  const { t } = useI18n()

  // Truco ninja: Traducimos los datos al vuelo
  const translatedData = WINGFOIL_DATA.map(item => ({
    ...item,
    title: t(item.title),
    description: t(item.description),
    label: t(item.label),
    subtitle: t(item.subtitle)
  }))

  return (
    <section className="bg-[#1E3130] py-16 text-white sm:py-20 lg:py-28">
      <Container className="space-y-16 sm:space-y-20 lg:space-y-24">

        {/* WINGFOIL */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-2xl font-bold uppercase text-white sm:text-3xl md:text-4xl md:text-right"
          >
            {t('classesPage.equipment.wingfoilTitle')}
          </motion.h3>
          
          <EquipmentSelector data={translatedData} reverse />
        </div>

      </Container>
    </section>
  )
}

export default EquipmentWing