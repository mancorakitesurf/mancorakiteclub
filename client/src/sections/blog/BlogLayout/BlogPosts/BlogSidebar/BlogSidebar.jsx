import { Link } from "react-router-dom"
import { TRENDING_POSTS } from "../../blogContent.js"
import { useI18n } from "../../../../../app/providers/i18nContext.js"
import { localizePath } from "../../../../../lib/routes.js"

function BlogSidebar() {
  const { t, currentLang } = useI18n()
  const visibleTrendingPosts = TRENDING_POSTS.slice(0, 4)

  return (
    <div className="flex flex-col gap-6">

      {/* Plan Trip Card */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-md group">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/25 blur-2xl transition duration-500 group-hover:scale-110" />
        <div className="absolute -bottom-12 left-0 h-24 w-24 rounded-full bg-slate-950/5 blur-2xl" />

        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-700/70">
            {t('blog.sidebar.planEyebrow')}
          </p>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-955">
            {t('blog.sidebar.planTitle')}
          </h3>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            {t('blog.sidebar.planDesc')}
          </p>

          <Link
            to={localizePath('/build', currentLang)}
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-cyan-700"
          style={{marginLeft:53}}>
            {t('blog.sidebar.planButton')}
          </Link>
        </div>
      </section>

      {/* Trending Posts */}
      <section className="h-fit rounded-[1.75rem] border border-slate-200 bg-white p-6 pb-8 shadow-[0_20px_38px_rgba(15,23,42,0.08)]">
        <div className="border-b border-slate-200 pb-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-700/70">
            {t('blog.sidebar.openedEyebrow')}
          </p>

          <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
            {t('blog.sidebar.openedTitle')}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            {t('blog.sidebar.openedDesc')}
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-4">
          {visibleTrendingPosts.map((post) => {
            const desktopSrc = post.desktopImage || post.image
            const mobileSrc = post.mobileImage || desktopSrc

            const translatedTitle = t(`blog.posts.${post.slug}.title`)
            const displayTitle = translatedTitle !== `blog.posts.${post.slug}.title` ? translatedTitle : post.title

            return (
              <Link
                key={post.slug}
                to={localizePath(`/blog/${post.slug}`, currentLang)}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-3 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-white hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)]"
              >
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-slate-200">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={desktopSrc} />
                    <img
                      src={mobileSrc}
                      alt={post.alt || displayTitle}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </picture>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-700/70">
                    {t('blog.sidebar.trendingRead')}
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-5 text-slate-900 transition group-hover:text-cyan-700">
                    {displayTitle}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

    </div>
  )
}

export default BlogSidebar
