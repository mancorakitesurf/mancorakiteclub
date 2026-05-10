import mancoraImg from "../../assets/imagenes-kitsurfing-lessons/posicionk2.jpg"
import hawaiiImg from "../../assets/imagenes-kitsurfing-lessons/posicionk5.jpg"

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

// Tus funciones toHalfStep, formatScore, getValidatedScores se quedan igual...

export const DESTINATIONS = [
  {
    nameKey: "blogTop20.destinations.mancora.name",
    image: mancoraImg,
    rating: 4.9,
    shortDescKey: "blogTop20.destinations.mancora.short",
    levelKey: "blogTop20.destinations.mancora.level",
    seasonKey: "blogTop20.destinations.mancora.season",
    descKey: "blogTop20.destinations.mancora.desc",
  },
  {
    nameKey: "blogTop20.destinations.waikiki.name",
    image: mancoraImg, // Ajusta tus imagenes
    rating: 3.5,
    shortDescKey: "blogTop20.destinations.waikiki.short",
    levelKey: "blogTop20.destinations.waikiki.level",
    seasonKey: "blogTop20.destinations.waikiki.season",
    descKey: "blogTop20.destinations.waikiki.desc",
  },
  {
    nameKey: "blogTop20.destinations.southBeach.name",
    image: hawaiiImg,
    rating: 4,
    shortDescKey: "blogTop20.destinations.southBeach.short",
    levelKey: "blogTop20.destinations.southBeach.level",
    seasonKey: "blogTop20.destinations.southBeach.season",
    descKey: "blogTop20.destinations.southBeach.desc",
  },
  {
    nameKey: "blogTop20.destinations.copacabana.name",
    image: mancoraImg,
    rating: 3.4,
    shortDescKey: "blogTop20.destinations.copacabana.short",
    levelKey: "blogTop20.destinations.copacabana.level",
    seasonKey: "blogTop20.destinations.copacabana.season",
    descKey: "blogTop20.destinations.copacabana.desc",
  },
  {
    nameKey: "blogTop20.destinations.barceloneta.name",
    image: hawaiiImg,
    rating: 4.2,
    shortDescKey: "blogTop20.destinations.barceloneta.short",
    levelKey: "blogTop20.destinations.barceloneta.level",
    seasonKey: "blogTop20.destinations.barceloneta.season",
    descKey: "blogTop20.destinations.barceloneta.desc",
  },
  {
    nameKey: "blogTop20.destinations.venice.name",
    image: mancoraImg,
    rating: 3,
    shortDescKey: "blogTop20.destinations.venice.short",
    levelKey: "blogTop20.destinations.venice.level",
    seasonKey: "blogTop20.destinations.venice.season",
    descKey: "blogTop20.destinations.venice.desc",
  },
  {
    nameKey: "blogTop20.destinations.patong.name",
    image: hawaiiImg,
    rating: 1.9,
    shortDescKey: "blogTop20.destinations.patong.short",
    levelKey: "blogTop20.destinations.patong.level",
    seasonKey: "blogTop20.destinations.patong.season",
    descKey: "blogTop20.destinations.patong.desc",
  },
  {
    nameKey: "blogTop20.destinations.kuta.name",
    image: mancoraImg,
    rating: 2.3,
    shortDescKey: "blogTop20.destinations.kuta.short",
    levelKey: "blogTop20.destinations.kuta.level",
    seasonKey: "blogTop20.destinations.kuta.season",
    descKey: "blogTop20.destinations.kuta.desc",
  },
  {
    nameKey: "blogTop20.destinations.cancun.name",
    image: hawaiiImg,
    rating: 4.2,
    shortDescKey: "blogTop20.destinations.cancun.short",
    levelKey: "blogTop20.destinations.cancun.level",
    seasonKey: "blogTop20.destinations.cancun.season",
    descKey: "blogTop20.destinations.cancun.desc",
  },
  {
    nameKey: "blogTop20.destinations.amalfi.name",
    image: mancoraImg,
    rating: 2.8,
    shortDescKey: "blogTop20.destinations.amalfi.short",
    levelKey: "blogTop20.destinations.amalfi.level",
    seasonKey: "blogTop20.destinations.amalfi.season",
    descKey: "blogTop20.destinations.amalfi.desc",
  },
  {
    nameKey: "blogTop20.destinations.nice.name",
    image: hawaiiImg,
    rating: 2.0,
    shortDescKey: "blogTop20.destinations.nice.short",
    levelKey: "blogTop20.destinations.nice.level",
    seasonKey: "blogTop20.destinations.nice.season",
    descKey: "blogTop20.destinations.nice.desc",
  },
  {
    nameKey: "blogTop20.destinations.dubrovnik.name",
    image: mancoraImg,
    rating: 3.7,
    shortDescKey: "blogTop20.destinations.dubrovnik.short",
    levelKey: "blogTop20.destinations.dubrovnik.level",
    seasonKey: "blogTop20.destinations.dubrovnik.season",
    descKey: "blogTop20.destinations.dubrovnik.desc",
  },
  {
    nameKey: "blogTop20.destinations.ibiza.name",
    image: hawaiiImg,
    rating: 4.5,
    shortDescKey: "blogTop20.destinations.ibiza.short",
    levelKey: "blogTop20.destinations.ibiza.level",
    seasonKey: "blogTop20.destinations.ibiza.season",
    descKey: "blogTop20.destinations.ibiza.desc",
  },
  {
    nameKey: "blogTop20.destinations.mykonos.name",
    image: mancoraImg,
    rating: 2.7,
    shortDescKey: "blogTop20.destinations.mykonos.short",
    levelKey: "blogTop20.destinations.mykonos.level",
    seasonKey: "blogTop20.destinations.mykonos.season",
    descKey: "blogTop20.destinations.mykonos.desc",
  },
  {
    nameKey: "blogTop20.destinations.acapulco.name",
    image: hawaiiImg,
    rating: 4.3,
    shortDescKey: "blogTop20.destinations.acapulco.short",
    levelKey: "blogTop20.destinations.acapulco.level",
    seasonKey: "blogTop20.destinations.acapulco.season",
    descKey: "blogTop20.destinations.acapulco.desc",
  },
  {
    nameKey: "blogTop20.destinations.monaco.name",
    image: mancoraImg,
    rating: 1.6,
    shortDescKey: "blogTop20.destinations.monaco.short",
    levelKey: "blogTop20.destinations.monaco.level",
    seasonKey: "blogTop20.destinations.monaco.season",
    descKey: "blogTop20.destinations.monaco.desc",
  },
  {
    nameKey: "blogTop20.destinations.myrtle.name",
    image: hawaiiImg,
    rating: 2.4,
    shortDescKey: "blogTop20.destinations.myrtle.short",
    levelKey: "blogTop20.destinations.myrtle.level",
    seasonKey: "blogTop20.destinations.myrtle.season",
    descKey: "blogTop20.destinations.myrtle.desc",
  },
  {
    nameKey: "blogTop20.destinations.santorini.name",
    image: hawaiiImg,
    rating: 1.8,
    shortDescKey: "blogTop20.destinations.santorini.short",
    levelKey: "blogTop20.destinations.santorini.level",
    seasonKey: "blogTop20.destinations.santorini.season",
    descKey: "blogTop20.destinations.santorini.desc",
  },
  {
    nameKey: "blogTop20.destinations.maldives.name",
    image: mancoraImg,
    rating: 3.7,
    shortDescKey: "blogTop20.destinations.maldives.short",
    levelKey: "blogTop20.destinations.maldives.level",
    seasonKey: "blogTop20.destinations.maldives.season",
    descKey: "blogTop20.destinations.maldives.desc",
  },
  {
    nameKey: "blogTop20.destinations.bondi.name",
    image: hawaiiImg,
    rating: 2.3,
    shortDescKey: "blogTop20.destinations.bondi.short",
    levelKey: "blogTop20.destinations.bondi.level",
    seasonKey: "blogTop20.destinations.bondi.season",
    descKey: "blogTop20.destinations.bondi.desc",
  },
  {
    nameKey: "blogTop20.destinations.santaMonica.name",
    image: mancoraImg,
    rating: 4.2,
    shortDescKey: "blogTop20.destinations.santaMonica.short",
    levelKey: "blogTop20.destinations.santaMonica.level",
    seasonKey: "blogTop20.destinations.santaMonica.season",
    descKey: "blogTop20.destinations.santaMonica.desc",
  },
].map((destination) => ({
  ...destination,
  ...getValidatedScores(destination.rating),
}))