import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'
import { ACTIVIDADES, calcularPrecio, getPackageById, getRentalById, getRentalPrice } from './buildData.js'
import { useAnimatedNumber, StepHeading } from './BuildUI.jsx'

export default function PasoResumen({ selectedPackages, rentals, noches, personas, extras, extrasQty, datosUsuario, setDatosUsuario, generarLinkWhatsApp }) {
  const { t } = useI18n()
  const precioTotal = calcularPrecio(selectedPackages, rentals, noches, extras, extrasQty, personas)
  const precioAnimado = useAnimatedNumber(precioTotal)
  const canSend = datosUsuario.nombre.trim() !== '' && datosUsuario.email.trim() !== ''
  const [shakeKey, setShakeKey] = useState(0)
  const packagesByActivity = ACTIVIDADES.map((activity) => {
    const activityPackages = selectedPackages.filter((pkg) => pkg.activityId === activity.id)
    if (!activityPackages.length) return null
    return {
      activity,
      packages: activityPackages,
    }
  }).filter(Boolean)

  return (
    <div>
      <StepHeading index={5} title={t('build.tripSummary')} subtitle={t('build.tripSummarySub')} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white/40">{t('build.yourTrip')}</h3>
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
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-[#b7e28a]">$</span>
                    <span className="text-3xl font-black text-white">{precioAnimado}</span>
                    <span className="text-[10px] font-bold text-white/30">USD</span>
                  </div>
                </div>
                <p className="mt-2 text-[10px] text-white/30 italic">*{t('build.finalPriceNote')}</p>
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
