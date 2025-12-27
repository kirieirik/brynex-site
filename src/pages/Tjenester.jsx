import { Link } from 'react-router-dom'
import { 
  Globe, 
  ShoppingCart, 
  Search, 
  TrendingUp, 
  Layout, 
  Rocket,
  ArrowRight
} from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import { FadeIn, StaggerContainer, StaggerItem, HeroText } from '../components/Animations'
import { useSEO } from '../hooks/useSEO'

function Tjenester() {
  useSEO({
    title: 'Tjenester',
    description: 'Se våre tjenester: Nettsider, nettbutikker, Google Business og Google Ads. Vi hjelper din bedrift å lykkes på nett.'
  })

  const services = [
    {
      icon: Globe,
      title: 'Nettsider for bedrifter',
      description: 'Profesjonelle og responsive nettsider som representerer din bedrift på best mulig måte.',
      details: [
        'Responsivt design som fungerer på alle enheter',
        'Søkemotoroptimalisert (SEO) fra bunnen av',
        'Rask lastetid og god ytelse',
        'Enkelt innholdsstyringssystem (CMS) ved behov',
        'SSL-sertifikat og sikker hosting',
        'Integrasjon med sosiale medier',
        'Kontaktskjemaer og booking-systemer',
        'Vedlikehold og support etter lansering'
      ]
    },
    {
      icon: Layout,
      title: 'Landingssider',
      description: 'Effektive landingssider designet for konvertering og målrettet markedsføring.',
      details: [
        'Optimalisert for én spesifikk handling (CTA)',
        'A/B-testing muligheter',
        'Rask oppsett og lansering',
        'Integrasjon med e-postmarkedsføring',
        'Sporingspikser for remarketing',
        'Mobiloptimalisert design',
        'Perfekt for kampanjer og produktlanseringer'
      ]
    },
    {
      icon: Rocket,
      title: 'Nettsider for klubber og foreninger',
      description: 'Brukervennlige nettsider for idrettslag, foreninger og hobbygrupper.',
      details: [
        'Medlemshåndtering og påmelding',
        'Kalender for arrangementer og treninger',
        'Nyheter og oppdateringer',
        'Bildegallerier og dokumentarkiv',
        'Enkel administrasjon for frivillige',
        'Integrasjon med betalingsløsninger',
        'Rimelige løsninger tilpasset klubbbudsjett'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Nettbutikker (E-handel)',
      description: 'Komplette e-handelsløsninger for både B2B og B2C med alle funksjoner du trenger.',
      details: [
        'B2C: Fullverdig nettbutikk for forbrukere',
        'B2B: Bedriftsportaler med kundepriser og rabatter',
        'Integrering med Klarna, Vipps, og andre betalingsløsninger',
        'Lagerstyring og ordrehåndtering',
        'Fraktkalkulator og sporingsintegrasjon',
        'Produktvarianter, størrelser og farger',
        'Kundekontoer og ønskelister',
        'Automatiske e-poster og ordrebekreftelser',
        'Rapporter og salgsstatistikk'
      ]
    },
    {
      icon: Search,
      title: 'Google Bedriftsprofil',
      description: 'Få din bedrift synlig på Google Søk og Google Maps med en optimalisert bedriftsprofil.',
      details: [
        'Oppretting og verifisering av profil',
        'Optimalisering av alle felter og kategorier',
        'Opplasting av bilder og logo',
        'Åpningstider og kontaktinformasjon',
        'Håndtering av kundeanmeldelser',
        'Innlegg og oppdateringer',
        'Innsikt og statistikk over synlighet',
        'Lokal SEO-strategi'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Google Ads',
      description: 'Målrettet annonsering på Google som gir synlighet og resultater for din bedrift.',
      details: [
        'Søkeannonsering (Search Ads)',
        'Displayannonsering med bannere',
        'Remarketing til tidligere besøkende',
        'Shopping-annonser for nettbutikker',
        'Søkeordanalyse og konkurranseanalyse',
        'A/B-testing av annonser',
        'Konverteringssporing og rapportering',
        'Løpende optimalisering og justering',
        'Månedlige rapporter med innsikt'
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <HeroText>
            <h1>Våre tjenester</h1>
          </HeroText>
          <HeroText delay={0.2}>
            <p className="page-subtitle">
              Fra enkle nettsider til komplette e-handelsløsninger – vi har ekspertisen til å realisere dine digitale ambisjoner.
            </p>
          </HeroText>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <StaggerContainer className="services-grid" staggerDelay={0.1}>
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  details={service.details}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Hvordan vi jobber</h2>
              <p>En enkel og transparent prosess fra start til mål</p>
            </div>
          </FadeIn>
          <StaggerContainer className="process-steps" staggerDelay={0.1}>
            <StaggerItem>
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Samtale</h3>
                <p>Vi starter med en uforpliktende prat for å forstå dine behov og mål.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Tilbud</h3>
                <p>Du mottar et detaljert tilbud med pris og tidsestimat.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Utvikling</h3>
                <p>Vi bygger løsningen med tett dialog og jevnlige oppdateringer.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Lansering</h3>
                <p>Vi lanserer sammen og sørger for at alt fungerer perfekt.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <FadeIn>
            <div className="cta-content">
              <h2>Fant du det du lette etter?</h2>
              <p>Ta kontakt for en uforpliktende prat om ditt prosjekt.</p>
              <Link to="/kontakt" className="btn btn-primary btn-large">
                Kontakt oss
                <ArrowRight size={20} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default Tjenester
