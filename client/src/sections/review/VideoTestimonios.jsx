import { motion } from "framer-motion"
import { useI18n } from '../../app/providers/i18nContext'

function VideoTestimonios() {
  const { t } = useI18n()

  return (
    <section
      id="videos"
      className="relative overflow-hidden bg-[#071a19] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(42,157,143,0.22),_transparent_62%)]" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#5af8fb]">
            {t('sections.review.riderStory')}
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-7xl">
            {t('sections.review.oneReal')}
            <br />
            {t('sections.review.experience')}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            {t('sections.review.videoDesc')}
          </p>
        </motion.div>

        {/* Single Video */}
        <motion.article
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="
            group relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2.5rem]
            border border-white/10 bg-white/[0.05]
            shadow-[0_35px_100px_rgba(0,0,0,0.45)]
            backdrop-blur-md transition duration-500
            hover:-translate-y-2 hover:border-[#5af8fb]/50 hover:bg-white/[0.08]
          "
        >
          <div className="relative flex aspect-video items-center justify-center overflow-hidden">
            {/* Replace this block with iframe/video later */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0f2e2c] to-cyan-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(90,248,251,0.25),_transparent_55%)] opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-white/70 backdrop-blur-md">
              {t('sections.review.featuredStory')}
            </div>

            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="
                relative z-10 flex h-24 w-24 items-center justify-center
                rounded-full border border-white/30 bg-white/10
                text-white shadow-[0_0_50px_rgba(90,248,251,0.28)]
                backdrop-blur-md transition duration-500
                group-hover:border-[#5af8fb] group-hover:bg-[#5af8fb]
                group-hover:text-black
              "
            >
              <span className="ml-1 text-4xl">▶</span>
            </motion.div>

            <div className="absolute bottom-8 left-8 right-8">
              {/* AQUÍ ESTABA EL DETALLE: Aplicamos el t() al heroBadge */}
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#5af8fb]">
                {t('sections.review.heroBadge')}
              </p>

              <h3 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                {t('sections.review.videoTagline')}
              </h3>
            </div>
          </div>

          <div className="grid gap-6 p-7 sm:grid-cols-[1fr_auto] sm:items-center">
            <p className="text-sm leading-7 text-white/65">
              {t('sections.review.videoFooter')}
            </p>

            <span className="inline-flex rounded-full border border-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white/50">
              {t('sections.review.videoTestimonial')}
            </span>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

export default VideoTestimonios