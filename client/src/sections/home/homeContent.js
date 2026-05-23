import { heroImages, homeImages, remoteImages } from '../../config/images.js'
import { buildWhatsAppUrl, defaultInquiryMessage } from '../../lib/whatsapp.js'

const { actionDesktop, actionMobile, waveDesktop, waveMobile, lifestyle } = homeImages.hero
const wingDesktop = heroImages.wing.desktop[0]
const wingMobile = heroImages.wing.mobile[0]
export const WHATSAPP_LINK = buildWhatsAppUrl(defaultInquiryMessage())

export const HOME_HERO_SLIDES = [
  {
    desktopSrc: actionDesktop,
    mobileSrc: actionMobile,
    alt: 'Kitesurfer riding wind and waves in Mancora',
    imageClassName: 'object-[58%_center] md:object-center',
  },
  {
    desktopSrc: waveDesktop,
    mobileSrc: waveMobile,
    alt: 'Kitesurf session over Pacific waves in northern Peru',
    imageClassName: 'object-[48%_center] md:object-center',
  },
  {
    desktopSrc: lifestyle,
    mobileSrc: lifestyle,
    alt: 'Mancora Kite Club coaching on the beach',
    imageClassName: 'object-[56%_center] md:object-center',
  },
  {
    desktopSrc: wingDesktop,
    mobileSrc: wingMobile,
    alt: 'Wingfoil rider gliding over the ocean in Mancora',
    imageClassName: 'object-[50%_center] md:object-center',
  },
]

export const INSTRUCTION_IMAGE = remoteImages.homeInstruction

export const STAY_IMAGES = {
  main: {
    src: remoteImages.homeStay.main,
    alt: 'Luxury Villa Exterior',
  },
  pool: {
    src: remoteImages.homeStay.pool,
    alt: 'Poolside View',
  },
  bedroom: {
    src: remoteImages.homeStay.bedroom,
    alt: 'Bedroom Interior',
  },
}

export const TESTIMONIALS = [
  {
    id: 'tina',
    name: 'Tina Moller',
    image: remoteImages.homeTestimonials.tina,
  },
  {
    id: 'sarah',
    name: 'Sarah Jenkins',
    image: remoteImages.homeTestimonials.sarah,
  },
  {
    id: 'marc',
    name: 'Marc Dubois',
    image: remoteImages.homeTestimonials.marc,
  },
]
