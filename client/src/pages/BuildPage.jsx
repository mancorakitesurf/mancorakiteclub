import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import SchemaOrg from '../components/SchemaOrg.jsx'
import { useI18n } from '../app/providers/i18nContext.js'
import { useTripBuilderStore } from '../store/useTripBuilderStore.js'
import { componentImages } from '../config/images.js'

import {
  ACTIVIDADES,
  EXTRAS_OPTIONS,
  calcularPrecio,
  getPackageById,
  getRentalById,
  getRentalPrice,
} from '../sections/build/buildData.js'
import { StepIndicator, FloatingPrice, MobilePriceBar, stepVariants, stepTransition } from '../sections/build/BuildUI.jsx'

import PasoPackages from '../sections/build/PasoPackages.jsx'
import PasoNoches from '../sections/build/PasoNoches.jsx'
import PasoRental from '../sections/build/PasoRental.jsx'
import PasoExtras from '../sections/build/PasoExtras.jsx'
import PasoResumen from '../sections/build/PasoResumen.jsx'

const { buildHeroBg } = componentImages["pages/BuildPage.jsx"]

function BuildPage() {
  const { t, currentLang } = useI18n()
  const {
    selectedPackages,
    rentals, setRentalDays, removeRental,
    noches, setNoches,
    personas, setPersonas,
    extras, toggleExtra,
    extrasQty, setExtraQty,
    paso, setPaso,
    datosUsuario, setDatosUsuario,
    fechaInicio,
    reset,
  } = useTripBuilderStore()

  const [direction, setDirection] = useState(0)
  const containerRef = useRef(null)

  const cambiarPaso = (nuevoPaso) => {
    setDirection(nuevoPaso > paso ? 1 : -1)
    setPaso(nuevoPaso)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const generarLinkWhatsApp = () => {
    const total = calcularPrecio(selectedPackages, rentals, noches, extras, extrasQty, personas)
    const localeMap = { en: 'en-US', es: 'es-PE', fr: 'fr-FR' }
    const locale = localeMap[currentLang] || 'es-PE'

    // Format check-in and check-out dates
    const checkInDate = fechaInicio ? new Date(fechaInicio + 'T12:00:00') : new Date()
    const checkOutDate = new Date(checkInDate)
    checkOutDate.setDate(checkInDate.getDate() + noches)

    const dateOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
    const checkInFormatted = new Intl.DateTimeFormat(locale, dateOptions).format(checkInDate)
    const checkOutFormatted = new Intl.DateTimeFormat(locale, dateOptions).format(checkOutDate)

    const currencyFormatted = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(total)

    const packagesByActivity = ACTIVIDADES.map((activity) => {
      const activityPackages = selectedPackages.filter((pkg) => pkg.activityId === activity.id)
      if (!activityPackages.length) return null
      const lines = activityPackages.map((pkg) => {
        const info = getPackageById(pkg.packageId)
        if (!info) return `• ${pkg.packageId}`
        return `• ${t(info.nameKey)} (${info.duration}) — $${info.price}`
      })
      return `${activity.label}:\n${lines.join('\n')}`
    }).filter(Boolean)

    const packagesText = packagesByActivity.length > 0
      ? packagesByActivity.join('\n')
      : t('messages.build.nonePackages')

    const rentalsList = rentals.map((rental) => {
      const info = getRentalById(rental.rentalId)
      const price = getRentalPrice(rental.rentalId, rental.days)
      return `• ${info ? t(info.labelKey) : rental.rentalId} (${rental.days} ${t('messages.build.daysLabel')}) — $${price}`
    })
    const rentalsText = rentalsList.length > 0
      ? rentalsList.join('\n')
      : t('messages.build.noneRentals')

    const extrasList = EXTRAS_OPTIONS.filter((e) => extras.includes(e.id))
      .map((e) => `${t(e.labelKey)} x${extrasQty[e.id] || 1}`)
    const extrasText = extrasList.length > 0
      ? extrasList.join(', ')
      : t('messages.build.noneExtras')

    const stayText = noches > 0
      ? `${noches} ${t('messages.build.nightsLabel')} (${checkInFormatted} - ${checkOutFormatted})`
      : t('messages.build.noStay')

    const nameValue = datosUsuario.nombre?.trim() || t('messages.build.notProvided')
    const emailValue = datosUsuario.email?.trim() || t('messages.build.notProvided')
    const guestsLabel = personas === 1
      ? t('messages.build.guestSingular')
      : t('messages.build.guestPlural')

    const totalText = `${currencyFormatted} (${personas} ${guestsLabel})`

    const mensaje = `${t('messages.build.greeting')}

  ${t('messages.build.sectionTrip')}
  • ${t('messages.build.labelPackages')}\n${packagesText}
  • ${t('messages.build.labelRentals')} ${rentalsText}
  • ${t('messages.build.labelStay')} ${stayText}
  • ${t('messages.build.labelExtras')} ${extrasText}

  ${t('messages.build.sectionContact')}
  • ${t('messages.build.labelName')} ${nameValue}
  • ${t('messages.build.labelEmail')} ${emailValue}

  ${t('messages.build.sectionTotal')} ${totalText}

  ${t('messages.build.closing')}`

    return `https://wa.me/51996557689?text=${encodeURIComponent(mensaje)}`
  }

  const precioTotal = calcularPrecio(selectedPackages, rentals, noches, extras, extrasQty, personas)

  return (
    <div className="min-h-screen bg-[#0e1b17]">
      <SEO
        titleKey="build.heroTitle1"
        descKey="build.heroSubtitle"
        titleFallback="Build Your Trip | Máncora Kite Club"
        canonicalPath={currentLang === 'en' ? '/build' : `/${currentLang === 'fr' ? 'fr' : 'esp'}/build`}
        hreflang={{ en: '/build', es: '/esp/build', fr: '/fr/build', default: '/build' }}
      />
      <SchemaOrg type="LocalBusiness" />

      <div className="relative overflow-hidden bg-background-dark py-32 sm:py-48 lg:py-56">
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 640px)" srcSet={buildHeroBg.mobile} />
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={buildHeroBg.desktop}
              alt=""
              className="h-full w-full object-cover opacity-40"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b17] via-[#0e1b17]/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#b7e28a]"
          >
            {t('build.heroLabel')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black uppercase tracking-tighter text-white sm:text-6xl lg:text-7xl"
          >
            {t('build.heroTitle1')}{' '}
            <span className="text-transparent transition-all [text-shadow:0_0_20px_rgba(183,226,138,0.3)] [-webkit-text-stroke:1px_rgba(183,226,138,0.5)]">
              {t('build.heroTitle2')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-sm tracking-wide text-white/50 sm:text-base"
          >
            {t('build.heroSubtitle')}
          </motion.p>
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8" ref={containerRef}>
        <StepIndicator pasoActual={paso} />

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={paso}
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={stepTransition}
            >
              {paso === 1 && <PasoPackages />}
              {paso === 2 && (
                <PasoRental
                  rentals={rentals}
                  setRentalDays={setRentalDays}
                  removeRental={removeRental}
                />
              )}
              {paso === 3 && <PasoNoches noches={noches} setNoches={setNoches} personas={personas} setPersonas={setPersonas} />}
              {paso === 4 && (
                <PasoExtras
                  extras={extras}
                  extrasQty={extrasQty}
                  toggleExtra={toggleExtra}
                  setExtraQty={setExtraQty}
                />
              )}
              {paso === 5 && (
                <PasoResumen
                  selectedPackages={selectedPackages}
                  rentals={rentals}
                  noches={noches}
                  personas={personas}
                  extras={extras}
                  extrasQty={extrasQty}
                  datosUsuario={datosUsuario}
                  setDatosUsuario={setDatosUsuario}
                  generarLinkWhatsApp={generarLinkWhatsApp}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/6 pt-8">
          <button
            type="button"
            onClick={() => (paso === 1 ? reset() : cambiarPaso(paso - 1))}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 transition hover:text-white"
          >
            {paso === 1 ? t('build.reset') : t('build.back')}
          </button>

          {paso < 5 && (
            <button
              type="button"
              onClick={() => cambiarPaso(paso + 1)}
              className="group flex h-12 items-center gap-4 rounded-full bg-white/5 pl-8 pr-2 transition-all hover:bg-white/10"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                {t('build.next')}
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b7e28a] text-black transition-transform group-hover:translate-x-1">
                →
              </div>
            </button>
          )}
        </div>
      </main>

      <FloatingPrice paso={paso} precioTotal={precioTotal} />
      <MobilePriceBar paso={paso} precioTotal={precioTotal} />
    </div>
  )
}

export default BuildPage
