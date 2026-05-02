import BlogPosts from './BlogPosts/BlogPosts.jsx'
import BlogSidebar from './BlogPosts/BlogSidebar/BlogSidebar.jsx'

function BlogLayout() {
  return (
    <section className="bg-white py-16 text-slate-900 sm:py-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-10 lg:px-8">
        <div className="w-full rounded-2xl bg-white p-4 text-black shadow-xl sm:p-6 lg:w-2/3">
          <BlogPosts />
        </div>

        <aside className="h-fit w-full self-start lg:w-1/3">
          <BlogSidebar />
        </aside>
      </div>
    </section>
  )
}

export default BlogLayout
