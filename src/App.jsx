import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ServiceSchema from './components/ServiceSchema'
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
// New landing pages
import NettsideBedrift from './pages/NettsideBedrift'
import NettbutikkLøsninger from './pages/NettbutikkLøsninger'
import GoogleAdsByra from './pages/GoogleAdsByra'
import SEOByra from './pages/SEOByra'
import AINettsider from './pages/AINettsider'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  // Service schema for all services
  const services = [
    {
      name: 'Nettsider',
      description: 'Profesjonelle nettsider tilpasset din bedrift',
      url: 'https://brynex.no/tjenester/nettsider',
      price: '8900'
    },
    {
      name: 'Nettbutikker',
      description: 'Komplette e-handelsløsninger for B2B og B2C',
      url: 'https://brynex.no/tjenester/nettbutikker',
      price: '24900'
    },
    {
      name: 'Google Business',
      description: 'Optimalisering av Google Bedriftsprofil',
      url: 'https://brynex.no/tjenester/google-business',
      price: '3900'
    },
    {
      name: 'Google Ads',
      description: 'Målrettet annonsering på Google',
      url: 'https://brynex.no/tjenester/google-ads',
      price: '5000'
    }
  ]

  return (
    <div className="app">
      <ServiceSchema services={services} />
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
          {/* New landing pages */}
          <Route path="/nettside-bedrift" element={<NettsideBedrift />} />
          <Route path="/nettbutikk-løsninger" element={<NettbutikkLøsninger />} />
          <Route path="/google-ads-byrå" element={<GoogleAdsByra />} />
          <Route path="/seo-byrå-norge" element={<SEOByra />} />
          <Route path="/ai-nettsider" element={<AINettsider />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
