import MotionReveal from "./MotionReveal.jsx"

function QuickFacts({ facts }) {
  return (
    <MotionReveal className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/70">
            Fast Planning Notes
          </p>
          <h2 className="mt-3 font-display text-3xl text-white">What matters before you book</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-300/80">
          Clear facts remove friction. These are the conditions, travel cues, and level notes that shape the trip before emotion takes over.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="rounded-3xl border border-white/10 bg-slate-950/40 p-5"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/60">{fact.label}</p>
            <p className="mt-3 text-base leading-7 text-white/90">{fact.value}</p>
          </div>
        ))}
      </div>
    </MotionReveal>
  )
}

export default QuickFacts
