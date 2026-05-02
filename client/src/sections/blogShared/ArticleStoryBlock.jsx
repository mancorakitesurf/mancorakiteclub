import { motion } from "framer-motion"

function ArticleStoryBlock({ section, index }) {
  const reverse = index % 2 === 1

  return (
    <article className="rounded-[2.25rem] border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.07)]">
      <div className={`grid gap-0 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="p-7 sm:p-9"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-700">
            {section.eyebrow}
          </p>
          <h3 className="mt-4 font-display text-3xl leading-tight text-slate-950">
            {section.title}
          </h3>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {section.bullets?.length ? (
            <ul className="mt-7 space-y-3 text-sm leading-7 text-slate-700">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-600" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {section.facts?.length ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {section.facts.map((fact) => (
                <div key={fact.label} className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-800">{fact.value}</p>
                </div>
              ))}
            </div>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-slate-50 p-5 sm:p-7"
        >
          <div className="grid h-full gap-5">
            <figure className="overflow-hidden rounded-[1.75rem]">
              <img
                src={section.image}
                alt={section.imageAlt}
                loading="lazy"
                className="h-72 w-full object-cover sm:h-80"
              />
              <figcaption className="bg-white px-5 py-4 text-sm leading-6 text-slate-600">
                {section.caption}
              </figcaption>
            </figure>

            {section.supportImage ? (
              <figure className="grid items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:grid-cols-[160px_minmax(0,1fr)]">
                <img
                  src={section.supportImage}
                  alt={section.supportAlt}
                  loading="lazy"
                  className="h-36 w-full rounded-2xl object-cover"
                />
                <figcaption className="text-sm leading-6 text-slate-600">
                  {section.supportCaption}
                </figcaption>
              </figure>
            ) : null}
          </div>
        </motion.div>
      </div>
    </article>
  )
}

export default ArticleStoryBlock
