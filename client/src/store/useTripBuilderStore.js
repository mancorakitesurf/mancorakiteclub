import { create } from 'zustand'
import { WHATSAPP_NUMBER } from '../lib/whatsapp.js'

const initialState = {
  paso: 1,
  actividad: null,
  noches: 0,
  horas: 0,
  extras: [],
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
    const { actividad, noches, horas, extras, datosUsuario } = get()
    const mensaje = `¡Hola Máncora Kite Club! 
Quiero armar mi paquete:
 Actividad: ${actividad}
 Noches: ${noches}
 Horas de clase: ${horas}
 Extras: ${extras.join(', ')}
 Mi nombre es: ${datosUsuario.nombre}
 Email: ${datosUsuario.email}`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`
  },
}))