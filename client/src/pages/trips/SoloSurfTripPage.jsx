import { getTripBySlug } from '../../content/trips.js'
import TripDetailPage from './TripDetailPage.jsx'

function SoloSurfTripPage() {
  return <TripDetailPage trip={getTripBySlug('solo-surf')} />
}

export default SoloSurfTripPage
