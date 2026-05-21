export const SITE_URL = 'https://www.mancorakiteclub.com'

export const OG_IMAGES = Object.freeze({
  home: '/og/home.webp',
  trips: '/og/trips.webp',
  classes: '/og/classes.webp',
  stay: '/og/stay.webp',
  build: '/og/build.webp',
  blog: '/og/blog.webp',
  faq: '/og/faq.webp',
  contact: '/og/contact.webp',
  reviews: '/og/reviews.webp',
  waves: '/og/waves.webp',
})

export const DEFAULT_SEO = Object.freeze({
  title: 'Mancora Kite Club | Kitesurf & Wingfoil School',
  description:
    'Learn kitesurfing and wingfoiling in Mancora, Peru with professional IKO certified coaching, equipment rental, beachfront stays, and epic trips.',
  image: OG_IMAGES.home,
  canonicalPath: '/home',
  hreflang: { en: '/home', es: '/esp/home', fr: '/fr/home', default: '/home' },
})

export const PAGE_SEO = Object.freeze({
  home: Object.freeze({
    paths: ['/home', '/esp/home', '/fr/home'],
    title: 'Mancora Kite Club | Kitesurf & Wingfoil School',
    description:
      'Learn kitesurfing and wingfoiling in Mancora, Peru with professional IKO certified coaching, equipment rental, beachfront stays, and epic trips.',
    image: OG_IMAGES.home,
    canonicalPath: '/home',
    hreflang: { en: '/home', es: '/esp/home', fr: '/fr/home', default: '/home' },
  }),
  trips: Object.freeze({
    paths: ['/trips', '/esp/trips', '/fr/trips'],
    title: 'Kitesurf, Wingfoil & Surf Trips in Mancora | Mancora Kite Club',
    description:
      'Explore kitesurf, wingfoil, surf, and downwind trips in northern Peru with coaching, local spot knowledge, and custom travel support.',
    image: OG_IMAGES.trips,
    canonicalPath: '/trips',
    hreflang: { en: '/trips', es: '/esp/trips', fr: '/fr/trips', default: '/trips' },
  }),
  classes: Object.freeze({
    paths: ['/classes', '/esp/classes', '/fr/classes'],
    title: 'Kitesurfing & Wingfoiling Lessons in Mancora | Mancora Kite Club',
    description:
      'Book kitesurfing and wingfoil classes in Mancora, Peru with IKO certified instructors, quality gear, and coaching for every level.',
    image: OG_IMAGES.classes,
    canonicalPath: '/classes',
    hreflang: { en: '/classes', es: '/esp/classes', fr: '/fr/classes', default: '/classes' },
  }),
  stay: Object.freeze({
    paths: ['/stay', '/esp/stay', '/fr/stay'],
    title: 'Stay with Us in Mancora | Mancora Kite Club',
    description:
      'Stay close to the wind and waves in Mancora with comfortable rooms, rider-friendly amenities, and direct access to Kite Club experiences.',
    image: OG_IMAGES.stay,
    canonicalPath: '/stay',
    hreflang: { en: '/stay', es: '/esp/stay', fr: '/fr/stay', default: '/stay' },
  }),
  build: Object.freeze({
    paths: ['/build', '/esp/build', '/fr/build'],
    title: 'Build Your Kite Trip in Mancora | Mancora Kite Club',
    description:
      'Create a custom Mancora trip with kitesurf, wingfoil, surf, accommodation, rentals, and extras matched to your group.',
    image: OG_IMAGES.build,
    canonicalPath: '/build',
    hreflang: { en: '/build', es: '/esp/build', fr: '/fr/build', default: '/build' },
  }),
  blog: Object.freeze({
    paths: ['/blog', '/esp/blog', '/fr/blog'],
    title: 'Kitesurf, Wingfoil & Surf Blog | Mancora Kite Club',
    description:
      'Read guides, spot breakdowns, coaching advice, and trip ideas for kitesurfing, wingfoil, and surf travel in northern Peru.',
    image: OG_IMAGES.blog,
    canonicalPath: '/blog',
    hreflang: { en: '/blog', es: '/esp/blog', fr: '/fr/blog', default: '/blog' },
  }),
  faq: Object.freeze({
    paths: ['/faq', '/esp/faq', '/fr/faq'],
    title: 'Mancora Kite Club FAQ',
    description:
      'Answers about kitesurfing lessons, wingfoil, surf trips, equipment rental, accommodation, booking, and travel in Mancora.',
    image: OG_IMAGES.faq,
    canonicalPath: '/faq',
    hreflang: { en: '/faq', es: '/esp/faq', fr: '/fr/faq', default: '/faq' },
  }),
  contact: Object.freeze({
    paths: ['/contact', '/esp/contact', '/fr/contact'],
    title: 'Contact Mancora Kite Club',
    description:
      'Contact Mancora Kite Club for kitesurfing, wingfoil, surf trips, classes, accommodation, rentals, and fast support via WhatsApp.',
    image: OG_IMAGES.contact,
    canonicalPath: '/contact',
    hreflang: { en: '/contact', es: '/esp/contact', fr: '/fr/contact', default: '/contact' },
  }),
  reviews: Object.freeze({
    paths: ['/reviews', '/esp/reviews', '/fr/reviews'],
    title: 'Mancora Kite Club Reviews',
    description:
      'See rider stories, testimonials, and community moments from guests who learned, traveled, and stayed with Mancora Kite Club.',
    image: OG_IMAGES.reviews,
    canonicalPath: '/reviews',
    hreflang: { en: '/reviews', es: '/esp/reviews', fr: '/fr/reviews', default: '/reviews' },
  }),
  waves: Object.freeze({
    paths: ['/waves', '/esp/waves', '/fr/waves'],
    title: 'Waves & Wind Trips in Northern Peru | Mancora Kite Club',
    description:
      'Discover kitesurf, wingfoil, and surf trips across Mancora, Negritos, Los Organos, Cabo Blanco, and Lobitos with local coaching.',
    image: OG_IMAGES.waves,
    canonicalPath: '/waves',
    hreflang: { en: '/waves', es: '/esp/waves', fr: '/fr/waves', default: '/waves' },
  }),
})

export const SEO_ROUTES = Object.values(PAGE_SEO).flatMap((meta) =>
  meta.paths.map((path) => ({ path, meta })),
)

export function getSeoMetaByPath(pathname = '/') {
  const normalized = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return SEO_ROUTES.find((route) => route.path === normalized)?.meta || DEFAULT_SEO
}

export function toSiteUrl(path = '/') {
  if (/^https?:\/\//i.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
