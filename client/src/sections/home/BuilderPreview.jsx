import { Link } from 'react-router-dom'
import { useI18n } from '../../app/providers/i18nContext'

function BuilderPreview() {
  const { t } = useI18n()

  const STEPS = [
    {
      n: 1,
      titleKey: 'sections.home.builderStep1Title',
      descKey: 'sections.home.builderStep1Desc',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
          <path d="M12 2L4 12l8 10 8-10L12 2z" />
          <path d="M12 22v-10" />
          <path d="M4 12h16" />
        </svg>
      ),
    },
    {
      n: 2,
      titleKey: 'sections.home.builderStep2Title',
      descKey: 'sections.home.builderStep2Desc',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ),
    },
    {
      n: 3,
      titleKey: 'sections.home.builderStep3Title',
      descKey: 'sections.home.builderStep3Desc',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      n: 4,
      titleKey: 'sections.home.builderStep4Title',
      descKey: 'sections.home.builderStep4Desc',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      ),
    },
    {
      n: 5,
      titleKey: 'sections.home.builderStep5Title',
      descKey: 'sections.home.builderStep5Desc',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      ),
    },
  ]

  return (
    <section id="packages" className="relative overflow-hidden bg-surface-dark py-16 text-white sm:py-20 lg:py-28">
      <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{t('sections.home.builderBadge')}</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {t('sections.home.builderTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300 sm:text-lg">
            {t('sections.home.builderDesc')}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — visible on lg */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-white/10 lg:block" style={{ marginLeft: '10%', marginRight: '10%' }} />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step) => (
              <div key={step.n} className="relative flex flex-col items-center text-center">
                {/* Number + icon circle */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-background-dark shadow-lg">
                  <div className="text-primary">{step.icon}</div>
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">
                    {step.n}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold text-white">{t(step.titleKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/build"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-primary/40"
          >
            {t('sections.home.builderCTA')}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default BuilderPreview
