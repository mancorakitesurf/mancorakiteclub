import SEO from '../../components/SEO'
import WaveHero from '../../sections/blogPage7/BlogHeroPage7/WaveHero'
import WaveIntro from '../../sections/blogPage7/BlogLayoutPage7/WaveIntro.jsx'
import WaveProblem from '../../sections/blogPage7/BlogLayoutPage7/WaveProblem'
import WaveDifference from '../../sections/blogPage7/BlogLayoutPage7/WaveDifferent.jsx'
import WaveProgression from '../../sections/blogPage7/BlogLayoutPage7/WaveProgression'
import WaveLifestyle from '../../sections/blogPage7/BlogLayoutPage7/WaveLifeStyle'
import WaveCTA from '../../sections/blogPage7/BlogLayoutPage7/WaveCta'

function BlogPage7() {
  return (
    <>
      <SEO
        title="Why Mancora is Different: The Ultimate Wave Kitesurf Progression Guide"
        description="Discover why Mancora is one of the best places in the world to progress in wave kitesurfing."
        canonicalPath="/blog/why-mancora-kitesurf-wave-progression"
        hreflang={{ en: '/blog/why-mancora-kitesurf-wave-progression', es: '/esp', default: '/' }}
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