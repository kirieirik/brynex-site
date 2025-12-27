import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <img src="/BrynexWhite.svg" alt="Brynex AS" className="logo-image" />
          </Link>
          <p className="footer-description">
            Vi leverer profesjonelle digitale løsninger som hjelper din bedrift å vokse og lykkes på nett.
          </p>
        </div>

        <div className="footer-section">
          <h4>Navigasjon</h4>
          <ul className="footer-links">
            <li><Link to="/">Hjem</Link></li>
            <li><Link to="/om-oss">Om oss</Link></li>
            <li><Link to="/tjenester">Tjenester</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Tjenester</h4>
          <ul className="footer-links">
            <li><Link to="/tjenester/nettsider">Nettsider</Link></li>
            <li><Link to="/tjenester/nettbutikker">Nettbutikker</Link></li>
            <li><Link to="/tjenester/google-business">Google Business</Link></li>
            <li><Link to="/tjenester/google-ads">Google Ads</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Kontakt Oss</h4>
          <ul className="footer-contact">
            <li>
              <Mail size={16} />
              <a href="mailto:post@brynex.no">post@brynex.no</a>
            </li>
            <li>
              <Phone size={16} />
              <a href="tel:+4746863428">+47 468 63 428</a>
            </li>
            <li>
              <MapPin size={16} />
              <span>1544, Vestby, Norge</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Brynex AS. Alle rettigheter reservert.</p>
        <Link to="/personvern" className="footer-legal-link">Personvernerklæring</Link>
      </div>
    </footer>
  )
}

export default Footer
