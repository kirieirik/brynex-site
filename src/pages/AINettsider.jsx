import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, Brain, MessageSquare, TrendingUp, Sparkles } from 'lucide-react'
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, HeroText } from '../components/Animations'
import Breadcrumb from '../components/Breadcrumb'
import FAQSchema from '../components/FAQSchema'
import Testimonials from '../components/Testimonials'
import { useSEO } from '../hooks/useSEO'

function AINettsider() {
  useSEO({
    title: 'AI-Drevne Nettsider | Personalisering & Chatbots',
    description: 'Moderne nettsider med kunstig intelligens. Personalisert brukeropplevelse, AI chatbots og smarte anbefalinger. Øk konvertering med AI. Ta kontakt for tilbud.',
    canonicalPath: '/ai-nettsider'
  })

  const breadcrumbItems = [
    { path: '/', label: 'Hjem' },
    { path: '/ai-nettsider', label: 'AI Nettsider' }
  ]

  const features = [
    {
      icon: Brain,
      title: 'AI Chatbot',
      description: '24/7 kundesupport. Chatboten svarer spørsmål, veileder kjøp og sender leads direkte til mailinkboxen din.'
    },
    {
      icon: Sparkles,
      title: 'Personalisering',
      description: 'Hver besøkende ser innhold skjøtet for dem. Tidligere kunder ser andre annonser enn nye.'
    },
    {
      icon: TrendingUp,
      title: 'Smarte anbefalinger',
      description: 'AI lærerer hva kundene liker og anbefaler relevante produkter/tjenester. Øker salg 30-50%.'
    },
    {
      icon: MessageSquare,
      title: 'Sentiment analyse',
      description: 'AI analyserer kundemetilbakemeldinger og finner mønstre du kan lære av.'
    },
    {
      icon: CheckCircle,
      title: 'Automatisering',
      description: 'Automatisere gjentakende oppgaver som hjelper med leads, booking og customer service.'
    },
    {
      icon: Zap,
      title: 'Ytelsesoptimalisering',
      description: 'AI optimaliserer siden kontinuerlig for raskere hastighet og bedre brukeropplevelse.'
    }
  ]

  const benefits = [
    {
      stat: '+35%',
      label: 'Konvertering',
      desc: 'Gjennomsnittlig økning i konvertering ved bruk av AI personalisering'
    },
    {
      stat: '+50%',
      label: 'Customer satisfaction',
      desc: 'AI chatbots har 50% høyere kundespørsmål-svar hastighet'
    },
    {
      stat: '24/7',
      label: 'Kundesupport',
      desc: 'Chatbot arbeider hele døgnet mens du sover'
    }
  ]

  const faqItems = [
    {
      question: 'Hva er AI personalisering?',
      answer: 'AI analyserer hver besøkende sin oppførsel, geografi, enhet og tidligere besøk. Basert på det ser de personalisert innhold, produkter og tilbud som passer for dem.'
    },
    {
      question: 'Hvordan fungerer AI chatbot?',
      answer: 'Chatboten bruker GPT-4 eller OpenAI for å forstå kundeprøringer og svare relevant. Den kan håndtere størsteparten av vanlige spørsmål selv og sender komplekse til mailinkboksen din.'
    },
    {
      question: 'Vil AI erstatte min kundesupport?',
      answer: 'Nei, AI chatbot er for å håndtere enkle spørsmål og redusere belastningen. Komplekse spørsmål går fremdeles til deg. Folk foretrekker fremdeles mennesker for problemer.'
    },
    {
      question: 'Hva koster AI integrering?',
      answer: 'Prisen avhenger av hvilke AI-funksjoner du ønsker og kompleksitet. Vi tilbyr alt fra enkle chatbots til avansert personalisering. Ta kontakt for et konkret tilbud.'
    },
    {
      question: 'Hva med sikkerhet og datalagring?',
      answer: 'Vi bruker bare etablert AI-leverandører (OpenAI, Google Cloud). All data krypteres, GDPR-kompatibelt. Vi lagrer ikke sensitive data uten din godkjennelse.'
    },
    {
      question: 'Kan jeg integrere AI i min eksisterende nettside?',
      answer: 'Ja, absolutt. Vi legger til chatbot, personalisering og AI-funksjoner på eksisterende nettsider uten å måtte bygge ny.'
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
              AI-drevne nettsider
              <br />
              <span className="gradient-text">som selger mer</span>
            </h1>
          </HeroText>
          <HeroText delay={0.2}>
            <p className="hero-subtitle">
              Integrer kunstig intelligens i nettsiden din. Personalisert brukeropplevelse, 24/7 chatbot support og smarte produktanbefalinger. 
              Resultater: +35% konvertering.
            </p>
          </HeroText>
          <HeroText delay={0.4}>
            <div className="hero-buttons">
              <Link to="/kontakt" className="btn btn-primary">
                Start AI integrasjon i dag
                <ArrowRight size={20} />
              </Link>
              <a href="#features" className="btn btn-secondary">
                Se AI-funksjoner
              </a>
            </div>
          </HeroText>
        </div>
        <div className="hero-backdrop"></div>
      </section>

      {/* Why AI */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Hvorfor AI på nettsiden?</h2>
              <p>AI løser problemer mennesker ikke kan løse manuelt</p>
            </div>
          </FadeIn>

          <div className="why-grid">
            <FadeIn>
              <div className="why-card">
                <h3>🤖 24/7 kundestøtte</h3>
                <p>Chatboten svarersvar spørsmål hele døgnet. Du må ikke ansette natt-personalet.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="why-card">
                <h3>👤 Personalisering i skala</h3>
                <p>Impossible å personalisere 10.000 besøkende manuelt. AI gjør det automatisk.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="why-card">
                <h3>📊 Bedre data innsikt</h3>
                <p>AI finner mønstre i kundeatferd som mennesker ville gå glipp av.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="why-card">
                <h3>💰 Redusert kostnader</h3>
                <p>Færre manuel kundesupport = lavere lønnskostnader og mer effektivitet.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Resultater fra AI integrasjon</h2>
              <p>Tall fra våre klienter</p>
            </div>
          </FadeIn>

          <StaggerContainer className="impact-grid">
            {benefits.map((benefit, idx) => (
              <StaggerItem key={idx}>
                <div className="impact-card">
                  <div className="impact-stat">{benefit.stat}</div>
                  <h3>{benefit.label}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-secondary" id="features">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>AI-funksjoner vi tilbyr</h2>
              <p>Moderne teknologi for bedre resultater</p>
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

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Hvem trenger AI på nettsiden?</h2>
              <p>Ulike brukstilfeller</p>
            </div>
          </FadeIn>

          <div className="use-cases">
            <FadeInLeft>
              <div className="use-case">
                <h3>🛍️ E-commerce</h3>
                <p>Personaliserte produktanbefalinger basert på oppførsel øker salg 30-50%.</p>
              </div>
            </FadeInLeft>
            <FadeInLeft delay={0.1}>
              <div className="use-case">
                <h3>📞 Service-bedrifter</h3>
                <p>Chatbot håndterer bokinger, fakturering og kundesupport automatisk.</p>
              </div>
            </FadeInLeft>
            <FadeInLeft delay={0.2}>
              <div className="use-case">
                <h3>📚 Content-sider</h3>
                <p>AI anbefaler relevant innhold basert på hva bruker interesserer seg for.</p>
              </div>
            </FadeInLeft>
            <FadeInLeft delay={0.3}>
              <div className="use-case">
                <h3>🎓 B2B</h3>
                <p>Chatbot hjelper prospects gjennom sales-funnel og sender qualified leads.</p>
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
              <h2>Klar for å modernisere med AI?</h2>
              <p>La oss gjøre en gratis evaluasjon av dine AI-muligheter.</p>
              <Link to="/kontakt" className="btn btn-primary btn-large">
                Start AI-konsultasjon
                <ArrowRight size={24} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default AINettsider
