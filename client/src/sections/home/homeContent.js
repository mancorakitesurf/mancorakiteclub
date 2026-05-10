import { homeImages, remoteImages } from '../../config/images.js'
import { buildWhatsAppUrl, defaultInquiryMessage } from '../../lib/whatsapp.js'

const { actionDesktop, actionMobile, waveDesktop, waveMobile, lifestyle, beach } = homeImages.hero
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
    desktopSrc: beach,
    mobileSrc: beach,
    alt: 'Beachside kite setup with ocean wind in Mancora',
    imageClassName: 'object-[62%_center] md:object-center',
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
    name: 'Tina Moller',
    country: 'Germany',
    text: '"The best kitesurfing trip of my life. The instructors were incredibly patient and the location is just magical. Highly recommend!"',
    image: remoteImages.homeTestimonials.tina,
  },
  {
    name: 'Sarah Jenkins',
    country: 'UK',
    text: `"Mancora Kite Club strikes the perfect balance between professional coaching and a relaxed, fun atmosphere. I'll be back!"`,
    image: remoteImages.homeTestimonials.sarah,
  },
  {
    name: 'Marc Dubois',
    country: 'France',
    text: '"From the airport pickup to the final sunset session, everything was seamless. The villa is stunning and the food is amazing."',
    image: remoteImages.homeTestimonials.marc,
  },
]
