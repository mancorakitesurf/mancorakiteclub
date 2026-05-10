import { motion } from "framer-motion"
import gallery1 from "../../assets/imagenes-wingfoil/posicionw1.jpg"
import gallery2 from "../../assets/imagenes-wingfoil/posicionw2.jpg"
import gallery3 from "../../assets/imagenes-wingfoil/posicionw4.jpg"
import gallery4 from "../../assets/imagenes-wingfoil/posicionw5.jpg"
import { useI18n } from '../../app/providers/i18nContext'

function WingfoilWithUs() {
  const { t } = useI18n()

  const BENEFITS = [
    {
      titleKey: 'sections.classes.wingfoilSimple',
      textKey: 'sections.classes.wingfoilSimpleDesc',
      image: gallery1
    },
    {
      titleKey: 'sections.classes.wingfoilFast',
      textKey: 'sections.classes.wingfoilFastDesc',
      image: gallery2
    },
    {
      titleKey: 'sections.classes.wingfoilExperience',
      textKey: 'sections.classes.wingfoilExperienceDesc',
      image: gallery3
    },
    {
      titleKey: 'sections.classes.wingfoilEfficiency',
      textKey: 'sections.classes.wingfoilEfficiencyDesc',
      image: gallery4
    }
  ]

  return (
    <section className="relative overflow-hidden bg-[#0E201F] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      
      {/* Header */}
      <div className="mx-auto mb-16 max-w-7xl sm:mb-20 lg:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-6xl"
        >
          {t('sections.classes.wingfoilNorthTitle')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg"
        >
          {t('sections.classes.wingfoilNorthDesc')}
        </motion.p>
      </div>

      {/* Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
        {BENEFITS.map((benefit, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="group relative overflow-hidden rounded-3xl"
          >
            {/* Image */}
            <img
              src={benefit.image}
              alt={t(benefit.titleKey)}
              loading="lazy"
              className="h-[280px] w-full transform object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[320px] lg:h-[360px]"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E201F]/90 via-[#0E201F]/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 p-4 sm:p-6 lg:p-8">
              <h3 className="mb-3 text-xl font-bold tracking-wide sm:text-2xl">
                {t(benefit.titleKey)}
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-white/85">
                {t(benefit.textKey)}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default WingfoilWithUs
