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
    whatsappMessage:
      'Hi! I’m interested in the FIRST FLY trip (with accommodation).\nDates: ...\nDuration: 3 or 7 nights (or Custom)\nPeople: 1 or 2\nLevel: ...\nMy name is ...',
    forYouIf: [
      'You want private kite or wing classes with a clear structure.',
      'You prefer accommodation included in the same package.',
      'You want a 3-night or 7-night format.',
    ],
    includes: [
      'Private classes (6h on 3 nights or 10h on 7 nights).',
      'Complete equipment.',
      'Walkie-talkies during sessions.',
      'Trip photos.',
      'Yoga session(s).',
      'Massage session(s).',
      'Accommodation included.',
    ],
    durations: ['3 nights', '7 nights', 'Custom'],
    pricing: {
      onePerson: { threeNights: 646, sevenNights: 1342 },
      twoPeople: { threeNights: 994, sevenNights: 1970 },
    },
    addOns: ['Extra class hours (TODO)', 'Additional wellness session (TODO)', 'Custom add-on (TODO)'],
    faq: [
      { question: 'Can I do this as a beginner?', answer: 'Level setup is handled before booking. TODO: final level policy.' },
      { question: 'Can I request custom dates?', answer: 'Custom dates may be possible. TODO: availability confirmation.' },
      { question: 'What is included exactly in equipment?', answer: 'Complete equipment is included. TODO: final item list.' },
      { question: 'How do I confirm my booking?', answer: 'Booking is handled via WhatsApp. TODO: deposit/payment steps.' },
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
    whatsappMessage:
      'Hi! I’m interested in the OLAS & VIENTO trip (with accommodation).\nDates: ...\nDuration: 3 or 7 nights (or Custom)\nPeople: 1 or 2\nLevel: ...\nMy name is ...',
    forYouIf: [
      'You want to combine surf classes and kite progression.',
      'You prefer one package with stay included.',
      'You want a short or full-week training format.',
    ],
    includes: [
      '2 surf classes + kite classes (6h on 3 nights).',
      '10h kite classes + surf trip (7 nights).',
      'Equipment and water assistance.',
      'Trip photos.',
      'Yoga session(s).',
      'Massage session(s).',
      'Accommodation included.',
    ],
    durations: ['3 nights', '7 nights', 'Custom'],
    pricing: {
      onePerson: { threeNights: 718, sevenNights: 1342 },
      twoPeople: { threeNights: 1094, sevenNights: 1970 },
    },
    addOns: ['Extra surf class (TODO)', 'Extra kite class (TODO)', 'Custom add-on (TODO)'],
    faq: [
      { question: 'Can I prioritize surf or kite?', answer: 'Program focus can be reviewed. TODO: final adjustment policy.' },
      { question: 'Do 3-night and 7-night packages differ?', answer: 'Yes, training volume differs. TODO: final schedule detail.' },
      { question: 'What equipment is included?', answer: 'Equipment is included. TODO: exact equipment breakdown.' },
      { question: 'How do I confirm my booking?', answer: 'Booking is handled via WhatsApp. TODO: deposit/payment steps.' },
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
    whatsappMessage:
      'Hi! I’m interested in the SOLO SURF trip (with accommodation).\nDates: ...\nDuration: 3 or 7 nights (or Custom)\nPeople: 1 or 2\nLevel: ...\nMy name is ...',
    forYouIf: [
      'You want a surf-focused trip with coaching.',
      'You prefer stay included in the same package.',
      'You want a 3-night or 7-night progression track.',
    ],
    includes: [
      '3 nights: 3 surf classes (1.5h) + 1 surf trip.',
      '7 nights: 5 classes + 2 surf trips + 1 free coached session.',
      'Daily photos + final gallery.',
      'Video analysis.',
      'Yoga session(s).',
      'Accommodation included.',
    ],
    durations: ['3 nights', '7 nights', 'Custom'],
    pricing: {
      onePerson: { threeNights: 300, sevenNights: 900 },
      twoPeople: { threeNights: 480, sevenNights: 1368 },
    },
    addOns: ['Extra surf session (TODO)', 'Additional media pack (TODO)', 'Custom add-on (TODO)'],
    faq: [
      { question: 'Is this package surf-only?', answer: 'Yes, this format is surf focused.' },
      { question: 'What changes between 3 and 7 nights?', answer: 'Class/trip volume changes by duration. TODO: final day-by-day plan.' },
      { question: 'Are photos and video included?', answer: 'Photos and video analysis are included as listed.' },
      { question: 'How do I confirm my booking?', answer: 'Booking is handled via WhatsApp. TODO: deposit/payment steps.' },
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
    whatsappMessage:
      'Hi! I’m interested in the RIDE THE COAST trip (with accommodation).\nDates: ...\nDuration: 3 or 7 nights (or Custom)\nPeople: 1 or 2\nLevel: ...\nMy name is ...',
    forYouIf: [
      'You want a safari format across coastal spots.',
      'You ride kite or wing and want guided sessions.',
      'You prefer accommodation included in one package.',
    ],
    includes: [
      '3 or 6 safari sessions (based on duration).',
      'Transport and on-route assistance.',
      'Snacks during safari days.',
      'Trip photos.',
      'Drone photos on 7-night format.',
      'Yoga session(s).',
      'Massage session(s).',
      'Accommodation included.',
    ],
    durations: ['3 nights', '7 nights', 'Custom'],
    pricing: {
      onePerson: { threeNights: 406, sevenNights: 1050 },
      twoPeople: { threeNights: 726, sevenNights: 1778 },
    },
    addOns: ['Extra safari day (TODO)', 'Additional support service (TODO)', 'Custom add-on (TODO)'],
    faq: [
      { question: 'Are safari spots always the same?', answer: 'Spot selection depends on daily conditions.' },
      { question: 'How many safari days are included?', answer: '3 or 6 safaris depending on package duration.' },
      { question: 'Is transport included?', answer: 'Transport is included. TODO: exact pickup/drop flow.' },
      { question: 'How do I confirm my booking?', answer: 'Booking is handled via WhatsApp. TODO: deposit/payment steps.' },
    ],
  },
]

export function getTripBySlug(slug) {
  return trips.find((trip) => trip.slug === slug)
}
