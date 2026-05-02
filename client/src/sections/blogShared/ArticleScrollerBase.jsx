import { motion } from "framer-motion"
import ArticleStoryBlock from "./ArticleStoryBlock.jsx"

function ArticleScrollerBase({ eyebrow, title, description, sections = [] }) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-700">
            {eyebrow}
          </p>
          <h2 className="mt-5 font-display text-2xl leading-tight text-slate-950 sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg md:leading-8">{description}</p>
        </motion.div>

        <div className="mt-10 space-y-8 sm:mt-14 sm:space-y-10">
          {sections.map((section, index) => (
            <ArticleStoryBlock key={section.title} section={section} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticleScrollerBase
