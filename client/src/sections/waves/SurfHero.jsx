import { FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppUrl, defaultInquiryMessage } from '../../lib/whatsapp.js'
import { SURF_HERO_IMAGE } from './wavesContent.js'

function SurfHero() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden md:min-h-screen md:items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={SURF_HERO_IMAGE}
          alt="Surfer riding a big green wave in northern Peru"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 text-center sm:px-6 md:pb-0 md:text-left lg:px-8">
        <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
          Surfing <br /> Experience
        </h2>
        <a
          href={buildWhatsAppUrl(defaultInquiryMessage('Surfing Experience'))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-background-dark shadow-xl transition-all hover:shadow-2xl sm:w-auto"
        >
          Book Now
        </a>
      </div>
    </section>
  )
}

export default SurfHero
