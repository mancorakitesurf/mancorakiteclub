import BlogCard from './BlogSidebar/BlogCard.jsx'
import { POSTS } from '../blogContent.js'

function BlogPosts() {
  return (
    <div className="grid grid-cols-1 gap-8">
      {POSTS.map((post, index) => (
        <BlogCard
          key={index}
          slug={post.slug}
          category={post.category}
          title={post.title}
          date={post.date}
          author={post.author}
          image={post.image}
        />
      ))}
    </div>
  )
}

export default BlogPosts
