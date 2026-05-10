import { motion } from "framer-motion"
import ctaBg from '../../../assets/imagenes-kitsurfing-lessons/posicionk4.jpg'
import { useI18n } from '../../../app/providers/i18nContext'
import { Link } from 'react-router-dom'

function FinalCallToAction() {
  const { t } = useI18n()
  return (
    <section className="relative py-56 overflow-hidden text-white">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover scale-110 blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.4em] text-xs text-white/70 mb-10"
        >
          {t('blog7Plans.cta.badge')}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-12"
        >
          {t('blog7Plans.cta.title1')}
          <br />
          {t('blog7Plans.cta.title2')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/80 leading-relaxed mb-16 max-w-2xl mx-auto"
        >
          {t('blog7Plans.cta.desc')}
        </motion.p>

        <Link to="/build">
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-12 py-4 border border-white/80 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition"
          >
            {t('blog7Plans.cta.btn')}
          </motion.button>
        </Link>
      </div>
    </section>
  )
}
export default FinalCallToAction