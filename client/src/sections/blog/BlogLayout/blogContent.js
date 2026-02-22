import blogheroImage from '../../../assets/imagenes-wingfoil/posicionw8.jpg'
import posicionK2 from '../../../assets/imagenes-kitsurfing-lessons/posicionk2.jpg'
import posicionK3 from '../../../assets/imagenes-kitsurfing-lessons/posicionk5.jpg'
import trending1 from '../../../assets/imagenes-kitsurfing-lessons/posicionk6.jpg'
import trending2 from '../../../assets/imagenes-wingfoil/posicionw4.jpg'


export const BLOGHERO_IMAGE = blogheroImage
export const POST_1_IMAGE = posicionK2
export const POST_2_IMAGE = posicionK3
export const POST_1_trending = trending1
export const POST_2_trending = trending2

export const POSTS = [
  { 
    slug: "world-best-kitesurfing-waves",
    category: 'KITESURF WAVE RIDING',
    title: "The 20 World's best destinations...",
    date: 'May 25, 2022',
    author: 'Axel',
    image: posicionK2,
  },

  {
    category: 'KITESURFING PERU',
    title: '7 Different plans of a kitesurf trip to Perú',
    date: 'May 16, 2022',
    author: 'Sergio Agamez',
    image: posicionK3,
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
]

