import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { POSTS } from '../../sections/blog/BlogLayout/blogContent.js'

function BlogPostPage() {
  const { slug } = useParams()

  const post = POSTS.find(p => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) return <div>Post not found</div>

  const Component = post.component

  return <Component />
}

export default BlogPostPage;