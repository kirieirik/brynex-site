import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
  }, [location])

  const serviceLinks = [
    { path: '/tjenester/nettsider', label: 'Nettsider' },
    { path: '/tjenester/nettbutikker', label: 'Nettbutikker' },
    { path: '/tjenester/google-business', label: 'Google Business' },
    { path: '/tjenester/google-ads', label: 'Google Ads' },
  ]

  const isServicesActive = location.pathname.startsWith('/tjenester')

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container">
        <Link to="/" className="logo">
          <img src="/BrynexWhite.svg" alt="Brynex AS" className="logo-image" />
        </Link>

        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Hjem
            </Link>
          </li>
          <li>
            <Link to="/om-oss" className={location.pathname === '/om-oss' ? 'active' : ''}>
              Om oss
            </Link>
          </li>
          <li 
            className="nav-dropdown"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link 
              to="/tjenester" 
              className={`dropdown-trigger ${isServicesActive ? 'active' : ''}`}
              onClick={(e) => {
                if (isMobileMenuOpen) {
                  e.preventDefault()
                  setIsServicesOpen(!isServicesOpen)
                }
              }}
            >
              Tjenester
              <ChevronDown size={16} className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`} />
            </Link>
            <ul className={`dropdown-menu ${isServicesOpen ? 'open' : ''}`}>
              <li>
                <Link to="/tjenester">Alle tjenester</Link>
              </li>
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/kontakt" className={location.pathname === '/kontakt' ? 'active' : ''}>
              Kontakt
            </Link>
          </li>
        </ul>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
