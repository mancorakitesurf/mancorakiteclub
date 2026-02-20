import { BLOGHERO_IMAGE } from '../BlogLayout/blogContent.js'

function BlogHero() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={BLOGHERO_IMAGE}
          alt="Kite surfer jumping over waves in Mancora"
          className="h-full w-full object-cover"
        />
        
        {/* Overlay premium oscuro elegante */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        
        {/* Mini etiqueta */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-[2px] w-10 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
            The Journal
          </span>
          <span className="h-[2px] w-10 bg-primary" />
        </div>

        {/* Título */}
        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          Kitesurfing Perú <br />
          <span className="text-primary">
            Wave Riding & Ocean Stories
          </span>
        </h1>

        {/* Línea elegante */}
        <div className="mx-auto mt-8 h-[3px] w-24 rounded-full bg-primary/80" />

        {/* Subtexto */}
        <p className="mx-auto mt-10 max-w-3xl text-lg font-light leading-relaxed text-white/80 md:text-xl">
          Exploramos el viento, las olas y la cultura oceánica del norte del Perú.
          Historias reales, técnica y lifestyle desde Máncora.
        </p>

      </div>
    </section>
  )
}

export default BlogHero