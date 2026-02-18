import { Outlet } from 'react-router-dom'
import { I18nProvider } from '../providers/I18nProvider.jsx'
import Footer from '../../sections/common/Footer.jsx'
import Header from '../../sections/common/Header.jsx'

function MainLayout() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}

export default MainLayout
