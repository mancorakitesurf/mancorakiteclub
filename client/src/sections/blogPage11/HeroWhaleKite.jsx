import { motion } from "framer-motion"
import { WHALE_DATA11 } from "./introData11"
import whaleHeroImg from "../../assets/imagenes-kitesurfing/posicionkt2.jpg"
import { useI18n } from '../../app/providers/i18nContext'

function HeroWhaleKite() {
  const { t } = useI18n()
  const { hero } = WHALE_DATA11

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#031015] md:min-h-screen">
      <div className="absolute inset-0 z-0">
        <motion.img
          src={whaleHeroImg}
          alt="Whale Breaching"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-transparent to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8"
      >
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-[#5af8fb]">
          {t(hero.tagKey)}
        </p>

        <h1 className="mb-6 text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {t(hero.titleKey)}
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-white/80 sm:text-lg md:text-xl">
          {t(hero.subtitleKey)}
        </p>
      </motion.div>
    </section>
  )
}

export default HeroWhaleKite