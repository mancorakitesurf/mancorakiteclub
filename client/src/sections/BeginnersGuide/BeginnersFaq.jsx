import { useState } from "react"
import { motion } from "framer-motion"
import { useI18n } from "../../app/providers/i18nContext"

const FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6"]

function BeginnersFaq() {
  const { t } = useI18n()
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section className="relative overflow-hidden bg-[#0A1113] px-4 py-16 text-[#F4F2EA] sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      {/* Decorative gradients */}
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,224,200,0.08),transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            {t("beginnersGuide.faq.title")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base md:text-lg">
            {t("beginnersGuide.faq.subtitle")}
          </p>
        </motion.div>

        {/* Items */}
        <div className="space-y-4">
          {FAQ_KEYS.map((key, index) => {
            const isOpen = openId === key
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`cursor-pointer overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                  isOpen
                    ? "border-[#38E0C8]/30 bg-white/10 shadow-2xl"
                    : "border-white/5 bg-white/5 hover:bg-white/10"
                }`}
                onClick={() => toggle(key)}
              >
                <div className="px-6 py-5 sm:px-8 sm:py-6">
                  <div className="flex w-full items-center justify-between text-left">
                    <h4
                      className={`text-base font-medium transition-colors duration-300 sm:text-lg ${
                        isOpen ? "text-[#38E0C8]" : "text-white"
                      }`}
                    >
                      {t(`beginnersGuide.faq.items.${key}.q`)}
                    </h4>
                    <span
                      className={`ml-4 shrink-0 text-2xl font-light transition-all duration-500 ${
                        isOpen ? "rotate-45 text-white/50" : "rotate-0 text-[#38E0C8]"
                      }`}
                    >
                      +
                    </span>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      isOpen ? "mt-4 max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-t border-white/10 pt-4">
                      <p className="leading-relaxed text-white/70">
                        {t(`beginnersGuide.faq.items.${key}.a`)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BeginnersFaq
