import { useState } from "react"
import FaqSection from "./FaqSection"
import { FAQ_KEYS } from "./faqContent"
import { useI18n } from "../../app/providers/i18nContext"

  /**
  * Controla el estado de apertura de todas las tarjetas 
  */
  export default function FaqList() {
  const { t } = useI18n()
  const [activeGlobalId, setActiveGlobalId] = useState(null)

  const handleToggleGlobal = (id) => {
    setActiveGlobalId((prevId) => (prevId === id ? null : id))
  }

  return (

    <div className="space-y-32 py-20"> 
      {FAQ_KEYS.map((section, sectionIndex) => (
        <FaqSection
          key={sectionIndex}
          category={t(section.categoryKey)}
          questions={section.questions.map(q => ({
            question: t(q.qKey),
            answer: t(q.aKey)
          }))}
          activeGlobalId={activeGlobalId}
          onToggleGlobal={handleToggleGlobal}
          sectionIndex={sectionIndex}
        />
      ))}
    </div>
  )
}