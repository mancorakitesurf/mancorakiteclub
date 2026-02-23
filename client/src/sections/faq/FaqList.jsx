import { FAQ_DATA } from "./faqContent"
import FaqSection from "./FaqSection"

function FaqList() {
  return (
    <div className="space-y-20">
      {FAQ_DATA.map((section, index) => (
        <FaqSection
          key={index}
          category={section.category}
          questions={section.questions}
        />
      ))}
    </div>
  )
}

export default FaqList