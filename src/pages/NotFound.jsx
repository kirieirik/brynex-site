import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { FadeIn, HeroText } from '../components/Animations'

function NotFound() {
  return (
    <section className="page-hero not-found-page">
      <div className="container">
        <HeroText>
          <span className="error-code">404</span>
        </HeroText>
        <HeroText delay={0.2}>
          <h1>Siden finnes ikke</h1>
        </HeroText>
        <HeroText delay={0.3}>
          <p className="page-subtitle">
            Beklager, men siden du leter etter eksisterer ikke eller har blitt flyttet.
          </p>
        </HeroText>
        <HeroText delay={0.4}>
          <div className="hero-buttons">
            <Link to="/" className="btn btn-primary">
              <Home size={20} />
              Til forsiden
            </Link>
            <button onClick={() => window.history.back()} className="btn btn-secondary">
              <ArrowLeft size={20} />
              Gå tilbake
            </button>
          </div>
        </HeroText>
      </div>
    </section>
  )
}

export default NotFound
