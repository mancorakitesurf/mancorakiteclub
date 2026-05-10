import { useParams } from 'react-router-dom'
import { motion } from "framer-motion"
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa'
import SEO from '../../components/SEO.jsx'
import { buildWhatsAppUrl } from '../../lib/whatsapp.js'
import { trips, getTripBySlug } from '../../content/trips.js'
import { useI18n } from '../../app/providers/i18nContext'

function formatUsd(value) {
  return `$${value}`
}

function TripDetailPage() {
  const { slug } = useParams()
  const trip = getTripBySlug(slug)
  const { t } = useI18n()

  if (!trip) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-center bg-[#0e2222] text-white">
        <p>{t('tripDetail.tripNotFound')}</p>
      </div>
    )
  }

  const whatsappHref = buildWhatsAppUrl(trip.whatsappMessage)

  const cardClass = "bg-[#162e2e] border border-[#284b4b] rounded-[1rem] p-6 sm:p-8 overflow-hidden"
  
  const imageContainerClass = "w-full md:w-[280px] lg:w-[340px] h-[240px] md:h-[280px] lg:h-[320px] flex-shrink-0 rounded-xl overflow-hidden border border-[#284b4b]"

  return (
    <>
      <SEO
        titleKey="seo.tripsTitle"
        descKey="seo.tripsDesc"
        titleFallback={`${trip.title} | Mancora Kite Club`}
        descFallback={trip.summary}
      />

      <header className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20 md:min-h-screen bg-[#0e2222]">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={trip.heroImage}
            alt={trip.heroAlt}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="h-full w-full object-cover opacity-50 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e2222] via-[#0e2222]/50 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 flex flex-col items-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#3ea59b]">
            {trip.subtitle}
          </p>
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            {trip.title}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base font-light leading-relaxed tracking-wide text-gray-200 drop-shadow-md sm:text-lg md:text-xl">
            {trip.summary}
          </p>

          <div className="flex justify-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#3ea59b] px-6 py-3 text-base font-semibold text-[#0e2222] shadow-xl transition-all hover:bg-opacity-90 sm:w-auto"
            >
              <FaWhatsapp className="text-lg sm:text-xl" /> {t('common.bookOnWhatsApp')}
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/70 md:bottom-10 z-10">
          <FaChevronDown className="text-2xl" />
        </div>
      </header>

      {/* --- SECCIÓN DE CONTENIDO --- */}
      <section className="bg-[#0e2222] py-16 sm:py-20 lg:py-28 font-sans antialiased selection:bg-[#3ea59b] selection:text-white">
        <div className="mx-auto max-w-5xl px-4 flex flex-col gap-10">
          
          {/* 1. This trip is for you if... */}
          <div className={`${cardClass} flex flex-col md:flex-row gap-8 items-center`}>
            <div className="flex-1">
              <h2 className="text-2xl font-serif mb-6 text-white">
                {t('tripDetail.forYouIfTitle')}
              </h2>
              <ul className="text-[#f0f4f4] text-base lg:text-lg font-light leading-relaxed space-y-3">
                {trip.forYouIf.map((item) => (
                  <li key={item} className="relative pl-6">
                    <span className="absolute left-0 text-[#f0f4f4]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Imagen 1 con contenedor unificado */}
            <div className={imageContainerClass}>
              <img 
                alt={`${trip.title} lifestyle`} 
                className="w-full h-full object-cover opacity-80" 
                src={trip.image1}
              />
            </div>
          </div>

          {/* 2. What's included */}
          <div className={`${cardClass} flex flex-col md:flex-row gap-8 items-center`}>
            <div className="flex-1">
              <h2 className="text-2xl font-serif mb-6 text-white">{t('tripDetail.whatsIncluded')}</h2>
              <div className="grid grid-cols-1 gap-y-6">
                {trip.includes.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="text-[#3ea59b] mt-1 flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path></svg>
                    </div>
                    <p className="text-[#f0f4f4] font-light leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Imagen 2 con contenedor unificado */}
            <div className={`${imageContainerClass} hidden md:block`}>
              <img 
                alt={`${trip.title} action`} 
                className="w-full h-full object-cover opacity-80" 
                src={trip.image2}
              />
            </div>
          </div>

          {/* 4. Pricing */}
          <div className={cardClass}>
            <h2 className="text-2xl font-serif mb-6 text-white">{t('tripDetail.pricing')}</h2>
            <div className="w-full overflow-x-auto rounded-lg border border-[#284b4b]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1f4040]">
                    <th className="p-4 font-medium text-[#f0f4f4] border-b border-[#284b4b] w-1/3">{t('tripDetail.durationHeader')}</th>
                    <th className="p-4 font-medium text-[#f0f4f4] border-b border-[#284b4b] w-1/3">{t('tripDetail.onePersonHeader')}</th>
                    <th className="p-4 font-medium text-[#f0f4f4] border-b border-[#284b4b] w-1/3">{t('tripDetail.twoPeopleHeader')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#284b4b]">
                  <tr className="bg-[#183333]">
                    <td className="p-4 text-[#f0f4f4] font-light">{t('tripDetail.threeNights')}</td>
                    <td className="p-4 text-[#f0f4f4] font-light">{formatUsd(trip.pricing.onePerson.threeNights)}</td>
                    <td className="p-4 text-[#f0f4f4] font-light">{formatUsd(trip.pricing.twoPeople.threeNights)}</td>
                  </tr>
                  <tr className="bg-[#162e2e]">
                    <td className="p-4 text-[#f0f4f4] font-light">{t('tripDetail.sevenNights')}</td>
                    <td className="p-4 text-[#f0f4f4] font-light">{formatUsd(trip.pricing.onePerson.sevenNights)}</td>
                    <td className="p-4 text-[#f0f4f4] font-light">{formatUsd(trip.pricing.twoPeople.sevenNights)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 5. Add-ons */}
          <div className={cardClass}>
            <h2 className="text-2xl font-serif mb-6 text-white">{t('tripDetail.addOns')}</h2>
            <ul className="text-[#f0f4f4] text-base font-light space-y-3">
              {trip.addOns.map((item) => (
                <li key={item} className="relative pl-6">
                  <span className="absolute left-0 text-[#f0f4f4]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 6. FAQ */}
          <div className={cardClass}>
            <h2 className="text-2xl font-serif mb-6 text-white">{t('tripDetail.faq')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {trip.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="text-white font-medium mb-1">{item.question}</h3>
                  <p className="text-[#a8c0c0] font-light text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Ready to book? */}
          <div className={`${cardClass} flex flex-col items-center text-center py-10`}>
            <h2 className="text-3xl font-serif mb-8 text-white">{t('tripDetail.readyToBook')}</h2>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#3ea59b] text-[#0e2222] font-medium rounded-full hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-[#3ea59b] focus:ring-offset-2 focus:ring-offset-[#162e2e] shadow-lg"
            >
              {t('common.bookOnWhatsApp')}
            </a>
          </div>

        </div>
      </section>
    </>
  )
}

export default TripDetailPage