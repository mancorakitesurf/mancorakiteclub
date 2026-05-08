import { Link, useLocation } from 'react-router-dom'
import { getLanguageSwitchPath, getLanguage } from '../../lib/routes.js'

function LanguageSwitch() {
  const location = useLocation()
  const currentPath = location.pathname
  const targetPath = getLanguageSwitchPath(currentPath)
  const currentLang = getLanguage(currentPath)

  const nextLabel = currentLang === 'en' ? 'ES' : currentLang === 'es' ? 'FR' : 'EN'

  return (
    <Link
      to={targetPath}
      className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
      aria-label={`Switch to ${nextLabel}`}
    >
      {nextLabel}
    </Link>
  )
}

export default LanguageSwitch
