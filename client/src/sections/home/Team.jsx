import { motion } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'
import { componentImages } from '../../config/images.js'

const { founderImg, coach1, coach2, coach3 } = componentImages["sections/home/Team.jsx"]

const TEAM_MEMBERS = [
  {
    id: 'coach1',
    roleKey: 'team.instructor.certified',
    specialtyKey: 'team.specialty.safety',
    languages: 'EN / ES',
    img: founderImg, // using DSC02939 as coach1 in this generic grid
    fallbackRole: 'IKO Certified Instructor',
    fallbackSpecialty: 'Focus on safety and progression',
  },
  {
    id: 'coach2',
    roleKey: 'team.instructor.watersports',
    specialtyKey: 'team.specialty.wing',
    languages: 'EN / ES / FR',
    img: coach1, // IMG_4993
    fallbackRole: 'Water Sports Coach',
    fallbackSpecialty: 'Wingfoil & Kitesurf',
  },
  {
    id: 'coach3',
    roleKey: 'team.instructor.certified',
    specialtyKey: 'team.specialty.waves',
    languages: 'EN / ES',
    img: coach2, // DSC06099
    fallbackRole: 'IKO Certified Instructor',
    fallbackSpecialty: 'Specialized in wave riding',
  },
  {
    id: 'coach4',
    roleKey: 'team.instructor.coach',
    specialtyKey: 'team.specialty.basics',
    languages: 'EN / ES / PT',
    img: coach3, // DSC09008
    fallbackRole: 'Kite & Surf Coach',
    fallbackSpecialty: 'Confidence in the water',
  },
]

const easeOut = [0.16, 1, 0.3, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
}

export default function Team() {
  const { t } = useI18n()

  const safeT = (key, fallback) => {
    const translation = t(key)
    return translation === key ? fallback : translation
  }

  return (
    <section id="our-team" className="bg-[#0e1b17] py-24 sm:py-32 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#b7e28a]/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#b7e28a]/5 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[#b7e28a] text-[11px] font-black uppercase tracking-[0.3em] mb-4">
              {safeT('team.instructors.label', 'The Crew')}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white">
              {safeT('team.instructors.headline', 'Meet the Instructors')}
            </h3>
            <p className="mt-4 text-white/60 text-lg">
              {safeT('team.instructors.subtitle', 'A specialized team dedicated to your safety, progression, and ocean experience.')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/[0.07] transition-colors duration-300 flex flex-col"
              >
                <div className="aspect-[4/5] w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={member.img}
                    alt={member.fallbackRole}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${member.id === 'coach2' ? 'rotate-90' : ''
                      }`}
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-center text-center">
                  <h4 className="text-[#b7e28a] text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                    {safeT(member.roleKey, member.fallbackRole)}
                  </h4>
                  <p className="text-white text-lg font-bold tracking-tight">
                    {safeT(member.specialtyKey, member.fallbackSpecialty)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
