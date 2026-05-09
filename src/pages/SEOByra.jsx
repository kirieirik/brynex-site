import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, TrendingUp, Eye, BarChart3, Trophy } from 'lucide-react'
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, HeroText } from '../components/Animations'
import Breadcrumb from '../components/Breadcrumb'
import FAQSchema from '../components/FAQSchema'
import Testimonials from '../components/Testimonials'
import { useSEO } from '../hooks/useSEO'

function SEOByra() {
  useSEO({
    title: 'SEO Byrå Norge | Organisk Ranking på Google',
    description: 'SEO spesialist som ranker nettsider på Google. Organisk trafikk som øker hver måned. Resultat-fokusert strategi og transparent rapportering.',
    canonicalPath: '/seo-byrå-norge'
  })

  const breadcrumbItems = [
    { path: '/', label: 'Hjem' },
    { path: '/seo-byrå-norge', label: 'SEO Byrå' }
  ]

  const tactics = [
    {
      icon: CheckCircle,
      title: 'Teknisk SEO',
      description: 'Raskhet, mobil-optimalisering, strukturert data og Core Web Vitals. Alt som gjør Google elsker nettsiden din.'
    },
    {
      icon: Zap,
      title: 'On-page SEO',
      description: 'Optimalisering av titles, meta descriptions, H1/H2 struktur og innholdsrelevans for dine søkeord.'
    },
    {
      icon: Eye,
      title: 'Content Marketing',
      description: 'Vi skriver og optimaliserer innhold som ranker og konverterer. Blog-poster, landings-sider og guides.'
    },
    {
      icon: TrendingUp,
      title: 'Link Building',
      description: 'Vi henter høykvalitets backlinks fra relevante nettsider som bygger autoritet og trustworthiness.'
    },
    {
      icon: Trophy,
      title: 'Local SEO',
      description: 'Optimaliser Google Business, lokale sitater og lokale søkeord for å dominer i ditt område.'
    },
    {
      icon: BarChart3,
      title: 'Rapportering',
      description: 'Ugentlig rapporter som viser exact rankings, trafikk-økning og konverteringer fra organisk søk.'
    }
  ]

  const results = [
    {
      stat: '15-25',
      label: 'søkeord på side 1',
      desc: 'Innen 90 dager ranker typisk klient på side 1 for 15-25 relevante søkeord'
    },
    {
      stat: '+200%',
      label: 'trafikk økning',
      desc: 'Gjennomsnittlig økning i organisk trafikk etter 6 måneder: 200-400%'
    },
    {
      stat: '+60%',
      label: 'konvertsering',
      desc: 'Trafikk fra organisk søk konverterer 60% bedre enn Google Ads'
    }
  ]

  const faqItems = [
    {
      question: 'Hvor lang tid før jeg ser resultater?',
      answer: 'Google trenger tid til å reindex og rankingsignal å bygge. Typisk 4-12 uker for første synlige resultater. Landing pages kan rangere raskere (2-4 uker), mens competitive søkeord kan ta 6 måneder.'
    },
    {
      question: 'Garanterer dere #1 ranking?',
      answer: 'Nei, ingen kan garantere #1 ranking på Google. Vi garanterer at vi følger Google-retningslinjer, er transparent om progresjon, og hvis du ikke ser resultater etter 6 måneder diskuterer vi strategi-endring eller refund.'
    },
    {
      question: 'Hva koster SEO?',
      answer: 'SEO prising avhenger av konkurransebilde og dine mål. Vi tilbyr pakker for bedrifter av alle størrelser. Ta kontakt for et tilpasset tilbud.'
    },
    {
      question: 'Hva er forskjellen mellem SEO og Google Ads?',
      answer: 'Google Ads gir trafikk fra dag 1, men du betaler for hvert klikk. SEO tar tid, men trafikken er gratis når du ranker. Beste: bruke begge parallelt de første månedene.'
    },
    {
      question: 'Hva hvis konkurrentene mine allerede ranker?',
      answer: 'Konkurrenter ranking høyt betyr søkeordet er attraktivt. Vi analyster hva de gjør rett, gjør det bedre, og ranker dem. Mulig, men tar tid.'
    },
    {
      question: 'Kan jeg selv gjøre SEO?',
      answer: 'Teknisk SEO kan lære du selv. Innhold-SEO er muhlig selv men tar stort arbeid. Link building er vanskelig uten kontakter. Mange klienter prøver selv, vurderer hvor mykje tid det er, og outsourcer til oss.'
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
              SEO som rangerer
              <br />
              <span className="gradient-text">Garantert side 1 eller pengene tilbake</span>
            </h1>
          </HeroText>
          <HeroText delay={0.2}>
            <p className="hero-subtitle">
              Gratis trafikk fra Google søk som vokser hver måned. Vi optimaliserer nettsiden din, lager rankable innhold og bygger autoriteten din. 
              Gjennomsnitt: +200% trafikk på 6 måneder.
            </p>
          </HeroText>
          <HeroText delay={0.4}>
            <div className="hero-buttons">
              <Link to="/kontakt" className="btn btn-primary">
                Gratis SEO analysse
                <ArrowRight size={20} />
              </Link>
              <a href="#tactics" className="btn btn-secondary">
                Se hva vi gjør
              </a>
            </div>
          </HeroText>
        </div>
        <div className="hero-backdrop"></div>
      </section>

      {/* Why SEO */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Hvorfor SEO er bedre enn annonsering</h2>
              <p>Langsiktig ROI som bare øker</p>
            </div>
          </FadeIn>

          <div className="why-grid">
            <FadeIn>
              <div className="why-card">
                <h3>🎯 Targetert trafikk</h3>
                <p>Folk søker for en grunn. De som finner deg via SEO er aktivt interessert i å kjøpe.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="why-card">
                <h3>💰 Gratis trafikk</h3>
                <p>En gang du ranker, koster trafikken ingenting. Google Ads stoppjer når budsjett er brukt.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="why-card">
                <h3>📈 Vender oppover</h3>
                <p>Mens Google Ads avtar når kampanje slutter, SEO rankininger fortsetter og blir sterkere over tid.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="why-card">
                <h3>🏆 Tillit</h3>
                <p>Organiske resultater får 300% mer klikk enn annonsering. Folk stoler mer på resultat fra Google.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Resultater fra SEO</h2>
              <p>Hva kan du forvente?</p>
            </div>
          </FadeIn>

          <StaggerContainer className="results-grid">
            {results.map((result, idx) => (
              <StaggerItem key={idx}>
                <div className="result-card">
                  <div className="result-stat">{result.stat}</div>
                  <h3>{result.label}</h3>
                  <p>{result.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tactics */}
      <section className="section-padding bg-secondary" id="tactics">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Hva vi gjør for å få deg til side 1</h2>
              <p>Vår fullstendig SEO strategi</p>
            </div>
          </FadeIn>

          <StaggerContainer className="tactics-grid">
            {tactics.map((tactic, idx) => (
              <StaggerItem key={idx}>
                <div className="tactic-card">
                  <div className="tactic-icon">
                    <tactic.icon size={32} />
                  </div>
                  <h3>{tactic.title}</h3>
                  <p>{tactic.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>SEO Timeline</h2>
              <p>Hva forvente når</p>
            </div>
          </FadeIn>

          <div className="timeline">
            <FadeInLeft>
              <div className="timeline-item">
                <div className="timeline-marker">0-4 uker</div>
                <h3>Setup & Analyse</h3>
                <p>Vi setter opp tracking, analyserer konkurrenter og lager SEO-strategien.</p>
              </div>
            </FadeInLeft>
            <FadeInLeft delay={0.1}>
              <div className="timeline-item">
                <div className="timeline-marker">4-8 uker</div>
                <h3>Første resultater</h3>
                <p>Google begynner å reindex. Du ser potensial men ranking ikke optimalisert ennå.</p>
              </div>
            </FadeInLeft>
            <FadeInLeft delay={0.2}>
              <div className="timeline-item">
                <div className="timeline-marker">8-16 uker</div>
                <h3>Side 1 resultat</h3>
                <p>Du ranker på side 1 for 10-20 søkeord. Trafikk øker merkbar.</p>
              </div>
            </FadeInLeft>
            <FadeInLeft delay={0.3}>
              <div className="timeline-item">
                <div className="timeline-marker">6+ måneder</div>
                <h3>Dominering</h3>
                <p>Du dominer dine nøkkel-søkeord med top 3 ranking. Trafikk 200-400% høyere.</p>
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
              <h2>Klar for å rangere på Google?</h2>
              <p>Vi gjør en gratis analyse og strategi-møte.</p>
              <Link to="/kontakt" className="btn btn-primary btn-large">
                Gratis SEO konsultasjon
                <ArrowRight size={24} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default SEOByra
