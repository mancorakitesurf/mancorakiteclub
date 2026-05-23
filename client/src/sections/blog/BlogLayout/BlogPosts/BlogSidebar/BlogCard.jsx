import { Link } from "react-router-dom"
import { useI18n } from "../../../../../app/providers/i18nContext.js"
import { localizePath } from "../../../../../lib/routes.js"

function BlogCard({ slug, category, title, date, author, image, desktopImage, mobileImage }) {
  const { t, currentLang } = useI18n()

  const desktopSrc = desktopImage || image
  const mobileSrc = mobileImage || desktopSrc

  const translatedTitle = t(`blog.posts.${slug}.title`)
  const displayTitle = translatedTitle !== `blog.posts.${slug}.title` ? translatedTitle : title

  const translatedCategory = t(`blog.posts.${slug}.category`)
  const displayCategory = translatedCategory !== `blog.posts.${slug}.category` ? translatedCategory : category

  const translatedDate = t(`blog.posts.${slug}.date`)
  const displayDate = translatedDate !== `blog.posts.${slug}.date` ? translatedDate : date

  return (
    <Link to={localizePath(`/blog/${slug}`, currentLang)} className="block">
      <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:shadow-xl">
        
        {/* Imagen */}
        <div className="relative">
          <picture>
            <source media="(min-width: 768px)" srcSet={desktopSrc} />
            <img
              src={mobileSrc}
              alt={displayTitle}
              loading="lazy"
              className="aspect-[4/5] h-auto w-full object-cover transition duration-700 group-hover:scale-110 md:aspect-[16/10] lg:aspect-[16/9]"
            />
          </picture>

          {/* Badge categoría */}
          <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm sm:left-6 sm:top-6 sm:px-4 sm:text-xs">
            {displayCategory}
          </span>
        </div>

        {/* Contenido */}
        <div className="p-4 sm:p-6 lg:p-8">
          <h2 className="text-xl font-bold leading-snug text-slate-900 transition group-hover:text-primary sm:text-2xl">
            {displayTitle}
          </h2>

          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>{displayDate}</span>
            <span className="h-1 w-1 rounded-full bg-slate-400"></span>
            <span>By {author}</span>
          </div>
        </div>

      </article>
    </Link>
  )
}

export default BlogCard
