import { getPremiumBlogPostBySlug } from '../../data/posts.js'
import ArticleScrollerBase from "../blogShared/ArticleScrollerBase.jsx"

function MancoraBeginnerScroller() {
  const post = getPremiumBlogPostBySlug('learn-kitesurfing-in-peru-mancora-beginner-guide')
  
  const sections = post.sections?.map((sec, index) => ({
    eyebrow: sec.title.split(' ')[0],
    title: sec.title,
    paragraphs: sec.paragraphs,
    bullets: sec.bullets,
    facts: sec.comparison ? sec.comparison.rows.map(row => ({ label: row[0], value: row[1] })) : [],
    image: post.gallery?.[(index * 2) % post.gallery.length]?.src,
    imageAlt: post.gallery?.[(index * 2) % post.gallery.length]?.alt,
    caption: sec.bulletsTitle || "",
    supportImage: post.gallery?.[(index * 2 + 1) % post.gallery.length]?.src,
    supportAlt: post.gallery?.[(index * 2 + 1) % post.gallery.length]?.alt,
    supportCaption: "",
  })) || []

  return (
    <ArticleScrollerBase
      eyebrow="Deep Dive"
      title="Exploring the Details"
      description="Read further to understand more about this topic."
      sections={sections}
    />
  )
}
export default MancoraBeginnerScroller
