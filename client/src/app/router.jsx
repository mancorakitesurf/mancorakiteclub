import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import NotFound from '../pages/NotFound.jsx'

const HomePage = lazy(() => import('../pages/HomePage.jsx'))
const TripsPage = lazy(() => import('../pages/TripsPage.jsx'))
const TripDetailPage = lazy(() => import('../pages/trips/TripDetailPage.jsx'))
const ClassesPage = lazy(() => import('../pages/ClassesPage.jsx'))
const StayPage = lazy(() => import('../pages/StayPage.jsx'))
const BuildPage = lazy(() => import('../pages/BuildPage.jsx'))
const BlogPage = lazy(() => import('../pages/BlogPage.jsx'))
const FaqPage = lazy(() => import('../pages/FaqPage.jsx'))
const ContactPage = lazy(() => import('../pages/ContactPage.jsx'))
const ReviewsPage = lazy(() => import('../pages/ReviewsPage.jsx'))
const WavesPage = lazy(() => import('../pages/waves/Waves.jsx'))

function Loading() {
  return <div className="flex h-screen items-center justify-center">Loading...</div>
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: 'viajes', element: <TripsPage /> },
      { path: 'viajes/:slug', element: <TripDetailPage /> },
      { path: 'clases', element: <ClassesPage /> },
      { path: 'alojamiento', element: <StayPage /> },
      { path: 'arma-tu-paquete', element: <BuildPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'reviews', element: <ReviewsPage /> },
      { path: 'waves', element: <WavesPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])