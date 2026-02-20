import SEO from '../components/SEO.jsx'

function ReviewsPage() {
  return (
    <>
      <SEO
        title="Mancora Kite Club | Reviews"
        description="Guest reviews from trips and classes in Máncora."
        canonicalPath="/reviews"
        hreflang={{ en: '/reviews', es: '/esp', default: '/' }}
      />
      <section className="bg-background-light py-28 dark:bg-background-dark">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Reviews</p>
          <h1 className="mt-4 font-display text-4xl text-slate-900 dark:text-white md:text-5xl">
            What riders say
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-300">
            Real feedback from guests who trained, stayed, and traveled with the club.
          </p>
        </div>
      </section>
    </>
  )
}

export default ReviewsPage
