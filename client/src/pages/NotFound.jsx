import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Button from '../components/ui/Button.jsx'
import Container from '../components/ui/Container.jsx'

function NotFound() {
  return (
    <>
      <SEO
        title="Mancora Kite Club | Not Found"
        description="Page not found. The kitesurfing spot, trip, or page you are looking for does not exist. Return to home and keep riding with Máncora Kite Club. Best prices!"
        canonicalPath="/"
        hreflang={{ en: '/', es: '/esp', default: '/' }}
      />
      <section className="py-20">
        <Container className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">404</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Page not found</h1>
          <p className="mt-4 text-slate-700">The page you are looking for does not exist or has been moved.</p>
          <div className="mt-8">
            <Button as={Link} to="/">
              Go home
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default NotFound
