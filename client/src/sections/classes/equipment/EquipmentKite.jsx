import Container from "../../../components/ui/Container"
import EquipmentSelector from "./EquipmentSelector"
import { KITESURF_DATA } from "./classesContent"

function EquipmentKite() {
  return (
    <section className="py-24 bg-[#1E3130] text-white">
      <Container className="space-y-24">

        {/* KITESURF */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 uppercase">
            Kitesurf Equipment
          </h3>
          <EquipmentSelector data={KITESURF_DATA} />
        </div>

      </Container>
    </section>
  )
}

export default EquipmentKite