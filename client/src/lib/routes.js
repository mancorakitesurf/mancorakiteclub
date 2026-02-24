export const EN_TO_ES_ROUTE_MAP = {
  '/': '/esp',
  '/learn/kitesurf': '/aprende/kitesurf/esp',
  '/learn/wingfoil': '/aprende/wingfoil/esp',
  '/kitesurfing': '/kitesurfing/esp',
  '/wingfoil': '/wingfoil/esp',
  '/sup': '/sup/esp',
  '/equipment-rental': '/equipment/esp',
  '/solo-surf': '/solo-surf/esp',
  '/hostel': '/acommodation/hostal/esp',
  '/kite-club-hotel': '/acommodation/hotel-kite/esp',
  '/4-stars-hotel': '/acommodation/4-estrellas/esp',
  '/faq': '/faq/esp',
  '/blog': '/blog/esp',
  '/waves': '/waves/esp',
}

export const ES_TO_EN_ROUTE_MAP = Object.fromEntries(
  Object.entries(EN_TO_ES_ROUTE_MAP).map(([enPath, esPath]) => [esPath, enPath]),
)

export function normalizePath(pathname = '/') {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname || '/'
}

export function isSpanishPath(pathname = '/') {
  const normalized = normalizePath(pathname)
  return normalized === '/esp' || normalized.endsWith('/esp')
}

export function getLanguageSwitchPath(pathname = '/') {
  const normalized = normalizePath(pathname)

  if (EN_TO_ES_ROUTE_MAP[normalized]) {
    return EN_TO_ES_ROUTE_MAP[normalized]
  }

  if (ES_TO_EN_ROUTE_MAP[normalized]) {
    return ES_TO_EN_ROUTE_MAP[normalized]
  }

  return '/'
}
