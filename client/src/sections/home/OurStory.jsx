import { homeImages } from '../../config/images.js'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaStar, FaUsers, FaWater } from 'react-icons/fa'
import { useI18n } from '../../app/providers/i18nContext.js'

const founderImg = homeImages.storyFounder
const VALUES = [
  {
    icon: FaWater,
    titleKey: 'home.story.values.spotKnowledge.title',
    textKey: 'home.story.values.spotKnowledge.text',
  },
  {
    icon: FaStar,
    titleKey: 'home.story.values.realProgression.title',
    textKey: 'home.story.values.realProgression.text',
  },
  {
    icon: FaShieldAlt,
    titleKey: 'home.story.values.safeSessions.title',
    textKey: 'home.story.values.safeSessions.text',
  },
  {
    icon: FaUsers,
    titleKey: 'home.story.values.oceanCulture.title',
    textKey: 'home.story.values.oceanCulture.text',
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
  const { t } = useI18n()

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
                {t('home.story.founderRole')}
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
                {t('home.story.label')}
              </motion.p>
              <motion.h2
                variants={textItem}
                className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
              >
                {t('home.story.headline')}
              </motion.h2>

              <motion.div
                variants={textItem}
                className="mt-6 max-w-prose space-y-4 text-justify text-sm leading-7 text-slate-600 [text-align-last:left] dark:text-slate-300 sm:text-base sm:leading-8"
              >
                <p>
                  {t('home.story.paragraph1')}
                </p>
                <p>
                  {t('home.story.paragraph2')}
                </p>
              </motion.div>

              <motion.ul variants={textItem} className="mt-8 grid gap-4 sm:grid-cols-2">
                {VALUES.map((value) => {
                  const Icon = value.icon

                  return (
                    <motion.li
                      key={value.titleKey}
                      variants={textItem}
                      className="border-t border-slate-200 pt-4 dark:border-white/10"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                        <Icon className="text-sm" aria-hidden="true" />
                      </span>
                      <p className="mt-3 text-sm font-semibold text-slate-950 dark:text-white">
                        {t(value.titleKey)}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {t(value.textKey)}
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
