import Container from "../../../components/ui/Container"
import EquipmentSelector from "./EquipmentSelector"
import { KITESURF_DATA, WINGFOIL_DATA } from "./classesContent"

function EquipmentSection() {
  return (
    <section className="py-24 bg-[#1E3130] text-white">
      <Container className="space-y-24">

        {/* KITESURF */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 uppercase">
            Kitesurf
          </h3>
          <EquipmentSelector data={KITESURF_DATA} />
        </div>

        {/* WINGFOIL */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 uppercase text-right">
            Wingfoil
          </h3>
          <EquipmentSelector data={WINGFOIL_DATA} reverse />
        </div>

      </Container>
    </section>
  )
}

export default EquipmentSection