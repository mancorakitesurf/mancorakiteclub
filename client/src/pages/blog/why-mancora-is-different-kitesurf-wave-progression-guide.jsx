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
        titleKey="seo.blogWaveProgressionTitle"
        descKey="seo.blogWaveProgressionDesc"
        titleFallback="Why Mancora is Different: The Ultimate Wave Kitesurf Progression Guide"
        descFallback="Why Mancora is one of the best places to progress in wave kitesurfing. Learn about wind, waves, coaching, and lifestyle. Complete progression guide for all levels."
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