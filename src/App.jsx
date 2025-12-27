import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hjem from './pages/Hjem'
import OmOss from './pages/OmOss'
import Tjenester from './pages/Tjenester'
import Nettsider from './pages/Nettsider'
import Nettbutikker from './pages/Nettbutikker'
import GoogleBusiness from './pages/GoogleBusiness'
import GoogleAds from './pages/GoogleAds'
import Kontakt from './pages/Kontakt'
import Personvern from './pages/Personvern'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hjem />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/tjenester" element={<Tjenester />} />
          <Route path="/tjenester/nettsider" element={<Nettsider />} />
          <Route path="/tjenester/nettbutikker" element={<Nettbutikker />} />
          <Route path="/tjenester/google-business" element={<GoogleBusiness />} />
          <Route path="/tjenester/google-ads" element={<GoogleAds />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/personvern" element={<Personvern />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
