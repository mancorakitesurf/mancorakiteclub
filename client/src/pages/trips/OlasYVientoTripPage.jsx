import { getTripBySlug } from '../../content/trips.js'
import TripDetailPage from './TripDetailPage.jsx'

function OlasYVientoTripPage() {
  return <TripDetailPage trip={getTripBySlug('olas-y-viento')} />
}

export default OlasYVientoTripPage
