import SEO from '../../components/SEO'
import WaveHero from '../../sections/blogPage7/BlogHeroPage7/WaveHero'
import WaveIntro from '../../sections/blogPage7/BlogLayoutPage7/WaveIntro.jsx'
import WaveProblem from '../../sections/blogPage7/BlogLayoutPage7/WaveProblem.jsx'
import WaveDifference from '../../sections/blogPage7/BlogLayoutPage7/WaveDifferent.jsx'
import WaveProgression from '../../sections/blogPage7/BlogLayoutPage7/WaveProgression.jsx'
import WaveLifestyle from '../../sections/blogPage7/BlogLayoutPage7/WaveLifeStyle.jsx'
import WaveCTA from '../../sections/blogPage7/BlogLayoutPage7/WaveCTA.jsx'

function BlogPage7() {
  return (
    <>
      <SEO
        title="Why Mancora is Different: The Ultimate Wave Kitesurf Progression Guide"
        description="Why Mancora is one of the best places to progress in wave kitesurfing. Learn about wind, waves, coaching, and lifestyle. Complete progression guide for all levels."
        canonicalPath="/blog/why-mancora-is-different-kitesurf-wave-progression-guide"
        hreflang={{ en: '/blog/why-mancora-is-different-kitesurf-wave-progression-guide', es: '/esp', default: '/' }}
      />

      <WaveHero />
      <WaveIntro />
      <WaveProblem />
      <WaveDifference />
      <WaveProgression />
      <WaveLifestyle />
      <WaveCTA />
    </>
  )
}

export default BlogPage7