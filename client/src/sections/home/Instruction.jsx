import {
  FaArrowRight,
  FaCertificate,
  FaShieldAlt,
  FaUserFriends,
  FaVideo,
} from 'react-icons/fa'
import { INSTRUCTION_IMAGE } from './homeContent.js'

const BENEFITS = [
  { icon: FaCertificate, text: 'Certified IKO Instructors' },
  { icon: FaUserFriends, text: 'Small Group Sizes (Max 2:1)' },
  { icon: FaVideo, text: 'Video Analysis & Radio Helmets' },
  { icon: FaShieldAlt, text: 'Premium Safety Equipment' },
]

function Instruction() {
  return (
    <section
      id="classes"
      className="border-y border-gray-200 bg-surface-light py-24 dark:border-white/5 dark:bg-surface-dark/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="relative lg:w-1/2">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
            <img
              src={INSTRUCTION_IMAGE}
              alt="Instructor teaching student on beach"
              className="relative z-10 h-[500px] w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="mb-6 font-display text-4xl font-bold dark:text-white md:text-5xl">
              World-Class Instruction
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Learn from the best. Our certified IKO instructors ensure safety while pushing your
              limits. Whether it&apos;s your first time on a board or you&apos;re landing kiteloops,
              we have the expertise to guide you.
            </p>
            <ul className="mb-10 space-y-4">
              {BENEFITS.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <li key={benefit.text} className="group flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white dark:bg-primary/20">
                      <Icon />
                    </span>
                    <span className="font-medium text-gray-700 dark:text-gray-200">
                      {benefit.text}
                    </span>
                  </li>
                )
              })}
            </ul>
            <a
              href="#team"
              className="inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:text-teal-400"
            >
              Meet Our Team <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instruction
