import SEO from '../components/SEO.jsx'
import { useTripBuilderStore } from '../store/useTripBuilderStore.js'

function IconKite({ className = 'h-7 w-7' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 12l8 10 8-10L12 2z" />
      <path d="M12 22v-10" />
      <path d="M4 12h16" />
    </svg>
  )
}

function IconWing({ className = 'h-7 w-7' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12c0-4 3-8 9-8s9 4 9 8" />
      <path d="M12 4v16" />
      <path d="M7 9c2-1 4-1.5 5-1.5s3 .5 5 1.5" />
      <path d="M5 14l7-2 7 2" />
    </svg>
  )
}

function IconSurf({ className = 'h-7 w-7' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 3L3 21" />
      <path d="M3 21c0 0 2-2 5-5 3-3 8-7 10-9s3-4 3-4" />
      <path d="M6 18c1-3 4-7 7-10" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  )
}

function IconSUP({ className = 'h-7 w-7' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v14" />
      <path d="M8 22c0-2 1.5-3 4-3s4 1 4 3" />
      <ellipse cx="12" cy="19" rx="5" ry="2" />
      <path d="M9 8h6" />
    </svg>
  )
}

function IconTransfer({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17h1l2-7h12l2 7h1" />
      <circle cx="7.5" cy="17" r="2" />
      <circle cx="16.5" cy="17" r="2" />
      <path d="M5.5 10V7a1 1 0 011-1h11a1 1 0 011 1v3" />
    </svg>
  )
}

function IconMeal({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 010 8h-1" />
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
      <path d="M6 1v3" />
      <path d="M10 1v3" />
      <path d="M14 1v3" />
    </svg>
  )
}

function IconYoga({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="2" />
      <path d="M12 6v4" />
      <path d="M8 10l4 2 4-2" />
      <path d="M12 12v5" />
      <path d="M9 21l3-4 3 4" />
    </svg>
  )
}

function IconMassage({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18h16" />
      <path d="M4 18c0-3 2-5 5-6" />
      <path d="M20 18c0-3-2-5-5-6" />
      <circle cx="12" cy="8" r="4" />
      <path d="M9 4c0-1 1-2 3-2s3 1 3 2" />
    </svg>
  )
}

