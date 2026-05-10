import { Link } from "react-router-dom"
import MotionReveal from "./MotionReveal.jsx"
import { useI18n } from '../../app/providers/i18nContext'

function CTASection({ title, body }) {
  const { t } = useI18n()

  return (
    <MotionReveal className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_30%),linear-gradient(135deg,rgba(2,6,23,1),rgba(8,47,73,0.95),rgba(2,6,23,1))] p-8 shadow-[0_30px_90px_rgba(8,145,178,0.2)] sm:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/70">
            {t('blogUI.finalMove')}
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-200/[0.84]">{body}</p>
        </div>

        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-cyan-200"
        >
          {t('blogUI.goToClub')}
        </Link>
      </div>
    </MotionReveal>
  )
}

export default CTASection
