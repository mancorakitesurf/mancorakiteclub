// HERO
import heroKite from '../../assets/imagenes-kitesurfing/posicionkt1.jpg'
// INTRO
import introKite from '../../assets/imagenes-kitesurfing/posicionkt2.jpg'
// PRICING IMAGES
import introClassImg from '../../assets/imagenes-kitesurfing/posicionkt3.jpg'
import fundamentalClassImg from '../../assets/imagenes-kitesurfing/posicionkt4.jpg'
import introClassImgHover from '../../assets/imagenes-kitesurfing/posicionkt8.jpg'
import advanceClassImg from '../../assets/imagenes-kitesurfing/posicionkt7.jpg'
import masterClassImg from '../../assets/imagenes-kitesurfing/posicionkt6.jpg'

// GALLERY FINAL (prototipo con repetidas)
import gallery1 from '../../assets/imagenes-wingfoil/posicionw1.jpg'
import gallery2 from '../../assets/imagenes-wingfoil/posicionw2.jpg'
import gallery3 from '../../assets/imagenes-wingfoil/posicionw4.jpg'
import gallery4 from '../../assets/imagenes-wingfoil/posicionw5.jpg'
import gallery5 from '../../assets/imagenes-wingfoil/posicionw1.jpg'
import gallery6 from '../../assets/imagenes-wingfoil/posicionw2.jpg'
import gallery7 from '../../assets/imagenes-wingfoil/posicionw4.jpg'
import gallery8 from '../../assets/imagenes-wingfoil/posicionw5.jpg'
import gallery9 from '../../assets/imagenes-home/posicion22.png'
import gallery10 from '../../assets/imagenes-home/posicion14y27.jpg'
import gallery11 from '../../assets/imagenes-home/posicion13.jpg'

/* ===========================
   HERO SECTION
=========================== */
export const CLASSES_HERO = {
  title: "KITESURF AND WINGFOIL IN THE CLUB",
  subtitle: "Private and small-group sessions without accommodation.",
  image: heroKite
}

/* ===========================
   INTRO SECTION
=========================== */
export const CLASSES_INTRO = {
  title: "Learn Kitesurf in The Club",
  text: "The first time someone was seen practicing wingfoil was in 2019, when Robby Naish appeared in Hawaii on a board with a foil and handling a wing. Those images caused so much emotion that in a few months we began to see videos and photos on all social networks of different types of wings and people practicing this strange sport. Well, it hasn't been long before we can see the rise of this sport and see countless sails all over the beaches and lakes. Without a doubt a sport that will leave many fans.",
  image: introKite
}

/* ===========================
   PRIVATE CLASSES (PRICING)
=========================== */
export const PRIVATE_CLASSES = [
  {
    id: "intro",
    title: "Introductory Class",
    duration: "1 day | 2 hours/day",
    price: "$120 / person",
    image: introClassImg,
    hoverImage: introClassImgHover,
    features: [
      "Ideal for first experience",
      "Personalized instruction",
      "All premium equipment included",
      "Support via walkie-talkie"
    ]
  },
  {
    id: "fundamental",
    title: "Fundamental Class",
    duration: "3 days | 2 hours/day",
    price: "$350 / person",
    image: fundamentalClassImg,
    hoverImage: introClassImgHover,
    features: [
      "Designed by old instructors",
      "Personalized progression",
      "Premium equipment included",
      "Professional photo during class"
    ]
  },
  {
    id: "advance",
    title: "Advance Class",
    duration: "3 days | 3 hours/day",
    price: "$500 / person",
    image: advanceClassImg,
    hoverImage: introClassImgHover,
    features: [
      "Focused on advanced technique",
      "More practice time",
      "Video recording & analysis",
      "Optional drone shots"
    ]
  },
  {
    id: "master",
    title: "Comprehensive Masterclass",
    duration: "5 days | Flexible schedule",
    price: "$600 / person",
    image: masterClassImg,
    hoverImage: introClassImgHover,
    featured: true,
    features: [
      "Complete program",
      "Detailed technique analysis",
      "Performance tracking",
      "Final evaluation session"
    ]
  }
]

/* ===========================
   Benefits Section
=========================== */
export const CLASSES_BENEFITS = [
  "Guaranteed Quality – Certified instructors with extensive experience.",
  "Vanguard Team – Latest technologies in wings and boards.",
  "Priority Security – Small groups and constant support.",
  "Unforgettable memories – Professional visual material.",
  "Total Flexibility – Programs adapted to your needs."
]

/* ===========================
   FINAL GALLERY SECTION
=========================== */
export const CLASSES_GALLERY = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11
]
