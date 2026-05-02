import MotionReveal from "./MotionReveal.jsx"
import ComparisonTable from "./ComparisonTable.jsx"

function ArticleSection({ section, index }) {
  return (
    <MotionReveal
      className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_52px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-8"
      delay={Math.min(index * 0.05, 0.2)}
    >
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/[0.65]">
          Section {index + 1}
        </p>
        <h2 className="font-display text-3xl leading-tight text-white">{section.title}</h2>
      </div>

      <div className="mt-6 space-y-5 text-base leading-8 text-slate-200/[0.88]">
        {section.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {section.bullets?.length ? (
        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6">
          {section.bulletsTitle ? (
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/70">
              {section.bulletsTitle}
            </h3>
          ) : null}
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-200/[0.85]">
            {section.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-300" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {section.comparison ? <ComparisonTable columns={section.comparison.columns} rows={section.comparison.rows} /> : null}
    </MotionReveal>
  )
}

export default ArticleSection
