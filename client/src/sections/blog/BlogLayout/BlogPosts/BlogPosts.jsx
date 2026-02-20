import BlogCard from './BlogSidebar/BlogCard.jsx'
import { POSTS } from '../blogContent.js'

function BlogPosts() {
  return (
    <div className="space-y-24">
      {POSTS.map((post, index) => (
        <BlogCard
          key={index}
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