import { componentImages } from '../../config/images.js'
const {
  heroKite, introKite,
  introClassImg, fundamentalClassImg, introClassImgHover, advanceClassImg,
  beginnerClassHover, masterClassImg, intensiveClassHover, fullProgressionClassHover,
  introClassImgSemi, fundamentalClassImgSemi, introClassImgHoverSemi, advanceClassImgSemi,
  beginnerClassHoverSemi, masterClassImgSemi, intensiveClassHoverSemi, fullProgressionClassHoverSemi,
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery9, gallery10, gallery11, gallery12,

  // WINGFOIL
  heroWingfoilImg, introWingfoilImg, introWingfoilHover,
  wingPrivateDiscovery, wingPrivateDiscoveryHover,
  wingPrivateBeginner, wingPrivateBeginnerHover,
  wingPrivateIntensive, wingPrivateIntensiveHover,
  wingPrivateFull, wingPrivateFullHover,
  wingSemiDiscovery, wingSemiDiscoveryHover,
  wingSemiBeginner, wingSemiBeginnerHover,
  wingSemiIntensive, wingSemiIntensiveHover,
  wingSemiFull, wingSemiFullHover,
  wingGallery1, wingGallery2, wingGallery3, wingGallery4,
  wingGallery5, wingGallery6, wingGallery7, wingGallery8,
  wingGallery9, wingGallery10, wingGallery11, wingGallery12,

  // SURF & SUP
  heroSurfSup, introSurfSup, introSurfSupHover,
  surfSupPrivateDiscovery, surfSupPrivateDiscoveryHover,
  surfSupPrivateBeginner, surfSupPrivateBeginnerHover,
  surfSupPrivateIntensive, surfSupPrivateIntensiveHover,
  surfSupPrivateFull, surfSupPrivateFullHover,
  surfSupSemiDiscovery, surfSupSemiDiscoveryHover,
  surfSupSemiBeginner, surfSupSemiBeginnerHover,
  surfSupSemiIntensive, surfSupSemiIntensiveHover,
  surfSupSemiFull, surfSupSemiFullHover,
  surfSupGallery1, surfSupGallery2, surfSupGallery3, surfSupGallery4,
  surfSupGallery5, surfSupGallery6, surfSupGallery7, surfSupGallery8,
  surfSupGallery9, surfSupGallery10, surfSupGallery11, surfSupGallery12,
} = componentImages["sections/ClassesPage/classesData.js"]
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

/* ============================================================
   WINGFOIL DATA (template reuse)
============================================================ */
export const WINGFOIL_PRIVATE_CLASSES = [
  {
    id: "discovery",
    titleKey: "classes.wingfoil.private.discovery.title",
    durationKey: "classes.wingfoil.private.discovery.duration",
    priceKey: "classes.wingfoil.private.discovery.price",
    image: wingPrivateDiscovery,
    hoverImage: wingPrivateDiscoveryHover,
    featuresKey: "classes.wingfoil.private.discovery.features"
  },
  {
    id: "beginner",
    titleKey: "classes.wingfoil.private.beginner.title",
    durationKey: "classes.wingfoil.private.beginner.duration",
    priceKey: "classes.wingfoil.private.beginner.price",
    image: wingPrivateBeginner,
    hoverImage: wingPrivateBeginnerHover,
    featuresKey: "classes.wingfoil.private.beginner.features"
  },
  {
    id: "intensive",
    titleKey: "classes.wingfoil.private.intensive.title",
    durationKey: "classes.wingfoil.private.intensive.duration",
    priceKey: "classes.wingfoil.private.intensive.price",
    image: wingPrivateIntensive,
    hoverImage: wingPrivateIntensiveHover,
    featuresKey: "classes.wingfoil.private.intensive.features"
  },
  {
    id: "full-progression",
    titleKey: "classes.wingfoil.private.fullProgression.title",
    durationKey: "classes.wingfoil.private.fullProgression.duration",
    priceKey: "classes.wingfoil.private.fullProgression.price",
    image: wingPrivateFull,
    hoverImage: wingPrivateFullHover,
    featured: true,
    featuresKey: "classes.wingfoil.private.fullProgression.features"
  }
]

