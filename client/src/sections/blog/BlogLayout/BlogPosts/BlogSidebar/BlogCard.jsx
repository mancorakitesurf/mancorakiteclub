import { Link } from "react-router-dom"

function BlogCard({ slug, category, title, date, author, image }) {
  return (
    <Link to={`/blog/${slug}`} className="block">
      <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:shadow-xl">
        
        {/* Imagen */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Badge categoría */}
          <span className="absolute left-6 top-6 rounded-full bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Contenido */}
        <div className="p-8">
          <h2 className="text-2xl font-bold leading-snug text-slate-900 transition group-hover:text-primary">
            {title}
          </h2>

          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>{date}</span>
            <span className="h-1 w-1 rounded-full bg-slate-400"></span>
            <span>By {author}</span>
          </div>
        </div>

      </article>
    </Link>
  )
}

export default BlogCard