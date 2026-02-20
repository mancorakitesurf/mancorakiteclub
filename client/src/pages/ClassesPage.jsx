import SEO from '../components/SEO.jsx'

function ClassesPage() {
  return (
    <>
      <SEO
        title="Mancora Kite Club | Classes"
        description="Kite and wingfoil classes without accommodation."
        canonicalPath="/classes"
        hreflang={{ en: '/classes', es: '/esp', default: '/' }}
      />
      <section className="bg-background-light py-28 dark:bg-background-dark">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Classes</p>
          <h1 className="mt-4 font-display text-4xl text-slate-900 dark:text-white md:text-5xl">
            Coaching without accommodation
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-300">
            Private or small-group sessions designed for fast progression on the water.
          </p>
        </div>
      </section>
    </>
  )
}

export default ClassesPage
