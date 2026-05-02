import Card from '../../components/ui/Card.jsx'
import Container from '../../components/ui/Container.jsx'

function Highlights() {
  const items = ['TODO: highlight 1', 'TODO: highlight 2', 'TODO: highlight 3']

  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">Highlights</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">TODO: contenido real</p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {items.map((item) => (
            <Card key={item}>
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{item}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">TODO: contenido real</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Highlights
