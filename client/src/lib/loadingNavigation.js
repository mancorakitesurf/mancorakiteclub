import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const LOADING_ROUTE_PATH = '/loading'

const LOCALE_PREFIX_PATTERN = /^\/(esp|fr)(?=\/|$)/

function getCurrentFullPath(location) {
  return `${location.pathname}${location.search}${location.hash}`
}

function getPathFromTo(to) {
  if (!to) return null
  if (typeof to === 'string') return to

  const pathname = to.pathname || '/'
  const search = to.search || ''
  const hash = to.hash || ''

  return `${pathname}${search}${hash}`
}

export function resolveNavigationTarget(to) {
  const rawPath = getPathFromTo(to)

  if (!rawPath || rawPath.startsWith('#') || typeof window === 'undefined') {
    return null
  }

  try {
    const targetUrl = new URL(rawPath, window.location.origin)

    if (targetUrl.origin !== window.location.origin) {
      return null
    }

    return `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`
  } catch {
    return null
  }
}

export function normalizeLoadingPath(pathname = '/') {
  const normalized = pathname.replace(LOCALE_PREFIX_PATTERN, '') || '/'
  const withoutTrailingSlash =
    normalized.length > 1 && normalized.endsWith('/') ? normalized.slice(0, -1) : normalized

  return withoutTrailingSlash === '/' ? '/home' : withoutTrailingSlash
}

export function isBlogPath(pathname = '/') {
  const normalizedPathname = normalizeLoadingPath(pathname)
  return normalizedPathname === '/blog' || normalizedPathname.startsWith('/blog/')
}

export function shouldRoutePassThroughLoading(pathname = '/') {
  const normalizedPathname = normalizeLoadingPath(pathname)

  if (normalizedPathname === LOADING_ROUTE_PATH || normalizedPathname === '/intro') {
    return false
  }

  return !isBlogPath(pathname)
}

export function shouldUseLoadingPage(to, currentPath = '') {
  const target = resolveNavigationTarget(to)

  if (!target) {
    return false
  }

  const targetUrl = new URL(target, window.location.origin)
  const normalizedTarget = normalizeLoadingPath(targetUrl.pathname)
  const currentTarget = currentPath ? resolveNavigationTarget(currentPath) : null

  if (currentTarget === target) {
    return false
  }

  return shouldRoutePassThroughLoading(normalizedTarget)
}

export function navigateWithLoader(navigate, to, options = {}) {
  const target = resolveNavigationTarget(to)
  const { currentPath = '', ...navigateOptions } = options
  const currentTarget = currentPath ? resolveNavigationTarget(currentPath) : null

  if (target && currentTarget === target) {
    return
  }

  if (!target || !shouldUseLoadingPage(target, currentPath)) {
    navigate(to, navigateOptions)
    return
  }

  navigate(LOADING_ROUTE_PATH, {
    replace: Boolean(navigateOptions.replace),
    state: {
      redirectTo: target,
      from: currentPath,
      forwardedState: navigateOptions.state,
    },
  })
}

export function useLoadingNavigation() {
  const navigate = useNavigate()
  const location = useLocation()

  return useCallback(
    (to, options = {}) => {
      navigateWithLoader(navigate, to, {
        ...options,
        currentPath: options.currentPath || getCurrentFullPath(location),
      })
    },
    [location, navigate]
  )
}

export function useLoadingNavigationInterceptor() {
  const navigateWithLoading = useLoadingNavigation()
  const location = useLocation()

  return useCallback(
    (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey
      ) {
        return
      }

      const target = event.target

      if (!(target instanceof Element)) {
        return
      }

      const anchor = target.closest('a[href]')

      if (
        !anchor ||
        anchor.hasAttribute('download') ||
        (anchor.target && anchor.target !== '_self')
      ) {
        return
      }

      const href = anchor.getAttribute('href')
      const currentPath = getCurrentFullPath(location)
      const targetPath = resolveNavigationTarget(href)

      if (targetPath && targetPath === currentPath) {
        event.preventDefault()
        return
      }

      if (!shouldUseLoadingPage(href, currentPath)) {
        return
      }

      event.preventDefault()
      navigateWithLoading(href, { currentPath })
    },
    [location, navigateWithLoading]
  )
}
