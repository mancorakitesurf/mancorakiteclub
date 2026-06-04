import { componentImages } from './images.js'

const { img2, img3 } = componentImages["pages/StayPage.jsx"]

export const ROOM_OPTIONS = [
  {
    id: 'solo-traveler',
    nameKey: 'stay.rooms.solo.name',
    descriptionKey: 'stay.rooms.solo.description',
    capacity: 1,
    pricePerNight: 50,
    image: img2, // Private Room • Single Bed
    includesKeys: [
      'stay.rooms.includes.breakfast',
      'stay.rooms.includes.storage',
      'stay.rooms.includes.facilities'
    ],
    amenities: ['wifi', 'ac', 'pool', 'garden']
  },
  {
    id: 'couple-shared',
    nameKey: 'stay.rooms.couple.name',
    descriptionKey: 'stay.rooms.couple.description',
    capacity: 2,
    pricePerNight: 80,
    image: img3, // Private Room • Double Bed
    includesKeys: [
      'stay.rooms.includes.breakfast',
      'stay.rooms.includes.storage',
      'stay.rooms.includes.facilities'
    ],
    amenities: ['wifi', 'ac', 'pool', 'gym', 'ocean-view']
  }
]
