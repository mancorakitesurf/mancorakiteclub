import { TRENDING_POSTS } from '../../blogContent.js';

function BlogSidebar() {
  return (
    <aside className="space-y-10">

      {/* Sección de categorías populares */}
      <div>
        <h3 className="text-xl font-semibold border-b pb-3 text-black">
          3 Most Popular Categories
        </h3>
        <ul className="mt-4 space-y-2">
          <li className="text-sm text-black hover:text-cyan-600 cursor-pointer transition">
            Kitesurf Wave Riding
          </li>
          <li className="text-sm text-black hover:text-cyan-600 cursor-pointer transition">
            Kitesurfing Peru
          </li>
          <li className="text-sm text-black hover:text-cyan-600 cursor-pointer transition">
            Job Vacancies
          </li>
        </ul>
      </div>

      {/* Sección de trending posts */}
      <div>
        <h3 className="text-xl font-semibold border-b pb-3 text-black">
          Trending Posts
        </h3>
        <div className="space-y-4">
          {TRENDING_POSTS.map((post, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group cursor-pointer"
            >
              {/* Imagen pequeña */}
              <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Título */}
              <p className="text-sm font-medium leading-tight text-black group-hover:text-cyan-600 transition">
                {post.title}
              </p>
            </div>
          ))}
        </div>
      </div>

    </aside>
  )
}

export default BlogSidebar;
