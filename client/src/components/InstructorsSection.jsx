import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../app/providers/i18nContext'

const instructorKeys = [
  { id: 1, name: 'Camila Torres', key: 'instructor1', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Diego Ramirez', key: 'instructor2', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Sofia Vega', key: 'instructor3', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Mateo Cruz', key: 'instructor4', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80' },
]

function InstructorCard({ instructor, isVisible, index, onClick, t }) {
  return (
    <button
      type="button"
      onClick={() => onClick(instructor)}
      className={[
        'group rounded-3xl border border-white/60 bg-white/85 p-6 text-center shadow-[0_18px_45px_-28px_rgba(15,23,42,0.35)] backdrop-blur-sm',
        'transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_60px_-28px_rgba(14,116,144,0.35)]',
        'focus:outline-none focus:ring-4 focus:ring-sky-200',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
      ].join(' ')}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
    >
      <div className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full ring-4 ring-sky-100 transition-transform duration-500 group-hover:scale-105 group-hover:ring-sky-200">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <h3 className="text-xl font-semibold text-slate-900">
        {instructor.name}
      </h3>

      <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-sky-600">
        {t(`instructors.${instructor.key}.specialty`)}
      </p>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 transition group-hover:text-sky-600">
        {t('instructors.viewProfile')}
      </p>
    </button>
  )
}

function InstructorModal({ instructor, onClose, t }) {
  if (!instructor) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-slate-700 shadow-md transition hover:bg-slate-900 hover:text-white"
        >
          ×
        </button>

        <div className="relative h-64">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
              {t('instructors.instructorProfile')}
            </p>
            <h3 className="mt-2 text-3xl font-bold">
              {instructor.name}
            </h3>
            <p className="mt-1 text-sm text-white/80">
              {t(`instructors.${instructor.key}.specialty`)}
            </p>
          </div>
        </div>

        <div className="p-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
                {t('instructors.experience')}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-800">
                {t(`instructors.${instructor.key}.experience`)}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
                {t('instructors.level')}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-800">
                {t(`instructors.${instructor.key}.level`)}
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-600">
            {t(`instructors.${instructor.key}.description`)}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="mt-7 w-full rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-sky-700"
          >
            {t('instructors.closeProfile')}
          </button>
        </div>
      </div>
    </div>
  )
}

function InstructorsSection() {
  const { t } = useI18n()
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedInstructor, setSelectedInstructor] = useState(null)

  useEffect(() => {
    const currentSection = sectionRef.current

    if (!currentSection) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(currentSection)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section
        id="instructors"
        ref={sectionRef}
        className="bg-gradient-to-b from-slate-50 via-white to-sky-50/70 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
              {t('instructors.badge')}
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t('instructors.title')}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {t('instructors.description')}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {instructorKeys.map((instructor, index) => (
              <InstructorCard
                key={instructor.id}
                instructor={instructor}
                isVisible={isVisible}
                index={index}
                onClick={setSelectedInstructor}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>

      <InstructorModal
        instructor={selectedInstructor}
        onClose={() => setSelectedInstructor(null)}
        t={t}
      />
    </>
  )
}

export default InstructorsSection