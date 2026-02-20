import heroImage from '../assets/imagenes-home/posicion5.jpg'

export const trips = [
  {
    slug: 'first-fly',
    path: '/trips/first-fly',
    title: 'FIRST FLY',
    subtitle: 'Kite/Wing + Stay with us',
    summary: 'Entry package focused on progression with stay included.',
    heroImage,
    heroAlt: 'First Fly trip',
    whatsappMessage: 'Hi, I want to book FIRST FLY.',
    forYouIf: [
      'You want a clear learning plan for kite or wing.',
      'You prefer training and stay solved in one package.',
      'You need a short or full-week option.',
    ],
    includes: [
      'Kite/Wing sessions.',
      'Stay with us.',
      'Basic logistics support.',
      'TODO: exact equipment detail.',
      'TODO: exact transfer detail.',
    ],
    durations: ['3 nights', '7 nights', 'Custom'],
    pricing: {
      onePerson: { threeNights: 646, sevenNights: 1342 },
      twoPeople: { threeNights: 994, sevenNights: 1970 },
    },
    addOns: ['Extra coaching session', 'Video review', 'TODO: custom add-on'],
    faq: [
      { question: 'Can I join as a beginner?', answer: 'Yes. Program level is adapted.' },
      { question: 'Can I extend nights?', answer: 'Yes. Ask for custom duration.' },
      { question: 'Is gear included?', answer: 'TODO: confirm exact gear inclusions.' },
      { question: 'How do I confirm?', answer: 'Booking is confirmed on WhatsApp.' },
    ],
  },
  {
    slug: 'olas-y-viento',
    path: '/trips/olas-y-viento',
    title: 'OLAS & VIENTO',
    subtitle: 'Surf + Kite + Stay with us',
    summary: 'Surf and kite mix with accommodation included.',
    heroImage,
    heroAlt: 'Olas y Viento trip',
    whatsappMessage: 'Hi, I want to book OLAS & VIENTO.',
    forYouIf: [
      'You want to combine surf and kite in one trip.',
      'You want a balanced schedule on and off water.',
      'You need a package with stay included.',
    ],
    includes: [
      'Surf sessions.',
      'Kite sessions.',
      'Stay with us.',
      'Basic planning support.',
      'TODO: exact transfer detail.',
    ],
    durations: ['3 nights', '7 nights', 'Custom'],
    pricing: {
      onePerson: { threeNights: 718, sevenNights: 1342 },
      twoPeople: { threeNights: 1094, sevenNights: 1970 },
    },
    addOns: ['Extra surf class', 'Extra kite class', 'TODO: custom add-on'],
    faq: [
      { question: 'Can I focus more on surf?', answer: 'Yes. Program can be adjusted.' },
      { question: 'Can I focus more on kite?', answer: 'Yes. Program can be adjusted.' },
      { question: 'Are boards included?', answer: 'TODO: confirm exact equipment inclusions.' },
      { question: 'How do I confirm?', answer: 'Booking is confirmed on WhatsApp.' },
    ],
  },
  {
    slug: 'solo-surf',
    path: '/trips/solo-surf',
    title: 'SOLO SURF',
    subtitle: 'Surf + Stay with us',
    summary: 'Surf-first package with accommodation included.',
    heroImage,
    heroAlt: 'Solo Surf trip',
    whatsappMessage: 'Hi, I want to book SOLO SURF.',
    forYouIf: [
      'You want a surf-only focused trip.',
      'You prefer a simple stay + surf structure.',
      'You want flexible duration options.',
    ],
    includes: [
      'Surf sessions.',
      'Stay with us.',
      'Basic schedule support.',
      'TODO: exact board detail.',
      'TODO: exact transfer detail.',
    ],
    durations: ['3 nights', '7 nights', 'Custom'],
    pricing: {
      onePerson: { threeNights: 300, sevenNights: 900 },
      twoPeople: { threeNights: 480, sevenNights: 1368 },
    },
    addOns: ['Extra surf session', 'Photo pack', 'TODO: custom add-on'],
    faq: [
      { question: 'Is this only surf?', answer: 'Yes. This package is surf focused.' },
      { question: 'Can I extend nights?', answer: 'Yes. Ask for custom duration.' },
      { question: 'Is board rental included?', answer: 'TODO: confirm exact inclusions.' },
      { question: 'How do I confirm?', answer: 'Booking is confirmed on WhatsApp.' },
    ],
  },
  {
    slug: 'ride-the-coast',
    path: '/trips/ride-the-coast',
    title: 'RIDE THE COAST',
    subtitle: 'Kite/Wing Safari + Stay with us',
    summary: 'Safari-style kite/wing package with stay included.',
    heroImage,
    heroAlt: 'Ride the Coast trip',
    whatsappMessage: 'Hi, I want to book RIDE THE COAST.',
    forYouIf: [
      'You want to ride multiple spots along the coast.',
      'You prefer a dynamic kite/wing schedule.',
      'You want stay included in the same plan.',
    ],
    includes: [
      'Kite/Wing safari sessions.',
      'Stay with us.',
      'Basic route support.',
      'TODO: exact transport detail.',
      'TODO: exact equipment detail.',
    ],
    durations: ['3 nights', '7 nights', 'Custom'],
    pricing: {
      onePerson: { threeNights: 406, sevenNights: 1050 },
      twoPeople: { threeNights: 726, sevenNights: 1778 },
    },
    addOns: ['Extra safari day', 'Video coaching', 'TODO: custom add-on'],
    faq: [
      { question: 'Is this for intermediates?', answer: 'Recommended for confident riders.' },
      { question: 'Are spots fixed?', answer: 'Spots depend on daily conditions.' },
      { question: 'Is transport included?', answer: 'TODO: confirm exact transport inclusions.' },
      { question: 'How do I confirm?', answer: 'Booking is confirmed on WhatsApp.' },
    ],
  },
]

export function getTripBySlug(slug) {
  return trips.find((trip) => trip.slug === slug)
}
