import { FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppUrl, defaultInquiryMessage } from '../../lib/whatsapp.js'
import { SURF_HERO_IMAGE } from './wavesContent.js'

function SurfHero() {
  return (
    <section className="relative flex h-[70vh] items-end justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={SURF_HERO_IMAGE}
          alt="Surfer riding a big green wave in northern Peru"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mb-16 mr-16 text-right">
        <h2 className="mb-6 font-display text-5xl font-bold tracking-tight text-white drop-shadow-lg md:text-7xl">
          Surfing <br /> Experience
        </h2>
        <a
          href={buildWhatsAppUrl(defaultInquiryMessage('Surfing Experience'))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-background-dark shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
        >
          Book Now
        </a>
      </div>
    </section>
  )
}

export default SurfHero
