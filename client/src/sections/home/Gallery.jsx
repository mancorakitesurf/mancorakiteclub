import Container from '../../components/ui/Container.jsx'

function Gallery() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">Gallery</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">TODO: contenido real</p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10">
          {Array.from({ length: 8 }, (_, index) => (
            <div
              key={index}
              className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100 p-4 text-xs font-medium uppercase tracking-wide text-slate-500 sm:p-6"
            >
              TODO
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Gallery
