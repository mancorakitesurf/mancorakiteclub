import Card from '../../components/ui/Card.jsx'
import Container from '../../components/ui/Container.jsx'

function Packages() {
  const packages = ['TODO: package 1', 'TODO: package 2', 'TODO: package 3']

  return (
    <section className="bg-white py-14">
      <Container>
        <h2 className="text-2xl font-bold text-slate-900">Packages</h2>
        <p className="mt-2 text-slate-600">TODO: contenido real</p>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {packages.map((name) => (
            <Card key={name}>
              <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
              <p className="mt-2 text-sm text-slate-600">TODO: contenido real</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Packages
