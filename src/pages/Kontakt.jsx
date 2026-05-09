import { Mail, Phone, MapPin } from 'lucide-react'
import { FadeInLeft, FadeInRight, HeroText } from '../components/Animations'
import { useSEO } from '../hooks/useSEO'
import StepByStepContactForm from '../components/StepByStepContactForm'

function Kontakt() {
  useSEO({
    title: 'Kontakt Brynex AS',
    description: 'Ta kontakt | Gratis konsultasjon | Uforpliktende tilbud | Nettsider, nettbutikker og Google Ads | Brynex AS | Oslo, Norge',
    canonicalPath: '/kontakt'
  })

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <HeroText>
            <h1>Kontakt oss</h1>
          </HeroText>
          <HeroText delay={0.2}>
            <p className="page-subtitle">
              Har du spørsmål eller vil diskutere et prosjekt? Vi er her for å hjelpe deg.
            </p>
          </HeroText>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <FadeInLeft>
              <div className="contact-info">
                <h2>Ta kontakt</h2>
                <p>
                  Vi setter pris på å høre fra deg. Enten du har et konkret prosjekt i tankene 
                  eller bare vil utforske mulighetene, er det bare å ta kontakt.
                </p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-icon">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4>E-post</h4>
                      <a href="mailto:post@brynex.no">post@brynex.no</a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4>Telefon</h4>
                      <a href="tel:+4746863428">+47 468 63 428</a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4>Lokasjon</h4>
                      <span>1544, Vestby, Norge</span>
                    </div>
                  </div>
                </div>

                <div className="response-time">
                  <p>
                    <strong>Svartid:</strong> Vi svarer vanligvis innen 24 timer på hverdager.
                  </p>
                </div>
              </div>
            </FadeInLeft>

            {/* Contact Form */}
            <FadeInRight>
              <div className="contact-form-wrapper">
                <StepByStepContactForm />
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>
    </>
  )
}

export default Kontakt
