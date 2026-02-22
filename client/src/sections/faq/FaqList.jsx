import { FAQ_DATA } from "./faqContent"
import FaqSection from "./FaqSection"

function FaqList() {
  return (
    <main className="mx-auto max-w-4xl space-y-20 px-4 py-24">
      {FAQ_DATA.map((section, index) => (
        <FaqSection
          key={index}
          category={section.category}
          questions={section.questions}
        />
      ))}
    </main>
  )
}

export default FaqList