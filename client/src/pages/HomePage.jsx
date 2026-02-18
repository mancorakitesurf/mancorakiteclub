import SEO from '../components/SEO.jsx'
import BuilderPreview from '../sections/home/BuilderPreview.jsx'
import Hero from '../sections/home/Hero.jsx'
import Instruction from '../sections/home/Instruction.jsx'
import Stay from '../sections/home/Stay.jsx'
import Testimonials from '../sections/home/Testimonials.jsx'
import Team from '../sections/home/Team.jsx'
import Trips from '../sections/home/Trips.jsx'

function HomePage() {
  return (
    <>
      <SEO
        title="Mancora Kite Club | Home"
        description="TODO: contenido real"
        canonicalPath="/"
        hreflang={{ en: '/', es: '/esp', default: '/' }}
      />
      <Hero />
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
