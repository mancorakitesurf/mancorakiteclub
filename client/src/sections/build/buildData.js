import { componentImages } from '../../config/images.js'
import {
  IconKite,
  IconWing,
  IconSurf,
  IconSUP,
  IconTransfer,
  IconYoga,
  IconMassage,
  IconEquipment,
  IconCamera,
} from './BuildIcons.jsx'

const {
  noche1,
  noche2,
  noche3,
  noche4,
  noche5,
  kiteCarousel,
  wingCarousel,
  surfCarousel,
  supCarousel,
} = componentImages["pages/BuildPage.jsx"]

export const ACTIVIDADES = [
  {
    id: 'Kitesurf',
    label: 'Kitesurf',
    taglineKey: 'build.kitesurfTagline',
    Icon: IconKite,
    packages: [
      {
        id: 'kite-discovery',
        nameKey: 'build.packages.kitesurf.discovery.name',
        duration: '2 horas',
        price: 120,
        descriptionKey: 'build.packages.kitesurf.discovery.description',
        levelKey: 'build.level.beginner',
        includesKeys: ['build.packages.includes.gear', 'build.packages.includes.instructor', 'build.packages.includes.safety'],
        maxParticipants: 2,
      },
      {
        id: 'kite-beginner',
        nameKey: 'build.packages.kitesurf.beginner.name',
        duration: '6 horas / 3 dias',
        price: 360,
        descriptionKey: 'build.packages.kitesurf.beginner.description',
        levelKey: 'build.level.beginner',
        includesKeys: ['build.packages.includes.gear', 'build.packages.includes.instructor', 'build.packages.includes.progression'],
        maxParticipants: 2,
      },
      {
        id: 'kite-intensive',
        nameKey: 'build.packages.kitesurf.intensive.name',
        duration: '9 horas',
        price: 540,
        descriptionKey: 'build.packages.kitesurf.intensive.description',
        levelKey: 'build.level.intermediate',
        includesKeys: ['build.packages.includes.gear', 'build.packages.includes.instructor', 'build.packages.includes.progression'],
        maxParticipants: 2,
      },
      {
        id: 'kite-full',
        nameKey: 'build.packages.kitesurf.full.name',
        duration: '12 horas',
        price: 720,
        descriptionKey: 'build.packages.kitesurf.full.description',
        levelKey: 'build.level.advanced',
        includesKeys: ['build.packages.includes.gear', 'build.packages.includes.instructor', 'build.packages.includes.progression'],
        maxParticipants: 2,
      },
    ],
  },
  {
    id: 'Wingfoil',
    label: 'Wingfoil',
    taglineKey: 'build.wingfoilTagline',
    Icon: IconWing,
    packages: [
      {
        id: 'wing-discovery',
        nameKey: 'build.packages.wingfoil.discovery.name',
        duration: '2 horas',
        price: 120,
        descriptionKey: 'build.packages.wingfoil.discovery.description',
        levelKey: 'build.level.beginner',
        includesKeys: ['build.packages.includes.gear', 'build.packages.includes.instructor', 'build.packages.includes.safety'],
        maxParticipants: 2,
      },
      {
        id: 'wing-beginner',
        nameKey: 'build.packages.wingfoil.beginner.name',
        duration: '6 horas / 3 dias',
        price: 360,
        descriptionKey: 'build.packages.wingfoil.beginner.description',
        levelKey: 'build.level.beginner',
        includesKeys: ['build.packages.includes.gear', 'build.packages.includes.instructor', 'build.packages.includes.progression'],
        maxParticipants: 2,
      },
      {
        id: 'wing-intensive',
        nameKey: 'build.packages.wingfoil.intensive.name',
        duration: '9 horas',
        price: 540,
        descriptionKey: 'build.packages.wingfoil.intensive.description',
        levelKey: 'build.level.intermediate',
        includesKeys: ['build.packages.includes.gear', 'build.packages.includes.instructor', 'build.packages.includes.progression'],
        maxParticipants: 2,
      },
      {
        id: 'wing-full',
        nameKey: 'build.packages.wingfoil.full.name',
        duration: '12 horas',
        price: 720,
        descriptionKey: 'build.packages.wingfoil.full.description',
        levelKey: 'build.level.advanced',
        includesKeys: ['build.packages.includes.gear', 'build.packages.includes.instructor', 'build.packages.includes.progression'],
        maxParticipants: 2,
      },
    ],
  },
  {
    id: 'Surf',
    label: 'Surf',
    taglineKey: 'build.surfTagline',
    Icon: IconSurf,
    packages: [
      {
        id: 'surf-intro',
        nameKey: 'build.packages.surf.intro.name',
        duration: '2 horas',
        price: 50,
        descriptionKey: 'build.packages.surf.intro.description',
        levelKey: 'build.level.beginner',
        includesKeys: ['build.packages.includes.board', 'build.packages.includes.instructor', 'build.packages.includes.safety'],
        maxParticipants: 4,
      },
      {
        id: 'surf-progress',
        nameKey: 'build.packages.surf.progress.name',
        duration: '4 horas',
        price: 100,
        descriptionKey: 'build.packages.surf.progress.description',
        levelKey: 'build.level.beginner',
        includesKeys: ['build.packages.includes.board', 'build.packages.includes.instructor', 'build.packages.includes.progression'],
        maxParticipants: 4,
      },
      {
        id: 'surf-intensive',
        nameKey: 'build.packages.surf.intensive.name',
        duration: '6 horas',
        price: 150,
        descriptionKey: 'build.packages.surf.intensive.description',
        levelKey: 'build.level.intermediate',
        includesKeys: ['build.packages.includes.board', 'build.packages.includes.instructor', 'build.packages.includes.progression'],
        maxParticipants: 4,
      },
      {
        id: 'surf-full',
        nameKey: 'build.packages.surf.full.name',
        duration: '10 horas',
        price: 250,
        descriptionKey: 'build.packages.surf.full.description',
        levelKey: 'build.level.advanced',
        includesKeys: ['build.packages.includes.board', 'build.packages.includes.instructor', 'build.packages.includes.progression'],
        maxParticipants: 4,
      },
    ],
  },
  {
    id: 'SUP',
    label: 'SUP',
    taglineKey: 'build.supTagline',
    Icon: IconSUP,
    packages: [
      {
        id: 'sup-intro',
        nameKey: 'build.packages.sup.intro.name',
        duration: '2 horas',
        price: 60,
        descriptionKey: 'build.packages.sup.intro.description',
        levelKey: 'build.level.beginner',
        includesKeys: ['build.packages.includes.board', 'build.packages.includes.instructor', 'build.packages.includes.safety'],
        maxParticipants: 4,
      },
      {
        id: 'sup-explore',
        nameKey: 'build.packages.sup.explore.name',
        duration: '4 horas',
        price: 120,
        descriptionKey: 'build.packages.sup.explore.description',
        levelKey: 'build.level.beginner',
        includesKeys: ['build.packages.includes.board', 'build.packages.includes.instructor', 'build.packages.includes.progression'],
        maxParticipants: 4,
      },
      {
        id: 'sup-cruise',
        nameKey: 'build.packages.sup.cruise.name',
        duration: '6 horas',
        price: 180,
        descriptionKey: 'build.packages.sup.cruise.description',
        levelKey: 'build.level.intermediate',
        includesKeys: ['build.packages.includes.board', 'build.packages.includes.instructor', 'build.packages.includes.progression'],
        maxParticipants: 4,
      },
      {
        id: 'sup-full',
        nameKey: 'build.packages.sup.full.name',
        duration: '10 horas',
        price: 300,
        descriptionKey: 'build.packages.sup.full.description',
        levelKey: 'build.level.advanced',
        includesKeys: ['build.packages.includes.board', 'build.packages.includes.instructor', 'build.packages.includes.progression'],
        maxParticipants: 4,
      },
    ],
  },
]

