import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

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

// Páginas de deportes
const KitesurfingPage = lazy(() => import('../pages/KitesurfingPage.jsx'))
const WingfoilPage = lazy(() => import('../pages/WingfoilPage.jsx'))
const SupPage = lazy(() => import('../pages/SupPage.jsx'))
const SoloSurfPage = lazy(() => import('../pages/SoloSurfPage.jsx'))
const LearnKitesurfPage = lazy(() => import('../pages/LearnKitesurfPage.jsx'))
const LearnWingfoilPage = lazy(() => import('../pages/LearnWingfoilPage.jsx'))
const EquipmentRentalPage = lazy(() => import('../pages/EquipmentRentalPage.jsx'))

// Páginas de alojamiento
const FourStarsHotelPage = lazy(() => import('../pages/FourStarsHotelPage.jsx'))
const KiteClubHotelPage = lazy(() => import('../pages/KiteClubHotelPage.jsx'))
const HostelPage = lazy(() => import('../pages/HostelPage.jsx'))

function Loading() {
  return <div className="flex min-h-screen items-center justify-center px-4 text-center">Loading...</div>
}

// 1. Definimos las rutas BASE (Los slugs que compartiremos en los 3 idiomas)
const basePages = [
  { path: '', element: <HomePage /> }, // La raíz (Index)
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

// 2. Generador automático de rutas para todos los idiomas
const generateI18nRoutes = () => {
  const allRoutes = [];
  const languagePrefixes = ['', 'esp', 'fr']; // '' = Inglés

  languagePrefixes.forEach(prefix => {
    basePages.forEach(page => {
      // Si es el Home (path vacío)
      if (page.path === '') {
        if (prefix === '') {
          allRoutes.push({ index: true, element: page.element }); // /
        } else {
          allRoutes.push({ path: prefix, element: page.element }); // /esp o /fr
        }
      } 
      // Para cualquier otra página
      else {
        const fullPath = prefix ? `${prefix}/${page.path}` : page.path;
        allRoutes.push({ path: fullPath, element: page.element });
      }
    });
  });

  // La página de error 404 siempre va al final
  allRoutes.push({ path: '*', element: <NotFoundPage /> });
  
  return allRoutes;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <MainLayout />
      </Suspense>
    ),
    // 3. Inyectamos el array generado dinámicamente
    children: generateI18nRoutes(),
  },
])