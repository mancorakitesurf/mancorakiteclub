import { Link } from "react-router-dom"
import MotionReveal from "./MotionReveal.jsx"

function Breadcrumbs({ title }) {
  return (
    <MotionReveal>
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/60">
        <Link className="transition hover:text-cyan-300" to="/home">
          Home
        </Link>
        <span className="text-white/30">/</span>
        <Link className="transition hover:text-cyan-300" to="/blog">
          Journal
        </Link>
        <span className="text-white/30">/</span>
        <span className="max-w-[18rem] truncate text-white/80">{title}</span>
      </nav>
    </MotionReveal>
  )
}

export default Breadcrumbs
