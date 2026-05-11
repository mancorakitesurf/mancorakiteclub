import { motion } from "framer-motion"
import { CHOICE_DATA14 } from "./introData14"
import heroImg from "../../assets/imagenes-kitesurfing/posicionkt2.jpg"
import { useI18n } from '../../app/providers/i18nContext'

function HeroChoiceKite() {
  const { t } = useI18n()
  const { hero } = CHOICE_DATA14

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-black md:min-h-screen">
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroImg}
          alt="Peru Swell"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
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

        <h1 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {t(hero.titleKey)}<br/>
          {t(hero.highlightKey)}
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base font-light italic leading-relaxed text-white/80 sm:text-lg md:text-xl">
          {t(hero.descriptionKey)}
        </p>
      </motion.div>

      <div className="absolute bottom-12 left-0 z-10 hidden w-full justify-center gap-8 lg:flex">
        {hero.anchors.map((anchor, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="text-center border-l border-white/20 pl-8 first:border-none"
          >
            <p className="text-[10px] uppercase tracking-widest text-[#9eaeb4] mb-1">{t(anchor.subKey)}</p>
            <p className="text-3xl font-bold text-white tracking-tighter">
              {anchor.value}<span className="text-sm ml-1 opacity-50">{anchor.unit || ""}</span>
            </p>
            <p className="text-[10px] text-[#5af8fb] font-bold uppercase mt-1">{t(anchor.labelKey)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HeroChoiceKite