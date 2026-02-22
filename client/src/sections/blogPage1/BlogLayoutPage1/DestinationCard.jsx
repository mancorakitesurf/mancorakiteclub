import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

function DestinationCard({ data, index }) {
  const [open, setOpen] = useState(false)

  const isTop = index === 0

  return (
    <>
      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.05 }}
        viewport={{ once: true }}
        onClick={() => setOpen(true)}
        className={`group text-black text-sm relative cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
          isTop ? "ring-2 ring-cyan-600 scale-[1.03]" : ""
        }`}
      >
        {/* Número */}
        <div className="absolute top-5 left-5 text-white text-4xl font-bold z-20 opacity-80">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Imagen */}
        <div className="h-64 overflow-hidden">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="text-black text-sm font-semibold tracking-wide">
            {data.name}
          </h3>

          <div className="flex items-center mt-3 gap-2">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-slate-600 text-sm">
              {data.rating} / 5
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            {data.shortDescription}
          </p>
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
              className="bg-white max-w-3xl w-full rounded-3xl p-10 relative shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-black transition"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold mb-8 tracking-wide text-black">
                {data.name}
              </h2>

              {/* GRID INFO */}
              <div className="grid md:grid-cols-2 gap-6 text-sm mb-10">

                <InfoItem icon={<WaveIcon />} label="Wave Quality" value={data.wave} />
                <InfoItem icon={<WindIcon />} label="Wind" value={data.wind} />
                <InfoItem icon={<ShieldIcon />} label="Hazards" value={data.hazards} />
                <InfoItem icon={<LevelIcon />} label="Level" value={data.level} />
                <InfoItem icon={<CalendarIcon />} label="Season" value={data.season} />
                <InfoItem icon={<UsersIcon />} label="Crowds" value={data.crowds} />

              </div>

              <p className="text-slate-600 leading-relaxed text-[15px]">
                {data.description}
              </p>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default DestinationCard



/* ---------- COMPONENTE INFO ITEM ---------- */

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



/* ---------- ICONOS MINIMALISTAS ---------- */

const iconClass = "w-5 h-5"

const WaveIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M2 16c2-4 6-6 10-6 4 0 7 2 10 6" />
  </svg>
)

const WindIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M3 12h13a3 3 0 100-6" />
  </svg>
)

const ShieldIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M12 3l8 4v6c0 5-4 8-8 8s-8-3-8-8V7l8-4z" />
  </svg>
)

const LevelIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M4 18h16M6 14h12M8 10h8" />
  </svg>
)

const CalendarIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="16" rx="2" />
  </svg>
)

const UsersIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <circle cx="9" cy="8" r="4" />
    <path d="M17 11a4 4 0 110-8" />
  </svg>
)