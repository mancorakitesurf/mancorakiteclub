import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { brandImages } from '../config/images.js'
import { LOADING_ROUTE_PATH, markRouteLoadedThroughLoading, resolveNavigationTarget } from '../lib/loadingNavigation.js'

const INTRO_DURATION = 2500
const EXIT_START = 1850
const REDUCED_MOTION_DURATION = 900
const REDUCED_MOTION_EXIT_START = 620
const LOCALE_PREFIX_PATTERN = /^\/(esp|fr)(?=\/|$)/
const LOADING_MESSAGE = 'Prep\u00e1rate para volar'

function normalizeRouteModulePath(pathname) {
  const normalized = pathname.replace(LOCALE_PREFIX_PATTERN, '') || '/'
  const withoutTrailingSlash =
    normalized.length > 1 && normalized.endsWith('/') ? normalized.slice(0, -1) : normalized

  return withoutTrailingSlash === '/' ? '/home' : withoutTrailingSlash
}

function preloadDestinationPage(target) {
  const resolvedTarget = resolveNavigationTarget(target)

  if (!resolvedTarget) {
    return Promise.resolve()
  }

  const { pathname } = new URL(resolvedTarget, window.location.origin)
  const normalizedPathname = normalizeRouteModulePath(pathname)

  if (normalizedPathname === '/home') return import('./HomePage.jsx')
  if (normalizedPathname === '/trips') return import('./TripsPage.jsx')
  if (normalizedPathname.startsWith('/trips/')) return import('./trips/TripDetailPage.jsx')
  if (normalizedPathname === '/classes') return import('./ClassesPage.jsx')
  if (normalizedPathname === '/stay') return import('./StayPage.jsx')
  if (normalizedPathname === '/build') return import('./BuildPage.jsx')
  if (normalizedPathname === '/faq') return import('./FaqPage.jsx')
  if (normalizedPathname === '/contact') return import('./ContactPage.jsx')
  if (normalizedPathname === '/reviews') return import('./ReviewPage.jsx')
  if (normalizedPathname === '/waves') return import('./waves/Waves.jsx')

  return Promise.resolve()
}

function normalizeRedirectTarget(target) {
  const resolvedTarget = resolveNavigationTarget(target)

  if (!resolvedTarget || resolvedTarget === LOADING_ROUTE_PATH) {
    return '/home'
  }

  if (resolvedTarget === '/') {
    return '/home'
  }

  return resolvedTarget
}

function getRedirectTarget(location) {
  const searchTarget = new URLSearchParams(location.search).get('to')
  return normalizeRedirectTarget(location.state?.redirectTo || searchTarget || '/home')
}

function getRedirectState(forwardedState) {
  if (forwardedState && typeof forwardedState === 'object') {
    return {
      ...forwardedState,
      fromLoading: true,
    }
  }

  if (forwardedState) {
    return {
      forwardedState,
      fromLoading: true,
    }
  }

  return { fromLoading: true }
}

function LoadingPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const shouldReduceMotion = useReducedMotion()
  const hasNavigatedRef = useRef(false)
  const [isExiting, setIsExiting] = useState(false)
  const redirectTo = useMemo(() => getRedirectTarget(location), [location])
  const forwardedState = location.state?.forwardedState

  useEffect(() => {
    document.body.style.overflow = ''
    document.body.style.pointerEvents = ''
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    document.body.style.touchAction = ''
    document.documentElement.style.overflow = ''
    document.documentElement.style.overscrollBehavior = ''
  }, [])

  useEffect(() => {
    preloadDestinationPage(redirectTo).catch(() => undefined)
  }, [redirectTo])

  useEffect(() => {
    const exitDelay = shouldReduceMotion ? REDUCED_MOTION_EXIT_START : EXIT_START
    const redirectDelay = shouldReduceMotion ? REDUCED_MOTION_DURATION : INTRO_DURATION

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true)
    }, exitDelay)

    const redirectTimer = window.setTimeout(() => {
      if (hasNavigatedRef.current) {
        return
      }

      hasNavigatedRef.current = true
      markRouteLoadedThroughLoading(redirectTo)
      navigate(redirectTo, {
        replace: true,
        state: getRedirectState(forwardedState),
      })
    }, redirectDelay)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(redirectTimer)
    }
  }, [forwardedState, navigate, redirectTo, shouldReduceMotion])

  const smoothTransition = shouldReduceMotion
    ? { duration: 0.2 }
    : { duration: 1, ease: [0.16, 1, 0.3, 1] }

  const exitTransition = {
    duration: shouldReduceMotion ? 0.2 : 0.55,
    ease: [0.16, 1, 0.3, 1],
  }

  return (
    <main
      className="fixed inset-0 flex h-screen min-h-[100svh] w-screen items-center justify-center overflow-hidden bg-[#030405] text-white"
      aria-busy="true"
      aria-label="Mancora Kite Club loading page"
      role="status"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.13),transparent_24%),radial-gradient(circle_at_50%_115%,rgba(73,91,113,0.22),transparent_38%),linear-gradient(145deg,#010203_0%,#080b0f_48%,#020304_100%)]"
        animate={{ opacity: isExiting ? 0.82 : 1 }}
        transition={exitTransition}
      />
      <motion.div
        className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.42)_0.55px,transparent_0.75px)] [background-size:4px_4px]"
        animate={{ opacity: isExiting ? 0.02 : 0.05 }}
        transition={exitTransition}
      />
      <motion.div
        className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ opacity: isExiting ? 0 : 1 }}
        transition={exitTransition}
      />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/60 to-transparent" />

      <motion.div
        className="relative flex flex-col items-center px-6 text-center"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 14 }}
        animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 1.015 : 1, y: isExiting ? -8 : 0 }}
        transition={smoothTransition}
      >
        <motion.img
          src={brandImages.logoComplete}
          alt="Mancora Kite Club"
          className="h-auto w-52 max-w-[72vw] drop-shadow-[0_24px_64px_rgba(0,0,0,0.46)] sm:w-64 md:w-72"
          draggable="false"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94, filter: 'blur(8px)' }}
          animate={{ opacity: isExiting ? 0 : 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ ...smoothTransition, delay: shouldReduceMotion ? 0 : 0.12 }}
        />

        <motion.p
          className="mt-8 text-xs font-medium tracking-[0.3em] text-white/68 sm:text-sm"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? -6 : 0 }}
          transition={{ ...smoothTransition, delay: shouldReduceMotion ? 0 : 0.48 }}
        >
          {LOADING_MESSAGE}
        </motion.p>
      </motion.div>
    </main>
  )
}

export default LoadingPage
