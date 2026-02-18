import SEO from '../components/SEO.jsx'
import Card from '../components/ui/Card.jsx'
import Container from '../components/ui/Container.jsx'

function StandardPage({ title, description, canonicalPath, hreflang }) {
  return (
    <>
      <SEO
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        hreflang={hreflang}
      />
      <section className="py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Page Scaffold</p>
            <h1 className="mt-3 text-4xl font-black text-slate-900">{title}</h1>
            <p className="mt-4 text-slate-700">TODO: contenido real</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Card>
              <h2 className="text-lg font-semibold text-slate-900">TODO: bloque principal</h2>
              <p className="mt-2 text-sm text-slate-600">TODO: contenido real</p>
            </Card>
            <Card>
              <h2 className="text-lg font-semibold text-slate-900">TODO: bloque secundario</h2>
              <p className="mt-2 text-sm text-slate-600">TODO: contenido real</p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}

export default StandardPage
