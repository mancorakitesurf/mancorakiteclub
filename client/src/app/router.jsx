import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import BlogPage from '../pages/BlogPage.jsx'
import BuildPage from '../pages/BuildPage.jsx'
import ClassesPage from '../pages/ClassesPage.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import EquipmentRentalPage from '../pages/EquipmentRentalPage.jsx'
import FaqPage from '../pages/FaqPage.jsx'
import FourStarsHotelPage from '../pages/FourStarsHotelPage.jsx'
import HomePage from '../pages/HomePage.jsx'
import BlogPage1 from '../pages/blog/top-20-kitesurf-destinations-part-1.jsx'
import BlogPage2 from '../pages/blog/7-different-plans-of-a-kitesurf-trip-to-peru.jsx'
import HostelPage from '../pages/HostelPage.jsx'
import KitesurfingPage from '../pages/KitesurfingPage.jsx'
import KiteClubHotelPage from '../pages/KiteClubHotelPage.jsx'
import LearnKitesurfPage from '../pages/LearnKitesurfPage.jsx'
import LearnWingfoilPage from '../pages/LearnWingfoilPage.jsx'
import NotFound from '../pages/NotFound.jsx'
import ReviewsPage from '../pages/ReviewsPage.jsx'
import SoloSurfPage from '../pages/SoloSurfPage.jsx'
import StayPage from '../pages/StayPage.jsx'
import SupPage from '../pages/SupPage.jsx'
import TripsPage from '../pages/TripsPage.jsx'
import WingfoilPage from '../pages/WingfoilPage.jsx'
import FirstFlyTripPage from '../pages/trips/FirstFlyTripPage.jsx'
import OlasYVientoTripPage from '../pages/trips/OlasYVientoTripPage.jsx'
import RideTheCoastTripPage from '../pages/trips/RideTheCoastTripPage.jsx'
import SoloSurfTripPage from '../pages/trips/SoloSurfTripPage.jsx'
import BlogEsPage from '../pages/es/BlogEsPage.jsx'
import EquipmentEsPage from '../pages/es/EquipmentEsPage.jsx'
import FaqEsPage from '../pages/es/FaqEsPage.jsx'
import FourEstrellasEsPage from '../pages/es/FourEstrellasEsPage.jsx'
import HomeEsPage from '../pages/es/HomeEsPage.jsx'
import HostalEsPage from '../pages/es/HostalEsPage.jsx'
import HotelKiteEsPage from '../pages/es/HotelKiteEsPage.jsx'
import KitesurfingEsPage from '../pages/es/KitesurfingEsPage.jsx'
import LearnKitesurfEsPage from '../pages/es/LearnKitesurfEsPage.jsx'
import LearnWingfoilEsPage from '../pages/es/LearnWingfoilEsPage.jsx'
import SoloSurfEsPage from '../pages/es/SoloSurfEsPage.jsx'
import SupEsPage from '../pages/es/SupEsPage.jsx'
import WingfoilEsPage from '../pages/es/WingfoilEsPage.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'learn/kitesurf', element: <LearnKitesurfPage /> },
      { path: 'learn/wingfoil', element: <LearnWingfoilPage /> },
      { path: 'kitesurfing', element: <KitesurfingPage /> },
      { path: 'wingfoil', element: <WingfoilPage /> },
      { path: 'sup', element: <SupPage /> },
      { path: 'equipment-rental', element: <EquipmentRentalPage /> },
      { path: 'solo-surf', element: <SoloSurfPage /> },
      { path: 'hostel', element: <HostelPage /> },
      { path: 'kite-club-hotel', element: <KiteClubHotelPage /> },
      { path: '4-stars-hotel', element: <FourStarsHotelPage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/top-20-kitesurf-destinations-part-1', element: <BlogPage1 /> },
      { path: 'blog/7-different-plans-of-a-kitesurf-trip-to-peru', element: <BlogPage2 /> },
      { path: 'trips', element: <TripsPage /> },
      { path: 'trips/first-fly', element: <FirstFlyTripPage /> },
      { path: 'trips/olas-y-viento', element: <OlasYVientoTripPage /> },
      { path: 'trips/solo-surf', element: <SoloSurfTripPage /> },
      { path: 'trips/ride-the-coast', element: <RideTheCoastTripPage /> },
      { path: 'classes', element: <ClassesPage /> },
      { path: 'stay', element: <StayPage /> },
      { path: 'build', element: <BuildPage /> },
      { path: 'reviews', element: <ReviewsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'esp', element: <HomeEsPage /> },
      { path: 'aprende/kitesurf/esp', element: <LearnKitesurfEsPage /> },
      { path: 'aprende/wingfoil/esp', element: <LearnWingfoilEsPage /> },
      { path: 'kitesurfing/esp', element: <KitesurfingEsPage /> },
      { path: 'wingfoil/esp', element: <WingfoilEsPage /> },
      { path: 'sup/esp', element: <SupEsPage /> },
      { path: 'equipment/esp', element: <EquipmentEsPage /> },
      { path: 'solo-surf/esp', element: <SoloSurfEsPage /> },
      { path: 'acommodation/hostal/esp', element: <HostalEsPage /> },
      { path: 'acommodation/hotel-kite/esp', element: <HotelKiteEsPage /> },
      { path: 'acommodation/4-estrellas/esp', element: <FourEstrellasEsPage /> },
      { path: 'faq/esp', element: <FaqEsPage /> },
      { path: 'blog/esp', element: <BlogEsPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
