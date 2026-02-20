import { getTripBySlug } from '../../content/trips.js'
import TripDetailPage from './TripDetailPage.jsx'

function FirstFlyTripPage() {
  return <TripDetailPage trip={getTripBySlug('first-fly')} />
}

export default FirstFlyTripPage
