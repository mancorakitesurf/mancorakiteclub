import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useI18n } from '../../app/providers/i18nContext'

function BlogIndexHero({ featuredPost }) {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#040b13] pt-28">
      <div className="absolute inset-0">
        <motion.img
          src={featuredPost.heroImage}
          alt={featuredPost.title}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040b13] via-[#040b13]/65 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200">
            {t('blogUI.heroLabel')}
          </div>
          <h1 className="mt-6 font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
            {t('blogUI.heroTitle')}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200/[0.85]">
            {t('blogUI.heroDesc')}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-cyan-300 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-cyan-200"
            >
              {t('blogUI.readFeatured')}
            </Link>
            <Link
              to="/"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/[0.15] bg-white/5 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-cyan-300/[0.35] hover:text-cyan-200"
            >
              {t('blogUI.exploreMancora')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogIndexHero
