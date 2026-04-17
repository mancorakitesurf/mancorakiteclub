import blogheroImage from '../../../assets/imagenes-wingfoil/posicionw8.jpg'
import posicionK1 from '../../../assets/imagenes-kitsurfing-lessons/posicionk1.jpg'
import posicionK2 from '../../../assets/imagenes-kitsurfing-lessons/posicionk2.jpg'
import posicionK3 from '../../../assets/imagenes-kitsurfing-lessons/posicionk5.jpg'
import posicionK4 from '../../../assets/imagenes-kitsurfing-lessons/posicionk4.jpg'
import posicionK6 from '../../../assets/imagenes-kitsurfing-lessons/posicionk6.jpg'
import trending1 from '../../../assets/imagenes-kitsurfing-lessons/posicionk6.jpg'
import trending2 from '../../../assets/imagenes-wingfoil/posicionw4.jpg'
import BlogPage1 from '../../../pages/blog/top-20-kitesurf-destinations-part-1.jsx'
import BlogPage2 from '../../../pages/blog/7-different-plans-of-a-kitesurf-trip-to-peru.jsx'
import BlogPage3 from '../../../pages/blog/chicama-Longest-Wave-SurfTrip.jsx'
import BlogPage4 from '../../../pages/blog/mancora-vs-lobitos-vs-cabo-blanco-wave-kitesurf-comparison.jsx' 
import BlogPage5 from '../../../pages/blog/peru-kitesurf-north-vs-south-spots-seasons-wind.jsx' 
import BlogPage6 from '../../../pages/blog/pacasmayo-peru-the-ultimate-point-break-surf-guide.jsx'
import BlogPage7 from '../../../pages/blog/why-mancora-is-different-kitesurf-wave-progression-guide.jsx'
import BlogPage8 from '../../../pages/blog/7-Nights-in-Mancora-Progression-Plan7-Nights-in-Mancora-Progression-Plan.jsx'
import BlogPage9 from '../../../pages/blog/Techniques-for-kitesurfing-in-waves-reading-the-swell-timing-and-control-(intermediate level).jsx'
import BlogPage10 from '../../../pages/blog/Typical-mistakes-of-the-intermediate-rider-in-waves-and-how-to-correct-them-(real-coaching).jsx'
import BlogPage11 from '../../../pages/blog/Kite-Safari-Northern-Peru.jsx'
import BlogPage12 from '../../../pages/blog/Whale-season-in-northern-Peru-what-its-like-to-sail-with-whales-and-when-it-happens.jsx'
import BlogPage13 from '../../../pages/blog/Mancora-Whale-Season.jsx'
import BlogPage14 from '../../../pages/blog/Wingfoil-vs-Kitesurf-Choosing-Your-Weapon.jsx'
import BlogPage15 from '../../../pages/blog/Data-Strip-Safety.jsx'
import posicionW1 from '../../../assets/imagenes-wingfoil/posicionw1.jpg'
import posicionW2 from '../../../assets/imagenes-wingfoil/posicionw2.jpg'
import posicionW5 from '../../../assets/imagenes-wingfoil/posicionw5.jpg'
import posicionW6 from '../../../assets/imagenes-wingfoil/posicionw6.jpg'
import posicionW7 from '../../../assets/imagenes-wingfoil/posicionw7.jpg'

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
  },
  {
    slug: "7-Nights-in-Mancora-Progression-Plan",
    category: 'PROGRESSION',
    title: '7 Nights in Máncora: Progression Plan',
    date: 'June 10, 2023',
    author: 'Axel',
    image: posicionW1,
    component: BlogPage8,
  },
  {
    slug: "Techniques-for-kitesurfing-in-waves-reading-the-swell-timing-and-control-(intermediate level)",
    category: 'TECHNIQUE',
    title: 'Techniques for kitesurfing in waves: reading the swell, timing and control',
    date: 'July 5, 2023',
    author: 'Sergio Agamez',
    image: posicionK1,
    component: BlogPage9,
  },
  {
    slug: "Typical-mistakes-of-the-intermediate-rider-in-waves-and-how-to-correct-them-(real-coaching)",
    category: 'COACHING',
    title: 'Typical mistakes of the intermediate rider in waves and how to correct them',
    date: 'August 12, 2023',
    author: 'Axel',
    image: posicionK4,
    component: BlogPage10,
  },
  {
    slug: "Kite-Safari-Northern-Peru",
    category: 'EXPEDITIONS',
    title: 'Kite Safari Northern Peru — Expedition Series',
    date: 'September 3, 2023',
    author: 'Sergio Agamez',
    image: posicionW5,
    component: BlogPage11,
  },
  {
    slug: "Whale-Season-in-Northern-Peru",
    category: 'LIFESTYLE',
    title: 'Whale Season in Northern Peru: sail with whales',
    date: 'October 1, 2023',
    author: 'Axel',
    image: posicionW6,
    component: BlogPage12,
  },
  {
    slug: "Mancora-Whale-Season",
    category: 'LIFESTYLE',
    title: 'Mancora Whale Season — The Kinetic Tide',
    date: 'October 20, 2023',
    author: 'Sergio Agamez',
    image: posicionW7,
    component: BlogPage13,
  },
  {
    slug: "Wingfoil-vs-Kitesurf-Choosing-Your-Weapon",
    category: 'WINGFOIL',
    title: 'Wingfoil vs Kitesurf: Choosing Your Weapon',
    date: 'November 15, 2023',
    author: 'Axel',
    image: posicionW2,
    component: BlogPage14,
  },
  {
    slug: "Safety-and-Progression-The-Technical-Edge",
    category: 'SAFETY',
    title: 'Safety & Progression: The Technical Edge',
    date: 'December 5, 2023',
    author: 'Sergio Agamez',
    image: posicionK6,
    component: BlogPage15,
  },
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

