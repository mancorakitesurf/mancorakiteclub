import { create } from 'zustand'
import { WHATSAPP_NUMBER } from '../lib/whatsapp.js'

const initialState = {
  paso: 1,
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
    set((state) => ({
      extras: state.extras.includes(extra)
        ? state.extras.filter((e) => e !== extra)
        : [...state.extras, extra],
      extrasQty: state.extras.includes(extra)
        ? Object.fromEntries(Object.entries(state.extrasQty).filter(([k]) => k !== extra))
        : { ...state.extrasQty, [extra]: state.extrasQty[extra] || 1 },
    })),

  setExtraQty: (extraId, qty) =>
    set((state) => ({
      extrasQty: { ...state.extrasQty, [extraId]: Math.max(1, qty) },
    })),

  setDatosUsuario: (datos) =>
    set((state) => ({
      datosUsuario: { ...state.datosUsuario, ...datos },
    })),

  siguientePaso: () =>
    set((state) => ({
      paso: Math.min(state.paso + 1, 5),
    })),

  anteriorPaso: () =>
    set((state) => ({
      paso: Math.max(state.paso - 1, 1),
    })),

  reiniciar: () => set(initialState),

  generarLinkWhatsApp: () => {
    const { actividad, noches, horas, extras, extrasQty, datosUsuario } = get()
    const extrasDetalle = extras
      .map((id) => {
        const qty = extrasQty[id]
        return qty && qty > 1 ? `${id} x${qty}` : id
      })
      .join(', ')
    const mensaje = `¡Hola Máncora Kite Club! 🏄
Quiero armar mi paquete:
🏋️ Actividad: ${actividad}
🌙 Noches: ${noches}
⏱️ Horas de clase: ${horas}
✨ Extras: ${extrasDetalle}
 Mi nombre es: ${datosUsuario.nombre}
 Email: ${datosUsuario.email}`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`
  },
}))