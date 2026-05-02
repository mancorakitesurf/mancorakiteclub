import { Outlet } from 'react-router-dom'
import { I18nProvider } from '../providers/I18nProvider.jsx'
import ActionHub from "../../components/ActionHub.jsx"
import FloatingCart from "../../components/FloatingCart.jsx"
import ScrollToTop from '../../components/ScrollToTop.jsx'
import Footer from '../../sections/common/Footer.jsx'
import Header from '../../sections/common/Header.jsx'

function MainLayout() {
  return (
    <I18nProvider>
      <div className="dark min-h-screen overflow-x-hidden bg-background-light font-sans text-slate-800 transition-colors duration-300 dark:bg-background-dark dark:text-gray-200">
        <ScrollToTop />
        <Header />
        <main className="overflow-x-hidden">
          <Outlet />
        </main>
        <Footer />
        <FloatingCart />
        <ActionHub />
      </div>
    </I18nProvider>
  )
}

export default MainLayout
