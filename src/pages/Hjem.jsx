import { Link } from 'react-router-dom'
import { ArrowRight, Globe, ShoppingCart, Search, TrendingUp } from 'lucide-react'
import { FadeIn, FadeInLeft, StaggerContainer, StaggerItem, HeroText } from '../components/Animations'
import Testimonials from '../components/Testimonials'
import LogoMarquee from '../components/LogoMarquee'

function Hjem() {
  const highlights = [
    {
      icon: Globe,
      title: 'Nettsider',
      description: 'Profesjonelle nettsider tilpasset din bedrift',
      path: '/tjenester/nettsider'
    },
    {
      icon: ShoppingCart,
      title: 'Nettbutikker',
      description: 'Komplette e-handelsløsninger for B2B og B2C',
      path: '/tjenester/nettbutikker'
    },
    {
      icon: Search,
      title: 'Google Business',
      description: 'Optimaliser din synlighet lokalt',
      path: '/tjenester/google-business'
    },
    {
      icon: TrendingUp,
      title: 'Google Ads',
      description: 'Målrettet annonsering som gir resultater',
      path: '/tjenester/google-ads'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <HeroText>
            <h1>
              Digitale løsninger som<br />
              <span className="gradient-text">løfter din bedrift</span>
            </h1>
          </HeroText>
          <HeroText delay={0.2}>
            <p className="hero-subtitle">
              Vi hjelper bedrifter, klubber og hobbyister med å etablere en sterk digital tilstedeværelse. 
              Fra enkle nettsider til avanserte nettbutikker – vi har løsningen for deg.
            </p>
          </HeroText>
          <HeroText delay={0.4}>
            <div className="hero-buttons">
              <Link to="/tjenester" className="btn btn-primary">
                Se våre tjenester
                <ArrowRight size={20} />
              </Link>
              <Link to="/kontakt" className="btn btn-secondary">
                Ta kontakt
              </Link>
            </div>
          </HeroText>
          <HeroText delay={0.6}>
            <LogoMarquee />
          </HeroText>
        </div>
        <div className="hero-backdrop"></div>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Hva vi tilbyr</h2>
              <p>Skreddersydde digitale løsninger for enhver behov</p>
            </div>
          </FadeIn>
          <StaggerContainer className="highlights-grid" staggerDelay={0.1}>
            {highlights.map((item, index) => (
              <StaggerItem key={index}>
                <Link to={item.path} className="highlight-card">
                  <div className="highlight-icon">
                    <item.icon size={28} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.3}>
            <div className="highlights-cta">
              <Link to="/tjenester" className="btn btn-outline">
                Utforsk alle tjenester
                <ArrowRight size={20} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us">
        <div className="container">
          <div className="why-us-content">
            <FadeInLeft className="why-us-text">
              <h2>Hvorfor velge Brynex?</h2>
              <ul className="benefits-list">
                <li>
                  <span className="benefit-number">01</span>
                  <div>
                    <h4>Personlig oppfølging</h4>
                    <p>Du får direkte kontakt og tett samarbeid gjennom hele prosessen.</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-number">02</span>
                  <div>
                    <h4>Skreddersydde løsninger</h4>
                    <p>Vi tilpasser hver løsning etter dine spesifikke behov og mål.</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-number">03</span>
                  <div>
                    <h4>Moderne teknologi</h4>
                    <p>Vi bruker de nyeste verktøyene for raske, sikre og fremtidssikre løsninger.</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-number">04</span>
                  <div>
                    <h4>Konkurransedyktige priser</h4>
                    <p>Høy kvalitet uten at det koster skjorta.</p>
                  </div>
                </li>
              </ul>
            </FadeInLeft>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <FadeIn>
            <div className="cta-content">
              <h2>Klar for å ta steget?</h2>
              <p>La oss snakke om hvordan vi kan hjelpe din bedrift med å vokse digitalt.</p>
              <Link to="/kontakt" className="btn btn-primary btn-large">
                Kontakt oss i dag
                <ArrowRight size={20} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default Hjem
