import { motion } from "framer-motion"
import { useI18n } from "../../app/providers/i18nContext"
import { getImage } from "../../config/images.js"

function LearningPath() {
  const { t } = useI18n()

  const steps = [
    {
      id: "day1",
      title: t("beginnersGuide.learningPath.steps.day1.title"),
      desc: t("beginnersGuide.learningPath.steps.day1.desc"),
      image: getImage("fotos clases/DSC00433.webp")
    },
    {
      id: "day2",
      title: t("beginnersGuide.learningPath.steps.day2.title"),
      desc: t("beginnersGuide.learningPath.steps.day2.desc"),
      image: getImage("fotos clases/DSC04595.webp")
    },
    {
      id: "day3",
      title: t("beginnersGuide.learningPath.steps.day3.title"),
      desc: t("beginnersGuide.learningPath.steps.day3.desc"),
      image: getImage("fotos home/DSC00287.webp")
    }
  ]

  return (
    <section className="relative bg-[#0f1416] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-16 max-w-4xl text-center sm:mb-20"
      >
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
          {t("beginnersGuide.learningPath.title")}
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
          {t("beginnersGuide.learningPath.subtitle")}
        </p>
      </motion.div>

      {/* Timeline vertical */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-400 to-transparent md:block" />

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {steps.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col items-center gap-8 md:flex-row md:gap-10 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-[260px] w-full overflow-hidden rounded-3xl shadow-xl sm:h-[320px] md:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full text-center md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningPath
