import { componentImages } from '../../config/images.js'
const { heroImg, surfHeroImg, kiteSafariImg, kiteTripImg, kiteExperienceImg, wingDayImg, wingProgressionImg, wingExperienceImg, classBeginnerImg, classAdvancedImg, surfIntroImg, surfAdventureImg, surfImmersionImg, surfClassBeginnerImg, surfClassAdvancedImg, mancoraImg, negritosImg, losOrganosImg, caboBlancoImg, lobitosImg } = componentImages["sections/waves/wavesContent.js"]
export const HERO_IMAGE = heroImg
export const SURF_HERO_IMAGE = surfHeroImg

/* ─── Kite Surf Trip Packages ─────────────────────────────── */
export const KITE_TRIPS = [
  {
    title: 'Kite Safari Full Day',
    price: '$60',
    duration: '1 day',
    image: kiteSafariImg,
    alt: 'Kite safari full day action shot',
    description:
      'A full day of action, waves and adrenaline. Ideal for an unforgettable getaway.',
    includes: [
      'Round trip transportation from Máncora to the most epic spot of the day (depending on conditions).',
      '1 personalized technical session (optional with coaching).',
      'Assistance out and in the water.',
      'Professional support throughout the session.',
      'High-quality photographs of your experience.',
      'Video edited with drone shots to take home a cinematic memory. (additional for 20 extra USD)',
      'Snacks and water included.',
    ],
    totalDuration: 'Total duration: 4 to 6 hours',
    level: null,
  },
  {
    title: 'Kite Surf Trip 3 Days',
    price: '$160',
    duration: '3 days',
    image: kiteTripImg,
    alt: 'Kite surf trip 3 days',
    description:
      'Ideal for those looking to progress quickly and discover new beaches.',
    includes: [
      '3 kite safaris in different spots (one per day).',
      '3 technical sessions with personalized analysis.',
      'Assistance out and in the water.',
      'Ground coaching with video corrections.',
      'Professional photographs every day.',
      'Drone videos in each session (additional 20 usd)',
      '1 reel video edited for Instagram at the end.',
      'Transportation, snacks and water daily.',
    ],
    totalDuration: 'Total duration: 3 consecutive days (flexible depending on day)',
    level: 'Level: Intermediate - Advanced.',
  },
  {
    title: 'Kite Surf Experience 7 Days',
    price: '$350',
    duration: '7 days',
    image: kiteExperienceImg,
    alt: 'Kite surf experience 7 days',
    description:
      'The complete package to experience an epic week of kitesurfing, improve your level and take home unique memories.',
    includes: [
      '7 kite safaris to the best spots in the north (an optional day off).',
      '7 personalized technical sessions with daily monitoring.',
      'Video analysis + post session technical review.',
      'Assistance out and in the water.',
      'Photographs every day (edited selection).',
      'Videos with drone + final edition with highlights.',
      'Video reel + digital album exclusive to your experience.',
    ],
    totalDuration: 'Total duration: 7 days',
    level: 'Level: Intermediate - Advanced',
  },
]

/* ─── Wingfoil Trip Packages ──────────────────────────────── */
export const WINGFOIL_TRIPS = [
  {
    title: 'Wingfoil Day Trip',
    price: '$70',
    duration: '1 day',
    image: wingDayImg,
    alt: 'Wingfoil day trip action shot',
    description:
      'A single day to discover the Negritos spot and enjoy a complete session with perfect wind and waves.',
    includes: [
      'Round trip transportation from Máncora to Negritos (depending on day conditions).',
      '1 personalized technical session (optional coaching).',
      'Assistance on land and in water.',
      'Professional support for spot reading, positioning and transitions.',
      'Professional photographs of the session.',
      'Video with drone to capture your best maneuvers (optional +20 USD).',
      'Snacks and water included.',
    ],
    totalDuration: 'Total duration: 4 to 6 hours',
    level: 'Level: Intermediate or advanced',
  },
  {
    title: 'Wingfoil Progression Trip',
    price: '$180',
    duration: '3 days',
    image: wingProgressionImg,
    alt: 'Wingfoil progression trip',
    description:
      'A three-day getaway to progress, explore spots and polish your riding in waves. Ideal for those who want more than just a good session.',
    includes: [
      '3 wing safaris (Negritos as main spot + other spots depending on conditions).',
      '3 technical sessions with personalized correction on the ground.',
      'Full assistance in and out of the water.',
      'Video coaching: analysis of technique, timing, transitions, and carving in waves.',
      'Professional photos every day.',
      'Drone videos (optional +20 USD per day).',
      'Reel end edited Instagram style.',
      'Transportation, snacks and water daily.',
    ],
    totalDuration: 'Total duration: 3 consecutive days (flexible depending on day)',
    level: 'Level: Intermediate - Advanced.',
    extra: 'Extra optional: On one of the days you can alternate with a wave kitesurfing session if conditions allow and you want to vary your experience.',
  },
  {
    title: 'Wingfoil Experience 7 Days',
    price: '$350',
    duration: '7 days',
    image: wingExperienceImg,
    alt: 'Wingfoil experience 7 days',
    description:
      'A full week in Negritos and its surroundings. Improve your technique day by day, experience downwinds, explore new lines and get unique content.',
    includes: [
      '7 days safari based in Negritos (1 day off optional).',
      '7 personalized sessions with daily technical analysis.',
      'Technical coaching specialized in wave maneuvers, pumping, foil control and transitions.',
      'Assistance in water and land throughout the week.',
      'Photographs every day (edited selection).',
      'Drone recordings every day + final edition with highlights.',
      'Reel final + custom digital album.',
      'Transportation, snacks, water and continuous support.',
    ],
    totalDuration: 'Total duration: 7 days',
    level: 'Level: Intermediate - Advanced',
    extra: 'Bonus: For a day or two, you can choose to alternate with wave kitesurfing sessions, if conditions and your energy allow.',
  },
]

