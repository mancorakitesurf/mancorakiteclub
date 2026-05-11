import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLoadingNavigation } from '../lib/loadingNavigation.js'
import { useTripBuilderStore } from '../store/useTripBuilderStore.js'

function FloatingCart() {
  const { actividades, paso } = useTripBuilderStore()
  const location = useLocation()
  const navigateWithLoader = useLoadingNavigation()
  const [isVisible, setIsVisible] = useState(false)

  const isOnBuildPage = location.pathname === '/build'
  const hasProgress = Object.keys(actividades).length > 0

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isOnBuildPage || !hasProgress) return null

  return (
    <button
      type="button"
      onClick={() => navigateWithLoader('/build')}
      aria-label="Continue building your trip"
      className={`group fixed bottom-24 right-6 z-[98] flex items-center transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <span className="mr-3 max-w-0 overflow-hidden whitespace-nowrap rounded-full border border-white/20 bg-slate-900/90 py-2 text-xs font-medium tracking-wide text-white opacity-0 transition-all duration-500 group-hover:max-w-xs group-hover:px-3 group-hover:opacity-100">
        Step {paso}/5 — Continue
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg transition-transform hover:scale-110">
        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>

        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-primary shadow">
          {paso}
        </span>
      </span>
    </button>
  )
}

export default FloatingCart
