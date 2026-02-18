import Container from '../../components/ui/Container.jsx'

function Gallery() {
  return (
    <section className="py-14">
      <Container>
        <h2 className="text-2xl font-bold text-slate-900">Gallery</h2>
        <p className="mt-2 text-slate-600">TODO: contenido real</p>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 8 }, (_, index) => (
            <div
              key={index}
              className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100 text-xs font-medium uppercase tracking-wide text-slate-500"
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
