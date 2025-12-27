import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Target, 
  BarChart3, 
  MousePointer, 
  Eye,
  TrendingUp,
  Search,
  ShoppingBag,
  RefreshCw,
  CheckCircle,
  Zap,
  DollarSign
} from 'lucide-react'
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, HeroText } from '../components/Animations'

function GoogleAds() {
  const adTypes = [
    {
      icon: Search,
      title: 'Søkeannonser',
      description: 'Vis annonser når folk søker etter det du tilbyr. Betal kun når noen klikker.'
    },
    {
      icon: Eye,
      title: 'Display-annonser',
      description: 'Bannere på tusenvis av nettsider. Bygg merkevarebevissthet og nå nye målgrupper.'
    },
    {
      icon: ShoppingBag,
      title: 'Shopping-annonser',
      description: 'Vis produktene dine med bilde og pris direkte i søkeresultatene.'
    },
    {
      icon: RefreshCw,
      title: 'Remarketing',
      description: 'Nå tilbake til folk som har besøkt nettsiden din, men ikke kjøpt.'
    }
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Presis målretting',
      description: 'Nå akkurat de kundene du ønsker basert på søkeord, demografi, interesser og geografi.'
    },
    {
      icon: DollarSign,
      title: 'Full budsjettkontroll',
      description: 'Du bestemmer hvor mye du vil bruke. Start smått og skaler opp når du ser resultater.'
    },
    {
      icon: Zap,
      title: 'Umiddelbare resultater',
      description: 'I motsetning til SEO gir Google Ads trafikk fra dag én. Perfekt for rask vekst.'
    },
    {
      icon: BarChart3,
      title: 'Målbar avkastning',
      description: 'Se nøyaktig hvor mange som klikker, ringer eller kjøper. Regn ut ROI på kronen.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Analyse',
      description: 'Vi analyserer din bransje, konkurrenter og målgruppe for å finne de beste mulighetene.'
    },
    {
      step: '02',
      title: 'Strategi',
      description: 'Vi lager en skreddersydd strategi med søkeord, budsjett og målsettinger.'
    },
    {
      step: '03',
      title: 'Oppsett',
      description: 'Vi setter opp kampanjer, skriver annonsetekster og konfigurerer sporing.'
    },
    {
      step: '04',
      title: 'Lansering',
      description: 'Annonsene går live! Vi overvåker nøye de første dagene for å optimalisere.'
    },
    {
      step: '05',
      title: 'Optimalisering',
      description: 'Kontinuerlig A/B-testing, budjustering og forbedring for best mulig resultat.'
    },
    {
      step: '06',
      title: 'Rapportering',
      description: 'Månedlige rapporter med innsikt, resultater og anbefalinger for videre vekst.'
    }
  ]

  const included = [
    'Søkeordsanalyse og konkurranseanalyse',
    'Kampanjestrategi og struktur',
    'Oppsett av konverteringssporing',
    'Skriving av annonsetekster',
    'A/B-testing av annonser',
    'Løpende optimalisering',
    'Negativ søkeordsliste',
    'Geografisk målretting',
    'Enhets- og tidsjustering',
    'Månedlig rapport med innsikt',
  ]

  const faq = [
    {
      q: 'Hvor mye bør jeg bruke på Google Ads?',
      a: 'Det avhenger av bransje og konkurranse. Vi anbefaler minimum 5-10.000 kr/mnd for å få nok data til optimalisering. Viktigere enn beløpet er at budsjettet brukes smart.'
    },
    {
      q: 'Hvor raskt ser jeg resultater?',
      a: 'Du kan få klikk og henvendelser allerede første dag. For å optimalisere og se beste resultater trengs vanligvis 2-3 måneder med data.'
    },
    {
      q: 'Hva er forskjellen på Google Ads og SEO?',
      a: 'Google Ads gir umiddelbar synlighet (du betaler per klikk), mens SEO bygger organisk synlighet over tid (gratis klikk). Ideelt har du begge deler.'
    },
    {
      q: 'Kan jeg stoppe annonsene når som helst?',
      a: 'Ja, du har full kontroll. Du kan pause, stoppe eller justere budsjett når som helst uten bindingstid.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero service-hero">
        <div className="container">
          <HeroText>
            <span className="service-badge">Tjeneste</span>
            <h1>Google Ads</h1>
          </HeroText>
          <HeroText delay={0.2}>
            <p className="page-subtitle">
              Målrettet annonsering som gir resultater. 
              Vi hjelper deg å nå kundene dine akkurat når de leter etter det du tilbyr.
            </p>
          </HeroText>
          <HeroText delay={0.4}>
            <div className="hero-buttons">
              <Link to="/kontakt" className="btn btn-primary">
                Få en gratis annonseanalyse
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
                <h2>Nå kundene når de søker</h2>
                <p>
                  Google Ads lar deg vise annonser til folk som aktivt søker etter 
                  produktene eller tjenestene du tilbyr. Det betyr at du når folk 
                  som allerede er interessert – ikke bare tilfeldige forbipasserende.
                </p>
                <p>
                  Med riktig oppsett og løpende optimalisering kan Google Ads bli 
                  din mest lønnsomme markedsføringskanal. Vi hjelper deg å unngå 
                  kostbare feil og maksimere avkastningen.
                </p>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div className="intro-stats">
                <div className="stat-card">
                  <span className="stat-icon"><Target size={32} /></span>
                  <span className="stat-label">Nå kunder som aktivt søker etter deg</span>
                </div>
                <div className="stat-card">
                  <span className="stat-icon"><BarChart3 size={32} /></span>
                  <span className="stat-label">Målbar avkastning på hver krone</span>
                </div>
                <div className="stat-card">
                  <span className="stat-icon"><Zap size={32} /></span>
                  <span className="stat-label">Resultater fra dag én</span>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Ad Types Section */}
      <section className="service-features">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Annonsetyper vi jobber med</h2>
              <p>Ulike formater for ulike mål</p>
            </div>
          </FadeIn>
          <StaggerContainer className="features-grid features-grid-4" staggerDelay={0.1}>
            {adTypes.map((type, index) => (
              <StaggerItem key={index}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <type.icon size={24} />
                  </div>
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Hvorfor Google Ads?</h2>
              <p>Fordelene med betalt søk</p>
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

      {/* Process Section */}
      <section className="service-process">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Vår prosess</h2>
              <p>Slik jobber vi med dine Google Ads-kampanjer</p>
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
                <h2>Dette er inkludert</h2>
                <p>
                  Når du velger oss til å administrere dine Google Ads-kampanjer, 
                  får du en komplett tjeneste.
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
              <h2>Klar for å vokse?</h2>
              <p>Book en gratis samtale der vi analyserer mulighetene dine og gir konkrete anbefalinger.</p>
              <Link to="/kontakt" className="btn btn-primary btn-large">
                Få gratis annonseanalyse
                <ArrowRight size={20} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default GoogleAds
