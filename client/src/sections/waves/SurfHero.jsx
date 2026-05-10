import FullscreenHero from '../../components/ui/FullscreenHero.jsx'
import { createPresetHeroSlides } from '../../lib/fullscreenHeroSlides.js'
import { buildWhatsAppUrl, defaultInquiryMessage } from '../../lib/whatsapp.js'
import { SURF_HERO_IMAGE } from './wavesContent.js'

function SurfHero() {
  return (
    <FullscreenHero
      as="section"
      eyebrow="Northern Peru"
      title="Surfing Experience"
      slides={createPresetHeroSlides('surf', {
        desktop: [SURF_HERO_IMAGE],
        alt: 'Surfer riding a big green wave in northern Peru',
        imageClassName: 'object-[52%_center] md:object-center',
      })}
      actions={[
        {
          href: buildWhatsAppUrl(defaultInquiryMessage('Surfing Experience')),
          label: 'Book Now',
          external: true,
        },
      ]}
    />
  )
}

export default SurfHero
