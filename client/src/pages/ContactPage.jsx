import { FaWhatsapp } from 'react-icons/fa'
import SEO from '../components/SEO.jsx'
import { WHATSAPP_LINK } from '../sections/home/homeContent.js'

function ContactPage() {
  return (
    <>
      <SEO
        title="Mancora Kite Club | Contact"
        description="Contact Máncora Kite Club for trips, classes, and stay."
        canonicalPath="/contact"
        hreflang={{ en: '/contact', es: '/esp', default: '/' }}
      />
      <section className="bg-background-light py-28 dark:bg-background-dark">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1 className="mt-4 font-display text-4xl text-slate-900 dark:text-white md:text-5xl">
            Let&apos;s plan your next session
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-300">
            Reach us for availability, pricing, and trip guidance.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <FaWhatsapp className="text-base" />
              WhatsApp
            </a>
            <span className="text-sm text-slate-500 dark:text-slate-400">hello@mancorakiteclub.com</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
