import { Link, useLocation } from 'react-router-dom'
import { getLanguageSwitchPath, isSpanishPath } from '../../lib/routes.js'

function LanguageSwitch() {
  const location = useLocation()
  const currentPath = location.pathname
  const targetPath = getLanguageSwitchPath(currentPath)
  const isSpanish = isSpanishPath(currentPath)

  return (
    <Link
      to={targetPath}
      className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
      aria-label={isSpanish ? 'Switch to English' : 'Cambiar a espanol'}
    >
      {isSpanish ? 'EN' : 'ES'}
    </Link>
  )
}

export default LanguageSwitch
