import { useState } from "react"
import FaqItem from "./FaqItem"

function FaqSection({ category, questions }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="space-y-6">
      
      <h3 className="text-center font-display text-xl tracking-widest text-primary uppercase">
        {category}
      </h3>

      <div className="space-y-4">
        {questions.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

    </section>
  )
}

export default FaqSection