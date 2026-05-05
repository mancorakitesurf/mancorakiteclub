import { create } from 'zustand'
import { WHATSAPP_NUMBER } from '../lib/whatsapp.js'

// Step bounds for the trip builder
const MIN_STEP = 1
const MAX_STEP = 5
const INITIAL_STEP = 1

// Minimum quantity for extras
const MIN_EXTRA_QTY = 1

const initialState = {
  paso: INITIAL_STEP,
  actividad: null,
  noches: 0,
  horas: 0,
  extras: [],
  extrasQty: {},
  datosUsuario: {
    nombre: '',
    email: '',
  },
}

export const useTripBuilderStore = create((set, get) => ({
  ...initialState,

  setActividad: (actividad) => set({ actividad }),

  setNoches: (noches) => set({ noches }),

  setHoras: (horas) => set({ horas }),

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

  generarLinkWhatsApp: () => {
    const { actividad, noches, horas, extras, extrasQty, datosUsuario } = get()

    const extrasDetalle = extras
      .map((id) => {
        const qty = extrasQty[id]
        return qty && qty > MIN_EXTRA_QTY ? `${id} x${qty}` : id
      })
      .join(', ')

    const mensaje = `¡Hola Máncora Kite Club! 🏄
Quiero armar mi paquete:
🏋️ Actividad: ${actividad || 'No seleccionada'}
🌙 Noches: ${noches}
⏱️ Horas de clase: ${horas}
✨ Extras: ${extrasDetalle || 'Sin extras'}
Mi nombre es: ${datosUsuario.nombre || 'No indicado'}
Email: ${datosUsuario.email || 'No indicado'}`

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`
  },
}))