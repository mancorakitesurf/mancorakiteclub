import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import LoadingPage from '../pages/LoadingPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import LegacyServicesRedirect from './components/LegacyServicesRedirect.jsx'

const HomePage = lazy(() => import('../pages/HomePage.jsx'))
const TripsPage = lazy(() => import('../pages/TripsPage.jsx'))
const ClassesPage = lazy(() => import('../pages/ClassesPage.jsx'))
const StayPage = lazy(() => import('../pages/StayPage.jsx'))
const BuildPage = lazy(() => import('../pages/BuildPage.jsx'))
const FaqPage = lazy(() => import('../pages/FaqPage.jsx'))
const ContactPage = lazy(() => import('../pages/ContactPage.jsx'))
const ReviewsPage = lazy(() => import('../pages/ReviewPage.jsx'))
const WavesPage = lazy(() => import('../pages/waves/Waves.jsx'))
const BlogPage = lazy(() => import('../pages/BlogPage.jsx'))
const BlogPostPage = lazy(() => import('../pages/blog/BlogPostPage.jsx'))
const TripDetailPage = lazy(() => import('../pages/trips/TripDetailPage.jsx'))

const KitesurfLessonsPage = lazy(() => import('../pages/services/KitesurfLessonsPage.jsx'))
const WingfoilLessonsPage = lazy(() => import('../pages/services/WingfoilLessonsPage.jsx'))
const WaveRidingCoachingPage = lazy(() => import('../pages/services/WaveRidingCoachingPage.jsx'))
const TripsDownwindsPage = lazy(() => import('../pages/services/TripsDownwindsPage.jsx'))
const SurfSupPage = lazy(() => import('../pages/services/SurfSupPage.jsx'))

const SITE_ROUTES = [
  { path: 'home', element: <HomePage /> },
  { path: 'trips', element: <TripsPage /> },
  { path: 'trips/:slug', element: <TripDetailPage /> },
  { path: 'services', element: <ClassesPage /> },
  { path: 'classes', element: <Navigate to="../services" replace relative="path" /> },
  {
    path: 'equipment',
    children: [
      { index: true, element: <LegacyServicesRedirect /> },
      { path: 'esp', element: <LegacyServicesRedirect /> },
      { path: 'fr', element: <LegacyServicesRedirect /> },
    ],
  },
  { path: 'stay', element: <StayPage /> },
  { path: 'build', element: <BuildPage /> },
  { path: 'blog', element: <BlogPage /> },
  { path: 'blog/:slug', element: <BlogPostPage /> },
  { path: 'faq', element: <FaqPage /> },
  { path: 'contact', element: <ContactPage /> },
  { path: 'reviews', element: <ReviewsPage /> },
  { path: 'waves', element: <WavesPage /> },
  { path: 'services/kitesurf-lessons', element: <KitesurfLessonsPage /> },
  { path: 'services/wingfoil-lessons', element: <WingfoilLessonsPage /> },
  { path: 'services/wave-riding-coaching', element: <WaveRidingCoachingPage /> },
  { path: 'services/trips-downwinds', element: <TripsDownwindsPage /> },
  { path: 'services/rent-gear', element: <LegacyServicesRedirect /> },
  { path: 'services/surf-sup', element: <SurfSupPage /> },

  { path: 'learn/kitesurf', element: <Navigate to="/services/kitesurf-lessons" replace /> },
  { path: 'learn/wingfoil', element: <Navigate to="/services/wingfoil-lessons" replace /> },
  { path: 'kitesurfing', element: <Navigate to="/services/kitesurf-lessons" replace /> },
  { path: 'wingfoil', element: <Navigate to="/services/wingfoil-lessons" replace /> },
  { path: 'sup', element: <Navigate to="/services/surf-sup" replace /> },
  { path: 'equipment-rental', element: <LegacyServicesRedirect /> },
  { path: 'solo-surf', element: <Navigate to="/trips/solo-surf" replace /> },
  { path: 'hostel', element: <Navigate to="/stay" replace /> },
  { path: 'kite-club-hotel', element: <Navigate to="/stay" replace /> },
  { path: '4-stars-hotel', element: <Navigate to="/stay" replace /> },
  { path: 'aprende/kitesurf/esp', element: <Navigate to="/esp/services/kitesurf-lessons" replace /> },
  { path: 'aprende/wingfoil/esp', element: <Navigate to="/esp/services/wingfoil-lessons" replace /> },
  { path: 'kitesurfing/esp', element: <Navigate to="/esp/services/kitesurf-lessons" replace /> },
  { path: 'wingfoil/esp', element: <Navigate to="/esp/services/wingfoil-lessons" replace /> },
  { path: 'sup/esp', element: <Navigate to="/esp/services/surf-sup" replace /> },
  { path: 'solo-surf/esp', element: <Navigate to="/esp/trips/solo-surf" replace /> },
  { path: 'acommodation/hostal/esp', element: <Navigate to="/esp/stay" replace /> },
  { path: 'acommodation/hotel-kite/esp', element: <Navigate to="/esp/stay" replace /> },
  { path: 'acommodation/4-estrellas/esp', element: <Navigate to="/esp/stay" replace /> },
  { path: 'faq/esp', element: <Navigate to="/esp/faq" replace /> },
  { path: 'blog/esp', element: <Navigate to="/esp/blog" replace /> },
]

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Navigate to="/loading" replace state={{ redirectTo: '/home' }} /> },
      { path: 'loading', element: <LoadingPage /> },
      { path: 'intro', element: <Navigate to="/loading" replace state={{ redirectTo: '/home' }} /> },
      { path: 'esp', element: <Navigate to="/loading" replace state={{ redirectTo: '/esp/home' }} /> },
      { path: 'fr', element: <Navigate to="/loading" replace state={{ redirectTo: '/fr/home' }} /> },
      {
        element: <MainLayout />,
        children: [
          ...SITE_ROUTES,
          { path: 'esp', children: SITE_ROUTES.map((route) => ({ ...route })) },
          { path: 'fr', children: SITE_ROUTES.map((route) => ({ ...route })) },
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
  },
])
