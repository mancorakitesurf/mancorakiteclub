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

  toggleExtra: (extra) => {
    const { extras } = get()
    const existe = extras.includes(extra)
    if (existe) {
      set({ extras: extras.filter((e) => e !== extra) })
    } else {
      set({ extras: [...extras, extra] })
    }
  },

  setDatosUsuario: (datos) =>
    set((state) => ({
      datosUsuario: { ...state.datosUsuario, ...datos },
    })),

  siguientePaso: () => {
    const { paso } = get()
    if (paso < 5) {
      set({ paso: paso + 1 })
    }
  },

  anteriorPaso: () => {
    const { paso } = get()
    if (paso > 1) {
      set({ paso: paso - 1 })
    }
  },

  reiniciar: () => set(initialState),

  generarLinkWhatsApp: () => {
    const { actividad, noches, horas, extras, datosUsuario } = get()

    const actividadMap = {
      kitesurf: 'Kitesurf',
      wingfoil: 'Wingfoil',
      surf: 'Surf',
    }

    const actividadTexto = actividad ? actividadMap[actividad] || actividad : 'Sin seleccionar'
    const extrasTexto = extras.length > 0 ? extras.join(', ') : 'Ninguno'

    const mensaje = `¡Hola Máncora Kite Club! 🏄
Quiero armar mi paquete:
🏋️ Actividad: ${actividadTexto}
🌙 Noches: ${noches}
⏱️ Horas de clase: ${horas}
✨ Extras: ${extrasTexto}
👤 Mi nombre es: ${datosUsuario.nombre}
📧 Email: ${datosUsuario.email || 'No proporcionado'}`

    const encodedMessage = encodeURIComponent(mensaje)
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
  },
}))