/* ─── Intro Section ───────────────────────────────────────── */
export const INTRO = {
  subtitle: 'Wingfoil Surf Trips — Negritos, Talara, Peru',
  heading: 'Discover the best wave spot for Wingfoil in South America',
  paragraphs: [
    'If you are looking for a place where constant wind, long waves and the magic of the Pacific meet, Negritos – Talara is the perfect destination. Located in the north of Peru, this small coastal paradise offers ideal conditions for practicing Wingfoil in waves: constant side-off wind, long, gentle waves, and room to maneuver without limits.',
    'Our Wingfoil Safari packages are designed for intermediate and advanced riders who want to explore new spots, improve their wave technique and live an unforgettable experience with professional coaching, personalized assistance, epic photos and drone recordings.',
  ],
}

/* ─── Quote ────────────────────────────────────────────────── */
export const QUOTE =
  '"Challenge the wind and slide on the waves. Discover the freedom of Wingfoil in Northern Peru."'

/* ─── Classes ─────────────────────────────────────────────── */
export const CLASSES = [
  {
    title: 'Classes for beginners',
    description:
      'Our beginner classes are designed to introduce you to the world of Kitesurfing in a safe and fun way. Always under the supervision of experienced instructors.',
    image: classBeginnerImg,
    alt: 'Beginner kitesurfing class on beach',
    reverse: false,
  },
  {
    title: 'Advanced Classes with ProRider',
    description:
      'If you already have experience in Kitesurfing and want to take your skills to the next level, we offer advanced classes taught by professional surfers (ProRiders). These sessions focus on advanced techniques, complex maneuvers and detailed analysis of your performance to perfect your style and strategy in the water.',
    image: classAdvancedImg,
    alt: 'Advanced kitesurfing class with pro rider',
    reverse: true,
  },
]

/* ─── Benefits ────────────────────────────────────────────── */
export const BENEFITS = [
  {
    title: 'Guaranteed Quality',
    description: 'Certified instructors with extensive experience in Kitesurfing.',
  },
  {
    title: 'Vanguard Team',
    description: 'Use of the latest technologies and materials in wings and boards.',
  },
  {
    title: 'Priority Security',
    description: 'Strict protocols and constant support during sessions.',
  },
  {
    title: 'Unforgettable memories',
    description: 'Professional audiovisual material to relive and share your progress.',
  },
  {
    title: 'Total Flexibility',
    description: 'Programs adapted to your needs, level and availability.',
  },
]

