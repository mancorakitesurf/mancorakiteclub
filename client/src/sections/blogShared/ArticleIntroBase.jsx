import { motion } from "framer-motion"

function ArticleIntroBase({ eyebrow, title, paragraphs = [], quote, images = [] }) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-700">
              {eyebrow}
            </p>
            <h2 className="max-w-3xl font-display text-2xl leading-tight text-slate-950 sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h2>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700 sm:text-base md:text-lg md:leading-8">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {quote ? (
              <div className="mt-10 rounded-[2rem] border border-cyan-100 bg-cyan-50 p-5 sm:p-7">
                <p className="font-display text-2xl leading-9 text-slate-900">“{quote}”</p>
              </div>
            ) : null}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-5"
          >
            {images.map((item) => (
              <figure
                key={item.caption}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_48px_rgba(15,23,42,0.08)]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover sm:h-72"
                />
                <figcaption className="px-4 py-4 text-sm leading-6 text-slate-600 sm:px-6">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ArticleIntroBase
