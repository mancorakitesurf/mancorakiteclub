import { componentImages } from '../../config/images.js'
const { heroKite, introKite, introClassImg, fundamentalClassImg, introClassImgHover, advanceClassImg, beginnerClassHover, masterClassImg, intensiveClassHover, fullProgressionClassHover, introClassImgSemi, fundamentalClassImgSemi, introClassImgHoverSemi, advanceClassImgSemi, beginnerClassHoverSemi, masterClassImgSemi, intensiveClassHoverSemi, fullProgressionClassHoverSemi, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12 } = componentImages["sections/ClassesPage/classesData.js"]
// HERO
// INTRO
// PRICING IMAGES

// GALLERY FINAL (prototipo con repetidas)

/* ===========================
  HERO SECTION
=========================== */
export const CLASSES_HERO = {
  titleKey: "classes.kitesurf.hero.title",
  subtitleKey: "classes.kitesurf.hero.subtitle",
  image: heroKite
}

/* ===========================
  INTRO SECTION
=========================== */
export const CLASSES_INTRO = {
  titleKey: "classes.kitesurf.intro.title",
  textKey: "classes.kitesurf.intro.text",
  image: introKite
}

/* ===========================
   PRIVATE CLASSES (PRICING)
=========================== */
export const PRIVATE_CLASSES = [
  {
    id: "discovery",
    titleKey: "classes.kitesurf.private.discovery.title",
    durationKey: "classes.kitesurf.private.discovery.duration",
    priceKey: "classes.kitesurf.private.discovery.price",
    image: introClassImg,
    hoverImage: introClassImgHover,
    featuresKey: "classes.kitesurf.private.discovery.features"
  },
  {
    id: "beginner",
    titleKey: "classes.kitesurf.private.beginner.title",
    durationKey: "classes.kitesurf.private.beginner.duration",
    priceKey: "classes.kitesurf.private.beginner.price",
    image: fundamentalClassImg,
    hoverImage: beginnerClassHover,
    featuresKey: "classes.kitesurf.private.beginner.features"
  },
  {
    id: "intensive",
    titleKey: "classes.kitesurf.private.intensive.title",
    durationKey: "classes.kitesurf.private.intensive.duration",
    priceKey: "classes.kitesurf.private.intensive.price",
    image: advanceClassImg,
    hoverImage: intensiveClassHover,
    featuresKey: "classes.kitesurf.private.intensive.features"
  },
  {
    id: "full-progression",
    titleKey: "classes.kitesurf.private.fullProgression.title",
    durationKey: "classes.kitesurf.private.fullProgression.duration",
    priceKey: "classes.kitesurf.private.fullProgression.price",
    image: masterClassImg,
    hoverImage: fullProgressionClassHover,
    featured: true,
    featuresKey: "classes.kitesurf.private.fullProgression.features"
  }
]

/* ===========================
   SEMI-PRIVATE CLASSES (PRICING)
=========================== */
export const SEMI_PRIVATE_CLASSES = [
  {
    id: "discovery-semi",
    titleKey: "classes.kitesurf.semiPrivate.discovery.title",
    durationKey: "classes.kitesurf.semiPrivate.discovery.duration",
    priceKey: "classes.kitesurf.semiPrivate.discovery.price",
    image: introClassImgSemi,
    hoverImage: introClassImgHoverSemi,
    featuresKey: "classes.kitesurf.semiPrivate.discovery.features"
  },
  {
    id: "beginner-semi",
    titleKey: "classes.kitesurf.semiPrivate.beginner.title",
    durationKey: "classes.kitesurf.semiPrivate.beginner.duration",
    priceKey: "classes.kitesurf.semiPrivate.beginner.price",
    image: fundamentalClassImgSemi,
    hoverImage: beginnerClassHoverSemi,
    featuresKey: "classes.kitesurf.semiPrivate.beginner.features"
  },
  {
    id: "intensive-semi",
    titleKey: "classes.kitesurf.semiPrivate.intensive.title",
    durationKey: "classes.kitesurf.semiPrivate.intensive.duration",
    priceKey: "classes.kitesurf.semiPrivate.intensive.price",
    image: advanceClassImgSemi,
    hoverImage: intensiveClassHoverSemi,
    featuresKey: "classes.kitesurf.semiPrivate.intensive.features"
  },
  {
    id: "full-progression-semi",
    titleKey: "classes.kitesurf.semiPrivate.fullProgression.title",
    durationKey: "classes.kitesurf.semiPrivate.fullProgression.duration",
    priceKey: "classes.kitesurf.semiPrivate.fullProgression.price",
    image: masterClassImgSemi,
    hoverImage: fullProgressionClassHoverSemi,
    featured: true,
    featuresKey: "classes.kitesurf.semiPrivate.fullProgression.features"
  }
]

/* ===========================
   Benefits Section
=========================== */
export const CLASSES_BENEFIT_KEYS = [
  "classes.kitesurf.benefits.items.quality",
  "classes.kitesurf.benefits.items.equipment",
  "classes.kitesurf.benefits.items.safety",
  "classes.kitesurf.benefits.items.memories",
  "classes.kitesurf.benefits.items.flexibility"
]

/* ===========================
   FINAL GALLERY SECTION
=========================== */
export const CLASSES_GALLERY = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12
]

export function translateClassItem(item, t) {
  const features = t(item.featuresKey)

  return {
    ...item,
    title: t(item.titleKey),
    duration: t(item.durationKey),
    price: t(item.priceKey),
    features: Array.isArray(features) ? features : [],
  }
}
