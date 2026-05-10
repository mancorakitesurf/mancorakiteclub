import { homeImages } from '../../config/images.js'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaStar, FaUsers, FaWater } from 'react-icons/fa'

const founderImg = homeImages.storyFounder
const VALUES = [
  {
    icon: FaWater,
    title: 'Spot knowledge',
    text: '15+ years reading wind, swell and current in northern Peru.',
  },
  {
    icon: FaStar,
    title: 'Real progression',
    text: 'Coaching that helps riders move with confidence in the ocean.',
  },
  {
    icon: FaShieldAlt,
    title: 'Safe sessions',
    text: 'Radio support, premium gear and close guidance on the water.',
  },
  {
    icon: FaUsers,
    title: 'Ocean culture',
    text: 'Sport, community and a slower connection with Mancora.',
  },
]

const easeOut = [0.16, 1, 0.3, 1]

const viewport = { once: true, amount: 0.35 }

const imageFrame = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.75, ease: easeOut },
  },
}

const imageReveal = {
  hidden: { scale: 1.05 },
  visible: {
    scale: 1,
    transition: { duration: 1, ease: easeOut },
  },
}

const textContainer = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: easeOut,
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const textItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

function OurStory() {
  return (
    <section
      id="our-story"
      className="border-y border-gray-200 bg-surface-light py-14 sm:py-20 lg:py-28 dark:border-white/5 dark:bg-surface-dark/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={imageFrame}
            className="relative aspect-[4/5] h-full overflow-hidden rounded-lg md:aspect-auto md:min-h-[560px]"
          >
            <motion.img
              variants={imageReveal}
              src={founderImg}
              alt="Enrique, founder of Mancora Kite Club"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[52%_center]"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-lg border border-white/25 bg-white/85 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-md dark:border-white/10 dark:bg-slate-950/75">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">Enrique</p>
              <p className="mt-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary">
                Founder & Head Instructor
              </p>
            </figcaption>
          </motion.figure>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={textContainer}
            className="flex h-full flex-col justify-center rounded-lg border border-slate-200 bg-white px-6 py-8 shadow-[0_24px_70px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.04] sm:px-8 sm:py-10 md:min-h-[560px] lg:px-10"
          >
            <div className="max-w-prose">
              <motion.p variants={textItem} className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
                Our Story
              </motion.p>
              <motion.h2
                variants={textItem}
                className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
              >
                15 years reading Mancora's water.
              </motion.h2>

              <motion.div
                variants={textItem}
                className="mt-6 max-w-prose space-y-4 text-justify text-sm leading-7 text-slate-600 [text-align-last:left] dark:text-slate-300 sm:text-base sm:leading-8"
              >
                <p>
                  I am Enrique, founder of Mancora Kite Club. I have spent more than 15 years living,
                  riding and reading this coastline: wind, swell, current and the small details that
                  make northern Peru special.
                </p>
                <p>
                  Our work is simple: safe coaching, real progression and an ocean experience that
                  feels personal. More than a school, it is a way to understand the sea and want to
                  come back to it.
                </p>
              </motion.div>

              <motion.ul variants={textItem} className="mt-8 grid gap-4 sm:grid-cols-2">
                {VALUES.map((value) => {
                  const Icon = value.icon

                  return (
                    <motion.li
                      key={value.title}
                      variants={textItem}
                      className="border-t border-slate-200 pt-4 dark:border-white/10"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                        <Icon className="text-sm" aria-hidden="true" />
                      </span>
                      <p className="mt-3 text-sm font-semibold text-slate-950 dark:text-white">
                        {value.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {value.text}
                      </p>
                    </motion.li>
                  )
                })}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
