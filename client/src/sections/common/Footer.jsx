import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaWind,
  FaYoutube,
} from 'react-icons/fa'
import { useI18n } from '../../app/providers/i18nContext.js'

function Footer() {
  const { t } = useI18n()

  return (
    <footer className="overflow-hidden border-t border-gray-200 bg-surface-light pb-8 pt-16 sm:pt-20 lg:pt-24 dark:border-white/10 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="mb-12 grid grid-cols-1 justify-items-center gap-10 sm:gap-10 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:justify-items-start lg:gap-10 xl:gap-12">
          <div className="col-span-1 flex w-full max-w-sm flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <FaWind className="text-sm" />
              </div>
              <span className="text-base font-semibold tracking-[0.02em] text-slate-900 dark:text-white">
                Mancora Kite Club
              </span>
            </div>

            <p className="mb-8 max-w-sm text-sm leading-7 text-gray-500 dark:text-gray-400">
              {t('footer.tagline')}
            </p>

            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white dark:bg-surface-dark dark:text-gray-400"
                href="#"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white dark:bg-surface-dark dark:text-gray-400"
                href="#"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white dark:bg-surface-dark dark:text-gray-400"
                href="#"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="flex w-full max-w-sm flex-col items-center text-center lg:items-start lg:px-2 lg:text-left xl:pl-8">
            <h4 className="mb-5 text-base font-bold text-slate-900 dark:text-white">Explore</h4>
            <ul className="space-y-1.5 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a className="inline-flex min-h-10 items-center transition-colors hover:text-primary" href="#">
                  Our Trips
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-10 items-center transition-colors hover:text-primary" href="#">
                  Accommodation
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-10 items-center transition-colors hover:text-primary" href="#">
                  Kite Lessons
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-10 items-center transition-colors hover:text-primary" href="#">
                  Packages
                </a>
              </li>
            </ul>
          </div>

          <div className="flex w-full max-w-sm flex-col items-center text-center lg:items-start lg:text-left">
            <h4 className="mb-5 text-base font-bold text-slate-900 dark:text-white">Company</h4>
            <ul className="space-y-1.5 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a className="inline-flex min-h-10 items-center transition-colors hover:text-primary" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-10 items-center transition-colors hover:text-primary" href="#">
                  Our Instructors
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-10 items-center transition-colors hover:text-primary" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-10 items-center transition-colors hover:text-primary" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="flex w-full max-w-sm flex-col items-center text-center lg:items-start lg:text-left">
            <h4 className="mb-5 text-base font-bold text-slate-900 dark:text-white">Contact</h4>
            <ul className="space-y-3 text-sm leading-7 text-gray-500 dark:text-gray-400">
              <li className="flex items-start justify-center gap-3 text-center lg:justify-start lg:text-left">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-primary" />
                <span className="max-w-xs break-words">Mancora Beach, Piura, Peru</span>
              </li>
              <li className="flex items-start justify-center gap-3 text-center lg:justify-start lg:text-left">
                <FaEnvelope className="mt-1 shrink-0 text-primary" />
                <span className="max-w-xs break-all sm:break-words">hello@mancorakiteclub.com</span>
              </li>
              <li className="flex items-start justify-center gap-3 text-center lg:justify-start lg:text-left">
                <FaWhatsapp className="mt-1 shrink-0 text-primary" />
                <span className="max-w-xs break-words">+51 996 557 689</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-gray-200 pt-8 text-center lg:flex-row lg:justify-between lg:text-left dark:border-white/10">
          <p className="max-w-md text-xs leading-6 text-gray-400">{t('footer.rights')}</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-400 lg:justify-end">
            <a className="inline-flex min-h-9 items-center hover:text-white" href="#">
              Terms
            </a>
            <a className="inline-flex min-h-9 items-center hover:text-white" href="#">
              Privacy
            </a>
            <a className="inline-flex min-h-9 items-center hover:text-white" href="#">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
