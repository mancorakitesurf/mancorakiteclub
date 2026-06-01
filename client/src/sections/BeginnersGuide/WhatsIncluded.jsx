import { motion } from "framer-motion"
import { useI18n } from "../../app/providers/i18nContext"

const ITEMS = [
  { key: "kite", emoji: "🪁" },
  { key: "board", emoji: "🏄" },
  { key: "harness", emoji: "🔗" },
  { key: "helmet", emoji: "⛑️" },
  { key: "vest", emoji: "🦺" },
  { key: "wetsuit", emoji: "👕" },
  { key: "radio", emoji: "📻" },
  { key: "insurance", emoji: "🛡️" },
]

function WhatsIncluded() {
  const { t } = useI18n()

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-cyan-600">
            {t("beginnersGuide.whatsIncluded.eyebrow")}
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            {t("beginnersGuide.whatsIncluded.title")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base md:text-lg">
            {t("beginnersGuide.whatsIncluded.subtitle")}
          </p>
        </motion.div>

        {/* Items Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 shadow-sm transition hover:border-cyan-300 hover:shadow-md"
            >
              <span className="text-2xl" aria-hidden="true">{item.emoji}</span>
              <p className="text-sm font-medium text-slate-700 sm:text-base">
                {t(`beginnersGuide.whatsIncluded.items.${item.key}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatsIncluded
