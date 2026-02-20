import BlogPosts from './BlogPosts/BlogPosts.jsx'
import BlogSidebar from './BlogPosts/BlogSidebar/BlogSidebar.jsx'

function BlogLayout() {
  return (
    <section className="py-24 bg-gradient-to-r bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-16 px-6">
        
        {/* Columna izquierda */}
        <div className="col-span-2 bg-white shadow-xl rounded-xl p-6 text-black">
          <BlogPosts />
        </div>

        {/* Columna derecha */}
        <div className="col-span-1 bg-white border-l-4 border-cyan-600 shadow-lg rounded-xl p-6 text-black">
          <BlogSidebar />
        </div>

      </div>
    </section>
  )
}

export default BlogLayout;
