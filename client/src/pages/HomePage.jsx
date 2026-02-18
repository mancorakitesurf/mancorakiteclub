import SEO from '../components/SEO.jsx'
import CTA from '../sections/home/CTA.jsx'
import Gallery from '../sections/home/Gallery.jsx'
import HeroVideo from '../sections/home/HeroVideo.jsx'
import Highlights from '../sections/home/Highlights.jsx'
import Packages from '../sections/home/Packages.jsx'
import Testimonials from '../sections/home/Testimonials.jsx'

function HomePage() {
  return (
    <>
      <SEO
        title="Mancora Kite Club | Home"
        description="TODO: contenido real"
        canonicalPath="/"
        hreflang={{ en: '/', es: '/esp', default: '/' }}
      />
      <HeroVideo />
      <Highlights />
      <Packages />
      <Gallery />
      <Testimonials />
      <CTA />
    </>
  )
}

export default HomePage
