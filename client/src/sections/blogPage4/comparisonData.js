import { componentImages } from '../../config/images.js'
const { mancoraImg, lobitosImg, caboImg } = componentImages["sections/blogPage4/comparisonData.js"]
export const SPOTS = [
  {
    name: "Mancora",
    image: mancoraImg,
    rating: "4.9",
    wind: "Consistent",
    waves: "Fun & progressive",
    level: "All levels",
    vibe: "Lifestyle + Comfort",
    highlight: true,
    description:
      "Warm water, consistent wind and a perfect balance between progression and lifestyle. Ideal for riders who want to improve while enjoying the full experience."
  },
  {
    name: "Lobitos",
    image: lobitosImg,
    rating: "4.6",
    wind: "Strong",
    waves: "Powerful & hollow",
    level: "Intermediate / Advanced",
    vibe: "Raw & remote",
    description:
      "A raw desert setup with strong winds and powerful waves. Perfect for experienced riders looking for intensity."
  },
  {
    name: "Cabo Blanco",
    image: caboImg,
    rating: "4.7",
    wind: "Inconsistent",
    waves: "World-class",
    level: "Advanced surfers",
    vibe: "Exclusive & rare",
    description:
      "Legendary surf wave but not ideal for kitesurfing. Wind conditions are inconsistent, making it a rare experience."
  }
]