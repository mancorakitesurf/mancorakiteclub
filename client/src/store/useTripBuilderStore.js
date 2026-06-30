import { create } from 'zustand'
import { WHATSAPP_NUMBER } from '../lib/whatsapp.js'
import { arePackagesConflicting, getPackageById, getRentalPrice } from '../sections/build/buildData.js'

// Step bounds for the trip builder
const MIN_STEP = 1
const MAX_STEP = 3
const INITIAL_STEP = 1

// Minimum quantity for extras
const MIN_EXTRA_QTY = 1

const getTodayString = () => {
  const d = new Date()
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const initialState = {
  paso: INITIAL_STEP,
  selectedPackages: [],
  rentals: [],
  noches: 3,
  fechaInicio: getTodayString(),
  personas: 1,
  extras: [],
  extrasQty: {},
  datosUsuario: {
    nombre: '',
    email: '',
    telefono: '',
    nivel: '',
    notas: '',
  },
}

export const useTripBuilderStore = create((set, get) => ({
  ...initialState,

  addPackage: (packageId, activityId) =>
    set((state) => {
      if (state.selectedPackages.some((pkg) => pkg.packageId === packageId)) {
        return state
      }
      const pkg = getPackageById(packageId)
      if (!pkg) return state
      const nextPackages = state.selectedPackages.filter(
        (existing) => !arePackagesConflicting(existing.packageId, packageId),
      )
      return {
        selectedPackages: [
          ...nextPackages,
          { packageId, activityId: activityId || pkg.activityId },
        ],
      }
    }),

  removePackage: (packageId) =>
    set((state) => ({
      selectedPackages: state.selectedPackages.filter((pkg) => pkg.packageId !== packageId),
    })),

  setRentalDays: (rentalId, days) =>
    set((state) => {
      const normalizedDays = Number(days) || 0
      if (normalizedDays <= 0) {
        return { rentals: state.rentals.filter((rental) => rental.rentalId !== rentalId) }
      }
      const existing = state.rentals.find((rental) => rental.rentalId === rentalId)
      if (existing) {
        return {
          rentals: state.rentals.map((rental) =>
            rental.rentalId === rentalId ? { ...rental, days: normalizedDays } : rental,
          ),
        }
      }
      return { rentals: [...state.rentals, { rentalId, days: normalizedDays }] }
    }),

  removeRental: (rentalId) =>
    set((state) => ({
      rentals: state.rentals.filter((rental) => rental.rentalId !== rentalId),
    })),

  setNoches: (noches) => set({ noches }),

  setFechaInicio: (fechaInicio) => set({ fechaInicio }),

  setPersonas: (personas) => set({ personas: Math.max(1, Number(personas) || 1) }),

  toggleExtra: (extra) =>
    set((state) => {
      const alreadySelected = state.extras.includes(extra)

      return {
        extras: alreadySelected
          ? state.extras.filter((e) => e !== extra)
          : [...state.extras, extra],

        extrasQty: alreadySelected
          ? Object.fromEntries(
              Object.entries(state.extrasQty).filter(([key]) => key !== extra),
            )
          : {
              ...state.extrasQty,
              [extra]: state.extrasQty[extra] || MIN_EXTRA_QTY,
            },
      }
    }),

  setExtraQty: (extraId, qty) =>
    set((state) => ({
      extrasQty: {
        ...state.extrasQty,
        [extraId]: Math.max(MIN_EXTRA_QTY, Number(qty) || MIN_EXTRA_QTY),
      },
    })),

  setDatosUsuario: (datos) =>
    set((state) => ({
      datosUsuario: {
        ...state.datosUsuario,
        ...datos,
      },
    })),

  siguientePaso: () =>
    set((state) => ({
      paso: Math.min(state.paso + 1, MAX_STEP),
    })),

  anteriorPaso: () =>
    set((state) => ({
      paso: Math.max(state.paso - 1, MIN_STEP),
    })),

  reiniciar: () => set(initialState),

  reset: () => set(initialState),

  setPaso: (paso) =>
    set({ paso: Math.max(MIN_STEP, Math.min(MAX_STEP, paso)) }),

  generarLinkWhatsApp: () => {
    const { selectedPackages, rentals, noches, personas, extras, extrasQty, datosUsuario } = get()

    const formatLabel = (value) =>
      value
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase())

    const packagesDetalle = selectedPackages
      .map((pkg) => {
        const found = getPackageById(pkg.packageId)
        if (!found) return pkg.packageId
        return `${formatLabel(pkg.packageId)} (${found.duration}) - $${found.price}`
      })
      .join(', ')

    const rentalsDetalle = rentals
      .map((rental) => {
        const price = getRentalPrice(rental.rentalId, rental.days)
        const label = formatLabel(rental.rentalId)
        return `${label} (${rental.days} dias) - $${price}`
      })
      .join(', ')

    const extrasDetalle = extras
      .map((id) => {
        const qty = extrasQty[id]
        return qty && qty > MIN_EXTRA_QTY ? `${id} x${qty}` : id
      })
      .join(', ')

    const mensaje = `¡Hola Máncora Kite Club! 🏄
Quiero armar mi paquete:
🏄 Paquetes: ${packagesDetalle || 'Sin paquetes'}
🧰 Rentales: ${rentalsDetalle || 'Sin rental'}
🌙 Noches: ${noches}
👥 Personas: ${personas}
✨ Extras: ${extrasDetalle || 'Sin extras'}
Mi nombre es: ${datosUsuario.nombre || 'No indicado'}
Email: ${datosUsuario.email || 'No indicado'}`

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`
  },
}))