export const ACTIVIDAD_CAROUSELS = {
  Kitesurf: kiteCarousel,
  Wingfoil: wingCarousel,
  Surf: surfCarousel,
  SUP: supCarousel,
}

export const NOCHES_OPTIONS = [3, 5, 7, 10, 14]
export const NOCHES_IMAGENES = [noche1, noche2, noche3, noche4, noche5]
export const NOCHES_COPY_KEYS = {
  3: 'build.fastEscape',
  5: 'build.balancedTrip',
  7: 'build.fullWeek',
  10: 'build.deeperStay',
  14: 'build.riderReset',
}

export const EXTRAS_OPTIONS = [
  { id: 'Day trip to other spots', labelKey: 'build.dayTrip', Icon: IconTransfer, precio: 55, unit: '/day', category: 'experience' },
  { id: 'Water supervision', labelKey: 'build.waterSupervision', Icon: IconYoga, precio: 15, unit: '/hr', category: 'experience' },
  { id: 'Massage', labelKey: 'build.massage', Icon: IconMassage, precio: 21, unit: '', category: 'wellness' },
  { id: 'Airport transfer', labelKey: 'build.airportTransfer', Icon: IconTransfer, precio: 42, unit: '', category: 'logistics' },
  { id: 'Photo & video pack', labelKey: 'build.photoVideoPack', Icon: IconCamera, precio: 40, unit: '', category: 'experience' },
]

