import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0
      setProgress(nextProgress)
    }

    updateProgress()
    window.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", updateProgress)

    return () => {
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-white/5">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-300 shadow-[0_0_18px_rgba(45,212,191,0.45)]"
        animate={{ width: `${progress * 100}%` }}
        transition={{ duration: 0.15, ease: "linear" }}
      />
    </div>
  )
}

export default ReadingProgressBar
