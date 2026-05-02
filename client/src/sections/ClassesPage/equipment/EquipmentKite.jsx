import { motion } from "framer-motion"
import Container from "../../../components/ui/Container"
import EquipmentSelector from "./EquipmentSelector"
import { KITESURF_DATA } from "./classesContent"

function EquipmentKite() {
  return (
    <section className="bg-[#1E3130] py-16 text-white sm:py-20 lg:py-28">
      <Container className="space-y-16 sm:space-y-20 lg:space-y-24">

        {/* KITESURF */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-2xl font-bold uppercase text-white sm:text-3xl md:text-4xl"
          >
            Kitesurf Equipment
          </motion.h3>
          <EquipmentSelector data={KITESURF_DATA} />
        </div>

      </Container>
    </section>
  )
}

export default EquipmentKite
