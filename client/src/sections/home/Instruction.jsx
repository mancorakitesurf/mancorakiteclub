import {
  FaArrowRight,
  FaCertificate,
  FaShieldAlt,
  FaUserFriends,
  FaVideo,
} from 'react-icons/fa'
import { INSTRUCTION_IMAGE } from './homeContent.js'
import { useI18n } from '../../app/providers/i18nContext'

function Instruction() {
  const { t } = useI18n()

  const BENEFITS = [
    { icon: FaCertificate, key: 'sections.home.instructionBenefit1' },
    { icon: FaUserFriends, key: 'sections.home.instructionBenefit2' },
    { icon: FaVideo, key: 'sections.home.instructionBenefit3' },
    { icon: FaShieldAlt, key: 'sections.home.instructionBenefit4' },
  ]

  return (
    <section
      id="classes"
      className="border-y border-gray-200 bg-surface-light py-16 sm:py-20 lg:py-28 dark:border-white/5 dark:bg-surface-dark/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 sm:gap-12 lg:flex-row lg:gap-16">
          <div className="relative w-full lg:w-1/2">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
            <img
              src={INSTRUCTION_IMAGE}
              alt="Instructor teaching student on beach"
              loading="lazy"
              className="relative z-10 h-[320px] w-full rounded-3xl object-cover shadow-xl sm:h-[420px] lg:h-[500px]"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="mb-6 font-display text-2xl font-bold dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {t('sections.home.instructionTitle')}
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
              {t('sections.home.instructionDesc')}
            </p>
            <ul className="mb-10 space-y-4">
              {BENEFITS.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <li key={benefit.key} className="group flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white dark:bg-primary/20">
                      <Icon />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-gray-700 dark:text-gray-200 sm:text-base">
                      {t(benefit.key)}
                    </span>
                  </li>
                )
              })}
            </ul>
            <a
              href="#team"
              className="inline-flex min-h-12 items-center gap-2 border-b-2 border-primary pb-1 text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:text-teal-400"
            >
              {t('sections.home.meetOurTeam')} <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instruction
