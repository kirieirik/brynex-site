import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, TrendingUp, Users, ShoppingBag, BarChart3 } from 'lucide-react'
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, HeroText } from '../components/Animations'
import Breadcrumb from '../components/Breadcrumb'
import FAQSchema from '../components/FAQSchema'
import Testimonials from '../components/Testimonials'
import { useSEO } from '../hooks/useSEO'

function NettbutikkLøsninger() {
  useSEO({
    title: 'Nettbutikk Løsninger | E-handel for SMB',
    description: 'Komplette e-handelsлøsninger for små og mellomstore bedrifter. WooCommerce, Shopify eller custom. Betalingsintegrasjon, SEO og marketing. Ta kontakt for tilbud.',
    canonicalPath: '/nettbutikk-løsninger'
  })

  const breadcrumbItems = [
    { path: '/', label: 'Hjem' },
    { path: '/nettbutikk-løsninger', label: 'Nettbutikk Løsninger' }
  ]

  const platforms = [
    {
      name: 'WooCommerce',
      best: 'Beste valg for fleksibilitet',
      upsides: ['Fullstendig kontroll', 'Billigst på lang sikt', 'Uendelige utvidelser'],
      priceRange: 'Ta kontakt for tilbud'
    },
    {
      name: 'Shopify',
      best: 'Best for raskt oppsett',
      upsides: ['Lett å bruke', 'Hosting inkludert', 'God kundestøtte'],
      priceRange: 'Ta kontakt for tilbud'
    },
    {
      name: 'Custom Platform',
      best: 'Best for spesialbehov',
      upsides: ['Helt tilpasset', 'Skalerbar', 'Optimal ytelse'],
      priceRange: 'Ta kontakt for tilbud'
    }
  ]

  const features = [
    {
      icon: ShoppingBag,
      title: 'Produktkatalog',
      description: 'Legg til ubegrensede produkter med kategorier, varianter og beskrivelser.'
    },
    {
      icon: CheckCircle,
      title: 'Sikker betaling',
      description: 'Integrasjon med Vipps, Stripe, PayPal og andre populære betalingsløsninger.'
    },
    {
      icon: Zap,
      title: 'Automatisering',
      description: 'Automatiske ordrebekreftelser, lagervarsler og oppfølgings-email til kunder.'
    },
    {
      icon: BarChart3,
      title: 'Salgsrapporter',
      description: 'Detaljert innsikt i hvilke produkter som selger best og kundeadferd.'
    },
    {
      icon: TrendingUp,
      title: 'Marketing tools',
      description: 'Rabattkoder, automatisk email-markedsføring og integration med Google Ads.'
    },
    {
      icon: Users,
      title: 'Kundekontoer',
      description: 'La kunder opprette konto for raskere kjøp og ordre-historikk.'
    }
  ]

  const faqItems = [
    {
      question: 'Hva koster en nettbutikk?',
      answer: 'En nettbutikk starter fra 24.900 kr for WooCommerce inkludert design, setup og SEO. Shopify er billigere initielt (29 kr/mnd), men Shopify-gebyrer på salg gjør det dyrere på lang sikt. Vi anbefaler å velge basert på dine behov.'
    },
    {
      question: 'Skal jeg velge WooCommerce eller Shopify?',
      answer: 'WooCommerce er best hvis du ønsker kontroll, lavere gebyrer og lang sikt rentabilitet. Shopify er best hvis du vil minimert oppgaver og raskt oppsett. Vi hjelper deg velge den beste løsningen for ditt tilfelle.'
    },
    {
      question: 'Hva med betalinger?',
      answer: 'Vi setter opp sikre betalingsløsninger. I Norge brukes oftest Vipps (bankintegrasjon), Klarna (kjøp nå/betal senere) eller Stripe. Alle transaksjoner er kryptert og PCI-kompatible.'
    },
    {
      question: 'Kan jeg selge B2B eller B2C?',
      answer: 'Ja! Vi kan sette opp både B2C (forbrukere), B2B (bedrifter med egne priser/rabatter), eller begge deler. Du kan også sette opp bulkkjøp og leverandørportaler.'
    },
    {
      question: 'Hvordan får jeg trafikk til butikken?',
      answer: 'Vi hjelper med SEO (Google ranking), Google Shopping (produktannonser), og Google Ads. Vi kan også hjelpe med email-markedsføring og Facebook ads.'
    },
    {
      question: 'Hva hvis jeg allerede har en butikk?',
      answer: 'Vi kan migrere fra Shopify, WooCommerce eller annen plattform uten å miste ordre eller data. Vi tar ikke gebyrer for migrasjonen.'
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
              Satset på e-handel?
              <br />
              <span className="gradient-text">Vi bygger nettbutikker som selger</span>
            </h1>
          </HeroText>
          <HeroText delay={0.2}>
            <p className="hero-subtitle">
              Komplette e-handelsløsninger fra oppstart til skalering. 
              Vi hjelper deg velge riktig plattform, setter opp sikre betalinger, og optimaliserer for salg.
            </p>
          </HeroText>
          <HeroText delay={0.4}>
            <div className="hero-buttons">
              <Link to="/kontakt" className="btn btn-primary">
                Få ett tilbud for butikken din
                <ArrowRight size={20} />
              </Link>
              <a href="#platforms" className="btn btn-secondary">
                Se plattformsammenligning
              </a>
            </div>
          </HeroText>
        </div>
        <div className="hero-backdrop"></div>
      </section>

      {/* E-commerce Market Stats */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Hvorfor starte nettbutikk nå?</h2>
              <p>Markedet vokser raskere enn noen gang</p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="stats-grid">
            <StaggerItem>
              <div className="stat-card">
                <div className="stat-number">65%</div>
                <p>av norsk detaljhandel er nå online</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="stat-card">
                <div className="stat-number">3 min</div>
                <p>gjennomsnittlig kjøpsbeslutning</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="stat-card">
                <div className="stat-number">42%</div>
                <p>bruker mobiltelefon for kjøp</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="section-padding" id="platforms">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Plattformsammenligning</h2>
              <p>Velg den beste løsningen for dine behov</p>
            </div>
          </FadeIn>

          <div className="platforms-comparison">
            {platforms.map((platform, idx) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="platform-card">
                  {platform.best && (
                    <div className="platform-badge">{platform.best}</div>
                  )}
                  <h3>{platform.name}</h3>
                  <div className="platform-upsides">
                    {platform.upsides.map((upside, i) => (
                      <div key={i} className="upside-item">
                        <CheckCircle size={16} />
                        <span>{upside}</span>
                      </div>
                    ))}
                  </div>
                  <div className="platform-price">{platform.priceRange}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Fullstendig e-handel løsning</h2>
              <p>Alt du trenger for å lukre og selge online</p>
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

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQSchema items={faqItems} />

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <FadeIn>
            <div className="cta-section">
              <h2>Klar for å starte nettbutikken?</h2>
              <p>Kontakt oss for et gratis tilbud og konsultasjon.</p>
              <Link to="/kontakt" className="btn btn-primary btn-large">
                La oss hjelpe deg i gang
                <ArrowRight size={24} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default NettbutikkLøsninger
