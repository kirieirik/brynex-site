import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, Eye, Users, Target, DollarSign } from 'lucide-react'
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, HeroText } from '../components/Animations'
import Breadcrumb from '../components/Breadcrumb'
import FAQSchema from '../components/FAQSchema'
import Testimonials from '../components/Testimonials'
import { useSEO } from '../hooks/useSEO'

function NettsideBedrift() {
  useSEO({
    title: 'Nettside for Bedrift | Profesjonell Løsning',
    description: 'Profesjonell nettside for din bedrift. Responsive, SEO-optimalisert og lansert raskt. Inkludert mobil design, kontaktskjema og support. Ta kontakt for tilbud.',
    canonicalPath: '/nettside-bedrift'
  })

  const breadcrumbItems = [
    { path: '/', label: 'Hjem' },
    { path: '/nettside-bedrift', label: 'Nettside for Bedrift' }
  ]

  const features = [
    {
      icon: CheckCircle,
      title: 'Responsivt design',
      description: 'Nettsiden fungerer perfekt på alle enheter: desktop, tablet og mobil.'
    },
    {
      icon: Zap,
      title: 'Lynrask hastighet',
      description: 'Optimalisert for ytelse. Gjennomsnittlig lastetid under 2 sekunder.'
    },
    {
      icon: Eye,
      title: 'SEO-optimalisert',
      description: 'Bygget fra bunnen av for Google ranking. Kom på side 1 i søkene dine.'
    },
    {
      icon: Users,
      title: 'Innebygde verktøy',
      description: 'Kontaktskjema, booking-system, Google Analytics og integrasjon med sosiale medier.'
    },
    {
      icon: Target,
      title: 'Konverteringsfokus',
      description: 'Vi bygger nettsider som gjør handlingen du ønsker - både klikk, samtaler og salg.'
    },
    {
      icon: DollarSign,
      title: 'A/B testing inkludert',
      description: 'Vi optimaliserer kopien og designet for maksimal konversjon.'
    }
  ]

  const faqItems = [
    {
      question: 'Hva koster en nettside?',
      answer: 'Prisen avhenger av kompleksitet, antall sider og funksjonalitet. Vi tilbyr skreddersydde løsninger for bedrifter av alle størrelser. Ta kontakt for et personlig tilbud basert på dine behov.'
    },
    {
      question: 'Hvor lang tid tar det å lage nettsiden?',
      answer: 'Vi bruker normalt 2-3 uker fra start til lansering. Det avhenger av hvor raskt du responderer på spørsmål og hvor mange revisjoner du ønsker.'
    },
    {
      question: 'Får jeg SEO inkludert?',
      answer: 'Ja, all teknisk SEO er inkludert fra dag en. Det betyr: optimaliserte titles, meta descriptions, schema markup, mobil-optimalisering og rask hastighet. Vi optimaliserer også for keywords dine.'
    },
    {
      question: 'Kan jeg endre siden selv etter lansering?',
      answer: 'Det kommer an på setup. Vi kan enten bygge med WordPress/WooCommerce som du kan redigere selv, eller bedre for deg og levere migrering når du ønsker det.'
    },
    {
      question: 'Hva hvis jeg ikke liker resultatet?',
      answer: 'Vi lager 2 revusjonsrunder inkludert i prisen. Hvis du ikke er fornøyd, kan vi diskutere eksitningsklausul.'
    },
    {
      question: 'Hva med sikkerhet og backup?',
      answer: 'All hosting er på sikre servere med SSL-sertifikat (https://). Vi tar daglige backups og monitor kontinuerlig for sikkerhetshull.'
    }
  ]

  const reasons = [
    {
      stat: '80%',
      text: 'av folk søker på Google før kjøp'
    },
    {
      stat: '24/7',
      text: 'nettsiden selger mens du sover'
    },
    {
      stat: '3x',
      text: 'mer benyttelse av nettsider enn Facebook'
    }
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <HeroText>
            <h1>
              Nettside for bedriften din
              <br />
              <span className="gradient-text">som faktisk selger</span>
            </h1>
          </HeroText>
          <HeroText delay={0.2}>
            <p className="hero-subtitle">
              Få en profesjonell, responsiv nettside som rangerer på Google og konverterer besøkende til kunder. 
              Lansering på 2-3 uker. SEO, mobil design og support inkludert.
            </p>
          </HeroText>
          <HeroText delay={0.4}>
            <div className="hero-buttons">
              <Link to="/kontakt" className="btn btn-primary">
                Få gratis konsultasjon
                <ArrowRight size={20} />
              </Link>
              <a href="#faq" className="btn btn-secondary">
                Se svar på vanlige spørsmål
              </a>
            </div>
          </HeroText>
        </div>
        <div className="hero-backdrop"></div>
      </section>

      {/* Why You Need Section */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Hvorfor trenger bedriften din en nettside?</h2>
              <p>Statistikk som viser verdien</p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="stats-grid">
            {reasons.map((reason, idx) => (
              <StaggerItem key={idx}>
                <div className="stat-card">
                  <div className="stat-number">{reason.stat}</div>
                  <p>{reason.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <div className="reason-content">
              <h3>En nettside er ditt beste salgsverktøy</h3>
              <ul>
                <li>80% av potensielle kunder søker på Google før kjøp</li>
                <li>Nettsiden jobber for deg 24/7 - også på kvelden og helg</li>
                <li>Gratis trafikk fra Google (organisk søk)</li>
                <li>Bygger profesjonalitet og tillit</li>
                <li>Billigere enn tradisjonell reklame</li>
                <li>Du kontrollerer budskapet helt</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Hva får du inkludert?</h2>
              <p>Alt du trenger for en vellykket nettside</p>
            </div>
          </FadeIn>

          <StaggerContainer className="features-grid">
            {features.map((feature, idx) => (
              <StaggerItem key={idx}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <feature.icon size={32} />
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
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Vår prosess</h2>
              <p>Fra idé til lansering på 2-3 uker</p>
            </div>
          </FadeIn>

          <div className="process-timeline">
            <FadeInLeft>
              <div className="process-step">
                <div className="step-number">01</div>
                <h3>Konsultasjon</h3>
                <p>Vi snakker med deg om mål, målgruppe og ønsker for nettsiden.</p>
              </div>
            </FadeInLeft>
            <FadeInLeft delay={0.1}>
              <div className="process-step">
                <div className="step-number">02</div>
                <h3>Design</h3>
                <p>Vi lager et skreddersydd design som matcher ditt brand.</p>
              </div>
            </FadeInLeft>
            <FadeInLeft delay={0.2}>
              <div className="process-step">
                <div className="step-number">03</div>
                <h3>Utvikling</h3>
                <p>Vi bygger nettsiden med moderne teknologi og SEO som prioritet.</p>
              </div>
            </FadeInLeft>
            <FadeInLeft delay={0.3}>
              <div className="process-step">
                <div className="step-number">04</div>
                <h3>Testing & lansering</h3>
                <p>Vi tester på alle enheter før lansering, så alt fungerer perfekt.</p>
              </div>
            </FadeInLeft>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQSchema items={faqItems} />

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <FadeIn>
            <div className="cta-section">
              <h2>Klar for å komme på nett?</h2>
              <p>Kontakt oss for et gratis tilbud og konsultasjon - ingen binding.</p>
              <Link to="/kontakt" className="btn btn-primary btn-large">
                Start gratis konsultasjon
                <ArrowRight size={24} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default NettsideBedrift
