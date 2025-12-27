import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { FadeInLeft, FadeInRight, HeroText } from '../components/Animations'
import { useSEO } from '../hooks/useSEO'

function Kontakt() {
  useSEO({
    title: 'Kontakt',
    description: 'Ta kontakt med Brynex AS for et uforpliktende tilbud. Vi hjelper deg med nettsider, nettbutikker og digital markedsføring.'
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send to Formspree - erstatt YOUR_FORM_ID med din Formspree ID
      const response = await fetch('https://formspree.io/f/xqekpvvd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message
        })
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('Noe gikk galt. Prøv igjen eller send e-post direkte.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Noe gikk galt. Prøv igjen eller send e-post direkte.')
    }
    
    setIsSubmitting(false)
  }

  const services = [
    'Nettside for bedrift',
    'Landingsside',
    'Nettside for klubb/forening',
    'Nettbutikk (B2C)',
    'Nettbutikk (B2B)',
    'Google Bedriftsprofil',
    'Google Ads',
    'Annet'
  ]

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
              {isSubmitted ? (
                <div className="form-success">
                  <CheckCircle size={64} />
                  <h3>Takk for din henvendelse!</h3>
                  <p>Vi har mottatt meldingen din og vil ta kontakt så snart som mulig.</p>
                  <button 
                    className="btn btn-outline"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: '',
                        message: ''
                      })
                    }}
                  >
                    Send ny melding
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3>Send oss en melding</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Navn *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ditt navn"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">E-post *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="din@epost.no"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Telefon</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+47 000 00 000"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company">Bedrift / Organisasjon</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Navn på bedrift"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Hva er du interessert i?</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Velg en tjeneste</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Melding *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Fortell oss om ditt prosjekt eller spørsmål..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-large"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sender...' : 'Send melding'}
                    {!isSubmitting && <Send size={20} />}
                  </button>
                </form>
              )}
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>
    </>
  )
}

export default Kontakt
