import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useI18n } from "../../../app/providers/i18nContext"

function DestinationCard({ data, index }) {
  const [open, setOpen] = useState(false)
  const { t } = useI18n()
  const isTop = index === 0

  return (
    <>
      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: (index % 3) * 0.05 }}
        viewport={{ once: true }}
        onClick={() => setOpen(true)}
        className={`group text-black text-sm relative cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${isTop ? "ring-2 ring-cyan-600 scale-[1.03]" : ""
          }`}
      >
        <div className="absolute top-5 left-5 text-white text-4xl font-bold z-20 opacity-80">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="h-64 overflow-hidden">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-black text-sm font-semibold tracking-wide">{data.name}</h3>
          <div className="flex items-center mt-3 gap-2">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-slate-600 text-sm">{data.rating} / 5</span>
          </div>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">{data.shortDescription}</p>
        </div>
      </motion.div>

      {/* MODAL PREMIUM */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 px-6"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-3xl w-full rounded-3xl p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-black transition"
              >✕</button>

              <h2 className="text-3xl font-bold mb-8 tracking-wide text-black">{data.name}</h2>

              {/* GRID INFO */}
              <div className="grid md:grid-cols-2 gap-6 text-sm mb-10">
                <InfoItem icon={<WaveIcon />} label={t('blogTop20.ui.waveQuality')} value={data.wave} />
                <InfoItem icon={<WindIcon />} label={t('blogTop20.ui.wind')} value={data.wind} />
                {/* Traducimos los valores estáticos de Hazards y Crowds al vuelo */}
                <InfoItem icon={<ShieldIcon />} label={t('blogTop20.ui.hazards')} value={t(`blogTop20.ui.levels.${data.hazards}`, { defaultValue: data.hazards })} />
                <InfoItem icon={<LevelIcon />} label={t('blogTop20.ui.level')} value={data.level} />
                <InfoItem icon={<CalendarIcon />} label={t('blogTop20.ui.season')} value={data.season} />
                <InfoItem icon={<UsersIcon />} label={t('blogTop20.ui.crowds')} value={t(`blogTop20.ui.levels.${data.crowds}`, { defaultValue: data.crowds })} />
              </div>

              <p className="text-slate-600 leading-relaxed text-[15px]">{data.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-cyan-600">{icon}</div>
      <span className="text-black">
        <strong>{label}:</strong> {value}
      </span>
    </div>
  )
}

// ... AQUÍ DEJA TUS CONSTANTES DE ICONOS SVG EXACTAMENTE COMO ESTABAN ...
export default DestinationCard