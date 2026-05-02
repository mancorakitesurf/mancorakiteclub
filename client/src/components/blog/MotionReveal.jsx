import { motion } from "framer-motion"

const baseTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
}

function MotionReveal({ children, className = "", delay = 0, y = 32 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </motion.div>
  )
}

export default MotionReveal
