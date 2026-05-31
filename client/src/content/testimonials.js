export const TESTIMONIAL_ACTIVITIES = Object.freeze([
  'kitesurf',
  'wingfoil',
  'surf',
  'sup',
  'stay',
  'trips',
  'rental',
  'general',
])

export const TESTIMONIAL_SOURCES = Object.freeze([
  'google',
  'tripadvisor',
  'whatsapp',
  'instagram',
  'facebook',
  'internal',
])

export const TESTIMONIAL_PERMISSION_STATUSES = Object.freeze([
  'confirmed',
  'pending',
  'public_source',
  'internal_note',
])

const COLLECTED_AT = '2026-05-31'
const LEGACY_PERMISSION_NOTE =
  'Migrated from legacy client/src/data/reviews.json. The exact external platform, review URL, and photo attachments were not encoded in the legacy data; confirm source before labeling as platform-verified.'

export const TESTIMONIAL_SOURCE_AUDIT = Object.freeze([
  {
    source: 'internal',
    sourceUrl: 'client/src/data/reviews.json',
    status: 'normalized',
    note: 'Eight existing local testimonials were normalized without changing the original text.',
    checkedAt: COLLECTED_AT,
  },
  {
    source: 'tripadvisor',
    sourceUrl:
      'https://www.tripadvisor.com/Attraction_Review-g635976-d6664378-Reviews-Mancora_Kite_Club-Mancora_Piura_Region.html',
    status: 'checked_public_listing',
    note: 'Public listing exists, but no exact per-testimonial URL was mapped to the legacy local records.',
    checkedAt: COLLECTED_AT,
  },
  {
    source: 'google',
    sourceUrl: '',
    status: 'pending_exact_review_mapping',
    note: 'Google reviews appear to be a likely source for the legacy data shape, but exact review URLs are not stored in the project.',
    checkedAt: COLLECTED_AT,
  },
  {
    source: 'whatsapp',
    sourceUrl: '',
    status: 'not_provided',
    note: 'No authorized WhatsApp testimonials were provided in the current project files.',
    checkedAt: COLLECTED_AT,
  },
  {
    source: 'instagram',
    sourceUrl: '',
    status: 'not_provided',
    note: 'No authorized Instagram testimonials were provided in the current project files.',
    checkedAt: COLLECTED_AT,
  },
  {
    source: 'facebook',
    sourceUrl: '',
    status: 'not_provided',
    note: 'No authorized Facebook testimonials were provided in the current project files.',
    checkedAt: COLLECTED_AT,
  },
])

