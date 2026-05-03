import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useI18n } from '../../app/providers/i18nContext.js'
import clubLogo from '../../assets/LOGOS KITE CLUB/1150f6f9887d0d43f04c75200a1aacbd.webp'

const NAV_ITEMS = [
  { to: '/trips', label: 'nav.trips' },
  { to: '/classes', label: 'nav.classes' },
  { to: '/stay', label: 'nav.stay' },
  { to: '/build', label: 'nav.build' },
  { to: '/reviews', label: 'nav.reviews' },
  { to: '/contact', label: 'nav.contact' },
]

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)
  const menuContainerRef = useRef(null)
  const { isSpanish, changeLanguage, currentLang, t } = useI18n()
  const homePath = isSpanish ? '/esp' : '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangOpen(false)
      }

      if (isMobileOpen && menuContainerRef.current && !menuContainerRef.current.contains(event.target)) {
        setIsMobileOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
    }
  }, [isMobileOpen])

  const languages = [
    { code: 'es', labelKey: 'header.spanish' },
    { code: 'en', labelKey: 'header.english' },
    { code: 'fr', labelKey: 'header.french' },
  ]

  const currentLanguage = languages.find((language) => language.code === currentLang)
  const currentLanguageLabel = currentLanguage ? t(currentLanguage.labelKey) : t('header.language')
  const logoTextClass = scrolled ? 'text-slate-950 dark:text-white' : 'text-white'
  const navTextClass = scrolled ? 'text-slate-700 dark:text-white/80' : 'text-white/80'
  const controlClass = scrolled
    ? 'border-slate-200 bg-white/90 text-slate-900 shadow-sm hover:border-primary hover:bg-white dark:border-white/10 dark:bg-background-dark/80 dark:text-white'
    : 'border-white/20 bg-white/5 text-white hover:border-primary hover:bg-primary/10'

  return (
    <header
      ref={menuContainerRef}
      className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? 'border-gray-200 bg-background-light/95 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-background-dark/95'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          to={homePath}
          className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
          onClick={() => setIsMobileOpen(false)}
        >
          <img src={clubLogo} alt="THE CLUB logo" className="h-8 w-auto shrink-0 sm:h-9 lg:h-10" />
          <div className="min-w-0">
            <span className={`block truncate font-display text-lg leading-none sm:text-xl ${logoTextClass}`}>
              Mancora
            </span>
            <span className="block truncate text-[10px] font-bold uppercase tracking-[0.28em] text-primary sm:text-xs">
              Kite Club
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${navTextClass}`}
              to={item.to}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-expanded={isLangOpen}
              onClick={() => {
                setIsMobileOpen(false)
                setIsLangOpen((prev) => !prev)
              }}
              className={`flex h-10 items-center gap-2 rounded-full border px-3 text-xs font-medium backdrop-blur-md transition-all duration-300 sm:h-11 sm:px-4 sm:text-sm ${controlClass}`}
            >
              <span className="sm:hidden">{currentLang.toUpperCase()}</span>
              <span className="hidden sm:inline">{currentLanguageLabel}</span>
              <span
                className={`text-[10px] transition-transform duration-300 sm:text-xs ${
                  isLangOpen ? 'rotate-180' : ''
                }`}
              >
                v
              </span>
            </button>

            <div
              className={`absolute right-0 mt-3 w-44 origin-top-right rounded-2xl border border-white/10 bg-background-dark/95 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:w-48 ${
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
                      : 'text-white hover:bg-primary/10'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex min-w-8 items-center justify-center rounded-full border border-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
                      {lang.code}
                    </span>
                    <span>{t(lang.labelKey)}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-lg transition-colors hover:border-primary hover:text-primary lg:hidden ${controlClass}`}
            aria-label="Toggle menu"
            onClick={() => {
              setIsLangOpen(false)
              setIsMobileOpen((prev) => !prev)
            }}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <nav className="border-t border-white/10 bg-[#0b1120] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                className="rounded-2xl px-3 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-primary"
                to={item.to}
                onClick={() => setIsMobileOpen(false)}
              >
                {t(item.label)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
