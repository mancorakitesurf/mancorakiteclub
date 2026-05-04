import SEO from '../components/SEO.jsx'
import BuilderPreview from '../sections/home/BuilderPreview.jsx'
import Hero from '../sections/home/Hero.jsx'
import Instruction from '../sections/home/Instruction.jsx'
import Stay from '../sections/home/Stay.jsx'
import Testimonials from '../sections/home/Testimonials.jsx'
import Team from '../sections/home/Team.jsx'
import Movements from '../sections/home/Movements.jsx'
import Trips from '../sections/home/Trips.jsx'
import WeatherSection from '../sections/home/WeatherSection.jsx'

function HomePage() {
  return (
    <>
      <SEO
        titleKey="seo.homeTitle"
        descKey="seo.homeDesc"
        titleFallback="Máncora Kite Club | Kitesurf & Wingfoil School"
        descFallback="Learn kitesurfing and wingfoiling in Máncora, Peru with professional IKO certified coaching, equipment rental, beachfront stays, and epic trips. Book now!"
        canonicalPath="/"
        hreflang={{ en: '/', es: '/esp', default: '/' }}
      />
      <Hero />
      <Movements />
      <WeatherSection />
      <Trips />
      <Instruction />
      <Stay />
      <BuilderPreview />
      <Testimonials />
      <Team />
    </>
  )
}

export default HomePage