export const WINGFOIL_SEMI_PRIVATE_CLASSES = [
  {
    id: "discovery-semi",
    titleKey: "classes.wingfoil.semiPrivate.discovery.title",
    durationKey: "classes.wingfoil.semiPrivate.discovery.duration",
    priceKey: "classes.wingfoil.semiPrivate.discovery.price",
    image: wingSemiDiscovery,
    hoverImage: wingSemiDiscoveryHover,
    featuresKey: "classes.wingfoil.semiPrivate.discovery.features"
  },
  {
    id: "beginner-semi",
    titleKey: "classes.wingfoil.semiPrivate.beginner.title",
    durationKey: "classes.wingfoil.semiPrivate.beginner.duration",
    priceKey: "classes.wingfoil.semiPrivate.beginner.price",
    image: wingSemiBeginner,
    hoverImage: wingSemiBeginnerHover,
    featuresKey: "classes.wingfoil.semiPrivate.beginner.features"
  },
  {
    id: "intensive-semi",
    titleKey: "classes.wingfoil.semiPrivate.intensive.title",
    durationKey: "classes.wingfoil.semiPrivate.intensive.duration",
    priceKey: "classes.wingfoil.semiPrivate.intensive.price",
    image: wingSemiIntensive,
    hoverImage: wingSemiIntensiveHover,
    featuresKey: "classes.wingfoil.semiPrivate.intensive.features"
  },
  {
    id: "full-progression-semi",
    titleKey: "classes.wingfoil.semiPrivate.fullProgression.title",
    durationKey: "classes.wingfoil.semiPrivate.fullProgression.duration",
    priceKey: "classes.wingfoil.semiPrivate.fullProgression.price",
    image: wingSemiFull,
    hoverImage: wingSemiFullHover,
    featured: true,
    featuresKey: "classes.wingfoil.semiPrivate.fullProgression.features"
  }
]

export const WINGFOIL_GALLERY = [
  wingGallery1, wingGallery2, wingGallery3, wingGallery4,
  wingGallery5, wingGallery6, wingGallery7, wingGallery8,
  wingGallery9, wingGallery10, wingGallery11, wingGallery12,
]

/* ============================================================
   SURF & SUP DATA (template reuse)
============================================================ */
export const SURFSUP_PRIVATE_CLASSES = [
  {
    id: "discovery",
    titleKey: "classes.surfSup.private.discovery.title",
    durationKey: "classes.surfSup.private.discovery.duration",
    priceKey: "classes.surfSup.private.discovery.price",
    image: surfSupPrivateDiscovery,
    hoverImage: surfSupPrivateDiscoveryHover,
    featuresKey: "classes.surfSup.private.discovery.features"
  },
  {
    id: "beginner",
    titleKey: "classes.surfSup.private.beginner.title",
    durationKey: "classes.surfSup.private.beginner.duration",
    priceKey: "classes.surfSup.private.beginner.price",
    image: surfSupPrivateBeginner,
    hoverImage: surfSupPrivateBeginnerHover,
    featuresKey: "classes.surfSup.private.beginner.features"
  },
  {
    id: "intensive",
    titleKey: "classes.surfSup.private.intensive.title",
    durationKey: "classes.surfSup.private.intensive.duration",
    priceKey: "classes.surfSup.private.intensive.price",
    image: surfSupPrivateIntensive,
    hoverImage: surfSupPrivateIntensiveHover,
    featuresKey: "classes.surfSup.private.intensive.features"
  },
  {
    id: "full-progression",
    titleKey: "classes.surfSup.private.fullProgression.title",
    durationKey: "classes.surfSup.private.fullProgression.duration",
    priceKey: "classes.surfSup.private.fullProgression.price",
    image: surfSupPrivateFull,
    hoverImage: surfSupPrivateFullHover,
    featured: true,
    featuresKey: "classes.surfSup.private.fullProgression.features"
  }
]

