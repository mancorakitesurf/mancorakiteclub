import { useEffect, useRef, useState } from 'react'

const mockInstructors = [
  {
    id: 1,
    name: 'Camila Torres',
    specialty: 'Beginner SUP Coaching',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    experience: '5 years of coaching experience',
    level: 'Beginner to Intermediate',
    description:
      'Camila specializes in helping first-time riders build confidence, balance, and safety awareness from the very first session.',
  },
  {
    id: 2,
    name: 'Diego Ramirez',
    specialty: 'Wave Riding Technique',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    experience: '8 years of wave coaching',
    level: 'Intermediate to Advanced',
    description:
      'Diego focuses on wave reading, timing, board control, and progression for riders who want to improve their performance in real ocean conditions.',
  },
  {
    id: 3,
    name: 'Sofia Vega',
    specialty: 'Private Progression Sessions',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80',
    experience: '6 years of private instruction',
    level: 'All levels',
    description:
      'Sofia creates personalized lesson plans based on each rider’s goals, pace, and confidence level.',
  },
  {
    id: 4,
    name: 'Mateo Cruz',
    specialty: 'Advanced Balance and Touring',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    experience: '7 years of advanced coaching',
    level: 'Intermediate to Advanced',
    description:
      'Mateo helps riders refine balance, endurance, turning technique, and longer-distance touring skills.',
  },
]

function InstructorCard({ instructor, isVisible, index, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(instructor)}
      className={[
        'group rounded-3xl border border-[#F4F2EA]/10 bg-[#F4F2EA]/[0.06] p-6 text-center shadow-[0_18px_45px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm',
        'transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-[#38E0C8]/35 hover:bg-[#F4F2EA]/[0.09] hover:shadow-[0_24px_60px_-28px_rgba(56,224,200,0.35)]',
        'focus:outline-none focus:ring-4 focus:ring-[#38E0C8]/25',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
      ].join(' ')}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
    >
      <div className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full ring-4 ring-[#F4F2EA]/15 transition-transform duration-500 group-hover:scale-105 group-hover:ring-[#38E0C8]/35">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <h3 className="text-xl font-semibold text-[#F4F2EA]">
        {instructor.name}
      </h3>

      <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[#38E0C8]">
        {instructor.specialty}
      </p>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#F4F2EA]/45 transition group-hover:text-[#C19B6C]">
        View Profile
      </p>
    </button>
  )
}

function InstructorModal({ instructor, onClose }) {
  if (!instructor) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1113]/80 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#F4F2EA]/10 bg-[#0A1113] shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F2EA]/90 text-xl font-bold text-[#0A1113] shadow-md transition hover:bg-[#38E0C8] hover:text-[#0A1113]"
        >
          ×
        </button>

        <div className="relative h-64">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1113]/82 via-[#0A1113]/22 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-[#F4F2EA]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#38E0C8]">
              Instructor Profile
            </p>
            <h3 className="mt-2 text-3xl font-bold">
              {instructor.name}
            </h3>
            <p className="mt-1 text-sm text-[#F4F2EA]/80">
              {instructor.specialty}
            </p>
          </div>
        </div>

        <div className="p-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#F4F2EA]/10 bg-[#F4F2EA]/[0.06] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#38E0C8]">
                Experience
              </p>
              <p className="mt-2 text-sm font-medium text-[#F4F2EA]">
                {instructor.experience}
              </p>
            </div>

            <div className="rounded-2xl border border-[#F4F2EA]/10 bg-[#F4F2EA]/[0.06] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#38E0C8]">
                Level
              </p>
              <p className="mt-2 text-sm font-medium text-[#F4F2EA]">
                {instructor.level}
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-[#F4F2EA]/70">
            {instructor.description}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="mt-7 w-full rounded-full bg-[#38E0C8] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0A1113] transition hover:bg-[#C19B6C]"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  )
}

function InstructorsSection() {
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
        className="bg-[#0A1113] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full border border-[#38E0C8]/25 bg-[#38E0C8]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#38E0C8]">
              Meet the Team
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#F4F2EA] sm:text-4xl">
              Learn with experienced instructors
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#F4F2EA]/70">
              Click any instructor to see basic information about their experience,
              teaching style, and recommended level.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mockInstructors.map((instructor, index) => (
              <InstructorCard
                key={instructor.id}
                instructor={instructor}
                isVisible={isVisible}
                index={index}
                onClick={setSelectedInstructor}
              />
            ))}
          </div>
        </div>
      </section>

      <InstructorModal
        instructor={selectedInstructor}
        onClose={() => setSelectedInstructor(null)}
      />
    </>
  )
}

export default InstructorsSection