/* ─── Surf Trip Packages ──────────────────────────────────── */
export const SURF_TRIPS = [
  {
    title: 'Surf Intro',
    price: '$30',
    duration: '1 day',
    image: surfIntroImg,
    alt: 'Surf intro class on the beach',
    description:
      'Ideal for those who want to try surfing for the first time or perfect the basics.',
    includes: [
      '1 personalized surf class in Máncora.',
      'Table, leash and wetsuit included.',
      'Constant assistance in the water.',
      'Basic photos from the session (taken from the shore).',
      'Technical feedback upon completion.',
    ],
    totalDuration: 'Total duration: 1:30 hours',
    level: 'Level: Beginner or intermediate',
  },
  {
    title: 'Surf Adventure',
    price: '$250',
    duration: '3 days',
    image: surfAdventureImg,
    alt: 'Surf adventure trip',
    description:
      'Ideal for those looking to progress quickly and discover new beaches.',
    includes: [
      'Three surf classes on different beaches: Máncora, Los Órganos and Lobitos.',
      'All necessary equipment: board, leash and wetsuit.',
      'Daily round-trip transportation from your accommodation to the aforementioned beaches.',
      'Professional photographs of each session.',
      'Video analysis to improve your technique.',
    ],
    totalDuration: 'Total duration: 3 consecutive days, 3 hours a day.',
    level: 'Level: Intermediate.',
  },
  {
    title: 'Surf Immersion',
    price: '$550',
    duration: '7 days',
    image: surfImmersionImg,
    alt: 'Surf immersion experience',
    description:
      'Explore northern Peru, while honing your skills with expert guidance.',
    includes: [
      'Five surf lessons on beaches such as Máncora, Los Órganos, Cabo Blanco and Lobitos.',
      'A day of surf trip to a secret beach, depending on the sea conditions and your level.',
      'All necessary equipment: board, leash and wetsuit.',
      'Daily round-trip transportation from your accommodation to the aforementioned beaches.',
      'Professional photographs of each session.',
      'Video analysis and personalized feedback.',
      'A relaxation massage at the end of the week.',
    ],
    totalDuration: 'Total duration: 7 days: 5 days of 2-hour classes + 2 days of rest or free practice.',
    level: 'Level: Intermediate - Advanced',
  },
]

/* ─── Surf Intro Section ──────────────────────────────────── */
export const SURF_INTRO = {
  subtitle: 'Surf Experiences Mancora - Peru',
  heading: 'Personalized classes, Surf Trips and professional coaching in the best waves in northern Peru.',
  paragraphs: [
    'Get to know the legendary beaches of Máncora, Los Órganos, Cabo Blanco and Lobitos while improving your skills or learning from scratch. Quality equipment, certified instructors and ProRider training option for advanced levels.',
  ],
}

/* ─── Surf Quote ───────────────────────────────────────────── */
export const SURF_QUOTE =
  'Join us and live the experience of surfing on the best beaches in Northern Peru!'

/* ─── Surf Classes ─────────────────────────────────────────── */
export const SURF_CLASSES = [
  {
    title: 'Classes for beginners',
    description:
      'Our beginner classes are designed to introduce you to the world of surfing in a safe and fun way. You will learn everything from correct posture and paddling to how to catch your first waves, always under the supervision of experienced instructors.',
    image: surfClassBeginnerImg,
    alt: 'Beginner surf class on beach',
    reverse: false,
  },
  {
    title: 'Advanced Classes with ProRider',
    description:
      'If you already have surfing experience and want to take your skills to the next level, we offer advanced classes taught by professional surfers (ProRiders). These sessions focus on advanced techniques, complex maneuvers and detailed analysis of your performance to perfect your style and strategy in the water.',
    image: surfClassAdvancedImg,
    alt: 'Advanced surf class with pro rider',
    reverse: true,
  },
]

/* ─── Climate ──────────────────────────────────────────────── */
export const CLIMATE = {
  subtitle: 'The Climate in Northern Peru',
  text: 'Northern Peru enjoys a warm and sunny climate all year round, with average temperatures between 25°C and 30°C. Conditions are ideal for surfing, especially between the months of April and October, when the waves are most consistent.',
}

/* ─── Featured Beaches ────────────────────────────────────── */
export const BEACHES = [
  {
    name: 'Mancora',
    description:
      'Known for its warm waters and consistent waves, ideal for surfers of all levels. In addition, it offers a vibrant nightlife and a wide range of restaurants.',
    image: mancoraImg,
    alt: 'Mancora beach with kitesurfers',
    size: 'large',
  },
  {
    name: 'Los Organos',
    description:
      'Quiet beach with waves perfect for those looking for a more relaxed and less crowded atmosphere.',
    image: losOrganosImg,
    alt: 'Los Organos fishing boat at sunset',
    size: 'small',
  },
  {
    name: 'Cabo Blanco',
    description:
      'Famous for its tubular and challenging waves, it is the dream destination for experienced surfers.',
    image: caboBlancoImg,
    alt: 'Cabo Blanco surfer on big wave',
    size: 'small',
  },
  {
    name: 'Lobitos',
    description:
      'It offers a variety of world-class waves, suitable for both beginners and advanced surfers.',
    image: lobitosImg,
    alt: 'Lobitos beach coastline',
    size: 'wide',
  },
  {
    name: 'Negritos',
    description:
      'A little explored spot with constant winds and waters ideal for kitesurfing and wingfoil. Its quiet surroundings offer an authentic experience away from the busiest beaches.',
    image: negritosImg,
    alt: 'Negritos wingfoil rider',
    size: 'large',
  },
]
