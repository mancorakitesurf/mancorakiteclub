import blogheroImage from '../../../assets/imagenes-wingfoil/posicionw8.jpg'
import posicionK2 from '../../../assets/imagenes-kitsurfing-lessons/posicionk2.jpg'
import posicionK3 from '../../../assets/imagenes-kitsurfing-lessons/posicionk5.jpg'
import trending1 from '../../../assets/imagenes-kitsurfing-lessons/posicionk6.jpg'
import trending2 from '../../../assets/imagenes-wingfoil/posicionw4.jpg'
import BlogPage1 from '../../../pages/blog/top-20-kitesurf-destinations-part-1.jsx'
import BlogPage2 from '../../../pages/blog/7-different-plans-of-a-kitesurf-trip-to-peru.jsx'
import BlogPage3 from '../../../pages/blog/chicama-Longest-Wave-SurfTrip.jsx'
import BlogPage4 from '../../../pages/blog/mancora-vs-lobitos-vs-cabo-blanco-wave-kitesurf-comparison.jsx' 
import BlogPage5 from '../../../pages/blog/peru-kitesurf-north-vs-south-spots-seasons-wind.jsx' 
import BlogPage6 from '../../../pages/blog/pacasmayo-peru-the-ultimate-point-break-surf-guide.jsx'
import BlogPage7 from '../../../pages/blog/why-mancora-is-different-kitesurf-wave-progression-guide.jsx'

export const BLOGHERO_IMAGE = blogheroImage
export const POST_1_IMAGE = posicionK2
export const POST_2_IMAGE = posicionK3
export const POST_1_trending = trending1
export const POST_2_trending = trending2

export const POSTS = [
  {
    slug: "top-20-kitesurf-destinations-part-1",
    title: "The 20 World's best destinations...",
    category: "KITESURF WAVE RIDING",
    date: "May 25, 2022",
    author: "Axel",
    image: posicionK2,
    component: BlogPage1,
  },
  {
    slug: "7-different-plans-of-a-kitesurf-trip-to-peru",
    title: "7 Different Plans of a Kitesurf Trip to Perú",
    category: "KITESURFING PERU",
    date: "May 16, 2022",
    author: "Sergio Agamez",
    image: posicionK3,
    component: BlogPage2,
  },
  {
    slug: "chicama-peru-surf-trip",
    title: "Chicama, Peru: The Longest Wave in the World + How to Build the Ultimate Surf Trip",
    category: "SURFING PERU",
    date: "June 10, 2024",
    author: "Axel",
    image: BLOGHERO_IMAGE,
    component: BlogPage3,
  },
  {   slug: "mancora-vs-lobitos-vs-cabo-blanco",
      title: "Mancora vs Lobitos vs Cabo Blanco: Best Wave Kitesurf Spot in Peru",
      category: "KITESURFING PERU",
      date: "June 20, 2024",
      author: "Sergio Agamez",
      image: BLOGHERO_IMAGE,
      component: BlogPage4,
  },
  {
    slug: "peru-kitesurf-north-vs-south",
    title: "Peru Kitesurf: North vs South — Spots, Seasons & Wind Guide",
    category: "KITESURFING PERU",
    date: "June 30, 2024",
    author: "Miguelo",
    image: BLOGHERO_IMAGE,
    component: BlogPage5,
  },
  {
    slug: "pacasmayo-peru-the-ultimate-point-break-surf-guide",
    title: "Pacasmayo, Peru: The Ultimate Point Break Surf Guide",
    category: "SURFING PERU",
    date: "July 10, 2024", 
    author: "Axel",
    image: BLOGHERO_IMAGE,
    component: BlogPage6,
  },
  {
    slug: "why-mancora-is-different-kitesurf-wave-progression-guide",
    title: "Why Mancora is Different: Kitesurf Wave Progression Guide",
    category: "KITESURFING PERU",
    date: "July 20, 2024",
    author: "Sergio Agamez",
    image: BLOGHERO_IMAGE,
    component: BlogPage7,
  }
]

export const TRENDING_POSTS = [
  {
    title: "The 20 World's best destinations for kitesurfing waves",
    image: trending1,
    alt: 'Kitesurfing wave destination',
  },
  {
    title: 'The guide of the best Kitesurfing Spots in Peru',
    image: trending2,
    alt: 'Kitesurfing in Peru',
  },
  {
    title: "Chicama, Peru: The Longest Wave in the World + How to Build the Ultimate Surf Trip",
    image: BLOGHERO_IMAGE,
    alt: 'Chicama surf trip',
  },
{   title: "Mancora vs Lobitos vs Cabo Blanco: Best Wave Kitesurf Spot in Peru",
    image: BLOGHERO_IMAGE,
    alt: 'Mancora vs Lobitos vs Cabo Blanco',
  },
  {
    title: "Peru Kitesurf: North vs South — Spots, Seasons & Wind Guide",
    image: BLOGHERO_IMAGE,
    alt: 'Peru Kitesurf North vs South',  
  },
  {
    title: "Pacasmayo, Peru: The Ultimate Point Break Surf Guide",
    image: BLOGHERO_IMAGE,
    alt: 'Pacasmayo surf guide',  
  },
  {
    title: "Why Mancora is Different: Kitesurf Wave Progression Guide",
    image: BLOGHERO_IMAGE,
    alt: 'Mancora wave progression guide',  
  },  
]

