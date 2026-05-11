import BlogCard from './BlogSidebar/BlogCard.jsx'
import LoadMorePosts from '../../../../components/blog/LoadMorePosts.jsx'
import { POSTS } from '../blogContent.js'
import { useI18n } from '../../../../app/providers/i18nContext'

function BlogPosts() {
  const { t } = useI18n()

  // Truco ninja ampliado: Traducimos TODO antes de renderizar
  const translatedPosts = POSTS.map((post) => ({
    ...post,
    title: t(post.title),
    category: t(post.category),
    date: t(post.date),
    author: t(post.author)
  }))

  return (
    <LoadMorePosts
      posts={translatedPosts}
      getKey={(post) => post.slug}
      renderPost={(post) => (
        <BlogCard
          slug={post.slug}
          category={post.category}
          title={post.title}
          date={post.date}
          author={post.author}
          image={post.image}
        />
      )}
    />
  )
}

export default BlogPosts