import SEO from '../components/SEO.jsx'

function StayPage() {
  return (
    <>
      <SEO
        title="Mancora Kite Club | Stay with us"
        description="Accommodation options for your Máncora stay."
        canonicalPath="/stay"
        hreflang={{ en: '/stay', es: '/esp', default: '/' }}
      />
      <section className="bg-background-light py-28 dark:bg-background-dark">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Stay with us</p>
          <h1 className="mt-4 font-display text-4xl text-slate-900 dark:text-white md:text-5xl">
            One place to stay, close to every session
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-300">
            Comfortable rooms, calm spaces, and quick access to the beach.
          </p>
        </div>
      </section>
    </>
  )
}

export default StayPage
