import { motion } from "framer-motion"

function ArticleHeroBase({ eyebrow, title, description, meta = [], image, imageAlt }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-24 text-white sm:pt-28">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-slate-950/55 to-cyan-950/45" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-end px-4 pb-16 sm:px-6 md:min-h-screen lg:px-8 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/85">
            {eyebrow}
          </p>

          <h1 className="font-display text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg md:leading-8">
            {description}
          </p>

          {meta.length ? (
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/80">
              {meta.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  {index > 0 ? <span className="h-1 w-1 rounded-full bg-white/40" /> : null}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  )
}

export default ArticleHeroBase
