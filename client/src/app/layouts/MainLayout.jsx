import { Suspense, useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { I18nProvider } from '../providers/I18nProvider.jsx'
import ActionHub from "../../components/ActionHub.jsx"
import { hasRouteLoadedThroughLoading, shouldRoutePassThroughLoading, useLoadingNavigationInterceptor } from '../../lib/loadingNavigation.js'
import ScrollToTop from '../../components/ScrollToTop.jsx'
import Footer from '../../sections/common/Footer.jsx'
import Header from '../../sections/common/Header.jsx'

const LOCALE_PREFIX_PATTERN = /^\/(esp|fr)(?=\/|$)/
const INTRO_CHROME_REVEAL_DELAY = 8000
const INTRO_CHROME_SCROLL_THRESHOLD = 40

function normalizeIntroPath(pathname = '/') {
  const normalized = pathname.replace(LOCALE_PREFIX_PATTERN, '') || '/'
  return normalized.length > 1 && normalized.endsWith('/') ? normalized.slice(0, -1) : normalized
}

function shouldHideChromeOnIntro(pathname = '/') {
  const normalizedPathname = normalizeIntroPath(pathname)

  if (normalizedPathname === '/loading' || normalizedPathname === '/intro') {
    return false
  }

  return shouldRoutePassThroughLoading(pathname)
}

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
  const isIntroChromePath = shouldHideChromeOnIntro(location.pathname)
  const [revealedIntroChromeKey, setRevealedIntroChromeKey] = useState(null)
  const hideIntroChrome = isIntroChromePath && revealedIntroChromeKey !== location.key

  useEffect(() => {
    if (!shouldHideChromeOnIntro(location.pathname)) {
      return undefined
    }

    let timeoutId

    const revealChrome = () => {
      setRevealedIntroChromeKey(location.key)
      window.removeEventListener('scroll', handleScroll)

      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }

    const handleScroll = () => {
      if (window.scrollY > INTRO_CHROME_SCROLL_THRESHOLD) {
        revealChrome()
      }
    }

    timeoutId = window.setTimeout(revealChrome, INTRO_CHROME_REVEAL_DELAY)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)

      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [location.key, location.pathname])

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
        {hideIntroChrome ? null : <Header />}
        <main className="overflow-x-hidden">
          <Suspense fallback={<RouteFallback />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
        {hideIntroChrome ? null : <ActionHub />}
      </div>
    </I18nProvider>
  )
}

export default MainLayout
