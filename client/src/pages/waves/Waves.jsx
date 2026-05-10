import SEO from '../../components/SEO.jsx'
import { useI18n } from '../../app/providers/i18nContext'
import WavesHero from '../../sections/waves/WavesHero.jsx'
import WavesIntro from '../../sections/waves/WavesIntro.jsx'
import WavesQuote from '../../sections/waves/WavesQuote.jsx'
import WavesTrips from '../../sections/waves/WavesTrips.jsx'
import WavesClasses from '../../sections/waves/WavesClasses.jsx'
import WavesBenefits from '../../sections/waves/WavesBenefits.jsx'
import WavesBeaches from '../../sections/waves/WavesBeaches.jsx'
import SurfHero from '../../sections/waves/SurfHero.jsx'
import SurfIntro from '../../sections/waves/SurfIntro.jsx'
import WavesClimate from '../../sections/waves/WavesClimate.jsx'
import {
  KITE_TRIPS,
  WINGFOIL_TRIPS,
  SURF_TRIPS,
  SURF_QUOTE,
  SURF_CLASSES,
} from '../../sections/waves/wavesContent.js'

function WavesPage() {
  const { t } = useI18n()

  return (
    <>
      <SEO
        titleKey="seo.wavesTitle"
        descKey="seo.wavesDesc"
        titleFallback="Mancora Kite Club | Waves & Wind Trips"
        descFallback="Kitesurf, Wingfoil and Surfing trips across Northern Peru. Explore Mancora, Negritos, Los Organos, Cabo Blanco and Lobitos with professional coaching."
      />

      {/* ── Kitesurf block ── */}
      <WavesHero />
      <WavesIntro />
      <WavesQuote />
      <WavesTrips title={t('pages.waves.kiteSurfTrips', { defaultValue: 'Kite Surf Trips' })} trips={KITE_TRIPS} />
      <WavesClasses />
      <WavesBenefits />
      <WavesBeaches />

      {/* ── Wingfoil block ── */}
      <WavesQuote />
      <WavesTrips title={t('pages.waves.wingfoilSurfTrips', { defaultValue: 'Wingfoil Surf Trips' })} trips={WINGFOIL_TRIPS} />
      <WavesClasses />

      {/* ── Surfing block ── */}
      <SurfHero />
      <SurfIntro />
      <WavesQuote text={SURF_QUOTE} />
      <WavesTrips title={t('pages.waves.surfTrips', { defaultValue: 'Surf Trips' })} trips={SURF_TRIPS} />
      <WavesClasses classes={SURF_CLASSES} />
      <WavesClimate />
      <WavesBeaches />
    </>
  )
}

export default WavesPage
