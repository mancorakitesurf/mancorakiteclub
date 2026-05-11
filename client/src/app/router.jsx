import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import LoadingPage from '../pages/LoadingPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

// Páginas principales
const HomePage = lazy(() => import('../pages/HomePage.jsx'))
const TripsPage = lazy(() => import('../pages/TripsPage.jsx'))
const TripDetailPage = lazy(() => import('../pages/trips/TripDetailPage.jsx'))
const ClassesPage = lazy(() => import('../pages/ClassesPage.jsx'))
const StayPage = lazy(() => import('../pages/StayPage.jsx'))
const BuildPage = lazy(() => import('../pages/BuildPage.jsx'))
const FaqPage = lazy(() => import('../pages/FaqPage.jsx'))
const ContactPage = lazy(() => import('../pages/ContactPage.jsx'))
const ReviewsPage = lazy(() => import('../pages/ReviewPage.jsx'))
const WavesPage = lazy(() => import('../pages/waves/Waves.jsx'))
const BlogPage = lazy(() => import('../pages/BlogPage.jsx'))
const BlogPostPage = lazy(() => import('../pages/blog/BlogPostPage.jsx'))

// Páginas de deportes (nuevas de pruebas-traduccion)
const KitesurfingPage = lazy(() => import('../pages/KitesurfingPage.jsx'))
const WingfoilPage = lazy(() => import('../pages/WingfoilPage.jsx'))
const SupPage = lazy(() => import('../pages/SupPage.jsx'))
const SoloSurfPage = lazy(() => import('../pages/SoloSurfPage.jsx'))
const LearnKitesurfPage = lazy(() => import('../pages/LearnKitesurfPage.jsx'))
const LearnWingfoilPage = lazy(() => import('../pages/LearnWingfoilPage.jsx'))
const EquipmentRentalPage = lazy(() => import('../pages/EquipmentRentalPage.jsx'))

// Páginas de alojamiento (nuevas de pruebas-traduccion)
const FourStarsHotelPage = lazy(() => import('../pages/FourStarsHotelPage.jsx'))
const KiteClubHotelPage = lazy(() => import('../pages/KiteClubHotelPage.jsx'))
const HostelPage = lazy(() => import('../pages/HostelPage.jsx'))

function Loading() {
  return <div className="flex min-h-screen items-center justify-center px-4 text-center">Loading...</div>
}

// 1. Definimos las rutas BASE (Los slugs que compartiremos en los 3 idiomas)
const basePages = [
  { path: 'home', element: <HomePage /> },
  { path: 'trips', element: <TripsPage /> },
  { path: 'trips/:slug', element: <TripDetailPage /> },
  { path: 'classes', element: <ClassesPage /> },
  { path: 'stay', element: <StayPage /> },
  { path: 'build', element: <BuildPage /> },
  { path: 'blog', element: <BlogPage /> },
  { path: 'blog/:slug', element: <BlogPostPage /> },
  { path: 'faq', element: <FaqPage /> },
  { path: 'contact', element: <ContactPage /> },
  { path: 'reviews', element: <ReviewsPage /> },
  { path: 'waves', element: <WavesPage /> },

  // Deportes
  { path: 'kitesurfing', element: <KitesurfingPage /> },
  { path: 'wingfoil', element: <WingfoilPage /> },
  { path: 'sup', element: <SupPage /> },
  { path: 'solo-surf', element: <SoloSurfPage /> },
  { path: 'learn/kitesurf', element: <LearnKitesurfPage /> },
  { path: 'learn/wingfoil', element: <LearnWingfoilPage /> },
  { path: 'equipment-rental', element: <EquipmentRentalPage /> },

  // Alojamiento
  { path: '4-stars-hotel', element: <FourStarsHotelPage /> },
  { path: 'kite-club-hotel', element: <KiteClubHotelPage /> },
  { path: 'hostel', element: <HostelPage /> },
]

/**
 * Generador automático de rutas para todos los idiomas (EN, ESP, FR)
 */
const generateI18nRoutes = () => {
  const allRoutes = [];
  const languagePrefixes = ['', 'esp', 'fr']; // '' = Inglés (raíz)

  languagePrefixes.forEach(prefix => {
    basePages.forEach(page => {
      const fullPath = prefix ? `${prefix}/${page.path}` : page.path;
      allRoutes.push({ path: fullPath, element: page.element });
    });
  });

  return allRoutes;
};

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      // ═══════════ REDIRECTS INICIALES (DISEÑO INTRO) ═══════════
      { index: true, element: <Navigate to="/loading" replace state={{ redirectTo: '/home' }} /> },
      { path: 'loading', element: <LoadingPage /> },
      { path: 'intro', element: <Navigate to="/loading" replace state={{ redirectTo: '/home' }} /> },
      { path: 'esp', element: <Navigate to="/loading" replace state={{ redirectTo: '/esp/home' }} /> },
      { path: 'fr', element: <Navigate to="/loading" replace state={{ redirectTo: '/fr/home' }} /> },

      // ═══════════ RUTAS CON LAYOUT Y TRADUCCIÓN ═══════════
      {
        element: (
          <Suspense fallback={<Loading />}>
            <MainLayout />
          </Suspense>
        ),
        children: [
          ...generateI18nRoutes(),
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
  },
])