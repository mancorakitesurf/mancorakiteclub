import { componentImages } from '../../config/images.js'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useI18n } from "../../app/providers/i18nContext"

const { heroWingfoil, heroWingfoilMobile } = componentImages["sections/ClassesPage/WingfoilIntro.jsx"]
function WingfoilIntro() {
  const { t } = useI18n()

  return (
    <section className="relative bg-[#0f1416] text-white overflow-hidden">
      {/* Imagen de fondo */}
      <picture className="absolute inset-0 block">
        <source media="(max-width: 767px)" srcSet={heroWingfoilMobile} />
        <source media="(min-width: 768px)" srcSet={heroWingfoil} />
        <img
          src={heroWingfoil}
          alt={t("classes.wingfoil.intro.imageAlt")}
          width="1200"
          height="1801"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover opacity-40"
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />

      {/* Contenido */}
      <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {t("serviceCopy.wingfoilLessons.introTitle")}
        </motion.h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg md:text-left">
          {t("serviceCopy.wingfoilLessons.introText")}
        </p>
        <Link
          to="/build"
          className="mt-10 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-cyan-400 px-6 py-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-black sm:w-auto sm:px-8"
        >
          {t("serviceCopy.wingfoilLessons.cta")}
        </Link>
      </div>
    </section>
  )
}

export default WingfoilIntro
