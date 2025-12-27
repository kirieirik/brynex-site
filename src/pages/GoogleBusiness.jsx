import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  MapPin, 
  Star, 
  Clock, 
  Phone, 
  Camera,
  MessageSquare,
  TrendingUp,
  Search,
  CheckCircle,
  Eye,
  Users
} from 'lucide-react'
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, HeroText } from '../components/Animations'

function GoogleBusiness() {
  const features = [
    {
      icon: MapPin,
      title: 'Synlighet på kartet',
      description: 'Vis opp når folk søker etter bedrifter som din i nærheten.'
    },
    {
      icon: Star,
      title: 'Kundeanmeldelser',
      description: 'Samle og vis frem anmeldelser som bygger tillit hos potensielle kunder.'
    },
    {
      icon: Clock,
      title: 'Åpningstider',
      description: 'La kundene vite når du er tilgjengelig – også på helligdager.'
    },
    {
      icon: Phone,
      title: 'Direkte kontakt',
      description: 'Ring-knapp, veibeskrivelse og meldinger rett fra søkeresultatene.'
    },
    {
      icon: Camera,
      title: 'Bilder og video',
      description: 'Vis frem bedriften din med profesjonelle bilder og videoer.'
    },
    {
      icon: MessageSquare,
      title: 'Innlegg og oppdateringer',
      description: 'Del nyheter, tilbud og arrangementer direkte i søkeresultatene.'
    }
  ]

  const benefits = [
    {
      icon: Eye,
      title: 'Økt synlighet',
      description: 'Google Bedriftsprofil vises i lokale søk, på Google Maps og i kunnskapspanelet på høyre side av søkeresultatene.'
    },
    {
      icon: Users,
      title: 'Flere kunder',
      description: 'Lokale søk har høy kjøpsintensjon – folk som søker "nær meg" er ofte klare til å handle.'
    },
    {
      icon: TrendingUp,
      title: 'Bedre omdømme',
      description: 'Positive anmeldelser bygger tillit. Vi hjelper deg med strategi for å samle flere gode anmeldelser.'
    }
  ]

  const included = [
    'Oppretting eller overtakelse av eksisterende profil',
    'Verifisering av bedriften hos Google',
    'Optimalisering av alle felter og kategorier',
    'Opplasting av logo og profilbilde',
    'Opplasting av bilder fra bedriften',
    'Oppsett av åpningstider og kontaktinfo',
    'Oppsett av tjenester/produkter',
    'Strategi for anmeldelser',
    'Gjentakende vedlikehold av profilen dersom du ønsker det (valgfritt, men anbefalt)'
  ]

  const faq = [
    {
      q: 'Hva er forskjellen på Google Bedriftsprofil og en nettside?',
      a: 'Google Bedriftsprofil er et verktøy fra Google som viser bedriften din i Google Søk og Maps. En nettside er din egen plattform med mer kontroll og innhold. Ideelt sett har du begge deler.'
    },
    {
      q: 'Koster Google Bedriftsprofil penger?',
      a: 'Nei, selve profilen er helt gratis fra Google. Du betaler kun for vår hjelp med oppsett og optimalisering.'
    },
    {
      q: 'Hvor lang tid tar det å sette opp?',
      a: 'Selve oppsettet tar 1-2 dager. Verifiseringen fra Google kan ta 1-2 uker (vanlig for nye bedrifter).'
    },
    {
      q: 'Kan jeg administrere profilen selv etterpå?',
      a: 'Absolutt! Du står fritt til å redigere og endre hva enn du ønsker selv. Du kan oppdatere bilder, innlegg og svare på anmeldelser selv.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero service-hero">
        <div className="container">
          <HeroText>
            <span className="service-badge">Tjeneste</span>
            <h1>Google Bedriftsprofil</h1>
          </HeroText>
          <HeroText delay={0.2}>
            <p className="page-subtitle">
              Bli synlig når potensielle kunder søker etter det du tilbyr. 
              Vi setter opp og optimaliserer din Google Bedriftsprofil for maksimal synlighet.
            </p>
          </HeroText>
          <HeroText delay={0.4}>
            <div className="hero-buttons">
              <Link to="/kontakt" className="btn btn-primary">
                Få hjelp med din profil
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
                <h2>Bli funnet lokalt</h2>
                <p>
                  Når noen søker etter «rørlegger i nærheten» eller «beste frisør Oslo», 
                  er det Google Bedriftsprofil som bestemmer hvem som dukker opp først. 
                  Har du ikke en optimalisert profil, går du glipp av kunder hver eneste dag.
                </p>
                <p>
                  Vi sørger for at din bedrift vises frem på best mulig måte – med riktige 
                  kategorier, oppdatert informasjon, profesjonelle bilder og en strategi 
                  for å samle gode anmeldelser.
                </p>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div className="intro-stats">
                <div className="stat-card">
                  <span className="stat-icon"><MapPin size={32} /></span>
                  <span className="stat-label">Lokale søk har høy kjøpsintensjon</span>
                </div>
                <div className="stat-card">
                  <span className="stat-icon"><Star size={32} /></span>
                  <span className="stat-label">Gode anmeldelser bygger tillit</span>
                </div>
                <div className="stat-card">
                  <span className="stat-icon"><Eye size={32} /></span>
                  <span className="stat-label">Synlighet på kartet gir flere besøk</span>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Hvorfor Google Bedriftsprofil?</h2>
              <p>Det er gratis å opprette, men verdien er enorm med riktig informasjon</p>
            </div>
          </FadeIn>
          <StaggerContainer className="benefits-grid" staggerDelay={0.15}>
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <benefit.icon size={32} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Funksjonene du får tilgang til</h2>
              <p>Alt dette er gratis med en Google Bedriftsprofil</p>
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

      {/* Included Section */}
      <section className="service-included">
        <div className="container">
          <div className="included-grid">
            <FadeInLeft>
              <div className="included-content">
                <h2>Dette gjør vi for deg</h2>
                <p>
                  Vi tar oss av alt det tekniske og tidkrevende arbeidet, 
                  slik at du kan fokusere på å drive bedriften din.
                </p>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <ul className="included-list">
                {included.map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="service-faq">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Vanlige spørsmål</h2>
            </div>
          </FadeIn>
          <div className="faq-list">
            {faq.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="faq-item">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <FadeIn>
            <div className="cta-content">
              <h2>Klar for å bli synlig?</h2>
              <p>Ta kontakt for en uforpliktende prat. Vi kan også sjekke hvordan din nåværende profil står seg.</p>
              <Link to="/kontakt" className="btn btn-primary btn-large">
                Optimaliser min profil
                <ArrowRight size={20} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default GoogleBusiness
