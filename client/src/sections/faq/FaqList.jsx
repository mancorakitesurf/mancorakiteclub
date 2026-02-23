import { useState } from "react"
import FaqSection from "./FaqSection"
import { FAQ_DATA } from "./faqContent"

  /**
  * Controla el estado de apertura de todas las tarjetas 
  */
  export default function FaqList() {
  const [activeGlobalId, setActiveGlobalId] = useState(null)

  const handleToggleGlobal = (id) => {
    setActiveGlobalId((prevId) => (prevId === id ? null : id))
  }

  return (

    <div className="space-y-32 py-20"> 
      {FAQ_DATA.map((section, sectionIndex) => (
        <FaqSection
          key={sectionIndex}
          category={section.category}
          questions={section.questions}
          activeGlobalId={activeGlobalId}
          onToggleGlobal={handleToggleGlobal}
          sectionIndex={sectionIndex}
        />
      ))}
    </div>
  )
}