function IconEquipment({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function IconCamera({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  )
}

const ACTIVIDADES = [
  { id: 'Kitesurf', label: 'Kitesurf', Icon: IconKite },
  { id: 'Wingfoil', label: 'Wingfoil', Icon: IconWing },
  { id: 'Surf', label: 'Surf', Icon: IconSurf },
  { id: 'SUP', label: 'SUP', Icon: IconSUP },
]

const NOCHES_OPTIONS = [3, 5, 7, 10, 14]

const HORAS_OPTIONS = [0, 3, 6, 10, 15]

const EXTRAS_OPTIONS = [
  { id: 'Kitesurf full gear rental', label: 'Kitesurf full gear rental', Icon: IconEquipment, precio: 60, unit: '/day' },
  { id: 'Wingfoil rental', label: 'Wingfoil rental', Icon: IconEquipment, precio: 60, unit: '/day' },
  { id: 'Surfboard rental', label: 'Surfboard rental', Icon: IconSurf, precio: 15, unit: '/day' },
  { id: 'SUP / Paddle rental', label: 'SUP / Paddle rental', Icon: IconSUP, precio: 30, unit: '/day' },
  { id: 'Day trip to other spots', label: 'Day trip to other spots', Icon: IconTransfer, precio: 55, unit: '/day' },
  { id: 'Water supervision', label: 'Water supervision (independent riders)', Icon: IconYoga, precio: 15, unit: '/hr' },
  { id: 'Massage', label: 'Massage', Icon: IconMassage, precio: 21, unit: '' },
  { id: 'Airport transfer', label: 'Airport transfer (direct payment to driver)', Icon: IconTransfer, precio: 42, unit: '' },
  { id: 'Photo & video pack', label: 'Photo & video pack', Icon: IconCamera, precio: 40, unit: '' },
]

const PRECIO_NOCHE = 50

const PRECIO_HORA_MAP = {
  Kitesurf: 60,
  Wingfoil: 60,
  Surf: 25,
  SUP: 30,
}

function calcularPrecio(actividad, noches, horas, extras, extrasQty) {
  const precioHora = PRECIO_HORA_MAP[actividad] || 60
  const base = noches * PRECIO_NOCHE + horas * precioHora
  const extrasTotal = extras.reduce((sum, extraId) => {
    const found = EXTRAS_OPTIONS.find((e) => e.id === extraId)
    if (!found) return sum
    const qty = (extrasQty && extrasQty[extraId]) || 1
    return sum + found.precio * qty
  }, 0)
  return base + extrasTotal
}

function StepIndicator({ pasoActual }) {
  const pasos = [
    { n: 1, label: 'Activity' },
    { n: 2, label: 'Nights' },
    { n: 3, label: 'Classes' },
    { n: 4, label: 'Extras' },
    { n: 5, label: 'Summary' },
  ]

  return (
    <div className="mb-10 flex items-center justify-center gap-1 sm:gap-2">
      {pasos.map((p, i) => (
        <div key={p.n} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                pasoActual >= p.n
                  ? 'bg-primary text-white'
                  : 'bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400'
              }`}
            >
              {p.n}
            </div>
            <span className="mt-1 hidden text-[10px] font-medium text-slate-500 dark:text-slate-400 sm:block">
              {p.label}
            </span>
          </div>
          {i < pasos.length - 1 && (
            <div
              className={`mx-1 h-0.5 w-6 sm:w-10 ${
                pasoActual > p.n ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )
}

function PasoActividad({ actividad, setActividad }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-slate-900 dark:text-white">Choose your activity</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">What do you want to do in Máncora?</p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {ACTIVIDADES.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => setActividad(a.id)}
            className={`flex flex-col items-center gap-3 rounded-xl border-2 p-5 text-center transition-all ${
              actividad === a.id
                ? 'border-primary bg-primary/10 shadow-md'
                : 'border-slate-200 bg-white hover:border-primary/50 dark:border-white/10 dark:bg-surface-dark dark:hover:border-primary/50'
            }`}
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${
              actividad === a.id ? 'bg-primary text-white' : 'bg-slate-800 text-white dark:bg-white/10'
            }`}>
              <a.Icon className="h-6 w-6" />
            </div>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">{a.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function PasoNoches({ noches, setNoches }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-slate-900 dark:text-white">How many nights?</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Select the duration of your stay.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {NOCHES_OPTIONS.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setNoches(n)}
            className={`flex h-20 w-20 flex-col items-center justify-center rounded-xl border-2 transition-all sm:h-24 sm:w-24 ${
              noches === n
                ? 'border-primary bg-primary/10 shadow-md'
                : 'border-slate-200 bg-white hover:border-primary/50 dark:border-white/10 dark:bg-surface-dark dark:hover:border-primary/50'
            }`}
          >
            <span className="text-2xl font-bold text-slate-900 dark:text-white">{n}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">nights</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function PasoHoras({ horas, setHoras, actividad }) {
  const precioHora = PRECIO_HORA_MAP[actividad] || 60
  return (
    <div>

      <h2 className="font-display text-2xl text-slate-900 dark:text-white sm:text-3xl">Class hours</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        How many hours of classes do you want?
        <span className="ml-1 font-medium text-primary">(${precioHora} USD/hr for {actividad})</span>
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {HORAS_OPTIONS.map((h) => (
          <button
            key={h}
            type="button"
            onClick={() => setHoras(h)}
            className={`flex h-20 w-20 flex-col items-center justify-center rounded-xl border-2 transition-all sm:h-24 sm:w-24 ${
              horas === h
                ? 'border-primary bg-primary/10 shadow-md'
                : 'border-slate-200 bg-white hover:border-primary/50 dark:border-white/10 dark:bg-surface-dark dark:hover:border-primary/50'
            }`}
          >
            <span className="text-2xl font-bold text-slate-900 dark:text-white">{h}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">hours</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function PasoExtras({ extras, extrasQty, toggleExtra, setExtraQty }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-slate-900 dark:text-white">Add extras</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Optional add-ons to enhance your trip.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {EXTRAS_OPTIONS.map((e) => {
          const selected = extras.includes(e.id)
          const qty = (extrasQty && extrasQty[e.id]) || 1
          const hasQty = e.unit === '/day' || e.unit === '/hr'
          return (
            <div
              key={e.id}
              className={`flex flex-col gap-3 rounded-xl border-2 p-4 transition-all ${
                selected
                  ? 'border-primary bg-primary/10 shadow-md'
                  : 'border-slate-200 bg-white dark:border-white/10 dark:bg-surface-dark'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleExtra(e.id)}
                className="flex items-center gap-3 text-left w-full"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                  selected ? 'bg-primary text-white' : 'bg-slate-800 text-white dark:bg-white/10'
                }`}>
                  <e.Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">{e.label}</span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">${e.precio} USD{e.unit ? ` ${e.unit}` : ''}</p>
                </div>
                <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 text-xs transition-colors ${
                  selected ? 'border-primary bg-primary text-white' : 'border-slate-300 dark:border-slate-600'
                }`}>
                  {selected && '✓'}
                </div>
              </button>

              {selected && hasQty && (
                <div className="flex items-center gap-2 border-t border-primary/20 pt-3">
                  <span className="text-xs text-slate-600 dark:text-slate-300">
                    {e.unit === '/day' ? 'Days:' : 'Hours:'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setExtraQty(e.id, qty - 1)}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-600 dark:text-slate-200"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm font-bold text-slate-900 dark:text-white">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setExtraQty(e.id, qty + 1)}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-600 dark:text-slate-200"
                  >
                    +
                  </button>
                  <span className="ml-auto text-xs font-semibold text-primary">
                    = ${e.precio * qty} USD
                  </span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function PasoResumen({ actividad, noches, horas, extras, extrasQty, datosUsuario, setDatosUsuario, generarLinkWhatsApp }) {
  const precioTotal = calcularPrecio(actividad, noches, horas, extras, extrasQty)
  const canSend = datosUsuario.nombre.trim() !== '' && datosUsuario.email.trim() !== ''
  const extrasSeleccionados = EXTRAS_OPTIONS.filter((e) => extras.includes(e.id))

  return (
    <div>
      <h2 className="font-display text-2xl text-slate-900 dark:text-white">Your trip summary</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Review your selections and send your request.</p>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-surface-dark">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Activity</p>
            <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{actividad || '—'}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Nights</p>
            <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{noches || '—'}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Class hours</p>
            <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{horas}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Extras</p>
            {extrasSeleccionados.length > 0 ? (
              <ul className="mt-1 space-y-1">
                {extrasSeleccionados.map((e) => {
                  const qty = (extrasQty && extrasQty[e.id]) || 1
                  const hasQty = e.unit === '/day' || e.unit === '/hr'
                  return (
                    <li key={e.id} className="flex items-center justify-between gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="flex items-center gap-2">
                        <e.Icon className="h-4 w-4 shrink-0 text-primary" />
                        {e.label}{hasQty ? ` ×${qty}` : ''}
                      </span>
                      <span className="shrink-0 font-medium text-slate-900 dark:text-white">
                        ${e.precio * qty} USD
                      </span>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p className="mt-1 text-sm text-slate-500">None</p>
            )}
          </div>
        </div>

        <div className="mt-6 border-t border-slate-200 pt-4 dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Estimated price</p>
          <p className="mt-1 text-3xl font-black text-slate-900 dark:text-white">${precioTotal} USD</p>
          <p className="mt-0.5 text-sm text-slate-400 dark:text-slate-500">≈ S/. {Math.round(precioTotal * 3.75)}</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Final price may vary. Our team will confirm the details.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="build-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Your name
          </label>
          <input
            id="build-name"
            type="text"
            value={datosUsuario.nombre}
            onChange={(e) => setDatosUsuario({ nombre: e.target.value })}
            placeholder="Your name"
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary dark:border-white/10 dark:bg-surface-dark dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="build-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
          </label>
          <input
            id="build-email"
            type="email"
            value={datosUsuario.email}
            onChange={(e) => setDatosUsuario({ email: e.target.value })}
            placeholder="you@email.com"
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary dark:border-white/10 dark:bg-surface-dark dark:text-white"
          />
        </div>
      </div>

      {!canSend && (
        <p className="mt-4 text-center text-xs text-red-500">
          Please enter your name and email to continue.
        </p>
      )}

      <div className="mt-8 flex justify-center">

        {canSend ? (
          <a
            href={generarLinkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.01] hover:shadow-xl sm:w-auto sm:px-8"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Send via WhatsApp
          </a>
        ) : (
          <span
            className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-slate-300 px-6 py-3 text-base font-semibold text-slate-500 sm:w-auto sm:px-8"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Send via WhatsApp
          </span>
        )}
      </div>
    </div>
  )
}

function BuildPage() {
  const {
    paso,
    actividad,
    noches,
    horas,
    extras,
    extrasQty,
    datosUsuario,
    setActividad,
    setNoches,
    setHoras,
    toggleExtra,
    setExtraQty,
    setDatosUsuario,
    siguientePaso,
    anteriorPaso,
    reiniciar,
    generarLinkWhatsApp,
  } = useTripBuilderStore()

  const canNext =
    (paso === 1 && actividad) ||
    (paso === 2 && noches > 0) ||
    (paso === 3) ||
    (paso === 4)

  return (
    <>
      <SEO
        title="Mancora Kite Club | Build Your Trip"
        description="Customize your trip with classes, stay, and add-ons."
        canonicalPath="/build"
        hreflang={{ en: '/build', es: '/esp', default: '/' }}
      />
      <section className="bg-background-light py-24 dark:bg-background-dark">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Build Your Trip</p>
            <h1 className="mt-3 font-display text-4xl text-slate-900 dark:text-white md:text-5xl">
              Create your perfect package
            </h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Choose activity, stay, classes and extras — all in 5 simple steps.
            </p>
          </div>

          <StepIndicator pasoActual={paso} />

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-surface-dark sm:p-8">
            {paso === 1 && <PasoActividad actividad={actividad} setActividad={setActividad} />}
            {paso === 2 && <PasoNoches noches={noches} setNoches={setNoches} />}
            {paso === 3 && <PasoHoras horas={horas} setHoras={setHoras} actividad={actividad} />}
            {paso === 4 && <PasoExtras extras={extras} extrasQty={extrasQty} toggleExtra={toggleExtra} setExtraQty={setExtraQty} />}
            {paso === 5 && (
              <PasoResumen
                actividad={actividad}
                noches={noches}
                horas={horas}
                extras={extras}
                extrasQty={extrasQty}
                datosUsuario={datosUsuario}
                setDatosUsuario={setDatosUsuario}
                generarLinkWhatsApp={generarLinkWhatsApp}
              />
            )}

            <div className="mt-8 flex items-center justify-between">
              {paso > 1 ? (
                <button
                  type="button"
                  onClick={anteriorPaso}
                  className="inline-flex rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary dark:border-slate-600 dark:text-slate-200"
                >
                  Back
                </button>
              ) : (
                <span />
              )}

              <div className="flex gap-3">
                {paso > 1 && (
                  <button
                    type="button"
                    onClick={reiniciar}
                    className="text-sm text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-300"
                  >
                    Reset
                  </button>
                )}
                {paso < 5 && (
                  <button
                    type="button"
                    onClick={siguientePaso}
                    disabled={!canNext}
                    className="inline-flex rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BuildPage
