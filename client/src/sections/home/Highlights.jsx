import Card from '../../components/ui/Card.jsx'
import Container from '../../components/ui/Container.jsx'

function Highlights() {
  const items = ['TODO: highlight 1', 'TODO: highlight 2', 'TODO: highlight 3']

  return (
    <section className="py-14">
      <Container>
        <h2 className="text-2xl font-bold text-slate-900">Highlights</h2>
        <p className="mt-2 text-slate-600">TODO: contenido real</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item}>
              <h3 className="text-base font-semibold text-slate-900">{item}</h3>
              <p className="mt-2 text-sm text-slate-600">TODO: contenido real</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Highlights
