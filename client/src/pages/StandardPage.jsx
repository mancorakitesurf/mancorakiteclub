import SEO from '../components/SEO.jsx'
import Card from '../components/ui/Card.jsx'
import Container from '../components/ui/Container.jsx'

function StandardPage({
  title,
  description,
  canonicalPath,
  hreflang,
  subtitle,
  cta,
  children,
}) {
  return (
    <>
      <SEO
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        hreflang={hreflang}
      />
      <section className="py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Page Scaffold</p>
            <h1 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">{title}</h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">{subtitle || 'TODO: contenido real'}</p>
            {cta ? (
              <a
                href={cta.href}
                target={cta.href.startsWith('http') ? '_blank' : undefined}
                rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white sm:w-auto"
              >
                {cta.label}
              </a>
            ) : null}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            <Card>
              <h2 className="text-lg font-semibold text-slate-900">TODO: bloque principal</h2>
              <p className="mt-2 text-sm text-slate-600">TODO: contenido real</p>
            </Card>
            <Card>
              <h2 className="text-lg font-semibold text-slate-900">TODO: bloque secundario</h2>
              <p className="mt-2 text-sm text-slate-600">TODO: contenido real</p>
            </Card>
          </div>

          {children ? <div className="mt-8">{children}</div> : null}
        </Container>
      </section>
    </>
  )
}

export default StandardPage
