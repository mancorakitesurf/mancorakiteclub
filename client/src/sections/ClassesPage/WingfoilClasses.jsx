import { componentImages } from '../../config/images.js'
import { motion } from "framer-motion"
import { buildClassInquiryMessage, buildWhatsAppUrl } from "../../lib/whatsapp"
import { useI18n } from "../../app/providers/i18nContext"

const { wingIntro, wingIntroHover, wingFundamental, wingFundamentalHover, wingAdvanced, wingAdvancedHover, wingMaster, wingMasterHover, wingIntroSemi, wingIntroSemiHover, wingFundamentalSemi, wingFundamentalSemiHover, wingAdvancedSemi, wingAdvancedSemiHover, wingMasterSemi, wingMasterSemiHover } = componentImages["sections/ClassesPage/WingfoilClasses.jsx"]
const WINGFOIL_PRIVATE_CLASSES = [
  {
    id: "discovery",
    titleKey: "classes.wingfoil.private.discovery.title",
    durationKey: "classes.wingfoil.private.discovery.duration",
    priceKey: "classes.wingfoil.private.discovery.price",
    image: wingIntro,
    hoverImage: wingIntroHover,
    featuresKey: "classes.wingfoil.private.discovery.features"
  },
  {
    id: "beginner",
    titleKey: "classes.wingfoil.private.beginner.title",
    durationKey: "classes.wingfoil.private.beginner.duration",
    priceKey: "classes.wingfoil.private.beginner.price",
    image: wingFundamental,
    hoverImage: wingFundamentalHover,
    featuresKey: "classes.wingfoil.private.beginner.features"
  },
  {
    id: "intensive",
    titleKey: "classes.wingfoil.private.intensive.title",
    durationKey: "classes.wingfoil.private.intensive.duration",
    priceKey: "classes.wingfoil.private.intensive.price",
    image: wingAdvanced,
    hoverImage: wingAdvancedHover,
    featuresKey: "classes.wingfoil.private.intensive.features"
  },
  {
    id: "full-progression",
    titleKey: "classes.wingfoil.private.fullProgression.title",
    durationKey: "classes.wingfoil.private.fullProgression.duration",
    priceKey: "classes.wingfoil.private.fullProgression.price",
    image: wingMaster,
    hoverImage: wingMasterHover,
    featured: true,
    featuresKey: "classes.wingfoil.private.fullProgression.features"
  }
]

const WINGFOIL_SEMI_PRIVATE_CLASSES = [
  {
    id: "discovery-semi",
    titleKey: "classes.wingfoil.semiPrivate.discovery.title",
    durationKey: "classes.wingfoil.semiPrivate.discovery.duration",
    priceKey: "classes.wingfoil.semiPrivate.discovery.price",
    image: wingIntroSemi,
    hoverImage: wingIntroSemiHover,
    featuresKey: "classes.wingfoil.semiPrivate.discovery.features"
  },
  {
    id: "beginner-semi",
    titleKey: "classes.wingfoil.semiPrivate.beginner.title",
    durationKey: "classes.wingfoil.semiPrivate.beginner.duration",
    priceKey: "classes.wingfoil.semiPrivate.beginner.price",
    image: wingFundamentalSemi,
    hoverImage: wingFundamentalSemiHover,
    featuresKey: "classes.wingfoil.semiPrivate.beginner.features"
  },
  {
    id: "intensive-semi",
    titleKey: "classes.wingfoil.semiPrivate.intensive.title",
    durationKey: "classes.wingfoil.semiPrivate.intensive.duration",
    priceKey: "classes.wingfoil.semiPrivate.intensive.price",
    image: wingAdvancedSemi,
    hoverImage: wingAdvancedSemiHover,
    featuresKey: "classes.wingfoil.semiPrivate.intensive.features"
  },
  {
    id: "full-progression-semi",
    titleKey: "classes.wingfoil.semiPrivate.fullProgression.title",
    durationKey: "classes.wingfoil.semiPrivate.fullProgression.duration",
    priceKey: "classes.wingfoil.semiPrivate.fullProgression.price",
    image: wingMasterSemi,
    hoverImage: wingMasterSemiHover,
    featured: true,
    featuresKey: "classes.wingfoil.semiPrivate.fullProgression.features"
  }
]

function translateWingfoilClassItem(item, t) {
  const features = t(item.featuresKey)

  return {
    ...item,
    title: t(item.titleKey),
    duration: t(item.durationKey),
    price: t(item.priceKey),
    features: Array.isArray(features) ? features : [],
  }
}

function WingfoilClassCard({ item, index }) {
  const { t } = useI18n()

  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white text-[#0E201F] shadow-xl transition hover:shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        <img
          src={item.hoverImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <span className="mt-1 text-xs uppercase tracking-wider opacity-80">{item.duration}</span>
          <div className="mt-3 text-lg font-bold text-[#8ac43f]">{item.price}</div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4 text-center sm:p-6">
        <ul className="space-y-2 mb-6 text-sm">
          {item.features.map((feature, i) => (
            <li key={i} className="flex justify-center gap-2 text-black/70">
              <span className="text-[#8ac43f]">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <a
          href={buildWhatsAppUrl(buildClassInquiryMessage(item))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#829988] px-6 py-3 font-bold text-[#0E201F] transition hover:bg-[#0E201F] hover:text-white"
        >
          {t("classes.common.bookNow")}
        </a>
      </div>
      {item.featured && (
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            boxShadow: [
              "0 0 0px rgba(138,196,63,0.0)",
              "0 0 25px rgba(138,196,63,0.8)",
              "0 0 0px rgba(138,196,63,0.0)"
            ]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-4 right-4 rounded-full bg-[#8ac43f] px-4 py-1 text-xs font-bold text-[#071a19]"
        >
          {t("classes.common.mostPopular")}
        </motion.div>
      )}
    </motion.div>
  )
}

function WingfoilClasses() {
  const { t } = useI18n()
  const privateClasses = WINGFOIL_PRIVATE_CLASSES.map((item) => translateWingfoilClassItem(item, t))
  const semiPrivateClasses = WINGFOIL_SEMI_PRIVATE_CLASSES.map((item) => translateWingfoilClassItem(item, t))

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f2e2c] to-[#071a19] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(130,153,152,0.25),_transparent_65%)]" />

      {/* Private Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 mx-auto mb-16 max-w-4xl text-center sm:mb-20 lg:mb-24"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] sm:text-3xl md:text-4xl lg:text-5xl">
          {t("classes.wingfoil.pricing.privateTitle")}
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
          {t("classes.wingfoil.pricing.privateDescription")}
        </p>
      </motion.div>

      {/* Private Grid */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {privateClasses.map((item, index) => (
          <WingfoilClassCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Semi-Private Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 mx-auto mt-24 mb-16 max-w-4xl text-center sm:mb-20 lg:mb-24"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] sm:text-3xl md:text-4xl lg:text-5xl">
          {t("classes.wingfoil.pricing.semiPrivateTitle")}
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
          {t("classes.wingfoil.pricing.semiPrivateDescription")}
        </p>
      </motion.div>

      {/* Semi-Private Grid */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {semiPrivateClasses.map((item, index) => (
          <WingfoilClassCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default WingfoilClasses
