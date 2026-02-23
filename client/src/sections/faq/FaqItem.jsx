import { motion } from "framer-motion"

function FaqItem({ question, answer, isOpen, onToggle, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      
      className={`group transition-all duration-500 rounded-2xl border backdrop-blur-sm cursor-pointer overflow-hidden ${
        isOpen 
          ? "bg-white/10 border-primary/30 shadow-2xl" 
          : "bg-white/5 border-white/5 hover:bg-white/10"
      }`}
      onClick={onToggle}
    >
      <div className="px-8 py-6">
        <div className="flex w-full items-center justify-between text-left">
          <h4 className={`text-lg font-medium transition-colors duration-300 ${
            isOpen ? "text-primary" : "text-white"
          }`}>
            {question}
          </h4>

          <span
            className={`text-2xl font-light transition-all duration-500 transform ${
              isOpen ? "rotate-45 text-white/50" : "rotate-0 text-primary"
            }`}
          >
            +
          </span>
        </div>

        {/* CONTENDEDOR RESPUESTA */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 border-t border-white/10">
            <p className="text-white/70 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default FaqItem