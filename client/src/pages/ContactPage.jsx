import SEO from '../components/SEO.jsx'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import FaqList from '../sections/faq/FaqList.jsx'
import { WHATSAPP_LINK } from '../sections/home/homeContent.js'

function ContactPage() {
  return (
    <>
      <SEO
        title="Contact | Mancora Kite Club"
        description="Contact Máncora Kite Club for trips, classes, and stay."
        canonicalPath="/contact"
        hreflang={{ en: '/contact', es: '/esp', default: '/' }}
      />

      <section className="py-24 #1E3130">
        <Container>

          {/* WhatsApp CTA */}
          <div className="mb-16 text-center">
            <Button
              as="a"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact via WhatsApp
            </Button>
          </div>

          {/* FAQ */}
          <FaqList />

        </Container>
      </section>
    </>
  )
}

export default ContactPage