export const testimonials = Object.freeze([
  {
    id: 'review-001',
    legacyReviewId: 3,
    name: 'King Lewis Aldair',
    location: '',
    activity: 'kitesurf',
    originalText: 'Me encantó aprender kite aquí en la mejor escuela del norte',
    shortText: 'Me encantó aprender kite en la mejor escuela del norte.',
    rating: 5,
    source: 'internal',
    sourceUrl: '',
    permissionStatus: 'internal_note',
    permissionNote: LEGACY_PERMISSION_NOTE,
    collectedAt: COLLECTED_AT,
    originalLanguage: 'es',
    translations: {
      en: 'I loved learning kite here at the best school in the north.',
      es: 'Me encantó aprender kite aquí en la mejor escuela del norte.',
      fr: "J'ai adoré apprendre le kite ici dans la meilleure école du nord.",
    },
    photos: [],
    tags: ['kitesurf', 'lesson'],
  },
  {
    id: 'review-002',
    legacyReviewId: 1,
    name: 'Deuf',
    location: '',
    activity: 'general',
    originalText:
      'muy buena escuela , super ambiente y Mancora es un lugar maravilloso, en el cual tuve la suerte de navegar al lado de las ballenas y de los dolfines....que mas quieres😅😅??',
    shortText: 'Muy buena escuela, gran ambiente y Máncora es un lugar maravilloso.',
    rating: 5,
    source: 'internal',
    sourceUrl: '',
    permissionStatus: 'internal_note',
    permissionNote: LEGACY_PERMISSION_NOTE,
    collectedAt: COLLECTED_AT,
    originalLanguage: 'es',
    translations: {
      en: 'Very good school, great atmosphere, and Mancora is a wonderful place where I was lucky enough to ride alongside whales and dolphins... what more could you want? 😅😅',
      es: 'Muy buena escuela, súper ambiente y Máncora es un lugar maravilloso. Tuve la suerte de navegar al lado de ballenas y delfines... ¿qué más quieres? 😅😅',
      fr: "Très bonne école, super ambiance et Mancora est un endroit merveilleux, où j'ai eu la chance de naviguer à côté des baleines et des dauphins... que demander de plus ? 😅😅",
    },
    photos: [],
    tags: ['school', 'community', 'mancora'],
  },
  {
    id: 'review-003',
    legacyReviewId: 6,
    name: 'NEKANDER GARCIA ESTELA',
    location: '',
    activity: 'kitesurf',
    originalText:
      'Muy buena experiencia en mancora kitebsurf, kike te hace sentir cómodo, motivado, cuenta con mucha experiencia y dominio total de este deporte. Totalmente recomendado!',
    shortText: 'Kike te hace sentir cómodo y motivado; experiencia totalmente recomendada.',
    rating: 5,
    source: 'internal',
    sourceUrl: '',
    permissionStatus: 'internal_note',
    permissionNote: LEGACY_PERMISSION_NOTE,
    collectedAt: COLLECTED_AT,
    originalLanguage: 'es',
    translations: {
      en: 'Very good experience at Mancora Kite Club. Kike makes you feel comfortable and motivated; he has a lot of experience and total command of the sport. Totally recommended!',
      es: 'Muy buena experiencia en Mancora Kite Club. Kike te hace sentir cómodo y motivado; cuenta con mucha experiencia y dominio total de este deporte. ¡Totalmente recomendado!',
      fr: "Très bonne expérience à Mancora Kite Club. Kike vous met à l'aise et vous motive; il a beaucoup d'expérience et une maîtrise totale de ce sport. Totalement recommandé !",
    },
    photos: [],
    tags: ['kitesurf', 'coaching'],
  },
  {
    id: 'review-004',
    legacyReviewId: 2,
    name: 'Martin Landucci',
    location: '',
    activity: 'kitesurf',
    originalText:
      'Grandes instructores y mejores personas! Fuimos con mi pareja y ella tomó clases, salió encantada. Sin duda volveremos para compartir y por supuesto KITEAR!',
    shortText: 'Grandes instructores; mi pareja tomó clases y quedó encantada.',
    rating: 5,
    source: 'internal',
    sourceUrl: '',
    permissionStatus: 'internal_note',
    permissionNote: LEGACY_PERMISSION_NOTE,
    collectedAt: COLLECTED_AT,
    originalLanguage: 'es',
    translations: {
      en: 'Great instructors and even better people! I went with my partner and she took classes; she loved it. We will definitely come back to share and, of course, ride!',
      es: 'Grandes instructores y mejores personas! Fuimos con mi pareja y ella tomó clases, salió encantada. Sin duda volveremos para compartir y por supuesto KITEAR!',
      fr: "Excellents instructeurs et des personnes encore meilleures ! J'y suis allé avec ma partenaire et elle a pris des cours; elle a adoré. Nous reviendrons sans aucun doute pour partager et, bien sûr, faire du kite !",
    },
    photos: [],
    tags: ['kitesurf', 'lesson', 'couple'],
  },
  {
    id: 'review-005',
    legacyReviewId: 7,
    name: 'Jazmín Repetto',
    location: '',
    activity: 'general',
    originalText:
      'Gracias Kike por darme la mejor experiencia en la Escuela ! Mucha paciencia y dedicación.  Perfecta atención',
    shortText: 'Gracias Kike por la paciencia, dedicación y perfecta atención.',
    rating: 5,
    source: 'internal',
    sourceUrl: '',
    permissionStatus: 'internal_note',
    permissionNote: LEGACY_PERMISSION_NOTE,
    collectedAt: COLLECTED_AT,
    originalLanguage: 'es',
    translations: {
      en: 'Thank you Kike for giving me the best experience at the school! So much patience and dedication. Perfect attention.',
      es: 'Gracias Kike por darme la mejor experiencia en la escuela! Mucha paciencia y dedicación. Perfecta atención.',
      fr: "Merci Kike de m'avoir offert la meilleure expérience à l'école ! Beaucoup de patience et de dévouement. Service parfait.",
    },
    photos: [],
    tags: ['school', 'coaching', 'service'],
  },
  {
    id: 'review-006',
    legacyReviewId: 8,
    name: 'Jorge Orcasita',
    location: '',
    activity: 'kitesurf',
    originalText:
      'Estuve una semana para practicar kitesurf y pude hacerlo sin problemas gracias al equipo que trabaja con la escuela, conocimos el spot principal de Máncora pero en días de poco viento salimos en búsqueda de él así que pudimos navegar!\n\nEl equipo de la escuela es amable y amigable.',
    shortText: 'Una semana de kitesurf con apoyo para encontrar viento y navegar.',
    rating: 5,
    source: 'internal',
    sourceUrl: '',
    permissionStatus: 'internal_note',
    permissionNote: LEGACY_PERMISSION_NOTE,
    collectedAt: COLLECTED_AT,
    originalLanguage: 'es',
    translations: {
      en: "I spent a week practicing kitesurf and had no trouble thanks to the school team. We visited Máncora's main spot, and on low-wind days we went looking for wind, so we still got to ride. The school team is kind and friendly.",
      es: 'Estuve una semana para practicar kitesurf y pude hacerlo sin problemas gracias al equipo de la escuela. Conocimos el spot principal de Máncora, pero en días de poco viento salimos en búsqueda de viento, así que pudimos navegar. El equipo de la escuela es amable y amigable.',
      fr: "J'ai passé une semaine à pratiquer le kitesurf et j'ai pu le faire sans problème grâce à l'équipe de l'école. Nous avons connu le spot principal de Máncora, mais les jours de vent faible nous sommes partis à sa recherche, donc nous avons pu naviguer. L'équipe de l'école est gentille et amicale.",
    },
    photos: [],
    tags: ['kitesurf', 'spot', 'wind'],
  },
  {
    id: 'review-007',
    legacyReviewId: 4,
    name: 'Ruth Espinoza garcia',
    location: '',
    activity: 'trips',
    originalText:
      '“Viajamos en familia y mis hijos adolescentes tomaron clases de kitesurf en Máncora Kite Club. ¡Quedamos fascinados! El trato fue súper amable, todo el equipo fue paciente y motivador con los chicos. El clima es ideal, y el ambiente del club es seguro y acogedor. Además, nos unimos a un kite trip familiar que fue lo más divertido del viaje. Nos llevamos recuerdos inolvidables. Mil gracias al equipo por su dedicación y buena energía.”',
    shortText:
      'Clases de kitesurf y kite trip familiar con un ambiente seguro y acogedor.',
    rating: 5,
    source: 'internal',
    sourceUrl: '',
    permissionStatus: 'internal_note',
    permissionNote: LEGACY_PERMISSION_NOTE,
    collectedAt: COLLECTED_AT,
    originalLanguage: 'es',
    translations: {
      en: 'We traveled as a family and my teenage kids took kitesurf lessons at Mancora Kite Club. We were fascinated! The team was super kind, patient, and motivating with the kids. The weather is ideal, and the club atmosphere is safe and welcoming. We also joined a family kite trip that was the most fun part of the journey. We left with unforgettable memories. Many thanks to the team for their dedication and good energy.',
      es: 'Viajamos en familia y mis hijos adolescentes tomaron clases de Kitesurf en Mancora Kite Club. ¡Quedamos fascinados! El trato fue súper amable, todo el equipo fue paciente y motivador con los chicos. El clima es ideal y el ambiente del club es seguro y acogedor. Además, nos unimos a un kite trip familiar que fue lo más divertido del viaje. Nos llevamos recuerdos inolvidables. Mil gracias al equipo por su dedicación y buena energía.',
      fr: "Nous avons voyagé en famille et mes adolescents ont pris des cours de kitesurf au Máncora Kite Club. Nous avons été fascinés ! L'accueil a été super amical, toute l'équipe a été patiente et motivante avec les enfants. Le climat est idéal et l'ambiance du club est sûre et chaleureuse. De plus, nous avons rejoint un kite trip en famille qui a été la partie la plus amusante du voyage. Nous repartons avec des souvenirs inoubliables. Mille mercis à l'équipe pour leur dévouement et leur bonne énergie.",
    },
    photos: [],
    tags: ['kitesurf', 'lesson', 'trip', 'family'],
  },
  {
    id: 'review-008',
    legacyReviewId: 5,
    name: 'Carlos Bellatin',
    location: '',
    activity: 'kitesurf',
    originalText:
      'Una escuela de Kite muy profesional en el norte del Perú. Saben llevarte a los mejores spots de Kite y Kite surf. Ask for Kike🙌🏼🤙🏼🤙🏼',
    shortText: 'Escuela de kite profesional que conoce los mejores spots del norte del Perú.',
    rating: 5,
    source: 'internal',
    sourceUrl: '',
    permissionStatus: 'internal_note',
    permissionNote: LEGACY_PERMISSION_NOTE,
    collectedAt: COLLECTED_AT,
    originalLanguage: 'es',
    translations: {
      en: 'A very professional Kite school in northern Peru. They know how to take you to the best Kite and Kitesurf spots. Ask for Kike 🙌🏼🤙🏼🤙🏼',
      es: 'Una escuela de Kite muy profesional en el norte del Perú. Saben llevarte a los mejores spots de Kite y Kitesurf. Pregunta por Kike 🙌🏼🤙🏼🤙🏼',
      fr: 'Une école de kite très professionnelle dans le nord du Pérou. Ils savent vous emmener sur les meilleurs spots de kite et de kitesurf. Demandez Kike 🙌🏼🤙🏼🤙🏼',
    },
    photos: [],
    tags: ['kitesurf', 'spots', 'school'],
  },
])

export function getTestimonialsByActivity(activity) {
  if (!activity || activity === 'all') return testimonials

  return testimonials.filter((testimonial) => testimonial.activity === activity)
}

export function getTestimonialsByTag(tag) {
  if (!tag) return testimonials

  return testimonials.filter((testimonial) => testimonial.tags.includes(tag))
}

export default testimonials
