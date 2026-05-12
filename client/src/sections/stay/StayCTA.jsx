import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { useI18n } from '../../app/providers/i18nContext.js'
import { buildWhatsAppUrl } from '../../lib/whatsapp.js'

function StayCTA() {
  const { t, currentLang } = useI18n()
  const ctaRef = useRef(null)
  const stayMessage = t('stay.whatsappMessage')

  return (
    <section 
      ref={ctaRef}
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-black px-6 py-24 text-center text-white sm:px-10 lg:px-16"
    >
      {/* Animated background blobs */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#2A9D8F]/10 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#b7e28a]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto max-w-3xl"
      >
        <div className="mb-6 inline-block">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 rounded-full bg-[#2A9D8F]/20 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#2A9D8F]"
          >
            ✨ Premium Experience
          </motion.div>
        </div>

        <h2 className="font-display text-5xl font-bold leading-tight sm:text-6xl">
          {t('stay.ctaTitle')}
        </h2>

        <p className="mt-6 text-lg leading-8 text-white/75">
          {t('stay.ctaDesc')}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(42, 157, 143, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={`/build${currentLang === 'en' ? '' : currentLang === 'fr' ? '/fr' : '/esp'}`}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#2A9D8F] px-8 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#2A9D8F]/90"
            >
              {t('common.buildYourTrip')}
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(183, 226, 138, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={buildWhatsAppUrl(stayMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border-2 border-[#b7e28a] px-8 text-sm font-bold uppercase tracking-wider text-[#b7e28a] transition hover:bg-[#b7e28a]/10"
            >
              <FaWhatsapp className="text-lg" />
              {t('common.bookOnWhatsApp')}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default StayCTA
