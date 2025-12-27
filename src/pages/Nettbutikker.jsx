import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  ShoppingCart, 
  CreditCard, 
  Package, 
  TrendingUp, 
  Users, 
  BarChart3,
  Truck,
  RefreshCw,
  CheckCircle,
  Building2,
  User,
  Smartphone
} from 'lucide-react'
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, HeroText } from '../components/Animations'

function Nettbutikker() {
  const features = [
    {
      icon: CreditCard,
      title: 'Sikker betaling',
      description: 'Integrasjon med Vipps, Klarna, kort og andre populære betalingsløsninger.'
    },
    {
      icon: Package,
      title: 'Lagerstyring',
      description: 'Hold oversikt over lagerbeholdning med automatiske varsler ved lav beholdning.'
    },
    {
      icon: Truck,
      title: 'Fraktintegrasjon',
      description: 'Automatisk fraktkalkulator med integrasjon mot Posten/Bring'
    },
    {
      icon: BarChart3,
      title: 'Salgsrapporter',
      description: 'Detaljert innsikt i salg, kundeadferd og produktytelse.'
    },
    {
      icon: RefreshCw,
      title: 'Automatisering',
      description: 'Automatiske ordrebekreftelser, påminnelser og oppfølgings e-poster til kunder.'
    },
    {
      icon: Users,
      title: 'Kundekontoer',
      description: 'La kundene opprette konto for enklere kjøp og ordrehistorikk med Google og Vipps Login.'
    }
  ]

  const b2cFeatures = [
    'Brukervennlig handlekurv',
    'Produktvarianter (størrelse, farge, etc.)',
    'Ønskeliste-funksjon',
    'Produktanmeldelser',
    'Relaterte produkter',
    'Rabattkoder og kampanjer',
    'Nyhetsbrev-integrasjon',
    'Mobiloptimalisert checkout',
    '**Vipps checkout og betaling',
    '**Vipps brukeropprettelse',
    '**Google Pay og login',
  ]

  const b2bFeatures = [
    'Kundegrupper med egne priser',
    'Kredittgrenser',
    'Rabatt per merke, rolle eller kvantum',
    'Godkjenning av ordre på ledernivå',
    'Bestillingslister',
    'ERP-integrasjon',
    'Godkjenningsflyt for ordrer'
  ]

  const platforms = [
    {
      name: 'WooCommerce',
      description: 'Fleksibel løsning bygget på WordPress. Perfekt for de som ønsker full kontroll.',
      best: 'Små til mellomstore butikker'
    },
    {
      name: 'Skreddersydd',
      description: 'Bygget fra bunnen av for unike behov. Full fleksibilitet og eierskap.',
      best: 'Komplekse krav, store volum'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero service-hero">
        <div className="container">
          <HeroText>
            <span className="service-badge">Tjeneste</span>
            <h1>Nettbutikk & E-handel</h1>
          </HeroText>
          <HeroText delay={0.2}>
            <p className="page-subtitle">
              Komplette e-handelsløsninger for både B2C og B2B. 
              Vi bygger nettbutikker som selger – med alle funksjonene du trenger.
            </p>
          </HeroText>
          <HeroText delay={0.4}>
            <div className="hero-buttons">
              <Link to="/kontakt" className="btn btn-primary">
                Få et uforpliktende tilbud
                <ArrowRight size={20} />
              </Link>
            </div>
          </HeroText>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="service-intro">
        <div className="container">
          <div className="intro-grid">
            <FadeInLeft>
              <div className="intro-content">
                <h2>Selg mer med riktig plattform</h2>
                <p>
                  En god nettbutikk handler om mer enn bare å liste opp produkter. 
                  Det handler om å skape en kjøpsopplevelse som konverterer besøkende til kunder, 
                  og kunder til gjengangere.
                </p>
                <p>
                  Vi hjelper deg med å velge riktig plattform, sette opp betaling og frakt, 
                  og optimalisere butikken for salg. Enten du selger til forbrukere eller bedrifter.
                </p>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div className="intro-stats">
                <div className="stat-card">
                  <span className="stat-icon"><ShoppingCart size={32} /></span>
                  <span className="stat-label">Enkel checkout reduserer avbrutte kjøp</span>
                </div>
                <div className="stat-card">
                  <span className="stat-icon"><Smartphone size={32} /></span>
                  <span className="stat-label">Mobilvennlig butikk er en forventning</span>
                </div>
                <div className="stat-card">
                  <span className="stat-icon"><TrendingUp size={32} /></span>
                  <span className="stat-label">God brukeropplevelse øker salget</span>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* B2C vs B2B Section */}
      <section className="service-comparison">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>B2C eller B2B – vi leverer begge</h2>
              <p>Ulike kundegrupper krever ulike løsninger</p>
            </div>
          </FadeIn>
          <div className="comparison-grid">
            <FadeInLeft>
              <div className="comparison-card">
                <div className="comparison-header">
                  <User size={32} />
                  <h3>B2C – Forbrukere</h3>
                </div>
                <p>Selg direkte til forbrukere med en intuitiv og engasjerende handleopplevelse.</p>
                <ul>
                  {b2cFeatures.map((feature, index) => (
                    <li key={index}>
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div className="comparison-card">
                <div className="comparison-header">
                  <Building2 size={32} />
                  <h3>B2B – Bedrifter</h3>
                </div>
                <p>Profesjonelle løsninger for bedriftskunder med avanserte funksjoner.</p>
                <ul>
                  {b2bFeatures.map((feature, index) => (
                    <li key={index}>
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Funksjoner som driver salg</h2>
              <p>Alt du trenger for en vellykket nettbutikk</p>
            </div>
          </FadeIn>
          <StaggerContainer className="features-grid" staggerDelay={0.1}>
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <feature.icon size={24} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="service-platforms">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Velg riktig plattform</h2>
              <p>Vi hjelper deg å finne løsningen som passer dine behov</p>
            </div>
          </FadeIn>
          <StaggerContainer className="platforms-grid" staggerDelay={0.15}>
            {platforms.map((platform, index) => (
              <StaggerItem key={index}>
                <div className="platform-card">
                  <h3>{platform.name}</h3>
                  <p>{platform.description}</p>
                  <span className="platform-best">Best for: {platform.best}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <FadeIn>
            <div className="cta-content">
              <h2>Klar for å starte salget?</h2>
              <p>Ta kontakt for en uforpliktende prat om din nettbutikk. Vi finner den beste løsningen sammen.</p>
              <Link to="/kontakt" className="btn btn-primary btn-large">
                Start nettbutikken din
                <ArrowRight size={20} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default Nettbutikker
