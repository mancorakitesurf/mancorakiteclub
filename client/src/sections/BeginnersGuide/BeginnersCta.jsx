import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useI18n } from "../../app/providers/i18nContext"
import { localizePath } from "../../lib/routes"
import { getImage } from "../../config/images.js"

function BeginnersCta() {
  const { currentLang, t } = useI18n()
  
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src={getImage("optimized/critical/home-hero-wave-desktop.webp")}
          alt="background texture"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan-500">
            {t("beginnersGuide.cta.eyebrow")}
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            <span className="block">{t("beginnersGuide.cta.title1")}</span>
            <span className="block text-cyan-500">{t("beginnersGuide.cta.title2")}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
            {t("beginnersGuide.cta.description")}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to={localizePath("/build", currentLang)}
              className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-cyan-400 px-8 py-3 font-bold text-[#0f1416] transition hover:scale-105 hover:bg-cyan-300 sm:w-auto"
            >
              {t("beginnersGuide.cta.ctaButton")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BeginnersCta
