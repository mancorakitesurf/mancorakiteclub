import { motion } from "framer-motion"
import { Wind, Waves, Sun, ShieldCheck, Users, Home } from "lucide-react"
import { useI18n } from "../../app/providers/i18nContext"

const REASONS = [
  { key: "wind", Icon: Wind },
  { key: "water", Icon: Waves },
  { key: "weather", Icon: Sun },
  { key: "certified", Icon: ShieldCheck },
  { key: "community", Icon: Users },
  { key: "stay", Icon: Home },
]

function WhyMancora() {
  const { t } = useI18n()

  return (
    <section className="relative bg-gradient-to-b from-[#0f2e2c] to-[#071a19] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-[#38E0C8]">
          {t("beginnersGuide.whyMancora.eyebrow")}
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {t("beginnersGuide.whyMancora.title")}
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
          {t("beginnersGuide.whyMancora.subtitle")}
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mx-auto max-w-6xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((reason, index) => {
          const { Icon } = reason
          return (
            <motion.div
              key={reason.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#38E0C8]/20 bg-white/[0.04] p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#38E0C8]/40 hover:bg-white/[0.07]"
            >
              {/* Top stripe */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#38E0C8] via-[#DEFF9A] to-[#C19B6C]" aria-hidden="true" />

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#38E0C8]/30 bg-[#38E0C8]/10 text-[#38E0C8]">
                <Icon size={22} strokeWidth={1.8} />
              </div>

              <h3 className="mb-2 text-lg font-bold text-white">
                {t(`beginnersGuide.whyMancora.reasons.${reason.key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-white/65">
                {t(`beginnersGuide.whyMancora.reasons.${reason.key}.desc`)}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default WhyMancora
