import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Target, 
  Users, 
  Lightbulb, 
  Heart,
  CheckCircle,
  Code,
  Palette,
  Rocket
} from 'lucide-react'
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, HeroText } from '../components/Animations'

function OmOss() {
  const values = [
    {
      icon: Target,
      title: 'Kvalitet',
      description: 'Vi leverer aldri halvveis. Hver løsning er gjennomtenkt og bygget for å vare.'
    },
    {
      icon: Users,
      title: 'Samarbeid',
      description: 'Du er med i prosessen hele veien. Din visjon er vår prioritet.'
    },
    {
      icon: Lightbulb,
      title: 'Innovasjon',
      description: 'Vi holder oss oppdatert på de nyeste teknologiene og trendene.'
    },
    {
      icon: Heart,
      title: 'Engasjement',
      description: 'Vi brenner for det vi gjør, og det vises i resultatene.'
    }
  ]

  const skills = [
    { icon: Code, name: 'Webutvikling', items: ['React', 'Next.js', 'WordPress', 'WooCommerce'] },
    { icon: Palette, name: 'Design', items: ['UI/UX', 'Responsivt design', 'Branding'] },
    { icon: Rocket, name: 'Markedsføring', items: ['SEO', 'Google Ads', 'Analytics'] }
  ]

  const timeline = [
    { year: '2024', title: 'Oppstart', description: 'Brynex AS ble grunnlagt med en visjon om å gjøre profesjonell webutvikling tilgjengelig for alle.' },
    { year: '2024', title: 'Første kunder', description: 'Leverte våre første prosjekter og bygget et solid fundament av fornøyde kunder.' },
    { year: '2025', title: 'Vekst', description: 'Utvidet tjenestetilbudet til å inkludere e-handel, Google Business og digital markedsføring.' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero about-hero">
        <div className="container">
          <HeroText>
            <h1>Om Brynex</h1>
          </HeroText>
          <HeroText delay={0.2}>
            <p className="page-subtitle">
              Vi er lidenskapelig opptatt av å hjelpe bedrifter med å lykkes digitalt. 
              Bli kjent med hvem vi er og hva vi står for.
            </p>
          </HeroText>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <FadeInLeft className="story-content">
              <h2>Historien vår</h2>
              <p>
                Brynex AS ble startet med en enkel idé: å gjøre profesjonell webutvikling 
                tilgjengelig for alle – uansett størrelse på bedrift eller budsjett.
              </p>
              <p>
                Vi så at mange små og mellomstore bedrifter slet med å finne pålitelige 
                partnere som kunne levere kvalitetsløsninger uten å ta seg betalt som de 
                store byråene. Det ønsket vi å endre på.
              </p>
              <p>
                I dag hjelper vi bedrifter, klubber og hobbyister over hele Norge med 
                alt fra enkle nettsider til komplette e-handelsløsninger. Vi er stolte 
                av hver eneste kunde vi har fått lov til å hjelpe.
              </p>
            </FadeInLeft>
            <FadeInRight className="story-image">
              <div className="story-image-placeholder">
                <div className="placeholder-content">
                  <span className="placeholder-icon">🚀</span>
                  <span>Brynex AS</span>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Våre verdier</h2>
              <p>Dette er grunnpilarene som styrer alt vi gjør</p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="values-grid" staggerDelay={0.1}>
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="value-card">
                  <div className="value-icon">
                    <value.icon size={28} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-skills">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Vår ekspertise</h2>
              <p>Vi kombinerer teknisk kompetanse med kreativitet</p>
            </div>
          </FadeIn>

          <StaggerContainer className="skills-grid" staggerDelay={0.15}>
            {skills.map((skill, index) => (
              <StaggerItem key={index}>
                <div className="skill-card">
                  <div className="skill-icon">
                    <skill.icon size={32} />
                  </div>
                  <h3>{skill.name}</h3>
                  <ul>
                    {skill.items.map((item, i) => (
                      <li key={i}>
                        <CheckCircle size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Vår reise</h2>
              <p>Fra idé til virkelighet</p>
            </div>
          </FadeIn>

          <div className="timeline">
            {timeline.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <span className="timeline-year">{item.year}</span>
                  </div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
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
              <h2>La oss jobbe sammen</h2>
              <p>Har du et prosjekt i tankene? Vi vil gjerne høre fra deg.</p>
              <Link to="/kontakt" className="btn btn-primary btn-large">
                Ta kontakt
                <ArrowRight size={20} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default OmOss
