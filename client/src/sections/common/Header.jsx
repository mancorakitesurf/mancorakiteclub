import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useI18n } from '../../app/providers/i18nContext.js'
import clubLogo from '../../assets/Logo/the-club-logo.png'

const NAV_ITEMS = [
  { id: 'trips', label: 'Trips' },
  { id: 'classes', label: 'Classes' },
  { id: 'stay', label: 'Stay' },
  { id: 'packages', label: 'Packages' },
  { id: 'testimonials', label: 'Testimonials' },
]

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { isSpanish } = useI18n()
  const homePath = isSpanish ? '/esp' : '/'

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-background-light/90 backdrop-blur-md transition-all duration-300 dark:border-white/10 dark:bg-background-dark/90">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to={homePath} className="flex items-center gap-3" onClick={() => setIsMobileOpen(false)}>
          <img src={clubLogo} alt="THE CLUB logo" className="h-9 w-auto md:h-10" />
          <div>
            <span className="block font-display text-xl leading-none text-slate-900 dark:text-white">
              Máncora
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Kite Club</span>
          </div>
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              className="text-sm font-medium transition-colors hover:text-primary"
              href={`${homePath}#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="text-2xl text-gray-500 transition-colors hover:text-primary focus:outline-none md:hidden dark:text-gray-300"
          aria-label="Toggle menu"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <FaBars />
        </button>
      </div>

      {isMobileOpen ? (
        <nav className="border-t border-gray-200 bg-background-light px-4 py-4 md:hidden dark:border-white/10 dark:bg-background-dark">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                className="text-sm font-medium transition-colors hover:text-primary"
                href={`${homePath}#${item.id}`}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}

export default Header
