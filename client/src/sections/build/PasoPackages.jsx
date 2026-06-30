import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'
import { useTripBuilderStore } from '../../store/useTripBuilderStore.js'
import { ACTIVIDADES, ACTIVIDAD_CAROUSELS, getPackageById } from './buildData.js'
import { StepHeading, staggerItem } from './BuildUI.jsx'

function PackageCard({ pkg, selected, onAdd, onRemove, t, image }) {
  return (
    <motion.div
      variants={staggerItem}
      className={`overflow-hidden rounded-2xl border transition-all ${selected
        ? 'border-[#b7e28a]/40 bg-[#b7e28a]/5 shadow-[inset_0_0_0_1px_rgba(183,226,138,0.2)]'
        : 'border-white/8 bg-[#152720] hover:border-white/16'
        }`}
    >
      <div className="relative h-36 overflow-hidden">
        <img
          src={image}
          alt=""
          className={`h-full w-full object-cover transition duration-500 ${selected ? 'opacity-80 scale-[1.03]' : 'opacity-55 hover:opacity-70'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#152720] via-[#152720]/20 to-transparent" />
        <span className="absolute bottom-3 right-3 rounded-full bg-[#b7e28a] px-3 py-1 text-[11px] font-black text-black">
          ${pkg.price} USD
        </span>
      </div>

      <div className="p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-black uppercase tracking-wider text-white">
            {t(pkg.nameKey)}
          </p>
          <p className="mt-1 text-[11px] text-white/50">{pkg.duration}</p>
        </div>
        <div className="flex items-center gap-2">
          {pkg.levelKey && (
            <span className="rounded-full border border-white/15 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
              {t(pkg.levelKey)}
            </span>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm text-white/65">{t(pkg.descriptionKey)}</p>

      {pkg.includesKeys?.length > 0 && (
        <div className="mt-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            {t('build.packageIncludes')}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {pkg.includesKeys.map((key) => (
              <span
                key={key}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold text-white/60"
              >
                {t(key)}
              </span>
            ))}
          </div>
        </div>
      )}

      {pkg.maxParticipants && (
        <p className="mt-3 text-[11px] text-white/40">
          {t('build.maxParticipants')} {pkg.maxParticipants}
        </p>
      )}

      <div className="mt-4 flex items-center justify-end">
        <button
          type="button"
          onClick={selected ? onRemove : onAdd}
          className={`rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition ${selected
            ? 'bg-white/10 text-white/70 hover:bg-white/15'
            : 'bg-[#b7e28a] text-black hover:scale-[1.02]'
            }`}
        >
          {selected ? t('build.removePackage') : t('build.addPackage')}
        </button>
      </div>
      </div>
    </motion.div>
  )
}

export default function PasoPackages() {
  const { t } = useI18n()
  const { selectedPackages, addPackage, removePackage } = useTripBuilderStore()
  const [openActivities, setOpenActivities] = useState(() => new Set([ACTIVIDADES[0]?.id]))

  const selectedIds = useMemo(
    () => new Set(selectedPackages.map((pkg) => pkg.packageId)),
    [selectedPackages],
  )

  const packagesSubtotal = useMemo(
    () => selectedPackages.reduce((sum, pkg) => {
      const found = getPackageById(pkg.packageId)
      return found ? sum + found.price : sum
    }, 0),
    [selectedPackages],
  )

  const toggleActivity = (id) => {
    setOpenActivities((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div>
      <StepHeading index={1} title={t('build.choosePackages')} subtitle={t('build.choosePackagesSub')} />

      <div className="space-y-4">
        {ACTIVIDADES.map((activity) => {
          const isOpen = openActivities.has(activity.id)
          const selectedCount = selectedPackages.filter((pkg) => pkg.activityId === activity.id).length
          return (
            <div key={activity.id} className="rounded-2xl border border-white/8 bg-white/[0.02]">
              <button
                type="button"
                onClick={() => toggleActivity(activity.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white/5 text-[#b7e28a]">
                    <img
                      src={ACTIVIDAD_CAROUSELS[activity.id]?.[0]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <activity.Icon className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-wider text-white">{activity.label}</p>
                    <p className="text-[11px] text-white/50">{t(activity.taglineKey)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {selectedCount > 0 && (
                    <span className="rounded-full bg-[#b7e28a]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#b7e28a]">
                      {selectedCount} {t('build.packagesSelected')}
                    </span>
                  )}
                  <span className="text-white/40">{isOpen ? '−' : '+'}</span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden px-5 pb-5"
                  >
                    <motion.div
                      initial="hidden"
                      animate="show"
                      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
                      className="grid grid-cols-1 gap-3 lg:grid-cols-2"
                    >
                      {activity.packages.map((pkg) => (
                        <PackageCard
                          key={pkg.id}
                          pkg={pkg}
                          image={ACTIVIDAD_CAROUSELS[activity.id]?.[activity.packages.indexOf(pkg) % ACTIVIDAD_CAROUSELS[activity.id].length]}
                          selected={selectedIds.has(pkg.id)}
                          onAdd={() => addPackage(pkg.id, activity.id)}
                          onRemove={() => removePackage(pkg.id)}
                          t={t}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      <div className="mt-6 flex items-center justify-end gap-2">
        <div className="h-px flex-1 bg-white/6" />
        <p className="text-sm font-bold text-[#b7e28a]">${packagesSubtotal} USD</p>
        <span className="text-xs text-white/30">{t('build.packagesLabel')}</span>
      </div>
    </div>
  )
}
