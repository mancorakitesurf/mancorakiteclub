import BlogCard from './BlogSidebar/BlogCard.jsx'
import LoadMorePosts from '../../../../components/blog/LoadMorePosts.jsx'
import { POSTS } from '../blogContent.js'
import { useI18n } from '../../../../app/providers/i18nContext.js'

function BlogPosts() {
  const { t } = useI18n()

  return (
    <LoadMorePosts
      posts={POSTS}
      getKey={(post) => post.slug}
      buttonLabel={t('blog.common.loadMore')}
      renderPost={(post) => (
        <BlogCard
          slug={post.slug}
          category={post.category}
          title={post.title}
          date={post.date}
          author={post.author}
          image={post.image}
          desktopImage={post.desktopImage}
          mobileImage={post.mobileImage}
        />
      )}
    />
  )
}

export default BlogPosts
