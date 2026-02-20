import SEO from '../components/SEO.jsx'

function BuildPage() {
  return (
    <>
      <SEO
        title="Mancora Kite Club | Build your trip"
        description="Customize your trip with classes, stay, and add-ons."
        canonicalPath="/build"
        hreflang={{ en: '/build', es: '/esp', default: '/' }}
      />
      <section className="bg-background-light py-28 dark:bg-background-dark">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Build your trip
          </p>
          <h1 className="mt-4 font-display text-4xl text-slate-900 dark:text-white md:text-5xl">
            Assemble your plan in minutes
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-300">
            Mix sessions, stay, and extras to create a tailored kitesurf experience.
          </p>
        </div>
      </section>
    </>
  )
}

export default BuildPage
