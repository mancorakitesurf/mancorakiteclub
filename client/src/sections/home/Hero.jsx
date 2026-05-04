import { motion } from "framer-motion"
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppUrl, defaultInquiryMessage } from '../../lib/whatsapp.js'
import { HERO_IMAGE } from './homeContent.js'

function Hero() {
  return (
    <header className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20 md:min-h-screen">
      <div className="absolute inset-0 z-0">
        <motion.img
          src={HERO_IMAGE}
          alt="Kite surfer jumping over waves in Mancora"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
          Mancora <br />
          <span className="text-primary">Kite Club</span>
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-base font-light leading-relaxed tracking-wide text-gray-100 drop-shadow-md sm:text-lg md:text-xl">
          Kitesurf / Wingfoil in Mancora + beginner/pro + safety + coaching + video analysis
        </p>

        <div className="flex justify-center">
          <a
            href={buildWhatsAppUrl(defaultInquiryMessage('Mancora Kite Club'))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-xl transition-all hover:bg-teal-600 hover:shadow-teal-500/40 sm:w-auto"
          >
            <FaWhatsapp className="text-lg sm:text-xl" /> Book on WhatsApp
          </a>
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/70 md:bottom-10">
        <FaChevronDown className="text-2xl" />
      </div>
    </header>
  )
}

export default Hero
