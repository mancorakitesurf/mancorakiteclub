import SEO from "../components/SEO"
import Container from "../components/ui/Container"
import Button from "../components/ui/Button"
import EquipmentSection from "../sections/classes/equipment/EquipmentSection"
import { WHATSAPP_LINK } from "../sections/home/homeContent"

function ClassesPage() {
  return (
    <>
      <SEO
        title="Classes | Mancora Kite Club"
        description="Private and small-group kite & wingfoil sessions."
        canonicalPath="/classes"
        hreflang={{ en: "/classes", es: "/esp", default: "/" }}
      />

      {/* Hero simple */}
      <section className="py-24 bg-[#1E3130] text-white text-center">
        <Container>
          <h1 className="text-4xl font-bold mb-6">
            Private & Small Group Classes
          </h1>

          <p className="max-w-3xl mx-auto text-lg opacity-80 mb-10">
            High-performance equipment and certified instructors.
          </p>

          <Button
            as="a"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book via WhatsApp
          </Button>
        </Container>
      </section>

      <EquipmentSection />
    </>
  )
}

export default ClassesPage