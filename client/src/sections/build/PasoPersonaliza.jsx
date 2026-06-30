import { motion } from 'framer-motion'
import { componentImages } from '../../config/images.js'
import { useI18n } from '../../app/providers/i18nContext.js'
import { StepHeading } from './BuildUI.jsx'
import PasoRental from './PasoRental.jsx'
import PasoExtras from './PasoExtras.jsx'
import PasoResumen from './PasoResumen.jsx'

const { buildHeroBg, DSC05120HDR, finalTouchImg, stayCardImg } = componentImages["pages/BuildPage.jsx"]

export default function PasoPersonaliza({
  selectedPackages,
  rentals,
  setRentalDays,
  removeRental,
  noches,
  personas,
  extras,
  extrasQty,
  toggleExtra,
  setExtraQty,
  datosUsuario,
  setDatosUsuario,
  generarLinkWhatsApp,
  activeTab,
  setActiveTab,
}) {
  const { t } = useI18n()

  return (
    <div>
      <StepHeading index={3} title={t('build.stepSendTitle')} subtitle={t('build.stepSendSub')} />

      {/* Hero card showing stay details */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-[#b7e28a]/15 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[160px] overflow-hidden lg:min-h-[260px]">
            <img
              src={finalTouchImg}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b17] via-[#0e1b17]/35 to-transparent lg:bg-gradient-to-r" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#b7e28a]">
                {t('build.optionalDetails')}
              </p>
              <p className="mt-2 max-w-sm text-lg font-black uppercase tracking-[0.08em] text-white sm:text-xl">
                {t('build.finalTouchTitle')}
              </p>
            </div>
          </div>

          <div className="grid gap-3 p-4 sm:p-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-white/8 bg-[#0e1b17]/70 p-4"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
                {t('build.howThisWorks')}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                {t('build.howThisWorksCopy')}
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.04] p-3">
                <img src={stayCardImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
                <div className="relative">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
                    {t('build.stay')}
                  </p>
                  <p className="mt-1.5 text-sm font-black text-white">{noches} {t('build.nights')}</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.04] p-3">
                <img src={DSC05120HDR} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
                <div className="relative">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
                    {t('build.guests')}
                  </p>
                  <p className="mt-1.5 text-sm font-black text-white">{personas}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Tab Selectors */}
      <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/8 lg:hidden mb-6">
        <button
          type="button"
          onClick={() => setActiveTab('options')}
          className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'options'
              ? 'bg-[#b7e28a] text-black shadow-[0_4px_12px_rgba(183,226,138,0.15)]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          {t('build.tabOptions')}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('summary')}
          className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'summary'
              ? 'bg-[#b7e28a] text-black shadow-[0_4px_12px_rgba(183,226,138,0.15)]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          {t('build.tabSummary')}
        </button>
      </div>

      {/* Desktop stacked layout (lg and up) */}
      <div className="hidden lg:block space-y-12">
        <PasoRental
          headingIndex={3}
          rentals={rentals}
          setRentalDays={setRentalDays}
          removeRental={removeRental}
        />
        <PasoExtras
          headingIndex={3}
          extras={extras}
          extrasQty={extrasQty}
          toggleExtra={toggleExtra}
          setExtraQty={setExtraQty}
        />
        <PasoResumen
          headingIndex={3}
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
      </div>

      {/* Mobile Tab-based layout */}
      <div className="lg:hidden">
        <div className={activeTab === 'options' ? 'space-y-6' : 'hidden'}>
          <PasoRental
            headingIndex={3}
            rentals={rentals}
            setRentalDays={setRentalDays}
            removeRental={removeRental}
          />
          <PasoExtras
            headingIndex={3}
            extras={extras}
            extrasQty={extrasQty}
            toggleExtra={toggleExtra}
            setExtraQty={setExtraQty}
          />
        </div>
        <div className={activeTab === 'summary' ? '' : 'hidden'}>
          <PasoResumen
            headingIndex={3}
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
        </div>
      </div>
    </div>
  )
}
