import { motion } from "framer-motion"
import reviewHeroImg from "../../assets/fotos comunidad/IMG_2917.webp"
import { useI18n } from '../../app/providers/i18nContext'

function HeroReview() {
  const { t } = useI18n()

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#031015]">

      {/* Background image with cinematic movement */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={reviewHeroImg}
          alt="Mancora Kite Club rider testimonials"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-transparent to-transparent" />
      </div>

      {/* Center content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center text-white max-w-5xl px-6"
      >
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-[#5af8fb]">
          Mancora Kite Club
        </p>

        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase mb-6">
          {t('sections.review.heroTitle1')}
          <br />
          {t('sections.review.heroTitle2')}
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-light leading-relaxed">
          {t('sections.review.heroDesc')}
        </p>

        <a
          href="#videos"
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full border border-[#5af8fb] px-8 py-3 text-sm font-bold uppercase tracking-[0.22em] text-[#5af8fb] transition hover:bg-[#5af8fb] hover:text-black"
        >
          {t('sections.review.watchVideos')}
        </a>
      </motion.div>
    </section>
  )
}

export default HeroReview