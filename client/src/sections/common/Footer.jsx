import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaWind,
  FaYoutube,
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-surface-light pb-8 pt-16 dark:border-white/10 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <FaWind className="text-sm" />
              </div>
              <span className="font-display text-xl font-bold text-slate-900 dark:text-white">
                Máncora Kite Club
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Premium kiteboarding experiences in Northern Peru. Ride, stay, and connect with a
              community of ocean lovers.
            </p>
            <div className="flex gap-4">
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white dark:bg-surface-dark dark:text-gray-400"
                href="#"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white dark:bg-surface-dark dark:text-gray-400"
                href="#"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white dark:bg-surface-dark dark:text-gray-400"
                href="#"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-slate-900 dark:text-white">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Our Trips
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Accommodation
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Kite Lessons
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Packages
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-slate-900 dark:text-white">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Our Instructors
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-slate-900 dark:text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" /> Máncora Beach, Piura, Peru
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" /> hello@mancorakiteclub.com
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-primary" /> +51 999 999 999
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row dark:border-white/10">
          <p className="text-xs text-gray-400">© 2024 Máncora Kite Club. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a className="hover:text-white" href="#">
              Terms
            </a>
            <a className="hover:text-white" href="#">
              Privacy
            </a>
            <a className="hover:text-white" href="#">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
