import Breadcrumbs from "./Breadcrumbs.jsx"
import MotionReveal from "./MotionReveal.jsx"

function ArticleHero({ post }) {
  if (!post) {
    return null
  }

  return (
    <header className="relative overflow-hidden bg-[#040b13] pt-24 sm:pt-28">
      <div className="absolute inset-0">
        <img
          src={post.heroImage}
          alt={post.heroAlt || post.title}
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.18),rgba(2,6,23,0.82)_45%,rgba(2,6,23,1))]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <Breadcrumbs title={post.title} />

        <MotionReveal className="mt-8 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-cyan-200/70">
            <span>{post.category}</span>
            {post.readTime ? (
              <>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span>{post.readTime}</span>
              </>
            ) : null}
          </div>

          <h1 className="mt-6 font-display text-2xl leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-200/[0.85] sm:text-base md:text-lg md:leading-8">
            {post.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200/75">
            {post.location ? <span>{post.location}</span> : null}
            {post.date ? <span>{post.date}</span> : null}
            {post.author ? <span>{post.author}</span> : null}
          </div>
        </MotionReveal>
      </div>
    </header>
  )
}

export default ArticleHero
