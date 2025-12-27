import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Monitor, 
  Smartphone, 
  Search, 
  Zap, 
  Shield, 
  Palette,
  Code,
  HeadphonesIcon,
  CheckCircle
} from 'lucide-react'
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, HeroText } from '../components/Animations'

function Nettsider() {
  const features = [
    {
      icon: Monitor,
      title: 'Responsivt design',
      description: 'Nettsiden din vil se fantastisk ut på alle enheter – desktop, nettbrett og mobil.'
    },
    {
      icon: Zap,
      title: 'Lynrask hastighet',
      description: 'Optimalisert kode og bilder sikrer kort lastetid og god brukeropplevelse.'
    },
    {
      icon: Search,
      title: 'SEO-optimalisert',
      description: 'Bygget fra bunnen av med søkemotoroptimalisering i tankene.'
    },
    {
      icon: Shield,
      title: 'Sikker og pålitelig',
      description: 'SSL-sertifikat, sikker hosting og regelmessige sikkerhetsoppdateringer.'
    },
    {
      icon: Palette,
      title: 'Skreddersydd design',
      description: 'Unikt design som reflekterer din merkevare og skiller deg fra konkurrentene.'
    },
    {
      icon: Code,
      title: 'Moderne teknologi',
      description: 'Vi bruker de nyeste teknologiene for fremtidssikre løsninger.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Kartlegging',
      description: 'Vi starter med å forstå din bedrift, målgruppe og mål. Hva ønsker du å oppnå med nettsiden?'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Vi lager et skreddersydd design som matcher din merkevare og appellerer til målgruppen din.'
    },
    {
      step: '03',
      title: 'Utvikling',
      description: 'Vi bygger nettsiden med fokus på ytelse, sikkerhet og brukervennlighet.'
    },
    {
      step: '04',
      title: 'Testing & lansering',
      description: 'Grundig testing på alle enheter før vi lanserer nettsiden din til verden.'
    },
    {
      step: '05',
      title: 'Oppfølging',
      description: 'Vi er her for deg etter lansering med support, vedlikehold og videreutvikling.'
    }
  ]

  const included = [
    'Responsivt design for alle enheter',
    'SEO-grunnpakke med meta-tags og struktur',
    'Kontaktskjema med e-postvarsling',
    'Google Analytics integrasjon',
    'SSL-sertifikat (HTTPS)',
    'Hastighetsoptimalisering',
    'Sosiale medier integrasjon',
    'GDPR-tilpasset personvernerklæring',
    'Opplæring i administrasjon',
    '30 dager support etter lansering'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero service-hero">
        <div className="container">
          <HeroText>
            <span className="service-badge">Tjeneste</span>
            <h1>Profesjonelle nettsider</h1>
          </HeroText>
          <HeroText delay={0.2}>
            <p className="page-subtitle">
              Vi bygger nettsider som ikke bare ser bra ut, men som også leverer resultater. 
              Fra enkle informasjonssider til avanserte bedriftsportaler.
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
                <h2>Din digitale tilstedeværelse starter her</h2>
                <p>
                  I dagens digitale verden er en profesjonell nettside ikke bare et visittkort – 
                  det er ofte det første møtet potensielle kunder har med bedriften din. 
                  Vi sørger for at dette møtet gjør et varig inntrykk.
                </p>
                <p>
                  Enten du driver en liten bedrift, en forening eller et større selskap, 
                  tilpasser vi løsningen etter dine behov og budsjett. Vårt mål er å gi deg 
                  en nettside som jobber for deg 24 timer i døgnet.
                </p>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div className="intro-stats">
                <div className="stat-card">
                  <span className="stat-icon"><Palette size={32} /></span>
                  <span className="stat-label">Førsteinntrykket teller – design skaper tillit</span>
                </div>
                <div className="stat-card">
                  <span className="stat-icon"><Zap size={32} /></span>
                  <span className="stat-label">Hastighet påvirker både brukere og Google</span>
                </div>
                <div className="stat-card">
                  <span className="stat-icon"><Smartphone size={32} /></span>
                  <span className="stat-label">Mobilvennlighet er ikke valgfritt lenger</span>
                </div>
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
              <h2>Hva du får</h2>
              <p>Alle nettsider vi lager inkluderer disse essensielle funksjonene</p>
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

      {/* Process Section */}
      <section className="service-process">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Slik jobber vi</h2>
              <p>En transparent prosess fra idé til ferdig nettside</p>
            </div>
          </FadeIn>
          <div className="process-timeline">
            {process.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="process-item">
                  <div className="process-number">{item.step}</div>
                  <div className="process-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Included Section */}
      <section className="service-included">
        <div className="container">
          <div className="included-grid">
            <FadeInLeft>
              <div className="included-content">
                <h2>Alt dette er inkludert</h2>
                <p>
                  Når du bestiller en nettside fra oss, får du en komplett pakke 
                  som dekker alt du trenger for en vellykket lansering.
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <FadeIn>
            <div className="cta-content">
              <h2>Klar for en ny nettside?</h2>
              <p>Ta kontakt for en uforpliktende prat om ditt prosjekt. Vi gir deg et tilbud innen 24 timer.</p>
              <Link to="/kontakt" className="btn btn-primary btn-large">
                Start prosjektet ditt
                <ArrowRight size={20} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default Nettsider
