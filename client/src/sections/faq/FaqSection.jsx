import FaqItem from "./FaqItem"
import { motion } from "framer-motion"

function FaqSection({ category, questions, activeGlobalId, onToggleGlobal, sectionIndex }) {
  return (
    <section className="space-y-8 max-w-4xl mx-auto pt-10">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-display text-xl tracking-[0.5em] text-primary uppercase mb-16"
      >
        {category}
      </motion.h3>

      <div className="space-y-6">
        {questions.map((item, qIndex) => {
          const uniqueId = `${sectionIndex}-${qIndex}`
          
          return (
            <FaqItem
              key={qIndex}
              index={qIndex} 
              question={item.question}
              answer={item.answer}
              isOpen={activeGlobalId === uniqueId}
              onToggle={() => onToggleGlobal(uniqueId)}
            />
          )
        })}
      </div>
    </section>
  )
}

export default FaqSection