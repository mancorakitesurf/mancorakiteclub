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

const ROUTES = [
  { index: true, element: <HomePage /> },
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
]

function Loading() {
  return <div className="flex min-h-screen items-center justify-center px-4 text-center">Loading...</div>
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
      ...ROUTES,
      { path: 'esp', children: ROUTES.map(r => r.index ? { index: true, element: r.element } : { ...r }) },
      { path: 'fr', children: ROUTES.map(r => r.index ? { index: true, element: r.element } : { ...r }) },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
