import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa'
import { useI18n } from '../../app/providers/i18nContext.js'
import { buildWhatsAppUrl } from '../../lib/whatsapp.js'

function StayCTA() {
  const { t, currentLang } = useI18n()
  const ctaRef = useRef(null)
  const stayMessage = t('stay.whatsappMessage')

  return (
    <section 
      ref={ctaRef}
      className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white sm:px-10 lg:px-16"
    >
      {/* Cinematic animated glowing backdrops */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#2A9D8F]/15 blur-[160px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#b7e28a]/12 blur-[160px] pointer-events-none animate-pulse-slow delay-1000" />

      {/* Decorative subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-4xl rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-md p-10 sm:p-16 lg:p-20 shadow-2xl text-center"
      >
        <div className="mb-6 inline-block">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2A9D8F]/20 to-[#b7e28a]/20 border border-[#2A9D8F]/30 text-[10px] font-black uppercase tracking-[0.3em] text-[#b7e28a] shadow-lg">
            ✨ Premium Experience
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-tight max-w-3xl mx-auto">
          {t('stay.ctaTitle')}
        </h2>

        <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto">
          {t('stay.ctaDesc')}
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <Link
              to={`/build${currentLang === 'en' ? '' : currentLang === 'fr' ? '/fr' : '/esp'}`}
              className="inline-flex min-h-14 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#2A9D8F] to-[#2A9D8F]/90 px-10 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-[#2A9D8F]/20 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2A9D8F]/35"
            >
              <FaArrowRight className="text-[10px]" />
              {t('common.buildYourTrip')}
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <a
              href={buildWhatsAppUrl(stayMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-full border-2 border-[#b7e28a] px-10 text-xs font-black uppercase tracking-widest text-[#b7e28a] hover:bg-[#b7e28a]/10 hover:text-white transition-all duration-300"
            >
              <FaWhatsapp className="text-sm" />
              {t('common.bookOnWhatsApp')}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default StayCTA
