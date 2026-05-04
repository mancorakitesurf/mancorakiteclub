import SEO from '../components/SEO.jsx'
import Container from '../components/ui/Container.jsx'

function StandardPage({
  title,
  description,
  canonicalPath,
  hreflang,
  subtitle,
  cta,
  children,
  showHeader = false,
  fullWidth = false,
}) {
  return (
    <>
      <SEO
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        hreflang={hreflang}
      />

      <main className="bg-background-light text-slate-900 dark:bg-background-dark dark:text-white">
        {showHeader && (
          <section className="py-16 sm:py-20 lg:py-24">
            <Container>
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  Mancora Kite Club
                </p>

                <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  {title}
                </h1>

                {subtitle && (
                  <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                    {subtitle}
                  </p>
                )}

                {cta && (
                  <a
                    href={cta.href}
                    target={cta.href.startsWith('http') ? '_blank' : undefined}
                    rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-primary/90 sm:w-auto"
                  >
                    {cta.label}
                  </a>
                )}
              </div>
            </Container>
          </section>
        )}

        {children && (
          fullWidth ? (
            <div>{children}</div>
          ) : (
            <section className="py-10 sm:py-12 lg:py-16">
              <Container>{children}</Container>
            </section>
          )
        )}
      </main>
    </>
  )
}

export default StandardPage