export const SURFSUP_SEMI_PRIVATE_CLASSES = [
  {
    id: "discovery-semi",
    titleKey: "classes.surfSup.semiPrivate.discovery.title",
    durationKey: "classes.surfSup.semiPrivate.discovery.duration",
    priceKey: "classes.surfSup.semiPrivate.discovery.price",
    image: surfSupSemiDiscovery,
    hoverImage: surfSupSemiDiscoveryHover,
    featuresKey: "classes.surfSup.semiPrivate.discovery.features"
  },
  {
    id: "beginner-semi",
    titleKey: "classes.surfSup.semiPrivate.beginner.title",
    durationKey: "classes.surfSup.semiPrivate.beginner.duration",
    priceKey: "classes.surfSup.semiPrivate.beginner.price",
    image: surfSupSemiBeginner,
    hoverImage: surfSupSemiBeginnerHover,
    featuresKey: "classes.surfSup.semiPrivate.beginner.features"
  },
  {
    id: "intensive-semi",
    titleKey: "classes.surfSup.semiPrivate.intensive.title",
    durationKey: "classes.surfSup.semiPrivate.intensive.duration",
    priceKey: "classes.surfSup.semiPrivate.intensive.price",
    image: surfSupSemiIntensive,
    hoverImage: surfSupSemiIntensiveHover,
    featuresKey: "classes.surfSup.semiPrivate.intensive.features"
  },
  {
    id: "full-progression-semi",
    titleKey: "classes.surfSup.semiPrivate.fullProgression.title",
    durationKey: "classes.surfSup.semiPrivate.fullProgression.duration",
    priceKey: "classes.surfSup.semiPrivate.fullProgression.price",
    image: surfSupSemiFull,
    hoverImage: surfSupSemiFullHover,
    featured: true,
    featuresKey: "classes.surfSup.semiPrivate.fullProgression.features"
  }
]

export const SURFSUP_GALLERY = [
  surfSupGallery1, surfSupGallery2, surfSupGallery3, surfSupGallery4,
  surfSupGallery5, surfSupGallery6, surfSupGallery7, surfSupGallery8,
  surfSupGallery9, surfSupGallery10, surfSupGallery11, surfSupGallery12,
]

/* ============================================================
   DISCIPLINE CONFIGS — drive the shared template per service
============================================================ */
export const KITESURF_CONFIG = {
  id: 'kitesurf',
  copyNs: 'serviceCopy.kitesurfLessons',
  classesNs: 'classes.kitesurf',
  heroPreset: 'lessons',
  hero: {
    eyebrowKey: 'classes.kitesurf.hero.eyebrow',
    titleKey: 'classes.kitesurf.hero.title',
    image: heroKite,
    imageClassName: 'object-[58%_center] md:object-center',
  },
  intro: {
    image: introKite,
    hoverImage: gallery2 ? undefined : undefined,
  },
  privateClasses: PRIVATE_CLASSES,
  semiPrivateClasses: SEMI_PRIVATE_CLASSES,
  gallery: CLASSES_GALLERY,
}

export const WINGFOIL_CONFIG = {
  id: 'wingfoil',
  copyNs: 'serviceCopy.wingfoilLessons',
  classesNs: 'classes.wingfoil',
  heroPreset: 'wing',
  hero: {
    eyebrowKey: 'classes.wingfoil.hero.eyebrow',
    titleKey: 'classes.wingfoil.hero.title',
    image: heroWingfoilImg,
    imageClassName: 'object-center',
  },
  intro: {
    image: introWingfoilImg,
    hoverImage: introWingfoilHover,
  },
  privateClasses: WINGFOIL_PRIVATE_CLASSES,
  semiPrivateClasses: WINGFOIL_SEMI_PRIVATE_CLASSES,
  gallery: WINGFOIL_GALLERY,
}

export const SURFSUP_CONFIG = {
  id: 'surfSup',
  copyNs: 'serviceCopy.surfSup',
  classesNs: 'classes.surfSup',
  heroPreset: 'surf',
  hero: {
    eyebrowKey: 'classes.surfSup.hero.eyebrow',
    titleKey: 'classes.surfSup.hero.title',
    image: heroSurfSup,
    imageClassName: 'object-center',
  },
  intro: {
    image: introSurfSup,
    hoverImage: introSurfSupHover,
  },
  privateClasses: SURFSUP_PRIVATE_CLASSES,
  semiPrivateClasses: SURFSUP_SEMI_PRIVATE_CLASSES,
  gallery: SURFSUP_GALLERY,
}
