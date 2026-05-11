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
import gallery12 from '../../assets/imagenes-home/posicion13.jpg'

/* ===========================
  HERO SECTION
=========================== */
export const CLASSES_HERO = {
  title: "classesPage.hero.title",
  subtitle: "classesPage.hero.subtitle",
  image: heroKite
}

/* ===========================
  INTRO SECTION
=========================== */
export const CLASSES_INTRO = {
  title: "classesPage.intro.title",
  text: "classesPage.intro.text",
  image: introKite
}

/* ===========================
  PRIVATE CLASSES (PRICING)
=========================== */
export const PRIVATE_CLASSES = [
  {
    id: "intro",
    title: "classesPage.pricing.intro.title",
    duration: "classesPage.pricing.intro.duration",
    price: "classesPage.pricing.intro.price",
    image: introClassImg,
    hoverImage: introClassImgHover,
    features: [
      "classesPage.pricing.intro.features.0",
      "classesPage.pricing.intro.features.1",
      "classesPage.pricing.intro.features.2",
      "classesPage.pricing.intro.features.3"
    ]
  },
  {
    id: "fundamental",
    title: "classesPage.pricing.fundamental.title",
    duration: "classesPage.pricing.fundamental.duration",
    price: "classesPage.pricing.fundamental.price",
    image: fundamentalClassImg,
    hoverImage: introClassImgHover,
    features: [
      "classesPage.pricing.fundamental.features.0",
      "classesPage.pricing.fundamental.features.1",
      "classesPage.pricing.fundamental.features.2",
      "classesPage.pricing.fundamental.features.3"
    ]
  },
  {
    id: "advance",
    title: "classesPage.pricing.advance.title",
    duration: "classesPage.pricing.advance.duration",
    price: "classesPage.pricing.advance.price",
    image: advanceClassImg,
    hoverImage: introClassImgHover,
    features: [
      "classesPage.pricing.advance.features.0",
      "classesPage.pricing.advance.features.1",
      "classesPage.pricing.advance.features.2",
      "classesPage.pricing.advance.features.3"
    ]
  },
  {
    id: "master",
    title: "classesPage.pricing.master.title",
    duration: "classesPage.pricing.master.duration",
    price: "classesPage.pricing.master.price",
    image: masterClassImg,
    hoverImage: introClassImgHover,
    featured: true,
    features: [
      "classesPage.pricing.master.features.0",
      "classesPage.pricing.master.features.1",
      "classesPage.pricing.master.features.2",
      "classesPage.pricing.master.features.3"
    ]
  }
]

/* ===========================
  Benefits Section
=========================== */
export const CLASSES_BENEFITS = [
  "classesPage.benefits.item1",
  "classesPage.benefits.item2",
  "classesPage.benefits.item3",
  "classesPage.benefits.item4",
  "classesPage.benefits.item5"
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
  gallery11,
  gallery12
]
