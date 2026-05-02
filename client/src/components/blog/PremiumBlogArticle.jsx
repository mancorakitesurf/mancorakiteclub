import { useEffect } from "react"
import SEO from "../SEO.jsx"
import { getRelatedPremiumPosts } from "../../data/posts.js"
import ReadingProgressBar from "./ReadingProgressBar.jsx"
import ArticleHero from "./ArticleHero.jsx"
import QuickFacts from "./QuickFacts.jsx"
import ImageCarousel from "./ImageCarousel.jsx"
import ArticleSection from "./ArticleSection.jsx"
import RelatedPostsSidebar from "./RelatedPostsSidebar.jsx"
import SubscribeForm from "./SubscribeForm.jsx"
import CTASection from "./CTASection.jsx"
import MotionReveal from "./MotionReveal.jsx"

function PremiumBlogArticle({ post }) {
  useEffect(() => {
    if (post?.slug) {
      window.scrollTo({ top: 0, behavior: "auto" })
    }
  }, [post?.slug])

  if (!post) {
    return null
  }

  const relatedPosts = getRelatedPremiumPosts(post)

  return (
    <>
      <SEO
        title={post.seoTitle}
        description={post.description}
        canonicalPath={`/blog/${post.slug}`}
        hreflang={{ en: `/blog/${post.slug}`, es: "/esp", default: `/blog/${post.slug}` }}
      />

      <ReadingProgressBar />
      <ArticleHero post={post} />

      <article className="bg-[linear-gradient(180deg,#040b13_0%,#07121f_40%,#091523_100%)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(300px,0.75fr)] lg:gap-10 lg:px-8 lg:py-16">
          <div className="space-y-8">
            <MotionReveal className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_52px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/[0.65]">
                Narrative Introduction
              </p>
              <div className="mt-5 space-y-5 text-base leading-8 text-slate-200/[0.88]">
                {post.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </MotionReveal>

            <QuickFacts facts={post.quickFacts} />
            <ImageCarousel title={`${post.location} in frames`} images={post.gallery} />

            {post.sections.map((section, index) => (
              <ArticleSection key={section.title} section={section} index={index} />
            ))}

            <SubscribeForm />
            <CTASection title={post.cta.title} body={post.cta.body} />
          </div>

          <RelatedPostsSidebar currentPost={post} relatedPosts={relatedPosts} />
        </div>
      </article>
    </>
  )
}

export default PremiumBlogArticle
