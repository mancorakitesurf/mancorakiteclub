import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useI18n } from '../../app/providers/i18nContext.js'
import clubLogo from '../../assets/Logo/the-club-logo.png'

const NAV_ITEMS = [
  { to: '/trips', label: 'Trips' },
  { to: '/classes', label: 'Classes' },
  { to: '/stay', label: 'Stay with us' },
  { to: '/build', label: 'Build your trip' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)
  const { isSpanish, changeLanguage, currentLang } = useI18n()
  const homePath = isSpanish ? '/esp' : '/'

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])


  const languages = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
  ]

  return (
    <header className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? 'border-gray-200 bg-background-light/95 backdrop-blur-xl shadow-md dark:border-white/10 dark:bg-background-dark/95'
          : 'border-transparent bg-transparent'
      }`}
    >

      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to={homePath} className="flex items-center gap-3" onClick={() => setIsMobileOpen(false)}>
          <img src={clubLogo} alt="THE CLUB logo" className="h-9 w-auto md:h-10" />
          <div>
            <span className="block font-display text-xl leading-none text-white">
              Máncora
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Kite Club
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center space-x-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              className="text-sm font-medium text-white/80 transition-colors hover:text-primary"
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">

          {/* DROPDOWN */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsLangOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-primary/10"
            >
              {languages.find(l => l.code === currentLang)?.label || 'Language'}
              <span
                className={`transition-transform duration-300 ${
                  isLangOpen ? 'rotate-180' : ''
                }`}
              >
                ▾
              </span>
            </button>

            {/* Dropdown Panel */}
            <div
              className={`absolute right-0 mt-4 w-48 origin-top-right rounded-2xl border border-white/10 bg-background-dark/95 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
                isLangOpen
                  ? 'scale-100 opacity-100'
                  : 'pointer-events-none scale-95 opacity-0'
              }`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code)
                    setIsLangOpen(false)
                  }}
                  className={`flex w-full items-center justify-between px-4 py-3 text-sm transition-all duration-200 ${
                    currentLang === lang.code
                    ? 'bg-primary/20 text-primary'
                    : 'hover:bg-primary/10'
                  }`}
                >
                  <span>
                    {lang.flag} {lang.label}
                  </span>

                  {currentLang === lang.code && (
                    <span className="text-primary">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            className="text-2xl text-white/80 transition-colors hover:text-primary md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <nav className="border-t border-white/10 bg-[#0b1120] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                className="text-sm font-medium text-white/80 hover:text-primary"
                to={item.to}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
