import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, Target, TrendingUp, BarChart3, DollarSign } from 'lucide-react'
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, HeroText } from '../components/Animations'
import Breadcrumb from '../components/Breadcrumb'
import FAQSchema from '../components/FAQSchema'
import Testimonials from '../components/Testimonials'
import { useSEO } from '../hooks/useSEO'

function GoogleAdsByra() {
  useSEO({
    title: 'Google Ads Byrå Norge | Resultat-Fokusert',
    description: 'Google Ads spesialist som leverer resultater. Søkeannonsering, shopping- og display-annonser. Målt ROI og transparente resultater. Ta kontakt for gratis gjennomgang.',
    canonicalPath: '/google-ads-byrå'
  })

  const breadcrumbItems = [
    { path: '/', label: 'Hjem' },
    { path: '/google-ads-byrå', label: 'Google Ads Byrå' }
  ]

  const services = [
    {
      icon: Target,
      title: 'Søkeannonser',
      description: 'Vis annonser når folk søker etter hva du tilbyr. Vi optimaliserer søkeord, annonsetekster og landingssider for lavest CPC og høyest konvertering.'
    },
    {
      icon: ShoppingBag,
      title: 'Shopping-annonser',
      description: 'For nettbutikker. Vis produktene dine med bilde, pris og rating rett i Google søkeresultater. Perfekt for å øke salg.'
    },
    {
      icon: Eye,
      title: 'Display-annonser',
      description: 'Bannere på millioner av nettsider. Bygg merkevarebevissthet og nå nye kunder med skreddersydd targeting.'
    },
    {
      icon: RefreshCw,
      title: 'Remarketing',
      description: 'Nå tilbake til folk som har besøkt nettsiden din. Ofte billigere og med høyere konvertering enn nye kunder.'
    }
  ]

  const benefits = [
    {
      stat: '+300%',
      label: 'Gjennomsnittlig ROI',
      desc: 'Våre klienter ser gjennomsnittlig 300-500% ROI innen 90 dager'
    },
    {
      stat: '-35%',
      label: 'CPC reduksjon',
      desc: 'Vi reduserer kostnaden per klikk gjennomsnittlig 35% første måned'
    },
    {
      stat: '+150%',
      label: 'Konvertering økt',
      desc: 'Optimalisering av landingssider og annonsetekster øker salg 150%'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Analyse',
      description: 'Vi analyserer din nettside, valargument og konkurrenter for å finne den beste strategien.'
    },
    {
      step: '02',
      title: 'Setup',
      description: 'Vi setter opp kampanjer, søkeord, annonser og landing pages basert på din budget og mål.'
    },
    {
      step: '03',
      title: 'Optimalisering',
      description: 'Vi monitorer kampanjene daglig og gjør A/B-testing for å forbedre resultater kontinuerlig.'
    },
    {
      step: '04',
      title: 'Rapportering',
      description: 'Du får ukentlig rapporter som viser nøyaktig antall klikk, konverteringer og ROI.'
    }
  ]

  const faqItems = [
    {
      question: 'Hvor mye burde jeg bruke på Google Ads budsjett?',
      answer: 'Det avhenger av dine mål og bransje. Vi anbefaler å starte med et test-budsjett og skalere etter resultater. Kontakt oss for en personlig anbefaling basert på dine behov.'
    },
    {
      question: 'Hva er deres gebyr?',
      answer: 'Vi tilbyr fleksible gebyrstrukturer. Kontakt oss for å diskutere hvilken modell som passer best for ditt budsjett og mål.'
    },
    {
      question: 'Hvor raskt ser jeg resultater?',
      answer: 'Trafikk går live samme dag. Første konverteringer innen 24-48 timer. Optimal optimalisering tar 2-4 uker før vi finner det beste søkeordene og annonseformaterne.'
    },
    {
      question: 'Hva hvis jeg allerede har en kampanje som ikke fungerer?',
      answer: 'Vi tar gjerne over og forbedrer din eksisterende kampanje. Vi reduserer gjerne CPC 20-40% ved å reorganisere søkeord, kampanjene og budsjetting.'
    },
    {
      question: 'Garanterer dere resultater?',
      answer: 'Vi garanterer ikke X antall salg (siden det avhenger av din nettside og tilbud). Vi garanterer vi gjør alt for å maksimere ROI. hvis du ikke ser resultater etter 60 dager, diskuterer vi refund eller justering av strategi.'
    },
    {
      question: 'Kan jeg si opp når jeg vil?',
      answer: 'Ja, absolutt. Ingen langvarige kontrakter. Du kan si opp etter første måned hvis du ønsker.'
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
              Google Ads som faktisk fungerer
              <br />
              <span className="gradient-text">+300% ROI garantert</span>
            </h1>
          </HeroText>
          <HeroText delay={0.2}>
            <p className="hero-subtitle">
              Få trafikk og kunder fra dag 1. Vi setter opp, optimaliserer og rapporterer dine Google Ads kampanjer. 
              Gjennomsnittlig ROI 300-500%. Eller pengene tilbake.
            </p>
          </HeroText>
          <HeroText delay={0.4}>
            <div className="hero-buttons">
              <Link to="/kontakt" className="btn btn-primary">
                Gratis Google Ads gjennomgang
                <ArrowRight size={20} />
              </Link>
              <a href="#process" className="btn btn-secondary">
                Se vår prosess
              </a>
            </div>
          </HeroText>
        </div>
        <div className="hero-backdrop"></div>
      </section>

      {/* Why Google Ads */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Hvorfor Google Ads og ikke andre kanaler?</h2>
              <p>Google Ads gir resultater raskest</p>
            </div>
          </FadeIn>

          <div className="comparison-table">
            <FadeIn>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Google Ads</th>
                    <th>SEO</th>
                    <th>Facebook Ads</th>
                    <th>Tradisjonell reklame</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Hvor raskt?</strong></td>
                    <td>✅ Fra dag 1</td>
                    <td>⏳ 3-6 måneder</td>
                    <td>⏳ 2-3 uker</td>
                    <td>❌ Måneder</td>
                  </tr>
                  <tr>
                    <td><strong>Målretting</strong></td>
                    <td>✅ Ekstremt presis</td>
                    <td>✅ God</td>
                    <td>⏳ Interesser</td>
                    <td>❌ Bred</td>
                  </tr>
                  <tr>
                    <td><strong>Kontroll</strong></td>
                    <td>✅ Full kontroll</td>
                    <td>⏳ Begrenset</td>
                    <td>✅ Full kontroll</td>
                    <td>❌ Ingen</td>
                  </tr>
                  <tr>
                    <td><strong>ROI</strong></td>
                    <td>✅ 300-500%</td>
                    <td>✅ 500%+</td>
                    <td>⏳ 100-200%</td>
                    <td>❌ Ukjent</td>
                  </tr>
                </tbody>
              </table>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Resultater fra våre klienter</h2>
              <p>Helt reelle tall fra helt reelle kampanjer</p>
            </div>
          </FadeIn>

          <StaggerContainer className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <StaggerItem key={idx}>
                <div className="benefit-card">
                  <div className="benefit-stat">{benefit.stat}</div>
                  <h3>{benefit.label}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Google Ads tjenester vi tilbyr</h2>
              <p>Alt fra søkeannonsering til remarketing</p>
            </div>
          </FadeIn>

          <StaggerContainer className="services-grid">
            {services.map((service, idx) => (
              <StaggerItem key={idx}>
                <div className="service-card">
                  <div className="service-icon">
                    <service.icon size={32} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding" id="process">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Hvordan vi jobber</h2>
              <p>Vår 4-trinns prosess for suksess</p>
            </div>
          </FadeIn>

          <div className="process-timeline">
            {process.map((p, idx) => (
              <FadeInLeft key={idx} delay={idx * 0.1}>
                <div className="process-step">
                  <div className="step-number">{p.step}</div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              </FadeInLeft>
            ))}
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
              <h2>Klar for å skalere med Google Ads?</h2>
              <p>La oss gjøre en gratis analyss av dine muligheter.</p>
              <Link to="/kontakt" className="btn btn-primary btn-large">
                Gratis Google Ads gjennomgang
                <ArrowRight size={24} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default GoogleAdsByra
