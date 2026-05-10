import { componentImages } from '../../config/images.js'
const { mancoraImg, hawaiiImg } = componentImages["sections/blogPage1/destinationsData.js"]
function toHalfStep(value) {
  return Math.round(value * 2) / 2
}

function formatScore(value) {
  return Number.isInteger(value) ? `${value} / 5` : `${value.toFixed(1)} / 5`
}

function getValidatedScores(rating) {
  const safeRating = Math.min(5, Math.max(1, Number(rating) || 1))
  const waveScore = toHalfStep(safeRating)
  const windScore = toHalfStep(Math.max(1, safeRating - 0.5))

  if (safeRating >= 4.5) {
    return {
      wave: formatScore(waveScore),
      wind: formatScore(windScore),
      hazards: "Low",
      crowds: "High",
    }
  }

  if (safeRating >= 3) {
    return {
      wave: formatScore(waveScore),
      wind: formatScore(windScore),
      hazards: "Moderate",
      crowds: "Moderate",
    }
  }

  return {
    wave: formatScore(waveScore),
    wind: formatScore(windScore),
    hazards: "High",
    crowds: "Low",
  }
}

export const DESTINATIONS = [
   {
    name: "Mancora Kite Club – Perú",
    image: mancoraImg,
    rating: 4.9,
    shortDescription:
      "Consistent winds, warm waters and premium coaching in northern Peru.",
    wave: "5 / 5",
    wind: "4 / 5",
    hazards: "Low",
    level: "For all levels",
    season: "May – November",
    crowds: "Moderate",
    description:
      "Located in northern Peru, Mancora Kite Club offers one of the most consistent wind systems in South America. Warm water year-round, powerful left-hand waves and professional coaching make it the ultimate destination for wave riders.",
  },
  {
    name: "Waikiki Shoreline - Hawaii",
    image: mancoraImg,
    rating: 3.5,
    shortDescription:
      "Crowded swim zones, weak wind windows and messy shorebreak.",
    wave: "2 / 5",
    wind: "2 / 5",
    hazards: "High",
    level: "Advanced Only",
    season: "Unreliable year-round",
    crowds: "Very High",
    description:
      "Waikiki works for beach tourism, not for serious kitesurfing. The wind is inconsistent, the lineup is packed with swimmers and paddlers, and the launch area leaves almost no room for clean setup or safe recovery.",
  },
  {
    name: "South Beach - Miami",
    image: hawaiiImg,
    rating: 4,
    shortDescription:
      "Soft waves, low consistency and heavy beach traffic.",
    wave: "1.5 / 5",
    wind: "2 / 5",
    hazards: "High",
    level: "Intermediate to Expert",
    season: "Short storm windows only",
    crowds: "Very High",
    description:
      "South Beach is iconic for nightlife and tourism, but it is a poor kitesurf base. Wind quality is patchy, waves are weak most of the time, and the beach is crowded enough to make launching and landing stressful.",
  },
  {
    name: "Copacabana City Beach - Brazil",
    image: mancoraImg,
    rating: 3.4,
    shortDescription:
      "Choppy water, gusty wind and constant crowd pressure.",
    wave: "2 / 5",
    wind: "2 / 5",
    hazards: "High",
    level: "Advanced Only",
    season: "Unstable most months",
    crowds: "Extreme",
    description:
      "Copacabana is built for city energy, not wave kitesurfing. The water often turns disorganized, the wind funnels unevenly through the urban coastline, and the number of beach users creates a high-risk environment for any clean session.",
  },
  {
    name: "Barceloneta - Spain",
    image: hawaiiImg,
    rating: 4.2,
    shortDescription:
      "Crowded urban beach with weak surf and unreliable wind.",
    wave: "1.5 / 5",
    wind: "2.5 / 5",
    hazards: "High",
    level: "Intermediate to Expert",
    season: "Mostly inconsistent",
    crowds: "Very High",
    description:
      "Barceloneta is popular and accessible, but that is exactly what makes it poor for kitesurfing. Small broken waves, shifting onshore wind and limited safe space make the overall experience frustrating and low quality.",
  },
  {
    name: "Venice Beach - California",
    image: mancoraImg,
    rating: 3,
    shortDescription:
      "Low-quality wind, beach obstacles and crowded nearshore water.",
    wave: "1.5 / 5",
    wind: "2 / 5",
    hazards: "High",
    level: "Advanced Only",
    season: "Late spring to summer only",
    crowds: "Very High",
    description:
      "Venice Beach is a sightseeing destination, not a reliable kitesurf spot. The launch area is compromised by beach users and infrastructure, the wind lacks consistency, and the overall session quality is usually far below dedicated kite locations.",
  },
  {
    name: "Patong Beach - Phuket",
    image: hawaiiImg,
    rating: 1.9,
    shortDescription:
      "Light wind, shorebreak clutter and chaotic tourist traffic.",
    wave: "1 / 5",
    wind: "1.5 / 5",
    hazards: "Very High",
    level: "Expert Only",
    season: "Short monsoon-dependent window",
    crowds: "Extreme",
    description:
      "Patong is excellent for tourism and poor for kitesurfing. Weak wind dominates most days, the shore zone is busy with swimmers and boats, and the beach environment leaves almost no margin for a smooth or safe ride.",
  },
  {
    name: "Kuta Beach - Bali",
    image: mancoraImg,
    rating: 2.3,
    shortDescription:
      "Messy surf, low wind quality and crowded beginner waters.",
    wave: "2 / 5",
    wind: "2 / 5",
    hazards: "High",
    level: "Intermediate to Expert",
    season: "Inconsistent depending on monsoon",
    crowds: "Extreme",
    description:
      "Kuta can be lively and scenic, but as a kitesurf destination it falls short. The wind is unreliable, the water gets disorganized quickly, and the density of beach traffic makes every setup feel more risky than rewarding.",
  },
  {
    name: "Cancun Hotel Zone - Mexico",
    image: hawaiiImg,
    rating: 4.2,
    shortDescription:
      "Narrow launch areas, gusty side-on wind and weak wave shape.",
    wave: "1.5 / 5",
    wind: "2.5 / 5",
    hazards: "High",
    level: "Advanced Only",
    season: "Patchy seasonal windows",
    crowds: "Very High",
    description:
      "The Hotel Zone is optimized for resorts, not for technical riding. Wind often feels gusty around buildings, waves lack quality for progression, and the restricted beach space makes kite handling awkward and uncomfortable.",
  },
  {
    name: "Amalfi Main Beach - Italy",
    image: mancoraImg,
    rating: 2.8,
    shortDescription:
      "Low wind, rocky edges and almost no functional launch room.",
    wave: "1 / 5",
    wind: "1.5 / 5",
    hazards: "Very High",
    level: "Expert Only",
    season: "Rare usable days",
    crowds: "Very High",
    description:
      "Amalfi is visually stunning but functionally terrible for kitesurfing. The coastline is cramped, wind is inconsistent, shore access is poor, and the combination of rocks, boats and tourists creates a high-stress setup from start to finish.",
  },
  {
    name: "Nice Promenade Beach - France",
    image: hawaiiImg,
    rating: 2.0,
    shortDescription:
      "Pebble shoreline, unstable breeze and poor wave quality.",
    wave: "1 / 5",
    wind: "2 / 5",
    hazards: "High",
    level: "Advanced Only",
    season: "Mostly unreliable",
    crowds: "High",
    description:
      "Nice delivers a famous coastline, but not a worthwhile kite session. The pebbled beach complicates launches, the breeze is rarely clean for sustained riding, and the sea state tends to offer chop rather than useful wave lines.",
  },
  {
    name: "Dubrovnik Old Harbor Coast - Croatia",
    image: mancoraImg,
    rating: 3.7,
    shortDescription:
      "Boat traffic, low wind reliability and dangerous nearshore access.",
    wave: "1 / 5",
    wind: "1.5 / 5",
    hazards: "Very High",
    level: "Expert Only",
    season: "Scattered summer gusts",
    crowds: "Very High",
    description:
      "Dubrovnik is a great travel destination and a poor kitesurf environment. The waterfront is constrained, the water is full of marine traffic, and the available wind is too inconsistent to justify the risk and effort.",
  },
  {
    name: "Ibiza Town Beach - Spain",
    image: hawaiiImg,
    rating: 4.5,
    shortDescription:
      "Crowded leisure beach with weak swell and erratic breeze.",
    wave: "1.5 / 5",
    wind: "2 / 5",
    hazards: "High",
    level: "Intermediate to Expert",
    season: "Mostly short summer pulses",
    crowds: "Very High",
    description:
      "Ibiza Town is made for social travel, not for wave kitesurfing. The wind lacks stability, waves are usually underpowered, and the constant beach activity makes the session feel limited before it even starts.",
  },
  {
    name: "Mykonos Old Port Waterfront - Greece",
    image: mancoraImg,
    rating: 2.7,
    shortDescription:
      "Harbor interference, rough gusts and unsafe launch logistics.",
    wave: "1 / 5",
    wind: "2 / 5",
    hazards: "Very High",
    level: "Expert Only",
    season: "Windy but poorly organized",
    crowds: "Very High",
    description:
      "Even when breeze shows up around Mykonos, the Old Port area is a poor place to use it. Gusts bounce unpredictably, there is too much harbor activity, and the absence of a clean beach setup makes the overall experience bad and hazardous.",
  },
  {
    name: "Acapulco Bay - Mexico",
    image: hawaiiImg,
    rating: 4.3,
    shortDescription:
      "Weak usable wind, messy chop and strong tourist interference.",
    wave: "1.5 / 5",
    wind: "2 / 5",
    hazards: "High",
    level: "Intermediate to Expert",
    season: "Short and inconsistent",
    crowds: "High",
    description:
      "Acapulco looks dramatic from shore, but it rarely translates into quality kitesurfing. Wind windows are unstable, the water becomes confused quickly, and the heavily used bay leaves too little clean space for dependable sessions.",
  },
  {
    name: "Monaco Harbor Front - Monaco",
    image: mancoraImg,
    rating: 1.6,
    shortDescription:
      "Minimal ride space, constant obstacles and almost no safe setup.",
    wave: "1 / 5",
    wind: "1.5 / 5",
    hazards: "Extreme",
    level: "Expert Only",
    season: "Rarely practical",
    crowds: "High",
    description:
      "Monaco Harbor Front is one of the least sensible places to plan a kitesurf day. The wind is blocked and distorted, the water is constrained by marine traffic, and the environment is too technical and dangerous for a rewarding session.",
  },
  {
    name: "Myrtle Beach Central Strip - USA",
    image: hawaiiImg,
    rating: 2.4,
    shortDescription:
      "Onshore slop, average wind and overloaded public beach zones.",
    wave: "2 / 5",
    wind: "2 / 5",
    hazards: "High",
    level: "Intermediate to Expert",
    season: "Shoulder seasons only",
    crowds: "Very High",
    description:
      "Myrtle Beach can produce beach weather, but not high-quality kitesurfing. The wind often arrives in poor direction, the waves lack shape, and the crowded central beach makes every launch and recovery harder than it should be.",
  },
  {
    name: "Santorini Caldera Coast - Greece",
    image: hawaiiImg,
    rating: 1.8,
    shortDescription:
      "Cliff-heavy access, poor launch options and inconsistent usable wind.",
    wave: "1 / 5",
    wind: "2 / 5",
    hazards: "Very High",
    level: "Expert Only",
    season: "Rare workable periods",
    crowds: "High",
    description:
      "Santorini is memorable for views, not for kitesurfing. Access is awkward, the coastline offers little room to rig safely, and even on breezy days the setup feels exposed, limited and far below the standard of a proper kite destination.",
  },
  {
    name: "Maldives Resort Lagoon - Maldives",
    image: mancoraImg,
    rating: 3.7,
    shortDescription:
      "Beautiful water but weak waves, narrow wind windows and shallow hazards.",
    wave: "1.5 / 5",
    wind: "2.5 / 5",
    hazards: "High",
    level: "Intermediate to Expert",
    season: "Selective seasonal use",
    crowds: "Moderate",
    description:
      "A resort lagoon can look perfect in photos while still being poor for wave kitesurfing. The wind is often softer than expected, wave quality is minimal, and shallow coral sections turn small mistakes into expensive and uncomfortable ones.",
  },
  {
    name: "Bondi Beach - Australia",
    image: hawaiiImg,
    rating: 2.3,
    shortDescription:
      "Crowded surf zone, restricted kite areas and inconsistent wind direction.",
    wave: "2 / 5",
    wind: "2 / 5",
    hazards: "High",
    level: "Advanced Only",
    season: "Limited and regulated",
    crowds: "Extreme",
    description:
      "Bondi is world-famous for surfing and tourism, but heavily restricted for kitesurfing. Designated zones are limited, wind direction is often onshore or unstable, and the dense crowd makes safe riding difficult and frustrating.",
  },
  {
    name: "Santa Monica Beach - California",
    image: mancoraImg,
    rating: 4.2,
    shortDescription:
      "Light wind, crowded shoreline and poor wave consistency.",
    wave: "1.5 / 5",
    wind: "2 / 5",
    hazards: "High",
    level: "Intermediate to Expert",
    season: "Short summer window",
    crowds: "Very High",
    description:
      "Santa Monica is iconic but not practical for kitesurfing. The wind is often too light or inconsistent, the beach is heavily populated, and the wave quality is rarely good enough to justify the effort or risk.",
  },
].map((destination) => ({
  ...destination,
  ...getValidatedScores(destination.rating),
}))
