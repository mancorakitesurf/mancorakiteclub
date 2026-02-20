import { getTripBySlug } from '../../content/trips.js'
import TripDetailPage from './TripDetailPage.jsx'

function RideTheCoastTripPage() {
  return <TripDetailPage trip={getTripBySlug('ride-the-coast')} />
}

export default RideTheCoastTripPage
