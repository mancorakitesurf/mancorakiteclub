import { FaWater, FaUsers, FaShieldAlt, FaStar } from 'react-icons/fa'
import founderImg from '../../assets/fotos equipo/DSC07657.webp'

const VALUES = [
  { icon: FaWater, text: 'Dominio del spot: 15+ años navegando las olas del norte del Perú' },
  { icon: FaStar, text: 'Progresión real: cada alumno aprende a moverse en el mar con confianza' },
  { icon: FaShieldAlt, text: 'Seguridad ante todo: radios, equipo premium y acompañamiento constante' },
  { icon: FaUsers, text: 'Más que una escuela: deporte, mar, comunidad y conexión con el entorno' },
]

function OurStory() {
  return (
    <section
      id="our-story"
      className="border-y border-gray-200 bg-surface-light py-16 sm:py-20 lg:py-28 dark:border-white/5 dark:bg-surface-dark/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-primary">
            Our Story
          </span>
          <h2 className="font-display text-2xl font-bold dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Más de 15 años en el agua
          </h2>
        </div>

        {/* Main content: photo + story */}
        <div className="flex flex-col items-start gap-10 sm:gap-12 lg:flex-row lg:gap-16">
          {/* Photo */}
          <div className="relative w-full lg:w-2/5">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
            <img
              src={founderImg}
              alt="Enrique, fundador de Máncora Kite Club"
              loading="lazy"
              className="relative z-10 h-[380px] w-full rounded-3xl object-cover shadow-xl sm:h-[460px] lg:h-[540px]"
            />
            {/* Founder label */}
            <div className="absolute bottom-4 left-4 z-20 rounded-2xl bg-white/90 px-5 py-3 shadow-lg backdrop-blur-sm dark:bg-slate-900/90">
              <p className="text-sm font-bold text-slate-900 dark:text-white">Enrique</p>
              <p className="text-xs font-medium text-primary">Fundador &amp; Head Instructor</p>
            </div>
          </div>

          {/* Story text + values */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-5 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
              <p>
                Soy Enrique, fundador de Máncora Kite Club. Llevo más de 15 años viviendo y navegando
                en este spot, conociendo a fondo cada condición de viento y, sobre todo, las olas del
                norte del Perú.
              </p>
              <p>
                Lo que más me apasiona es navegar con tabla de surf, aprovechando el potencial único
                que tienen estos spots. El norte del Perú es especial porque combina viento constante
                con olas de calidad, algo que no se encuentra fácilmente en otros lugares. Esa
                combinación es la base de todo lo que hacemos.
              </p>
              <p>
                Mi enfoque es que cada persona que llega no solo aprenda, sino que realmente progrese
                y entienda cómo moverse en el mar, incluso en condiciones de olas. Trabajamos con
                equipos de calidad, sesiones seguras con radios y acompañamiento constante en el agua,
                para que cada alumno se sienta confiado desde el primer día y pueda avanzar de forma
                real.
              </p>
              <p>
                Más que una escuela, esto es un estilo de vida. Buscamos que cada persona viva la
                experiencia completa: deporte, mar, comunidad y conexión con el entorno. La idea es
                que no solo vengas a tomar clases, sino que descubras un lugar al que siempre quieras
                volver.
              </p>
            </div>

            {/* Values */}
            <ul className="mt-10 space-y-4">
              {VALUES.map((value) => {
                const Icon = value.icon
                return (
                  <li key={value.text} className="group flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white dark:bg-primary/20">
                      <Icon />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-gray-700 dark:text-gray-200 sm:text-base">
                      {value.text}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
