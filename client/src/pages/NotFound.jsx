import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Button from '../components/ui/Button.jsx'
import Container from '../components/ui/Container.jsx'
import { useI18n } from '../app/providers/i18nContext.jsx'

function NotFound() {
  const { t, currentLang } = useI18n()

  const homePath = `/home${currentLang === 'en' ? '' : currentLang === 'fr' ? '/fr' : '/esp'}`

  return (
    <>
      <SEO
        titleKey="seo.notFoundTitle"
        descKey="seo.notFoundDesc"
        titleFallback="Mancora Kite Club | Not Found"
        descFallback="Page not found. The kitesurfing spot, trip, or page you are looking for does not exist. Return to home and keep riding with Máncora Kite Club. Best prices!"
      />
      <section className="py-20">
        <Container className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">404</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">{t('notFound.title')}</h1>
          <p className="mt-4 text-slate-700">{t('notFound.subtitle')}</p>
          <div className="mt-8">
            <Button as={Link} to={homePath}>
              {t('common.backToHome')}
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default NotFound
