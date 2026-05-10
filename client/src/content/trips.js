import firstFlyHero from '../assets/fotos trip/_DSC8071.webp'
import firstFlyImg1 from '../assets/fotos trip/DSC04250.webp'
import firstFlyImg2 from '../assets/fotos trip/DSC01083.webp'

import olasHero from '../assets/fotos paquetes surf y hotel/DSC05544.webp'
import olasImg1 from '../assets/fotos mancora y mas/DSC03697.webp'
import olasImg2 from '../assets/fotos mancora y mas/DSC05505 2.webp'

import soloSurfHero from '../assets/fotos mancora y mas/IMG_3893.webp'
import soloSurfImg1 from '../assets/fotos trip/DSC03805.webp'
import soloSurfImg2 from '../assets/fotos mancora y mas/DSC09961.webp'

import rideHero from '../assets/HOSPEDAJE KITE HOUSE/DSC05173.webp'
import rideImg1 from '../assets/fotos clases/DSC02370.webp'
import rideImg2 from '../assets/fotos trip/DSC03756.webp'

export const trips = [
  {
    slug: 'first-fly',
    path: '/trips/first-fly',
    title: 'tripsData.firstFly.title',
    subtitle: 'tripsData.firstFly.subtitle',
    summary: 'tripsData.firstFly.summary',
    heroImage: firstFlyHero,
    heroAlt: 'tripsData.firstFly.heroAlt',
    image1: firstFlyImg1,
    image2: firstFlyImg2,
    whatsappMessage: 'tripsData.firstFly.whatsappMessage',
    forYouIf: [
      'tripsData.firstFly.forYouIf.0',
      'tripsData.firstFly.forYouIf.1',
      'tripsData.firstFly.forYouIf.2',
    ],
    includes: [
      'tripsData.firstFly.includes.0',
      'tripsData.firstFly.includes.1',
      'tripsData.firstFly.includes.2',
      'tripsData.firstFly.includes.3',
      'tripsData.firstFly.includes.4',
      'tripsData.firstFly.includes.5',
      'tripsData.firstFly.includes.6',
    ],
    durations: ['tripsData.firstFly.durations.0', 'tripsData.firstFly.durations.1', 'tripsData.firstFly.durations.2'],
    pricing: {
      onePerson: { threeNights: 646, sevenNights: 1342 },
      twoPeople: { threeNights: 994, sevenNights: 1970 },
    },
    addOns: ['tripsData.firstFly.addOns.0', 'tripsData.firstFly.addOns.1', 'tripsData.firstFly.addOns.2'],
    faq: [
      { question: 'tripsData.firstFly.faq.0.question', answer: 'tripsData.firstFly.faq.0.answer' },
      { question: 'tripsData.firstFly.faq.1.question', answer: 'tripsData.firstFly.faq.1.answer' },
      { question: 'tripsData.firstFly.faq.2.question', answer: 'tripsData.firstFly.faq.2.answer' },
      { question: 'tripsData.firstFly.faq.3.question', answer: 'tripsData.firstFly.faq.3.answer' },
    ],
  },
  {
    slug: 'olas-y-viento',
    path: '/trips/olas-y-viento',
    title: 'tripsData.olasViento.title',
    subtitle: 'tripsData.olasViento.subtitle',
    summary: 'tripsData.olasViento.summary',
    heroImage: olasHero,
    heroAlt: 'tripsData.olasViento.heroAlt',
    image1: olasImg1,
    image2: olasImg2,
    whatsappMessage: 'tripsData.olasViento.whatsappMessage',
    forYouIf: [
      'tripsData.olasViento.forYouIf.0',
      'tripsData.olasViento.forYouIf.1',
      'tripsData.olasViento.forYouIf.2',
    ],
    includes: [
      'tripsData.olasViento.includes.0',
      'tripsData.olasViento.includes.1',
      'tripsData.olasViento.includes.2',
      'tripsData.olasViento.includes.3',
      'tripsData.olasViento.includes.4',
      'tripsData.olasViento.includes.5',
      'tripsData.olasViento.includes.6',
    ],
    durations: ['tripsData.olasViento.durations.0', 'tripsData.olasViento.durations.1', 'tripsData.olasViento.durations.2'],
    pricing: {
      onePerson: { threeNights: 718, sevenNights: 1342 },
      twoPeople: { threeNights: 1094, sevenNights: 1970 },
    },
    addOns: ['tripsData.olasViento.addOns.0', 'tripsData.olasViento.addOns.1', 'tripsData.olasViento.addOns.2'],
    faq: [
      { question: 'tripsData.olasViento.faq.0.question', answer: 'tripsData.olasViento.faq.0.answer' },
      { question: 'tripsData.olasViento.faq.1.question', answer: 'tripsData.olasViento.faq.1.answer' },
      { question: 'tripsData.olasViento.faq.2.question', answer: 'tripsData.olasViento.faq.2.answer' },
      { question: 'tripsData.olasViento.faq.3.question', answer: 'tripsData.olasViento.faq.3.answer' },
    ],
  },
  {
    slug: 'solo-surf',
    path: '/trips/solo-surf',
    title: 'tripsData.soloSurf.title',
    subtitle: 'tripsData.soloSurf.subtitle',
    summary: 'tripsData.soloSurf.summary',
    heroImage: soloSurfHero,
    heroAlt: 'tripsData.soloSurf.heroAlt',
    image1: soloSurfImg1,
    image2: soloSurfImg2,
    whatsappMessage: 'tripsData.soloSurf.whatsappMessage',
    forYouIf: [
      'tripsData.soloSurf.forYouIf.0',
      'tripsData.soloSurf.forYouIf.1',
      'tripsData.soloSurf.forYouIf.2',
    ],
    includes: [
      'tripsData.soloSurf.includes.0',
      'tripsData.soloSurf.includes.1',
      'tripsData.soloSurf.includes.2',
      'tripsData.soloSurf.includes.3',
      'tripsData.soloSurf.includes.4',
      'tripsData.soloSurf.includes.5',
    ],
    durations: ['tripsData.soloSurf.durations.0', 'tripsData.soloSurf.durations.1', 'tripsData.soloSurf.durations.2'],
    pricing: {
      onePerson: { threeNights: 300, sevenNights: 900 },
      twoPeople: { threeNights: 480, sevenNights: 1368 },
    },
    addOns: ['tripsData.soloSurf.addOns.0', 'tripsData.soloSurf.addOns.1', 'tripsData.soloSurf.addOns.2'],
    faq: [
      { question: 'tripsData.soloSurf.faq.0.question', answer: 'tripsData.soloSurf.faq.0.answer' },
      { question: 'tripsData.soloSurf.faq.1.question', answer: 'tripsData.soloSurf.faq.1.answer' },
      { question: 'tripsData.soloSurf.faq.2.question', answer: 'tripsData.soloSurf.faq.2.answer' },
      { question: 'tripsData.soloSurf.faq.3.question', answer: 'tripsData.soloSurf.faq.3.answer' },
    ],
  },
  {
    slug: 'ride-the-coast',
    path: '/trips/ride-the-coast',
    title: 'tripsData.rideCoast.title',
    subtitle: 'tripsData.rideCoast.subtitle',
    summary: 'tripsData.rideCoast.summary',
    heroImage: rideHero,
    heroAlt: 'tripsData.rideCoast.heroAlt',
    image1: rideImg1,
    image2: rideImg2,
    whatsappMessage: 'tripsData.rideCoast.whatsappMessage',
    forYouIf: [
      'tripsData.rideCoast.forYouIf.0',
      'tripsData.rideCoast.forYouIf.1',
      'tripsData.rideCoast.forYouIf.2',
    ],
    includes: [
      'tripsData.rideCoast.includes.0',
      'tripsData.rideCoast.includes.1',
      'tripsData.rideCoast.includes.2',
      'tripsData.rideCoast.includes.3',
      'tripsData.rideCoast.includes.4',
      'tripsData.rideCoast.includes.5',
      'tripsData.rideCoast.includes.6',
      'tripsData.rideCoast.includes.7',
    ],
    durations: ['tripsData.rideCoast.durations.0', 'tripsData.rideCoast.durations.1', 'tripsData.rideCoast.durations.2'],
    pricing: {
      onePerson: { threeNights: 406, sevenNights: 1050 },
      twoPeople: { threeNights: 726, sevenNights: 1778 },
    },
    addOns: ['tripsData.rideCoast.addOns.0', 'tripsData.rideCoast.addOns.1', 'tripsData.rideCoast.addOns.2'],
    faq: [
      { question: 'tripsData.rideCoast.faq.0.question', answer: 'tripsData.rideCoast.faq.0.answer' },
      { question: 'tripsData.rideCoast.faq.1.question', answer: 'tripsData.rideCoast.faq.1.answer' },
      { question: 'tripsData.rideCoast.faq.2.question', answer: 'tripsData.rideCoast.faq.2.answer' },
      { question: 'tripsData.rideCoast.faq.3.question', answer: 'tripsData.rideCoast.faq.3.answer' },
    ],
  },
]

export function getTripBySlug(slug) {
  return trips.find((trip) => trip.slug === slug)
}