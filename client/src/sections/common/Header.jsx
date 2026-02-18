import { Link } from 'react-router-dom'
import Container from '../../components/ui/Container.jsx'
import { useI18n } from '../../app/providers/i18nContext.js'
import LanguageSwitch from './LanguageSwitch.jsx'

function Header() {
  const { isSpanish } = useI18n()
  const homePath = isSpanish ? '/esp' : '/'
  const faqPath = isSpanish ? '/faq/esp' : '/faq'
  const blogPath = isSpanish ? '/blog/esp' : '/blog'

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link to={homePath} className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">
          Mancora Kite Club
        </Link>

        <nav className="flex items-center gap-5 text-sm font-medium text-slate-700">
          <Link to={faqPath} className="transition hover:text-slate-950">
            FAQ
          </Link>
          <Link to={blogPath} className="transition hover:text-slate-950">
            Blog
          </Link>
          <LanguageSwitch />
        </nav>
      </Container>
    </header>
  )
}

export default Header