export const EXTRAS_CATEGORIES = [
  { id: 'experience', labelKey: 'build.experiences' },
  { id: 'wellness', labelKey: 'build.wellness' },
  { id: 'logistics', labelKey: 'build.logistics' },
]

export const PRECIO_NOCHE_1 = 50
export const PRECIO_NOCHE_2 = 80
export function getPrecioNoche(personas) {
  return personas >= 2 ? PRECIO_NOCHE_2 : PRECIO_NOCHE_1
}
export const RENTAL_OPTIONS = [
  {
    id: 'kite-gear-rental',
    labelKey: 'build.kitesurfGearRental',
    Icon: IconEquipment,
    durations: [
      { days: 1, price: 60 },
      { days: 2, price: 100 },
      { days: 3, price: 135 },
      { days: 4, price: 160 },
      { days: 7, price: 320 },
    ],
  },
  {
    id: 'wingfoil-gear-rental',
    labelKey: 'build.wingfoilRental',
    Icon: IconEquipment,
    durations: [
      { days: 1, price: 60 },
      { days: 2, price: 100 },
      { days: 3, price: 135 },
      { days: 4, price: 160 },
      { days: 7, price: 320 },
    ],
  },
  {
    id: 'surfboard-rental',
    labelKey: 'build.surfboardRental',
    Icon: IconSurf,
    durations: [
      { days: 1, price: 15 },
      { days: 2, price: 28 },
      { days: 3, price: 40 },
      { days: 4, price: 50 },
      { days: 7, price: 90 },
    ],
  },
  {
    id: 'sup-rental',
    labelKey: 'build.supPaddleRental',
    Icon: IconSUP,
    durations: [
      { days: 1, price: 30 },
      { days: 2, price: 52 },
      { days: 3, price: 72 },
      { days: 4, price: 90 },
      { days: 7, price: 160 },
    ],
  },
]

const activityIndex = new Map(ACTIVIDADES.map((activity) => [activity.id, activity]))
const packageIndex = new Map()
ACTIVIDADES.forEach((activity) => {
  activity.packages.forEach((pkg) => {
    packageIndex.set(pkg.id, { ...pkg, activityId: activity.id })
  })
})
const rentalIndex = new Map(RENTAL_OPTIONS.map((rental) => [rental.id, rental]))

export function getActivityById(id) {
  return activityIndex.get(id)
}

export function getPackageById(id) {
  return packageIndex.get(id)
}

export function arePackagesConflicting(aId, bId) {
  const a = packageIndex.get(aId)
  const b = packageIndex.get(bId)
  if (!a || !b) return false
  const aConflicts = a.conflicts || []
  const bConflicts = b.conflicts || []
  return aConflicts.includes(bId) || bConflicts.includes(aId)
}

export function getRentalById(id) {
  return rentalIndex.get(id)
}

export function getRentalPrice(rentalId, days) {
  const rental = rentalIndex.get(rentalId)
  const found = rental?.durations?.find((duration) => duration.days === days)
  return found ? found.price : 0
}

export const NON_RENTAL_EXTRAS = EXTRAS_OPTIONS
export const NON_RENTAL_CATEGORIES = EXTRAS_CATEGORIES

export function calcularPrecio(selectedPackages = [], rentals = [], noches, extras, extrasQty, personas = 1) {
  const packagesTotal = selectedPackages.reduce((sum, pkg) => {
    const found = getPackageById(pkg.packageId)
    return found ? sum + found.price : sum
  }, 0)
  const rentalsTotal = rentals.reduce((sum, rental) => {
    return sum + getRentalPrice(rental.rentalId, rental.days)
  }, 0)
  const precioNoche = getPrecioNoche(personas)
  const base = noches * precioNoche + packagesTotal + rentalsTotal
  const extrasTotal = extras.reduce((sum, extraId) => {
    const found = EXTRAS_OPTIONS.find((e) => e.id === extraId)
    if (!found) return sum
    const qty = (extrasQty && extrasQty[extraId]) || 1
    return sum + found.precio * qty
  }, 0)
  return base + extrasTotal
}
