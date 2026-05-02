import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function ArticleFinalCallToActionBase({ eyebrow, title, description, image, imageAlt, buttonLabel }) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-950 shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
          <div className="grid items-stretch lg:grid-cols-[1.05fr_minmax(320px,0.95fr)]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col justify-center p-6 text-white sm:p-8 lg:p-12"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/85">
                {eyebrow}
              </p>
              <h2 className="mt-5 font-display text-2xl leading-tight sm:text-3xl md:text-4xl">{title}</h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base sm:leading-8">{description}</p>

              <div className="mt-8">
                <Link
                  to="/"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-cyan-200 sm:w-auto sm:px-7"
                >
                  {buttonLabel}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="min-h-[320px]"
            >
              <img src={image} alt={imageAlt} loading="lazy" className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArticleFinalCallToActionBase
