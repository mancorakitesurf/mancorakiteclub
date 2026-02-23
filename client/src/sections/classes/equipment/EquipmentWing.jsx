import Container from "../../../components/ui/Container"
import EquipmentSelector from "./EquipmentSelector"
import { WINGFOIL_DATA } from "./classesContent"

function EquipmentWing() {
  return (
    <section className="py-24 bg-[#1E3130] text-white">
      <Container className="space-y-24">

        {/* WINGFOIL */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 uppercase text-right">
            Wingfoil Equipment
          </h3>
          <EquipmentSelector data={WINGFOIL_DATA} reverse />
        </div>

      </Container>
    </section>
  )
}

export default EquipmentWing