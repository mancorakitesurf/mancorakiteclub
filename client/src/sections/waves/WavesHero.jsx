import { FaWhatsapp } from 'react-icons/fa'
import FullscreenHero from '../../components/ui/FullscreenHero.jsx'
import { createPresetHeroSlides } from '../../lib/fullscreenHeroSlides.js'
import { buildWhatsAppUrl, defaultInquiryMessage } from '../../lib/whatsapp.js'
import { HERO_IMAGE } from './wavesContent.js'

function WavesHero() {
  return (
    <FullscreenHero
      eyebrow="Northern Peru"
      title="Waves & Wind Trips"
      subtitle="Kitesurf & Wingfoil safaris across the best spots of Northern Peru"
      slides={createPresetHeroSlides('kite', {
        desktop: [HERO_IMAGE],
        alt: 'Waves and kitesurfing in northern Peru',
        imageClassName: 'object-[55%_center] md:object-center',
      })}
      actions={[
        {
          href: buildWhatsAppUrl(defaultInquiryMessage('Waves & Wind Trips')),
          label: 'Book on WhatsApp',
          icon: FaWhatsapp,
          external: true,
        },
      ]}
    />
  )
}

export default WavesHero
