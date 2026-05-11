import { Link } from "react-router-dom"
import { premiumBlogCategories } from "../../data/posts.js"
import MotionReveal from "./MotionReveal.jsx"
import BlogPostCard from "./BlogPostCard.jsx"
import CTASection from "./CTASection.jsx"
import { useI18n } from '../../app/providers/i18nContext'

function BlogLandingGrid({ posts }) {
  const { t } = useI18n()
  const [featuredPost, ...remainingPosts] = posts

  return (
    <section className="bg-[linear-gradient(180deg,#040b13_0%,#07121f_100%)] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.7fr)]">
          <div className="grid gap-6 md:grid-cols-2 lg:auto-rows-fr">
            <BlogPostCard post={featuredPost} featured />
            {remainingPosts.map((post, index) => (
              <BlogPostCard key={post.slug} post={post} delay={Math.min(index * 0.05, 0.2)} />
            ))}
          </div>

          <MotionReveal className="lg:sticky lg:top-28 lg:self-start">
            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/[0.65]">
                  {t('blogUI.editorialFilter')}
                </p>
                <h2 className="mt-3 font-display text-3xl text-white">{t('blogUI.orderIntentional')}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300/[0.82]">
                  {t('blogUI.orderDesc')}
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/[0.65]">
                  {t('blogUI.coreCategories')}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {premiumBlogCategories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-200/80"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/[0.65]">
                  {t('blogUI.strategicDestination')}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300/[0.82]">
                  {t('blogUI.strategicDesc')}
                </p>
                <Link
                  to="/"
                  className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-cyan-200"
                >
                  {t('blogUI.goToHome')}
                </Link>
              </div>
            </aside>
          </MotionReveal>
        </div>

        <div className="mt-10" >
          <CTASection 
            title={t('blogUI.ctaTitle')}
            body={t('blogUI.ctaBody')}
          />
        </div>
      </div>
    </section>
  )
}

export default BlogLandingGrid
