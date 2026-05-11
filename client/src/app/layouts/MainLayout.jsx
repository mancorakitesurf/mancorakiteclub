import { Suspense } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { I18nProvider } from '../providers/I18nProvider.jsx'
import ActionHub from "../../components/ActionHub.jsx"
import { hasRouteLoadedThroughLoading, shouldRoutePassThroughLoading, useLoadingNavigationInterceptor} from '../../lib/loadingNavigation.js'
import ScrollToTop from '../../components/ScrollToTop.jsx'
import Footer from '../../sections/common/Footer.jsx'
import Header from '../../sections/common/Header.jsx'

function RouteFallback() {
  return (
    <div
      className="min-h-screen bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(145deg,#010203_0%,#080b0f_48%,#020304_100%)]"
      aria-hidden="true"
    />
  )
}

function MainLayout() {
  const location = useLocation()
  const handleNavigationCapture = useLoadingNavigationInterceptor()
  const currentPath = `${location.pathname}${location.search}${location.hash}`
  const hasLoadedThroughLoadingPage = Boolean(location.state?.fromLoading) && hasRouteLoadedThroughLoading(currentPath)

  if (shouldRoutePassThroughLoading(location.pathname) && !hasLoadedThroughLoadingPage) {
    return (
      <Navigate
        to="/loading"
        replace
        state={{ redirectTo: currentPath }}
      />
    )
  }

  return (
    <I18nProvider>
      <div
        className="dark min-h-screen overflow-x-hidden bg-[#030405] font-sans text-gray-200 transition-colors duration-300"
        onClickCapture={handleNavigationCapture}
      >
        <ScrollToTop />
        <Header />
        <main className="overflow-x-hidden">
          <Suspense fallback={<RouteFallback />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
        <ActionHub />
      </div>
    </I18nProvider>
  )
}

export default MainLayout
