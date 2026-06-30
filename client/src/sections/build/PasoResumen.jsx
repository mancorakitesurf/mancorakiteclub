import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { componentImages } from '../../config/images.js'
import { useI18n } from '../../app/providers/i18nContext.js'
import { ACTIVIDADES, calcularPrecio, getPackageById, getRentalById, getRentalPrice } from './buildData.js'
import { SlotNumber, StepHeading } from './BuildUI.jsx'
import { useTripBuilderStore } from '../../store/useTripBuilderStore.js'

const { buildHeroBg, resumenHeroImg } = componentImages["pages/BuildPage.jsx"]

export default function PasoResumen({ headingIndex = 5, selectedPackages, rentals, noches, personas, extras, extrasQty, datosUsuario, setDatosUsuario, generarLinkWhatsApp }) {
  const { t, currentLang } = useI18n()
  const { fechaInicio } = useTripBuilderStore()
  const precioTotal = calcularPrecio(selectedPackages, rentals, noches, extras, extrasQty, personas)
  const canSend = datosUsuario.nombre.trim() !== '' && datosUsuario.email.trim() !== ''
  const [shakeKey, setShakeKey] = useState(0)

  const checkInDate = fechaInicio ? new Date(fechaInicio + 'T12:00:00') : new Date()
  const checkOutDate = new Date(checkInDate)
  checkOutDate.setDate(checkInDate.getDate() + noches)
  const localeMap = { en: 'en-US', es: 'es-PE', fr: 'fr-FR' }
  const locale = localeMap[currentLang] || 'es-PE'
  const dateOptions = { day: 'numeric', month: 'short' }
  const dateText = noches > 0
    ? `${checkInDate.toLocaleDateString(locale, dateOptions)} - ${checkOutDate.toLocaleDateString(locale, dateOptions)}`
    : '—'

  const packagesByActivity = ACTIVIDADES.map((activity) => {
    const activityPackages = selectedPackages.filter((pkg) => pkg.activityId === activity.id)
    if (!activityPackages.length) return null
    return {
      activity,
      packages: activityPackages,
    }
  }).filter(Boolean)

  return (
    <div id="trip-summary" className="scroll-mt-24">
      <StepHeading index={headingIndex} title={t('build.tripSummary')} subtitle={t('build.tripSummarySub')} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {/* Boarding Pass Ticket */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-sm">
            {/* Ticket Header Image & Route */}
            <div className="relative h-44 overflow-hidden">
              <img src={resumenHeroImg} alt="" className="h-full w-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b17] via-[#0e1b17]/40 to-transparent" />
              
              <div className="absolute top-4 left-5 right-5 flex justify-between items-center text-white/40 text-[9px] font-black tracking-[0.3em]">
                <span>BOARDING PASS</span>
                <span>MNC - KITE CLUB</span>
              </div>

              <div className="absolute top-12 left-5 right-5 flex items-center justify-between text-white">
                <div className="text-left">
                  <span className="block text-2xl font-black leading-none">YOU</span>
                  <span className="block text-[8px] text-white/50 tracking-wider uppercase mt-1">{t('build.name') || 'Pasajero'}</span>
                </div>
                <div className="flex-1 flex flex-col items-center px-4 relative">
                  <div className="w-full border-t border-dashed border-white/20 relative flex justify-center">
                    <span className="absolute -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#0e1b17] border border-white/15">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#b7e28a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                        <path d="M12 2L4 12l8 10 8-10L12 2z" /><path d="M12 22v-10M4 12h16" />
                      </svg>
                    </span>
                  </div>
                  <span className="text-[8px] text-[#b7e28a] tracking-[0.25em] mt-2 font-bold uppercase">{t('build.heroLabel') || 'Adventure'}</span>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-black leading-none">MNC</span>
                  <span className="block text-[8px] text-white/50 tracking-wider uppercase mt-1">{t('stay.location') || 'Máncora'}</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end">
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#b7e28a]">
                  {t('build.readyToSend')}
                </p>
                <div className="rounded-full bg-[#b7e28a] px-3 py-0.5 text-[9px] font-black text-black">
                  {personas} {personas === 1 ? t('messages.build.guestSingular') : t('messages.build.guestPlural')}
                </div>
              </div>
            </div>

            {/* Ticket Notches and Dashed Cut */}
            <div className="relative flex items-center h-4 bg-transparent select-none pointer-events-none">
              <div className="absolute -left-3.5 h-7 w-7 rounded-full bg-[#0e1b17] border border-white/10" />
              <div className="w-full border-t-2 border-dashed border-white/10 px-4" />
              <div className="absolute -right-3.5 h-7 w-7 rounded-full bg-[#0e1b17] border border-white/10" />
            </div>

            <div className="p-6 pt-2">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white/40">{t('build.yourTrip')}</h3>
              
              {/* Ticket passenger details */}
              <div className="grid grid-cols-2 gap-4 mb-6 rounded-2xl bg-white/[0.02] border border-white/5 p-4 text-left">
                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-white/35">{t('build.name') || 'Passenger'}</span>
                  <span className="block text-sm font-black text-white mt-0.5 truncate">{datosUsuario.nombre || '—'}</span>
                </div>
                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-white/35">{t('build.duration') || 'Dates'}</span>
                  <span className="block text-sm font-black text-[#b7e28a] mt-0.5">{dateText}</span>
                </div>
              </div>
              <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/50">{t('build.packagesLabel')}</span>
                <span className="font-bold text-white">
                  {packagesByActivity.length ? packagesByActivity.map((item) => item.activity.label).join(', ') : '—'}
                </span>
              </div>
              {packagesByActivity.map((item) => (
                <div key={item.activity.id} className="space-y-2 pl-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">{item.activity.label}</span>
                    <span className="text-xs text-white/30">{item.packages.length} {t('build.packagesSelected')}</span>
                  </div>
                  {item.packages.map((pkg) => {
                    const info = getPackageById(pkg.packageId)
                    return (
                      <div key={pkg.packageId} className="flex justify-between text-sm pl-4">
                        <span className="text-white/40">{info ? t(info.nameKey) : pkg.packageId}</span>
                        <span className="font-bold text-white">${info?.price ?? 0}</span>
                      </div>
                    )
                  })}
                </div>
              ))}
              <div className="flex justify-between text-sm">
                <span className="text-white/50">{t('build.rentalsLabel')}</span>
                <span className="font-bold text-white">{rentals.length || t('build.noneSelected')}</span>
              </div>
              {rentals.map((rental) => {
                const info = getRentalById(rental.rentalId)
                const price = getRentalPrice(rental.rentalId, rental.days)
                return (
                  <div key={rental.rentalId} className="flex justify-between text-sm pl-4">
                    <span className="text-white/40">{info ? t(info.labelKey) : rental.rentalId}</span>
                    <span className="font-bold text-white">{rental.days} {t('build.days')} · ${price}</span>
                  </div>
                )
              })}
              <div className="flex justify-between text-sm">
                <span className="text-white/50">{t('build.nights')}</span>
                <span className="font-bold text-white">{noches} {t('build.nights')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">{t('build.extrasLabel')}</span>
                <span className="font-bold text-white">{extras.length || t('build.noneSelected')}</span>
              </div>
              <div className="mt-4 border-t border-white/8 pt-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">{t('build.totalEstimated')}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-[#b7e28a]">$</span>
                    <span className="text-3xl font-black text-white flex items-center h-[1.15em]">
                      <SlotNumber value={precioTotal} />
                    </span>
                    <span className="text-[10px] font-bold text-white/30">USD</span>
                  </div>
                </div>
                <p className="mt-2 text-[10px] text-white/30 italic">*{t('build.finalPriceNote')}</p>
              </div>
            </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white/40">{t('build.yourDetails')}</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-white/50">{t('build.name')}</label>
                <input
                  type="text"
                  value={datosUsuario.nombre}
                  onChange={(e) => setDatosUsuario({ ...datosUsuario, nombre: e.target.value })}
                  placeholder={t('build.namePlaceholder')}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#b7e28a]/50 focus:outline-none focus:ring-1 focus:ring-[#b7e28a]/50"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-white/50">{t('build.email')}</label>
                <input
                  type="email"
                  value={datosUsuario.email}
                  onChange={(e) => setDatosUsuario({ ...datosUsuario, email: e.target.value })}
                  placeholder="email@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#b7e28a]/50 focus:outline-none focus:ring-1 focus:ring-[#b7e28a]/50"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-white/50">{t('build.riderLevel')}</label>
                <div className="grid grid-cols-3 gap-2">
                  {['beginner', 'intermediate', 'advanced'].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setDatosUsuario({ ...datosUsuario, nivel: lvl })}
                      className={`rounded-xl border py-2.5 text-xs font-bold transition-all ${
                        datosUsuario.nivel === lvl
                          ? 'border-[#b7e28a] bg-[#b7e28a]/10 text-[#b7e28a] shadow-[0_0_15px_rgba(183,226,138,0.15)]'
                          : 'border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {t(`build.level.${lvl}`)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-white/50">{t('build.notes')}</label>
                <textarea
                  value={datosUsuario.notas}
                  onChange={(e) => setDatosUsuario({ ...datosUsuario, notas: e.target.value })}
                  placeholder={t('build.notesPlaceholder')}
                  rows={3}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#b7e28a]/50 focus:outline-none focus:ring-1 focus:ring-[#b7e28a]/50 resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <AnimatePresence>
            {!canSend && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mb-4 rounded-xl border border-yellow-300/20 bg-yellow-300/5 p-4 text-center"
              >
                <p className="text-xs font-medium text-yellow-200/70">{t('build.enterDetails')}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            key={shakeKey}
            href={canSend ? generarLinkWhatsApp() : '#'}
            target={canSend ? '_blank' : '_self'}
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!canSend) {
                e.preventDefault()
                setShakeKey((k) => k + 1)
              }
            }}
            animate={!canSend && shakeKey > 0 ? { x: [-4, 4, -4, 4, 0] } : {}}
            className={`flex h-16 items-center justify-center rounded-2xl text-sm font-black uppercase tracking-[0.25em] transition-all duration-300 ${canSend
              ? 'bg-[#b7e28a] text-black shadow-[0_10px_30px_rgba(183,226,138,0.3)] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(183,226,138,0.4)]'
              : 'bg-white/5 text-white/20 cursor-not-allowed'
              }`}
          >
            {t('build.sendViaWhatsApp')}
          </motion.a>
        </div>
      </div>
    </div>
  )
}
